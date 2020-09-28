import React, { useState } from 'react';

export default function Item(data) {
    // const [info, updateInfo] = useState(data);
    const info = data.data

    function showInfo(e){
        
    }

    return (
      <>
      <div className="card" onMouseEnter={showInfo}>
        <div className="imgdiv">
            <img src={info.img} className="img"></img>
            <div className="title">{info.title}</div>
        </div>
      </div>

    
    <style jsx>{`
    .imgdiv {
        height: 300px;
        width: 200px;
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
    `}

    </style>
      
      </>
    )
  }
  
