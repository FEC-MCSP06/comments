import CommentItem from './CommentItem'
const Comments = ({comments})=>{
    
return(
<>
<h1>total comments:{comments.length}</h1>
{comments.map((elem)=>{
        return(<CommentItem elem ={elem}/>)
        
    })}
</>
    
)
            
        
    
        
         
         
        
       
    
}
export default Comments