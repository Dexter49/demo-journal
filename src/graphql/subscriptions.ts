/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTravelEntry = /* GraphQL */ `subscription OnCreateTravelEntry(
  $filter: ModelSubscriptionTravelEntryFilterInput
) {
  onCreateTravelEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTravelEntrySubscriptionVariables,
  APITypes.OnCreateTravelEntrySubscription
>;
export const onUpdateTravelEntry = /* GraphQL */ `subscription OnUpdateTravelEntry(
  $filter: ModelSubscriptionTravelEntryFilterInput
) {
  onUpdateTravelEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTravelEntrySubscriptionVariables,
  APITypes.OnUpdateTravelEntrySubscription
>;
export const onDeleteTravelEntry = /* GraphQL */ `subscription OnDeleteTravelEntry(
  $filter: ModelSubscriptionTravelEntryFilterInput
) {
  onDeleteTravelEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTravelEntrySubscriptionVariables,
  APITypes.OnDeleteTravelEntrySubscription
>;
