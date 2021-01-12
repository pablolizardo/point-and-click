export const headers = {
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AEROTOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}
const fetcher = (...args) => fetch(...args, headers).then(res => res.json()).catch(e => console.log(e))

export default fetcher