let store = {
   _state: {
      newPost: {
         text: ''
      },
      commentData: [
         { comment: 'My first comment!', like: '34' },
         { comment: 'Its comment', like: '12' },
         { comment: 'Hi? anybody', like: '41' },
         { comment: 'What what what what?', like: '23' },
         { comment: "ok, ok, ok, ok!", like: '5' },
      ],
      dialogData: [
         { id: 1, name: 'person1', ava: 'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg' },
         { id: 2, name: 'person2', ava: 'https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png' },
         { id: 3, name: 'person3', ava: 'https://static-cse.canva.com/blob/847064/29.jpg' },
         { id: 4, name: 'person4', ava: 'https://nash.live/img/forall/u/0/29/20190911154809-5288.jpg' },
         { id: 5, name: 'person5', ava: 'https://nash.live/img/article/176/97_main.jpg-v1647033096.webp' }
      ],
      messageData: [
         { id: 'user', message: 'первое сообщениев валызщлвазщлывлабывжаббывждабыждв' },
         { id: 'companion', message: 'второе сообщение ваыааываываываываываыв' },
         { id: 'user', message: 'ответ на второе сообщение влалдылвабьждывбжадбыжважаппвапвапвапв апвапавпвапвапавпавпвапвапвапапва пвапвапвапва' }
      ]
   },
   _rerender() {
      console.log('1')
   },
   getState() {
      return this._state;
   },

   subscribe(obs) {
      this._rerender = obs;
   },

   dispatch(action) {
      if (action.type === 'updatePostChange') {
         this._state.newPost.text = action.text
         this._rerender(this._state);
      } else if (action.type === 'addPost') {
         this._state.commentData.push({ comment: this._state.newPost.text, like: '0' })
         this._rerender(this._state);
         this._state.newPost.text = '';
      }
   }
};

export default store;