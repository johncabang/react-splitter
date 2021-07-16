import React from "react";
import { Container, Card } from "./styles";

import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  return (
    <Container>
      <Card>
        <Input />
        <Results />
      </Card>
    </Container>
  );
}

export default App;
