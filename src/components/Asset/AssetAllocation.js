/**
 * Created by wyj on 2017/9/2.
 */
import React, { Component } from 'react';
import { Steps, Button, message, Slider, Radio, InputNumber, Checkbox } from 'antd';
import asset from '../../assets/assetAllocation/asset.png';
import strategy from '../../assets/assetAllocation/strategy.png';
import factor from '../../assets/assetAllocation/factor.png';
import pie from '../../assets/assetAllocation/pie.png';
import meanVariance from '../../assets/assetAllocation/meanVariance.png';
import minVariance from '../../assets/assetAllocation/minVariance.png';
import volatility from '../../assets/assetAllocation/volatility.png';
import maxDispersion from '../../assets/assetAllocation/maxDispersion.png';
import riskAssessment from '../../assets/assetAllocation/riskAssessment.png';
import BLmodel from '../../assets/assetAllocation/BLmodel.png';

const Step = Steps.Step;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;

// function formatter(value) {
//   if (value === 0) {
//     return '低';
//   } else if (value === 50) {
//     return '中';
//   } else if (value === 100) {
//     return '高';
//   }
// }

const marks = {
  0: '低',
  50: '中',
  100: '高',
};

const weightOptions = [
  { label: '60% 股票型基金 + 40% 债券型基金', value: '46' },
  { label: '45% 股票型基金 + 65% 债券型基金', value: '45' },
  { label: '30% 股票型基金 + 70% 债券型基金', value: '37' },
];
const categoryStockOptions = [
  { label: '股票多头', value: '11' },
  { label: '市场中性', value: '12' },
];
const categoryFuturesOptions = [
  { label: '期货趋势', value: '21' },
  { label: '期货套利', value: '22' },
  { label: '其他管理期货策略', value: '23' },
];
const categoryOtherOptions = [
  { label: '固定收益产品', value: '1' },
  { label: '宏观策略', value: '2' },
  { label: '混合类产品', value: '3' },
  { label: '其他产品', value: '4' },
  { label: '事件驱动', value: '5' },
  { label: '相对价值', value: '6' },
  { label: '债券策略', value: '7' },
  { label: '其他策略', value: '8' },
];

class AssetAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      earnTarget: 100,
      riskTarget: 100,
      percent: '',
      implementationPath: 'pro0perty',
      classify: [],
    };
  }

  onChangeRecommendPer = (value) => {
    this.setState({
      percent: value,
    });
  };
  onChangeClassify = (value) => {
    this.setState({
      classify: [...this.state.classify, value],
    });
  };
  earnChange = (value) => {
    this.setState({
      earnTarget: value,
    });
  };
  riskChange = (value) => {
    this.setState({
      riskTarget: value,
    });
  };
  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  };
  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    const stepThreeContent = [(
      <div>
        <div>3.选择权重</div>
        <div>
          <div>为您推荐</div>
          <RadioGroup
            options={weightOptions}
            onChange={this.onChangeRecommendPer}
            value={this.state.percent}
          />
          <div>自定义权重</div>
          <Radio><InputNumber />% 股票型基金 + <InputNumber />% 债券型基金</Radio>
          <div>不定义权重</div>
          <Radio>暂不选择权重</Radio>
        </div>
      </div>
    ), (
      <div>
        <div>3.选择类别</div>
        <div>
          <div>股票策略</div>
          <CheckboxGroup
            options={categoryStockOptions}
            onChange={this.onChangeClassify}
          />
          <div>管理期货</div>
          <CheckboxGroup
            options={categoryFuturesOptions}
            onChange={this.onChangeClassify}
          />
          <div>其他</div>
          <CheckboxGroup
            options={categoryOtherOptions}
            onChange={this.onChangeClassify}
          />
        </div>
      </div>
    )];

    const steps = [{
      stepNum: '1',
      content: (
        <div>
          <div>1.设置投资目标</div>
          <div>
            <div>收益目标</div>
            <Slider
              marks={marks}
              defaultValue={100}
              step={50}
              tipFormatter={null}
              onAfterChange={this.earnChange}
            />
          </div>
          <div>
            <div>风险目标</div>
            <Slider
              marks={marks}
              defaultValue={100}
              step={50}
              tipFormatter={null}
              onAfterChange={this.riskChange}
            />
          </div>
        </div>
      ),
    }, {
      stepNum: '2',
      content: (
        <div>
          <div>2.选择实施路径</div>
          <RadioGroup>
            <RadioButton><img width={40} role="presentation" src={asset} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={strategy} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={factor} /></RadioButton>
          </RadioGroup>
        </div>
      ),
    }, {
      stepNum: '3',
      content: this.state.implementationPath === 'property' ? stepThreeContent[0] : stepThreeContent[1],
    }, {
      stepNum: '4',
      content: (
        <div>
          <div>4.选择基金</div>
        </div>
      ),
    }, {
      stepNum: '5',
      content: (
        <div>
          <div>5.选择分散化方法</div>
          <RadioGroup>
            <RadioButton><img width={40} role="presentation" src={pie} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={meanVariance} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={minVariance} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={volatility} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={maxDispersion} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={riskAssessment} /></RadioButton>
            <RadioButton><img width={40} role="presentation" src={BLmodel} /></RadioButton>
          </RadioGroup>
        </div>
      ),
    }];
    return (
      <div>
        <Steps current={current}>
          {steps.map(item =>
            <Step key={item.stepNum} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>
      </div>
    );
  }
}

export default AssetAllocation;
