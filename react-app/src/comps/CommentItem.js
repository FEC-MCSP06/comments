const CommentItem = ({elem})=>{
    console.log(elem)
    return(
        <div key = {elem.comment_id}>
            <h2> name:{elem.profile_id} {elem.post}  </h2>
            <h4>thumbup:{elem.thumbsup}  thumbdown:{elem.thumbsdown}</h4>
                
            
        </div>

    )
}
export default CommentItem