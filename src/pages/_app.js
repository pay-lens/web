import GlobalHeader from "../components/organisms/GlobalHeader/GlobalHeader";
import GlobalFooter from "../components/organisms/GlobalFooter/GlobalFooter";

// CSS Reset
import "../styles/css/reset.css";

// Normalize CSS (https://necolas.github.io/normalize.css/)
import "../styles/css/normalize.css";

// General Styles
import "../styles/css/base.css";

// Helper Files
import "../styles/css/typography.css";
import "../styles/css/utils.css";
import "../styles/css/sr-only.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalHeader />
    <Component {...pageProps} />
    <GlobalFooter />
  </>
);

export default MyApp;
