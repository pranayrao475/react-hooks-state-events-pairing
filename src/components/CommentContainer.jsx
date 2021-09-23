import React from 'react'
import Comment from './Comment'

export default function CommentContainer(props) {
    return (
        <div>
            {props.comments.map((commentObj) => <Comment key={commentObj.id} text={commentObj.comment} user={commentObj.user}/> )}
        </div>
    )
}