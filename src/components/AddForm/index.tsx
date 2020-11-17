import { uniqueId, update } from 'lodash';
import React, { FunctionComponent, useState } from 'react';
import { Cat } from '../../data-types';
import Card from '../Card';
import Loader from '../Loader';

import './AddForm.scss';

interface AddFormState {
  catName: string;
  catDescription: string;
  catOwner: string;
  isEditing: boolean;
}

interface AddFormProps {
  onAddCat: (cat: Cat) => void;
  isLoading: boolean;
}

const AddForm: FunctionComponent<AddFormProps> = ({ onAddCat, isLoading }) => {
  const initialState: AddFormState = {
    isEditing: false,
    catName: '',
    catDescription: '',
    catOwner: '',
  };

  const [formState, setFormState] = useState<AddFormState>(initialState);
  const { isEditing, catName, catDescription, catOwner } = formState;
  const updateForm = (obj: any) => {
    setFormState((prevState) => ({ ...prevState, ...obj }));
  };
  const resetForm = () => {
    updateForm(initialState);
  };
  const onSubmit = async () => {
    const currentCatState: Cat = {
      name: catName,
      description: catDescription,
      owner: catOwner,
      isEditable: true,
      id: `${Math.random()
        .toString(36)
        .slice(2, 10)}`,
    };
    await onAddCat(currentCatState);
    await resetForm();
  };

  if (isLoading) {
    return (
      <Card>
        <Loader className='cat-app-add-form__loader' />
      </Card>
    );
  }

  if (isEditing) {
    return (
      <Card className='cat-app-add-form'>
        <div className='cat-app-add-form__container'>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Cat Name</label>
            <input
              type='text'
              data-test='input-cat-name'
              name='catName'
              value={catName}
              placeholder='Cat name..'
              onChange={(e) => updateForm({ catName: e.currentTarget.value })}
            />

            <label>Owner</label>
            <input
              type='text'
              data-test='input-cat-owner'
              name='owner'
              placeholder='Owner name..'
              value={catOwner}
              onChange={(e) => updateForm({ catOwner: e.currentTarget.value })}
            />

            <label>Description</label>
            <textarea
              onChange={(e) =>
                updateForm({ catDescription: e.currentTarget.value })
              }
              value={catDescription}
              data-test='input-cat-description'
              name='subject'
              placeholder='Write something..'
              style={{ height: '200px' }}
            ></textarea>

            <input
              className='submit'
              data-test='button-add-cat-submit'
              type='button'
              value='Submit'
              onClick={onSubmit}
            />
            <input
              className='reset'
              type='button'
              value='Cancel'
              onClick={resetForm}
            />
          </form>
        </div>
      </Card>
    );
  }
  return (
    <Card onClick={() => updateForm({ isEditing: true })}>
      <div className='card__add-new'>
        <div className='plussign'>+</div>Add
      </div>
    </Card>
  );
};

export default AddForm;
