import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
function VideoSidebar({likes,comments,shares}) {
    return(
        <div className='videoSidebar'>
            <div className='buttons'>
                <FavoriteIcon className='icon'/>
                <p>{likes}</p>
            </div>
            <div className='buttons'>
            <ChatBubbleIcon className='icon'/>
                <p>{comments}</p>
            </div>
            <div className='buttons'>
            <ShareIcon className='icon'/>
                <p>{shares}</p>
            </div>
        </div>
    )
}
export default VideoSidebar