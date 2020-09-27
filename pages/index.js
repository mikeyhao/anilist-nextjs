import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql, ApolloProvider, useQuery } from '@apollo/client';

const q = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media(id: $id, search: $search) {
      id
      title {
        romaji
      }
      coverImage {
        medium
      }
      type
      popularity
      averageScore
    }
  }
}
`

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});

function getQuery() {
  const {loading, error, data} = useQuery(q)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  // return data.rates.map(({ currency, rate }) => (
  //   <div key={currency}>
  //     <p>
  //       {currency}: {rate}
  //     </p>
  //   </div>
  // ));
}

export default function Home() {
  return (
    <>
    <Head>
      <title>The Anime Catalog</title>
    </Head>
    <ApolloProvider client ={client}>
      getQuery()
    </ApolloProvider>
    </>
  )
}

