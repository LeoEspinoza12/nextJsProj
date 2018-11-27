import React from 'react'

import User from '../../components/User'

const user = (props) => (
  <div>
    <User 
      myName={props.name}
      myAge={props.age}
      myCountry={props.country}
    />
  </div>

)

user.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    resolve({
      name: 'Lhomme Grand',
      age: 25,
      country: 'Les Etats Unis'
    })
  })
  return promise
}

export default user