import "../styles/globals.css";
import esTranslations from "@shopify/polaris/locales/es.json";
import { AppProvider, Button } from "@shopify/polaris";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider i18n={esTranslations}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
