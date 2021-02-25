import Head from 'next/head';

import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter';

import LandingPage from '../pages/Landing/Landing';

const App = () => (
  <>
    <GlobalHeader />

    <LandingPage />

    <GlobalFooter />
  </>
);

export default App;
