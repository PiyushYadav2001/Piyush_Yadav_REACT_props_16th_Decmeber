import {Card} from "./Card.componet";
import "./PortFolio.componet.css";

export const Portfolio = () => {
  const img = [
    { id: 2 },
    { id: 5 },
    { id: 3 },
    { id: 4 },
  ];
  return (
    <div className="protfolio">
      <h1>PORTFOLIO</h1>
      <p>____________ &#9733;_____________</p>
      <div className="img">
      {img.map((img,) => (
        
        <Card img={img.id}  key={img.id}/>
            ))}
      </div>
     
    </div>
  );
};
