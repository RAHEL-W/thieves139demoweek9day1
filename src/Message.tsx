
const Message = () => {
    const name = ''
    
        
    return(
        <>
        <div style={{color: "white", margin: '40px 250px'}}>
          <h1>{name &&  'hello'}</h1>
         <h1>{name ? name : 'welcome to React'}</h1>
         </div>
        
        </>
    )
 
}

export default Message