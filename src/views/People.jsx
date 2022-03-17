import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function People() {
    const {id } = useParams("")
    const [people,setPeople] = useState({})
    const [error, SetError] = useState(false)

    useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(response => {
        console.log(response);
        setPeople(response.data)

        





            })
    console.log(`https://swapi.dev/api/people/${id}/`)

    },[id])
    return (
        <div>
            <h1> {people.name} </h1>
            <h1> {people.height} </h1>
            <h1>{people.skin_color} </h1>

        </div>
    )
}

