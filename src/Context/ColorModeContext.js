import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({});

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            mode,
        }),
        [mode]
    );

    const theme = createTheme({
        palette: {
            mode: mode,
            primary: {
                light: "#706fd3",
                main: "#40407a",
                dark: "#2c2c54",
                green: "#00FF00",
                white: "#FFFFFF",
                contrastText: "#fff",
            },
            secondary: {
                light: "#6fbf73",
                main: "#4caf50",
                dark: "#357a38",
                contrastText: "#000",
            },
            info: {
                light: "#6fbf73",
                main: "#eb4d4b",
                dark: "#357a38",
                contrastText: "#000",
            },
            components: {
                MuiContainer: {
                    defaultProps: {
                        maxWidth: "lg", // 1200
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            fontSize: "1rem",
                            padding: "0.6rem 2.5rem",
                        },
                    },
                    defaultProps: {
                        variant: "contained",
                        color: "primary",
                        // disableRipple: true,
                    },
                },
            },
        },
    });

    const themeInfo = {
        theme,
        setMode,
        mode,
        colorMode,
    };
    return <ColorModeContext.Provider value={themeInfo}>{children}</ColorModeContext.Provider>;
};
