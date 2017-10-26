import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

import '../postsLayout.css'

class PostList extends Component {
  render() {
    const { post } = this.props
    return (
      <div className="parent">
        <Row style={{ marginTop: '20px' }}>
          <Col className="post-content">
            <ul className="posts-list">
              <li className="posts-flex-container">
                <div className="posts-flex-item-1">
                  <h1 className="posts-title-text">{post.title}</h1>
                  <p className="posts-sub-title-text">{post.content}</p>
                  <p className="post-list-content">
                    {`Postat: ${moment(post.timestamp).format('HH:mm DD/MMM')}`}
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PostList
