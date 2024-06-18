import React from 'react'
//Jsx method-->react translates it to createElement
const heading ={
    font:80,
    color:'green'
}
function Greet(props){
    const {name,age}=props;
    return <h1 style={heading}>Hello {name},{age} Good Morning</h1>
}

// const Greet =() => {
// return React.createElement('h1',{id:'abc',className:'zero'},React.createElement('b',null,'Hello Rachit'));
// }
export default Greet