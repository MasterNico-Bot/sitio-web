import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex, Heading, Text, Button, Stack, Avatar, AvatarGroup } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon } from '../components/Icon';
import { Feature } from '../components/Feature';
import Link from 'next/link';

interface BotStats {
  status?: 'ok';
  uptime: number;
  servers: number;
  users: number;
  featuredServers: Array<{ name: string; id: string; memberCount: number; icon: string }>;
}

const Home: NextPage = () => {
  const [data, setData] = useState<BotStats>({
    servers: 0,
    featuredServers: [],
    uptime: 0,
    users: 0
  });

  useEffect(() => {
    axios.get('https://botmasternicorico.herokuapp.com/').then(({ data }) => {
      setData(data);
    }).catch(() => {
      axios.get('https://app-name-uw.herokuapp.com/').then(({ data }) => {
        setData(data);
      })
    });
  }, []);

  return (
    <main>
      <Head>
        <title>Master Nico - El mejor bot de Discord</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Master Nico - El mejor bot de Discord" />
        <meta property="og:site_name" content="Master Nico" />
        <meta property="og:url" content="https://masternico.tk" />
        <meta
          property="og:description"
          content="Master Nico le dará la mejor experiencia a tus usuarios con las funciones que necesitas: autoroles, sorteos, bienvenidas, alertas de Twitch, diversión y mucho más."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#e45233" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/avatars/928357222617055372/4c0d2d97be9b3048f0b26cf0e45a42fb.webp?size=2048"
        />
        <meta name="title" content="Master Nico - Inicio" />
        <meta
          name="description"
          content="Master Nico le dará la mejor experiencia a tus usuarios de Discord con las funciones que necesitas. ¡Todo fácil de configurar!"
        />
        <meta name="keywords" content="discord, bot, moderación, utilidad, twitch, captcha" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="author" content="ByCodeNico" />
      </Head>
      <Flex
        px={['2rem', '4rem']}
        h="calc(100vh)"
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
          El mejor bot de Discord
        </Heading>
        <Text color="gray.300" maxW="700px" textAlign="center">
          Master Nico le dará la mejor experiencia a tus usuarios con las funciones que necesitas:
          autoroles, sorteos, bienvenidas, alertas de Twitch, diversión y mucho más.
        </Text>
        <Stack mt={5} gap={2} direction={['column', 'row']}>
          <Link href="/api/invite">
            <Button colorScheme="orange">Invitar</Button>
          </Link>
          <Link href="/commands">
            <Button variant="outline">Comandos</Button>
          </Link>
        </Stack>
      </Flex>
      <Flex
        bg="#010101"
        py="2rem"
        px={['2rem', '4rem']}
        align="center"
        justify="space-around"
        gap={5}
        flexDir={['column', 'row']}
      >
        <Text textAlign={['center', 'left']} fontWeight="semibold" fontSize="xl">
          Usado en {data.servers} servidores.
        </Text>
        <AvatarGroup size="md" max={5}>
          {data.featuredServers.map(({ name, id, icon }) => (
            <Avatar bg="gray.600" key={id} src={icon} name={name} />
          ))}
        </AvatarGroup>
      </Flex>
      <Feature
        heading="Saluda a los nuevos miembros de tu servidor"
        description="Envíe un mensaje de bienvenida a tus nuevos miembros e infórmalos acerca de la temática o eventos del servidor. Puede diseñar su propio mensaje e incluir una tarjeta."
        src="https://cdn.discordapp.com/attachments/1002784035313045515/1002790803044843520/wlc.png"
        alt="Sistema de Bienvenida"
      />
      <Feature
        heading="Crea sorteos de forma sencilla"
        description="Los comandos de este sistema son fáciles de usar. Podrás crear sorteos personalizables y al alcance de un comando."
        src="https://cdn.discordapp.com/attachments/1002784035313045515/1002813310028234882/sorteo.png"
        alt="Sistema de Sorteos"
        reverse
      />
      <Feature
        heading="Brinda soporte de manera organizada"
        description="Crea un panel de tickets donde tus usuarios elijan un tema a tratar. ¡El mensaje es personalizable!"
        src="https://cdn.discordapp.com/attachments/998095883814043659/1002818172694564884/tickets.png"
        alt="Sistema de Tickets"
      />
      <Feature
        heading="Permite a tus usuarios elegir roles a su gusto"
        description="El sistema de menu-roles te permite hacer que tus usuarios reciban un ping de anuncios, darles acceso a otras zonas del servidor, o simplemente personalizar sus perfiles."
        src="https://cdn.discordapp.com/attachments/1002784035313045515/1002822200472125480/roles.png"
        alt="Sistema de Tickets"
        reverse
      />
      <Flex px="3rem" py={10}>
        <Stack
          justify="space-evenly"
          align="center"
          gap={5}
          w="100%"
          direction={['column', 'column', 'row']}
        >
          <Heading
            textAlign={['center', 'center', 'center', 'left']}
            maxW="700px"
            fontWeight="medium"
            as={'h2'}
            fontSize="xl"
          >
            ¡Entérate de próximas actualizaciones!
          </Heading>
          <Link href="/api/discord">
            <Button minW="220px">
              <Icon id="discord" v="b" m="Right" /> Unirse al Discord
            </Button>
          </Link>
        </Stack>
      </Flex>
    </main>
  );
};

export default Home;
