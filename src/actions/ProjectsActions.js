export const SHOW_PROJECTS = '@PROJECTS//SHOW_PROJECTS';
export const HIDE_PROJECTS = '@PROJECTS//HIDE_PROJECTS';

export const showProjects = (projects) => ({
  type: SHOW_PROJECTS,
  payload: projects,
});

export const hideProjects = () => ({
  type: HIDE_PROJECTS,
});
