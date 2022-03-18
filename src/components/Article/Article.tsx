import styles from "./Article.module.css"

// Components
import MetaData from "../MetaData"
import Image from "../Image"
import Sidebar from "../Sidebar"

// Types
import { ContributorsMetaTypes } from "../Contributors"

interface Props {
  children: React.ReactNode
  title: string
  contributors: ContributorsMetaTypes[]
  dates: {
    published: string
    updated: string
  }
  source: string
  sourceURL: string
  featuredImage: {
    url: string
    alt: string
    caption: string
    byline: string
  }
}

const Article = ({
  children,
  title,
  contributors,
  dates,
  source,
  sourceURL,
  featuredImage,
}: Props): JSX.Element => {
  console.log({ contributors })
  return (
    <article className={styles.article}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <MetaData
            source={source}
            sourceURL={sourceURL}
            contributors={contributors}
            dates={dates}
          />

          {/*  // ----------------------------------------
              Replaced with isolated component for
              re-usability... 

              {contributors && contributors.length && (
                <span className={styles.contributors}>
                  By {contributors.join(', ')}
                </span>
                <Contributors contributors={contributors} />
              )} */}

          {/*  // ----------------------------------------
              Replaced with isolated component for
              re-usability... 

              {dates && (
              <span className={styles.date}>
                {dates.posted && <span>Posted {dates.posted}</span>}
                {dates.updated && <span> Updated {dates.updated}</span>}
              </span>
              <Date dates={dates} />
        )} */}
        </div>
        {/* Media Featured */}
        {featuredImage && (
          <div className={styles.featuredImage}>
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt}
              caption={`${featuredImage.caption}`}
              byline={featuredImage.byline}
            />
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>

      <Sidebar />
      {/* 
          // ----------------------------------------
          Replaced with isolated component for
          re-usability... 

          <div className={styles.sidebar}>
            <h2>More Stories</h2>
            <div className={styles.moreStories} />
          </div> 
      */}
    </article>
  )
}

export default Article
