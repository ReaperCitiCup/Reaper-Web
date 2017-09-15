export default {
  namespace: 'backTestModal',
  state: {
    id: null,
    show: false,
    startDate: new Date(2016, 6, 1).toISOString().substring(0, 10),
    endDate: new Date(2016, 8, 1).toISOString().substring(0, 10),
    baseIndex: 'szzs'
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
