import React from 'react'

function Reviews() {
  return (
    <div className="row">
            <div className="col-md-12">
              <div id="exTab5" className="mtb_30">
                <ul className="nav nav-tabs">
                  <li className="active"> <a href="#1c" data-toggle="tab">Overview</a> </li>
                  <li><a href="#2c" data-toggle="tab">Reviews (1)</a> </li>
                  <li><a href="#3c" data-toggle="tab">Solution</a> </li>
                </ul>
                <div className="tab-content mt_20">
                  <div className="tab-pane active" id="1c">
                    <p>CLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.</p>
                  </div>
                  <div className="tab-pane" id="2c">
                    <form className="form-horizontal">
                      <div id="review" />
                      <h4 className="mt_20 mb_30">Write a review</h4>
                      <div className="form-group required">
                        <div className="col-sm-12">
                          <label className="control-label" htmlFor="input-name">Your Name</label>
                          <input name="name" defaultValue id="input-name" className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-sm-12">
                          <label className="control-label" htmlFor="input-review">Your Review</label>
                          <textarea name="text" rows={5} id="input-review" className="form-control" defaultValue={""} />
                          <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-md-6">
                          <label className="control-label">Rating</label>
                          <div className="rates"><span>Bad</span>
                            <input name="rating" defaultValue={1} type="radio" />
                            <input name="rating" defaultValue={2} type="radio" />
                            <input name="rating" defaultValue={3} type="radio" />
                            <input name="rating" defaultValue={4} type="radio" />
                            <input name="rating" defaultValue={5} type="radio" />
                            <span>Good</span></div>
                        </div>
                        <div className="col-md-6">
                          <div className="buttons pull-right">
                            <button className="btn btn-md btn-link">Continue</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane" id="3c">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis malesuada mi id tristique. Sed ipsum nisi, dapibus at faucibus non, dictum a diam. Nunc vitae interdum diam. Sed finibus, justo vel maximus facilisis, sapien turpis euismod tellus, vulputate semper diam ipsum vel tellus.applied clearfix to the tab-content to rid of the gap between the tab and the content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Reviews
