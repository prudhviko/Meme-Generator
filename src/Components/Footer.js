import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-light" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="text-light" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-light" href="#!">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-light" href="#!">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-light" href="#!">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
