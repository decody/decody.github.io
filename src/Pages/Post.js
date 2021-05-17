import React, { Component } from "react";
import GlobalStyle from '../Styles/GlobalStyle';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import '../Styles/App.css';
import Markdown from 'markdown-to-jsx';

class Post extends Component {

  state = {
    mdfile: '',
  };

  getMdFile = async () => {
    const filepath =  window.location.pathname.replace('/post/', '');
    await this.setState({
        mdfile: require('../Posts/' + filepath + '.md' ),
    });
  }

  componentDidMount() {
    this.getMdFile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      this.getMdFile();
    }
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Navbar />
        <StyledPost>
            <article>
              <Markdown options={options}>
                  {this.state.mdfile} 
                </Markdown>
            </article>
        </StyledPost>
        <Footer />
      </div>
    );
  }
}
 
export default Post;

const StyledPost = styled.div`
  min-height: 400px;
  padding: 10px 0;
`

const MainTitle = styled.h1`
  padding: 0 0 10px;
  color: #333;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.5em;
`

const SectionTitle = styled.h2`
  padding: 20px 0 4px;
  color: #4a5568;
  font-weight: 700;
  font-size: 1.785rem;
  text-align: left;
`

const SubSectionTitle = styled.h3`
  padding: 0 0 20px;
  color: #4a5568;
  font-size: 1.4rem;
  text-transform: uppercase;
`

const DateTitle = styled.h4`
  padding: 0 0 20px;
  color: #8d9096;
  font-size: 1rem;
  text-transform: uppercase;
`

const ParaText = styled.p`
  margin: 0;
  padding: 10px 0;
  color: #4a5568;
  font-size: 1.125rem;
  text-align: left;
  line-height: 1.75em;
  letter-spacing: -0.0085em;
  word-spacing: 0.2em;
`

const StrongText = styled.strong`
  color: #333;
  padding: 2px;
  text-decoration: underline;
`

const ExtLink = styled.a.attrs({
  target: '_blank'
})`
  color: #2980b9;
  &:hover {
    color: #ffd700;
  }
`

const Code = styled.code`
  color: inherit;
  font-size: 1.125rem;
  font-family: Vernada;
  background-color: #f3f3f3;
  padding: 0 0.3em;
  border-radius: 3px;
`

const DividerLine = styled.hr`
  border: 1px solid #f4f4f4;
`

const Image = styled.img`
  border: 5px solid #895fad;
  border-left: none;
  border-right: none;
`

const Codebox = styled.pre`
  margin: 20px 0;
  padding: 0 20px;
  background-color: #f3f3f3;
    & code {
      background-color: transparent;
      p { 
        color: inherit;
        font-size: 0.95rem;
        line-height: 1.6em;
        font-family: Vernada;
      }
    }
`

const options = {
  overrides: {
      h1: {
        component: MainTitle
      },
      h2: {
        component: SectionTitle
      },
      h3: {
        component: SubSectionTitle
      },
      h4: {
        component: DateTitle
      },
      p: {
        component: ParaText
      },
      strong: {
        component: StrongText
      },
      a: {
        component: ExtLink
      },
      code: {
        component: Code
      },
      img: {
        component: Image
      },
      hr: {
        component: DividerLine
      },
      pre: {
        component: Codebox
      },
  }
}
