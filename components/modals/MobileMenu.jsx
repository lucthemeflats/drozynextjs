"use client";
import Image from "next/image";
import React from "react";
import {
  categoryLinks,
  categoryLinks2,
  homePages,
  singlePostLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function MobileMenu() {
  const pathname = usePathname();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      tabIndex={-1}
      id="menu-mobile"
      aria-labelledby="menu-mobile"
    >
      <div className="offcanvas-header top-nav-mobile">
        <div className="offcanvas-title">
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
        </div>
        <div data-bs-dismiss="offcanvas" className="btn-close-menu">
          <i className="icon-X" />
        </div>
      </div>
      <div className="offcanvas-body inner-mobile-nav">
        <div className="mb-body">
          <ul id="menu-mobile-menu" className="style-1">
            <li
              className={`menu-item menu-item-has-children-mobile  ${
                isMenuParentActive(homePages) ? "active" : ""
              } `}
            >
              <a
                href="#dropdown-menu-one"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-one"
              >
                Home
              </a>
              <div
                id="dropdown-menu-one"
                className="collapse"
                data-bs-parent="#menu-mobile-menu"
              >
                <ul className="sub-mobile">
                  {homePages.map(({ href, label }) => (
                    <li
                      key={href}
                      className={`menu-item ${
                        isMenuActive({ href }) ? "active" : ""
                      }`}
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`menu-item menu-item-has-children-mobile  ${
                isMenuParentActive(categoryLinks) ? "active" : ""
              } `}
            >
              <a
                href="#dropdown-menu-two"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-two"
              >
                Features
              </a>
              <div
                id="dropdown-menu-two"
                className="collapse"
                data-bs-parent="#menu-mobile-menu"
              >
                <ul className="sub-mobile">
                  {categoryLinks.map(({ href, label }) => (
                    <li
                      key={href}
                      className={`menu-item ${
                        isMenuActive({ href }) ? "active" : ""
                      }`}
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`menu-item menu-item-has-children-mobile  ${
                isMenuParentActive(singlePostLinks) ? "active" : ""
              } `}
            >
              <a
                href="#dropdown-menu-three"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-three"
              >
                Post Styles
              </a>
              <div
                id="dropdown-menu-three"
                className="collapse"
                data-bs-parent="#menu-mobile-menu"
              >
                <ul className="sub-mobile">
                  {singlePostLinks.map(({ href, label }) => (
                    <li
                      key={href}
                      className={`menu-item ${
                        isMenuActive({ href }) ? "active" : ""
                      }`}
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="menu-item menu-item-has-children-mobile">
              <a
                href="#dropdown-menu-four"
                className="item-menu-mobile collapsed"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="dropdown-menu-four"
              >
                Caregories
              </a>
              <div
                id="dropdown-menu-four"
                className="collapse"
                data-bs-parent="#menu-mobile-menu"
              >
                <ul className="sub-mobile">
                  {categoryLinks2.map(({ href, label, slug }) => (
                    <li key={label} className="menu-item">
                      <Link href={`${href}/${slug}`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`menu-item    ${
                isMenuActive({ href: "/about" }) ? "active" : ""
              }`}
            >
              <Link href={`/about`} className="item-menu-mobile">
                About
              </Link>
            </li>
            <li
              className={`menu-item    ${
                isMenuActive({ href: "/contact" }) ? "active" : ""
              }`}
            >
              <Link href={`/contact`} className="item-menu-mobile">
                Contact
              </Link>
            </li>
          </ul>
          <div className="support">
            <Link
              href={`/contact`}
              className="tf-btn style-2 animate-hover-btn"
            >
              <span>Let's Talk!</span>
            </Link>
            <a href="#" className="text-need">
              {" "}
              Need help?
            </a>
            <ul className="mb-info">
              <li>
                Call Us Now: <span className="number">+1 666 8888</span>
              </li>
              <li>
                Support 24/7:{" "}
                <a href="#" className="link">
                  themesflat@gmail.com
                </a>
              </li>
              <li>
                <div className="wrap-social">
                  <p>Follow us:</p>
                  <ul className="tf-social d-flex style-1">
                    <li>
                      <a href="#" className="icon-TwitterLogo" />
                    </li>
                    <li>
                      <a href="#" className="icon-XLogo" />
                    </li>
                    <li>
                      <a href="#" className="icon-FacebookLogo" />
                    </li>
                    <li>
                      <a href="#" className="icon-PinterestLogo" />
                    </li>
                    <li>
                      <a href="#" className="icon-InstagramLogo" />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
