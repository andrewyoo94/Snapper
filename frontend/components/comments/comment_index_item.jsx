import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment }) => {
    if (comment === undefined) return null;

    return (
        <li className='comment-container'>
            <div className='comment'>
                <div className='comment-author'>
                    <Link to={`/users/${comment.user_id}`} className='comment-author'> Username(Placeholder) </Link>
                </div>

                <span className='comment-body'>{comment.body}</span>
            </div>
        </li>
    );
};

export default CommentIndexItem;