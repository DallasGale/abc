// Components
import Contributors from "../Contributors"
import Dates from "../Dates"
import styles from "../Article/Article.module.css"

type MetaDataTypes = {
  contributors?: any
  dates: {
    published: string
    updated: string
  }
  source: string
  sourceURL: string
}
const MetaData: React.FC<MetaDataTypes> = ({
  contributors,
  dates,
  source,
  sourceURL,
}) => {
  return (
    <>
      <small className={styles.metadata}>
        <a href={sourceURL} className={styles.source}>
          {source}
        </a>
        &nbsp;
        {"/"}
        &nbsp;
        {contributors && contributors.length && (
          <Contributors contributors={contributors} />
        )}
      </small>
      <small>{dates && <Dates dates={dates} />}</small>
    </>
  )
}

export default MetaData
