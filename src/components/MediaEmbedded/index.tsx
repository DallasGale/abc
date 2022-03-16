import React from "react"

type LocationTypes = {
  data: Props[]
}

type Props = {
  alt: string
  byline: {
    json: {
      tagname: string
      children: JsonChildrenType[]
    }
  }
  canonicalURL: string
  caption: string
  // dates: {
  //   displayPublished: string
  //   published: string
  //   updated: string
  // }
  media: {
    image: {
      primary: {
        complete: CompleteMedia[]
      }
    }
  }
  source: string
  sourceUrl: string
  title: string
  titleAlt: {
    lg: string
    md: string
    sm: string
  }
}

type CompleteMedia = {
  cropHeight: number
  cropWidth: number
  height: number
  url: string
  width: number
  x: number
  y: number
}

type JsonChildrenType = {
  tagname: string
  children: string[]
}

const MediaEmbedded: React.FC<LocationTypes> = ({ data }) => {
  return (
    <>
      <h2>Media Embedded</h2>
      {data.map((embed) => {
        const { titleAlt, title, caption } = embed
        const { url, width, height } = embed.media.image.primary.complete[0]
        return (
          <div>
            <figcaption>
              {caption}
              <img src={url} alt={`${titleAlt}`} />
            </figcaption>
          </div>
        )
      })}
    </>
  )
}

export default MediaEmbedded
