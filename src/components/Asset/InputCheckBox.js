/**
 * Created by Sorumi on 2017/11/20.
 */

import React, {Component} from 'react';
import {Checkbox, InputNumber} from 'antd';


class InputCheckBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onChangeValue = (value) => {
    // console.log(value)
    this.props.onChangeValue(value);
  }

  onChangeCheck = () => {
    let checked = !this.state.checked;
    this.setState({
      checked: checked
    })
    this.props.onChangeCheck(checked);
  }

  render() {
    const {children, className} = this.props;
    const {checked} = this.state;
    return (
        <Checkbox
          className={className}
          onChange={this.onChangeCheck}
          checked={checked}
        > {children}
          {checked ?
            <span>
              : - <InputNumber min={1} max={10} step={0.1} defaultValue={1} onChange={this.onChangeValue}/> %
            </span> : null}
        </Checkbox>
    )
  }
}

export default InputCheckBox;
