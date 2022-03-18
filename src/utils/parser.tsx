// What is this ?
// This is a re-usable component that parses out the json data for articles.
// The two props are "embedded" and "content".
// It basically loops over the json and creates new React elements with React.createElement.
// There are a couple of checks within the loop to look for "pullquote" and "externalEmbedURL" - see comments below.
// I also match up the "mediaEmbedded[].id" with the "paramaters.ref" so I can display the image within the body content.

// Components
import React from "react"
import Image from "../components/Image"

// Utils
import _ from "lodash"

interface Props {
  // ----------------------------------------
  // Some type checking things i needed to fix
  // but ran out of time.
  // So for sake of completing the project i
  // had to resort to 'any'

  embedded: {
    mediaEmbedded: any[]
  }

  content: any[]
  // {
  //   type: string
  //   tagname: string
  //   parameters?:
  //     | {
  //         align: string
  //         ref: string
  //       }
  //     | undefined
  //   children: [
  //     | {
  //         type: string
  //         content?: string | undefined
  //         tagname?: string | undefined
  //         children?:
  //           | [
  //               {
  //                 type?: string | undefined
  //                 content: string | undefined
  //               }
  //             ]
  //           | undefined
  //       }
  //     | undefined
  //   ]
  // }
}

const Parser: React.FC<Props> = ({ embedded, content }) => {
  const { mediaEmbedded } = embedded
  return (
    <>
      {content.map((child, i) => {
        const pullquote: any = _.find(child as any, function (obj) {
          if (obj === "pullquote") {
            return true
          }
        })

        // ----------------------------------------
        // since <pullquote></pullquote> is not a
        // browser element I am replacing it with
        // <blockquote></blockquote>
        if (pullquote) {
          return React.createElement(
            "blockquote",
            { key: i },
            `${
              child?.children[0]?.children === undefined
                ? ""
                : child.children[0].children[0].content
            }`
          )

          // ----------------------------------------
          // checking for the 'paramaters' object here
          // so I can match the ref/id with the
          // embedded media/images
        } else if (child.parameters) {
          const { ref } = child.parameters

          // ----------------------------------------
          // Check for images / external embeds...
          for (let i = 0; i < mediaEmbedded.length; i++) {
            // match the ref/id
            if (ref === mediaEmbedded[i]?.id) {
              const externalEmbedUrl = mediaEmbedded[i]?.externalembed?.url

              // ----------------------------------------
              // display Placeholder url for Embdedded
              // Media (url)...
              if (externalEmbedUrl) {
                return <a href={externalEmbedUrl}>{externalEmbedUrl}</a>
              }

              // ----------------------------------------
              // display image...
            } else if (ref === mediaEmbedded[i].id) {
              const { alt, caption } = mediaEmbedded[i]
              const url = mediaEmbedded[i]?.media?.image.primary.complete[0].url
              const byline =
                mediaEmbedded[i]?.byLine?.json.children[0].children[0].content
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
        } else {
          // ----------------------------------------
          // otherwise just render all other elements (p, h1 etc...).
          return React.createElement(
            child.tagname,
            { key: i },
            child?.children[0]?.content
          )
        }
        return null
      })}
    </>
  )
}

export default Parser
