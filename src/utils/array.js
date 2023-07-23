export const toSelectOption = (arr = [], valueName, labelName) => {
   return arr.map(o => (
      {
         value: o[valueName],
         label: o[labelName]
      }
   ))
}