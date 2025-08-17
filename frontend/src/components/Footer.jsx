import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white w-100 mt-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4 border-top">
        {/* Left Side */}
        <div className="d-flex align-items-center">
          <a
            href="/"
            className="me-2 text-white text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            <svg className="bi" width="30" height="24" aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="text-white">© 2025 Company, Inc</span>
        </div>

        {/* Right Side Icons */}
        <ul className="nav list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href="#" aria-label="Instagram">
              <svg className="bi" width="24" height="24" aria-hidden="true">
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href="#" aria-label="Facebook">
              <svg className="bi" width="24" height="24" aria-hidden="true">
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
