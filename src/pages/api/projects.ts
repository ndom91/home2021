import type { NextApiRequest, NextApiResponse } from 'next'
import { join } from 'path'
const fsp = require('fs').promises

const projectsRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const projectsData = await fsp.readFile(
      join(process.cwd(), 'data', 'projects.json')
    )
    res.status(200).json(JSON.parse(projectsData))
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error reading data' })
  }
}

export default projectsRoute
