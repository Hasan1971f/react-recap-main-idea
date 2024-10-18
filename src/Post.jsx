import './Post.css'
export default function Post({post}){
    const {body, id, title, userId} = post
    return (
        <div className='post'> 
            <h5>Title: {title}</h5>
            <p><small>user Id: {userId}</small></p>
            <p><small>post Id: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}