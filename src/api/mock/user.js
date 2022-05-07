import { wait } from '@api/utils/wait'

export const userDataMock = () => ({
  getUserInfo: async () => {
    await wait(1500)
    return { name: 'jeongyun' }
  },
})
