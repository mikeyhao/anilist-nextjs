import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Item from '../components/item'

/**
 * Query, referenced from https://anilist.gitbook.io/anilist-apiv2-docs/overview/graphql/pagination
 */
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

/**
 * Generates an Item component according to the data retrieved.
 * 
 * @param {*} at Parent component passes down the page number and search query
 * as per user request
 */
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