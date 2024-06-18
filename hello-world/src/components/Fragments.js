import React, { Component } from 'react'
import Colums from './Colums'
class Fragments extends Component {
  render() {
    return (
    <div>
      <h1> Fragments </h1>
      <p>Fragments allow us to pass multiple childrens without making any extra nodes </p>
      <table>
        <tbody>
        <tr><Colums/></tr>
        <tr><Colums/></tr>
        </tbody>
      </table>
      <button> press </button>
    </div>
    )
  }
}

export default Fragments
