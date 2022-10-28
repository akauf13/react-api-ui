import "./card.css";

function Card(props) {
  const { name, nickname, occupation, portrayed, img } = props;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        <span className="bold">Nickname: </span>
        {nickname}
      </p>
      <p>
        <span className="bold">Occupations: </span>
        {occupation}
      </p>

      <p>
        <span className="bold">Portrayed by: </span>
        {portrayed}
      </p>
      <img src={img} />
    </div>
  );
}

export default Card;
