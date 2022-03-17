// Since in the Article compnent there is a join() method.
// This can only work with the api data if the contributors full names are pulled out and added into a new array.
export function contributorsFullName(input: any[]) {
  let output: string[] = []
  input.forEach((i) => {
    output.push(i.names.full)
  })
  return output
}
