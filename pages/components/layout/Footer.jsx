import { Divider, Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <div style={{ position: "relative", bottom: "0" }}>
      <Divider
        style={{ backgroundColor: "gray", color: "gray", height: "5px" }}
      />
      <Grid>
        <Grid.Row>&copy Copywrite West-MEC</Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h3>Other Links:</h3>
            <ul style={{ listStyle: "none" }}>
              <li></li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h3>Socials:</h3>
            <ul style={{ listStyle: "none" }}>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Footer;
