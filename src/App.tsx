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
        <Container
            centerContent
            padding={{ base: "8", md: "16", lg: "16" }}
            maxW="8xl"
        >
            <Heading fontSize={{ base: "40px", md: "56px", lg: "56px" }}>
                About
            </Heading>
            <Box padding={{ base: "0", md: "4", lg: "4" }} color="black">
                <TextWrapper>
                    My name is Jarrod Li, a Computer Science and Law student at{" "}
                    <Link
                        color="blue.400"
                        href="https://www.unsw.edu.au/"
                        target="_blank"
                    >
                        UNSW Sydney
                    </Link>
                    . I currently work at{" "}
                    <Link
                        color="blue.400"
                        href="https://jade.io/"
                        target="_blank"
                    >
                        JADE
                    </Link>{" "}
                    in the areas of <Text as="b">Legal Informatics</Text>, Data
                    Science, and Software Engineering. See a recent example of
                    my work at{" "}
                    <Link
                        color="blue.400"
                        href="https://labs.jade.io/"
                        target="_blank"
                    >
                        JADE labs
                    </Link>
                    . From time to time, I also lend support to our fantastic
                    law faculty as a Research Assistant.
                </TextWrapper>
                <TextWrapper>
                    Especially interested in <Text as="b">Rules as Code</Text>,
                    digital competition, data privacy, and cybersecurity law.
                    See an example of my work{" "}
                    <Link
                        color="blue.400"
                        href="https://unsw-my.sharepoint.com/:b:/g/personal/z5169806_ad_unsw_edu_au1/ETIan7ghukdPgeqtBmdeDewBcAvBqoRl8wSGriKg52MTIQ?e=e82348"
                        target="_blank"
                    >
                        here
                    </Link>
                    . If you're also interested in the intersection between law
                    and technology, I encourage you to get in touch!
                </TextWrapper>
                <TextWrapper>
                    At the moment, my primary focus is on developing{" "}
                    <Text as="b">robust LegalTech designs</Text> that are
                    capable of incorporating our laws, customs, and values in a
                    reproducible way.
                </TextWrapper>
                <TextWrapper>
                    Naturally obsessed with Rust and its ADT's, fast runtime,
                    and vibrant ecosystem.
                </TextWrapper>
                <TextWrapper>
                    Discover more about my technical skills and previous work on{" "}
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
                    </Link>{" "}
                    .
                </TextWrapper>
            </Box>
            <TextWrapper>{"< admin at jarrodli dot com >"}</TextWrapper>
        </Container>
    );
};

export default App;
