import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import bnt from '@/components/bnt'
import index from '../pages/index' // 首页页面
import register from '../pages/register' // 手机登录页面
import Passwordregister from '../pages/Password_register' // 账号登录页面
import Mobileregister from '../pages/Mobile_register' // 手机注册页面
import findpassword from '../pages/find_password' // 找回密码页面
import personal from '../pages/personal' // 个人中心页面
import careerAdvancement from '../pages/career_advancement' // 职业提升页面
import informations from '../pages/informations.vue' // 个人消息中心
import reporting from '../pages/reporting.vue' // 签到页面
import classify from '../pages/classify' // 分类页面
import classifyDetail from '../pages/classifyDetail' // 分类详情页面
import shopping from '../pages/shopping' // 购物页面
import management from '../pages/management' // 订单跟踪页面
import goodsdetail from '../pages/goodsdetail' // 商品详情页面
import storeDetail from '../pages/storeDetail' // 店铺详情页
import evaluate from '../pages/evaluate' // 评价页面
import service from '../pages/service' // 退款售后页面
import goodscoupon from '../pages/goods_coupon' // 商品优惠券
import refunds from '../pages/refunds' // 我要退款
import refundDetail from '../pages/refundDetail' // 待退款订单处理
import protection from '../pages/protection' // 售后维权
import orderDetail from '../pages/orderDetail' // 订单详情
import personals from '../pages/personals' // 个人详情页
import personalSetting from '../pages/personalSetting' // 账户设置
import cache from '../pages/cache' // 通用
import account from '../pages/account' // 账户与安全
import privacy from '../pages/privacy' // 隐私
import CommonProblem from '../pages/CommonProblem' // 常见问题
import RegionalSetup from '../pages/RegionalSetup' //  地区设置
import SoundEffects from '../pages/SoundEffects' // 音效与通知
import LanguageSettings from '../pages/LanguageSettings' // 语言设置
import AddAddress from '../pages/AddAddress' // 添加地址
import ManagementAddress from '../pages/ManagementAddress' // 管理地址
import freeOpenShop from '../components/openShop/freeOpenShop' // 免费开店
import Feedbacks from '../pages/Feedbacks' // 意见反馈
import AboutUs from '../pages/AboutUs' // 关于我们
import PrivacyPolicy from '../pages/PrivacyPolicy' // 隐私政策
import ModifyLoginPassword from '../pages/ModifyLoginPassword' // 修改登录密码
import ModifyPhoneNumber1 from '../pages/ModifyPhoneNumber1' // 修改手机号1
import ModifyPhoneNumber2 from '../pages/ModifyPhoneNumber2' // 修改手机号2
import Verified from '../pages/verified' // 实名认证
import myPurse from '../components/myPurse/myPurse' // 我的钱包
import recharge from '../components/myPurse/recharge' // 充值
import rechargeSuccess from '../components/myPurse/rechargeSuccess' // 充值成功
import withdraw from '../components/myPurse/withdraw' // 提现操作
import withdrawSuccess from '../components/myPurse/withdrawSuccess' // 提现成功
import listBankCard from '../components/myPurse/listBankCard' // 个人绑定银行卡列表
import addBankCard from '../components/myPurse/addBankCard' // 添加银行卡详细信息填写
import ModifyPayments from '../pages/ModifyPayments' // 修改支付密码
import ModifyPaymentsWays from '../pages/ModifyPaymentsWays' // 修改支付密码两种方式
import ModifyPaymentsWay1Step1 from '../pages/ModifyPaymentsWay1Step1' // 修改支付密码手机号验证
import ModifyPaymentsWay2Step1 from '../pages/ModifyPaymentsWay2Step1' // 修改支付密码身份验证
import ModifyPaymentsSure from '../pages/ModifyPaymentsSure' // 确认修改支付密码
import Complaint from '../pages/Complaint' // 投诉
import MyBenefits from '../pages/MyBenefits' // 我的收益
import benefitRuleDes from '../pages/benefitRuleDes' // 我的收益规则说明
import MyIntegral from '../pages/MyIntegral' // 我的积分
import IntegralDetails from '../pages/IntegralDetails' // 积分明细
import IntegralRule from '../pages/IntegralRule' // 积分规则
import abnormal from '../pages/abnormal' // 异常
import ConfirmationOrder from '../pages/ConfirmationOrder' // 确认订单
import sureOrderBuy from '../pages/sureOrderBuy' // 确认订单购买
import orderpay from '../components/orderDetail/order_pay' // 订单支付成功/失败
import CollectionEmpty from '../pages/CollectionEmpty' // 收藏为空
// import HaiyunzhouRules from '../pages/HaiyunzhouRules' // 免责声明
import PersonalCheckIn from '../pages/PersonalCheckIn' // 个人入驻
import EnterpriseCheckIn from '../pages/EnterpriseCheckIn' // 企业入驻
import PlatformProtocol from '../pages/PlatformProtocol' // 平台协议
import PrivacyPolicyIn from '../pages/PrivacyPolicyIn' // 隐私权政策
import AllEvaluation from '../pages/AllEvaluation' // 全部评价
import myEvaluation from '../pages/myEvaluation' // 我的评价
import ChangeDetails from '../pages/ChangeDetails' // 零钱明细
import MyTeam from '../pages/MyTeam' // 我的团队
import editData from '../pages/editData' // 编辑用户信息
import editName from '../pages/editName' // 编辑用户姓名
import myCollection from '../components/myCollection' // 收藏列表
import cardDetails from '../pages/cardDetails' // 卡包详情
import bindMailbox from '../pages/bindMailbox' // 绑定邮箱
import discount from '../pages/discount' // 优惠促销
import noticeMsg from '../pages/noticeMsg' // 通知消息
import selectImg from '../pages/selectImg'// 选择图片
import refundSuccess from '../pages/refundSuccess'// 退款成功
import AfterSaleReturns from '../pages/AfterSaleReturns'// 退款售后列表页
import searchgoods from '../pages/searchgoods.vue' // 热门搜索
import SearchEmpty from '../pages/SearchEmpty' // 搜索为空
import Invoicing from '../pages/Invoicing' // 开具发票
import MyInvoice from '../pages/MyInvoice' // 我的发票
import InvoiceDetail from '../pages/InvoiceDetail' // 发票详情
import DownloadInvoice from '../pages/DownloadInvoice' // 下载发票
import NewbornZone from '../pages/NewbornZone' // 新人专区
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { title: '首页', keyword: 'success-list', description: '首页' }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { title: '手机登录', keyword: 'success-list', description: '手机登录' }
    },
    {
      path: '/Password_register',
      name: 'Password_register',
      component: Passwordregister,
      meta: { title: '账号登录', keyword: 'success-list', description: '账号登录' }
    },
    {
      path: '/Mobile_register',
      name: 'Mobile_register',
      component: Mobileregister,
      meta: { title: '注册', keyword: 'success-list', description: '注册' }
    },
    {
      path: '/find_password',
      name: 'find_password',
      component: findpassword,
      meta: { title: '密码找回', keyword: 'success-list', description: '密码找回' }
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: { title: '个人中心', keyword: 'success-list', description: '个人中心' }
    },
    {
      path: '/informations',
      name: 'informations',
      component: informations,
      meta: { title: '物流中心', keyword: 'success-list', description: '物流中心' }

    },
    {
      path: '/reporting',
      name: 'reporting',
      component: reporting,
      meta: { title: '签到中心', keyword: 'success-list', description: '签到中心' }

    },
    {
      path: '/searchgoods',
      name: 'searchgoods',
      component: searchgoods,
      meta: { title: '搜索', keyword: 'success-list', description: '搜索' }

    },
    {
      path: '/careerAdvancement',
      name: 'careerAdvancement',
      component: careerAdvancement,
      meta: { title: '职业提升', keyword: 'success-list', description: '职业提升' }
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify,
      meta: { title: '分类', keyword: 'success-list', description: '分类' }
    },
    {
      path: '/classifyDetail',
      name: 'classifyDetail',
      component: classifyDetail,
      meta: { title: '分类详情页面', keyword: 'success-list', description: '分类详情页面' }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping,
      meta: { title: '购物车', keyword: 'success-list', description: '购物车' }
    },
    {
      path: '/management',
      name: 'management',
      component: management,
      meta: { title: '订单跟踪', keyword: 'success-list', description: '订单跟踪' }
    },
    {
      path: '/goodsdetail',
      name: 'goodsdetail',
      component: goodsdetail,
      meta: { title: '商品详情', keyword: 'suceess-list', description: '商品详情' }
    },
    {
      path: '/storeDetail',
      name: 'storeDetail',
      component: storeDetail,
      meta: {title: '店铺详情', keyword: 'success-list', description: '店铺详情'}
    },
    {
      path: '/evaluate/:evaluateList',
      name: 'evaluate',
      component: evaluate,
      meta: { title: '评价', keyword: 'success-list', description: '评价' }
    },
    {
      path: '/service',
      name: 'service',
      component: service,
      meta: { title: '选择服务类型', keyword: 'success-list', description: '选择服务类型' }
    },
    {
      path: '/goodscoupon',
      name: 'goodscoupon',
      component: goodscoupon,
      meta: { title: '商品优惠券平台', keyword: 'success-list', description: '商品优惠券平台' }
    },
    {
      path: '/refunds/:refunds',
      name: 'refunds',
      component: refunds,
      meta: { title: '我要退款', keyword: 'success-list', description: '我要退款' }
    },
    {
      path: '/refundDetail/:refundDetail',
      name: 'refundDetail',
      component: refundDetail,
      meta: { title: '退款详情', keyword: 'success-list', description: '退款详情' }
    },
    {
      path: '/protection',
      name: 'protection',
      component: protection,
      meta: { title: '售后维权', keyword: 'success-list', description: '售后维权' }
    },
    {
      path: '/orderDetail/:orderList',
      name: 'orderDetail',
      component: orderDetail,
      meta: { title: '订单详情', keyword: 'success-list', description: '订单详情' }
    },
    {
      path: '/personals',
      name: 'personals',
      component: personals,
      meta: { title: '个人详情页', keyword: 'success-list', description: '个人详情页' }
    },
    {
      path: '/personalSetting',
      name: 'personalSetting',
      component: personalSetting,
      meta: { title: '个人详情页2', keyword: 'success-list', description: '个人详情页2' }
    },
    {
      path: '/cache',
      name: 'cache',
      component: cache,
      meta: { title: '清除个人缓存', keyword: 'success-list', description: '清除个人缓存' }
    },
    {
      path: '/account',
      name: 'account',
      component: account,
      meta: { title: '账户与安全', keyword: 'success-list', description: '账户与安全' }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy,
      meta: { title: '隐私', keyword: 'success-list', description: '隐私' }
    },
    {
      path: '/CommonProblem',
      name: 'CommonProblem',
      component: CommonProblem,
      meta: { title: '常见问题', keyword: 'success-list', description: '常见问题' }
    },
    {
      path: '/RegionalSetup',
      name: 'RegionalSetup',
      component: RegionalSetup,
      meta: { title: '地区设置', keyword: 'success-list', description: '地区设置' }
    },
    {
      path: '/SoundEffects',
      name: 'SoundEffects',
      component: SoundEffects,
      meta: { title: '音效与通知', keyword: 'success-list', description: '音效与通知' }
    },
    {
      path: '/LanguageSettings',
      name: 'LanguageSettings',
      component: LanguageSettings,
      meta: { title: '语言设置', keyword: 'success-list', description: '语言设置' }
    },
    {
      path: '/AddAddress',
      name: 'AddAddress',
      component: AddAddress,
      meta: { title: '添加地址', keyword: 'success-list', description: '添加地址' }
    },
    {
      path: '/ManagementAddress',
      name: 'ManagementAddress',
      component: ManagementAddress,
      meta: { title: '管理地址', keyword: 'success-list', description: '管理地址' }
    },
    {
      path: '/freeOpenShop',
      name: 'freeOpenShop',
      component: freeOpenShop,
      meta: { title: '免费开店', keyword: 'sucess-list', description: '免费开店' }
    },
    {
      path: '/Feedbacks',
      name: 'Feedbacks',
      component: Feedbacks,
      meta: { title: '意见反馈', keyword: 'sucess-list', description: '意见反馈' }
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs,
      meta: { title: '关于我们', keyword: 'sucess-list', description: '关于我们' }
    },
    {
      path: '/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
      meta: { title: '隐私政策', keyword: 'sucess-list', description: '隐私政策' }
    },
    {
      path: '/ModifyLoginPassword',
      name: 'ModifyLoginPassword',
      component: ModifyLoginPassword,
      meta: { title: '修改登录密码', keyword: 'sucess-list', description: '修改登录密码' }
    },
    {
      path: '/ModifyPhoneNumber1',
      name: 'ModifyPhoneNumber1',
      component: ModifyPhoneNumber1,
      meta: { title: '修改手机号', keyword: 'sucess-list', description: '修改手机号' }
    },
    {
      path: '/ModifyPhoneNumber2',
      name: 'ModifyPhoneNumber2',
      component: ModifyPhoneNumber2,
      meta: { title: '修改手机号', keyword: 'sucess-list', description: '修改手机号' }
    }, {
      path: '/Verified',
      name: 'Verified',
      component: Verified,
      meta: { title: '实名认证', keyword: 'sucess-list', description: '实名认证' }
    },
    {
      path: '/myPurse',
      name: 'myPurse',
      component: myPurse,
      meta: { title: '我的钱包', keyword: 'success-list', description: '我的钱包' }
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge,
      meta: { title: '充值', keyword: 'success-list', description: '充值' }
    }, {
      path: '/rechargeSuccess',
      name: 'rechargeSuccess',
      component: rechargeSuccess,
      meta: { title: '充值成功', keyword: 'success-list', description: '充值成功' }
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw,
      meta: { title: '提现', keyword: 'success-list', description: '提现' }
    },
    {
      path: '/withdrawSuccess',
      name: 'withdrawSuccess',
      component: withdrawSuccess,
      meta: { title: '提现成功', keyword: 'success-list', description: '提现成功' }
    },
    {
      path: '/listBankCard',
      name: 'listBankCard',
      component: listBankCard,
      meta: { title: '我的银行卡', keyword: 'success-list', description: '我的银行卡' }
    },
    {
      path: '/addBankCard',
      name: 'addBankCard',
      component: addBankCard,
      meta: { title: '添加银行卡', keyword: 'success-list', description: '添加银行卡' }
    },
    {
      path: '/ModifyPayments',
      name: 'ModifyPayments',
      component: ModifyPayments,
      meta: { title: '修改支付密码', keyword: 'sucess-list', description: '修改支付密码' }
    },
    {
      path: '/ModifyPaymentsWays',
      name: 'ModifyPaymentsWays',
      component: ModifyPaymentsWays,
      meta: { title: '修改支付密码验证', keyword: 'sucess-list', description: '修改支付密码验证' }
    },
    {
      path: '/ModifyPaymentsWay1Step1',
      name: 'ModifyPaymentsWay1Step1',
      component: ModifyPaymentsWay1Step1,
      meta: { title: '手机号验证', keyword: 'sucess-list', description: '手机号验证' }
    },
    {
      path: '/ModifyPaymentsWay2Step1',
      name: 'ModifyPaymentsWay2Step1',
      component: ModifyPaymentsWay2Step1,
      meta: { title: '身份验证', keyword: 'sucess-list', description: '身份验证' }
    },
    {
      path: '/ModifyPaymentsSure',
      name: 'ModifyPaymentsSure',
      component: ModifyPaymentsSure,
      meta: { title: '确认修改支付密码', keyword: 'sucess-list', description: '确认修改支付密码' }
    },
    {
      path: '/Complaint',
      name: 'Complaint',
      component: Complaint,
      meta: { title: '投诉', keyword: 'sucess-list', description: '投诉' }
    },
    {
      path: '/MyBenefits',
      name: 'MyBenefits',
      component: MyBenefits,
      meta: { title: '我的收益', keyword: 'sucess-list', description: '我的收益' }
    },
    {
      path: '/benefitRuleDes',
      name: 'benefitRuleDes',
      component: benefitRuleDes,
      meta: { title: '我的收益说明规则', keyword: 'sucess-list', description: '我的收益说明规则' }
    },
    {
      path: '/MyIntegral',
      name: 'MyIntegral',
      component: MyIntegral,
      meta: { title: '我的积分', keyword: 'sucess-list', description: '我的积分' }
    },
    {
      path: '/IntegralDetails',
      name: 'IntegralDetails',
      component: IntegralDetails,
      meta: { title: '积分明细', keyword: 'sucess-list', description: '积分明细' }
    },
    {
      path: '/IntegralRule',
      name: 'IntegralRule',
      component: IntegralRule,
      meta: { title: '积分规则', keyword: 'sucess-list', description: '积分规则' }
    },
    {
      path: '/abnormal',
      name: 'abnormal',
      component: abnormal,
      meta: { title: '异常', keyword: 'sucess-list', description: '异常' }
    },
    {
      path: '/SearchEmpty',
      name: 'SearchEmpty',
      component: SearchEmpty,
      meta: { title: '搜索为空', keyword: 'sucess-list', description: '搜索为空' }
    },
    {
      path: '/ConfirmationOrder',
      name: 'ConfirmationOrder',
      component: ConfirmationOrder,
      meta: { title: '确认订单', keyword: 'sucess-list', description: '确认订单' }
    },
    {
      path: '/sureOrderBuy',
      name: 'sureOrderBuy',
      component: sureOrderBuy,
      meta: { title: '确认订单购买', keyword: 'success-list', description: '确认订单购买' }
    },
    {
      path: '/orderpay',
      name: 'orderpay',
      component: orderpay,
      meta: { title: '订单支付状态', keyword: 'success-list', description: '订单支付状态' }
    },
    {
      path: '/CollectionEmpty',
      name: 'CollectionEmpty',
      component: CollectionEmpty,
      meta: { title: '收藏为空', keyword: 'sucess-list', description: '收藏为空' }
    },
    // {
    //   path: '/HaiyunzhouRules',
    //   name: 'HaiyunzhouRules',
    //   component: HaiyunzhouRules,
    //   meta: { title: '海云州协议', keyword: 'sucess-list', description: '海云州协议' }
    // },
    {
      path: '/PersonalCheckIn',
      name: 'PersonalCheckIn',
      component: PersonalCheckIn,
      meta: { title: '个人入驻', keyword: 'sucess-list', description: '个人入驻' }
    },
    {
      path: '/EnterpriseCheckIn',
      name: 'EnterpriseCheckIn',
      component: EnterpriseCheckIn,
      meta: { title: '企业入驻', keyword: 'sucess-list', description: '企业入驻' }
    },
    {
      path: '/PlatformProtocol',
      name: 'PlatformProtocol',
      component: PlatformProtocol,
      meta: { title: '平台协议', keyword: 'sucess-list', description: '平台协议' }
    },
    {
      path: '/PrivacyPolicyIn',
      name: 'PrivacyPolicyIn',
      component: PrivacyPolicyIn,
      meta: { title: '隐私权政策', keyword: 'sucess-list', description: '隐私权政策' }
    },
    {
      path: '/AllEvaluation',
      name: 'AllEvaluation',
      component: AllEvaluation,
      meta: { title: '全部评价', keyword: 'sucess-list', description: '全部评价' }
    }, {
      path: '/myEvaluation',
      name: 'myEvaluation',
      component: myEvaluation,
      meta: { title: '我的评价', keyword: 'sucess-list', description: '我的评价' }
    },
    {
      path: '/MyTeam',
      name: 'MyTeam',
      component: MyTeam,
      meta: { title: '我的团队', keyword: 'sucess-list', description: '我的团队' }
    },
    {
      path: '/ChangeDetails',
      name: 'ChangeDetails',
      component: ChangeDetails,
      meta: { title: '零钱明细', keyword: 'sucess-list', description: '零钱明细' }
    },
    {
      path: '/editData',
      name: 'editData',
      component: editData,
      meta: { title: '编辑用户信息', keyword: 'sucess-list', description: '编辑用户信息' }
    },
    {
      path: '/editName',
      name: 'editName',
      component: editName,
      meta: { title: '编辑用户姓名', keyword: 'sucess-list', description: '编辑用户姓名' }
    },
    {
      path: '/myCollection',
      name: 'myCollection',
      component: myCollection,
      meta: { title: '我的收藏', keyword: 'sucess-list', description: '我的收藏' }
    },
    {
      path: '/cardDetails',
      name: 'cardDetails',
      component: cardDetails,
      meta: { title: '卡包详情', keyword: 'sucess-list', description: '卡包详情' }
    },
    {
      path: '/bindMailbox',
      name: 'bindMailbox',
      component: bindMailbox,
      meta: { title: '邮箱绑定', keyword: 'sucess-list', description: '邮箱绑定' }
    },
    {
      path: '/discount',
      name: 'discount',
      component: discount,
      meta: { title: '优惠促销', keyword: 'sucess-list', description: '优惠促销' }
    },
    {
      path: '/noticeMsg',
      name: 'noticeMsg',
      component: noticeMsg,
      meta: { title: '通知消息', keyword: 'sucess-list', description: '通知消息' }
    }, {
      path: '/selectImg',
      name: 'selectImg',
      component: selectImg,
      meta: { title: '通知消息', keyword: 'sucess-list', description: '通知消息' }
    }, {
      path: '/refundSuccess/:refundSuccessList',
      name: 'refundSuccess',
      component: refundSuccess,
      meta: {title: '退款成功', keyword: 'sucess-list', description: '退款成功'}
    }, {
      path: '/AfterSaleReturns',
      name: 'AfterSaleReturns',
      component: AfterSaleReturns,
      meta: {title: '退款售后', keyword: 'sucess-list', description: '退款售后'}
    }, {
      path: '/Invoicing',
      name: 'Invoicing',
      component: Invoicing,
      meta: {title: '开具发票', keyword: 'sucess-list', description: '开具发票'}
    },
    {
      path: '/MyInvoice',
      name: 'MyInvoice',
      component: MyInvoice,
      meta: {title: '我的发票', keyword: 'sucess-list', description: '我的发票'}
    }, {
      path: '/InvoiceDetail',
      name: 'InvoiceDetail',
      component: InvoiceDetail,
      meta: {title: '发票详情', keyword: 'sucess-list', description: '发票详情'}
    }, {
      path: '/DownloadInvoice',
      name: 'DownloadInvoice',
      component: DownloadInvoice,
      meta: {title: '下载发票', keyword: 'sucess-list', description: '下载发票'}
    }, {
      path: '/NewbornZone',
      name: 'NewbornZone',
      component: NewbornZone,
      meta: {title: '新人专区', keyword: 'sucess-list', description: '新人专区'}
    }
  ]
})
