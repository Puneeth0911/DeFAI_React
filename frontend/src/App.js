import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Section
        title="Project Overview"
        content="DeFAI Guard is a decentralized finance + AI solution to detect fraudulent transactions."
      />
      <Section
        title="Test Transaction"
        content="Enter transaction details to check if it is flagged as fraud."
      />
      <Footer />
    </div>
  );
}

export default App;
