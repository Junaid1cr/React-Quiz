import { useQuestion } from "./Context";
function Option() {
  const {
    question,
    status,
    index,
    answer,
    points,
    highscore,
    dispatch,
    secondsRemaining,
    numQuestions,
    maxPossiblePoints,
  } = useQuestion();
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((o, i) => (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={o}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Option;
