import "./card.css"

function Card(props) {
  const { name, nickname, occupations, portrayed, img } = props


  return (
    <div className="card">
    <h2>{name}</h2>
    <p>Nickname: {nickname}</p>
    <h3>Occupations: </h3>
    {occupations}
    <p>Portrayed by: {portrayed}</p>
    <img src= {img} />
    </div>
  )
}

export default Card