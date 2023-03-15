

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_apperance,
  characters
}) => {

  const heroImageUrl = `/assets/heroes/${id}.jpg `;


  return (
    <div className=" col">
      <div className=" card">

        <div className="row no-gutters">
          <div className=" col-4">
            <img src={heroImageUrl} className=" card-img" alt={superhero}></img>
          </div>

        </div>

      </div>
    </div>
  )
}
