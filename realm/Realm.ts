import Realm from 'realm';
import {UserSchema} from './schemas/UserDBModel';

export const initRealm = async () => {
  const schemaVersion = 1;
  const realm = await Realm.open({
    schemaVersion,
    path: 'default.realm',
    schema: [UserSchema],
  });
  return realm;
};
