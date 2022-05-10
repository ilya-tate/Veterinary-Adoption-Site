import Router from "next/router";
import cookie from "js-cookie";
export const baseURL = `http://localhost:${process.env.PORT || 3000}`;

export const logoutUser = (email) => {
  cookie.set("userEmail", email);
  cookie.remove("token")
  Router.push("/login");
  Router.reload();
}

export const setToken = (token) => {
  cookie.set("token", token);
  Router.push("/");
  console.log(token);
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(Location);
  }
};