import React from "react";

const SearchForm = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" href="#">
        Garment io
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="navbar-nav mr-auto"></div>
        <form className="form-inline ">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="business name"
            required
          />
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="location"
            required
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchForm;
