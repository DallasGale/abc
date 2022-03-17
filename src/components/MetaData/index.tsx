import React from "react"
import Contributers, { ContributorTypes } from "../Contributors"

type MetaDataTypes = {
  dates: {
    published: string
    updated: string
  }
  source: string
  sourceURL: string
  contributors: any //ContributorTypes[]
}

const MetaData: React.FC<MetaDataTypes> = ({
  dates,
  source,
  sourceURL,
  contributors,
}) => {
  const publishedDate = new Date(dates.published)
  const updatedDate = new Date(dates.published)

  // function renderContributors(data: ContributorTypes) {
  //   let output: JSX.Element
  //   if (data.length > 1) {
  //     output = data.map((contributor: NameType}) => {
  //       return (
  //         <div>
  //           <p>{contributor.names.full}</p>
  //           <p>{contributor.role}</p>
  //         </div>
  //       )
  //     })
  //   } else {
  //     output = data.names.full
  //   }
  //   return output
  // }
  return (
    <>
      <h2>Dates</h2>
      <small>
        <a href={sourceURL}>{source}</a> / By
        <Contributers data={contributors} />
        Published: {publishedDate.toLocaleDateString()}, Updated:{" "}
        {updatedDate.toLocaleDateString()}
      </small>
    </>
  )
}

export default MetaData
