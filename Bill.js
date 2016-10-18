import React from 'react';
import setupListeners from './timeline_fcns.js';
import $ from "jquery";
import {IScroll} from 'fullpage.js';
import fullpage from 'fullpage.js';


class Bill extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    debugger;
    $.fn.fullpage.reBuild();
    $.fn.fullpage.setAutoScrolling(false);
    $.fn.fullpage.setFitToSection(false);
    let {year, title, yay, nay, repDecision, summary} = this.props.data
    setupListeners();

    Chart.defaults.global.defaultFontColor = "white";

    var data = {
      labels: [
        "Yay",
        "Nay"
      ],
      datasets: [
        {
          data: [yay, nay],
          backgroundColor: [
            "red",
            "blue"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }
      ]
    };

    let pieChart = new Chart(this.refs.chart, {
      type: "pie",
      data: data
    });
  }

  componentDidUpdate() {
    $("#chartArea").remove();
    $(".hover-box").append("<p id='chartArea'><canvas ref='chart' className='voteChart' id={supaKey}></canvas></p>");

    let {year, title, yay, nay, repDecision, summary} = this.props.data
    Chart.defaults.global.defaultFontColor = "white";

    var data = {
      labels: [
        "Yay",
        "Nay"
      ],
      datasets: [
        {
          data: [yay, nay],
          backgroundColor: [
            "red",
            "blue"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }
      ]
    };

    let pieChart = new Chart(this.refs.chart, {
      type: "pie",
      data: data
    });
  }



  render() {
    let {year, title, yay, nay, senatorDecision, summary, status, date} = this.props.data
    let {supaKey, othaSupaKey} = this.props
    return(
      <li id={othaSupaKey}>
        <div className="big-box">
          <p>TITLE: {title}</p>
          <p>YOUR SENATORS DECISION: {senatorDecision}</p>
          <p>HOVER FOR MORE INFO</p>
          <div className="hover-box">
            <p>SUMMARY: {summary}</p>
            <p>YAY: {yay}</p>
            <p>NAY: {nay}</p>
            <p>STATUS: {status}</p>
            <p>ACTION DATE: {date}</p>
            <p id="chartArea"><canvas ref="chart" className="voteChart" id={supaKey}></canvas></p>
          </div>
        </div>
      </li>

    )
  }
}




export default Bill;
