import CommentItem from './CommentItem'
const Comments = ({comments})=>{
    
return(
<>


{comments.map((elem)=>{
        return(<CommentItem elem ={elem}
            key = {elem.comment_id}/>)
        
    })}
</>
    
)
            
        
    
        
         
         
        
       
    
}
export default Comments


