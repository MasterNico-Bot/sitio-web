import {
  Avatar,
  Flex,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import Link from 'next/link';

const allPartners = [
  { name: 'Kiaura', id: 'kiaura' },
  { name: 'Sophia Bot', id: 'sophia-bot' },
  { name: 'Zeew', id: 'zeew' }
];

export const Navbar = () => (
  <Flex
    zIndex={9999}
    top={0}
    position="fixed"
    justify="space-around"
    align="center"
    w="100vw"
    h="60px"
    bg="#20202010"
    backdropFilter="blur(20px)"
  >
    <Link href="/">
      <Avatar
        className="cursor"
        size="sm"
        name="Master Nico"
        src="https://cdn.discordapp.com/avatars/928357222617055372/4c0d2d97be9b3048f0b26cf0e45a42fb.webp?size=48"
      />
    </Link>
    <List fontSize="sm" display="flex" gap={5}>
      <Link href="/commands">
        <ListItem cursor="pointer">Comandos</ListItem>
      </Link>
      <Menu>
        <MenuButton>Enlaces</MenuButton>
        <MenuList bg="black">
          <Link href={`/terms`}>
            <MenuItem _hover={{ bg: 'whiteAlpha.300' }} color="gray.300">
              Términos de Servicio
            </MenuItem>
          </Link>
          <Link href={`/terms`}>
            <MenuItem _hover={{ bg: 'whiteAlpha.300' }} color="gray.300">
              Política de Privacidad
            </MenuItem>
          </Link>
          <MenuGroup title="Socios">
            {allPartners?.map(partner => (
              <Link key={partner.id} href={`/partners/${partner.id}`}>
                <MenuItem _hover={{ bg: 'whiteAlpha.300' }} color="gray.300">
                  {partner.name}
                </MenuItem>
              </Link>
            ))}
          </MenuGroup>
          <MenuGroup title="Social">
            <Link href={`/api/discord`}>
              <MenuItem _hover={{ bg: 'whiteAlpha.300' }} color="gray.300">
                Discord
              </MenuItem>
            </Link>
            <Link href={`/api/github`}>
              <MenuItem _hover={{ bg: 'whiteAlpha.300' }} color="gray.300">
                GitHub
              </MenuItem>
            </Link>
          </MenuGroup>
        </MenuList>
      </Menu>
    </List>
  </Flex>
);
