import { Divider, Grid } from "semantic-ui-react";
import MainEvent from "./components/events/MainEvent";
import Footer from "./components/layout/Footer";

const events = () => {
  return (
    <>
      <Divider />
      <Grid stackable>
        <Grid.Row>
          <MainEvent />
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Footer />
        </Grid.Row>
      </Grid>
    </>
  );
};

export default events;
