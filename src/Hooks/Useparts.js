import { useEffect, useState } from "react"

const Useparts = (id) => {
    const [part, setPart] = useState({})
    useEffect(() => {

        fetch(`https://sheltered-meadow-37374.herokuapp.com/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])
    return [part]

}
export default Useparts