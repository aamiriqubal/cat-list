import { AppState } from "../data-types";

const initialState: AppState = {
  searchBy: '',
  sortBy: '',
  cats: [],
  isLoading: false,
}

export default initialState;