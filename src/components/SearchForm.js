import React from "react";
import RadioButtons from "./RadioButtons";
import './searchForm.css';

const SearchForm = ({handleRadioButton, handleOnChange, include}) => {

    return (
      <section className="searchSection">
        <form name="searchForm" className="searchForm">
          <div className="radioBtnWrapper">
          <RadioButtons id="startWord" value={false} onClickHandler={() => handleRadioButton(false)} labelText="Starting Word" include={include}/>
          <RadioButtons id="anyWord" value={true} onClickHandler={() => handleRadioButton(true)} labelText="Any Word" include={include}/>
          </div>
        </form>
        <input
          className="searchInput"
          type="text"
          placeholder="Search Countries :D"
          onKeyUp={handleOnChange}
        />
      </section>
    );
}

export default SearchForm;
