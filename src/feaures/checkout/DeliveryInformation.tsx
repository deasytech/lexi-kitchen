import {
  Box,
  Card,
  CardBody,
  CardHeader,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const DeliveryInformation = () => {
  return (
    <Card borderWidth="1px" borderColor="grady.200" shadow="none">
      <CardHeader>
        <Heading size="md">Delivery Informaion</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing="2rem">
          <Box>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Enter your Full Name" />
          </Box>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your Email" />
          </Box>
          <Box>
            <FormLabel>Telephone</FormLabel>
            <Input type="tel" placeholder="Enter your Telephone" />
          </Box>
          <Box>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Enter your Address" />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DeliveryInformation;
