"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import DarkModeToggler from "./DarkModeToggler";

export default function Header1() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="bg-surface-color">
      {/* topbar */}
      <div className="topbar">
        <div className="tf-container">
          <div className="topbar-inner d-flex justify-content-between align-items-center">
            <ul className="tf-social d-flex lg-hide">
              <li>
                <a href="#" className="icon-FacebookLogo" />
              </li>
              <li>
                <a href="#" className="icon-XLogo" />
              </li>
              <li>
                <a href="#" className="icon-PinterestLogo" />
              </li>
              <li>
                <a href="#" className="icon-InstagramLogo" />
              </li>
            </ul>
            <Link href={`/`} className="site-logo">
              <Image
                alt="logo"
                className="main-logo light-mode-logo"
                width={193}
                height={44}
                src="/images/logo/logo.svg"
              />
              <Image
                alt="logo"
                className="main-logo dark-mode-logo"
                width={193}
                height={44}
                src="/images/logo/logo-dark.svg"
              />
            </Link>
            <div className="wrap d-flex justify-content-end">
              <DarkModeToggler />
              <Link
                href={`/contact`}
                className="tf-btn style-2 btn-switch-text animate-hover-btn md-hide"
              >
                <span>
                  <span className="btn-double-text" data-text="Let's Talk!">
                    Let's Talk!
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End topbar */}
      {/* header-menu */}
      <div
        className={`header-menu style-default header-fixed ${
          isFixed ? "is-fixed" : ""
        }`}
      >
        <div className="tf-container">
          <div className="header-inner d-flex justify-content-between align-items-center">
            <div
              className="mobile-button d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#menu-mobile"
              aria-controls="menu-mobile"
            >
              <div className="burger">
                <span />
                <span />
                <span />
              </div>
            </div>
            <nav className="main-menu lg-hide">
              <ul className="navigation">
                <Nav />
              </ul>
            </nav>
            <a
              className="btn-find link-no-action"
              href="#canvasSearch"
              data-bs-toggle="offcanvas"
            >
              <i className="icon-search" />
            </a>
          </div>
        </div>
      </div>
      {/* End header-menu */}
      {/* header-menu */}
      <div className="header-menu style-default">
        <div className="tf-container">
          <div className="header-inner d-flex justify-content-between align-items-center">
            <div
              className="mobile-button d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#menu-mobile"
              aria-controls="menu-mobile"
            >
              <div className="burger">
                <span />
                <span />
                <span />
              </div>
            </div>
            <nav className="main-menu lg-hide">
              <ul className="navigation">
                <Nav />
              </ul>
            </nav>
            <a
              className="btn-find link-no-action"
              href="#canvasSearch"
              data-bs-toggle="offcanvas"
            >
              <i className="icon-search" />
            </a>
          </div>
        </div>
      </div>
      {/* End header-menu */}
    </header>
  );
}
