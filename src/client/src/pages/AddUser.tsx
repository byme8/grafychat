import React, { useState } from 'react'
import { TextField, PrimaryButton, Stack } from 'office-ui-fabric-react'
import { useAddUserMutation } from 'generated/graphql'
import { useUserStore } from '@services/Store'
import { useHistory } from 'react-router-dom'

export default function AddUser() {
  let history = useHistory()
  let [userName, setUserName] = useState('')
  let [addUserMutation] = useAddUserMutation()
  let [_, setUser] = useUserStore()

  function addUser() {
    if (!userName) {
      return
    }

    addUserMutation({ variables: { name: userName } })
      .then(o => {
        setUser(o.data?.addUser!)
        history.push('/')
      })
  }

  return (
    <Stack gap={10} horizontalAlign="center">
      <TextField placeholder="Input your user name" onChange={(e, o) => setUserName(o ?? '')} value={userName} />
      <PrimaryButton onClick={addUser}>Ok</PrimaryButton>
    </Stack>
  )
};
