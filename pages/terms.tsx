import { Button, Flex, Heading, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Terms() {
  return (
    <main>
      <Head>
        <title>Master Nico - Terminos de Servicio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Términos de Servicio - Master Nico" />
        <meta property="og:site_name" content="Master Nico" />
        <meta property="og:url" content="https://masternico.tk" />
        <meta
          property="og:description"
          content="Infórmate acerca de los términos de servicio de Master Nico."
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
          Términos de Servicio
        </Heading>
        <Stack mt={5} gap={2} direction={['column', 'row']}>
          <Link href="/policy">
            <Button colorScheme="orange">Política de Privacidad</Button>
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
        <Heading as="h2" fontSize="2xl">
          Introducción
        </Heading>
        <Text color="gray.300">
          ¡Primero ante todo muchas gracias por dar la oportunidad a Master Nico en tu servidor!
        </Text>
        <Text color="gray.300">
          Al utilizar el bot o al entrar a la pagina web aceptas los términos de servicio.
        </Text>
        <Text color="gray.300">Si no estas de acuerdo puedes abandonar el sitio web.</Text>
        <Heading as="h2" fontSize="2xl">
          Datos de usuario/servidor
        </Heading>
        <OrderedList color="gray.300" spacing={5}>
          <ListItem>
            Master Nico almacena únicamente los datos del servidor en el que se ejecuto el comando
            backup.
          </ListItem>
          <ListItem>Ninguno de los datos guardados son vendidos ni prestados a nadie.</ListItem>
          <ListItem>
            Los datos solo son necesarios para el uso de los 4 comandos de backup que existen, si no
            compartes esos datos son imposibles que sean públicos.
          </ListItem>
          <ListItem>Al ser tu información, tú puedes decidir si quieres que sea guardada.</ListItem>
          <ListItem>
            Tienes todo el permiso de acceder a los datos del servidor, siempre y cuando
            verifiquemos que eres el propietario del mismo.
          </ListItem>
        </OrderedList>
      </Flex>
    </main>
  );
}
