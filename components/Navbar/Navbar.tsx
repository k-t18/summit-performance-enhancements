import Link from "next/link";
import React from "react";
import useNavbar from "@/hooks/GeneralHooks/useNavbar";
import {
  FaCartPlus,
  FaHeart,
  FaRegCalendar,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import HeaderCategories from "./HeaderCategories";

const Navbar = () => {
  const { navbarData } = useNavbar();
  console.log("navbarData", navbarData);
  return (
    <>
      <header className="header">
        <nav>
          <div className="navbar">
            <div className="w-100 d-flex justify-content-between pt-3">
              <div className="d-block search-bar">
                <div className="search-input">
                  <input
                    type="text"
                    className="form-control search-bar-height"
                    placeholder="Search here"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div>
                <ul className="nav  list-inline d-flex justify-content-evenly">
                  <li className="list-inline-item">
                    <Link href="/" legacyBehavior>
                      <a className="link-dark label">
                        <div className="icon-container">
                          <FaCartPlus className="icon" />
                          <span className="badge badge-warning">2</span>
                          <span className="d-none d-md-inline-block theme-blue">
                            Cart
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/" legacyBehavior>
                      <a className="link-dark label">
                        <div className="icon-container">
                          <FaHeart className="icon" />
                          <span
                            className="badge badge-warning"
                            id="lblCartCount"
                          ></span>
                          <span className="d-none d-md-inline-block theme-blue ">
                            Wishlist
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/" legacyBehavior>
                      <a className="link-dark label">
                        <div className="icon-container">
                          <FaRegCalendar className="icon" />
                          <span className="d-none d-md-inline-block ms-1 theme-blue">
                            Order List
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/" legacyBehavior>
                      <a className="link-dark label">
                        <div className="icon-container">
                          <FaArrowRightToBracket className="icon" />
                          <span className="d-none d-md-inline-block ms-1 theme-blue">
                            Sign-out
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <HeaderCategories navbarData={navbarData} />
    </>
  );
};

export default Navbar;
