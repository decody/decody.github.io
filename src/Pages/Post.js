import React, { Component } from "react";
import GlobalStyle from '../Styles/GlobalStyle';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import '../Styles/App.css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

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
              <MarkdownStyle>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  children={this.state.mdfile}
                  components={{
                    h1: ({node, ...props}) => <h1 className="page-title" {...props} />,
                    h2: ({node, ...props}) => <h2 className="section-title " {...props} />,
                    h3: ({node, ...props}) => <h3 className="sub-section-title " {...props} />,
                    h4: ({node, ...props}) => <h4 className="date-info" {...props} />,
                    pre: ({node, ...props}) => <pre className="code-block" {...props} />
                  }}
                />
              </MarkdownStyle>
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

const MarkdownStyle = styled.div`
  color: #4a5568;
  font-size: 1.125rem;
  text-align: left;
  line-height: 1.75em;
  letter-spacing: -0.0085em;
  word-spacing: 0.2em;

  .page-title {
    padding: 0 0 10px;
    color: #333;
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: -0.02em;
    line-height: 1.3em;
  }
  .section-title {
    padding: 20px 0 4px;
    color: #4a5568;
    font-weight: 700;
    font-size: 1.785rem;
    text-align: left;
  }
  .sub-section-title {
    padding: 0 0 20px;
    color: #4a5568;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .date-info {
    padding: 0 0 20px;
    color: #8d9096;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .code-block {
    margin: 20px 0;
    padding: 0 40px;
    background-color: #f5f7f8;
    border-radius: var(--radius-value);
  }
`