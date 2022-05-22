import { useEffect, useState } from "react"

const Useparts = (id) => {
    const [part, setPart] = useState({})
    useEffect(() => {

        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])
    return [part]

}
export default Useparts