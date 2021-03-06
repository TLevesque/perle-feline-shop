import * as React from 'react'
import { ReactNode } from 'react'

import {
  CommerceConfig,
  CommerceProvider as CoreCommerceProvider,
  useCommerce as useCoreCommerce,
} from '@commerce'

import { shopifyProvider } from './provider'
import type { ShopifyProvider } from './provider'
import { SHOPIFY_CHECKOUT_ID_COOKIE } from './const'

export { shopifyProvider }
export type { ShopifyProvider }

export const shopifyConfig: CommerceConfig = {
  locale: 'en',
  cartCookie: SHOPIFY_CHECKOUT_ID_COOKIE,
}

export type ShopifyConfig = Partial<CommerceConfig>

export type ShopifyProps = {
  children?: ReactNode
  locale: string
} & ShopifyConfig

export function CommerceProvider({ children, ...config }: ShopifyProps) {
  return (
    <CoreCommerceProvider
      provider={shopifyProvider}
      config={{ ...shopifyConfig, ...config }}
    >
      {children}
    </CoreCommerceProvider>
  )
}

export const useCommerce = () => useCoreCommerce<ShopifyProvider>()
