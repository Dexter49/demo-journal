/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTravelEntry = /* GraphQL */ `mutation CreateTravelEntry(
  $input: CreateTravelEntryInput!
  $condition: ModelTravelEntryConditionInput
) {
  createTravelEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTravelEntryMutationVariables,
  APITypes.CreateTravelEntryMutation
>;
export const updateTravelEntry = /* GraphQL */ `mutation UpdateTravelEntry(
  $input: UpdateTravelEntryInput!
  $condition: ModelTravelEntryConditionInput
) {
  updateTravelEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTravelEntryMutationVariables,
  APITypes.UpdateTravelEntryMutation
>;
export const deleteTravelEntry = /* GraphQL */ `mutation DeleteTravelEntry(
  $input: DeleteTravelEntryInput!
  $condition: ModelTravelEntryConditionInput
) {
  deleteTravelEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTravelEntryMutationVariables,
  APITypes.DeleteTravelEntryMutation
>;
