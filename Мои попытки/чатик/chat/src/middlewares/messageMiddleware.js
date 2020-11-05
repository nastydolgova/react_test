import { SEND_MSG, sendMessage } from "../store/actions/messages_actions.js";

export default store => next => (action) => {
   switch (action.type) {
       case SEND_MSG:
           if (action.sender === 'Me') {
            setTimeout(() => store.dispatch(
                sendMessage(
                    Object.keys(store.getState().msgReducer.messages).length + 1,
                    'Bot', 
                    'We will call you back',
                    //action.chatId
                )
            ), 
            1000
            )
        }
   }
   return next(action)
}