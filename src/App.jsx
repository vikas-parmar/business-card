import { Container, Hidden, Link } from "@mui/material";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import github from "./Assets/githubLogo.svg";

const bodyStyle = {
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "secondary.main",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const logoStyle = { position: "fixed", right: "2%", top: "90%" };

const App = () => {
  return (
    <Container maxWidth={false} sx={bodyStyle}>
      <Header />
      <MainContent />
      <Footer />
      <Hidden smDown>
        <Link
          href="https://github.com/vikas-parmar"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <img
            src={github}
            width={"40px"}
            style={logoStyle}
            alt="gitHub Logo"
          />
        </Link>
      </Hidden>
    </Container>
  );
};

export default App;