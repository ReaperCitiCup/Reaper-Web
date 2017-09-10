export default {
  namespace: 'backTestModal',
  state: {
    id: null,
    show: false,
    startDate: new Date().toISOString().substring(0, 10),
    endDate: new Date().toISOString().substring(0, 10),
    baseIndex: 'szzz'
  },
  reducers: {
    saveShowAndId(state, {payload: {id, show}}) {
      return {
        ...state,
        id,
        show
      }
    },
    saveDate(state, {payload: {startDate, endDate}}) {
      return {
        ...state,
        startDate,
        endDate,
      }
    },
    saveBaseIndex(state, {payload: baseIndex}) {
      return {
        ...state,
        baseIndex
      }
    },
  },
  effects: {},
  subscriptions: {},
};
