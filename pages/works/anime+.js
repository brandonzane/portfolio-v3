import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
  // UnorderedList,
  // Heading,
  // Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Anime+">
    <Container>
      <Title>
        Anime+ <Badge>2021-</Badge>
      </Title>
      <P>
        Anime+ is an anime streaming service that recommends content based on
        preferences. New features are added with each update.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://anime-plus-937b5.web.app/">
            https://anime-plus-937b5.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, Firebase</span>
        </ListItem>
      </List>

      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/anime+_01.png" alt="walknote" />
        <WorkImage src="/images/works/anime+_02.png" alt="walknote" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
