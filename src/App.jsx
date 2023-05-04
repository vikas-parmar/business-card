import { Container, Link } from '@mui/material';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import github from './Assets/githubLogo.svg'

const bodyStyle = {
  minHeight: "100vh",
  minWidth: "100%",
  display: "flex",
  backgroundColor: "secondary.main",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const logoStyle = { position: "fixed", right: "2vw", top: "88vh" }

const App = () => {
  return (
    <Container minWidth="xl" sx={bodyStyle} >
      <Header />
      <MainContent />
      <Footer />
      <Link href="https://github.com/vikas-parmar" underline="none" target="_blank" rel="noopener">
        <img src={github} width={'40px'} style={logoStyle} alt='gitHub Logo' />
      </Link>
    </Container>
  )
};

export default App;
