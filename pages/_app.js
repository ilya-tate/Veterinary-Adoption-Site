import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/list.css";
import "../public/logo.png";
import "../public/DarkLogo.png";
import "../styles/home.css";
import Layout from "./components/layout/Layout";
import { redirectUser } from "./util/auth";
import { parseCookies, destroyCookie } from "nookies";
import axios from "axios";
import { baseURL } from "./util/baseURL";
import {useState, react} from "react";

const MyApp = ({ Component, pageProps }) => {
  const [darkmode, setDarkmode] = useState(false)
  return (
    <Layout user={pageProps} darkmode={darkmode} setDarkmode={setDarkmode}>
      <Component {...pageProps} darkmode={darkmode} setDarkmode={setDarkmode}/>
    </Layout>
  );
};

// MyApp.getInitialProps = async ({ ctx, Component }) => {
//   const { token } = parseCookies(ctx);
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   const protectedRoutes = ["/"];
//   const isProtectedRoute = protectedRoutes.includes(ctx.pathname);

//   if (!token) {
//     isProtectedRoute && redirectUser(ctx, "/login");
//   } else {
//     try {
//       const res = await axios.get(`${baseURL}/api/v1/auth`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const { user } = res.data;

//       if (user) !isProtectedRoute && redirectUser(ctx, "/");

//       pageProps.user = user;
//     } catch (error) {
//       destroyCookie(ctx, "token");
//       redirectUser(ctx, "/login");
//     }
//   }
//   return { pageProps };
// };

export default MyApp;
