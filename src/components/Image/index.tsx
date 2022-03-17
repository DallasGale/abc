import styles from "./index.module.css"

type ImageTypes = {
  src: string
  caption: string
  alt: string
  byline: string
}
const Image: React.FC<ImageTypes> = ({ src, alt, caption, byline }) => {
  return (
    <figure>
      <picture className={styles.picture}>
        <img src={`${src}`} alt={`${alt}`} />
      </picture>{" "}
      <figcaption className={styles.figcaption}>
        {caption} <i>{byline}</i>
      </figcaption>
    </figure>
  )
}

export default Image
