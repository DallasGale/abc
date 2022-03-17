import React from "react"

type MediaTypes = {
  caption: string
  url: string
  alt: string | undefined
}

const MediaEmbedded: React.FC<MediaTypes> = ({ caption, url, alt }) => {
  return (
    <div>
      <figcaption>
        {caption}
        <img src={url} alt={alt} style={{ width: "100%" }} />
      </figcaption>
    </div>
  )
}

export default MediaEmbedded
