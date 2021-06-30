import React from 'react';
import '../../Styles/Compoments/Footer/Footer.scss';
function Footer() {
  return (
    <div
      id="contact"
      className="footer bg-blue-400 p-2 mt-20 flex justify-around items-center"
    >
      <div className="social flex">
        <a href="https://www.github.com/Ahmet-kutuk">
          <i className="fab fa-github-square text-white text-5xl"></i>
        </a>
        <a href="https://twitter.com/ahmetkutuks">
          <i className="fab fa-twitter-square text-white text-5xl ml-10"></i>
        </a>
        <a href="https://www.linkedin.com/in/ahmetkutuk/">
          <i className="fab fa-linkedin text-white text-5xl ml-10"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
