import React from "react";
import Login from './Components/Login';

import {Routes , Route } from "react-router-dom";
import {Container,Row,Col} from "react-bootstrap";
import Signup from './Components/Signup';
import {UserAuthContextProvider} from "./context/UserAuthContext"
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
          <Route
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>

          } />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
