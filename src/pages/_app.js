import GlobalHeader from "../components/GlobalHeader/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter/GlobalFooter";

// CSS Reset
import "../styles/utils/reset.css";

// Normalize CSS (https://necolas.github.io/normalize.css/)
import "../styles/utils/normalize.css";

// General Styles
import "../styles/base.css";

// Helper Files
import "../styles/helpers/typography.css";
import "../styles/helpers/utils.css";
import "../styles/helpers/sr-only.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalHeader />
    <Component {...pageProps} />
    <GlobalFooter />
  </>
);

export default MyApp;
