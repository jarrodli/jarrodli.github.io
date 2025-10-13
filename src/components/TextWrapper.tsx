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
    paddingTop?: string;
}

const TextWrapper: FunctionComponent<Props> = ({ children, ...props }) => {
    return (
        <Text
            textAlign={{ base: "justify", md: "left", lg: "left" }}
            paddingTop="1"
            paddingBottom="1"
            fontSize={{ base: "24px", md: "24px", lg: "24px" }}
            {...props}
        >
            {children}
        </Text>
    );
};

export default TextWrapper;
