

type DialogData = {
   id: number
   name: string
   ava: string
}
type MessageData = {
   id: string
   message: string
}
type InitialStateType = {
   dialogData: DialogData[]
   messageData: MessageData[]
   messageNew: { message: string }
}

let initialState: InitialStateType = {
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
   ],
   messageNew: {
      message: 'Add new Message',
   }
}

const ON_CHANGE_MESSAGE = 'social/messenger/onChangeMessage';
const SEND_MESSAGE = 'social/messenger/sendMessage';

const messengerReduce = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case ON_CHANGE_MESSAGE: {
         return {
            ...state,
            messageNew: { message: action.text }
         }
      };
      case SEND_MESSAGE:
         return {
            ...state,
            messageData: [...state.messageData, { id: 'user', message: state.messageNew.message }],
            messageNew: { message: '' }
         };
      default: return state;
   }
}

export const addMessage = () => ({ type: SEND_MESSAGE });
export const updateMessage = (text: string) => ({ type: ON_CHANGE_MESSAGE, text: text });

export default messengerReduce;