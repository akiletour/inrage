import { captureRouterTransitionStart, loadSentry } from '@lib/sentry-client'

const whenIdle = (callback: () => void) => {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(callback, { timeout: 5000 })
  } else {
    window.setTimeout(callback, 3000)
  }
}

whenIdle(() => {
  void loadSentry()
})

export const onRouterTransitionStart = captureRouterTransitionStart
