import React from 'react'

function Skills() {
  return (
    <div className="col-md-6">
                  <div className="heading-part mb_20 mt_40 ">
                    <h2 className="main_title">Skills</h2>
                  </div>
                  <div id="p_line">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                      <span className="progress-type">HTML / HTML5</span>
                      <span className="progress-completed">60%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        <span className="sr-only">40% Complete (success)</span>
                      </div>
                      <span className="progress-type">ASP.Net</span>
                      <span className="progress-completed">40%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "20%" }}
                      >
                        <span className="sr-only">20% Complete (info)</span>
                      </div>
                      <span className="progress-type">Java</span>
                      <span className="progress-completed">20%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60% Complete (warning)</span>
                      </div>
                      <span className="progress-type">JavaScript / jQuery</span>
                      <span className="progress-completed">60%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span className="sr-only">80% Complete (danger)</span>
                      </div>
                      <span className="progress-type">CSS / CSS3</span>
                      <span className="progress-completed">80%</span>
                    </div>
                  </div>
                </div>
  )
}

export default Skills
