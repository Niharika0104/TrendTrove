import React from 'react'

function CategoryCard(props) {
  return (
    <div className='mx-5 my-2'>
      <img src={props.image} className='h-48 w-40'/>
      <p>{props.title}</p>
      <p>{props.discount}</p>

    </div>
  )
}

export default CategoryCard
