import React from 'react'
import Leave_Comment from './Leave_Comment'

function Comment() {
  return (
    <div id="comments" className="comments-area mt_50">
    <h3 className="comment-title">3 comments</h3>
    <ul className="comment-list mt_30">
      <li className="comment">
        <hr />
        <article className="comment-body mtb_30">
          <div className="comment-avatar">
            <img src="images/user2.jpg" />
          </div>
          <div className="comment-main">
            <h5 className="author-name">
              <a href="#" className="comment-name">
                Radley Lobortis
              </a>
              <small className="comment-date">
                8 months ago
              </small>
            </h5>
            <div className="comment-reply pull-right">
              <a href="#">
                <i className="fa fa-reply" aria-hidden="true" />
                Reply
              </a>
            </div>
            <div className="comment-content mt_10">
              Sed lobortis rpi luctus. Aenean posuere nulla in
              turluctus. Aenean posuere nulla in turs porttitor
              larpis porttitor larpis porttitor lauctus. Aenean
              posuere nulla in turpis porttitor laoreet. Quisque
              finibus aliquet purus.
            </div>
          </div>
        </article>
        <hr />
        <ol className="children">
          <li className="comment">
            <article className="comment-body mtb_30">
              <div className="comment-avatar">
                <img src="images/user3.jpg" />
              </div>
              <div className="comment-main">
                <h5 className="author-name">
                  <a href="#" className="comment-name">
                    Lobortis Radley
                  </a>
                  <small className="comment-date">
                    1 months ago
                  </small>
                </h5>
                <div className="comment-reply pull-right">
                  <a href="#">
                    <i
                      className="fa fa-reply"
                      aria-hidden="true"
                    />
                    Reply
                  </a>
                </div>
                <div className="comment-content mt_10">
                  Dcenas euismod faucibus dolor a
                  finibus.Maecenas euismod faucibus dolor a
                  finibus.Maecenas euismod faucibus dolor a
                  finibus.Maecenas euismod faucibus dolor a
                  finibus.cenas euismod faucibus dolor a
                  finibus.
                </div>
              </div>
            </article>
          </li>
        </ol>
      </li>
      <li className="comment">
        <hr />
        <article className="comment-body mtb_30">
          <div className="comment-avatar">
            <img src="images/user1.jpg" />
          </div>
          <div className="comment-main">
            <h5 className="author-name">
              <a href="#" className="comment-name">
                Sradle Vivamus
              </a>
              <small className="comment-date">8 days ago</small>
            </h5>
            <div className="comment-reply pull-right">
              <a href="#">
                <i className="fa fa-reply" aria-hidden="true" />
                Reply
              </a>
            </div>
            <div className="comment-content mt_10">
              Vivamus imperdiet ex sed lobortis luctus. Aenean
              posuere nulla in turpis porttitor laoreet. Quisque
              finibus aliquet purus. Ut et mi eu ante interdum
              dignissim pellentesque a mi.
            </div>
          </div>
        </article>
      </li>
    </ul>
    <div className="leave-form">
      <h3
        className="comment-title mt_50 mb_30"
        id="reply-title"
      >
        Leave A Comment
      </h3>
      {/* Comment Form */}
      <Leave_Comment />
      {/* End Comment Form */}
    </div>
  </div>
  )
}

export default Comment
