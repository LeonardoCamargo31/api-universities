export function extractErrors (erro: any): any {
  const errorDetail = erro.details.reduce((prev, curr) => {
    if (prev[curr.path[0]]) {
      prev[curr.path[0]].push(curr.type)
    } else {
      prev[curr.path[0]] = [curr.type]
    }
    return prev
  }, {})

  return {
    errorDetail,
    errorFields: Object.keys(errorDetail)
  }
}
