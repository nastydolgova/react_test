import {combineReducers} from 'redux'
import msgReducer from './messages_reducer'
import chatsReducer from './chats_reducer'

export default combineReducers({msgReducer, chatsReducer})