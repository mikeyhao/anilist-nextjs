import React, { useState } from 'react';
import Details from '../components/itemDetails'

export default function Item(data) {
  const [details, writeDetails] = useState(null);
  const info = data.data

  function mouseDisplayDetails(e) {
    console.log(e)
    
    writeDetails({
      type: info.type,
      pop: info.popularity,
      avgScore: info.averageScore
    })
  }

  return (
    <>
    <div className="card" onMouseEnter={mouseDisplayDetails}>
      <div className="imgdiv">
        <div className="title">{info.title.romaji}</div>
          <img src={info.coverImage.large} className="img">
          </img>
          <div className="hiddenInfo">
            <Details data={details}/>
          </div>
      </div>
    </div>

  
  <style jsx>{`
  .imgdiv {
    height: 240px;
    width: 160px;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .card {
    background-color: #e0e0e0;
    display: inline-block;
  }
  .card:hover {
    background-color: white;
    border: 1px solid black;
  }
  .title {
    margin-top: -5px;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap; 
  }
  .hiddenInfo {
    background-color: red;
    opacity: 1;
    color: white;
    margin-top: -140px;
    border: 1px solid black;
  }
  `}

  </style>
    
    </>
  )
}
  
