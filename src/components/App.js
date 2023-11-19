import { useState } from 'react';

import { Statistics } from './Statistics/Statistics.js';
import { Feedback } from './FeedbackOptions/FeedbackOptions.js';
import { Notification } from './Notification/Notification.js'; 
import { Section } from './Section/Section.js'; 


export const App = () => {

    const [ good, setGood] = useState(0);
    const [ neutral, setNeutral] = useState(0);
    const [ bad, setBad] = useState(0);


    const leaveFeedback = event => {
      const key = event.target.name;
      switch (key) {
        case 'good':
          setGood(good + 1);
          break;
        case 'neutral':
          setNeutral(prevValue => prevValue + 1);
          break;
        case 'bad':
          setBad(prevValue => prevValue + 1);
          break;
        default:
          break;
      }
    };

    const countTotalFeedback = () => {
      return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good * 100) / countTotalFeedback());
    }
    
    const options = ['good', 'neutral', 'bad'];
    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();

    return (
        <>
          <Section title="Please leave feedback">
            <Feedback
              options={options}
              leaveFeedback={leaveFeedback} 
              />
              { total === 0 ? (
                <Notification message="There is no feedback"></Notification>) : (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positiveFeedback}
              />)}
          </Section>
          
        </>  
      );
     }

