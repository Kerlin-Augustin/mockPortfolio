import { CSSProperties } from "react"

function Contact() {

  const container: CSSProperties = {
    marginLeft: '15em',
    
  }

  return (
    <>
      <div style={container}>
        <img src="image.png" width={300} />
        <h2>Kerlin Augustin</h2>
        <h3>Contact Info</h3>
        <p>Enter Email Address</p>
        <h3>Community Building</h3>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
    </>
  )
}

export default Contact