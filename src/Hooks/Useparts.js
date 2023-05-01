import { useEffect, useState } from "react"

const Useparts = (id) => {
    const [part, setPart] = useState({})
    useEffect(() => {

        fetch(`https://bicycles-manufacture-server.onrender.com/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])
    return [part]

}
export default Useparts