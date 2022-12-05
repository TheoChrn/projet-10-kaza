import All from "./mocks/data.json"

export const getAll = async () => {
  return All
}

export const getById = async (id) => {
  return  All.find((a) => a.id === id)
}