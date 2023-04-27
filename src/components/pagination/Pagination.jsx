import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './Pagination.css';
const Pagination = () => {

  const dispatch = useDispatch();
  const { page, numOfPages } = useSelector((state) => state.reducer);
  const decreasePageCount = ()=>{
     if(page>1){
      dispatch({ type: "decreasePageCount" });
     }  
  }
  const increasePageCount = ()=>{
     if (page < numOfPages) {
       dispatch({ type: "increasePageCount" });
     }
  }

  return (
    <div className="pagination-container">
      <button
        onClick={decreasePageCount}
        className={`page-update-btn ${page == 1 ? "disabled-btn" : ""}`}
      >
        Prev
      </button>
      <p>
        <b>
          {page} / {numOfPages}
        </b>
      </p>
      <button
        onClick={increasePageCount}
        className={`page-update-btn ${
          page == numOfPages ? "disabled-btn" : ""
        }`}
      >
        next
      </button>
    </div>
  );
}

export default Pagination