interface ProjectsProps {
  title: string;
}

function Projects({
  title
}: ProjectsProps) {

  return (
    <>
      <h2>Projects</h2>
      <div>
        <h3>{title}</h3>
        <h4>Description</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ipsa voluptatibus minima amet odit eligendi.</p>
      </div>
    </>
  )
}

export default Projects