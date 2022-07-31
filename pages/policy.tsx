import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  OrderedList,
  Stack,
  Text
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <main>
      <Head>
        <title>Master Nico - Política de Privacidad</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Política de Privacidad - Master Nico" />
        <meta property="og:site_name" content="Master Nico" />
        <meta property="og:url" content="https://masternico.tk" />
        <meta
          property="og:description"
          content="Infórmate acerca de la política de privacidad de Master Nico."
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
          Política de Privacidad
        </Heading>
        <Stack mt={5} gap={2} direction={['column', 'row']}>
          <Link href="/terms">
            <Button colorScheme="orange">Términos de Servicio</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Inicio</Button>
          </Link>
        </Stack>
      </Flex>
      <Flex
        gap={5}
        flexDir="column"
        px="3rem"
        className="partner-section"
        mx="auto"
        py="3rem"
        maxW="1000px"
      >
        <Text color="gray.300">
          El equipo de Master Nico entiende lo importante que es la privacidad de sus usuarios, es
          algo que se respeta y se toma enserio.
        </Text>
        <Text color="gray.300">
          A continuación, te invitamos a que leas en detalle y aprendas más acerca de nuestra
          política de privacidad.
        </Text>
        <Heading as="h2" fontSize="2xl">
          Master Nico recolecta por tiempo indefinido la siguiente información:
        </Heading>
        <OrderedList color="gray.300" spacing={5}>
          <ListItem>
            Métricas anónimas:
            <List spacing={3} ml=".5rem" mt=".5rem">
              <ListItem>Mensajes recibidos por segundo.</ListItem>
              <ListItem>Comandos ejecutados por minuto.</ListItem>
              <ListItem>Peticiones hechas a la API de Discord.</ListItem>
            </List>
          </ListItem>
          <ListItem>
            Respaldos nocturnos de la base de datos que contiene por ejemplo el comando backup.
          </ListItem>
          <ListItem>Registros internos para combatir el spam (uso excesivo de comandos).</ListItem>
        </OrderedList>
        <Heading as="h2" fontSize="2xl">
          Información que Master Nico no recolecta:
        </Heading>
        <OrderedList color="gray.300" spacing={5}>
          <ListItem>Cualquier cosa que no esté incluida en los puntos de arriba.</ListItem>
          <ListItem>
            Contenido de los mensajes (son obtenidos directamente de la API de Discord para mover el
            mensaje a destacados).
          </ListItem>
          <ListItem>Información que no es utilizada por el bot.</ListItem>
        </OrderedList>

        <Alert status="info">
          <AlertIcon />
          El bot lee los mensajes de los usuarios de Discord con fines de funcionamiento y
          moderativos.
        </Alert>
      </Flex>
    </main>
  );
}
