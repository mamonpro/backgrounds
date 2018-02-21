import Vue from 'vue'
import Vuex from 'vuex'
import { SET_DEVICE } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    images: [
      {
        id: 1,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '1.jpeg'
      },
      {
        id: 2,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '2.jpeg'
      },
      {
        id: 3,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '3.jpeg'
      },
      {
        id: 4,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '4.jpeg'
      },
      {
        id: 5,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '5.jpeg'
      },
      {
        id: 6,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '6.jpeg'
      },
      {
        id: 7,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '7.jpeg'
      },
      {
        id: 8,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '8.jpeg'
      },
      {
        id: 9,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '9.jpeg'
      },
      {
        id: 10,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '10.jpeg'
      },
      {
        id: 11,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '11.jpeg'
      },
      {
        id: 12,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '12.jpeg'
      },
      {
        id: 13,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '13.jpeg'
      },
      {
        id: 14,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '14.jpeg'
      },
      {
        id: 15,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '15.jpeg'
      },
      {
        id: 16,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '16.jpeg'
      },
      {
        id: 17,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '17.jpeg'
      },
      {
        id: 18,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '18.jpeg'
      },
      {
        id: 19,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '19.jpeg'
      },
      {
        id: 20,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '20.jpeg'
      },
      {
        id: 21,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '21.jpeg'
      },
      {
        id: 22,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '22.jpeg'
      },
      {
        id: 23,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '23.jpeg'
      },
      {
        id: 24,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '24.jpeg'
      },
      {
        id: 25,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '25.jpeg'
      },
      {
        id: 26,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '26.jpeg'
      },
      {
        id: 27,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '27.jpeg'
      },
      {
        id: 28,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '28.jpeg'
      },
      {
        id: 29,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '29.jpeg'
      },
      {
        id: 30,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '30.jpeg'
      }
    ],
    device: null,
    devices: [
      {
        id: 1,
        name: 'iPhone 5'
      },
      {
        id: 2,
        name: 'iPhone 6 / 7'
      },
      {
        id: 3,
        name: 'iPhone 6 Plus / 7 Plus'
      },
      {
        id: 4,
        name: 'iPhone X'
      }
    ]
  },

  mutations: {
    [SET_DEVICE] (state, id) {
      state.device = id
    }
  },

  getters: {
    getImageById: (state) => (id) => {
      return state.images.find(image => image.id === id)
    },

    getDeviceById: (state) => (id) => {
      return state.devices.find(device => device.id === id)
    }
  }
})
