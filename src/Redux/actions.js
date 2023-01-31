import axios from "axios";

export const ERROR = "ERROR";
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const GET_GENRE = "GET_GENRE";
export const GET_MOVIE_ID = "GET_MOVIE_ID";
export const GET_MOVIE_BY_QUERY = "ET_MOVIE_BY_QUERY"
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const ORDER_MOVIE_ALF = "ORDER_MOVIE_ALF"



export const getAllMovies = () => {
    return async (dispatch) => {
      try {
        let response = await axios.get(``);
        dispatch({
          type: GET_ALL_MOVIES,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: error,
        });
      }
    };
  };

  export const getGenre = () => {
    return async (dispatch) => {
      try {
        let response = await axios.get(``);
        let genreArray = response.data.map((objeto) => objeto.name);
        dispatch({
          type: GET_GENRE,
          payload: genreArray,
        });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: error,
        });
      }
    };
  };

  export function getMovieId(id) {
    return async (dispatch) => {
      try {
        let json = await axios.get(`http:${id}`);
        dispatch({
          type: GET_MOVIE_ID,
          payload: json.data,
        });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: error,
        });
      }
    };
  }

  export function getMovieQuery(name) {
    return async (dispatch) => {
      try {
        let json = await axios.get(`http://?name=${name}`);
        dispatch({
          type: GET_MOVIE_BY_QUERY,
          payload: json.data,
        });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: error,
        });
      }
    };
  }

  export const postMovies = (payload) => {
    return async () => {
      try {
        let json = await axios.post(``, payload);
        return json;
      } catch (error) {
        console.log(error);
      }
    };
  };

  export function filterByGenre(payload) {
    return {
      type: FILTER_BY_GENRE,
      payload,
    };
  }

  export const orderMovieAlf = (payload) => {
    return {
      type: ORDER_MOVIE_ALF,
      payload,
    };
  };