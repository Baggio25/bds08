import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { Store } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

export type StoreFilterData = {
  storeId: number | null;
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

  const handleChangeStore = (value: Store) => {
    if (value) {
      setValue('storeId', value.id);
    } else {
      setValue('storeId', 0);
    }
    const obj: StoreFilterData = {
      storeId: getValues('storeId')
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
              onChange={(value) => handleChangeStore(value as Store)}
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
