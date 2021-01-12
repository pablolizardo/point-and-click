import React from 'react'
import useSWR from 'swr'
import fetcher from './../utils/fetcher'

export const UserContext = React.createContext()
const UserProvider = ({ children }) => {
    const url = `${process.env.REACT_APP_API}/user/me`
    const urlHistory = `${process.env.REACT_APP_API}/user/history`
    const { data: user } = useSWR(url, fetcher, { revalidateOnFocus: false })
    const { data: history } = useSWR(urlHistory, fetcher, { revalidateOnFocus: false })
    return <UserContext.Provider value={{ user, history }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider