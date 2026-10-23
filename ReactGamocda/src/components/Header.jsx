import { Link } from "react-router-dom";
import "./Header.css";

import { useContext } from "react";

import { UserContext } from "../context/UserContext";
export default function Header() {
  //   const { user } = useContext(UserContext);
  //   console.log(user);

  return (
    <>
      <header>
        <h2>წიგნების კატალოგი</h2>

        <nav>
          <Link to="/">მთავარი</Link>
          <Link to="/books">წიგნები</Link>
          <Link to="/contact">კონტაქტი</Link>
        </nav>

        <p>მკითხველის სახელი: {}</p>
      </header>
    </>
  );
}
