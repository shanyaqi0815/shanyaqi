// let IP = "http://106.54.212.105:8080/V1"
// let IPs = "http://106.54.212.105:8088/api/v1"
// let IPs_one = "http://106.54.212.105:8080/v1/qit/course_red"
// let IPs_two = "http://106.54.212.105:8080/v1/qit/course_index"
let IP = "http://h5.horizou.cn:8080/V1"
let IPs = "http://h5.horizou.cn:8088/api/v1"
let IPs_one = "http://h5.horizou.cn:8080/v1/qit/course_red"
let IPs_two = "http://h5.horizou.cn:8080/v1/qit/course_index"
export default {
    homePage:IP+'/index/homePage1', // 首页接口
    index:IP+'/login/index', //登录页面接口
    categoryList:IP+'/goods/categoryList', //分类页面初始化接口 
    categoryListByCid:IP+'/goods/categoryListByCid', // 分类cid详情
    goodslist:IP+'/goods/goodslist', // 商品列表，搜索
    Goodssearch:IP+'/Goodssearch', // 商品分类 筛选
    detail:IP+'/goods/detail', //商品详情
    course_index:IPs_two,//学习达人
    articleDetail:IP+'/index/articleDetail', //公告详情
    messageCount:IP+'/index/messageCount', //消息未读数
    getSmsMessage:IP+'/Sms/getSmsMessage', //短信验证接口
    huadong:IP+'/user/huadong', //滑动验证接口
    cartindex:IP+'/cart/index  ', //购物车
    redListByVid:IP+'/cart/redListByVid', // 店铺优惠券列表
    sendRed:IP+'/qit/get_red', // 领取店铺优惠券
    systemmsg:IP+ '/usermessage/systemmsg', // 旧消息中心
    noticeMsg:IP+ '/usermessage/messageType', // 新消息中心
    messageTypeList:IP+ '/usermessage/messageTypeList', // 分类消息详情
    checkIn:IP+'/user/checkIn', //会员签到
    integralSignIn:IP+'/Signin/sign', //积分签到
    userIndex:IP+'/usercenter/index', //个人中心
    myAddressList:IP+'/user/myAddressList', // 收货管理地址列表
    editaddress:IP+'/user/editaddress', // 收货地址编辑
    updatedefaultaddress:IP+'/user/updatedefaultaddress', // 修改默认地址，按钮
    updateAddress:IP+'/user/updateAddress', // 添加收货，编辑收货地址
    delAddress:IP+'/user/delAddress', // 收货列表删除
    memberPoints:IP+'/usercenter/memberPoints', // 用户我的积分
    registerWithMobile:IP+'/user/registerWithMobile', //手机号注册
    getAgreements:IP+'/index/getAgreements', //海云州规则
    update:IP+'/cart/update', //购物车数量
    followgoods:IP+'/follow/followgoods', //从购物车移入到收藏夹
    del:IP+'/cart/del', //删除购物车中的商品
    update:IP+'/cart/update', //购物车数量
    registerWithMobileMsgCode:IP+'/user/registerWithMobileMsgCode/', //手机号登录
    huanyihuan:IPs_one,//换一换
    recommand:IP+'/goods/recommand', //签到商品列表
    add:IP+"/cart/add", //商品详情——添加到购物车
    buy:IP+"/buy/buy", //商品详情——立即购买
    confirm:IP+'/buy/orderCheck', // 商品详情，购物车 -> 确认订单
    submitorder:IP+'/buy/orderSubmit', // 生成订单
    methodList:IP+'/payment/methodList', // 选择支付方式
    followgoods:IP+"/follow/followgoods", //商品详情——收藏
    weixin:IP+"/Weixin/getSignPackage", //微信分享
    myBenefits: IP + "/usercenter/memberIncome", // 我的收益
    orderLists: IP + "/qit/order_list", // 我的收益
    pingjia: IP + "/goods/getComments", //评价
    memInfo: IP + "/usercenter/memberInfo", //用户信息
    collectionShop: IP + '/followvendor', //收藏店铺 
    commodityList: IP + '/follow/fglist',//收藏商品列表   
    shopList: IP + '/follow/fvlist', //收藏店铺列表
    regionalSetup: IP + "/usercenter/worldArea", // 地区设置
    feedBack: IP+'/index/feedback',//反馈接口
    updateInfo: IP+'/usercenter/updateInfo', //更新用户个人信息
    complaint: IP + '/tousu/index', //投诉接口
    updatePassword: IP + '/usercenter/updatePassword', //修改密码
    apply :IP + '/Capply/apply', //个人申请开店
    updatePhoneNumber1 :IP + '/usercenter/phoneCheck', //修改手机号码1
    updatePhoneNumber2 :IP + '/usercenter/updatePhone', //修改手机号码2    
    editPayPwd:IP+'/usercenter/editPayPwd', // 密码两次确认
    listBankCard :IP + '/user/cardList' ,//获取银行卡列表    
    agreeApplyConfirm: IP + '/payment/agreeApplyConfirm',///获取短信验证码,添加银行卡
    shopInfo: IP + '/vendor/venderInfo', //店铺首页
    shopSearch: IP + '/vendor/searchGoods', //店铺搜索
    balance :IP + '/usercenter/memberBalance', //查询账户余额
    chongzhi: IP + '/chongzhi/chongzhi',//充值生成订单
    checkPayPwd: IP + '/payment/checkPayPwd', //验证支付密码
    orderPay : IP + '/payment/orderPay', //支付密码验证成功，获取短信验证码第一步
    orderPayConfirm : IP + '/payment/orderPayConfirm', //支付密码验证成功，获取短信验证码第二步
    area :IP + '/qit/area', //选择地址
    personalInfo :IPs + '/personalInfo', //实名认证
    upload :IP + '/qit/upload', //图片上传
    bapplyApply :IP + '/bapply/apply', //企业入住
    capplyApply :IP + '/capply/apply', //个人入住
    courseCommentList : IP + '/qit/course_comment_list', //课程评论列表
    courseCommentAdd : IP + '/qit/course_comment_add',//添加课程评论
    orderPaySms : IP + '/payment/orderPaySms',//重新获取验证码
    orderDetail : IP + '/qit/order_detail',//我的订单详情页
    courseComment : IP + '/qit/course_comment',//添加评价详情页面
    orderHandle : IP + '/qit/order_handle ',// 更改订单状态
    refundReasonList : IP + "/qit/refund_reason_list" ,//退款理由详情
    order_handle : IP + '/qit/order_handle ',// 更改订单状态
    returnHome : IPs + '/returnHome ',// 入住成功短信接口
    refund_reason_list : IP + '/qit/refund_reason_list ',// 维权详情页面接口
    goodsSort : IP + '/Goodssearch/show ',// 更改店铺销量，价格排序
    // oderDetail : IP + "/qit/order_detail" //订单详情
    Details :IP + '/usercenter/memberBalanceDetails', //账户明细
    SignInRecord :IP + '/Signin/SignInRecord', //签到信息
    newborn_zone:IP+ '/newborn_zone', // 新手福利分类一级菜单
    newborn_search:IP +'/newborn_zone/search', //  新手福利分类二级菜单
    
}
