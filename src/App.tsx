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
    display: "flex",
    gap: "20px",
    alignItems: "center", 
    flexDirection: "column",
  };

  return (
    <>
      <div style={containerStyle}>
        <Contact />
        <About />
      </div>
      <div style={containerStyle2}>
        <Projects title='GoSavant' />
      </div>
    </>
  )
}

export default App
