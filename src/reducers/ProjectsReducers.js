import { SHOW_PROJECTS, HIDE_PROJECTS } from './../actions/ProjectsActions';

const initialState = {
  visible: false,
  items: [],
};

export default function projectsState(state = initialState, action) {
  switch (action.type) {
    case SHOW_PROJECTS:
      return {
        ...state,
        visible: true,
        items: action.payload,
      }
      
      case HIDE_PROJECTS:
        return {
          ...state,
          visible: false,
          items: [],
        }

    default:
      return state;
  }
}
