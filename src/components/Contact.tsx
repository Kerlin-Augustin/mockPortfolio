import { CSSProperties } from "react"
import DarkMode from "../darkMode/DarkMode"

function Contact() {

  const styles: { [key: string]: CSSProperties } = {
    image: {
      borderRadius: "10em"
    } 
  }

  return (
    <>
      <div>
        <img style={styles.image}src="image.png" width={300} />
        <h2>Kerlin Augustin</h2>
        <h3>Contact Info</h3>
        <p>kerlin.augustin1@gmail.com</p>
        <h3>Community Building</h3>
        <p><a href="https://www.linkedin.com/in/kerlin-augustin/">LinkedIn</a></p>
        <p><a href="#">Twitter</a></p>
        <p><a href="#">Twitch</a></p>
        <DarkMode />
      </div>
    </>
  )
}

export default Contact