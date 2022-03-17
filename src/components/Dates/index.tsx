import React from "react"
import styles from "../Article/Article.module.css"

type DatesType = {
  dates: {
    posted?: string
    updated?: string
  }
}

const Dates: React.FC<DatesType> = ({ dates }) => {
  return (
    <span className={styles.date}>
      {dates.posted && <span>Posted {dates.posted}</span>}
      {dates.updated && <span> Updated {dates.updated}</span>}
    </span>
  )
}

export default Dates
