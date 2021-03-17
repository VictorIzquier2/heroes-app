import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className='card-columns'>
      {
        heroes.map(heroe => (
          <HeroeCard 
            { ...heroe }
            key={heroe.id}>
          </HeroeCard>
        ))
      }
    </div>
  )
}
