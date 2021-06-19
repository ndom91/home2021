import MoreProjects from "@/components/more-projects"
import Layout from "@/components/layout"
import { Projects } from "../types/project"

const About = ({ projects }: Projects) => {
  return (
    <Layout>
      <div className="relative">
        <h1 className="mb-24 mt-8 dark:text-gray-100 text-7xl font-bold tracking-tighter leading-tight opacity-0 animate-fade-in-up-10 md:pr-8 md:text-8xl">
          projects.
        </h1>
      </div>
      {projects.length > 0 && <MoreProjects projects={projects} />}
    </Layout>
  )
}

export default About

export const getStaticProps = async () => {
  const projects = require("../../data/projects.json")

  if (!projects) {
    return {
      notFound: true,
    }
  }

  return {
    props: { projects },
  }
}
