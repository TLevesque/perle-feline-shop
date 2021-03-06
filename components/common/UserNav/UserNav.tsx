import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import type { LineItem } from '@commerce/types/cart'
import useCart from '@framework/cart/use-cart'
import useCustomer from '@framework/customer/use-customer'
import { Avatar } from '@components/common'
import { Heart, Bag } from '@components/icons'
import { useUI } from '@components/ui/context'
import DropdownMenu from './DropdownMenu'
import s from './UserNav.module.css'
import { I18nWidget } from '@components/common'

interface Props {
  className?: string
}

const countItem = (count: number, item: LineItem) => count + item.quantity

const UserNav: FC<Props> = ({ className }) => {
  const { data } = useCart()
  const { data: customer } = useCustomer()
  const { toggleSidebar, closeSidebarIfPresent, openModal } = useUI()
  const itemsCount = data?.lineItems.reduce(countItem, 0) ?? 0

  return (
    <nav className={cn(s.root, className)}>
      <ul className={s.list}>
        {process.env.COMMERCE_CART_ENABLED && (
          <li className={s.item} onClick={toggleSidebar}>
            <Bag />
            {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
          </li>
        )}
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <li className={s.item}>
            <Link href="/wishlist">
              <a onClick={closeSidebarIfPresent} aria-label="Wishlist">
                <Heart />
              </a>
            </Link>
          </li>
        )}
        {process.env.COMMERCE_CUSTOMERAUTH_ENABLED && (
          <li className={s.item}>
            {customer ? (
              <DropdownMenu />
            ) : (
              <button
              className={s.avatarButton}
              aria-label="Menu"
              onClick={() => openModal()}
              >
                <Avatar />
              </button>
            )}
          </li>
        )}
        <li className={s.item}>
            <I18nWidget />
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
