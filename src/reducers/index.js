import { combineReducers } from 'redux';

import projectsState from './ProjectsReducers';

const state = combineReducers({
  projects: projectsState,
});

export default state;
