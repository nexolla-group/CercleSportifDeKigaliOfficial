import React from "react";

const HeaderWhenLoggedIn = () => {
  const logout = () => {
    localStorage.clear();
    window.location = "";
  };
  return (
    <>
      <nav
        style={{ height: 250, padding: 50 }}
        className="navbar navbar-expand-lg bg-light "
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <style jsx>
              {`
                button[aria-expanded="false"] > .close {
                  display: none;
                }
                button[aria-expanded="true"] > .open {
                  display: none;
                }
              `}
            </style>

            <i class="fas fa-bars open fw-bold text-light"></i>
            <i class="fas fa-times close fw-bold text-light"></i>
          </button>
          <div
            className="collapse d-inline navbar-collapse justify-content-left "
            id="navbarTogglerDemo03"
          ></div>
          <div
            style={{
              color: "#fff",
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 50,
              padding: "5px 0",
            }}
            class="text-light"
          >
            <div
              onClick={logout}
              style={{ padding: "1px 45px" }}
              className="btn btn-sm btn-outline-danger fs-5"
            >
              Logout
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderWhenLoggedIn;
