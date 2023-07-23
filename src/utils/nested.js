export const linearToNested = (data = []) => {
   const nest = {
      [null]: {
         children: []
      }
   }

   for (const nd of data) {
      const parent = nest[nd.parentId] ?? {
         parentNode: null,
         children: []
      }

      if (!nest[nd.id]) {
         nest[nd.id] = {
            ...nd,
            parentNode: parent,
            children: []
         }
      }
      parent.children.push(nest[nd.id])
   }

   const root = nest[null]

   console.log(root)
   return root
}

export const findById = (node, id) => {
   console.log(node, node.id, id, node.id == id)
   if (node.id == id) {
      return node
   }

   for (const n of node.children) {
      const ret = findById(n, id)
      if (ret) return ret
   }

   return null
}
export const getHilevelCategories = (categories, id) => {
   const root = linearToNested(categories)
   const node = findById(root, id)

   const findDepthId = (node) => {
      let cats = []
      if (node.children.length) {
         cats = node.children.map(n => findDepthId(n))
         cats = cats.reduce((prev, cur) => [...prev, ...cur], [])
      }
      return [node.id, ...cats]
   }

   return findDepthId(node)
}