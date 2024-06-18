import React from 'react'

function CategoryCard(props) {
  return (
    <div className="mx-5 my-2 flex flex-col ">
 <img
  src={props.image}
  className="h-52 w-40 object-cover rounded-lg"
  alt={props.title}
/>

  <p className="mt-2 ">{props.title}</p>
  <p className="">{props.discount}</p>
</div>
  )
}

export default CategoryCard
