import { useMemo } from 'react';
import {getHeroesByPublisher} from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
getHeroesByPublisher(publisher)
    
     const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]) ;

// const hero =  useMemo( () => getHeroById(id), [id] ); 
  return (

    <div className=' row row-cols-1 row-cols-md-3 g-3'> 
    {
      
      heroes.map( hero => (
        <HeroCard 
        key={ hero.id} 
        {...hero}
        />

      ))


 }
   

    </div>
  )
}
