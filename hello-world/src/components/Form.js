import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic: 'Angular' // it should match with any one of given value
      }
      this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            username: event.target.value
        })
    }
    handlecomments =(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handletopic =(event)=>{
        this.setState({
            topic:event.target.value
        })

        
    }
  render() {
    return (
      <div>
        <h2>Fill the given form</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label> Hello,{this.state.username}</label>
                <input type='text'
                 value={this.state.username} onChange={this.handleChange}/> 
            </div>
            <div>
                <label>
                    Comments
                </label>
                <textarea value={this.state.comments}
                onChange={this.handlecomments}></textarea>
            </div>
            <div>
                <label> Topic</label>
                <select value={this.state.topic}
                onChange={this.handletopic}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='node'>node</option>

                </select>
            </div>
            <button type='Submit'>
                Submit
            </button>
        </form>
      </div>
    )
  }
}

export default Form
