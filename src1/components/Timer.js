import { useEffect } from "react";
import { useQuestion } from "./Context";
function Timer() {
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
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds}
      {seconds < 10 && "0"}
    </div>
  );
}

export default Timer;
