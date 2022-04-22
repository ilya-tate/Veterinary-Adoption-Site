import React from "react";

const admin = () => {
  return (
    <div className="adminMain">
      <div className="pages">
        <div className="animals">
          <a href="/animals">
            <button className="adminButton">Animals</button>
          </a>
        </div>
        <div className="events">
          <a href="/events">
            <button className="adminButton">Events</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default admin;
