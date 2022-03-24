import React from 'react'
import { Button, Form, Message, Segment } from 'semantic-ui-react'
import Layout from './components/layout/Layout'

const signup = () => {
  return (
    <Layout>
    <Segment style = {{justifyContent: 'center'}}>

      
        <Message  content = "Sign up" header="Sign in" icon="meh" color='orange'/>
        <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="Email"
            // value={name}
            // onChange={handleChange}
            icon="envelope"
            iconPosition="left"
          />
        <Form.Input
            required
            label="Name"
            placeholder="name"
            name="name"
            // value={name}
            // onChange={handleChange}
            icon="user"
            iconPosition="left"
          />
        <Form.Input
            required
            label="Password"
            placeholder="Password"
            name="Password"
            // value={name}
            // onChange={handleChange}
            icon="eye"
            iconPosition="left"
          />
          <Button color='orange' content = 'Sign Up!' ></Button>
          

    </Segment>
    </Layout>
  )
}

export default signup
