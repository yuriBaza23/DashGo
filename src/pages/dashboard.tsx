import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import theme from "@chakra-ui/theme"
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
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
            '2021-05-28T00:00:00.000Z',
            '2021-05-29T00:00:00.000Z',
            '2021-05-30T00:00:00.000Z',
            '2021-05-31T00:00:00.000Z',
            '2021-06-01T00:00:00.000Z',
            '2021-06-02T00:00:00.000Z',
            '2021-06-03T00:00:00.000Z'
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}

const series = [
    { name: 'series1', data: [1, 120, 10, 28, 61, 18, 109] }
]

export default function Dashboard() {
    return(
        <Flex direction='column' h='100vh'>
            <Header/>
            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar/>

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
                    <Box
                        p={['6', '8']}
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                        <Chart type='area' height={160} options={options} series={series}/>
                    </Box>
                    <Box
                        p={['6', '8']}
                        bg='gray.800'
                        borderRadius={8}
                        pb='4'
                    >
                        <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                        <Chart type='area' height={160} options={options} series={series}/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}