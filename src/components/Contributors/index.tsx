import React from "react"
import styles from "../Article/Article.module.css"

export type ContributorsType = {
  contributors: any[]
}

type Meta = {
  canonicalURL: string
  id: string
  names: {
    first?: string
    full: string
    last?: string
  }
  role: string
}

const Contributers: React.FC<ContributorsType> = ({ contributors }) => {
  const length = contributors.length - 1
  return (
    <span className={styles.contributors}>
      By{" "}
      {contributors.map((contributor, i) => {
        return (
          <>
            <a key={contributor.id} href={contributor.canonicalURL}>
              {contributor.names.full}
            </a>
            {length !== i && " & "}
          </>
        )
      })}
    </span>
  )
}

export default Contributers
