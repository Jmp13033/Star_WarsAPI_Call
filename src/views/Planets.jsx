import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Planets() {
    const {id} = useParams("")
    const [planets,setPlanets] = useState({})
    const [error, SetError] = useState(false)

    useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(response => {
        console.log(response);
        setPlanets(response.data)



            })
    console.log(`https://swapi.dev/api/planets/${id}/`)

    },[id])
    return (
        <div>
            <h1> {planets.climate} </h1>
            <h1> {planets.temperature} </h1>
            <h1>{planets.gravity} </h1>

        </div>
    )
}

export default Planets




