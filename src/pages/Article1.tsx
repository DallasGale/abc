import React from "react"
import Article from "../components/Article/Article"
import data from "../data/article1.json"

// Components
import Image from "../components/Image"

// Utils
import { contributorsFullName } from "../utils/contributorFullName"

const contributors = data._embedded.contributors

const Article1 = () => {
  const { dates } = data
  const names = contributorsFullName(contributors)
  return (
    <>
      <Article title={data.title} contributors={names} dates={dates}>
        {/* Media Featured */}
        {data._embedded.mediaFeatured.length && (
          <Image
            src={
              data._embedded.mediaFeatured[0].media.image.primary.complete[0]
                .url
            }
            alt={data._embedded.mediaFeatured[0].alt}
            caption={`${data._embedded.mediaFeatured[0].caption}`}
            byline={
              data._embedded.mediaFeatured[0].byLine.json.children[0]
                .children[0].content
            }
          />
        )}
        {data.text.json.children.length ? (
          <>
            {data.text.json.children.map((child: any, i) => {
              // For Pullquote level
              if (child.children[0].children) {
                // Replaced "pullquote" with "blockquote"
                if (child.tagname === "pullquote") {
                  return React.createElement(
                    "blockquote",
                    { key: i },
                    child.children[0].children[0].content
                  )
                } else {
                  return React.createElement(
                    child.tagname,
                    { key: i },
                    child.children[0].children[0].content
                  )
                }
              } else {
                // For image level
                if (child.parameters) {
                  console.log(child.parameters)
                  const { ref } = child.parameters

                  for (
                    let i = 0;
                    i < data._embedded.mediaEmbedded.length;
                    i++
                  ) {
                    if (ref === data._embedded.mediaEmbedded[i].id) {
                      const { alt, caption } = data._embedded.mediaEmbedded[i]
                      const { url } =
                        data._embedded.mediaEmbedded[i].media.image.primary
                          .complete[0]
                      return (
                        <Image
                          key={`media--${i}`}
                          caption={caption}
                          src={url}
                          alt={`${alt}`}
                          byline={
                            data._embedded.mediaEmbedded[i].byLine.json
                              .children[0].children[0].content
                          }
                        />
                      )
                    } else return null
                  }
                } else {
                  return React.createElement(
                    child.tagname,
                    { key: i },
                    child.children[0].content
                  )
                }
              }
            })}
          </>
        ) : (
          <p>loading</p>
        )}
      </Article>
    </>
  )
}
export default Article1
