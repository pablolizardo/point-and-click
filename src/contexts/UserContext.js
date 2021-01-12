import React from 'react'
import useSWR from 'swr'
import fetcher from './../utils/fetcher'

export const UserContext = React.createContext()
const UserProvider = ({ children }) => {
    const url = `${process.env.REACT_APP_API}/user/me`
    const { data: user } = useSWR(url, fetcher, {
        revalidateOnFocus: false
    })
    return <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider