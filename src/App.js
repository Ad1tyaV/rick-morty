import EpisodesList from "./components/EpisodesList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <EpisodesList />
      </div>
    </ApolloProvider>
  );
}

export default App;
