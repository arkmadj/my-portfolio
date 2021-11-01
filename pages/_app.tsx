import type { AppProps } from "next/app";
import { GlobalStyles } from "../components/Styled/GlobalStyles.style";
import { StyledHeader } from "../components/Styled/Header.style";
import { StyledFooter } from "../components/Styled/Footer.style";
import { AppContainer } from "../components/Styled/Container.style";
import { ThemeProvider } from "styled-components";
import { appTheme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <StyledHeader />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
      <StyledFooter />
    </ThemeProvider>
  );
}
export default MyApp;
