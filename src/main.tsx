import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import theme from "./theme.js";
import Fonts from "./Fonts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Fonts />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
