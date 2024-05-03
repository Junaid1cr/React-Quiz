import { useQuestion } from "./Context";

function Finished() {
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
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        Your scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
