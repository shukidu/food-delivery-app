import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'start',
      component: r => require.ensure([], () => r(require('@/views/index/index')), 'Index'),
      meta: {keepAlive: true},
    },
    {
      path: '/category',
      name: 'category',
      component: r => require.ensure([], () => r(require('@/views/category/category'), 'CATEGORY'))
    },
    {
      path: '/order',
      name: 'My orders',
      component: r => require.ensure([], () => r(require('@/views/order/order'), 'Order')),
      children: [
        {
          path: 'comment',
          name: 'comment',
          component: r => require.ensure([], () => r(require('@/views/order/comment'), 'MakeComment'))
        }
      ]
    },
    {
      path: '/search',
      name: 'search restaurant',
      component: r => require.ensure([], () => r(require('@/views/search/search')), 'Search')
    },
    {
      path: '/location',
      name: 'locate',
      component: r => require.ensure([], () => r(require('@/views/location/location'), 'Location'))
    },
    {
      path: '/add_address',
      name: 'add address',
      component: r => require.ensure([], () => r(require('@/views/confirm_order/children/children/add_address'), 'Add_Address')),
      children: [
        {
          path: 'location',
          name: 'locate by address',
          component: r => require.ensure([], () => r(require('@/views/location/location'), 'Location'))
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: r => require.ensure([], () => r(require('@/views/home/home'), 'Home')),
      keepAlive: true,
      children: [
        {
          path: 'address',
          name: 'my address',
          component: r => require.ensure([], () => r(require('@/views/home/children/address'), 'MyAddress'))
        },
        {
          path: 'collection',
          name: 'me collection',
          component: r => require.ensure([], () => r(require('@/views/home/children/collection'), 'Collection'))
        },
        {
          path: 'thank',
          name: 'thank record',
          component: r => require.ensure([], () => r(require('@/views/home/children/thank_record'), 'ThankRecord'))
        },
        {
          path: 'footprint',
          name: 'my footprint',
          component: r => require.ensure([], () => r(require('@/views/home/children/footprint'), 'FootPrint'))
        },
        {
          path: 'friend',
          name: 'friend',
          component: r => require.ensure([], () => r(require('@/views/home/children/friend'), 'Friend'))
        },
        {
          path: 'comment',
          name: 'my comment',
          component: r => require.ensure([], () => r(require('@/views/home/children/comment'), 'MyComment'))
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], () => r(require('@/views/login/login'), 'Login'))
    },
    {
      path: '/confirm_order',
      name: 'confirm order',
      component: r => require.ensure([], () => r(require('@/views/confirm_order/confirm_order'), 'ConfirmOrder')),
      children: [{
        path: 'address',
        name: 'order delivery address',
        component: r => require.ensure([], () => r(require('@/views/confirm_order/children/address'), 'Address'))
      }]
    },
    {
      path: '/store',
      component: r => require.ensure([], () => r(require('@/views/store/store'), 'Store')),
      children: [
        {
          path: 'menu',
          name: 'menu',
          component: r => require.ensure([], () => r(require('@/views/store/menu/menu'), 'Menu'))
        },
        {
          path: 'comment',
          name: 'comment',
          component: r => require.ensure([], () => r(require('@/views/store/comment/comment'), 'Comment'))
        },
        {
          path: 'seller',
          name: 'restaurant info',
          component: r => require.ensure([], () => r(require('@/views/store/seller/seller'), 'Seller'))
        },
        {
          path: '',
          redirect: '/store/menu'
        }
      ]
    },
    {
      path: '/cart',
      name: 'shopping cart',
      component: r => require.ensure([], () => r(require('@/views/cart/cart'), 'CART'))
    },
    {
      path: '/pay',
      name: 'pay',
      component: r => require.ensure([], () => r(require('@/views/pay/pay'), 'PAY'))
    },
    {
      path: '/order_detail',
      name: 'order detail',
      component: r => require.ensure([], () => r(require('@/views/order/order_detail'), 'OrderDetail'))
    },
    {
      path: '/error',
      name: 'error page',
      component: r => require.ensure([], () => r(require('@/views/404/error'), 'Error'))
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
