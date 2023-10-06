import { useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "../Navbar";

const Header = ({ siteTitle }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sticky = document.getElementById("sticky");

      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        sticky.classList.add("small");
      } else {
        sticky.classList.remove("small");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div id="sticky" role="banner">
        <Navbar />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
