
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import { BrowserRouter as Router} from 'react-router-dom';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails'
import { useState } from 'react';

const Body = styled.div`
  background-color: white;
  width: 100%;
  overflow-x: hidden;

`
const Wrapper = styled.div`
background: rgb(2,0,36);
background-color: #1c1a1a;
`

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme = {darkTheme}>
      <Router>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper>
        <Experience />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Skills />
        </Wrapper>
        <Footer />
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
