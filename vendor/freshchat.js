import windowExists from '../util/windowExists'

// See reference: https://developers.freshchat.com/
const widgetConfig = {
  cssNames: {
    widget: 'freshchat-frame',
    open: 'freshchat-frame-open',
    expanded: 'freshchat-frame-expanded'
  },
  content: {
    headers: {
      chat: 'Chat with us',
      chat_help: 'Get in touch with our team'
    }
  }
}

const getChat = () => {
  if (windowExists() && window.fcWidget) {
    return window.fcWidget
  }
  return null
}

// https://developers.freshchat.com/#loggedin-user
export const initializeChat = (token, userId, userEmail, userName) => {
  if (token) {
    const chat = getChat()
    if (chat) {

      // Prepare chat window, with existing user information
      chat.init({

        // https://developers.freshchat.com/#customisation-wgt
        config: widgetConfig,
        token: token,
        host: 'https://wchat.freshchat.com',

        // User-specific data
        externalId: userId, // user’s id unique to your system
        email: userEmail, // user’s email address

        // NOTE: will custom properties work?
        firstName: userName,
        fullName: userName

      })

      return true

    }
  }

  return false
}



export const getChatIsOpen = () => {
  const chat = getChat()
  if (chat) {
    return chat.isOpen()
  }
  return null
}

export const toggleChat = (channelName) => {
  const chat = getChat()
  if (chat) {
    if (chat.isOpen()) {
      return closeChat()
    }
    return openChat(channelName)
  }
}

export const openChat = (channelName) => {
  const chat = getChat()
  if (chat) {

    if (channelName) {
      return chat.open({
        name: channelName
      })
    }

    return chat.open()
  }
}

export const closeChat = () => {
  const chat = getChat()
  if (chat) {
    return chat.close()
  }
}
