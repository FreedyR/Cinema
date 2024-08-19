import React, { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom"
import search from "../icons/search.png";

const ActiveSearch = () => {
  const [visible, setVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (inputValue === "") {
      hideTimeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);

      
    }
    return () => clearTimeout(hideTimeoutRef.current);
  }, [inputValue]);

  const handleMouseEnter = () => {
    if (!visible) {
      setVisible(true);
      clearTimeout(hideTimeoutRef.current);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/Cinema/search/${inputValue}`)
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue !== "") {
      clearTimeout(hideTimeoutRef.current);
    } else if (newValue === "" && visible) {
      hideTimeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };

  const handleBlur = () => {
    setVisible(false);
  };

  return visible ? (
    <section className="searchSection" onMouseEnter={handleMouseEnter}>
      <img src={search} alt="search" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Szukaj"
        onFocus={() => {
          clearTimeout(hideTimeoutRef.current);
        }}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </section>
  ) : null;
};

export default ActiveSearch;
