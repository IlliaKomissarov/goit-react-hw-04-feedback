import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <Btn type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </Btn>
    <Btn type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </Btn>
    <Btn type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </Btn>
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};