import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Side_menu from '../../Components/Side_menu'

function  Contact_us() {
  let Navigate = useNavigate()
  return (
    <>
  {/* =====  LODER  ===== */}
  {/* <div className="loder" /> */}
  <div className="wrapper">
    {/* =====  HEADER START  ===== */}
    <Header />
    {/* =====  HEADER END  ===== */}
    {/* =====  CONTAINER START  ===== */}
    <div className="container">
      <div className="row ">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 hidden-xs">
          <Side_menu />
          <div className="left_banner left-sidebar-widget mt_30 mb_40"> <a href="#"><img src="images/left1.jpg" alt="Left Banner" className="img-responsive" /></a> </div>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {/*  Contact_us  */}
          <div className="row">
            <div className="col-md-4 col-xs-12  Contact_us">
              <div className="location mb_50">
                <h5 className="capitalize mb_20">Our Location</h5>
                <div className="address">Office address
                  <br /> 124,Lorem Ipsum has been
                  <br /> text ever since the 1500</div>
                <div className="call mt_10"><i className="fa fa-phone" aria-hidden="true" />+91-9987-654-321</div>
              </div>
              <div className="Career mb_50">
                <h5 className="capitalize mb_20">Careers</h5>
                <div className="address">dummy text ever since the 1500s, simply dummy text of the typesetting industry. </div>
                <div className="email mt_10"><i className="fa fa-envelope" aria-hidden="true" /><a href="mailto:careers@yourdomain.com" target="_top">careers@yourdomain.com</a></div>
              </div>
              <div className="Hello mb_50">
                <h5 className="capitalize mb_20">Say Hello</h5>
                <div className="address">simply dummy text of the printing and typesetting industry.</div>
                <div className="email mt_10"><i className="fa fa-envelope" aria-hidden="true" /><a href="mailto:info@yourdomailname.com" target="_top">info@yourdomailname.com</a></div>
              </div>
            </div>
            <div className="col-md-8 col-xs-12  Contact_us-form mb_50">
              {/*  Contact_us FORM */}
              <div id=" Contact_us_form">
                <form id=" Contact_us_body" method="post" action="http://html.lionode.com/healthcare/hc001/ Contact_us_me.php">
                  {/*                                <label class="full-with-form" ><span>Name</span></label>
*/}
                  <input className="full-with-form " type="text" name="name" placeholder="Name" data-required="true" />
                  {/*                <label class="full-with-form" ><span>Email Address</span></label>
*/}
                  <input className="full-with-form  mt_30" type="email" name="email" placeholder="Email Address" data-required="true" />
                  {/*                <label class="full-with-form" ><span>Phone Number</span></label>
*/}
                  <input className="full-with-form  mt_30" type="text" name="phone1" placeholder="Phone Number" maxLength={15} data-required="true" />
                  {/*                <label class="full-with-form" ><span>Subject</span></label>
*/}
                  <input className="full-with-form  mt_30" type="text" name="subject" placeholder="Subject" data-required="true" />
                  {/*                                <label class="full-with-form" ><span>Attachment</span></label>
*/}
                  {/*                                <label class="full-with-form" ><span>Message</span></label>
*/}
                  <textarea className="full-with-form  mt_30" name="message" placeholder="Message" data-required="true" defaultValue={""} />
                  <button className="btn mt_30" type="submit">Send Message</button>
                </form>
                <div id=" Contact_us_results" />
              </div>
              {/* END  Contact_us FORM */}
            </div>
          </div>
          {/* map  */}
          <div className="row">
            <div className="col-xs-12 map mb_80">
              <div id="map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Single Blog  */}
  {/* End Blog   */}
  {/* =====  CONTAINER END  ===== */}
  {/* =====  FOOTER START  ===== */}
  <Footer />
  {/* =====  FOOTER END  ===== */}
  <a id="scrollup">Scroll</a>
</>

  )
}

export default  Contact_us
