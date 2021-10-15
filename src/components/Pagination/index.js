import React from 'react'
import { Stack } from "@chakra-ui/react";
import PagesComponent from './PagesComponent';

const Pagination = () => {
    return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <PagesComponent />
    </Stack>
    )
}

export default Pagination
