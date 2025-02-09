interface ProjectsProps {
  title: string;
}

function Projects({
  title
}: ProjectsProps) {

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    justifyContent: "center", 
    flexDirection: "column",
    border: "1px solid grey",
    borderRadius: "5px",
    flex: "1",
  };

  return (
    <>
      <div className="sections" style={containerStyle}>
        <h3 style={{margin: 0, marginLeft: '.8em', marginTop: "1em"}}>{title}</h3>
        <h4 style={{margin: 0, marginLeft: '1em'}}>Description</h4>
        <p style={{margin: 0, marginLeft: '1em', marginBottom: '1em', marginRight: '1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsa voluptatibus minima amet odit eligendi.</p>
      </div>
    </>
  )
}

export default Projects