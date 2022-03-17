import React from "react"
import styles from "../Article/Article.module.css"

type ContributorsType = {
  contributors: string[]
}

const Contributer: React.FC<ContributorsType> = ({ contributors }) => {
  return (
    <span className={styles.contributors}>By {contributors.join(", ")}</span>
  )
}

export default Contributer
