import React from "react";
import { connect } from "react-redux";
import "./findUser.scss"
import { subscribe, unsubscribe, setCurrentPage, getUsersSearch, follow, unfollow } from "../../redux/find-user-slice";
import FindUser from "./FindUsers";
import Preloader from "../Common/Preloader/Preloader";
import { Navigate } from 'react-router-dom'
import { RootState } from "../../redux/redux-store";

class ContainerFindUser extends React.Component {

  componentDidMount() {
    this.props.getUsersSearch('1')
  };

  onChangePage = (pageNumber) => {
    this.props.getUsersSearch(pageNumber)
  }

  render = () => {
    if (this.props.isFetching) { return <Preloader /> }
    // if (!this.props.isAuth) return <Navigate to={'/login'} />
    return (
      <>
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
  subscribe, unsubscribe, setCurrentPage, getUsersSearch, follow, unfollow
})(ContainerFindUser)


export default UserElement;