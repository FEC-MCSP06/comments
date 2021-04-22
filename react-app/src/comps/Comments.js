import CommentItem from './CommentItem'
const Comments = ({comments})=>{
    
return(
<>


{comments.map((elem)=>{
        return(<CommentItem elem ={elem}/>)
        
    })}
</>
    
)
            
        
    
        
         
         
        
       
    
}
export default Comments


