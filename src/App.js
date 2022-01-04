import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import HeaderApp from "./components/HeaderApp";

const App = () => {
  return (
    <Container>
      <div className="App">
        <HeaderApp />
      </div>
    </Container>
  );
};

export default App;
