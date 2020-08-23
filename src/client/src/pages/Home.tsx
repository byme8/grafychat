import React, { useState, useEffect } from 'react'
import { Stack, mergeStyles, TextField } from 'office-ui-fabric-react'
import { useGetMessageQuery, useAddMessageMutation, useOnMessageSubscription } from 'generated/graphql'
import { useUserStore, useMessagesStore } from '@services/Store'

export default function Home() {
  let { data: initialMessages, loading } = useGetMessageQuery({ variables: { count: 10 } })
  let { data: onMessage } = useOnMessageSubscription({ variables: {} })
  let [addMessageMutation] = useAddMessageMutation()

  let [user] = useUserStore()
  let [messages, setMessages] = useMessagesStore()
  let [newMessage, setNewMassage] = useState('')

  useEffect(() => setMessages(initialMessages?.messages!), [initialMessages])
  useEffect(() => {
    if (!onMessage) {
      return
    }
    setMessages([...messages, onMessage.onMessage])
  }, [onMessage])

  function onChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) {
    setNewMassage(newValue ?? '')
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.key !== 'Enter') {
      return
    }

    addMessageMutation({ variables: { text: newMessage, userId: user?.id } })

    setNewMassage('')
  }

  return (
    <Stack
      className={body}
      horizontalAlign="center"
      verticalAlign="end"
      verticalFill
      tokens={{ childrenGap: 15 }}>

      {loading
        ? <> Messages are loading... </>
        : <div>
          {messages?.map(o => (<div key={o?.id}>{o?.author?.name}: {o?.text} </div>))}
        </div>
      }
      <TextField onChange={onChange} onKeyPress={onEnter} value={newMessage} />
    </Stack>
  )
}

let body = mergeStyles({
  height: '960px'
})
