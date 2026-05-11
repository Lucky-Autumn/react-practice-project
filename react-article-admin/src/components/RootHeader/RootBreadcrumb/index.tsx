import { Breadcrumb } from 'antd'
import { useLoaderData, useLocation } from 'react-router'
import { getBreadcrumbItems } from './data'

const RootBreadcrumb = () => {
  const { menus } = useLoaderData()
  const currentPath = useLocation().pathname
  const breadcrumbItems = getBreadcrumbItems(menus, currentPath)
  return <Breadcrumb items={breadcrumbItems} />
}

export default RootBreadcrumb
