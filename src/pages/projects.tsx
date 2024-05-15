import MoreProjects from "@/components/more-projects"
import Layout from "@/components/layout-project"
import { type Projects } from "@/types"

const About = ({ projects }: Projects) => {
  return (
    <Layout>
      <h1 className="mb-8 w-full max-w-7xl text-8xl font-bold tracking-tighter leading-tight opacity-0 md:pr-8 lg:mb-12 dark:text-gray-100 animate-fade_in_up_10">
        projects.
      </h1>
      {projects.length ? <MoreProjects projects={projects} /> : null}
    </Layout>
  )
}

export default About

export const getStaticProps = () => {
  const projects: Record<string, any> = require("../data/projects.json")

  return {
    props: { projects },
  }
}
