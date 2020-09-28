import Head from 'next/head'
import Item from '../components/item'
import AnimangaInfo from '../components/animanga'
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

// const client = new ApolloClient({
//   uri: 'https://graphql.anilist.co',
//   cache: new InMemoryCache()
// });



export default function Home() {
  class animangaData{
    constructor(d){
      this.img = "images/test-coverimg.jpg";
      this.title = "My Hero Academia the movie heroes rising"; }
  }

  return (
    <>
    <Head>
      <title>The Animanga Catalog</title>
    </Head>
    <main>
      <div className="headr">Animanga Catalog</div>
      <AnimangaInfo />
      <ul>
        <li><Item data={new animangaData()}></Item></li>
        <li><Item data={new animangaData()}></Item></li>
        <li><Item data={new animangaData()}></Item></li>
        <li><Item data={new animangaData()}></Item></li>
        <li><Item data={new animangaData()}></Item></li>
        <li><Item data={new animangaData()}></Item></li>
      </ul>
    </main>
    <footer>

    </footer>

    <style jsx>{`
      .headr {
        background-color: black;
        color: white;
        height: 100px;
        text-align: center;
      }
    `}
    </style>
    </>
  )
}

