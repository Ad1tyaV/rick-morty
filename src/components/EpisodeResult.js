import React from 'react'

function EpisodeResult({ eachEpisode }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
            <h5>{eachEpisode.episode + "👉"}</h5>
            <h5>{eachEpisode.name}</h5>
    </div>
  )
}

export default EpisodeResult