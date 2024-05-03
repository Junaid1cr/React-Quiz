import { useQuestion } from "./Context";
function Progress() {
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
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
