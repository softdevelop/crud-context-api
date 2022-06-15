import React from 'react'

const PostItem = ({post: {title, body}, index}) => {
    return (
        <li>
            <h3>{index + 1}. {title}</h3>
            <p>{body}</p>
        </li>
    )
}

export default PostItem;
