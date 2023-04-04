import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css'

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFidback = this.countTotalFeedback();
    return good ? Math.round((good / totalFidback) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Coffee shop "Expresso"</h1>
        <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        </Section>
        <Section title='Statistics'>
        {this.countTotalFeedback() ? <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onTotal={this.countTotalFeedback()}
          onPositivePercentage={this.countPositiveFeedbackPercentage()}
        /> : <Notification message='There is no feedback'/>}
        
        </Section>
      </div>
    );
  }
}

export default App;
