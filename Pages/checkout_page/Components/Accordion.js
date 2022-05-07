import React from 'react'
import Location_Select from './Location_Select'

function Accordion() {
    let ar = [1,2]
  return (
      <>
    <div className="panel-group mt_20" id="accordion">
            <div className="panel panel-default  ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Step 1: Checkout Options <i className="fa fa-caret-down" /></a></h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <h3>New Customer</h3>
                      <p>Checkout Options:</p>
                      <div className="radio">
                        <label>
                          <input type="radio" defaultChecked="checked" defaultValue="register" name="account" /> Register Account</label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" defaultValue="guest" name="account" /> Guest Checkout</label>
                      </div>
                      <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                      <input type="button" className="btn mt_20" data-loading-text="Loading..." id="button-account" defaultValue="Continue" />
                    </div>
                    <div className="col-sm-6">
                      <h3>Returning Customer</h3>
                      <p>I am a returning customer</p>
                      <div className="form-group">
                        <label htmlFor="input-email" className="control-label">E-Mail</label>
                        <input type="text" className="form-control" id="input-email" placeholder="E-Mail" defaultValue name="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-password" className="control-label">Password</label>
                        <input type="password" className="form-control" id="input-password" placeholder="Password" defaultValue name="password" />
                        <input type="button" className="btn mt_20" data-loading-text="Loading..." id="button-login" defaultValue="Login" />
                        <a className="pt_30" href="#">Forgotten Password</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Step 2: Billing Details <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                  <form className="form-horizontal">
                    <div className="radio">
                      <label>
                        <input type="radio" defaultChecked="checked" defaultValue="existing" name="payment_address" data-id="payment-existing" /> I want to use an existing address</label>
                    </div>
                    <div id="payment-existing">
                      <select className="form-control" name="address_id">
                        <option  select="selected" value={4}>dasd, adsasd, Al Hasakah, Syrian Arab Republic</option>
                      </select>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" defaultValue="new" name="payment_address" data-id="payment-new" /> I want to use a new address</label>
                    </div>
                    <br />
                    <div id="payment-new" style={{display: 'none'}}>
                      <div className="form-group required">
                        <label htmlFor="input-payment-firstname" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-firstname" placeholder="First Name" defaultValue name="firstname" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-lastname" placeholder="Last Name" defaultValue name="lastname" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-payment-company" className="col-sm-2 control-label">Company</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-company" placeholder="Company" defaultValue name="company" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-address-1" className="col-sm-2 control-label">Address 1</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-address-1" placeholder="Address 1" defaultValue name="address_1" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-payment-address-2" className="col-sm-2 control-label">Address 2</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-address-2" placeholder="Address 2" defaultValue name="address_2" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-payment-city" className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-city" placeholder="City" defaultValue name="city" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-payment-postcode" className="col-sm-2 control-label">Post Code</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-payment-postcode" placeholder="Post Code" defaultValue name="postcode" />
                        </div>
                      </div>
                      <Location_Select />
                    </div>
                    <div className="buttons clearfix">
                      <div className="pull-right">
                        <input type="button" className="btn" data-loading-text="Loading..." id="button-payment-address" defaultValue="Continue" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Step 3: Delivery Details <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                  <form className="form-horizontal">
                    <div className="radio">
                      <label>
                        <input type="radio" defaultChecked="checked" defaultValue="existing" name="shipping_address" /> I want to use an existing address</label>
                    </div>
                    <div id="shipping-existing">
                      <select className="form-control" name="address_id">
                        <option  select="selected" value={4}>adsasd, Al Hasakah, Syrian Arab Republic</option>
                      </select>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" defaultValue="new" name="shipping_address" /> I want to use a new address</label>
                    </div>
                    <br />
                    <div id="shipping-new" style={{display: 'none'}}>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-firstname" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-firstname" placeholder="First Name" defaultValue name="firstname" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-lastname" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-lastname" placeholder="Last Name" defaultValue name="lastname" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-shipping-company" className="col-sm-2 control-label">Company</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-company" placeholder="Company" defaultValue name="company" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-address-1" className="col-sm-2 control-label">Address 1</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-address-1" placeholder="Address 1" defaultValue name="address_1" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-shipping-address-2" className="col-sm-2 control-label">Address 2</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-address-2" placeholder="Address 2" defaultValue name="address_2" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <label htmlFor="input-shipping-city" className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-city" placeholder="City" defaultValue name="city" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="input-shipping-postcode" className="col-sm-2 control-label">Post Code</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="input-shipping-postcode" placeholder="Post Code" defaultValue={123456} name="postcode" />
                        </div>
                      </div>
                      <Location_Select />
                    </div>
                    <div className="buttons clearfix">
                      <div className="pull-right">
                        <input type="button" className="btn" data-loading-text="Loading..." id="button-shipping-address" defaultValue="Continue" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsefour">Step 4: Delivery Method  <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapsefour" className="panel-collapse collapse">
                <div className="panel-body">
                  <p>Please select the preferred shipping method to use on this order.</p>
                  <p><strong>Flat Rate</strong></p>
                  <div className="radio">
                    <label>
                      <input type="radio" defaultChecked="checked" defaultValue="flat.flat" name="shipping_method" /> Flat Shipping Rate - $5.00</label>
                  </div>
                  <p><strong>Add Comments About Your Order</strong></p>
                  <p>
                    <textarea className="form-control" rows={8} name="comment" defaultValue={""} />
                  </p>
                  <div className="buttons">
                    <div className="pull-right">
                      <input type="button" className="btn mt_20" data-loading-text="Loading..." id="button-shipping-method" defaultValue="Continue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsefive">Step 5: Payment Method  <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapsefive" className="panel-collapse collapse">
                <div className="panel-body">
                  <p>Please select the preferred payment method to use on this order.</p>
                  <div className="radio">
                    <label>
                      <input type="radio" defaultChecked="checked" defaultValue="cod" name="payment_method" /> Cash On Delivery </label>
                  </div>
                  <p><strong>Add Comments About Your Order</strong></p>
                  <p>
                    <textarea className="form-control" rows={8} name="comment" defaultValue={""} />
                  </p>
                  <div className="buttons">
                    <div className="pull-right mt_20">I have read and agree to the <a className="agree" href="#"><b>Terms &amp; Conditions</b></a>
                      <input type="checkbox" defaultValue={1} name="agree" /> &nbsp;
                      <input type="button" className="btn" data-loading-text="Loading..." id="button-payment-method" defaultValue="Continue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapsesix">Step 6: Confirm Order <i className="fa fa-caret-down" /></a> </h4>
              </div>
              <div id="collapsesix" className="panel-collapse collapse">
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <td className="text-left">Product Name</td>
                          <td className="text-left">Model</td>
                          <td className="text-right">Quantity</td>
                          <td className="text-right">Unit Price</td>
                          <td className="text-right">Total</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-left"><a href="http://localhost/opc001/index.php?route=product/product&product_id=46">Sony VAIO</a></td>
                          <td className="text-left">Product 19</td>
                          <td className="text-right">1</td>
                          <td className="text-right">$1,000.00</td>
                          <td className="text-right">$1,000.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="text-right" colSpan={4}><strong>Sub-Total:</strong></td>
                          <td className="text-right">$1,000.00</td>
                        </tr>
                        <tr>
                          <td className="text-right" colSpan={4}><strong>Flat Shipping Rate:</strong></td>
                          <td className="text-right">$5.00</td>
                        </tr>
                        <tr>
                          <td className="text-right" colSpan={4}><strong>Total:</strong></td>
                          <td className="text-right">$1,005.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="buttons">
                    <div className="pull-right">
                      <input type="button" data-loading-text="Loading..." className="btn" id="button-confirm" defaultValue="Confirm Order" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </>
  )
}

export default Accordion
