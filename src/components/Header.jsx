import { Link, NavLink } from "react-router";
import "../assets/styles/header.css";
import { useState } from "react";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Burger menyu holatini boshqarish uchun state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menyu holatini boshqarish uchun state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menyu ochish/yopish funksiyasi
  };
  const closeMenu = () => {
    setMenuOpen(false); // Menyuni yopish funksiyasi
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Dropdown menyuni ochish/yopish funksiyasi
  };
  return (
    <>
      <header
        className={`header ${menuOpen ? "menu-open" : ""}`}
        onClick={(e) => {
          // Agar menyudan tashqaridagi joy bosilsa, menyuni yopish
          if (menuOpen && !e.target.closest(".header-nav")) {
            closeMenu();
          }
        }}
      >
        <div className="header-top">
          <div className="header-container">
            <div className="header-social">
              <a href="https://www.facebook.com/share/12Kp7T1E1B7/" className="header-social_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 254, 254, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                </svg>
              </a>

              {/* <a href="#" className="header-social_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                  style={{
                    width: "18px",
                    position: "relative",
                    top: "-1.5px",
                  }}
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a> */}

              <a href="https://t.me/Ustoz_mavluda" className="header-social_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 254, 254, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                   <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                </svg>
              </a>

              {/* <a href="#" className="header-social_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 254, 254, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                </svg>
              </a>

              <a href="#" className="header-social_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 254, 254, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <circle cx="4.983" cy="5.009" r="2.188"></circle>
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                </svg>
              </a>

              <a href="#" className="header-social_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 254, 254, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                  <circle cx="16.806" cy="7.207" r="1.078"></circle>
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </a> */}
            </div>
            <div className="header-contact">
              <a href="tel:+998943808061" className="header-contact_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 254, 254, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                </svg>
                +998943808061
              </a>

              <a
                href="mailto:mavludaxonjumakulova0@gmail.com"
                className="header-contact_item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 254, 254, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
                </svg>
                mavludaxonjumakulova0@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-container">
            <Link to={"/"} >
              <div className="logo">
                <img src="/images/logo-bg.png" width={120} height={80} alt="" />
              </div>
            </Link>
            <button className="burger-menu" onClick={toggleMenu}>
              {menuOpen ? "x" : "☰"}
            </button>
            <div className={`header-nav ${menuOpen ? "open" : ""}`}>
              <NavLink className="nav-link" to={"/"} onClick={closeMenu}>
                Bosh Sahifa
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/portfolio"}
                onClick={closeMenu}
              >
                Nashr ishlari
              </NavLink>
              <div
                className="nav-link dropdown"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                Galeriya
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <NavLink
                      className="dropdown-item"
                      to={"/galeria/photos"}
                      onClick={closeMenu}
                    >
                      Rasmlar
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      to={"/galeria/videos"}
                      onClick={closeMenu}
                    >
                      Videolar
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink className="nav-link" to={"/about"} onClick={closeMenu}>
                Biz haqimizda
              </NavLink>
              {/* <NavLink className="nav-link" to={"/pages"} onClick={closeMenu}>
                Sahifalar
              </NavLink> */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScc4o_pxbahcVDD6mAKMUxM7jRXAo-4yzw51cSvv7ayT8_3Ag/viewform?usp=dialog" target="blank" className="nav-link" onClick={closeMenu}>
                So`rovnoma
              </a>
              {/* <NavLink
                className="nav-link"
                to={"/decision"}
                onClick={closeMenu}
              >
                Qaror va farmonlar
              </NavLink> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
