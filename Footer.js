import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div className="text-center p-3" style={{ background: "#FFBE98" }}>
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;