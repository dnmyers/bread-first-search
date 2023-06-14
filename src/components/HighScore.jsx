import React from 'react';

import { highScores } from '../highScoreData';

import styles from './HighScore.module.css';

const HighScore = () => {
  return (
    <div className={styles.highScoreWrapper}>
        <div className={styles.highScoreTop}>
            <h1>High Scores</h1>
        </div>
        <div className={styles.highScoreBottom}>
            <div className={styles.highScoreContainer}>
                <h3 className={styles.highScoreHeader}>Username</h3>
                <h3 className={styles.highScoreHeader}>Date</h3>
                <h3 className={styles.highScoreHeader}>Score</h3>
                {
                    highScores.map((score) => (
                        <>
                            <div className={styles.item}>{score.username}</div>
                            <div className={styles.item}>{score.date}</div>
                            <div className={styles.item}>{score.score}</div>
                        </>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default HighScore;