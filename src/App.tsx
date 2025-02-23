import Contact from "./components/Contact"
import About from "./components/About"
import Projects from "./components/Projects"
import { useEffect, useState } from 'react'
import axios from "axios"

function App() {

  const [projects, setProjects] = useState<{ title: string, content: string }[]>([])

  const hook = () => {
    axios
      .get('http://localhost:3001/projects')
      .then(response => {
        let projects = response.data
        setProjects(projects)
      })
  }

  useEffect(hook, [])

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  };

  const containerStyle2: React.CSSProperties = {
    display: "grid",
    gap: "20px",
    alignItems: "center",
    gridTemplateColumns: "repeat(3, 1fr)"
  };

  const h2: React.CSSProperties = {
    textAlign: "center"
  }

  const allProjects = projects.map((project, index) => (
    <Projects key={index} title={project.title} content={project.content} />
  ))

  return (
    <>
      <div style={containerStyle}>
        <Contact />
        <About />
      </div>
      <h2 style={h2}>Projects</h2>
      <div style={containerStyle2}>
        {allProjects}
      </div>
    </>
  )
}

export default App
