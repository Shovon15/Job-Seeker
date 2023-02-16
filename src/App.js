import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ColorModeContext } from "./Context/ColorModeContext";
import router from "./Routes/Routes/Routes";

function App() {
    const { theme } = useContext(ColorModeContext);
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}></RouterProvider>
                <CssBaseline />
            </ThemeProvider>
        </Box>
    );
}

export default App;
