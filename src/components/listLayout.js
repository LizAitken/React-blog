import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Need to keep track of what has been clicked and what has not
// Will manage the details view in this component

const PostList = styled.ul`
    list-style-type: none;
    width: 100%;
    columns: 4;
    text-align: center;


    li {
        width: 10rem;
        height: 10rem;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 3px solid black;
        border-radius: 15px;
    }

    li a {
        text-decoration: none;
        color: black;
    }

    li:hover {
        background-color: grey;
    }
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

    render () {
        const { posts } = this.state;
        return (
                    <PostList>
                        {posts.map((post, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/post/${post.id}`}>{post.post_title}</Link>    
                                </li>
                            );
                        })}
                    </PostList>

        )
    }
    
}

export default ListLayout;

ListLayout.propTypes = {
    posts: PropTypes.object
};