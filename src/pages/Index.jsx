import { Box, Flex, Text, Button, useColorMode, VStack, HStack, Input, IconButton, Table, Thead, Tbody, Tr, Th, Td, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FaToggleOn, FaToggleOff, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';

const mockTrades = Array.from({ length: 25 }, (_, i) => ({
  date: `2023-09-${Math.floor(Math.random() * 30 + 1)}`,
  name: `Bot ${i + 1}`,
  start: `$${Math.random() * 1000}`,
  end: `$${Math.random() * 1000}`,
  duration: `${Math.random() * 24}`,
  result: Math.random() > 0.5 ? 'Profit' : 'Loss',
  profit: `$${Math.random() * 100}`,
  change: `${Math.random() * 10}%`
}));

const mockActivities = Array.from({ length: 10 }, (_, i) => ({
  activity: `Activity ${i + 1}`,
  detail: `Detail ${i + 1}`
}));

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box bg="white" color="almostBlack">
      <Flex justifyContent="space-between" p={4} borderBottom="1px" borderColor="gray.200">
        <HStack spacing={8}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Bots</Button>
          <Button variant="ghost">Settings</Button>
          <Button variant="ghost">Account</Button>
        </HStack>
        <HStack spacing={4}>
          <IconButton icon={colorMode === 'light' ? <FaToggleOff /> : <FaToggleOn />} onClick={toggleColorMode} />
          <Button rightIcon={<FaSignOutAlt />} colorScheme="blue">Log out</Button>
        </HStack>
      </Flex>
      <Flex p={4} justifyContent="space-between">
        <VStack bg="gray.50" p={4} borderRadius="lg" boxShadow="md" w="30%">
          <Text fontSize="xl">✨ Trades</Text>
          <Text fontSize="2xl">$21,359</Text>
        </VStack>
        <VStack bg="gray.50" p={4} borderRadius="lg" boxShadow="md" w="30%">
          <Text fontSize="xl">💰 Profit</Text>
          <Text fontSize="2xl">$5,000</Text>
          <Box w="full" bg="green.200" h="10px" borderRadius="full" />
        </VStack>
        <VStack bg="gray.50" p={4} borderRadius="lg" boxShadow="md" w="30%">
          <Text fontSize="xl">⛰️ Milestones</Text>
          <Input placeholder="Enter milestone" />
          <Button colorScheme="blue">Take profit</Button>
        </VStack>
      </Flex>
      <Box p={4}>
        <Tabs>
          <TabList>
            <Tab>Trades</Tab>
            <Tab>Activities</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Input placeholder="Search trades..." onChange={(e) => setSearchTerm(e.target.value)} />
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Name</Th>
                    <Th>Start</Th>
                    <Th>End</Th>
                    <Th>Duration</Th>
                    <Th>Result</Th>
                    <Th>Profit</Th>
                    <Th>% Change</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {mockTrades.filter(trade => trade.name.toLowerCase().includes(searchTerm.toLowerCase())).map((trade, index) => (
                    <Tr key={index}>
                      <Td>{trade.date}</Td>
                      <Td>{trade.name}</Td>
                      <Td>{trade.start}</Td>
                      <Td>{trade.end}</Td>
                      <Td>{trade.duration}</Td>
                      <Td>{trade.result}</Td>
                      <Td>{trade.profit}</Td>
                      <Td>{trade.change}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Activity</Th>
                    <Th>Detail</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {mockActivities.map((activity, index) => (
                    <Tr key={index}>
                      <Td>{activity.activity}</Td>
                      <Td>{activity.detail}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Flex justifyContent="center" p={4} bg="gray.100">
        <Text color="gray.600">© 2023 Crypto Dashboard</Text>
      </Flex>
    </Box>
  );
};

export default Index;