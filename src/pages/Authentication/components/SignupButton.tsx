import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import React from 'react';


export default function SignupButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button color='primary' disabled onClick={() => loginWithRedirect()}>
      Sign Up
    </Button>
  );
}
