import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatePostForm from './components/createPostForm'
import { createPost } from './redux/createPostAction'

import './newPost.css'

class CreatePostLayout extends Component {
  submit(values) {
    this.props.createPost(values)
  }

  render() {
    return (
      <div className="parent">
        <h1>Skapa en ny post</h1>
        <CreatePostForm onSubmit={this.submit.bind(this)} />
      </div>
    )
  }
}

export default connect(null, { createPost })(CreatePostLayout)
