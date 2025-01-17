import { Auth0Provider } from '@auth0/auth0-react';
import { auth } from 'utils/spaUrls';
import { ReactNode } from 'react';


const landingPadUri = `${window.location.origin}${auth.landingPad}`;

export default function Auth0ProviderWithHistory({ children }: { children: ReactNode }) {
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE || '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';

  return (
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      useRefreshTokens
      useRefreshTokensFallback
      authorizationParams={{
        audience,
        scope: 'openid profile email',
        redirect_uri: landingPadUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
}
