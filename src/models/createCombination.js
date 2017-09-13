export default {
  namespace: 'createCombination',
  state: {
    show: false,
    name: '',
    items: []

  },
  reducers: {

    saveShow(state, {payload: show}) {
      return {
        ...state,
        show
      }
    },
    saveRatio(state, {payload: {code, ratio}}) {
      if (state.items.length === 1) {
        return state;
      } else {
        let max = 100 - state.items.length + 1;
        let min = 1;

        ratio = ratio > max ? max : ratio;
        ratio = ratio < min ? min : ratio;

        let d = ratio - state.items.filter(item => item.code === code)[0].ratio;

        let items = [...state.items];
        let index;
        items.forEach((item, i) => {
          if (item.code === code)
            index = i;
        });

        let length = items.length;

        // console.log(items);

        let i = 0;
        if (d > 0) {
          while (d !== 0) {
            let item = items[i];
            if (i !== index && item.ratio > 1) {
              item.ratio--;
              d--;
            }
            i = (i + 1) % length
          }
        } else {
          while (d !== 0) {
            let item = items[i];
            if (i !== index) {
              item.ratio++;
              d++;
            }
            i = (i + 1) % length
          }
        }

        return {
          ...state,
          items: [
            ...items.map(item => item.code === code ? {...item, ratio} : item),
          ]
        }
      }


    },
    addItem(state, {payload: {code, name}}) {

      if (state.items.length === 0) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              code,
              name,
              ratio: 100,
            }
          ]
        }
      } else {
        let max = state.items.reduce((prev, current) => (prev.ratio > current.ratio) ? prev : current)
        return {
          ...state,
          items: [
            ...state.items.map(item => item.code === max.code ? {
              ...item,
              ratio: item.ratio - 1,
            } : item),
            {
              code,
              name,
              ratio: 1,
            }
          ]
        }

      }
    },
    deleteItem(state, {payload: code}) {

      if (state.items.length === 1) {
        return {
          ...state,
          items: []
        };
      } else {
        let d = state.items.filter(item => item.code === code)[0].ratio;

        let items = [...state.items.filter(item => item.code !== code)];

        let length = items.length;

        // console.log(items);

        let i = 0;
        while (d !== 0) {
          let item = items[i];
          item.ratio++;
          d--;

          i = (i + 1) % length
        }

        return {
          ...state,
          items,
        }
      }
    },
  }
  ,
  effects: {}
  ,
  subscriptions: {}
  ,
}
;
