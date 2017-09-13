import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import '../newPost.css'

class CreatePostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  submit() {
    this.props.submit()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      // <FormGroup>
      //   <InputGroup>
      //     <p>Skriv din titel</p>
      //     <FormControl
      //       type="text"
      //       placeholder="Titel"
      //       value={this.state.title}
      //       onChange={event => {
      //         this.setState({ title: event.target.value })
      //       }}
      //     />
      //     <p>Skriv ditt innehåll</p>
      //     <FormControl
      //       type="text"
      //       placeholder="Skriv för tusan"
      //       value={this.state.content}
      //       onChange={event => {
      //         this.setState({ content: event.target.value })
      //       }}
      //     />
      //     <InputGroup.Addon onClick={() => this.submit()}>
      //       <p>YEE</p>
      //     </InputGroup.Addon>
      //   </InputGroup>
      // </FormGroup>

      <form className="create-new-post-container" onSubmit={handleSubmit}>
        <div className="create-post-header">
          <h3 className="new-post-title text-center">Ny Post</h3>
        </div>
        <div className="new-post-input">
          <Field
            placeholder="Titel"
            name="title"
            component="input"
            type="text"
          />
        </div>
        <hr className="hr" />
        <div className="new-post-input">
          <Field
            placeholder="Content"
            name="content"
            component="input"
            type="text"
          />
        </div>
        <hr className="hr" />
        <button className="create-post-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'createPostForm'
})(connect()(CreatePostForm))
