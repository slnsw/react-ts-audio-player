import * as React from 'react';
import { PlayerRemoteProvider } from '../../../dist';

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <div>
        {/* <PlayerRemoteProvider> */}
          <Component {...pageProps} />
        {/* </PlayerRemoteProvider> */}
      </div>
    </React.StrictMode>
  );
}

export default MyApp;
