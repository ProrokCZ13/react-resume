import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Vojtech!";
const bio1 = "A frontend developer";
const bio2 = "specialised in anything but React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <img
        src={require('../images/avatar.png')}
        alt="ME :3"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%', // makes it round like Avatar
          objectFit: 'cover'
  }}
/>
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
