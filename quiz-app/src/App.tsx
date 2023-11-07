import React, {useState} from "react";

// import components
import {QuestionCard} from "./components/QuestionCard";

// import API
import {fetchQuizQuestions} from "./API";

// import types
import {Difficulty} from "./API";



const TOTAL_QUESTIONS = 10;

const App = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [questions, setQuestions] = useState<any[]>([]);
    const [number, setNumber] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<any[]>([]);
    const [score, setScore] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(true);

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

    const startTrivia = async () => {
        // fetch data
        // start the quiz
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        // check answer
        // move on to the next question if not the last question
    }

    const nextQuestion = () => {
        // move on to the next question if not the last question
    }

  return (
      <div className='App'>
          <h1>REACT QUIZ</h1>
          <button className='start' onClick={startTrivia}>
                Start
          </button>

          <p className='score'>Score:</p>
          <p>Loading Questions ...</p>
          {/*<QuestionCard*/}
          {/*    questionNr={number + 1}*/}
          {/*    totalQuestions={TOTAL_QUESTIONS}*/}
          {/*    question={questions[number].question}*/}
          {/*    answers={questions[number].answers}*/}
          {/*    callback={checkAnswer}*/}
          {/*    userAnswer={userAnswers ? userAnswers[number] : undefined}*/}
          {/*/>*/}
            <button className='next' onClick={nextQuestion}>
                Next Question
            </button>
      </div>
  )
}

export default App
