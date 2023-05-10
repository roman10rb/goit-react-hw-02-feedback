import css from './FeedbackOptions.module.css'
import shortid from "shortid";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    

    return (
            <div className={css.fetbackContainer}>
            {Object.keys(options).map((value) => (
                <button onClick={() =>  onLeaveFeedback(value)}  key={shortid.generate()}>{[value]}</button>
                    ))}
            </div>
        )
}
FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired,
}
  

export default FeedbackOptions; 