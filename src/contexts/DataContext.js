import React from 'react'
import useSWR from 'swr'
import fetcher from './../utils/fetcher'

export const DataContext = React.createContext()
const DataProvider = ({ children }) => {
    const url = `${process.env.REACT_APP_API}/products`
    const { data: products } = useSWR(url, fetcher, {
        revalidateOnFocus: false
    })
    return <DataContext.Provider value={{ products }}>
        {children}
    </DataContext.Provider>
}

export default DataProvider