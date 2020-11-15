import { API, graphqlOperation } from 'aws-amplify';
import {orderBy } from 'lodash';
import { DeleteCatInput } from '../util/constants/API';
import axios from 'axios';
import { Cat, CatReadOnly } from '../data-types';
import { createCat, deleteCat } from '../graphql/mutations';
import { listCats } from '../graphql/queries';

export const fetchCatList = async (): Promise<CatReadOnly[] | undefined> => {
  let readOnlyCatList = undefined;
  try {
    await axios.get('https://api.thecatapi.com/v1/breeds')
      .then(async response => {
        readOnlyCatList = response.data;
      });

    // Fetching the list of saved cats from DynamoDb
    const editbleCatList: any = await API.graphql(graphqlOperation(listCats));
    const editableCatlist = orderBy(editbleCatList?.data?.listCats?.items, ['updatedAt'], ['desc']) || [];
    const catList = editableCatlist.concat(readOnlyCatList)

    return catList;
  } catch (e) {
    return undefined;
  }
}

export const addCatToList = async (cat: Cat): Promise<Cat | boolean> => {
  try {
    const addedCat: any = await API.graphql(graphqlOperation(createCat, {input: cat}));
    return addedCat && addedCat.data ? addedCat.data.createCat : false;
  }catch(error) {
    
  }
  return false;
}

export const deleteCatFromList = async (id: DeleteCatInput): Promise<boolean> => {
  try {
    await API.graphql(graphqlOperation(deleteCat, {input: id}));
    return true;
  }catch (e){
    return false;
  }
}