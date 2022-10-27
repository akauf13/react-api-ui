
function Card(props) {
  const { name, nickname, occupations, portrayed, img } = props
  
  function displayUI(arr) {
    arr.splice(57);
    console.log(arr);
    
    // arr.forEach((person) => {
    //   let occupations = person.occupation.map((occ) => { occ }).join(" ");
      
    //   if (person.name === "Lydia Rodarte-Quayle") {
    //     person.img =
    //       "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/03/1484912975-laurafraser.JPG?crop=0.739xw:1.00xh;0.190xw,0&resize=480:*";
    //   }
    // }
    // )
  }
  // displayUI()

  return (
    <div className="card">
    <h2>{name}</h2>
    <p>Nickname: {nickname}</p>
    <h3>Occupations: </h3>
    {occupations}
    <img src= {img} />
    <p>Portrayed by: {portrayed}</p>
    </div>
  )
}

export default Card