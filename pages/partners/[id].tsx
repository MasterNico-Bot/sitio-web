import Head from 'next/head';
import { Flex, Heading, Text, Button, Stack, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { getAllPartnerIds, getPartnerData } from '../../lib/partners';
import parse, { Element, domToReact } from 'html-react-parser';

export async function getStaticProps({ params }: { params: { id: string } }) {
  const partnerData = await getPartnerData(params.id.toLowerCase());
  return {
    props: {
      partnerData
    }
  };
}

interface Partner {
  name?: string;
  shortDescription?: string;
  longDescription?: string;
}

export async function getStaticPaths() {
  const paths = await getAllPartnerIds();
  return {
    paths,
    fallback: false
  };
}

const Partner = ({ partnerData }: { partnerData: { [k: string]: string } }) => {
  return (
    <main>
      <Head>
        <title>Master Nico - Comandos</title>
        <link rel="icon" href="/favicon.ico" />
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
          {partnerData.name}
        </Heading>
        <Text color="gray.300" maxW="700px" textAlign="center">
          {partnerData.description}
        </Text>
        <Stack mt={5} gap={2} direction={['column', 'row']}>
          <ChakraLink href={partnerData.url} target="_blank">
            <Button bg="orange.400" _hover={{ bg: 'orange.500' }} _active={{ bg: 'orange.300' }}>
              Ir a la web
            </Button>
          </ChakraLink>
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
        {parse(partnerData.contentHtml, {
          replace: domNode => {
            if (domNode instanceof Element) {
              if (domNode.tagName == 'h3') {
                return (
                  <Heading as={'h3'} fontSize="2xl">
                    {domToReact(domNode.children)}
                  </Heading>
                );
              } else if (domNode.tagName == 'p') {
                return <Text color="gray.300">{domToReact(domNode.children)}</Text>;
              }
            }
          }
        })}
      </Flex>
    </main>
  );
};

export default Partner;
