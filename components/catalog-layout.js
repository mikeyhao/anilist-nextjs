import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import AnimangaInfo from "./animanga";
import React, { useState } from 'react';
import Head from 'next/head';

/**
 * Component containing the everything except the header
 * Includes search bar, paging, anime information
 */
const Main = () => {
    const [count, setCount] = useState(1); // Sets the page count
    const [query, setQuery] = useState(null); // Sets the search query

    // Anilist api with ApolloClient, the Apollo Provider will
    // pass the client to children component
    const client = new ApolloClient({
        uri: "https://graphql.anilist.co",
    });

    /**
     * Sets the page number with error handling
     */
    function setCountFromInput(e) {
        e.target.value === "" || e.target.value<1?
            setCount(1): setCount(parseInt(e.target.value))
    }

    /**
     * Sets the search query with error handling
     */
    function checkSetQuery(e) {
        e.target.value == "" || e.target.value == null?
            setQuery(null): (setQuery(e.target.value), setCount(1))
    }

    return (
        <>
        <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        </Head>
        <main>
        <div>
            <input 
                className="searchBar"
                placeholder="Search here..."
                onChange = {checkSetQuery}
            />
        </div>
        <div className="pagingRow">
            <button 
                className="back"
                onClick={()=>count>1?setCount(count-1):setCount(count)}
                >
                Back
            </button>
            <button 
                className="next"
                onClick={()=>setCount(count+1)}>
                    Next
            </button>
            <span>
                <span className="showPage">Page {count}</span>
                <input 
                    className="pageInput"
                    type='number' 
                    onChange={setCountFromInput}
                    min='1'
                    placeholder="jump to page..."
                    onFocus={(e)=>e.target.value=""}
                    />
            </span>
        </div>
        <br></br>
        <div>
            <ApolloProvider client={client}>
                <AnimangaInfo page={count} search={query}/>
            </ApolloProvider>
        </div>
        </main>

        <style jsx>{`
            main {
                font-family: 'Poppins', sans-serif;
            }
            .searchBar {
                padding: 8px;
                display: block;
                border: none;
                border-bottom: 1px solid #ccc;
                width: 98.9%;
                height: 20px;
                font-size: 18px;
                text-align: center;
                background-color: #e8e8e8;
                font-family: 'Poppins', sans-serif;
            }
            button {
                border: 1px solid #000;
                color: white;
                background-color: #525252;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                padding: 6px 60px;
                display: inline-block
                font-family: 'Poppins', sans-serif;
            }
            button:hover {
                color: black;
                background-color: white;
            }
            .pagingRow {
                margin-bottom: -10px;
                text-align: center;
            }
            .showPage {
                // background-color: red;
                margin-left:175px
            }
            .pageInput {
                border: 1px solid #e0e0e0;
                background-color: white;
                float: right;
            }
            .back {
                float: left;
            }
            .next {
                float: right;
            }
                `}
                </style>
        </>
    );
};

export default Main;