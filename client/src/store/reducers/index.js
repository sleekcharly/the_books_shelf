import { combineReducers } from 'redux';
import books from './booksReducer';
import user from './usersReducer';

const rootReducer = combineReducers({
    books,
    user
});

export default rootReducer;