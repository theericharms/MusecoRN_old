export default build =>
  build.query({
    query: id => `Country/${id}`,
  })
