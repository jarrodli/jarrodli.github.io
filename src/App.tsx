import { useState } from "react";
import "./App.css";
import {
    Box,
    Center,
    Container,
    Flex,
    Heading,
    Link,
    ListItem,
    Spacer,
    Square,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import TextWrapper from "./components/TextWrapper";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <Container padding={{ base: "8", md: "16", lg: "16" }} maxW="4xl">
            {/* <Heading
                textAlign="center"
                fontSize={{ base: "38px", md: "38px", lg: "38px" }}
            >
                About
            </Heading> */}
            <Box padding={{ base: "0", md: "0", lg: "0" }} color="black">
                <TextWrapper>
                    Jarrod is currently a Lawyer at the{" "}
                    <Link
                        color="blue.400"
                        href="https://www.ags.gov.au/people/profiles/li-jarrod"
                        target="_blank"
                    >
                        Australian Government Solicitor
                    </Link>{" "}
                    and a Systems Engineer / Data Scientist at{" "}
                    <Link
                        color="blue.400"
                        href="https://jade.io/"
                        target="_blank"
                    >
                        Jade
                    </Link>
                    . He was previously an Associate to a Judge of the{" "}
                    <Link
                        color="blue.400"
                        href="https://supremecourt.nsw.gov.au/"
                        target="_blank"
                    >
                        Supreme Court of New South Wales
                    </Link>
                    .
                </TextWrapper>
                <TextWrapper paddingTop="4">
                    He was admitted as a Lawyer of the Supreme Court of New
                    South Wales in 2025.
                </TextWrapper>
                <TextWrapper paddingTop="4">
                    He graduated from UNSW Sydney with an LL.B., Laws (Honours)
                    and a B.Sc., Computer Science (Distinction).
                </TextWrapper>
                {/* <TextWrapper>
                    My previous work is available on{" "}
                    <Link
                        color="blue.400"
                        href="https://www.linkedin.com/in/jarrodli/"
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                    {" and "}
                    <Link
                        color="blue.400"
                        href="https://github.com/jarrodli"
                        target="_blank"
                    >
                        GitHub
                    </Link>
                    .
                </TextWrapper> */}
            </Box>

            <Container centerContent paddingTop="8" color="black">
                <TextWrapper>{"admin at jarrodli dot com"}</TextWrapper>
            </Container>
        </Container>
    );
};

export default App;
