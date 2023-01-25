import { MiniCard } from "./Components/MiniCard/MiniCard";
import { AppStyle } from "./styles/AppStyle";

function App() {
  return (
    <AppStyle>
      <div className="profile">
        <div className="profileInfo">
          <div className="text">
            <h1>Rafaela Monteiro</h1>
            <p>Rafaela Monteiro influenciadora digital mais famosa do insta!</p>
          </div>

          <div className="miniCards">
            <MiniCard
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
    </AppStyle>
  );
}

export default App;
