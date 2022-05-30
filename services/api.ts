import axios from 'axios'
import React from 'react'

export const api = axios.create({
    baseURL:'https://swapi.dev/api/'
})

