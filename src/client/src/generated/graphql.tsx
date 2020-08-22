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
  messages?: Maybe<Array<Maybe<Message>>>;
};


export type QueryMessagesArgs = {
  count: Scalars['Int'];
};


export type Message = {
  __typename?: 'Message';
  author?: Maybe<User>;
  authorId: Scalars['Uuid'];
  id: Scalars['Uuid'];
  text?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Uuid'];
  name?: Maybe<Scalars['String']>;
};

export type GetMessageQueryVariables = Exact<{
  count: Scalars['Int'];
}>;


export type GetMessageQuery = (
  { __typename?: 'Query' }
  & { messages?: Maybe<Array<Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    )> }
  )>>> }
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