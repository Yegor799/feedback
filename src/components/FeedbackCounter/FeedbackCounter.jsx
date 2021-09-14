import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

export default function FeedbackCounter() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const feedbacks = { good, neutral, bad };  

   
    const handleFeedbackIncrement = type => {
        switch (type) {
            case 'good':
               setGood(prevState => prevState + 1); 
                break;
            
            case 'neutral':
               setNeutral(prevState => prevState + 1); 
                break;
            
            case 'bad':
               setBad(prevState => prevState + 1); 
                break;
        
            default:
                break;
        }
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

            <FeedbackOptions options={Object.keys(feedbacks)} onLeaveFeedback={handleFeedbackIncrement}/>
            
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