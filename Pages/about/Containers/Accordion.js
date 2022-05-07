import React from "react";

function Accordion() {
  return (
    <div className="panel-group" id="accordion">
      <div className="panel panel-default pull-left">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseOne"
            >
              1. What is HTML?
            </a>
          </h4>
        </div>
        <div id="collapseOne" className="panel-collapse collapse in">
          <div className="panel-body">
            <p>
              HTML is a computer language devised to allow website creation.
              These websites can then be viewed by anyone else connected to the
              Internet. It is relatively easy to learn, with the basics being
              accessible.
            </p>
          </div>
        </div>
      </div>
      <div className="panel panel-default pull-left">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseTwo"
            >
              2. What is Bootstrap?
            </a>
          </h4>
        </div>
        <div id="collapseTwo" className="panel-collapse collapse">
          <div className="panel-body">
            <p>
              Bootstrap is the most popular HTML, CSS, and JS framework for
              developing responsive, mobile first projects on the web. When I
              discovered Bootstrap a few years ago, responsive design was still
              gaining in popularity, addition to HTML, CSS and JS.
            </p>
          </div>
        </div>
      </div>
      <div className="panel panel-default pull-left">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseThree"
            >
              3. What is CSS?
            </a>
          </h4>
        </div>
        <div id="collapseThree" className="panel-collapse collapse">
          <div className="panel-body">
            <p>
              Cascading Style Sheets, fondly referred to as CSS, is a simple
              design language intended to simplify the process of making web
              pages presentable.CSS handles the look and feel part of a web
              page. Using CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
