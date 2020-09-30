import React, { useState } from 'react';
import Details from '../components/itemDetails'
import Head from 'next/head'

/**
 * Generates a card view for each animanga retrieved from the query
 * @param {*} data the query data passed down from parent component
 */
export default function Item(data) {
  const info = data.data

  /**
   * Allows onClick to open a new tab of said animanga's information
   * on the MAL website with the id provided in anilist.co api
   */
  function goToMAL(){
    window.open("https://myanimelist.net/"+
    info.type.toString().toLowerCase()+"/"+info.idMal)
  }

  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap" 
        rel="stylesheet"/>
    </Head>
    <div className="card" onClick={goToMAL}>
      <img src={info.coverImage.large} className="img" />
      <div className="title">{info.title.romaji}</div>
      <Details data={info}></Details>
    </div>

  
  <style jsx>{`
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .card {
    height: 192px;
    width: 136px;
    display: inline-block;
  }
  .card:hover {
    border-top: 4px solid black;
    background-color: white;
  }
  .title {
    color: black;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 20px;
  }
  `}

  </style>
    
    </>
  )
}
  
