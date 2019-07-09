import React from 'react';
import PropTypes from 'prop-types';
import '../styles/postDataStyle.css';


const PostData = props => {
    const { postData } = props;
    return (
        <>
            <div className='wrapper'>
                <h1 className='title'>{postData.post_title}</h1>
                <h5 className='subtitle'>Written By: {postData.first_name} {postData.last_name}</h5>
                <p>{postData.post}</p>
            </div>
            
        </>
    );
};

export default PostData;

PostData.propTypes = {
    postData: PropTypes.object
};