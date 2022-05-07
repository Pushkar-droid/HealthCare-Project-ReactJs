import React from 'react'

function Leave_Comment() {
  return (
    <div className="form-style" id="contact_form">
    <div id="contact_results" />
    <div className="row">
      <form id="contact_body" method="post">
        <div className="col-sm-6">
          <input
            className="full-with-form"
            type="text"
            name="name"
            placeholder="Name"
            data-required="true"
          />
        </div>
        <div className="col-sm-6">
          <input
            className="full-with-form"
            type="email"
            name="email"
            placeholder="Email Address"
            data-required="true"
          />
        </div>
        <div className="col-sm-12 mt_30">
          <textarea
            className="full-with-form"
            name="message"
            placeholder="Message"
            data-required="true"
            defaultValue={""}
          />
        </div>
        <div className="col-sm-6">
          <button className="btn mt_30" type="submit">
            Leave Comment
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Leave_Comment
