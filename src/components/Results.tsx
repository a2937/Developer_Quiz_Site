import React, { MouseEventHandler } from "react";
import ResultsModal from "./ResultsByCategoryModal";

const Results: React.FC<{
  points: number;
  totalPoints: number;
  resetQuiz: MouseEventHandler<HTMLButtonElement>;
  hideResultsBreakdown: MouseEventHandler;
  generalQuestionsCorrect: number;
  cssQuestionsCorrect: number;
  agileQuestionsCorrect: number;
  accessibilityQuestionsCorrect: number;
  show: boolean;
}> = ({
  points,
  totalPoints,
  resetQuiz,
  hideResultsBreakdown,
  generalQuestionsCorrect,
  cssQuestionsCorrect,
  agileQuestionsCorrect,
  accessibilityQuestionsCorrect,
  show
}) => {
  const totalPercentageCorrect = (Math.floor(points) / totalPoints) * 100;
  const tweetMessage = `http://twitter.com/intent/tweet?text=I just scored ${totalPercentageCorrect}%25 on developerquiz.org. Wanna try it for yourself?&hashtags=freecodecamp`;
  return (
    <div className='results-div'>
      <h1 className='results-heading'>Results</h1>
      <h2>
        {points === totalPoints ? "Wow! Perfect Score!" : "You received"}{" "}
        {points} out of {totalPoints} points
      </h2>
      <p className='results-text'>
        Wanna learn how to code? Download the free:&nbsp;
        <a
          className='results-rpg-link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.freecodecamp.org/news/learn-to-code-rpg/'
        >
          RPG game
        </a>
      </p>
      <ResultsModal
        allEarnedPoints={points}
        allPossiblePoints={totalPoints}
        agilePoints={agileQuestionsCorrect}
        accessibilityPoints={accessibilityQuestionsCorrect}
        cssPoints={cssQuestionsCorrect}
        generalPoints={generalQuestionsCorrect}
        show={show}
        hideResultsBreakdown={hideResultsBreakdown}
      />

      <button onClick={resetQuiz} className='results-btn'>
        Play again?
      </button>

      {totalPercentageCorrect >= 70 && (
        <a
          target='_blank'
          rel='noreferrer'
          className='results-text'
          href={tweetMessage}
        >
          <i className='fab fa-twitter' /> Tweet your quiz score
        </a>
      )}
    </div>
  );
};
export default Results;
