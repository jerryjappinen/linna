import Vue from 'vue'

import {
  closeChat,
  getChatIsOpen,
  initializeChat,
  openChat,
  toggleChat
} from '../vendor/freshchat'

export default new Vue({

  data () {
    return {
      isEnabled: false,
      isOpen: false
    }
  },

  methods: {

    toggle (channelName) {
      toggleChat(channelName)
      this.isOpen = getChatIsOpen()
    },

    close () {
      closeChat()
      this.isOpen = getChatIsOpen()
    },

    open (channelName) {
      openChat(channelName)
      this.isOpen = getChatIsOpen()
    },

    initialize (...args) {
      const initialized = initializeChat(...args)
      this.isEnabled = !!initialized
    }

  }

})
