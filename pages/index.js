import { HomePage } from "../components/Generic/HomePage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <div>
      <ApolloProvider client={client}>
        <HomePage />
      </ApolloProvider>
    </div>
  );
}
