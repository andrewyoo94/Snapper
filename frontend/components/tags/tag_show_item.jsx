import React from 'react';
import { Link } from 'react-router-dom';

const TagsItem = ({ tag }) => {
    if (tag === undefined) return null;

    return (
        <li className='tag-container'>
            <div className='tag'>
                <span className='tag-name'>{tag.name}</span>
            </div>
        </li>
    );
};

export default TagsItem;