import React, { useState } from 'react';
import Details from '../components/itemDetails'
import Head from 'next/head'

export default function Item(data) {
  const info = data.data

  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap" 
        rel="stylesheet"/>
    </Head>
    <div className="card">
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
    height: 220px;
    width: 150px;
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
  
