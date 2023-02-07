import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { MiniCard } from "./Components/MiniCard/MiniCard";
import Slide from "./Components/Slide/Slide";
import { SwitchToggle } from "./Components/SwitchToggle/SwitchToggle";
import { AppStyle } from "./styles/AppStyle";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Themes } from "./styles/Themes";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("primary");
  const toggle = () => {
    setTheme( theme === "primary" ? "secondary": "primary" )
    console.log(theme)
  }

  return (
    <ThemeProvider theme={Themes[theme]}>
      <GlobalStyle />
      <AppStyle>
        <SwitchToggle toggle={toggle}/>
        <div className="profile">
          <div className="profileInfo">
            <div className="text">
              <h1>Rafaela Monteiro</h1>
              <p>Rafaela Monteiro influenciadora digital mais famosa do insta!</p>
            </div>

            <div className="miniCards">
              <MiniCard
                // onClick={toggle}
                text="Influenciadora digital"
                image="/miniCard-img1.png"
              />
              <MiniCard text="Streamer" image="/miniCard-img2.png" />
            </div>
          </div>
          <div className="profileImage">
            <img src="/profileImage.png" alt="Profile image" />
            <p>Rafaela Monteiro influenciadora digital mais famosa do insta!</p>
          </div>
        </div>
        <Slide />
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
