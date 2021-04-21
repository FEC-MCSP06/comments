import CommentItem from './CommentItem'
const Comments = ({comments})=>{
    
return(
<>
<div className = 'text'>
   <h1>total comments:{comments.length}</h1> 
</div>

{comments.map((elem)=>{
        return(<CommentItem elem ={elem}/>)
        
    })}
</>
    
)
            
        
    
        
         
         
        
       
    
}
export default Comments