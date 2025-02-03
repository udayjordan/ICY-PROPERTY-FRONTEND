import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/Logo.png";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { setMode } from "../../redux/propertiesSlice";

const MainHeader = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const mode = useSelector((store) => store.properties.mode);
  const dispatch = useDispatch();
  const history = useHistory();

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (!savedMode) {
      localStorage.setItem("mode", "light");
      dispatch(setMode("light"));
    } else {
      dispatch(setMode(savedMode));
    }
  }, [dispatch]);

  const handleToggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    dispatch(setMode(newMode));
  };

  const mobileMenu = (
    <div className="w-full mt-4 lg:hidden">
      <ul className="flex-col px-6 text-ash">
        <li className="py-3">
          <NavLink
            to="/home"
            activeClassName="text-amber1"
            onClick={menuHandler}
          >
            Home
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            to="/listings"
            activeClassName="text-amber1"
            onClick={menuHandler}
          >
            Properties
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            to="#"
            activeClassName="text-amber1"
            onClick={() => {
              handleToggleTheme();
              menuHandler();
            }}
          >
            {mode === "light" ? "Dark" : "Light"}
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <header className="z-10 w-full fixed bg-white dark:bg-darkBg top-0 py-2 px-3 lg:px-12">
      <nav className="flex items-center justify-between font-Poppins">
        <div className="w-12 ml-2 mt-1 p-2 bg-white rounded-lg shadow-md">
          <img src={Logo} alt="macho-logo" className="w-full h-auto" />
        </div>

        <div className="flex items-center">
          <ul className="hidden lg:flex px-2 text-ash flex-grow justify-end space-x-6">
            <li>
              <NavLink
                to="/home"
                activeClassName="text-yellow"
                className="px-2"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listings"
                activeClassName="text-yellow"
                className="px-2"
              >
                Properties
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center">
            <li
              style={{ cursor: "pointer", marginLeft: "15px" }}
              onClick={handleToggleTheme}
              className={mode === "dark" ? "text-yellow" : ""}
            >
              {mode === "light" ? "Dark" : "Light"}
            </li>
          </ul>

          <div className="lg:hidden ml-2">
            <button onClick={menuHandler}>
              {!isMobileMenu ? (
                <TiThMenu className="text-3xl" />
              ) : (
                <CgClose className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-darkBg z-10">
          <ul className="flex-col px-6 text-ash">
            <li className="py-3">
              <NavLink
                to="/home"
                activeClassName="text-amber1"
                onClick={menuHandler}
              >
                Home
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="/listings"
                activeClassName="text-amber1"
                onClick={menuHandler}
              >
                Properties
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink
                to="#"
                activeClassName="text-amber1"
                onClick={() => {
                  handleToggleTheme();
                  menuHandler();
                }}
              >
                {mode === "light" ? "Dark" : "Light"}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
