import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql, ApolloProvider, useQuery } from '@apollo/client';

const GET_PAGES = gql`
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



export default function Home() {
  const { data, loading, error } = useQuery(GET_PAGES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data)
  return (
    <>
    <Head>
      <title>The Anime Catalog</title>
    </Head>
    <ApolloProvider client ={client}>
    </ApolloProvider>
    </>
  )
}

