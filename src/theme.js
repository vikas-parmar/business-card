import { createTheme } from "@mui/material";

const PrimaryMainTheme = createTheme({
  palette: {
    primary: {
      main: "#605d6f",
    },
    secondary: {
        main: "#272534"
    }
  }
});

export { PrimaryMainTheme };

export const theme = createTheme(PrimaryMainTheme);