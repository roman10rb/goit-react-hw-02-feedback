import css from './FeedbackOptions.module.css'
import shortid from "shortid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    

    return (
            <div className={css.fetbackContainer}>
            {Object.keys(options).map((value) => (
                <button onClick={() =>  onLeaveFeedback(value)}  key={shortid.generate()}>{[value]}</button>
                    ))}
            </div>
        )
}
  

export default FeedbackOptions; 