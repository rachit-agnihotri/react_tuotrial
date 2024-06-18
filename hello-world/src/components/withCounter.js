import React from "react";
//H.O.C.
const UpdatedComponent = (OriginalComponent,num) =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
        handleclick=()=>{
              this.setState( prevState=>{
                  return  {count : prevState.count+num}
              })
        }
        render(){
            return <OriginalComponent count={this.state.count} handleclick={this.handleclick}
            {...this.props}/>
        }
    }
    return NewComponent;
}
export default UpdatedComponent

// import React from "react";
// //H.O.C.
// const UpdatedComponent = OriginalComponent =>{
//     class NewComponent extends React.Component{
//         render(){
//             return <OriginalComponent/>
//         }
//     }
//     return NewComponent;
// }