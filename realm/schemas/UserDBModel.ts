import {ObjectSchema} from 'realm';

export type UserDbModel = {
  userId: number;
  userName: string;
  userMobile: number;
};

export class UserDbObj implements UserDbModel {
  userId = 0;
  userName = '';
  userMobile = 0;
}

export const UserSchema: ObjectSchema = {
  name: 'User',
  primaryKey: 'noteId',
  properties: {
    userId: 'int',
    userName: 'string',
    userMobile: 'number',
  },
};
