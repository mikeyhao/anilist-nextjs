import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { AnimangaInfo } from "../components/animanga";

const Main = ({ data }) => {
const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
});

return (
    <ApolloProvider client={client}>
        <AnimangaInfo />
        <div>
            <h1>NextJS GraphQL Apollo App</h1>
        </div>
    </ApolloProvider>
);
};

export default Main;