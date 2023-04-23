import { useState } from "react";
import "./App.css";

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value}
        {props.text === "positive" ? " %" : ""}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  if (good + neutral + bad == 0) return <p>No feedback given</p>;
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

const MyButton = (props) => {
  const handleClick = () => {
    props.onButtonClick();
  };
  return (
    <>
      <button onClick={handleClick}>{props.text}</button>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleSetGood() {
    setGood(good + 1);
  }
  function handleSetNeutral() {
    setNeutral(neutral + 1);
  }
  function handleSetBad() {
    setBad(bad + 1);
  }

  return (
    <div className="container">
      <h1>give feedback</h1>
      <MyButton text="good" onButtonClick={handleSetGood} />
      <MyButton text="neutral" onButtonClick={handleSetNeutral} />
      <MyButton text="bad" onButtonClick={handleSetBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
