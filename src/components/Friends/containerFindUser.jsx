import React from "react";
import { connect } from "react-redux";
import "./findUser.scss"
import { subscribe, unsubscribe, setCurrentPage, getUsers, follow, unfollow } from "../../redux/find-user-reducer";
import FindUser from "./FindUser";
import Preloader from "../Common/Preloader/Preloader";
import { Navigate } from 'react-router-dom'

class ContainerFindUser extends React.Component {

   componentDidMount() {
      this.props.getUsers('1')
   };

   onChangePage = (pageNumber) => {
      this.props.getUsers(pageNumber)
   }

   render = () => {
      if (!this.props.isAuth) { return <Navigate to={'/login'} /> }
      return (
         <>
            <Preloader isFetching={this.props.isFetching} />
            <FindUser
               changePage={this.onChangePage}
               users={this.props.users}
               unsubscribe={this.props.unsubscribe}
               subscribe={this.props.subscribe}
               totalCount={this.props.totalCount}
               currentPage={this.props.currentPage}
               follow={this.props.follow}
               unfollow={this.props.unfollow}

            />

         </>
      )

   }
}

const mapStateToProps = (state) => {
   return {
      totalCount: state.findUserReduce.totalCount,
      users: state.findUserReduce.users,
      currentPage: state.findUserReduce.currentPage,
      isFetching: state.findUserReduce.isFetching,
      isAuth: state.auth.isAuth
   }
}

const UserElement = connect(mapStateToProps, {
   subscribe, unsubscribe, setCurrentPage, getUsers, follow, unfollow
})(ContainerFindUser)


export default UserElement;