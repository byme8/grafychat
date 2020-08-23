import React, { lazy, Suspense, useEffect } from 'react'

import { Stack, mergeStyles } from 'office-ui-fabric-react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { useUserStore } from '@services/Store'
import { openAddUser } from '@services/Helpers'
import client from 'Client'

let Home = lazy(() => import('./pages/Home'))
let AddUser = lazy(() => import('./pages/AddUser'))

let routerViewStyle = mergeStyles({
  display: 'grid',
  gridTemplateRows: 'auto 100%',
  width: '100%',
  height: '100%',
  flex: 'auto'
})

let routerContainerStyle = mergeStyles({
  margin: '0px 1%'
})

export function MainLayout() {
  let [user] = useUserStore()

  useEffect(() => {
    if (user?.id) {
      return
    }

    openAddUser()
  }, [user])

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      styles={{
        root: {
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      tokens={{
        childrenGap: 15
      }}>

      <ApolloProvider client={client}>
        <HashRouter>
          <div className={routerViewStyle}>
            <Suspense fallback={<div>Loading...</div>}>
              <div className={routerContainerStyle}>
                <Switch>
                  <Route path="/user" component={AddUser} />
                  <Route path="/" component={Home} />
                </Switch>
              </div>
            </Suspense>
          </div>
        </HashRouter>
      </ApolloProvider>

    </Stack>
  )
};
