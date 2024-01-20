import Intro from "@/components/intro"
import Layout from "@/components/layout"
import Blur from "@/components/blur"
import RenderCursors from "@/components/render-cursors"

const Index = () => {
  return (
    <div className="overflow-hidden cursor-wrapper">
      <RenderCursors />
      <Layout>
        <Intro />
        <Blur />
      </Layout>
    </div>
  )
}

export default Index
