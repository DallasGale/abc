import React from "react"
import styles from "../Article/Article.module.css"

type DatesType = {
  dates: {
    published: string
    updated: string
  }
}

const Dates: React.FC<DatesType> = ({ dates }) => {
  const pubDate = new Date(dates.published)
  const upDate = new Date(dates.updated)
  return (
    <span className={styles.date}>
      <span>Published {pubDate.toDateString()}</span>
      <span>, updated {upDate.toDateString()}</span>
      <span>
        {" "}
        at{" "}
        {upDate.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </span>
  )
}

export default Dates
