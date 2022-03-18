import React from "react"
import data from "../data/article2.json"

// Components
import Article from "../components/Article/Article"
import Parser from "../utils/parser"

const contributors: any[] = data._embedded.contributors

const Article2 = () => {
  const { dates, source, sourceURL } = data
  const { mediaFeatured } = data._embedded
  return (
    <>
      <Article
        title={data.title}
        contributors={contributors}
        dates={dates}
        source={source}
        sourceURL={sourceURL}
        featuredImage={{
          url: mediaFeatured[0].media.image.primary.complete[0].url,
          alt: mediaFeatured[0].alt,
          caption: `${mediaFeatured[0].caption}`,
          byline: mediaFeatured[0].byLine.json.children[0].children[0].content,
        }}
      >
        {data.text.json.children.length ? (
          <Parser embedded={data._embedded} content={data.text.json.children} />
        ) : (
          <p>no articles to show</p>
        )}
      </Article>
    </>
  )
}
export default Article2
