import React from "react"

type LocationTypes = {
  data: Props[]
}

type Props = {
  title: string
  canonicalURL: string
}

const Locations: React.FC<LocationTypes> = ({ data }) => {
  return (
    <>
      <h2>Locations</h2>
      {data.map((location) => {
        return (
          <div>
            <a href={location.canonicalURL}>{location.title}</a>
          </div>
        )
      })}
    </>
  )
}

export default Locations
