/**
 * Created by wyj on 2017/9/2.
 */
import React, {Component} from 'react';
import {Steps, Button, Slider, Radio, InputNumber, Checkbox, Modal, Input, message} from 'antd';
import FreeScrollBar from 'react-free-scrollbar';
import {connect} from 'dva';
import asset from '../../assets/assetAllocation/asset.png';
import factor from '../../assets/assetAllocation/factor.png';
import barra from '../../assets/assetAllocation/barra.png';
import net from '../../assets/assetAllocation/net.png';
import staticScale from '../../assets/assetAllocation/staticScale.png';
import meanVariance from '../../assets/assetAllocation/meanVariance.png';
import minVariance from '../../assets/assetAllocation/minVariance.png';
import volatility from '../../assets/assetAllocation/volatility.png';
import maxDispersion from '../../assets/assetAllocation/maxDispersion.png';
import riskAssessment from '../../assets/assetAllocation/riskAssessment.png';
import BLmodel from '../../assets/assetAllocation/BLmodel.png';
import styles from './AssetAllocation.less';
import WeightPicChart from './WeightPieChart';
import InputCheckBox from'./InputCheckBox';

const Step = Steps.Step;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;

const marks = {
  0: '低风险低收益',
  110: '高风险高收益',
  10: '1',
  20: '2',
  30: '3',
  40: '4',
  50: '5',
  60: '6',
  70: '7',
  80: '8',
  90: '9',
  100: '10',
};

const weightOptions = [
  {label: '50% 股票型基金 + 30% 债券型基金 + 20% 混合型基金', value: [50, 30, 20]},
  {label: '35% 股票型基金 + 45% 债券型基金 + 20% 混合型基金', value: [35, 45, 20]},
  {label: '20% 股票型基金 + 60% 债券型基金 + 20% 混合型基金', value: [20, 60, 20]},
];
const factorOptions = [
  {label: 'beta', value: 'beta'},
  {label: '价值', value: 'btop'},
  {label: '盈利能力', value: 'profit'},
  {label: '成长性', value: 'growth'},
  {label: '杠杆率', value: 'leverage'},
  {label: '流动性', value: 'liquidity'},
  {label: '动量', value: 'momentum'},
  {label: '非线性市值', value: 'nlsize'},
  {label: '波动率', value: 'volatility'},
  {label: '市值', value: 'size'},
];
const barraFactorOptions = [
  {label: 'beta', value: 'beta'},
  {label: '价值', value: 'btop'},
  {label: '盈利能力', value: 'earningsyield'},
  {label: '成长性', value: 'growth'},
  {label: '杠杆率', value: 'leverage'},
  {label: '流动性', value: 'liquidity'},
  {label: '动量', value: 'momentum'},
  {label: '非线性市值', value: 'nlsize'},
  {label: '波动率', value: 'residualvolatility'},
  {label: '市值', value: 'size'},
  {label: '机械', value: 'jx'},
  {label: '银行', value: 'yh'},
  {label: '房地产', value: 'fdc'},
  {label: '医药', value: 'yy'},
  {label: '餐饮旅游', value: 'cyly'},
  {label: '商贸零售', value: 'smls'},
  {label: '建材', value: 'jc'},
  {label: '家电', value: 'jd'},
  {label: '纺织服装', value: 'fzfz'},
  {label: '食品饮料', value: 'spyl'},
  {label: '电子元器件', value: 'dzyqj'},
  {label: '交通运输', value: 'jtys'},
  {label: '汽车', value: 'qc'},
  {label: '轻工制造', value: 'qgzz'},
  {label: '电力及公用事业', value: 'dljgysy'},
  {label: '综合', value: 'zh'},
  {label: '通信', value: 'tx'},
  {label: '石油石化', value: 'sysh'},
  {label: '有色金属', value: 'ysjs'},
  {label: '农林牧渔', value: 'nlmy'},
  {label: '建筑', value: 'jz'},
  {label: '计算机', value: 'jsj'},
  {label: '基础化工', value: 'jchg'},
  {label: '煤炭', value: 'mt'},
  {label: '电力设备', value: 'dlsb'},
  {label: '钢铁', value: 'gt'},
  {label: '国防军工', value: 'gfjg'},
  {label: '非银行金融', value: 'fyhjr'},
  {label: '传媒', value: 'cm'},
];

class AssetAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,               // 当前步
      profitRiskTarget: 5,       // 收益风险目标
      implementationPath: null,   // 选择实施路径
      modalVisible: false,
      averageVisible: false,
      factorOptionsVal: [],     // 因子间分散选择 风格因子
      barraFactorOptionsVal: [],
      weight: [0, 0, 0],
      weightTag: null,
      recommendWeight: null,      // 推荐权重
      customWeight: null,         // 自定义权重
      customStockWeight: 40,    // 默认股票型基金权重
      customFundWeight: 40,     // 默认期货型基金权重
      customMixWeight: 20,      // 默认混合型基金权重
      decentralizedApproach: null, // 分散化方法
      combinationName: null,
      profitRate: 0.05
    };
  }

  onChangeRouteSelect = (e) => {
    // 实施路径选择
    this.setState({
      implementationPath: parseInt(e.target.value),
    });
    if (this.state.implementationPath === 1) {
      this.setState({
        factorOptionsVal: [],
        decentralizedApproach: null,
      });
    } else if (this.state.implementationPath === 2) {
      this.setState({
        weight: [0, 0, 0],
        weightTag: null,
        recommendWeight: null,
        customWeight: null,
        customStockWeight: 40,
        customFundWeight: 40,
        customMixWeight: 20,
        decentralizedApproach: null,
      });
    }
  };
  onChangeRecommendPer = (e) => {
    // 推荐权重选择
    this.setState({
      weight: e.target.value,
      recommendWeight: e.target.value,
      weightTag: e.target.value,
      customWeight: null,
    });
  };
  onChangeCustomWeight = (e) => {
    // 自定义权重选择
    this.setState({
      weight: [this.state.customStockWeight,
        this.state.customFundWeight, this.state.customMixWeight],
      recommendWeight: null,
      customWeight: e.target.value,
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
  onChangeFactorOption = (values) => {
    // 风格因子选择
    this.setState({
      factorOptionsVal: values,
    });
  };
  onChangeBarraCheck = (name, checked) => {
    let newVal;
    if (checked) {
      newVal = [
        ...this.state.barraFactorOptionsVal,
        {
          name: name,
          value: 1
        }
      ]

    } else {
      newVal = this.state.barraFactorOptionsVal.filter(f => f.name !== name)
    }
    console.log(newVal)
    this.setState({
      barraFactorOptionsVal: newVal
    });
  };
  onChangeBarraValue = (name, value) => {
    let array = this.state.barraFactorOptionsVal.filter(f => f.name === name)
    if (array.length === 1) {
      let newVal = [
        ...this.state.barraFactorOptionsVal.filter(f => f.name !== name),
        {
          name: name,
          value: value
        }
      ]
      console.log(newVal)
      this.setState({
        barraFactorOptionsVal: newVal
      });
    }

  }
  earnRiskChange = (value) => {
    // 收益目标
    console.log(value);
    this.setState({
      profitRiskTarget: value / 10,
    });
  };
  onChangeStockSelect = (value) => {
    this.props.dispatch({
      type: 'asset/saveFundToFundList',
      payload: {
        name: 'stock',
        value,
      }
    })
  };
  onChangeBondSelect = (value) => {
    this.props.dispatch({
      type: 'asset/saveFundToFundList',
      payload: {
        name: 'bond',
        value,
      }
    })
  };
  onChangeHybridSelect = (value) => {
    this.props.dispatch({
      type: 'asset/saveFundToFundList',
      payload: {
        name: 'hybrid',
        value,
      }
    })
  };
  onChangeDecentralizedApproach = (e) => {
    this.setState({
      decentralizedApproach: e.target.value,
    });

    // console.log(e.target.value)

    if (e.target.value === 2) {
      this.setState({
        averageVisible: true,
      })
    }
  };

  onClickMethod2 = () => {
    this.setState({
      averageVisible: true,
    })
  }

  finishChoice = () => {
    this.setState({
      modalVisible: true,
    });
  };
  handleOK = () => {
    this.setState({
      modalVisible: false,
    });
    if (this.state.implementationPath === 1) {
      this.props.dispatch({
        type: 'asset/createCombination',
        payload: {
          profitRiskTarget: this.state.profitRiskTarget,
          path: this.state.implementationPath,
          weight: {
            stock: this.state.weight[0],
            bond: this.state.weight[1],
            hybrid: this.state.weight[2],
          },
          name: this.state.combinationName,
          method: this.state.decentralizedApproach,
          profitRate: this.state.profitRate
        },
        onSuccess: (m) => message.success(m),
        onError: (m) => message.error(m)
      })
    } else if (this.state.implementationPath === 2) {
      this.props.dispatch({
        type: 'asset/createCombination',
        payload: {
          profitRiskTarget: this.state.profitRiskTarget,
          path: this.state.implementationPath,
          factor: this.state.factorOptionsVal,
          name: this.state.combinationName,
          method: this.state.decentralizedApproach,
          profitRate: this.state.profitRate
        }
      })
    }
  };

  onChangeCombinationName = (e) => {
    // console.log(e.target.value);
    this.setState({
      combinationName: e.target.value,
    });
  };
  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };
  onChangeProfitRate = (value) => {
    this.setState({
      profitRate: value,
    });
  }
  handleAverageOK = () => {
    this.setState({
      averageVisible: false,
    });
  };
  handleAverageCancel = () => {
    this.setState({
      averageVisible: false,
    });
  };
  next = () => {
    if (this.state.current === 2) {
      if (this.state.implementationPath === 1) {
        this.props.dispatch({
          type: 'asset/fetchAssetChoice',
          payload: {
            profitRiskTarget: this.state.profitRiskTarget,
            path: this.state.implementationPath,
            weight: {
              stock: this.state.weight[0],
              bond: this.state.weight[1],
              hybrid: this.state.weight[2],
            }
          },
        })
      } else if (this.state.implementationPath === 2) {
        this.props.dispatch({
          type: 'asset/fetchFactorChoice',
          payload: {
            profitRiskTarget: this.state.profitRiskTarget,
            path: this.state.implementationPath,
            factor: this.state.factorOptionsVal,
          }
        })
      }
    }
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
        <div className={styles.stepTitle}>3.选择因子</div>
        <div className={styles.contentRetract}>
          <CheckboxGroup
            value={this.state.factorOptionsVal}
            options={factorOptions}
            onChange={this.onChangeFactorOption}
          />
        </div>
      </div>
    ), (
      <div className={styles.strategyClassify}>
        <div className={styles.stepTitle}>3.选择因子</div>
        <div className={styles.section}>

          {barraFactorOptions.map(factor =>
            <InputCheckBox
              className={styles.input_checkbox}
              key={factor.value}
              onChangeCheck={(checked) => this.onChangeBarraCheck(factor.value, checked)}
              onChangeValue={(value) => this.onChangeBarraValue(factor.value, value)}
            >{factor.label}</InputCheckBox>
          )}
        </div>
      </div>
    )];

    const {assetChoiceList, factorChoiceList, fundList} = this.props;
    const stepFourContent = [(
      <div>
        <div className={styles.stepTitle}>4.选择基金</div>

        {assetChoiceList.length > 0 && fundList.filter(v => v.category === 'stock').length > 0 ?
          <div className={styles.contentRetract}>
            <div className={styles.fund_list}>
              <div className={styles.fundListTitle}><span>股票型基金</span></div>
              <div className={styles.scroll_wrapper}>
                {/*<FreeScrollBar>*/}
                <div>
                  <CheckboxGroup
                    options={assetChoiceList.filter(v => v.name === 'stock')[0].funds
                      .map(fund => {
                        return {
                          label: fund.name,
                          value: fund.code
                        }
                      })}
                    value={fundList.filter(v => v.category === 'stock')[0].codes}
                    onChange={this.onChangeStockSelect}
                  />
                </div>
                {/*</FreeScrollBar>*/}
              </div>
            </div>
            <div className={styles.fund_list}>
              <div className={styles.fundListTitle}><span>债券型基金</span></div>
              <div className={styles.scroll_wrapper}>
                {/*<FreeScrollBar>*/}
                <div>
                  <CheckboxGroup
                    options={assetChoiceList.filter(v => v.name === 'bond')[0].funds
                      .map(fund => {
                        return {
                          label: fund.name,
                          value: fund.code
                        }
                      })}
                    value={fundList.filter(v => v.category === 'bond')[0].codes}
                    onChange={this.onChangeBondSelect}
                  />
                </div>
                {/*</FreeScrollBar>*/}
              </div>
            </div>
            <div className={styles.fund_list}>
              <div className={styles.fundListTitle}><span>混合型基金</span></div>
              <div className={styles.scroll_wrapper}>
                {/*<FreeScrollBar>*/}
                <div>
                  <CheckboxGroup
                    options={assetChoiceList.filter(v => v.name === 'hybrid')[0].funds
                      .map(fund => {
                        return {
                          label: fund.name,
                          value: fund.code
                        }
                      })}
                    value={fundList.filter(v => v.category === 'hybrid')[0].codes}
                    onChange={this.onChangeHybridSelect}
                  />
                </div>
                {/*</FreeScrollBar>*/}
              </div>
            </div>
            <div>
              * 以上基金是根据您的偏好为您筛选出各类中综合表现优秀的基金。
            </div>
          </div>
          : null}
      </div>
    ), (
      <div>
        <div className={styles.stepTitle}>4.选择基金</div>
        <div className={styles.contentRetract}>
          {this.props.factorChoiceList.map((v) => {
            return (
              <div className={styles.fund_list} key={v.name}>
                <div className={styles.fundListTitle}>
                  <span>{factorOptions.filter(f => f.value === v.name)[0].label}</span></div>

                <div className={styles.scroll_wrapper_small}>
                  {/*<FreeScrollBar>*/}
                  <ul>
                    {v.funds.map(x => {
                      return (
                        <li
                          className={styles.fund_item}
                          key={x.code}>{x.name}</li>
                      )
                    })}
                  </ul>
                  {/*</FreeScrollBar>*/}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          * 以上基金是根据您的偏好为您筛选出各类中综合表现优秀的基金。
        </div>
      </div>
    )];

    const steps = [{
      stepNum: '1',
      title: "投资目标",
      content: (
        <div className={styles.earnRiskTargetStyle}>
          <div className={styles.stepTitle}>1.设置投资目标</div>
          <div>
            <div style={{width: '50%', margin: '0 auto'}}>
              <div>风险收益目标</div>
              <Slider
                marks={marks}
                value={this.state.profitRiskTarget * 10}
                step={10}
                min={10}
                max={100}
                tipFormatter={null}
                onChange={this.earnRiskChange}
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
            <RadioButton value={1}>
              <img width={100} role="presentation" src={asset}/>
              <div>资产间分散</div>
            </RadioButton>
            <RadioButton value={2}>
              <img width={100} role="presentation" src={factor}/>
              <div>因子间分散</div>
            </RadioButton>
            <RadioButton value={3}>
              <img width={100} role="presentation" src={barra}/>
              <div>自定义Barra因子配置</div>
            </RadioButton>
            <RadioButton value={4}>
              <img width={100} role="presentation" src={net}/>
              <div>社会网络中心度配置</div>
            </RadioButton>
          </RadioGroup>
        </div>
      ),
    }, {
      stepNum: '3',
      title: "权重 | 因子",
      content: stepThreeContent[this.state.implementationPath - 1],
    }, {
      stepNum: '4',
      title: "选择基金",
      content: this.state.implementationPath === 1 ? stepFourContent[0] : stepFourContent[1],
    }, {
      stepNum: '5',
      title: "分散化方法",
      content: (
        <div className={styles.decentralization}>
          <div className={styles.stepTitle}>5.选择分散化方法</div>
          <RadioGroup onChange={this.onChangeDecentralizedApproach}>
            <RadioButton value={1}><img width={70} role="presentation" src={staticScale}/>
              <div>静态比例配置</div>
            </RadioButton>
            <RadioButton value={2} onClick={this.onClickMethod2}><img width={70} role="presentation"
                                                                      src={meanVariance}/>
              <div>均值方差</div>
            </RadioButton>
            <RadioButton value={3}><img width={70} role="presentation" src={minVariance}/>
              <div>最小方差组合配置</div>
            </RadioButton>
            <RadioButton value={4}><img width={70} role="presentation" src={volatility}/>
              <div>波动率倒数</div>
            </RadioButton>
            <RadioButton value={5}><img width={70} role="presentation" src={maxDispersion}/>
              <div>最大分散化</div>
            </RadioButton>
            <RadioButton value={6}><img width={70} role="presentation" src={riskAssessment}/>
              <div>风险平价</div>
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
              style={{float: 'right'}}
              disabled={this.state.current === 1 && this.state.implementationPath === null ||
              this.state.current === 2 && ((this.state.implementationPath === 1 && this.state.weightTag === null) ||
              (this.state.implementationPath === 2 && this.state.factorOptionsVal.length === 0)) ||
              this.state.current === 3 && (this.state.implementationPath === 1 &&
              fundList.length > 0 && fundList.reduce((pre, cur) => pre + cur.codes.length, 0) === 0)}
              onClick={this.next}
            >下一步</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" disabled={this.state.decentralizedApproach === ''} style={{float: 'right'}}
                    onClick={this.finishChoice}>创建我的组合</Button>
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
          footer={<Button onClick={this.handleOK}>保存</Button>}
        >
          <Input value={this.state.combinationName} onChange={this.onChangeCombinationName} placeholder="请输入组合名称..."/>
        </Modal>

        <Modal
          visible={this.state.averageVisible}
          title="均值方差收益率"
          onOk={this.handleAverageOK}
          onCancel={this.handleAverageCancel}
          footer={<Button onClick={this.handleAverageOK}>确定</Button>}
        >
          <InputNumber min={0} max={1} step={0.01} value={this.state.profitRate} onChange={this.onChangeProfitRate}/> %
          <p>最佳收益率为 0.05% - 0.1%</p>
        </Modal>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const {assetChoiceList, factorChoiceList, combinationResult, fundList} = state.asset;
  return {assetChoiceList, factorChoiceList, combinationResult, fundList};
}

export default connect(mapStateToProps)(AssetAllocation);
