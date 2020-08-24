import { createInMemoryStore } from '@hooks/useInMemoryStore'

export interface IMessage {
  id: string,
  text: string,
  authorId?: string,
  author?: IUser
}

export interface IUser {
  id: string,
  name: string
}

export let useUserStore = createInMemoryStore({ currentUser: null as IUser | null })
export let useMessagesStore = createInMemoryStore({ messages: [] as IMessage[] })
