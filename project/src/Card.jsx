import "./card.css"

function Card(props) {
  const { name, nickname, occupation, portrayed, img } = props

  return (
    <div className="card">
    <h2>{name}</h2>
    <p>Nickname: {nickname}</p>
      <p>Occupations: </p>
      {occupation}
    <p>Portrayed by: {portrayed}</p>
      <img src={img} />
    </div>
  )
}

export default Card