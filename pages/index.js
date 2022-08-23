import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbAfricanTrends from '../public/images/links/trends.png'
import thumbAnime from '../public/images/works/anime+_02.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi there, I&apos;m a web and app developer based in Zimbabwe!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Brandon Mushori
          </Heading>
          <p>
            Digital Solutions Architect ( Entrepreneur / Developer / Designer )
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/brandon.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Brandon is a full-stack developer based in Harare (Zimbabwe) with a
          passion for building digital services/solutions. He has launched
          multiple products (with more on the way). Brandon excels at solving
          real life problems with code. When not online, he loves playing
          hockey. Currently, he is living off of his own company called{' '}
          <NextLink href="https://www.digitol.co.zw" passHref scroll={false}>
            <Link>Digitol (with an O)</Link>
          </NextLink>
          . He publishes content in the form of Blog Posts on one of his
          products, &quot;
          <NextLink href="https://www.africantrends.co" passHref>
            <Link target="_blank">African Trends</Link>
          </NextLink>
          &quot;.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Harare, Zimbabwe.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Started Bachelor of Science computer science at the University of
          Namibia
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Digitol Marketing Agency
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 💙
        </Heading>
        <Paragraph>Art, Music, Film and Calisthenics</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the internet, you&apos;ll find me here
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/brandonzane" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @brandonzane
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/brandonzane" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @brandonzane
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/brandonzane__" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @brandonzane__
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://trends-2-psi.vercel.app/"
            title="African Trends"
            thumbnail={thumbAfricanTrends}
          >
            My Information SaaS
          </GridItem>
          <GridItem
            href="https://anime-plus-937b5.web.app/"
            title="Anime+"
            thumbnail={thumbAnime}
          >
            An Anime streaming service
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
