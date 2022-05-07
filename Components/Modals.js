import React from 'react'

function Modals() {
  return (
    <div id="subscribe-me" className="modal animated fade in" role="dialog" data-keyboard="true" tabIndex={-1}>
      <div className="newsletter-popup">
        <img className="offer" src="images/newsbg.jpg" alt="offer" />
        <div className="newsletter-popup-static newsletter-popup-top">
          <div className="popup-text">
            <div className="popup-title">50% <span>off</span></div>
            <div className="popup-desc">
              <div>Sign up and get 50% off your next Order</div>
            </div>
          </div>
          {/* <form onsubmit="return  validatpopupemail();" method="post"> */}
          <form method="post">
            <div className="form-group required">
              <input type="email" name="email-popup" id="email-popup" placeholder="Enter Your Email" className="form-control input-lg" required />
              <button type="submit" className="btn btn-default btn-lg" id="email-popup-submit">Subscribe</button>
              <label className="checkme">
                <input type="checkbox" defaultValue id="checkme" />Dont show again</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modals
