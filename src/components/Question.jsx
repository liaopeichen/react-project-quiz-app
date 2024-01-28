import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({
  questionText,
  questionAnswers,
  answerState,
  selectedAnswer,
  onSelectAnswer,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={15000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={questionAnswers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}
