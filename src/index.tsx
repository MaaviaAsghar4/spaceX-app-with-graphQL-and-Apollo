import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client";

const webLink: ApolloLink = createHttpLink({
  uri: "http://api.spacex.land/graphql/",
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: webLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
