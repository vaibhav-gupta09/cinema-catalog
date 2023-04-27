import React from 'react';
import './Header.css';
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  const {page, selectedGenre} = useSelector((state)=>state.reducer);

  const handleClick = ()=>{
    if (page === 1 && selectedGenre==='') {}
    else
    dispatch({ type: "setToInitialState" });
  }
  return (
    <div className="header-wrapper">
      <HomeIcon
        className="my-icon"
        sx={{ fontSize: 60 }}
        onClick={handleClick}
      />
      <div className="main-heading">
        <h1>Cinema Catalog</h1>
        <p>Discover your next favorite film.</p>
      </div>
    </div>
  );
}

export default Header