<script>
import axios from 'axios'

import asyncController from '../../controllers/asyncController'

import codeSample from './code/asyncController.txt'
import codeSampleComputed from './code/asyncControllerComputed.txt'

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const get = async (url) => {

  try {
    const response = await axios.get(url)
    return response.data

  } catch (error) {
    throw error
  }

}

export default {

  data () {
    return {
      codeSample,
      codeSampleComputed,

      albumsUrl: baseUrl + 'albums',
      postsUrl: baseUrl + 'posts',
      usersUrl: baseUrl + 'users',
      userUrl: baseUrl + 'users/1',
      errorUrl: baseUrl + 'foo',

      user: null,
      users: null,
      errorValue: null,

      asyncController: asyncController()
    }
  },

  methods: {

    async getUsers () {
      this.users = await this.asyncController.send(get(this.usersUrl))
    },

    async getUser () {
      this.user = await this.asyncController.send(get(this.userUrl))
    },

    async getError () {
      this.errorValue = await this.asyncController.send(get(this.errorUrl))
    },

    async getMultiple () {
      await this.asyncController.send(
        get(this.albumsUrl),
        get(this.postsUrl),
        get(this.usersUrl),
        get(this.userUrl)
      )
    },

    async getMultipleWithErrors () {
      await this.asyncController.send(
        get(this.albumsUrl),
        get(this.postsUrl),
        get(this.errorUrl),
        get(this.usersUrl),
        get(this.userUrl)
      )
    },



    reset () {
      this.user = null
      this.users = null
      this.errorValue = null

      this.asyncController.reset()
    }

  }

}

</script>

<template>
  <div>

    <h1><code>asyncController()</code></h1>

    <js-block source="import asyncController from 'linna/controllers/asyncController'" />

    <h3>Dependencies</h3>

    <p>
      lodash, Vue
    </p>



    <h2>Usage</h2>

    <p>
      Do one or multiple single requests.
    </p>

    <js-block :source="codeSample" />

    <p>
      Use computed to list data. Data won't be cleared between requests.
    </p>

    <js-block :source="codeSampleComputed" />

    <h2>
      One operation
    </h2>

    <js-block source="asyncController().send(axios.get('https://domain.com/users'))" />

    <h2>
      Multiple operations
    </h2>

    <p>
      You can use one <code>asyncController</code> to handle multiple network requests promises easily.
    </p>

    <p>
      When dealing with multiple operations, <code>.isFailed</code> is true whenever at least one operation has failed. An error will be thrown once all operations have completed, if at least one has resulted in error. To not get an error thrown, you can set <code>omitErrors</code> to <code>true</code>.
    </p>

    <p>
      NOTE: it is usually not advisable to use <code>.response</code> and <code>.error</code> if you're handline multiple requests, as you cannot reliably tell which of your operations are the successful and which was failed.
    </p>

    <actions>

      <button @click="reset">
        reset
      </button>

      <button @click="getUsers">
        getUsers
      </button>

      <button @click="getUser">
        getUser
      </button>

      <button @click="getError">
        getError
      </button>

      <button @click="getMultiple">
        getMultiple
      </button>

      <button @click="getMultipleWithErrors">
        getMultipleWithErrors
      </button>

    </actions>

    <json-block
      style="max-height: 20em; overflow: auto;"
      :source="{
        user: user,
        users: users,
        errorValue: users
      }"
    />

    <json-block
      :source="{
        operationCount: asyncController.operationCount,
        isFailed: asyncController.isFailed,
        isCompleted: asyncController.isCompleted,
        isSuccess: asyncController.isSuccess,

        hasErrors: asyncController.hasErrors,
        hasResponses: asyncController.hasResponses,

        errorIndexes: asyncController.errorIndexes,
        responseIndexes: asyncController.responseIndexes,

        error: asyncController.error,
        response: asyncController.response,
        errors: asyncController.errors,
        responses: asyncController.responses,
        promises: asyncController.promises
      }"
    />

  </div>
</template>
