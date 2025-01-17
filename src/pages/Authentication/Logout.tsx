import { useAuth0 } from '@auth0/auth0-react';
import { reset } from 'instrumentation/analytics';
import { auth } from 'utils/spaUrls';
import React from 'react';


export default function Logout() {
  const { logout } = useAuth0();
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
  React.useEffect(() => {
    localStorage.clear();
    reset();
    logout({
      clientId,
      logoutParams: { returnTo: `${window.location.origin}${auth.login}` },
    });
  }, [clientId, logout]);

  return null;
}
