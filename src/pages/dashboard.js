import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import dynamic from 'next/dynamic'
import { theme } from "@chakra-ui/react";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})
const dashboard = () => {
    const options = {
        chart: {
          toolbar: {
            show:false,
          },
          zoom: {
            enabled: false,
          },
          foreColor: theme.colors.gray[500],
        },
        grid: {
          show:false,
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            color: theme.colors.gray[600]
          },
          axisTicks: {
            color: theme.colors.gray[600]
          },
          categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',
            '2021-03-24T00:00:00.000Z',
            '2021-03-25T00:00:00.000Z',
          ]
        },
        fill: {
          opacity: 0.3,
          type: 'gradient',
          gradient: {
            shade: 'dark',
            opacityGrom: '0.7',
            opacityTo: '0.3'
          }
        }
    };
    const series = [
        { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }
]
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px={["4", "6"]}>
                <Sidebar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p={["6","8"]} bg="gray.700" borderRadius={8}>
                        <Text>Inscritos da semana</Text>
                        <Chart type="area" height={160} options={options} series={series} />
                    </Box>
                    <Box p={["6","8"]} bg="gray.700" borderRadius={8}>
                        <Text>Taxa de abertura</Text>
                        <Chart type="area" height={160} options={options} series={series} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default dashboard
