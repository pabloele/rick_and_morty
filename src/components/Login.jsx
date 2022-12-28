import React from 'react'
import {Link} from 'react-router-dom'
import Form from './Form'

export default function Login() {
  return (
    <div>
      <Form/>


      <Link to="/home">
            <button> LOGIN </button>
      </Link>
    </div>
  )
}
