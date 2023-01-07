import {UserDbModel} from '../schemas/UserDBModel';

export class UserService {
  //insert or update
  static insertOrReplace(data: UserDbModel, realm: Realm) {
    console.log('hello realm >>>>>>>>>>>', data);
    realm.write(() => {
      realm.create('User', data, Realm.UpdateMode.All);
    });
  }
  //get all
  static getAll(realm: Realm) {
    return realm.objects('User');
  }
  //get object by name
  static getObjByName(name: string, realm: Realm) {
    return realm.objects<UserDbModel>('User').filtered(' userName ' + name);
  }
  //get object by primary id
  static getObjByID(realm: Realm, userId: any) {
    return realm.objectForPrimaryKey<UserDbModel>('User', parseInt(userId));
  }
  //delete all
  static deleteAll(realm: Realm) {
    realm.write(() => {
      realm.delete(realm.objects<UserDbModel>('User'));
    });
  }

  //delete obj by id
  static deleteById(realm: Realm, userId: string) {
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey<UserDbModel>('User', userId));
    });
  }
}
