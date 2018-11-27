import React, { Component } from 'react'
import Link from 'next/link'

export default class espanol extends Component {
  render() {
    return (
      <div>
        <h1>el ceirto pagina de espanol</h1>
        <p><Link href="../"><a>Main Page</a></Link></p>
      </div>
    )
  }
}
