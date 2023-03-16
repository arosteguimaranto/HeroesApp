import { Link } from "react-router-dom";


const CharactersByHero = ({alter_ego, characters}) =>{

  return (alter_ego === characters) 
  ? <></>
  : <p> {characters} </p>

}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_apperance,
  characters
}) => {

  const heroImageUrl =`/assets/heroes/${id}.jpg `;
  //const charactersByHero = <p> {characters}</p>;


  return (
    <div className=" col">
      <div className=" card">

        <div className="row no-gutters">
          <div className=" col-4">
            <img src={heroImageUrl} className=" card-img" alt={superhero}></img>
          </div>

          <div className=" col-8"> 
            <div className="card-body">
              <h5 className=" card-title">{superhero}</h5>
              <p className=" card-text">{alter_ego}</p>
              
              <CharactersByHero characters={characters} alter_ego={alter_ego}/>
            
              <p className=" card-text">
              <small className=" text-muted">{first_apperance}</small>
              </p>

              <Link to={`/hero/${id}`}>
              Mas Informacion
              </Link>


            
            </div>
          
          </div>



        </div>

      </div>
    </div>
  )
}
