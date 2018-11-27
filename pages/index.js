
import React, {Component} from 'react'
import Link from 'next/link'
import Router from 'next/router'


class theIndex extends Component {

 static async getInitialProps(context){
    console.log(context)
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve({name: "Super App"})
      }, 0)
    })

    return promise
  }


  render(){
    return(
      <div>
        <h1>We are in the index {this.props.name}</h1>
        <p>
          Go to <Link href="/french"><a>French Course</a></Link>     
        </p>
        <p>
          Go to <Link href="/espanol"><a>Spanish Course</a></Link>     
        </p>
    
        <p>
          Go to <Link href="/user"><a>My Account</a></Link>     
        </p>
    
        <br/><br/>
        <button onClick={() => Router.push('/french/french')}>Go to your french lessons</button>  <button onClick={() => Router.push('/espanol/espanol')}>Go to your Spanish lessons</button>
    
    
      </div>

    )
  }

}

export default theIndex