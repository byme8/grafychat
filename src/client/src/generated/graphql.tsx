import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any;
  Uuid: any;
};

export type Query = {
  __typename?: 'Query';
  messages: Array<Message>;
};


export type QueryMessagesArgs = {
  count: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage: Message;
  addUser: User;
};


export type MutationAddMessageArgs = {
  authorId: Scalars['Uuid'];
  text: Scalars['String'];
};


export type MutationAddUserArgs = {
  name: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessage: Message;
};


export type Message = {
  __typename?: 'Message';
  author: User;
  authorId: Scalars['Uuid'];
  id: Scalars['Uuid'];
  text: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['Uuid'];
  name: Scalars['String'];
};

export type GetMessageQueryVariables = Exact<{
  count: Scalars['Int'];
}>;


export type GetMessageQuery = (
  { __typename?: 'Query' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ) }
  )> }
);

export type AddMessageMutationVariables = Exact<{
  text: Scalars['String'];
  userId: Scalars['Uuid'];
}>;


export type AddMessageMutation = (
  { __typename?: 'Mutation' }
  & { addMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text'>
  ) }
);

export type OnMessageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnMessageSubscription = (
  { __typename?: 'Subscription' }
  & { onMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ) }
  ) }
);

export type AddUserMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);


export const GetMessageDocument = gql`
    query getMessage($count: Int!) {
  messages(count: $count) {
    id
    text
    author {
      id
      name
    }
  }
}
    `;

/**
 * __useGetMessageQuery__
 *
 * To run a query within a React component, call `useGetMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageQuery({
 *   variables: {
 *      count: // value for 'count'
 *   },
 * });
 */
export function useGetMessageQuery(baseOptions?: Apollo.QueryHookOptions<GetMessageQuery, GetMessageQueryVariables>) {
        return Apollo.useQuery<GetMessageQuery, GetMessageQueryVariables>(GetMessageDocument, baseOptions);
      }
export function useGetMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessageQuery, GetMessageQueryVariables>) {
          return Apollo.useLazyQuery<GetMessageQuery, GetMessageQueryVariables>(GetMessageDocument, baseOptions);
        }
export type GetMessageQueryHookResult = ReturnType<typeof useGetMessageQuery>;
export type GetMessageLazyQueryHookResult = ReturnType<typeof useGetMessageLazyQuery>;
export type GetMessageQueryResult = Apollo.QueryResult<GetMessageQuery, GetMessageQueryVariables>;
export const AddMessageDocument = gql`
    mutation addMessage($text: String!, $userId: Uuid!) {
  addMessage(text: $text, authorId: $userId) {
    id
    text
  }
}
    `;
export type AddMessageMutationFn = Apollo.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;

/**
 * __useAddMessageMutation__
 *
 * To run a mutation, you first call `useAddMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMessageMutation, { data, loading, error }] = useAddMessageMutation({
 *   variables: {
 *      text: // value for 'text'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddMessageMutation, AddMessageMutationVariables>) {
        return Apollo.useMutation<AddMessageMutation, AddMessageMutationVariables>(AddMessageDocument, baseOptions);
      }
export type AddMessageMutationHookResult = ReturnType<typeof useAddMessageMutation>;
export type AddMessageMutationResult = Apollo.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;
export const OnMessageDocument = gql`
    subscription onMessage {
  onMessage {
    id
    text
    author {
      id
      name
    }
  }
}
    `;

/**
 * __useOnMessageSubscription__
 *
 * To run a query within a React component, call `useOnMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMessageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnMessageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnMessageSubscription, OnMessageSubscriptionVariables>) {
        return Apollo.useSubscription<OnMessageSubscription, OnMessageSubscriptionVariables>(OnMessageDocument, baseOptions);
      }
export type OnMessageSubscriptionHookResult = ReturnType<typeof useOnMessageSubscription>;
export type OnMessageSubscriptionResult = Apollo.SubscriptionResult<OnMessageSubscription>;
export const AddUserDocument = gql`
    mutation addUser($name: String!) {
  addUser(name: $name) {
    id
    name
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, baseOptions);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;