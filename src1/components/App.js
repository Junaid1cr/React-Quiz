import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";

import Error from "./Error";
import Question from "./Question";
import { useEffect, useReducer } from "react";
import StartScreen from "./startScreen";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finished from "./Finished";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuestion } from "./Context";
export default function App() {
  const {
    question,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = useQuestion();
  return (
    <div className="App">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <Finished />}
      </Main>
    </div>
  );
}
