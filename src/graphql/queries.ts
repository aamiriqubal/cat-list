/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCat = /* GraphQL */ `
  query GetCat($id: ID!) {
    getCat(id: $id) {
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
export const listCats = /* GraphQL */ `
  query ListCats(
    $filter: ModelCatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
