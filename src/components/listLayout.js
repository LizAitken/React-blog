import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PostData from './postData';

// Need to keep track of what has been clicked and what has not
// Will manage the details view in this component

const PostList = styled.ul`
    list-style-type: none;
    flex: 0 1 25%;
    text-align: left;
    max-width: 25%;
    width: 100%;



    li {
        padding: 4px 0;
        margin: 4px 0;
        width: 100%;
    }
`;

const PostDetails = styled.div`
    margin: 0;
    max-width: 75%;
    width: 100%;
    flex: 1;
`;



class ListLayout extends Component {
    state = {
        showDetails: false,
        posts: [],
        postData: null 
    }

    componentDidMount() {
        const { posts } = this.props;
        
        this.setState({
            posts: posts.default
        })
    }

    loadPost = post => {
        this.setState({
            showDetails: true,
            postData: post
        });
    };


    render () {
        const { posts, showDetails, postData } = this.state;
        return (
            <>
                <PostList>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <a href="#" onClick={() => this.loadPost(post)}>
                                    {post.post_title}
                                </a>
                            </li>
                        );
                    })}
                </PostList>
                <PostDetails>
                    {!!showDetails && !!postData ?
                        <PostData postData={postData} />
                    :
                        <p>Please select an entry</p>
                    }
                </PostDetails>
            </>
        )
    }
    
}

export default ListLayout;

ListLayout.propTypes = {
    posts: PropTypes.object
};