
import React from 'react'
import Link from 'next/link'
// import Router from 'next/router'

const errorPage = () => (
  <div>
    <h1>Opps. Something went Wrong</h1>
    <p>Try <Link href="/">going back</Link></p>
  </div>
)

export default errorPage