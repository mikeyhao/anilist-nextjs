import Head from 'next/head'
import Item from '../components/item'
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
    </Head>
    <main>
      <div className="headr">Animanga Catalog</div>
      <ApolloProvider client={client}>
          <Main />
      </ApolloProvider>
    </main>
    <footer>

    </footer>

    <style jsx>{`
      .headr {
        background-color: black;
        color: white;
        height: 50px;
        text-align: center;
      }
    `}
    </style>
    </>
  )
}

