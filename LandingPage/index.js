import React from "react";
import PropTypes from "prop-types";

import Container from "../Container";
import Hero from "./Hero";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <main className={styles.landingPage}>
      <Hero />
    </main>
  );
};

LandingPage.propTypes = {
  // no props yet
};

export default LandingPage;
