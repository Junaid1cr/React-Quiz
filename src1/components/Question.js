import Option from "./Option";
import { useQuestion } from "./Context";
function Question() {
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
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
