import { Divider, Message, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";
  return (
    <Message
      icon={signupRoute ? "settings" : "privacy"}
      color="blue"
      header={signupRoute ? "Get Started Here" : "Welcome Back"}
      content={
        signupRoute ? "Create a new account" : "Login with Email and Password"
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
            Existing User? <Link href="/login">Login here instead</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="top" info>
            <Icon name="lock" />
            <Link href="/reset">Forgot Password?</Link>
          </Message>
          <Message attached="bottom" warning>
            <Icon name="help" />
            New User? <Link href="/signup"> Signup Here </Link>
          </Message>
        </>
      )}
    </>
  );
};
