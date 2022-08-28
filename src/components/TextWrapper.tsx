import { FunctionComponent, ReactNode, useState } from "react";
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

interface Props {
    children: ReactNode;
}

const TextWrapper: FunctionComponent<Props> = ({ children }) => {
    return (
        <Text
            textAlign="justify"
            padding="4"
            fontSize={{ base: "24px", md: "3xl", lg: "3xl" }}
        >
            {children}
        </Text>
    );
};

export default TextWrapper;
