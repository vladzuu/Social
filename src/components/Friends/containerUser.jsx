import React from "react";
import { connect } from "react-redux";
import "./findUser.scss"
import { setState, isFetching } from "../../redux/user-selected-reducer";
import axios from "axios";
import Preloader from "../Common/Preloader/Preloader";
import { useLocation, useNavigate, useParams } from "react-router-dom";


class ContainerSelectedUser extends React.Component {
   componentDidMount() {
      this.props.isFetching(true)
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + this.props.router.params.userId)
         .then(response => {

            this.props.isFetching(false)
            this.props.setState(response.data)
         })

   };

   render = () => {
      return (
         <>
            <Preloader isFetching={this.props.isFetching1} />
            <div>{JSON.stringify(this.props.user)}</div>
         </>
      )
   }
}

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
   return {
      user: state.userSelectedReduce.user,
      isFetching1: state.userSelectedReduce.isFetching
   }
}

const UserSelect = connect(mapStateToProps, {
   setState, isFetching
})(withRouter(ContainerSelectedUser))

export default UserSelect;