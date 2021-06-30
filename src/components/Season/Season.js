import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Episodes from '../Episodes/Episodes'
import Loading from '../Loading/Loading'

const apiKey = process.env.REACT_APP_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

const Season = ({ seasons, titleId }) => {
  const [episodes, setEpisodes] = useState([]);
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async (titleId, seasonNumber) => {
      try {
        setLoading(true)
        const response = await axios.get(
          `${baseUrl}/tv/${titleId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US&page=${page}`
        );
        setEpisodes(response.data.episodes);
      } catch (e) {
        console.log(e);
      }
      setLoading(false)
    };
    fetchEpisodes(titleId, seasonNumber);
  }, [seasonNumber]);

  const updateSeason = (event) => {
    setSeasonNumber(event.target.value)
  };

  console.log('episodes', episodes)

  return (
    <React.Fragment>
      <div className="Season">
        <h1 className="Actors_title">TV Seasons</h1>
        <div className="Season_container container">
          <div className="Season_selectContainer">
            <label htmlFor="season" className="Season_label">
              Season
            </label>
            <select name="season" id="season" className="Season_select">
              {seasons.map((season, index) => (
                <option key={season.id} onClick={updateSeason}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          {loading && <Loading />}
          {!loading && (
          <div className="Season_episodes">
            {episodes.map((episode) => {
              return(
                <Episodes key={episode.id} episode={episode} />
              )
            })}
          </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Season;
