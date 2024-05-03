function Progress({ i, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={i + Number(answer !== null)} />
      <p>
        Question
        <strong>
          {i + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
