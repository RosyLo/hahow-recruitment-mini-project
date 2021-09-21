const heroList = (state = {}, action: { type: any }) => {
  switch (action.type) {
    case 'Fetch_Hero_List':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default heroList;
