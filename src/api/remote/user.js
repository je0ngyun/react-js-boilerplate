import { publicAPI } from '@api/core'
import { throwError } from '@api/utils/throwError'

export const userDataRemote = () => ({
  getUserInfo: async () => {
    try {
      const response = await publicAPI.get({
        url: `/`,
      })
      return response.data
    } catch (error) {
      throwError(error)
    }
  },

  postUserLogin: async ({ userid, password }) => {
    try {
      const res = await publicAPI.post({
        url: `/test`,
        params: { userid, password },
      })
      return res.data
    } catch (err) {
      throwError(err)
    }
  },
})
