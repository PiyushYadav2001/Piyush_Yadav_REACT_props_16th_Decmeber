import './About.componet.css';

export const About=({name,contact})=>{
    return(
       <div className='about '>
            <h1>{name}</h1>
            <p>____________ &#9733;_____________</p>
            <div className='Ft'>
                Lorem ipsum dolor,<br /> sit amet consectetur adipisicing <br />elit. Repellendus, dignissimos.
            </div>
            <div className='Ft'>
                 {contact}
            </div>
       </div>
    )
}