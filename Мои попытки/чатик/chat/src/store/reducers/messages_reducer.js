import update from 'react-addons-update'
import {SEND_MSG} from '../actions/messages_actions'

const initialStore={
    messages:{ 
    //   1: {
        1: { name: "1", text: "Hello", chatId: 1 },
        2: { name: "Bot", text: "Hi", chatId: 1 },
    //   },
    // 2: {
    //     1: { user: "Darth Vader", text: "Luke, I'm your father!", chatId: 2 },
    // },
    // 3: {
    //     1: { user: "Typical JS", text: "'5' + 3 = '53'", chatId: 3 },
    //     2: { user: "Me", text: "Whaaat?", chatId: 3 }
    //  }
      }
}

export default function msgReducer (store = initialStore, action){
    switch (action.type){
        case SEND_MSG: {
             return update(store,{
                messages: {  $merge: { [ action.messageId] : { name: action.sender, text: action.text, chatId: action.chatId }} }
             });
        }
        default :
            return store;
    }
}