import React from "react";

function Scheduler() {
    return (
        <div className="limiter">
        <div className="register-heading sectionHeading participants">
          <h1 style={{ fontSize: "2em" }}>Schedule</h1>
          <br />
          <br />
        </div>
        <div className="container-table100" style={{ paddingBottom: "10px" }}>
          <div className="wrap-table100" style={{ overflowY: "unset" }}>
            <h2>Dignitary Talks</h2>
            <div className="table">
              <div className="header-table">
                <div className="cell">Time</div>
                <div className="cell">Speakers</div>
              </div>
              <div className="row-table">
                <div className="cell">11:30 am</div>
                <div className="cell">
                  PROF. SHANKAR SUBRAMANIAM<br/>
                  University of California, San Diego
                </div>
              </div>
              <div className="row-table">
                <div className="cell">02:00 pm</div>
                <div className="cell">
                    PROF. NOEL BUCKLEY<br/>
                    University of Oxford
                </div>
              </div>
              <div className="row-table">
                <div className="cell">03:30 pm</div>
                <div className="cell">
                    PROF. ANANTH GRAMA<br/>
                    Purdue University
                </div>
              </div>
              <div className="row-table">
                <div className="cell">05:00 pm</div>
                <div className="cell">
                  PROF. RAJESH GUPTA<br/>
                  University of California, San Diego
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------Second Table--------------- */}
        <div className="container-table100">
          <div className="wrap-table100" style={{ overflowY: "unset" }}>
            <h2>Brain Storming Session</h2>
            <div className="table">
              <div className="header-table">
                <div className="cell">Time</div>
                <div className="cell">Panelists</div>
              </div>
              <div className="row-table">
                <div className="cell">
                    06:00 - &nbsp;&nbsp;&nbsp;<br/>
                    07:30 pm
                </div>
                <div className="cell">
                  PROF. K. K. PANT<br/>
                  <i>Director</i>, Indian Institute of Technology Roorkee<br/><br/>

                  DR. AKHILESH GUPTA<br/>
                  <i>Senior Advisor</i>, Department of Science and Technology (DST)<br/><br/>

                  DR. THOMAS BOVING<br/>
                  University of Rhode Island<br/><br/>

                  PROF. BULENT TEZKAN<br/>
                  University of Cologne<br/><br/>

                  PROF. FRAYA FREHSE<br/>
                  University of São Paulo<br/><br/>

                  DR. SUKUMAR NATARAJAN<br/>
                  University of Bath
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Scheduler;
