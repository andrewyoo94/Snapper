import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, currentUserId }) => {
    if (comment === undefined) return null;

    const authorId = comment.user_id;

    return (
        <li className='comment-container'>
            <div className='comment'>
                <div className='comment-author'>
                    <Link to={`/users/${authorId}`} className='comment-author'>{author}</Link>
                </div>

                <span className='comment-body'>{comment.body}</span>
            </div>
        </li>
    );
};

export default CommentIndexItem;