import React from "react";
import { connect } from "react-redux";
import "./findUser.scss"
import { setState, subscribe, unsubscribe, setCount, setCurrentPage, toggleIsFetching } from "../../redux/find-user-reducer";
import axios from "axios";
import FindUser from "./FindUser";
import Preloader from "../Common/Preloader/Preloader";

class ContainerFindUser extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setState(response.data.items)
            this.props.setCount(response.data.totalCount)
         })
   };

   onChangePage = (pageNumber) => {
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`)
         .then(response => {
            this.props.setState(response.data.items)
            this.props.toggleIsFetching(false)
         })
   }

   render = () => {
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
   }
}

const UserElement = connect(mapStateToProps, {
   subscribe, unsubscribe, setState, setCount, setCurrentPage, toggleIsFetching
})(ContainerFindUser)


export default UserElement;