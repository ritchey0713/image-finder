import React from "react"

const ImageCard = (props) => {
  return(
    <div>
      <img 
        key={props.image.id} 
        src={props.image.urls.regular} 
        alt={props.image.description} 

      />
    </div>
  )
}

export default ImageCard