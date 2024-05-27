/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTravelEntry = /* GraphQL */ `query GetTravelEntry($id: ID!) {
  getTravelEntry(id: $id) {
    id
    title
    description
    location
    startDate
    endDate
    media
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTravelEntryQueryVariables,
  APITypes.GetTravelEntryQuery
>;
export const listTravelEntries = /* GraphQL */ `query ListTravelEntries(
  $filter: ModelTravelEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listTravelEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      location
      startDate
      endDate
      media
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTravelEntriesQueryVariables,
  APITypes.ListTravelEntriesQuery
>;
