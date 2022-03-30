import { Divider, Message, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";
  return (
    <Message
      icon={signupRoute ? "settings" : "privacy"}
      color="orange"
      header={signupRoute ? "Get started here" : "Welcome Back"}
      content={
        signupRoute ? "Create a new account" : "Login with email and password"
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message warning attached="bottom">
            <Icon name="help" />
            Existing user? <Link href="/login">Login here instead</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="top" info>
            <Icon name="lock" />
            <Link href="/reset">Forgot password?</Link>
          </Message>
          <Message attached="bottom" warning>
            <Icon name="help" />
            New User? <Link href="/signup"> Sign Up Here </Link>
          </Message>
        </>
      )}
    </>
  );
};


module.exports = {HeaderMessage, FooterMessage}