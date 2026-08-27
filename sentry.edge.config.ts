import * as Sentry from '@sentry/nextjs'
import { getSentryBaseConfig } from '@lib/sentry-config'

Sentry.init(getSentryBaseConfig())
