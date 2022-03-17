import React from "react"
import styles from "./Article.module.css"

// Components
import Contributors from "../Contributors"
import Date from "../Dates"

interface Props {
  children: React.ReactNode
  title: string
  contributors?: string[]
  dates?: {
    posted?: string
    updated?: string
  }
}

const Article = ({
  children,
  title,
  contributors,
  dates,
}: Props): JSX.Element => (
  <article className={styles.article}>
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{title}</h1>
        {contributors && contributors.length && (
          // ? Replaced with isolated component for re-usability...
          // <span className={styles.contributors}>
          //   By {contributors.join(', ')}
          // </span>
          <Contributors contributors={contributors} />
        )}
        {dates && (
          // ? Replaced with isolated component for re-usability...
          // <span className={styles.date}>
          //   {dates.posted && <span>Posted {dates.posted}</span>}
          //   {dates.updated && <span> Updated {dates.updated}</span>}
          // </span>
          <Date dates={dates} />
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
    <div className={styles.sidebar}>
      <h2>More Stories</h2>
      <div className={styles.moreStories} />
    </div>
  </article>
)

export default Article
