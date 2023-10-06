import React from "react";

import tedLogo from "../../images/tedxlogo.png";

const Hero = () => {
  return (
    <Container>
      <section className={styles.hero}>
        <h1>
          <span>"</span>
          <span className={styles.spin}></span>
          <span className={styles.textRed}>Infinity"</span>
          <br />
        </h1>

        <img src={tedLogo} className={styles.logo} alt="TEDx Logo" />

        <p className={styles.subhead}>
          Tending To <span className={styles.textRed}>Infinity</span>
        </p>
      </section>
    </Container>
  );
};

export default Hero;
