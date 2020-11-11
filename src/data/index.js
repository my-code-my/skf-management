export const menuList = [
  {
    authName: "订单管理",
    id: 127,
    order: 3,
    path: "list",
    children: [
      {
        authName: "订单列表",
        id: 110,
        order: null,
        path: "OrderList"
      },
      {
        authName: "收支记录",
        id: 111,
        order: null,
        path: "Pay"
      }
    ]
  },
  {
    authName: "商品管理",
    id: 128,
    order: 4,
    path: "GoodsManagement",
    children: [
      {
        authName: "类目管理",
        id: 112,
        order: null,
        path: "Categories"
      },
      {
        authName: "属性管理",
        id: 113,
        order: null,
        path: "Props"
      },
      {
        authName: "密封商品列表",
        id: 114,
        order: null,
        path: "SealList"
      },
      {
        authName: "轴承商品列表",
        id: 115,
        order: null,
        path: "BearingList"
      },
      {
        authName: "润滑产品列表",
        id: 116,
        order: null,
        path: "lubricationList"
      },
      {
        authName: "润滑机型管理",
        id: 117,
        order: null,
        path: "lubricationType"
      },
      {
        authName: "润滑方案列表",
        id: 118,
        order: null,
        path: "lubricationPlan"
      },
      {
        authName: "运费模板",
        id: 119,
        order: null,
        path: "freight"
      },
      {
        authName: "折扣管理",
        id: 120,
        order: null,
        path: "discount"
      }
    ]
  },
  {
    authName: "订单审核",
    id: 129,
    order: 5,
    path: "auditing",
    children: [
      {
        authName: "申请PO单管理",
        id: 112,
        order: null,
        path: "applyPO"
      },
      {
        authName: "申请发票管理",
        id: 113,
        order: null,
        path: "applyBill"
      },
      {
        authName: "线下支付审核",
        id: 114,
        order: null,
        path: "payment"
      },
    ]
  },
  {
    authName: "系统管理",
    id: 130,
    order: 6,
    path: "system",
    children: [
      {
        authName: "账号管理",
        id: 112,
        order: null,
        path: "account"
      },
      {
        authName: "角色管理",
        id: 113,
        order: null,
        path: "roles"
      },
      {
        authName: "导入商品",
        id: 114,
        order: null,
        path: "require"
      }
    ]
  }
]

export const orderTableData =  [
  {
    id: 1,
    date: '2016-05-03',
    code: '2020102910061813',
    goods: 'SKF6009',
    goods_code: 6009.0,
    number: 10,
    imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    preview_imgUrl: 'https://aws-skf-cn-skf4u-project.s3.cn-north-1.amazonaws.com.cn/uat/shop/uat/shop/skf-admin/369fe622cb604117895e74c0a3037c4e',
    price: 100.12,
    total_price: 1008.6,
    contact_name: '周总',
    tel: 12345678,
    address: '四川省成都市',
    order_status: '1',
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784,
    delivery_time: '1-50个工作日',
    weight: '0.001kg',
    detail_url: 'https://aws-skf-cn-skf4u-project.s3.cn-north-1.amazonaws.com.cn/skf4u/demo/skf4u/demo/skf-admin/6d32bcc5e3b2479aba468a0601204724.jpg'
  },
  {
    id: 2,
    date: '2016-05-03',
    code: '2020102910061813',
    goods: 'SKF6009',
    goods_code: 6009.0,
    number: 10,
    imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    total_price: 1008.6,
    contact_name: '周总',
    tel: 12345678,
    address: '四川省成都市',
    order_status: '0',
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784,
    delivery_time: '1-50个工作日',
    weight: '0.001kg'
  },
  {
    id: 3,
    date: '2016-05-03',
    code: '2020102910061813',
    goods: 'SKF6009',
    goods_code: 6009.0,
    number: 10,
    imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    total_price: 1008.6,
    contact_name: '周总',
    tel: 12345678,
    address: '四川省成都市',
    order_status: 1,
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784,
    delivery_time: '1-50个工作日',
    weight: '0.001kg'
  },
  {
    id: 4,
    date: '2016-05-03',
    code: '2020102910061813',
    goods: 'SKF6009',
    goods_code: 6009.0,
    number: 10,
    imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    total_price: 1008.6,
    contact_name: '周总',
    tel: 12345678,
    address: '四川省成都市',
    order_status: 1,
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784,
    delivery_time: '1-50个工作日',
    weight: '0.001kg'
  }
]
//类目管理数据
export const categoriesList = [
  {
    id: 1,
    name: '密封',
    level: 0,
    num: 1993,
    children: [{
      id: 4,
      name: 'O型密封',
      level: 1,
      num: 2033,
      children: [
        {
          id: 9,
          name: '耐磨衬套',
          level: 2,
          num: 23,
        },
        {
          id: 10,
          name: '类目编辑测试',
          level: 2,
          num: 243,
        }]
    }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 3,
    name: '一级 3',
    level: 0,
    num: 2033,
    children: [
      {
        id: 7,
        name: '二级 3-1',
        level: 1,
        num: 2033,
      },
      {
        id: 8,
        name: '二级 3-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },
  {
    id: 2,
    name: '一级 2',
    level: 0,
    num: 2033,
    children: [
      {
        id: 5,
        name: '二级 2-1',
        level: 1,
        num: 2033,
      },
      {
        id: 6,
        name: '二级 2-2',
        level: 1,
        num: 2033,
      }]
  },]
//级联选择器
export const cascaderList = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
      value: 'shejiyuanze',
      label: '设计原则',
      children: [
        {
          value: 'yizhi',
          label: '一致'
        },
        {
          value: 'fankui',
          label: '反馈'
        },
        {
          value: 'xiaolv',
          label: '效率'
        },
        {
          value: 'kekong',
          label: '可控'
        }]
    }]
 }]

//下拉选择器数据
export const selectList =  [{
  value: '选项1',
  label: '密封圈1'
}, {
  value: '选项2',
  label: '双皮奶'
}, {
  value: '选项3',
  label: '密封圈2'
}, {
  value: '选项4',
  label: '龙须面'
}, {
  value: '选项5',
  label: '北京烤鸭'
}]

export const detailList =  orderTableData[0]

