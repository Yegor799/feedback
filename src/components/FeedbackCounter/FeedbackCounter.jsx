import s from './FeedbackCounter.module.css';
import { useState } from 'react';

export default function FeedbackCounter() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <h1>Please leave feedback</h1>
    )
}