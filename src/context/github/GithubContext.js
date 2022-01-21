// Step 1: We need to import create context
import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

// Step 2: Initialize the context
const GithubContext = createContext();

// Step 3: We need a provider that carries our state and data
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Step 4: we need to return the provider
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

// Step 5: we need to export the context
export default GithubContext;
