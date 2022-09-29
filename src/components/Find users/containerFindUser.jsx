import React from "react";
import { connect } from "react-redux";
import "./findUser.scss"
import { setStateAC, subscribeAC, unsubscribeAC } from "../../redux/find-user-reducer";




const ContainerFindUser = (props) => {
   if (props.users.length === 0) {
      props.pushState([
         { id: 1, subscribe: true, name: 'Vlad', ava: 'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg', city: 'Kharkov', status: 'hi hi hi hih' },
         { id: 2, subscribe: true, name: 'Anton', ava: 'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png', city: 'Kharkov', status: 'hi hi hi hih' },
         { id: 3, subscribe: false, name: 'Den', ava: 'https://static-cse.canva.com/blob/847064/29.jpg', city: 'Kharkov', status: 'totototottoto' },
         { id: 4, subscribe: true, name: 'Stepan', ava: 'https://nash.live/img/forall/u/0/29/20190911154809-5288.jpg', city: 'Kharkov', status: 'hi hi ggggi hih' },
         { id: 5, subscribe: false, name: 'Vova', ava: 'https://nash.live/img/article/176/97_main.jpg-v1647033096.webp', city: 'Kharkov', status: 'hi hi hisssddf hidfsdfh' }
      ])
   };

   return (

      <div div className="wrapper-findUser" >
         {props.users.map((user) => <div className="wrapper-user">
            <div className="user-find">
               <div className="ava-subscribe">
                  <img src={user.ava} className='ava-find'></img>
                  {user.subscribe ? <button onClick={() => props.unsubscribe(user.id)}>Unsubscribe</button>
                     : <button onClick={() => props.subscribe(user.id)}>Subscribe</button>
                  }
               </div>
               <div className="info-user">
                  {user.name}
                  {user.city}
                  {user.status}
               </div>
            </div >

         </div>
         )
         }
      </div >

   )
}


const mapStateToProps = (state) => {
   return {
      users: state.findUserReduce.users
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      subscribe: (userId) => {
         dispatch(subscribeAC(userId))
      },
      unsubscribe: (userId) => {
         dispatch(unsubscribeAC(userId))
      },
      pushState: (users) => {
         dispatch(setStateAC(users))
      }
   }
}


const UserElement = connect(mapStateToProps, mapDispatchToProps)(ContainerFindUser)


export default UserElement;