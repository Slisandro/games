import React from 'react'
import listGames from '../constants/list-games'
import CardListGameComponent from './card-list-game-component'

function ListGameComponent() {
  return (
    <div className="w-2/3 h-full grid sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-auto md:grid-rows-auto gap-4">
        {listGames.map(game => (
            <CardListGameComponent {...game} />
        ))}
    </div>
  )
}

export default ListGameComponent