import React, { Component } from 'react'
import { UserConsumer } from './userContext'
export class ComponentF extends Component {
  render() {
    return (
    <>
    Hello
      <UserConsumer>
        {
            (username)=>{
                return <div>hii {username} </div>

            }
        }
      </UserConsumer>
      </>
    )
  }
}

export default ComponentF
