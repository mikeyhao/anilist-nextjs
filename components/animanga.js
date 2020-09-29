import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Item from '../components/item'

const GET_PAGE = gql`
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
    variables: {perPage: 10, page: at.page, search: at.search}
  });
  // console.log(data.page)
  return loading?<p>Loading...</p>:
    error?<p>Error</p>:
    data.Page.media.map( media => {
      return (
        <div key={media.id}>
          <Item data={media}/>
        </div>
       )
      }
     )
}

export default AnimangaInfo;