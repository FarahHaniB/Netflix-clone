import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Movies = ({ item }) => {
  const [like, setLike] = useState(false);

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE1ZWU5MTk3YjFkMjJjOGIzY2Q5OTk3MDc3YmYxYiIsInN1YiI6IjY1MDZhYjBjM2NkMTJjMDBhZDhiMmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptQHbd7di5wwNYTosbb10trzJv8C8c2TH5bHR61rWqc",
//     },
//   };

//   fetch("https://api.themoviedb.org/3/movie/movie_id/images", options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));

  return (
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        // src={}  
        alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
          <p>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
  );
};

export default Movies;
