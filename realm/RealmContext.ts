import {createContext, useContext} from 'react';
import Realm from 'realm';

export const RealmContext = createContext<Realm | undefined>(undefined);

export const useRealm = () => {
  return useContext(RealmContext);
};
