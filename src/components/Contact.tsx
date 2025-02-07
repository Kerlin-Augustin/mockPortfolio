import { CSSProperties } from "react"

function Contact() {

  const styles: { [key: string]: CSSProperties } = {
    container: {
      marginLeft: '20em',
      
    },
    image: {
      borderRadius: "10em"
    } 
    
  }

  return (
    <>
      <div style={styles.container}>
        <img style={styles.image}src="image.png" width={300} />
        <h2>Kerlin Augustin</h2>
        <h3>Contact Info</h3>
        <p>kerlin.augustin1@gmail.com</p>
        <h3>Community Building</h3>
        <p><a href="https://www.linkedin.com/in/kerlin-augustin/">LinkedIn</a></p>
        <p><a href="#">Twitter</a></p>
        <p><a href="twitch.tv/kerlinsamy">Twitch</a></p>
      </div>
    </>
  )
}

export default Contact