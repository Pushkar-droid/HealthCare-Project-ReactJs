import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Side_menu from '../../Components/Side_menu';

function Login() {
  let Navigate = useNavigate();
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
          {/* contact  */}
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel-login">
                <div className="panel-heading">
                  <div className="row mb_20">
                    <div className="col-xs-6">
                      <a href="#" className="active" id="login-form-link">Login</a>
                    </div>
                    <div className="col-xs-6">
                      <a href="#" id="register-form-link">Register</a>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form id="login-form" action="#" method="post">
                        <div className="form-group">
                          <input type="text" name="username" id="username1" tabIndex={1} className="form-control" placeholder="Username" defaultValue />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group text-center">
                          <input type="checkbox" tabIndex={3} name="remember" id="remember" />
                          <label htmlFor="remember"> Remember Me</label>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input type="submit" name="login-submit" id="login-submit" tabIndex={4} className="form-control btn btn-login" defaultValue="Log In" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="text-center">
                                <a href="#" tabIndex={5} className="forgot-password">Forgot Password?</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <form id="register-form" action="#" method="post">
                        <div className="form-group">
                          <input type="text" name="username" id="username" tabIndex={1} className="form-control" placeholder="Username" defaultValue />
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Email Address" defaultValue />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password2" tabIndex={2} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input type="submit" name="register-submit" id="register-submit" tabIndex={4} className="form-control btn btn-register" defaultValue="Register Now" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
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

export default Login
