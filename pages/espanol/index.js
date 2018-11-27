import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>este es pagina de espanol</h1>
      <p>Go to <Link href="/espanol/espanol"><a>Spanish Lessons</a></Link></p>
      <p><Link href="../"><a>Main Page</a></Link></p>
    </div>
  )
}
