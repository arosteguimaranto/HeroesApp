import {heroes} from '../data/heroes';

export const getHeroesByPublisher = (  publisher ) =>{
 
    const validPublishers = [];


    if(validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not valid`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}