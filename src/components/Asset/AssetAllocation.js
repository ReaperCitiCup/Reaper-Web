/**
 * Created by wyj on 2017/9/2.
 */
import React, {Component} from 'react';
import {Steps, Button, Slider, Radio, InputNumber, Checkbox, Modal, Input} from 'antd';
import FreeScrollBar from 'react-free-scrollbar';
import asset from '../../assets/assetAllocation/asset.png';
import strategy from '../../assets/assetAllocation/strategy.png';
import factor from '../../assets/assetAllocation/factor.png';
import staticScale from '../../assets/assetAllocation/staticScale.png';
import meanVariance from '../../assets/assetAllocation/meanVariance.png';
import minVariance from '../../assets/assetAllocation/minVariance.png';
import volatility from '../../assets/assetAllocation/volatility.png';
import maxDispersion from '../../assets/assetAllocation/maxDispersion.png';
import riskAssessment from '../../assets/assetAllocation/riskAssessment.png';
import BLmodel from '../../assets/assetAllocation/BLmodel.png';
import styles from './AssetAllocation.less';
import WeightPicChart from './WeightPieChart';

const Step = Steps.Step;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;

const marks = {
  0: '低',
  50: '中',
  100: '高',
};

const weightOptions = [
  {label: '50% 股票型基金 + 30% 债券型基金 + 20% 混合型基金', value: [50, 30, 20]},
  {label: '35% 股票型基金 + 45% 债券型基金 + 20% 混合型基金', value: [35, 45, 20]},
  {label: '20% 股票型基金 + 60% 债券型基金 + 20% 混合型基金', value: [20, 60, 20]},
];
const categoryStockOptions = [
  {label: '股票多头', value: '11'},
  {label: '市场中性', value: '12'},
];
const categoryFuturesOptions = [
  {label: '期货趋势', value: '21'},
  {label: '期货套利', value: '22'},
  {label: '其他管理期货策略', value: '23'},
];
const categoryOtherOptions = [
  {label: '固定收益产品', value: '1'},
  {label: '宏观策略', value: '2'},
  {label: '混合类产品', value: '3'},
  {label: '其他产品', value: '4'},
  {label: '事件驱动', value: '5'},
  {label: '相对价值', value: '6'},
  {label: '债券策略', value: '7'},
  {label: '其他策略', value: '8'},
];
const factorOptions = [
  {label: 'beta', value: 'beta'},
  {label: '价值', value: 'btop'},
  {label: '盈利能力', value: 'earningsyield'},
  {label: '成长性', value: 'growth'},
  {label: '杠杆率', value: 'leverage'},
  {label: '流动性', value: 'liquidity'},
  {label: '动量', value: 'momentum'},
  {label: '非线性市值', value: 'nisize'},
  {label: '波动率', value: 'residualvolatility'},
  {label: '市值', value: 'size'},
];

class AssetAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,               // 当前步
      earnTarget: 100,          // 收益目标
      riskTarget: 100,          // 风险目标
      implementationPath: '',   // 选择实施路径
      modalVisible: false,
      factorOptionsVal: [],     // 因子间分散选择
      weight: [0, 0, 0],
      weightTag: '',
      recommendWeight: '',      // 推荐权重
      customWeight: '',         // 自定义权重
      noWeight: '',             // 暂不选择权重
      customStockWeight: 40,    // 默认股票型基金权重
      customFundWeight: 40,     // 默认期货型基金权重
      customMixWeight: 20,      // 默认混合型基金权重
      classify: [],             // 类别所有选择
      stockStrategy: [],        // 股票策略选择
      manageFuture: [],         // 管理期货选择
      otherChoice: [],          // 其他选择
    };
  }

  onChangeRouteSelect = (e) => {
    // 实施路径选择
    this.setState({
      implementationPath: e.target.value,
    });
  };
  onChangeRecommendPer = (e) => {
    // 推荐权重选择
    this.setState({
      weight: e.target.value,
      recommendWeight: e.target.value,
      weightTag: e.target.value,
      customWeight: '',
      noWeight: '',
    });
  };
  onChangeCustomWeight = (e) => {
    // 自定义权重选择
    this.setState({
      weight: [this.state.customStockWeight,
        this.state.customFundWeight, this.state.customMixWeight],
      recommendWeight: '',
      customWeight: e.target.value,
      weightTag: e.target.value,
      noWeight: '',
    });
  };
  onChangeNoWeight = (e) => {
    // 暂不选择权重
    this.setState({
      weight: [0, 0, 0],
      recommendWeight: '',
      customWeight: '',
      noWeight: e.target.value,
      weightTag: e.target.value,
    });
  };
  onStockWeightChange = (value) => {
    // 自定义权重，股票型基金权重
    if (value >= 0 && (100 - value - this.state.customFundWeight) >= 0) {
      this.setState({
        customStockWeight: value,
        customMixWeight: 100 - value - this.state.customFundWeight,
        weight: this.state.customWeight === '' ? this.state.weight : [value, this.state.customFundWeight, 100 - value - this.state.customFundWeight],
      });
    }
  };
  onFundWeightChange = (value) => {
    // 自定义权重，期货型基金权重
    if (value >= 0 && (100 - value - this.state.customStockWeight) >= 0) {
      this.setState({
        customFundWeight: value,
        customMixWeight: 100 - value - this.state.customStockWeight,
        weight: this.state.customWeight === '' ? this.state.weight : [this.state.customStockWeight, value, 100 - value - this.state.customStockWeight],
      });
    }
  };
  onMixWeightChange = (value) => {
    // 自定义权重，混合型基金
    if (value >= 0 && (100 - value - this.state.customFundWeight) >= 0) {
      this.setState({
        customMixWeight: value,
        customStockWeight: 100 - value - this.state.customFundWeight,
        weight: this.state.customWeight === '' ? this.state.weight : [100 - value - this.state.customFundWeight, this.state.customFundWeight, value],
      });
    }
  };
  onChangeStockStrategy = (values) => {
    // 类别选择，股票策略
    console.log(values);
    this.setState({
      stockStrategy: values,
      classify: this.state.classify.concat(values),
    });
    console.log(this.state.classify);
  };
  onChangeManageFutures = (values) => {
    // 类别选择，管理期货
    this.setState({
      manageFuture: values,
      classify: this.state.classify.concat(values),
    });
  };
  onChangeOtherChoice = (values) => {
    // 类别选择，其他选择
    this.setState({
      otherChoice: values,
      classify: this.state.classify.concat(values),
    });
  };
  onChangeFactorOption = (values) => {
    // 因子选择
    this.setState({
      factorOptionsVal: values,
    });
  };
  earnChange = (value) => {
    // 收益目标
    console.log(value);
    this.setState({
      earnTarget: value,
    });
  };
  riskChange = (value) => {
    // 风险目标
    this.setState({
      riskTarget: value,
    });
  };
  finishChoice = () => {
    this.setState({
      modalVisible: true,
    });
  };
  handleOK = () => {
    this.setState({
      modalVisible: false,
    });
  };
  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };
  next = () => {
    const current = this.state.current + 1;
    this.setState({current});
  };
  prev = () => {
    const current = this.state.current - 1;
    this.setState({current});
  };

  render() {
    const {current} = this.state;

    const customOption = [{
      label: (
        <span className={styles.custom_option}>
          <InputNumber
            value={this.state.customStockWeight}
            onChange={this.onStockWeightChange}
          /> % 股票型基金 +&nbsp;
          <InputNumber
            value={this.state.customFundWeight}
            onChange={this.onFundWeightChange}
          /> % 债券型基金 +&nbsp;
          <InputNumber
            value={this.state.customMixWeight}
            onChange={this.onMixWeightChange}
          /> % 混合型基金
        </span>
      ),
      value: 'custom',
    }];
    const noWeightOption = [{
      label: '暂不选择权重',
      value: 'noWeight',
    }];

    const stepThreeContent = [(
      <div className={styles.selectWeight}>
        <div className={styles.stepTitle}>3.选择权重</div>
        <div className={styles.contentRetract + ' ' + styles.weight_left}>
          <div className={styles.section}>
            <span className={styles.classifyLabel}>为您推荐</span>
            <RadioGroup
              options={weightOptions}
              onChange={this.onChangeRecommendPer}
              value={this.state.recommendWeight}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.classifyLabel}>自定义权重</span>
            <RadioGroup
              options={customOption}
              onChange={this.onChangeCustomWeight}
              value={this.state.customWeight}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.classifyLabel}>不定义权重</span>
            <RadioGroup
              onChange={this.onChangeNoWeight}
              options={noWeightOption}
              value={this.state.noWeight}
            />
          </div>
        </div>
        <div className={styles.weight_right}>
          <WeightPicChart
            stockWeight={this.state.weight[0]}
            fundWeight={this.state.weight[1]}
            mixWeight={this.state.weight[2]}
            style={{height: 300, float: 'right'}}
          />
        </div>
      </div>
    ), (
      <div className={styles.strategyClassify}>
        <div className={styles.stepTitle}>3.选择类别</div>
        <div className={styles.contentRetract}>
          <div className={styles.section}>
            <span className={styles.classifyLabel}>股票策略</span>
            <CheckboxGroup
              value={this.state.stockStrategy}
              options={categoryStockOptions}
              onChange={this.onChangeStockStrategy}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.classifyLabel}>管理期货</span>
            <CheckboxGroup
              value={this.state.manageFuture}
              options={categoryFuturesOptions}
              onChange={this.onChangeManageFutures}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.classifyLabel}>其他</span>
            <CheckboxGroup
              value={this.state.otherChoice}
              options={categoryOtherOptions}
              onChange={this.onChangeOtherChoice}
            />
          </div>
        </div>
      </div>
    ), (
      <div className={styles.strategyClassify}>
        <div className={styles.stepTitle}>3.选择因子</div>
        <div className={styles.contentRetract}>
          <CheckboxGroup
            value={this.state.factorOptionsVal}
            options={factorOptions}
            onChange={this.onChangeFactorOption}
          />
        </div>
      </div>
    )];

    const steps = [{
      stepNum: '1',
      title: "投资目标",
      content: (
        <div>
          <div className={styles.stepTitle}>1.设置投资目标</div>
          <div>
            <div style={{width: '30%', float: 'left', margin: '0 10%'}}>
              <div>收益目标</div>
              <Slider
                marks={marks}
                defaultValue={100}
                value={this.state.earnTarget}
                step={50}
                tipFormatter={null}
                onChange={this.earnChange}
              />
            </div>
            <div style={{width: '30%', float: 'left', margin: '0 10%'}}>
              <div>风险目标</div>
              <Slider
                marks={marks}
                defaultValue={100}
                value={this.state.riskTarget}
                step={50}
                tipFormatter={null}
                onChange={this.riskChange}
              />
            </div>
          </div>
        </div>
      ),
    }, {
      stepNum: '2',
      title: "实施路径",
      content: (
        <div className={styles.routeSelect}>
          <div className={styles.stepTitle}>2.选择实施路径</div>
          <RadioGroup onChange={this.onChangeRouteSelect} value={this.state.implementationPath}>
            <RadioButton value="asset"><img width={100} role="presentation" src={asset}/>
              <div>资产间分散</div>
            </RadioButton>
            <RadioButton value="strategy"><img width={100} role="presentation" src={strategy}/>
              <div>策略间分散</div>
            </RadioButton>
            <RadioButton value="factor"><img width={100} role="presentation" src={factor}/>
              <div>因子间分散</div>
            </RadioButton>
          </RadioGroup>
        </div>
      ),
    }, {
      stepNum: '3',
      title: "权重 | 类别 | 因子",
      content: this.state.implementationPath === 'asset' ? stepThreeContent[0] : (this.state.implementationPath === 'strategy' ? stepThreeContent[1] : stepThreeContent[2]),
    }, {
      stepNum: '4',
      title: "选择基金",
      content: (
        <div>
          <div className={styles.stepTitle}>4.选择基金</div>
          <div className={styles.contentRetract}>
            <div style={{float: 'left', width: '32%', height: '360px', marginRight: '2%'}}>
              <div className={styles.fundListTitle}><span>股票型基金</span></div>
              <FreeScrollBar
                style={{height: '300px', border: '1px solid #E7E9EC'}}
              >
                <ul style={{padding: 8}}>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                </ul>
              </FreeScrollBar>
            </div>
            <div style={{float: 'left', width: '32%', height: '360px', marginRight: '2%'}}>
              <div className={styles.fundListTitle}><span>债券型基金</span></div>
              <FreeScrollBar
                style={{height: '300px', border: '1px solid #E7E9EC'}}
              >
                <ul style={{padding: 8}}>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                </ul>
              </FreeScrollBar>
            </div>
            <div style={{float: 'left', width: '32%', height: '360px'}}>
              <div className={styles.fundListTitle}><span>混合型基金</span></div>
              <FreeScrollBar
                style={{height: '300px', border: '1px solid #E7E9EC'}}
              >
                <ul style={{padding: 8}}>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                  <li><Checkbox>555</Checkbox></li>
                </ul>
              </FreeScrollBar>
            </div>
          </div>
        </div>
      ),
    }, {
      stepNum: '5',
      title: "分散化方法",
      content: (
        <div className={styles.decentralization}>
          <div className={styles.stepTitle}>5.选择分散化方法</div>
          <RadioGroup>
            <RadioButton value="staticScale"><img width={70} role="presentation" src={staticScale}/>
              <div>静态比例配置</div>
            </RadioButton>
            <RadioButton value="meanVariance"><img width={70} role="presentation" src={meanVariance}/>
              <div>均值方差</div>
            </RadioButton>
            <RadioButton value="minVariance"><img width={70} role="presentation" src={minVariance}/>
              <div>最小方差组合配置</div>
            </RadioButton>
            <RadioButton value="volatility"><img width={70} role="presentation" src={volatility}/>
              <div>波动率倒数</div>
            </RadioButton>
            <RadioButton value="maxDispersion"><img width={70} role="presentation" src={maxDispersion}/>
              <div>最大分散化</div>
            </RadioButton>
            <RadioButton value="riskAssessment"><img width={70} role="presentation" src={riskAssessment}/>
              <div>风险评价</div>
            </RadioButton>
            <RadioButton value="BLmodel"><img width={70} role="presentation" src={BLmodel}/>
              <div>B-L模型</div>
            </RadioButton>
          </RadioGroup>
        </div>
      ),
    }];
    return (
      <div>
        <Steps
          className={styles.steps}
          current={current}>
          {steps.map(item =>
            <Step
              key={item.stepNum}
              title={item.title}
            />)}
        </Steps>
        <div className={styles.steps_content} style={{margin: '20px 0'}}>
          {steps[this.state.current].content}
        </div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button
              style={{float: 'right'}} disabled={this.state.current === 1 && this.state.implementationPath === ''}
              onClick={() => this.next()}
            >下一步</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" style={{float: 'right'}} onClick={() => this.finishChoice()}>创建我的组合</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{marginRight: 8, float: 'right'}} onClick={() => this.prev()}>
              上一步
            </Button>
          }
        </div>
        <Modal
          visible={this.state.modalVisible}
          title="创建组合"
          onOk={this.handleOK}
          onCancel={this.handleCancel}
          footer={[
            <Button onClick={this.handleOK}>保存</Button>,
          ]}
        >
          <Input placeholder="请输入组合名称..."/>
        </Modal>
      </div>
    );
  }
}

export default AssetAllocation;
