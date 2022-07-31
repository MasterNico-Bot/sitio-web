import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';

export const Feature = ({
  heading,
  description,
  src,
  alt,
  reverse
}: {
  heading: string;
  description: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) => (
  <Stack
    direction={[
      'column-reverse',
      'column-reverse',
      'column-reverse',
      reverse ? 'row-reverse' : 'row'
    ]}
    spacing={[4, 7, 9]}
    justify="center"
    align="center"
    py="4rem"
    px={['3rem', '6rem']}
  >
    <Box maxW="428px">
      <Heading
        textAlign={['center', 'center', 'center', 'left']}
        maxW="700px"
        as={'h2'}
        fontSize="3xl"
      >
        {heading}
      </Heading>
      <br />
      <Text textAlign={['center', 'center', 'center', 'left']} fontSize=".9rem" color="gray.400">
        {description}
      </Text>
    </Box>
    <Image src={src} alt={alt} maxW={[0, '400px']} minW="240px" />
  </Stack>
);
