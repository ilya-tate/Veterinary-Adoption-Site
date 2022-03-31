import axios from 'axios';
import React from 'react'
import { Button, Form, Message, Segment } from 'semantic-ui-react'
import { useState } from 'react';
import Layout from './components/layout/Layout';
import { setToken } from './util/auth';


const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });


  const options = [
    { key: 's', text: 'student', value: 'student' },
    { key: 't', text: 'teacher', value: 'teacher' },

  ]


  const { name, email, password, role } = user;
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post('/api/v1/user/signup', {
        user
      })
      setToken(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  }
  const handleChange = (e) => {
    const { name, value, files, innerText } = e.target;

    if (name === "media" && files.length) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
      setHighlighted(true);
    } else if (innerText) {
      setUser((prev) => ({ ...prev, role: innerText }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <Layout>
      <Segment style={{ justifyContent: 'center' }}>


        <Message content="Sign up" header="Sign in" icon="meh" color='orange' />
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
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
            value={name}
            onChange={handleChange}
            // onChange={handleChange}
            icon="user"
            iconPosition="left"
          />
          <Form.Input
            required
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            // value={name}
            // onChange={handleChange}
            icon="eye"
            iconPosition="left"
          />

          <Form.Select placeholder='role' options={options} name='role' onChange={(e) => {
            setUser((prev) => ({ ...prev, role: e.target.innerText }))
    
          }
          } />
          <Button color='orange' content='Sign Up!' type='submit' />
        </Form>
      </Segment>
    </Layout>
  )
}

export default signup
