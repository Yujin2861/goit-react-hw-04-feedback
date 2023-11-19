import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

export const Feedback = ({ options, leaveFeedback }) => (
  <div className={s.feedback__container}> 
    {options.map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={leaveFeedback}
      className={s.feedback__btn}
    >
        {option}
    </button>
  ))}
  </div>
);

Feedback.propTypes = {
    options: PropTypes.array.isRequired,
    leaveFeedback: PropTypes.func.isRequired,
}