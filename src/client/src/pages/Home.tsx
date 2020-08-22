import React from 'react'
import { Stack, PrimaryButton, mergeStyles } from 'office-ui-fabric-react'
import { useGetMessageQuery } from 'generated/graphql'

export default function Home() {
  let { data: messages, loading } = useGetMessageQuery({ variables: { count: 10 } })

  function onSend() {

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
          {messages?.messages?.map(o => (<div key={o?.id}>{o?.id}: {o?.author?.name}: {o?.text} </div>))}
        </div>
      }
      <PrimaryButton onClick={onSend}>Send</PrimaryButton>
    </Stack>
  )
}

let body = mergeStyles({
  height: '960px'
})
