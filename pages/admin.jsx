import React from "react";
import Layout from "../components/layout/Layout";

const admin = () => {
  return (
    <Layout>
      <div className="adminMain">
        <div className="pages">
          <div className="animals">
            <a href="/adminAnimals">
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
    </Layout>
  );
};

export default admin;
