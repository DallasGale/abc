import React from "react"
import InstagramEmbed from "react-instagram-embed"
import data from "../data/article2.json"

// Components
import Image from "../components/Image"
import Article from "../components/Article/Article"

const contributors: any[] = data._embedded.contributors

const Article2 = () => {
  const { dates, source, sourceURL } = data
  return (
    <>
      <Article
        title={data.title}
        contributors={contributors}
        dates={dates}
        source={source}
        sourceURL={sourceURL}
        featuredImage={{
          url: data._embedded.mediaFeatured[0].media.image.primary.complete[0]
            .url,
          alt: data._embedded.mediaFeatured[0].alt,
          caption: `${data._embedded.mediaFeatured[0].caption}`,
          byline:
            data._embedded.mediaFeatured[0].byLine.json.children[0].children[0]
              .content,
        }}
      >
        {data.text.json.children.length ? (
          <>
            {data.text.json.children.map((child: any, i) => {
              if (child.children[0].children) {
                // For Pullquote level
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
                  const { ref } = child.parameters

                  // Check for images / external embeds...
                  for (
                    let i = 0;
                    i < data._embedded.mediaEmbedded.length;
                    i++
                  ) {
                    if (ref === data?._embedded?.mediaEmbedded[i]?.id) {
                      const externalEmbedUrl =
                        data?._embedded?.mediaEmbedded[i]?.externalembed?.url

                      if (externalEmbedUrl) {
                        console.log({ externalEmbedUrl })
                        return (
                          <InstagramEmbed
                            url={`${externalEmbedUrl}`}
                            clientAccessToken={"698061617997892"}
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName="div"
                            protocol=""
                            injectScript
                            onLoading={() => console.log("loading")}
                            onSuccess={() => console.log("success")}
                            onAfterRender={() => console.log("after render")}
                            onFailure={() => console.log("failure")}
                          />
                        )
                      } else return null
                    } else if (ref === data._embedded.mediaEmbedded[i].id) {
                      const { alt, caption } = data._embedded.mediaEmbedded[i]
                      const url =
                        data?._embedded?.mediaEmbedded[i]?.media?.image.primary
                          .complete[0].url

                      // console.log({ url })
                      const byline =
                        data?._embedded?.mediaEmbedded[i]?.byLine?.json
                          .children[0].children[0].content
                      return (
                        <Image
                          key={`media--${i}`}
                          caption={`${caption}`}
                          src={`${url}`}
                          alt={`${alt}`}
                          byline={`${byline}`}
                        />
                      )
                    }
                  }
                  // Interactive level
                } else {
                  console.log(child.type)

                  return React.createElement(
                    child.tagname,
                    { key: i },
                    child.children[0].content
                  )
                }
              }
              return null
            })}
          </>
        ) : (
          <p>loading</p>
        )}
      </Article>
    </>
  )
}
export default Article2
