import React, { useCallback, useEffect } from 'react';

import './styles.css';

import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { Store } from '../../types/store';
import { useState } from 'react';
import { makeRequest } from '../../utils/request';
import { AxiosRequestConfig } from 'axios';

export type StoreFilterData = {
  store: Store | null;
};

type Props = {
  onSubmitFilter: (data: StoreFilterData) => void;
};

const Filter = ({ onSubmitFilter }: Props) => {
  const [selectStores, setSelectStores] = useState<Store[]>([]);
  const { handleSubmit, setValue, getValues } = useForm<StoreFilterData>();

  const onSubmit = (formData: StoreFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Store) => {
    setValue('store', value);
    const obj: StoreFilterData = {
      store: getValues('store')
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    makeRequest
      .get<Store[]>('/stores')
      .then((response) => {
        setSelectStores(response.data);
      })
      .catch(() => {
        console.error('Error to fetch store');
      });
  }, []);

  return (
    <>
      <div className="filter-container base-card">
        <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
          <div className="filter-store-container">
            <Select
              options={selectStores}
              classNamePrefix="filter-select-store"
              isClearable
              placeholder="Loja"
              onChange={(value) => handleChangeGenre(value as Store)}
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;
