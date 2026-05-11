import { createBrowserRouter } from 'react-router'

import AuthLayuout from '@/components/AuthLayout'
import AuthRoot from '@/components/AuthRoot'
import Login from '@/views/Login'
import { action as loginAction } from '@/views/Login/index.action'
import Reg from '@/views/Reg'
import { action as regAction } from '@/views/Reg/index.action'
import Root from '@/views/Root'
import ArticleAdd from '@/views/Root/article/Add'
import ArticleCate from '@/views/Root/article/Cate'
import ArticleEdit from '@/views/Root/article/Edit'
import ArticleList from '@/views/Root/article/List'
import Home from '@/views/Root/Home'
import { loader as rootLoader } from '@/views/Root/index.loader'
import UserAvatar from '@/views/Root/user/Avatar'
import UserInfo from '@/views/Root/user/Info'
import { action as userInfoAction } from '@/views/Root/user/Info/index.action'
import UserPassword from '@/views/Root/user/Password'
import { action as userPwdAction } from '@/views/Root/user/Password/index.action'
import { Navigate } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AuthLayuout>
        <Login />
      </AuthLayuout>
    ),
    action: loginAction,
  },
  {
    path: '/reg',
    element: (
      <AuthLayuout>
        <Reg />
      </AuthLayuout>
    ),
    action: regAction,
  },
  {
    path: '/',
    element: (
      <AuthRoot>
        <Root />
      </AuthRoot>
    ),
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'art-cate',
        element: <ArticleCate />,
      },
      {
        path: 'art-list',
        element: <ArticleList />,
      },
      {
        path: 'art-add',
        element: <ArticleAdd />,
      },
      {
        path: 'art-edit/:id',
        element: <ArticleEdit />,
      },
      {
        path: 'user-info',
        element: <UserInfo />,
        action: userInfoAction,
      },
      {
        path: 'user-avatar',
        element: <UserAvatar />,
      },
      {
        path: 'user-pwd',
        element: <UserPassword />,
        action: userPwdAction,
      },
    ],
    loader: rootLoader,
  },
])

export default router
