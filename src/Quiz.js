import React, { Component } from "react";
import "./Quiz.css";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "Choose..."
    };
    this.answerHandler = this.answerHandler.bind(this);
  }

  answerHandler(event) {
    console.log("Because");
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    console.log(this.state.answer);
  }

  render() {
    return (
      <span className="quizArea">
        <a className="quizCard">
          <span>Trial</span>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row align-items-center">
              <div className="col-auto my-1">
                <label
                  className="mr-sm-2 sr-only"
                  htmlFor="inlineFormCustomSelect"
                >
                  Preference
                </label>
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option>{this.state.answer}</option>
                  <option value="1" onChange={this.answerHandler.bind(1)}>
                    Very Inaccurate
                  </option>
                  <option value="2" onChange={this.answerHandler.bind(2)}>
                    Moderate Inaccurate
                  </option>
                  <option value="3" onChange={this.answerHandler.bind(3)}>
                    Nutrual
                  </option>
                  <option value="4" onChange={this.answerHandler.bind(4)}>
                    Moderately Accurate
                  </option>
                  <option value="5" onChange={this.answerHandler.bind(5)}>
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
}

export default Quiz;
