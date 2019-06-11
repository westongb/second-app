import React, { useState } from "react";
import "./Quiz.css";

const App = props => {
  const [state, setState] = useState({
    answer: 0
  });
};

const answerHandler = answer => {
  setState({ answer: answer });
};

function Quiz() {
  return (
    <span className="quizArea">
      <a className="quizCard">
        <span>Trial</span>
        <form>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                Preference
              </label>
              <select
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Choose...</option>
                <option value="1" onChange={answerHandler.bind(null, 1)}>
                  Very Inaccurate
                </option>
                <option value="2" onChange={answerHandler.bind(null, 2)}>
                  Moderate Inaccurate
                </option>
                <option value="3" onChange={answerHandler.bind(null, 3)}>
                  Nutrual
                </option>
                <option value="4" onChange={answerHandler.bind(null, 4)}>
                  Moderately Accurate
                </option>
                <option value="5" onChange={answerHandler.bind(null, 5)}>
                  Very Accurate
                </option>
              </select>
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </a>
    </span>
  );
}

export default Quiz;
