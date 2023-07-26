import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';
import PropTypes from "prop-types";

function LinkButton({to, text}) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.node,
  text: PropTypes.node,
};

export default LinkButton