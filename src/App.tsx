import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DataFormProvider } from "./context/DataFormContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <DataFormProvider>
          <Router />
        </DataFormProvider>
      </BrowserRouter>

    </ThemeProvider>
  )
}

