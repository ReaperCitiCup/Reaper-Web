export default {
  namespace: 'createCombination',
  state: {
    show: false,
    name: '',
    items: [
      {
        code: '000001',
        name: '华夏成长',
        ratio: 33,
      }
    ]

  },
  reducers: {

    saveShow(state, {payload: show}) {
      return {
        ...state,
        show
      }
    },
    saveRatio(state, {payload: {code, ratio}}) {
      return {
        ...state,
        items: state.items.map(item =>
          item.code === code ?
            {...item, ratio} : item
        )
      }
    },
    addItem(state, {payload: {code, name}}) {
      return {
        ...state,
        items: [
          ...state.items,
          {
            code,
            name,
            ratio: 1,
          }
        ]
      }
    },
    deleteItem(state, {payload: code}) {
      return {
        ...state,
        items: state.items.filter(item => item.code !== code),
      }
    },
  },
  effects: {},
  subscriptions: {},
};
