import React, { lazy, Suspense } from 'react'

import { Stack, mergeStyles } from 'office-ui-fabric-react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

let Home = lazy(() => import('./pages/Home'))
let Login = lazy(() => import('./pages/Login'))

const client = new ApolloClient({
  uri: 'https://localhost:5001/g',
  cache: new InMemoryCache()
})

export function MainLayout() {
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
                  <Route path="/" component={Home} />
                  <Route path="/login" component={Login} />
                </Switch>
              </div>
            </Suspense>
          </div>
        </HashRouter>
      </ApolloProvider>

    </Stack>
  )
};
