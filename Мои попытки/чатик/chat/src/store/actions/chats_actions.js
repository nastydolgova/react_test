export let ADD_CHAT = '@@char/ADD_CHAT'

export let addChat = (title) => ({
    type: ADD_CHAT,
    title: title
})