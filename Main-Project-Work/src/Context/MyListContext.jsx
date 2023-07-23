import { createContext, useState } from "react"


export const MyListContext = createContext()

export const MyListProvider = ({ children }) => {
  // const [id, setId] = useState()
 const [myList, setMyList] = useState([])
 const [search, setSearch] = useState('')


  return (
    <MyListContext.Provider value={{ myList, setMyList, search, setSearch }}>
      {children}
    </MyListContext.Provider>
  )
}

