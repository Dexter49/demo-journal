/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTravelEntryInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  location?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  media?: Array< string | null > | null,
};

export type ModelTravelEntryConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  media?: ModelStringInput | null,
  and?: Array< ModelTravelEntryConditionInput | null > | null,
  or?: Array< ModelTravelEntryConditionInput | null > | null,
  not?: ModelTravelEntryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TravelEntry = {
  __typename: "TravelEntry",
  id: string,
  title: string,
  description?: string | null,
  location?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  media?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTravelEntryInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  location?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  media?: Array< string | null > | null,
};

export type DeleteTravelEntryInput = {
  id: string,
};

export type ModelTravelEntryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  media?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTravelEntryFilterInput | null > | null,
  or?: Array< ModelTravelEntryFilterInput | null > | null,
  not?: ModelTravelEntryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTravelEntryConnection = {
  __typename: "ModelTravelEntryConnection",
  items:  Array<TravelEntry | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTravelEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTravelEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionTravelEntryFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTravelEntryMutationVariables = {
  input: CreateTravelEntryInput,
  condition?: ModelTravelEntryConditionInput | null,
};

export type CreateTravelEntryMutation = {
  createTravelEntry?:  {
    __typename: "TravelEntry",
    id: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTravelEntryMutationVariables = {
  input: UpdateTravelEntryInput,
  condition?: ModelTravelEntryConditionInput | null,
};

export type UpdateTravelEntryMutation = {
  updateTravelEntry?:  {
    __typename: "TravelEntry",
    id: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTravelEntryMutationVariables = {
  input: DeleteTravelEntryInput,
  condition?: ModelTravelEntryConditionInput | null,
};

export type DeleteTravelEntryMutation = {
  deleteTravelEntry?:  {
    __typename: "TravelEntry",
    id: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTravelEntryQueryVariables = {
  id: string,
};

export type GetTravelEntryQuery = {
  getTravelEntry?:  {
    __typename: "TravelEntry",
    id: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTravelEntriesQueryVariables = {
  filter?: ModelTravelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTravelEntriesQuery = {
  listTravelEntries?:  {
    __typename: "ModelTravelEntryConnection",
    items:  Array< {
      __typename: "TravelEntry",
      id: string,
      title: string,
      description?: string | null,
      location?: string | null,
      startDate?: string | null,
      endDate?: string | null,
      media?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTravelEntrySubscriptionVariables = {
  filter?: ModelSubscriptionTravelEntryFilterInput | null,
};

export type OnCreateTravelEntrySubscription = {
  onCreateTravelEntry?:  {
    __typename: "TravelEntry",
    id: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTravelEntrySubscriptionVariables = {
  filter?: ModelSubscriptionTravelEntryFilterInput | null,
};

export type OnUpdateTravelEntrySubscription = {
  onUpdateTravelEntry?:  {
    __typename: "TravelEntry",
    id: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTravelEntrySubscriptionVariables = {
  filter?: ModelSubscriptionTravelEntryFilterInput | null,
};

export type OnDeleteTravelEntrySubscription = {
  onDeleteTravelEntry?:  {
    __typename: "TravelEntry",
    id: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDate?: string | null,
    endDate?: string | null,
    media?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
