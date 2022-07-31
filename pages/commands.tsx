import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  AccordionPanel,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Accordion,
  Code,
  Spinner
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon } from '../components/Icon';
import Link from 'next/link';

interface Commands {
  [k: string]: Array<{ name: string; description: string; usage: string }>;
}

const Home: NextPage = () => {
  const [data, setData] = useState<Commands>({});
  const [category, setCategory] = useState<string>('Administración');

  useEffect(() => {
    axios.get('https://botmasternicorico.herokuapp.com/commands').then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <main>
      <Head>
        <title>Master Nico - Comandos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Comandos - Master Nico" />
        <meta property="og:site_name" content="Master Nico" />
        <meta property="og:url" content="https://masternico.tk" />
        <meta
          property="og:description"
          content="Mira todos los comandos que te ofrece Master Nico."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#e45233" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/avatars/928357222617055372/4c0d2d97be9b3048f0b26cf0e45a42fb.webp?size=2048"
        />
      </Head>
      <Flex
        px={['2rem', '4rem']}
        h="50vh"
        minH="400px"
        flexDir="column"
        align="center"
        justify="center"
        bg="url(https://piggy.gg/images/page-background-image.png)"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <Heading
          my={5}
          maxW="900px"
          fontSize={['4xl', '5xl', '6xl', '6xl', '7xl']}
          textAlign="center"
          as={'h1'}
        >
          Comandos
        </Heading>
        <Text color="gray.300" maxW="700px" textAlign="center">
          Mira los comandos del bot.
        </Text>
        <Stack mt={5} gap={2} direction={['column', 'row']}>
          <Button colorScheme="orange">Invitar</Button>
          <Link href="/">
            <Button variant="outline">Inicio</Button>
          </Link>
        </Stack>
      </Flex>
      <Flex w="100%" flexDir="column" align="center" py="3rem" gap={5} px={['2rem', '4rem']}>
        <Flex justify="center" align="center">
          <Heading fontSize="2xl" fontWeight="semibold" as={'span'}>
            Comandos de{' '}
            <Menu>
              <MenuButton fontSize="2xl" fontWeight="semibold">
                {category} <Icon id="angle-down" m="Left" />
              </MenuButton>
              <MenuList bg="black" overflowY="scroll" maxH="200px">
                <MenuGroup title="Categorías">
                  {Object.keys(data).map(k => (
                    <MenuItem
                      fontSize="sm"
                      _hover={{ bg: 'whiteAlpha.400' }}
                      onClick={() => setCategory(k)}
                      key={k}
                    >
                      {k}
                    </MenuItem>
                  ))}
                </MenuGroup>
              </MenuList>
            </Menu>
          </Heading>{' '}
        </Flex>
        {data[category] ? (
          <Accordion allowToggle maxW="1000px" w="100%">
            {data[category].map((c, i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      /{c.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <b>Descripción:</b>
                  <br />
                  {c.description}
                  <br />
                  <br />
                  <b>Uso:</b>
                  <br />
                  <Code colorScheme="orange">
                    /{c.name} {c.usage}
                  </Code>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Spinner size="lg" mx="auto" />
        )}
      </Flex>
    </main>
  );
};

export default Home;
