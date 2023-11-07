import React, {useState} from "react";

// import components

// import API
// import types
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
import {QuestionCard} from "./components/QuestionCard.tsx";

type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

const TOTAL_QUESTIONS = 10;

const App = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(true);

    const startTrivia = async () => {
        // Set state
        setLoading(true);
        setGameOver(false);

        // fetch data
        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

        // set state
        setQuestions(newQuestions);

        // reset state
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        // check answer
        if (gameOver) return;

        const answer = e.currentTarget.value
        const correct = questions[number].correct_answer === answer;

        // add score if answer is correct
        if (correct) setScore(prev => prev + 1);

        // save answer in the array for user answers
        const answerObject: AnswerObject = {
            question: questions[number].question,
            answer,
            correct,
            correctAnswer: questions[number].correct_answer
        }

        setUserAnswers(prev => [...prev, answerObject]);
    }

    const nextQuestion = () => {
        // move on to the next question if not the last question
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    }

  return (
      <div className='App'>
          <h1>REACT QUIZ</h1>
          {
              gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                  <button className='start' onClick={startTrivia}>
                      Start
                  </button>
              ) : null
          }

          {!gameOver ? <p className='score'>Score:</p> : null}


          {
                loading ? <p>Loading Questions...</p> : null
          }

          {!loading && !gameOver && (
              <QuestionCard
                  questionNr={number + 1}
                  totalQuestions={TOTAL_QUESTIONS}
                  question={questions[number].question}
                  answers={questions[number].answers}
                  callback={checkAnswer}
                  userAnswer={userAnswers && userAnswers[number]}
              />
          )}

          {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
              <button className='next' onClick={nextQuestion}>
                  Next Question
              </button>
          ) : null}
      </div>
  )
}

export default App
