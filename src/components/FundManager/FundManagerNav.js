/**
 * Created by st on 2017/8/30.
 */
import React, {Component} from 'react';
import {connect} from 'dva';
import styles from './FundManagerNav.css';

class FundManagerNav extends Component {

  render() {

    function onClick(event) {
      const keyword = event.target.value;
      console.log(keyword);
      dispatch({
        type: 'fundManager/saveActiveManagerId',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerInfo',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerAbility',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerFunds',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerFundRank',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerFundReturns',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerFundRateTrend',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerFundRankTrend',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerFundPerformance',
        payload: keyword,
      });
      dispatch({
        type: 'fundManager/fetchManagerPerformance',
        payload: keyword,
      });
    }

    const {allManagers, dispatch} = this.props;
    // console.log(allManagers);
    return (
      <div className="container">
        {allManagers ?
          <div>
            {allManagers.map(manager =>
              <button className={styles.managerNameButton} key={manager.id} value={manager.id} onClick={onClick}>{manager.name}</button>
            )}
          </div> : null}
      </div>
    )
  }
}

FundManagerNav.propTypes = {};

function mapStateToProps(state) {
  return {
    allManagers: state.fundManager.allManagers,
  };
}

export default connect(mapStateToProps)(FundManagerNav);
