
import React from 'react'
import Link from 'next/link'

const manski = (props) => (
  <div>
    <h1>c'est une page francise</h1>
    <p>Go to <Link href="/french/french"><a>{props.lessonTitle}</a></Link></p>
    <p><Link href="../"><a>{props.mainTitle}</a></Link></p>

  </div>
)

manski.getInitialProps = context =>{
  const promise = new Promise((res, err) => {
    res({mainTitle: 'Main French Page', lessonTitle: 'Les Francois des Leccions'})
  })
  return promise
}

export default manski
