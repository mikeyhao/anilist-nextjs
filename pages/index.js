import Head from 'next/head'
import Main from '../components/catalog-layout'
import { ApolloClient, InMemoryCache, gql, ApolloProvider, useQuery } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});



export default function Home() {

  return (
    <>
    <Head>
      <title>The Animanga Catalog</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
    </Head>
    <main>
      <div className="headr">
        <div className="headrTitle">
        The Animanga Catalog</div>
      </div>
      <ApolloProvider client={client}>
          <Main />
      </ApolloProvider>
    </main>

    <style jsx>{`
      .headr {
        background-color: black;
        color: white;
        height: 50px;
        width: 100%;
      }
      .headrTitle {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        margin: auto;
        padding-top: 10px;
        width: 50%;
      }
    `}
    </style>
    </>
  )
}

