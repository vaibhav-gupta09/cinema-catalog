import React from 'react'
import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";
import './PageNotFound.css';
import Header from '../../components/header/Header';
const PageNotFound = () => {
  return (
    <div>
      <Header/>
    <section className="page-not-found-wrapper">
      <main className="page-not-found-container">
        <div>
          <ErrorIcon fontSize="large" />
          <h1 style={{ fontSize: "3rem", marginLeft: "1rem" }}>404</h1>
        </div>

        <p>Page not found, click below to go to home page.</p>
        <Link to="/">Go to Home</Link>
      </main>
    </section>
    </div>
  );
}

export default PageNotFound