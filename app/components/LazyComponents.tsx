import { lazy } from 'react'

export const LazyPortfolioGrid = lazy(
  () => import('@component/portfolio/PortfolioGrid')
)
export const LazySupportSwitcher = lazy(
  () => import('@component/portfolio/SupportSwitcher')
)
