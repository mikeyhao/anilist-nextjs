import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import AnimangaInfo from "./animanga";
import React, { useState } from 'react';

const Main = () => {
    const [count, setCount] = useState(1);

    function pageNum() {
        // this.page += 1
    }

    const client = new ApolloClient({
        uri: "https://graphql.anilist.co",
    });

    return (
        <>
        <button onClick={()=>count>1?setCount(count-1):setCount(count)}>Back</button>
        <button onClick={()=>setCount(count+1)}>Next</button>
        <ApolloProvider client={client}>
            <AnimangaInfo page={count}/>
            <div>
            </div>
        </ApolloProvider>
        </>
    );
};

export default Main;