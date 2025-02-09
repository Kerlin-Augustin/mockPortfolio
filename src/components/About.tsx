import { CSSProperties } from "react"

function About() {

  const styles: {[key: string]: CSSProperties} = {
    container: {
      border: "1px solid grey",
      borderRadius: "1em",
    },
    textAlign: {
      marginLeft: "3.2em",
    },
    textAlignPara: {
      marginLeft: "5em",
      marginRight: "5em",
    }
  }

  return (
    <>
      <div className="sections" style={styles.container}>
        <h2 style={styles.textAlign}>About Me</h2>
        <p style={styles.textAlignPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quaerat nihil quis nostrum incidunt cupiditate aliquam, quam quasi, suscipit distinctio quae voluptates eius. Modi itaque similique accusamus aliquid dolorem fugiat voluptas autem, veniam rem voluptatum ipsam maiores harum architecto fugit? Incidunt veniam atque nisi voluptas. Accusantium exercitationem repudiandae, quis quaerat dicta assumenda deleniti! Saepe voluptatem ad dolorem perferendis repudiandae quod reiciendis doloribus aperiam maxime nobis. Cupiditate consequuntur recusandae placeat doloribus, assumenda a similique vitae odio quae. Quisquam, assumenda ab. Ab earum iure cum omnis non adipisci dolores libero vitae facere, error asperiores, quae numquam tempore nisi sapiente temporibus sunt natus!</p>
        <h2 style={styles.textAlign}>Certificates</h2>
        <ul>
          <li style={styles.textAlign}>Google Cloud Platform</li>
          <li style={styles.textAlign}>Kubernetes</li>
          <li style={styles.textAlign}>Docker</li>
          <li style={styles.textAlign}>Terraform</li>
          <li style={styles.textAlign}>CyberSecurity</li>
        </ul>
        <h2 style={styles.textAlign}>Skills</h2>
        <ul>
          <li style={styles.textAlign}>Python</li>
          <li style={styles.textAlign}>Javascript/Typescript</li>
          <li style={styles.textAlign}>HTML/CSS</li>
          <li style={styles.textAlign}>Node/Express</li>
          <li style={styles.textAlign}>C++</li>
        </ul>
      </div>
    </>
  )
}

export default About