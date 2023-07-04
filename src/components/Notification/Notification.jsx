import PropTypes from 'prop-types';
import { P } from './Notification.styled';

const Notification = ({ message }) => <P>{message}</P>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};