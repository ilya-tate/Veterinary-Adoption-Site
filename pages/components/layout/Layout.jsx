import { Container } from "semantic-ui-react";
import Nav from "./Nav";

const Layout = ({ children, user }) => {
  //createRef refreshes on render()
  //userRef refreshes on router.reload() page refreh
  // const contextRef = createRef();

  return (
    <>
      <Nav />

      <Container text style={{ paddingTop: "1rem" }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
