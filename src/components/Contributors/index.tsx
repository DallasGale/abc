import React from "react"

export type ContributorTypes = {
  data: NameType[]
}

type NameType = {
  names: {
    first: string
    full: string
    last: string
  }
  role: string
}

const Contributers: React.FC<ContributorTypes> = ({ data }) => {
  let length = data.length - 1
  console.log({ length })
  return (
    <>
      <p>
        By&nbsp;
        {data.map((contributor, i) => {
          console.log({ i })
          return (
            <span>
              {contributor.names.full}&nbsp;
              {/* Add conditional here to only show ampersand once */}
              {i !== length && "& "}
            </span>
          )
        })}
      </p>
    </>
  )
}

export default Contributers
