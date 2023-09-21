import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "./Requests";
import auth from "./Pages/Authen";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(
        requests.requestPopular,
        auth
        // {
        // headers: {
        //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE1ZWU5MTk3YjFkMjJjOGIzY2Q5OTk3MDc3YmYxYiIsInN1YiI6IjY1MDZhYjBjM2NkMTJjMDBhZDhiMmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptQHbd7di5wwNYTosbb10trzJv8C8c2TH5bHR61rWqc'
        // }
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  //   console.log(randomMovie?.backdrop_path);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          //   Authorization={'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE1ZWU5MTk3YjFkMjJjOGIzY2Q5OTk3MDc3YmYxYiIsInN1YiI6IjY1MDZhYjBjM2NkMTJjMDBhZDhiMmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptQHbd7di5wwNYTosbb10trzJv8C8c2TH5bHR61rWqc'}
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {randomMovie?.title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {randomMovie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(randomMovie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
