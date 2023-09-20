// const key = 'a9a5ee9197b1d22c8b3cd9997077bf1b'

const requests = {
  requestPopular:
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  requestTopRated:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  requestUpComing:
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  requestPopularTVSeries:
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  //   requestTVList: "https://api.themoviedb.org/3/genre/tv/list?language=en",
};

export default requests;

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWE1ZWU5MTk3YjFkMjJjOGIzY2Q5OTk3MDc3YmYxYiIsInN1YiI6IjY1MDZhYjBjM2NkMTJjMDBhZDhiMmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ptQHbd7di5wwNYTosbb10trzJv8C8c2TH5bHR61rWqc",
//   },
// };

// fetch(
//   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// export default options;
