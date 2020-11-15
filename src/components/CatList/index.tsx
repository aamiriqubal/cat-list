import React, { useEffect, useState, FunctionComponent } from 'react';
import { orderBy, toLower } from 'lodash';
import { fetchCatList, addCatToList, deleteCatFromList } from '../../services';
import './CatList.scss';
import Loader from '../Loader';
import AddForm from '../AddForm';
import Notification, {
  NotificationType,
  NotificationProp,
} from '../Notification';
import Card, { Cards } from '../Card';
import initialState from '../../store';
import { AppState, Cat, CatReadOnly } from '../../data-types';

let storedPetList: CatReadOnly[] = [];
const SearchableFields = ['Select', 'Name', 'Affection Level'];
const OrderbyFields = [
  'Select',
  'Name : asc',
  'Name : desc',
  'Affection_Level : asc',
  'Affection_Level : desc',
];

const CatList: FunctionComponent = () => {
  // this value will act as the dictionary for all the cat's fetched.
  // Initialise state
  const [appState, setAppState] = useState<AppState>(initialState);
  const [notification, setNotification] = useState({
    status: false,
    text: '',
    type: undefined,
  });
  const { isLoading, cats, searchBy, sortBy } = appState;

  const showNotification = async (notifyWith: NotificationProp) => {
    // This is small hack done here to make the notification thing unmount and then mount.
    await setNotification({ status: false, text: '', type: undefined });
    await setNotification({
      status: true,
      text: notifyWith?.text,
      type: notifyWith?.type,
    });
  };

  // handle state management
  const updateState = (newState: any) => {
    setAppState({
      ...appState,
      ...newState,
    });
  };

  const onSearchCat = (e: React.FormEvent<HTMLInputElement>) => {
    const searchedWithValue = e.currentTarget.value;
    if (searchBy && searchedWithValue) {
      let filteredCats: CatReadOnly[] = cats;
      switch (searchBy) {
        case 'Name':
          filteredCats = storedPetList.filter((cat: CatReadOnly) =>
            toLower(cat.name).includes(toLower(searchedWithValue))
          );
          break;
        case 'Affection Level':
          filteredCats = storedPetList.filter((cat: CatReadOnly) =>
            toLower(`${cat.affection_level}`).includes(
              toLower(searchedWithValue)
            )
          );
          break;
        default:
          return true;
      }
      updateState({ cats: filteredCats });
    }
  };

  const fetchCats = async () => {
    await updateState({ isLoading: true });
    const catsList = await fetchCatList();
    const data = catsList ? catsList : [];
    // to keep the data in global state locally
    storedPetList = data;
    await updateState({ cats: data, isLoading: false });
  };

  const onAddCat = async (cat: Cat) => {
    const addCat = await addCatToList(cat);
    await updateState({ isLoading: true });
    if (addCat) {
      await showNotification({
        text: 'Added Successfully!',
        type: NotificationType.SUCCESS,
      });
      await fetchCats();
    } else {
      await showNotification({
        text:
          'Sorry, there was a problem while saving your data, please try again later.',
        type: NotificationType.ERROR,
      });
      await updateState({ isLoading: false });
    }
  };

  const onDeleteCat = async (cat: Cat) => {
    const deleted = await deleteCatFromList({ id: cat.id });
    if (deleted) {
      await showNotification({
        text: 'Deleted Successfully!',
        type: NotificationType.SUCCESS,
      });
      await fetchCats();
    } else {
      await showNotification({
        text: 'There was some problem while deletion, please try again later.',
        type: NotificationType.ERROR,
      });
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const getOptions = (fields: string[]) =>
    fields.map((val) => <option key={val}>{val}</option>);

  const sortByOrder = (e: React.FormEvent<HTMLSelectElement>) => {
    const orderByValue = e.currentTarget.value;
    if (orderByValue === 'Select') return;
    const [orderByField, sorting] = orderByValue.split(':');
    const sortOrder = sorting.trim() === 'asc' ? 'asc' : 'desc';
    const sortedCats = orderBy(
      cats,
      [toLower(orderByField.trim())],
      [sortOrder]
    );
    updateState({ cats: sortedCats, sortBy: orderByValue });
  };

  return (
    <div className='cat-app-cat-list'>
      {notification.status && <Notification {...notification} />}
      <h1 className='cat-app-cat-list--header'> Cat list </h1>
      <p className='cat-app-cat-list--paragraph'>
        This application is all about viewing cats database. The fronend is
        built using ReactJs, backend being all handled by the AWS Amplify Auth
        and APIs. The API uses DynamoDB to save the data and GraphQl being the
        medium to communicate.
      </p>
      <div className='cat-app-cat-list__search-container'>
        <div>
          <span>Search by:</span>
          <select
            className='input select-field'
            onChange={(e) => updateState({ searchBy: e.target.value })}
            value={searchBy}
          >
            {getOptions(SearchableFields)}
          </select>
          <input
            type='text'
            className='input input-field'
            onChange={onSearchCat}
          />
        </div>
        <div>
          Sort By:
          <select
            className='input select-field'
            onChange={sortByOrder}
            value={sortBy}
          >
            {getOptions(OrderbyFields)}
          </select>
        </div>
      </div>

      {isLoading && !cats.length ? (
        <Loader />
      ) : cats.length ? (
        <Cards>
          <AddForm isLoading={isLoading} onAddCat={onAddCat} />
          {cats.map((cat: CatReadOnly) => (
            <Card key={cat.id}>
              <div className='card__image' id='card-1'>
                <img src={'http://placekitten.com/g/300/300'} alt='' />
              </div>
              <h2 className='card__actions'>{cat.name}</h2>
              <div className='card__description'>
                {cat && (
                  <span className='card__description--like'>
                    Affection Level : {cat.affection_level | 1}
                  </span>
                )}
                {cat && cat.owner && (
                  <span className='card__description--like'>
                    Owner : {cat.owner}
                  </span>
                )}
                <span className='card__description--text'>
                  <p>{cat.description}</p>
                </span>
                {cat?.isEditable && (
                  <span>
                    <input
                      className='delete'
                      type='button'
                      value='Delete'
                      onClick={() => onDeleteCat(cat)}
                    />
                  </span>
                )}
              </div>
            </Card>
          ))}
        </Cards>
      ) : (
        <div className='cat-app-cat-list'>
          Ah! o! <div>No cats found.</div>
        </div>
      )}
    </div>
  );
};

export default CatList;
