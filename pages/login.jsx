import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";
import {
  FooterMessage,
  HeaderMessage,
} from "./components/common/WelcomeMessage";
import { setToken } from "./util/auth";
import catchErrors from "./util/catchErrors";

const login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  //* STATES */
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const changePages = () => {
    setTimeout(() => {
      window.location.replace("/home");
    }, 2000);
  };

  //* HANDLERS */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const res = await axios.post("/api/v1/user/login", { user });
      setToken(res.data);
    } catch (error) {
      const errorMsg = catchErrors(error);
      setErrorMsg(errorMsg);
    }
    setFormLoading(false);
  };

  //* EFFECTS */
  useEffect(() => {
    setSubmitDisabled(!(email && password));
  }, [user]);

  useEffect(() => {
    document.title = `Welcome Back!`;
    const userEmail = Cookies.get("userEmail");
    if (userEmail) setUser((prev) => ({ ...prev, email: userEmail }));
  }, []);


  return (
    <>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
          <Segment>
            <Form.Input
              required
              label="Email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              name="email"
              icon="envelope"
              iconPosition="left"
              type="email"
            />
            <Form.Input
              required
              label="Password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              name="password"
              icon={{
                name: showPassword ? "eye slash" : "eye",
                link: true,
                circular: true,
                onClick: () => {
                  setShowPassword(!showPassword);
                },
              }}
              iconPosition="left"
              type={showPassword ? "text" : "password"}
            />
            <Divider hidden />
            <button onClick={()=>{
              changePages()
              }} style={{border: 'none', width: "100px", height: "40px", borderRadius: "0px", marginRight: "20px"}}>Go Back</button>
            <Button
              color="orange"
              content="Login"
              icon="signup"
              type="submit"
              disabled={submitDisabled}
            />
          </Segment>
        </Form>
        <FooterMessage />
    </>
  );
};

export default login;
