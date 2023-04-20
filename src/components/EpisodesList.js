import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const EPISODES_LIST_QUERY = gql`
  query {
    episodes {
      results {
        name
        episode
        id
      }
    }
  }
`;

function EpisodesList() {
  const [executeQuery, { data, error }] = useLazyQuery(EPISODES_LIST_QUERY);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    executeQuery();
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  };

  const errorElement = () => <div>{"Something went wrong!!!"}</div>;

  const loadingElement = () => <div>{"LOADING"}</div>;

  const clickButton = () => {
    return <button onClick={getData}>{"GetEpisodes"}</button>;
  };

  const formatData = (data) => {
    return JSON.stringify(
      data.episodes.results.map((eachEpisode) => ({
        name: eachEpisode.name,
        episode: eachEpisode.episode,
      }))
    );
  };

  return (
    <div
      className="episodesList"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {loading ? (
        loadingElement()
      ) : error ? (
        <>
          {errorElement()} {clickButton()}
        </>
      ) : data ? (
        formatData(data)
      ) : (
        <>{clickButton()}</>
      )}
    </div>
  );
}

export default EpisodesList;
