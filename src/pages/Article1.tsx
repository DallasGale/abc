import React from "react"
import Article from "../components/Article/Article"
import data from "../data/article1.json"

// Components
import Contributers from "../components/Contributors"
import Locations from "../components/Locations"
import MediaEmbedded from "../components/MediaEmbedded"
import MetaData from "../components/MetaData"
// Attempt at rendering elements
// function h1(text: string) {
//   return <h1>{text}</h1>
// }

// function p(text: string) {
//   return <p>{text}</p>
// }

// function pullquote(text: string) {
//   return <blockquote>{text}</blockquote>
// }

// const Image = (ref: string) => {
//   return <img src={ref} alt="" />
// }
// const renderComponent = (content: any, tagname: string) => {
//   console.log({ tagname })
//   console.log({ content })
//   if (tagname === "h1") {
//     return h1(content)
//   } else if (tagname === "p") {
//     return p(content)
//   } else if (tagname === "pullquote") {
//     return pullquote(content)
//   }
// }

// type ChildrenTypes = ChildType[]

// type ChildType = {
//   type: string
//   content: string
// }

const Article1 = () => {
  return (
    <Article title={data.title}>
      <MetaData
        dates={data.dates}
        source={data.source}
        sourceURL={data.sourceURL}
        contributors={data._embedded.contributors}
      />
      <Locations data={data._embedded.locations} />
      {data.text.json.children.length ? (
        <>
          {data.text.json.children.map((child) => {
            return React.createElement(
              child.tagname,
              {},
              child.children[0].content
            )
          })}
        </>
      ) : (
        <p>loading</p>
      )}

      <MediaEmbedded data={data._embedded.mediaEmbedded} />
    </Article>
  )
}
export default Article1
