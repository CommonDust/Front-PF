import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { getAllMovies } from "../../../redux/actions";
import { Link } from "react-router-dom";
import "./allCards.css";
import { Pages } from "../pages/Pages";

export default function AllCards() {
  const dispatch = useDispatch();
  let allMovies = useSelector((state) => state.movies);
  const filteredMovies = useSelector((state) => state.filterMovies);
  filteredMovies.length > 0 && (allMovies = filteredMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const indexOfLastMovie = currentPage * dogsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - dogsPerMovie;
  const currentMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleBack = () => {
    currentPage > 1 && (setCurrentPage(currentPage - 1))
  }

  
  const handleNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <button className="breedButton" onClick={handleBack}>Back</button>
      <button className="breedButton" onClick={handleNext}>Next</button>
      <Pages
        moviesPerPage={moviesPerPage}
        allMovies={allMovies.length}
        paginado={paginado}
      />
      <div className="cardList ">
        {allMovies.length > 0 ? (
          currentMovies.map((e) => (
            <Link key={e.id} to={`/dogs/${e.id}`}>
              <Card
                id={e.id}
                name={e.name}
                imageMovie={e.image}
              />
            </Link>
          ))
        ) : (
          <h2>No hay nada</h2>
        )}
      </div>
    </>
  );
}