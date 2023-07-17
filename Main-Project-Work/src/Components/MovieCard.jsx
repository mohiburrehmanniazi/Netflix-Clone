import React from "react";


export default function MovieCard({ url, title }) {
  
  return (
    <>
          
            <div className="cards " >
              <img className="cards__img" src={url}/>
             <div>{title}</div>
            </div>
          
        
      
    </>
  );
}
