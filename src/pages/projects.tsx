import MoreProjects from "@/components/more-projects"
import Layout from "@/components/layout"
import { Projects } from "../types/project"

const About = ({ projects }: Projects) => {
  return (
    <Layout>
      <div className="max-w-7xl">
        <div className="relative">
          <h1 className="mt-8 mb-20 text-6xl font-bold tracking-tighter leading-tight opacity-0 md:pr-8 md:text-7xl dark:text-gray-100 animate-fade_in_up_10">
            projects.
          </h1>
        </div>
        {projects.length > 0 && <MoreProjects projects={projects} />}
      </div>
    </Layout>
  )
}

export default About

export const getStaticProps = async () => {
  const projects = require("../data/projects.json")

  return {
    props: { projects },
  }
}
