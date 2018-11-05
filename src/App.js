import React, { Component } from "react";
import "./App.css";
import { countries } from "./Data/countries";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import ResultSection from "./components/ResultSection";

class App extends Component {
  state = {
    searchInput: "",
    include: true
  };

  handleRadioButton = include => {
    this.setState({
      include
    });
  };

  handleOnChange = e => {
    this.setState({
      searchInput: e.target.value.toLowerCase()
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Header
          countries={countries}
          include={this.state.include}
          searchInput={this.state.searchInput}
        />
        <SearchForm
          handleRadioButton={this.handleRadioButton}
          include={this.state.include}
          handleOnChange={this.handleOnChange}
          
        />
        <ResultSection
          countries={countries}
          include={this.state.include}
          searchInput={this.state.searchInput}
        />
      </div>
    );
  }
}

export default App;
