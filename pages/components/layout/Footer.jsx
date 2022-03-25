import { Divider, Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <div style={{ position: "relative", bottom: "0", background: "black", color: "white" }}>
      <Grid centered>
        <Grid.Row>{`\u00A9 ${new Date().getFullYear()} West-MEC`}</Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h3>Socials:</h3>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li>
                <a href="https://www.instagram.com/westmecvetsciences/" className="item footerItem">
                  Instagram
                </a>
              </li>
              <li><a className="item footerItem">Placeholder</a></li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h3>Other:</h3>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li><a className="item footerItem" href="login">Login</a></li>
              <li><a className="item footerItem" href="signup">Sign Up</a></li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Footer;
