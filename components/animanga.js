import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
        medium
      }
      type
      popularity
      averageScore
    }
  }
}
`;

const AnimangaInfo = () => {
  const { loading, error, data } = useQuery(GET_PAGE);
  console.log(data)
  
    return (
        <>
        </>
    )
}

export default AnimangaInfo;