import { createSelector } from 'reselect'
const userAuthSelector = state => state.userAuth

export const isAuthenticated = createSelector(
  userAuthSelector,
  (user) => user !== null && user.userAuth !== null
)
