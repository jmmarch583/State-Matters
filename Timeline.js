import React from 'react';
import Bill from './Bill.js';
import $ from "jquery";
import jquery from 'jquery';
import IScroll from 'fullpage.js';
import fullpage from 'fullpage.js';
import setupListeners from './timeline_fcns';



class Timeline extends React.Component {

  constructor() {
    super();
  }


  componentDidUpdate() {


  }

  render() {
    let {bills} = this.props
    return(
      <div id="timelineboi">
        <section className="intro">
          <div className="container">
            <h1>Vertical Timeline &darr;</h1>
          </div>
        </section>

        <section className="filter-tabs">
          <div className="all-bills">
          </div>
        </section>

        <section className="timeline">
          <ul>
            {bills.map((bill, idx) => <Bill data={bill} key={idx} supaKey={idx} othaSupaKey={idx+1000} />)}
          </ul>
        </section>
      </div>
    )
  }
}

export default Timeline;
