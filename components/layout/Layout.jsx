import Nav from "./Nav";

const Layout = ({ children, user, darkmode, setDarkmode, index }) => {
  //createRef refreshes on render()
  //userRef refreshes on router.reload() page refreh
  // const contextRef = createRef();

  return (
    <>
      <Nav setDarkmode={setDarkmode} darkmode={darkmode} />
      <div style={{paddingTop: '1rem'}}>
        {children}
      </div>
    </>
  );
};

export default Layout;
