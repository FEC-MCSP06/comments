import CommentItem from './CommentItem'
const Comments = ({comments})=>{
    
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


