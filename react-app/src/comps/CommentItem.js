const CommentItem = ({elem})=>{
    return(
       <div key = {elem.comment_id}>
           <div>
            <h2> name:{elem.profile_id} {elem.post}  </h2>
           </div>
           <div className = 'votes'>
                <div className = 'Upvotes'>
                    <h4>thumbup:</h4><h4>{elem.thumbsup}</h4>
                    
                </div>
               
                <div className = 'Downvotes'>
                    
                        <h4>thumbdown:</h4><h4>{elem.thumbsdown}</h4> 
                    
                    
                </div>
           </div>
       </div>
    )
}
export default CommentItem

//change to class 
//add compdid mount to query for replies
//add conditional for query if it exisit