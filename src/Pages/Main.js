import React from 'react';
import styled from 'styled-components';
import '../Styles/App.css';
import Header from '../Components/Header';
import Cover from '../Components/Cover';
import Footer from '../Components/Footer';
import PostList from '../Components/PostList';

const Main = () => {
  return (
    <div className="App">
      <StyledHome>
        <Header />
        <Cover />
        <PostList />
        <Footer />
      </StyledHome>
    </div>
  );
};

export default Main;

const StyledHome = styled.div`
    min-height: 400px;
    padding: 10px 0;
`