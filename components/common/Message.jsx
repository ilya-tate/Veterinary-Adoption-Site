import { useRouter } from "next/router";
import { Icon, Message } from "semantic-ui-react";
import { useState } from "react";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const isSignup = router.pathname === "/signup";
  const [hideMessage, setHideMessage] = useState(false);
  return (
    <Message
      hidden={false}
      onDismiss={() => {
        setHideMessage();
      }}
      color="orange"
      icon={isSignup ? "settings" : "privacy"}
      header={isSignup ? "Get started here" : "Welcome Back"}
      content={
        isSignup ? "Create new account" : "login with email and password"
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const isSignup = router.pathname === "/signup";
  return (
    <>
      {isSignup ? (
        <>
          <Message warning>
            <Icon name="help" />
            Existing user? <Link href="/login">Log in here</Link>
          </Message>
        </>
      ) : (
        <>
          <Message attached="top" info>
            <Icon name="lock" />
            <Link href="/reset">Forgot Password</Link>
          </Message>
          <Message warning attached="bottom">
            <Icon name="help" />
            New User? <Link href="/signup">Sign Up Here</Link>
          </Message>
        </>
      )}
    </>
  );
};
