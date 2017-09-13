import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PostList from './components/postList'
import { fetchPosts } from './redux/postsAction'
import { Link } from 'react-router-dom'

// import Navbar from '../common/components/'
import './postsLayout.css'

class PostLayout extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const posts = this.props.posts || []
    console.log(posts)

    const postList = posts.map((postContent, i) => {
      return <PostList key={i} postContent={postContent} />
    })

    return (
      <div className="App">
        <div className="App-header">
          <h1 className="title text-center">Martin's Blogg</h1>
          <Link to="/createpost">
            <p className="create-post" style={{ color: '#fff' }}>
              Skapa en ny post
            </p>
          </Link>
        </div>
        <div>
          {postList}
        </div>
      </div>
    )
  }
}

PostLayout.propTypes = {
  props: PropTypes.object.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    posts: state.fetchPosts.posts,
    isLoading: state.fetchPostsIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLayout)
