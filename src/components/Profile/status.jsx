import React from "react";


class Status extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }
   activateEditMode = () => {
      this.setState({
         editMode: true,

      });
   }
   deactivateEditMode = () => {
      this.setState({
         editMode: false
      });
      this.props.setStatus(this.state.status)
   }
   changeStatus = (e) => {
      this.setState({
         status: e.target.value
      })
   }

   render() {
      return (
         <div>
            {!this.state.editMode &&
               <div>
                  <span onClick={this.activateEditMode}>{this.state.status}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input onChange={this.changeStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
               </div>
            }
         </div>
      )
   }
}



export default Status;