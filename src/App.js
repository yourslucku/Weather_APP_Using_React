import React, { useState, useReducer } from 'react';
import CitySelection from './CitySelection';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import RecentSearches from './RecentSearches';
import ErrorDialog from './ErrorDialog'; 
import './App.css';

const initialState = {
  selectedCity: '',
  searchTerm: '',
  recentSearches: [],
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return { ...state, selectedCity: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SEARCH':
      const newSearches = [...state.recentSearches, state.searchTerm];
    // random temperature
      const temperature = Math.floor(Math.random() * 100);
      return {
        ...state,
        recentSearches: newSearches.slice(-3), 
        searchTerm: '', 
        error: '', 
      };
    case 'RESET':
      return { ...state, selectedCity: '', searchTerm: '', error: '' };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCityChange = (city) => {
    dispatch({ type: 'SET_CITY', payload: city });
  };

  const handleSearchTermChange = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };

  const handleSearch = () => {
    const { selectedCity, searchTerm } = state;
    if (selectedCity && searchTerm) {
      dispatch({ type: 'SET_ERROR', payload: 'Both city and zip code cannot be selected' });
    } else {
      dispatch({ type: 'SEARCH' });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-bar">
      <CitySelection city={state.selectedCity} onCityChange={handleCityChange} />
      <SearchInput term={state.searchTerm} onTermChange={handleSearchTermChange} />
      <SearchButton onSearch={handleSearch} onReset={handleReset} />
      </div>
      {state.error && <ErrorDialog message={state.error} onClose={() => dispatch({ type: 'SET_ERROR', payload: '' })} />} {/* Error dialog */}
      <RecentSearches searches={state.recentSearches} />
    </div>
  );
}

export default App;
