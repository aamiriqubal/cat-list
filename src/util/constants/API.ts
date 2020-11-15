/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCatInput = {
  id?: string | null,
  name: string,
  weight?: string | null,
  origin?: string | null,
  isEditable: boolean,
  description: string,
  owner: string,
};

export type ModelCatConditionInput = {
  name?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  origin?: ModelStringInput | null,
  isEditable?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCatConditionInput | null > | null,
  or?: Array< ModelCatConditionInput | null > | null,
  not?: ModelCatConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCatInput = {
  id: string,
  name?: string | null,
  weight?: string | null,
  origin?: string | null,
  isEditable?: boolean | null,
  description?: string | null,
  owner?: string | null,
};

export type DeleteCatInput = {
  id?: string | null,
};

export type ModelCatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  origin?: ModelStringInput | null,
  isEditable?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCatFilterInput | null > | null,
  or?: Array< ModelCatFilterInput | null > | null,
  not?: ModelCatFilterInput | null,
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

export type CreateCatMutationVariables = {
  input: CreateCatInput,
  condition?: ModelCatConditionInput | null,
};

export type CreateCatMutation = {
  createCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    weight: string | null,
    origin: string | null,
    isEditable: boolean,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCatMutationVariables = {
  input: UpdateCatInput,
  condition?: ModelCatConditionInput | null,
};

export type UpdateCatMutation = {
  updateCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    weight: string | null,
    origin: string | null,
    isEditable: boolean,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCatMutationVariables = {
  input: DeleteCatInput,
  condition?: ModelCatConditionInput | null,
};

export type DeleteCatMutation = {
  deleteCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    weight: string | null,
    origin: string | null,
    isEditable: boolean,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCatQueryVariables = {
  id: string,
};

export type GetCatQuery = {
  getCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    weight: string | null,
    origin: string | null,
    isEditable: boolean,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCatsQueryVariables = {
  filter?: ModelCatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCatsQuery = {
  listCats:  {
    __typename: "ModelCatConnection",
    items:  Array< {
      __typename: "Cat",
      id: string,
      name: string,
      weight: string | null,
      origin: string | null,
      isEditable: boolean,
      description: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCatSubscription = {
  onCreateCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    weight: string | null,
    origin: string | null,
    isEditable: boolean,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCatSubscription = {
  onUpdateCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    weight: string | null,
    origin: string | null,
    isEditable: boolean,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCatSubscription = {
  onDeleteCat:  {
    __typename: "Cat",
    id: string,
    name: string,
    weight: string | null,
    origin: string | null,
    isEditable: boolean,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
