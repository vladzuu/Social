import { connect } from "react-redux";
import React from "react";
import './header.scss'
import { getMyAcc } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getMyAcc()
   }
   render() {
      return (
         <Header data={this.props.data} />
      )
   }
}

const Header = (props) => {
   return (
      <header className="Header">
         <div>{props.data.email}</div>
         <div>{props.data.login}</div>
      </header>
   )
}

const mapStateToProps = (state) => {
   return {
      data: state.auth
   }
}
const HeaderConnect = connect(mapStateToProps, { getMyAcc })(HeaderContainer)
export default HeaderConnect;