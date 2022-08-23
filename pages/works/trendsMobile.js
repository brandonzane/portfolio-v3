import {
  // Box,
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
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        African Trends Mobile App <Badge>2022-</Badge>
      </Title>
      <P>
        The crossplatform, mobile app version of African trends. Created for
        entrepreneurs and investors who need information on the go.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>DeepLearning, TensorFlow.js, React Native, NodeJS, Sanity</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.africantrends.co">
            https://www.africantrends.co <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS, Android, Web</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/trendsapp_01.png" alt="walknote" />
        <WorkImage src="/images/works/trendsapp_02.png" alt="walknote" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
