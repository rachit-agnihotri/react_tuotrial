import React ,{Component} from 'react'

class Welcome extends Component{
    render(){
        const {name, age}=this.props;
        return (
        <div>
        <h1>{name},Welcome to class component </h1>
        <h2>You are good guy</h2>
        </div>
    )
    }
}
export default Welcome