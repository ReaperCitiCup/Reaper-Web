import React, {Component} from 'react';
import {connect} from 'dva';

import {Input, Button} from 'antd';

import CombinationItem from './CombinationItem';

import up from '../../assets/caretup.png';
import down from '../../assets/caretdown.png';

import styles from './CombinationModal.css';

function CombinationModal({dispatch, className, show, items}) {

  function onClickArrow() {
    dispatch({
      type: "createCombination/saveShow",
      payload: !show,
    })
  }

  function onItemRatioChange(code, ratio) {
    dispatch({
      type: "createCombination/saveRatio",
      payload: {
        code,
        ratio
      },
    })
  }

  function onClickItemDelete(code) {
    dispatch({
      type: "createCombination/deleteItem",
      payload: code,
    })
  }

  return (
    <div className={styles.modal + ' ' + className}>
      <div className={styles.title_wrapper}>
        <h5>创建组合</h5>
        <img
          width={20}
          src={show ? down : up}
          onClick={onClickArrow}
        />
      </div>

      {show ?
        <div>
          <Input className={styles.input}
                 size="large"
                 placeholder="输入组合名称"/>
          <div
            className={styles.item_list}
          >
            {items.map(item =>
              <CombinationItem
                key={item.code}
                item={item}
                max={100}
                onRatioChange={ratio => onItemRatioChange(item.code, ratio)}
                onClickDelete={() => onClickItemDelete(item.code)}
              />
            )}
          </div>
          <Button
            className={styles.button}
            type="primary"
            size="large"
          >保存</Button>
        </div>
        : null}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    show: state.createCombination.show,
    items: state.createCombination.items,
  };
}

export default connect(mapStateToProps)(CombinationModal)
