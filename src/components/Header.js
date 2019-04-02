import React from 'react';
import { startsWith, includes } from '../utils/searchFunctions';
import './header.css';

function Header({ countries, include, searchInput }) {
  const grammerForIncludeResult = () => {
    return includes(countries, searchInput).length === 1 ? (
      <p className="resultText">
        The country includes{' '}
        <span className="hightlightResult">"{searchInput}"</span> is
        <span className="hightlightResult">
          {includes(countries, searchInput).length}
        </span>
      </p>
    ) : (
      <p className="resultText">
        The countries include{' '}
        <span className="hightlightResult">"{searchInput}"</span> are
        <span className="hightlightResult">
          {includes(countries, searchInput).length}
        </span>
      </p>
    );
  };

  const grammerForStartwithResult = () => {
    return includes(countries, searchInput).length === 1 ? (
      <p className="resultText">
        The country starts with{' '}
        <span className="hightlightResult">"{searchInput}"</span> is
        <span className="hightlightResult">
          {startsWith(countries, searchInput).length}
        </span>
      </p>
    ) : (
      <p className="resultText">
        The countries start with{' '}
        <span className="hightlightResult">"{searchInput}"</span> are
        <span className="hightlightResult">
          {startsWith(countries, searchInput).length}
        </span>
      </p>
    );
  };

  return (
    <header className="headerSection">
      <h1 className="title">Let's play !</h1>
      <p className="totalNumText">
        Total number of countries are{' '}
        <span className="totalNum">{countries.length}</span>
      </p>
      {include ? grammerForIncludeResult() : grammerForStartwithResult()}
    </header>
  );
}

export default Header;
