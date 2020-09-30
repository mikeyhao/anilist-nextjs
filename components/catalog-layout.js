import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import AnimangaInfo from "./animanga";
import React, { useState } from 'react';

const Main = () => {
    const [count, setCount] = useState(1);
    const [query, setQuery] = useState(null);

    const client = new ApolloClient({
        uri: "https://graphql.anilist.co",
    });

    function setCountFromInput(e) {
        e.target.value === "" || e.target.value<1?
            setCount(1): setCount(parseInt(e.target.value))
    }

    function checkSetQuery(e) {
        e.target.value == "" || e.target.value == null?
            setQuery(null): setQuery(e.target.value)
    }

    return (
        <>
        <span>
            <input 
                onChange = {checkSetQuery}
            />
        </span>
        <span>
            <input 
                type='number' 
                onChange={setCountFromInput}
                min='1'
                placeholder="jump to page"
                onFocus={(e)=>e.target.value=""}
                />
        </span>
        <button onClick={()=>count>1?setCount(count-1):setCount(count)}>Back</button>
        <span>page: {count}</span>
        <button onClick={()=>setCount(count+1)}>Next</button>
        <div>
            <ApolloProvider client={client}>
                <AnimangaInfo page={count} search={query}/>
            </ApolloProvider>
        </div>
        </>
    );
};

export default Main;