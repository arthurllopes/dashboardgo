import React from 'react'
import { Stack } from "@chakra-ui/react";
import PagesComponent from './PagesComponent';

const Pagination = ({totalCountOfRegisters, currentPage, registerPerPage, pageChange}) => {

    return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <PagesComponent totalCountOfRegisters={totalCountOfRegisters} 
      currentPage = {currentPage} registerPerPage={registerPerPage} pageChange={pageChange}
      />
    </Stack>
    )
}

export default Pagination
