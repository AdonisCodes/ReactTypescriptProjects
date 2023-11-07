type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean | undefined;
    questionNr: number;
    totalQuestions: number;
}

export const QuestionCard = (props: QuestionCardProps) => (
    <div>
        <p className={'number'}>
            Question: {props.questionNr} / {props.totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: props.question}} />
        <div>
            {props.answers.map(answer => (
                <div key={answer}>
                    <button disabled={props.userAnswer} onClick={props.callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

// Path: src/components/QuestionCard.tsx