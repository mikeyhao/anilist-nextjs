import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Item from '../components/item'

const GET_PAGE = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total 
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media(id: $id, search: $search, sort: $sort) {
      id
      idMal
      title {
        romaji
      }
      coverImage {
        large
      }
      type
      popularity
      averageScore
    }
  }
}

`;

const AnimangaInfo = (at) => {

  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: {perPage: 18, page: at.page, search: at.search, sort: "POPULARITY_DESC"}
  });
  return loading?<p>Loading...</p>:
    error?<p>Error</p>:
    data.Page.media.map( media => {
      return (
        <span key={media.id}>
          <Item data={media}/>
        </span>
       )
      }
     )
}

export default AnimangaInfo;