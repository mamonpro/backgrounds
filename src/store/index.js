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
      },
      {
        id: 31,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '31.jpeg'
      },
      {
        id: 32,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '32.jpeg'
      },
      {
        id: 33,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '33.jpeg'
      },
      {
        id: 34,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '34.jpeg'
      },
      {
        id: 35,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '35.jpeg'
      },
      {
        id: 36,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '36.jpeg'
      },
      {
        id: 37,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '37.jpeg'
      },
      {
        id: 38,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '38.jpeg'
      },
      {
        id: 39,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '39.jpeg'
      },
      {
        id: 40,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '40.jpeg'
      },
      {
        id: 41,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '41.jpeg'
      },
      {
        id: 42,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '42.jpeg'
      },
      {
        id: 43,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '43.jpeg'
      },
      {
        id: 44,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '44.jpeg'
      },
      {
        id: 45,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '45.jpeg'
      },
      {
        id: 46,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '46.jpeg'
      },
      {
        id: 47,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '47.jpeg'
      },
      {
        id: 48,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '48.jpeg'
      },
      {
        id: 49,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '49.jpeg'
      },
      {
        id: 50,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '50.jpeg'
      },
      {
        id: 51,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '51.jpeg'
      },
      {
        id: 52,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '52.jpeg'
      },
      {
        id: 53,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '53.jpeg'
      },
      {
        id: 54,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '54.jpeg'
      },
      {
        id: 55,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '55.jpeg'
      },
      {
        id: 56,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '56.jpeg'
      },
      {
        id: 57,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '57.jpeg'
      },
      {
        id: 58,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '58.jpeg'
      },
      {
        id: 59,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '59.jpeg'
      },
      {
        id: 60,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '60.jpeg'
      },
      {
        id: 61,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '61.jpeg'
      },
      {
        id: 62,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '62.jpeg'
      },
      {
        id: 63,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '63.jpeg'
      },
      {
        id: 64,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '64.jpeg'
      },
      {
        id: 65,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '65.jpeg'
      },
      {
        id: 66,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '66.jpeg'
      },
      {
        id: 67,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '67.jpeg'
      },
      {
        id: 68,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '68.jpeg'
      },
      {
        id: 69,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '69.jpeg'
      },
      {
        id: 70,
        likes: 10,
        view: 1230,
        downloads: 482,
        url: '70.jpeg'
      }
    ],
    device: null,
    devices: [
      {
        id: 1,
        name: 'iPhone SE'
      },
      {
        id: 2,
        name: 'iPhone 8'
      },
      {
        id: 3,
        name: 'iPhone 8 Plus'
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
