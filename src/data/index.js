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
        path: "order"
      },
      {
        authName: "收支记录",
        id: 111,
        order: null,
        path: "pay"
      }
    ]
  },
  {
    authName: "商品管理",
    id: 128,
    order: 4,
    path: "goods",
    children: [
      {
        authName: "类目管理",
        id: 112,
        order: null,
        path: "categories"
      },
      {
        authName: "属性管理",
        id: 113,
        order: null,
        path: "props"
      },
      {
        authName: "密封商品列表",
        id: 114,
        order: null,
        path: "seal"
      },
      {
        authName: "轴承商品列表",
        id: 115,
        order: null,
        path: "bearing"
      },
      {
        authName: "润滑产品列表",
        id: 116,
        order: null,
        path: "lubricationProduct"
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
    total_price: 1008.6,
    contact_name: '周华强',
    tel: 12345678,
    address: '四川省巴中市通江县',
    order_status: '1',
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784,

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
    contact_name: '周华强',
    tel: 12345678,
    address: '四川省巴中市通江县',
    order_status: '0',
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784
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
    contact_name: '周华强',
    tel: 12345678,
    address: '四川省巴中市通江县',
    order_status: 1,
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784
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
    contact_name: '周华强',
    tel: 12345678,
    address: '四川省巴中市通江县',
    order_status: 1,
    commit_time: 1234567927,
    pay_time: 23812531673321,
    pay_type: '线上',
    send_time: 6162514241784
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


