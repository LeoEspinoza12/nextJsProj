import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default function User(props) {
  return (
    <div>
      <p>
        <h3>Name: {props.myName}</h3>
        <h3>Age: {props.myAge}</h3>
        <h3>Country: {props.myCountry}</h3>
      </p>
      <br/>
      <button onClick={() => Router.push('../')} >Main Page</button>
      <style>{`
        p h3 {
          border: 1px solid gray;
          margin: 5px;
          background: peru;
          width: 250px;
          text-align: center

        }      
      `}
      </style>
    </div>
  )
}
