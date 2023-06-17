import React, { useState } from 'react';
import AboutMe from './sections/AboutMe/AboutMe';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Projects from './sections/Projects/Projects';
import ReachMeOut from './sections/ReachMeOut/ReachMeOut';
import Skills from './sections/Skills/Skills';
import Background from './components/Background/Background';
import TopButton from './components/TopButton/TopButton';
import ReadingProgress from './components/ReadingProgress/ReadingProgress';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/theme/theme';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';

export default function App() {
  
  const [language, setLanguage] = useState("portuguese");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [theme, setTheme] = useState("LIGHT");

  const handleChangeBackground = (image) => {
    setBackgroundImage(image);
  }

  const getTheme = () => {
    return theme === "DARK" ? darkTheme : lightTheme;
  }

  const changeLanguage = (language) => {
    setLanguage(language);
  }

  const switchTheme = (theme) => {
    setTheme(theme ? "LIGHT" : "DARK");
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyle />
      <>
        <header>
          <Header handleChangeLanguage={changeLanguage} handleSwitchTheme={switchTheme} actualTheme={theme} language={language}></Header>
        </header>
        <main>
          <Background src={backgroundImage} theme={getTheme()}></Background>
          <ReadingProgress />
          <TopButton />
          <AboutMe language={language}></AboutMe>
          <section>
            <Projects isOpaque={backgroundImage ? false : true} handleChangeBackground={handleChangeBackground} language={language}></Projects>
          </section>
          <section>
            <Skills language={language}></Skills>
          </section>
          <section>
            <ReachMeOut language={language}></ReachMeOut>
          </section>
        </main>
        <footer>
          <Footer language={language}></Footer>
        </footer>
      </>
    </ThemeProvider>
  );
};
