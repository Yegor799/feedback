import { useState } from 'react';
import Statistics from '../Statistics/Statistics';

export default function FeedbackCounter() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodIncrement = () => {
        setGood(prevState => prevState + 1);
    }

    const handleNeutralIncrement = () => {
        setNeutral(prevState => prevState + 1);
    }

    const handleBadIncrement = () => {
        setBad(prevState => prevState + 1);
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good * 100 / countTotalFeedback());
    }

    


    return (
        <>
            <h1>Please leave feedback</h1>
            <div>
                <button type="button" onClick={handleGoodIncrement}>good</button>
                <button type="button" onClick={handleNeutralIncrement}>neutral</button>
                <button type="button" onClick={handleBadIncrement}>bad</button>
            </div>
            <h2>Statistics</h2>

            {countTotalFeedback() === 0
                ? <h2>No feedback given</h2>
                : <Statistics
                good={good}
                neutral={neutral}
                bad={bad} total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />}  
        </>
    )
}