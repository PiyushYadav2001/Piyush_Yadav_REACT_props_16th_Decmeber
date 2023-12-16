import "./Card.componet.css";
 export const Card = ({img}) => {

  const imageUrl = `https://robohash.org/${img}?set=set2&size=200x200`;

  return (
    
      <div className="card-container">
        <img src={imageUrl} alt="Modi" className="img-container" />
      </div>

  );
};