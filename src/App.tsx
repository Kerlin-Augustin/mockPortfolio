import Contact from "./components/Contact"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {

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

  const allProjects = [<Projects title='GoSavant' />, <Projects title='Talent Bridge' />, <Projects title="Stelr Games" />]

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
