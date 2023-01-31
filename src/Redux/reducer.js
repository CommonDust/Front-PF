import {ERROR, GET_ALL_MOVIES, GET_GENRE, GET_MOVIE_BY_QUERY, GET_MOVIE_ID, FILTER_BY_GENRE, ORDER_MOVIE_ALF} from actions;

const initialState = {
    movies: [],
    genre: [],
    detail: [],
    error: [],
    filterMovies: [],
  };

  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ERROR:
        return {
          ...state,
          error: action.payload,
        }
        case GET_ALL_MOVIES:
      return {
        ...state,
        dogs: action.payload,
      };

    case GET_MOVIE_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_MOVIE_BY_QUERY:
      return {
        ...state,
        dogs: action.payload,
      };

      case GET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

      case POST_MOVIES:
        return {
          ...state,
        };

        case ORDER_MOVIE_ALF:
      let sortedAlf;
      if (action.payload === "alf") {
        if (state.filterMovies.length > 0) {
          sortedAlf = [...state.filterMovies].sort(function (a, b) {
            if (a.name === null) {
              return 0;
            }
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            filterMovies: sortedAlf,
          };
        } else {
          sortedAlf = [...state.movies].sort(function (a, b) {
            if (a.name === null) {
              return 0;
            }
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            movies: sortedAlf,
          };
        }
      } else if (action.payload === "pop") {
        if (state.filterMovies.length > 0) {
          sortedAlf = [...state.filterMovies].sort(function (a, b) {
            if (b.name === null) {
              return 0;
            }
            if (a.name < b.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            filterMovies: sortedAlf,
          };
        } else if (action.payload === "pop") {
          sortedAlf = [...state.movies].sort(function (a, b) {
            if (b.name === null) {
              return 0;
            }
            if (a.name < b.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
          });
          return {
            ...state,
            movies: sortedAlf,
          };
        }
      } else {
        return {
          ...state,
          movies: state.movies,
        };
      }
      break

      case FILTER_BY_GENRE:
      const allMovies2 = state.movies;
      let filteredGenre = state.movies;

      if (action.payload === "AllGenre") {
        return {
          ...state,
          movies: state.movies,
          filterMovies: []
        };
      } else {

        filteredGenre = allDogs2.filter((e) => {
          return e.genre?.includes(action.payload);
        });
        return {
          ...state,
          filterMovies: filteredGenre,
        };
      }
    default:
      return { ...state };
    }
}
    
