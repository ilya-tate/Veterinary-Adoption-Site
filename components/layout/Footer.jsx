import { Divider, Grid } from "semantic-ui-react";

const Footer = ({ darkmode }) => {
  return (
    <div
      // style={{
      //   position: "relative",
      //   bottom: "0",
      //   background: "black",
      //   color: "white",
      // }}
    >
      <Grid centered>
        <a
          className="return"
          href="#top"
          style={
            darkmode
              ? {
                  marginTop: "-20px",
                  background: "rgb(0, 181, 204)",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "25px",
                  height: "35px",
                  width: "40px",
                  borderRadius: "35px",
                  textAlign: "center",
                }
              : {
                  marginTop: "-20px",
                  background: "blue",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "25px",
                  height: "35px",
                  width: "40px",
                  borderRadius: "35px",
                  textAlign: "center",
                }
          }
        >
          ^
        </a>
        <Grid.Row>{`\u00A9 ${new Date().getFullYear()} West-MEC`}</Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h3>Socials:</h3>
            <ul {/**listStyle: "none", paddingLeft: "0" }}*/}>
              <li>
                <a
                  href="https://www.instagram.com/westmecvetsciences/"
                  className="item footerItem"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a className="item footerItem" href="">
                  Placeholder
                </a>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h3>Other:</h3>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li>
                <a className="item footerItem" href="login">
                  Login
                </a>
              </li>
              <li>
                <a className="item footerItem" href="signup">
                  Sign Up
                </a>
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Footer;
