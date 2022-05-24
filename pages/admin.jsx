import Link from "next/link";
import React from "react";
import Layout from "../components/layout/Layout";

const admin = () => {
  return (
    <Layout>
      <div className="adminMain">
        <div className="pages">
          <div className="animals">
            <Link href="/adminAnimals">
              <button className="adminButton">Animals</button>
            </Link>
          </div>
          <div className="events">
            <Link href="/adminEvents">
              <button className="adminButton">Events</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default admin;
