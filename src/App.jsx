import React from 'react'
import userData from './database'

export default function App() {
  const [data, setData] = React.useState(userData)
  const [comments, setComments] = React.useState(false)
  function handleLike(e) {
    const postId = +(e.target.id);
    const newData = data.map(item => {
      if (item.postId === postId) {
        return {
          ...item,
          isLiked: !item.isLiked
        };
      }
      return item;
    });
    setData(newData);
  }
  function handleComment(e) {
    const postId = (e.target.id)
    data.forEach(item => {
      if (postId == item.postId + "p") {
        console.log("sa" + item.postId);
        setComments(!comments)
        console.log(comments)
      }
      return
    })
  }
  const feedItems = data.map(item => {
    const feedItemComments = item.comments.map(comment => {
      return
    })
    return (
      <div className='feed-item' id={item.postId + "p"} onClick={handleComment}>
        <div className='user-profile'>
          <img src={item.profileImage} alt="profile-image" />
          <h2>{item.firstName} {item.surName}</h2>
          <h3>@{item.userName}</h3>
        </div>
        <hr />
        <div className='user-post'>
          <p>{item.caption}</p>
          <img className='feed-image' src={item.feedImage} alt="user-post" />
        </div>
        <div className='feed-buttons'>
          {item.isLiked ? <i className="fa-solid fa-heart fa-xl" onClick={handleLike} id={item.postId}></i> : <i className="fa-regular fa-heart fa-xl" onClick={handleLike} id={item.postId}></i>} 
          <i class="fa-regular fa-comment fa-xl"></i>
          <i class="fa-solid fa-share-from-square fa-xl"></i>
        </div>
        {comments ?
          <div className="comments">
            <p>buraya yorum koy</p>
          </div>
          : null}
    </div>
  )
})
  
  return (
    
      <div className='feed'>{feedItems}</div>
  
    
  )
}
