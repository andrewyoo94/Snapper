import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, currentUsername }) => {
    if (comment === undefined) return null;

    debugger 
    return (
        <li className='comment-container'>
            <div className='comment'>
                <div className='comment-author'>
                    <Link to={`/users/${comment.user_id}`} className='comment-author'> {currentUsername} </Link>
                </div>

                <span className='comment-body'>{comment.body}</span>
            </div>
        </li>
    );
};

export default CommentIndexItem;