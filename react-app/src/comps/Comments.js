import CommentItem from './CommentItem'
import react from 'react'
const Comments = ({comments, keyGrabber})=>{
    react.useEffect('changeVideoKey',(e)=>{
        let vidKey = e.detail.videoKey;
        keyGrabber(vidKey)
    })
return(
<div>


{comments.map((elem)=>{
        return(<CommentItem elem ={elem}
            key = {elem.comment_id}/>)
        
    })}
</div>
    
)
            
        
    
        
         
         
        
       
    
}
export default Comments


