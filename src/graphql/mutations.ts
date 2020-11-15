/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCat = /* GraphQL */ `
  mutation CreateCat(
    $input: CreateCatInput!
    $condition: ModelCatConditionInput
  ) {
    createCat(input: $input, condition: $condition) {
      id
      name
      weight
      origin
      isEditable
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateCat = /* GraphQL */ `
  mutation UpdateCat(
    $input: UpdateCatInput!
    $condition: ModelCatConditionInput
  ) {
    updateCat(input: $input, condition: $condition) {
      id
      name
      weight
      origin
      isEditable
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteCat = /* GraphQL */ `
  mutation DeleteCat(
    $input: DeleteCatInput!
    $condition: ModelCatConditionInput
  ) {
    deleteCat(input: $input, condition: $condition) {
      id
      name
      weight
      origin
      isEditable
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
