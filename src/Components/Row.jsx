import axios from "axios";
import React, { useEffect, useState } from "react";
import auth from "./Pages/Auth";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

import Movies from "./Movies";

const Row = ({ title, fetchURL, rowID }) => {
  const [slideMovies, setSlideMovie] = useState([]);
  //   const [like, setLike] = useState(false);

  useEffect(() => {
    axios
      .get(
        fetchURL,
        auth
        // headers: {
        //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE1ZWU5MTk3YjFkMjJjOGIzY2Q5OTk3MDc3YmYxYiIsInN1YiI6IjY1MDZhYjBjM2NkMTJjMDBhZDhiMmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptQHbd7di5wwNYTosbb10trzJv8C8c2TH5bHR61rWqc'
        // }
      )
      .then((response) => {
        setSlideMovie(response.data.results);
      });
  }, [fetchURL]);

  //   console.log(slideMovies);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {slideMovies.map((item, id) => (
            <Movies className='flex flex-row' key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
