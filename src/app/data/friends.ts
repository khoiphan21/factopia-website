import { FriendList } from '../shared/friendList';

import { ALL_USERS } from './allUsers';

export const FRIENDS: FriendList[] = [
    {
        friend: ALL_USERS[0],
        hasMessage: true
    },
    {
        friend: ALL_USERS[1],
        hasMessage: false
    },
    {
        friend: ALL_USERS[2],
        hasMessage: false
    },
    {
        friend: ALL_USERS[3],
        hasMessage: true
    }
]
