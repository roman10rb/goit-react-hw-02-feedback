import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import  FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";

 
class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = (options) => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }))
  };


  countTotalFeedback = () => {
    
   return this.state.good + this.state.neutral + this.state.bad;
  };
  
  
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  };
  
  render() {
    const total = this.countTotalFeedback();
    return (
      <div className="container">
        <Section  title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0
            ? <Notification message="There is no feedback" />
            : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage(total)}></Statistics>}
        </Section>
      </div>
    )
  }

};

export default App;