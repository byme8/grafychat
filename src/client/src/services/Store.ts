import { createInMemoryStore } from '@hooks/usePersistentStore'

export interface IMessage {
  id: string,
  message: string,
  userId: string
}

export let useMessagesStore = createInMemoryStore({ messages: [] as IMessage[] })
