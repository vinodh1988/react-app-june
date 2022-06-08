
const Box= ({title,items,font})=>{
    return(
        <div className="box" style={{fontFamily:font}}>
              <h3> {title} </h3>
              <hr/>
             <ul>
             {items.map(x=><li key={x}>{x}</li>)}
             </ul>
        </div> 
    )
}

export default Box;