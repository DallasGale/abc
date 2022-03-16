import React from "react"

type ContributorNameTypes = {
  data: Props[]
}

type Props = {
  names: {
    first: string
    full: string
    last: string
  }
  role: string
}

const Contributers: React.FC<ContributorNameTypes> = ({ data }) => {
  return (
    <>
      <h2>Contributors</h2>
      {data.map((contributor) => {
        return (
          <div>
            <p>{contributor.names.full}</p>
            <p>{contributor.role}</p>
          </div>
        )
      })}
    </>
  )
}

export default Contributers
