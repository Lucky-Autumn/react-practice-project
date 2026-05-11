import { Menu, type MenuProps } from 'antd'
import { useState } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router'
import { findOpenKey } from './findOpenKey'
import { getMenuIcon } from './iconMap'

const RootMenu = () => {
  const { menus } = useLoaderData()
  const iconMenus = getMenuIcon(menus)
  const location = useLocation()
  const navigate = useNavigate()
  const [openKeys, setOpenKeys] = useState<string[]>(() => {
    const key = findOpenKey(iconMenus, location.pathname)
    return key ? [key] : []
  })

  const handleOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys.length > 0 ? [keys[keys.length - 1]] : [])
  }

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      items={iconMenus}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      onClick={handleClick}
    />
  )
}

export default RootMenu
