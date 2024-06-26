/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { generateAllPosts } from '../utils/allPostsGenerator'; // Adjust the path as necessary

const AllPostsContext = createContext();

export const AllPostsProvider = ({ children }) => {
  const allPosts = generateAllPosts();

  return (
    <AllPostsContext.Provider value={allPosts}>
      {children}
    </AllPostsContext.Provider>
  );
};

AllPostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAllPost = () => {
  return useContext(AllPostsContext);
};
