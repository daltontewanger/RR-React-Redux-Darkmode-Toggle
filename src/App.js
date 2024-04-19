import "./App.css";
import Nav from "./components/Nav";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "./features/themeSlice";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleOnClick = () => {
    if (theme.darkMode) {
      dispatch(setLightTheme());
    } else {
      dispatch(setDarkTheme());
    }
  };
  return (
    <div
      style={{ backgroundColor: theme.color1, color: theme.color5 }}
      className="App"
    >
      <button onClick={handleOnClick}>Set Theme</button>
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
