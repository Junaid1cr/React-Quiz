import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const initialState = {
  question: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};
const secsperques = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.question.length * secsperques,
      };
    case "newAnswer":
      const ques = state.question.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === ques.correctOption
            ? state.points + ques.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...state,
        index: 0,
        status: "active",
        answer: null,
        points: 0,
        secondsRemaining: state.question.length * secsperques,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action is Unknown");
  }
}

function QuizProvider({ children }) {
  const [
    { question, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = question.length;
  const maxPossiblePoints = question.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  function restart() {
    dispatch({ type: "restart" });
  }
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((e) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <QuizContext
      value={{
        question,
        status,
        index,
        answer,
        points,
        highscore,
        restart,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext>
  );
}

function useQuestion() {
  const x = useContext(QuizContext);
  return x;
}

export { useQuestion, QuizProvider };
