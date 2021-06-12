import Container from "../components/container"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Blur from "../components/blur"

const Index = () => {
  return (
    <Layout>
      <Container>
        <Intro />
        <Blur />
      </Container>
    </Layout>
  )
}

export default Index
