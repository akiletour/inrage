import Script from 'next/script'

import { CONSENT_KEY, CONSENT_MAX_AGE } from '@lib/consent'

const source = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var consent = 'denied';
try {
  var stored = JSON.parse(localStorage.getItem('${CONSENT_KEY}'));
  if (stored && stored.granted === true && Date.now() - stored.at < ${CONSENT_MAX_AGE}) {
    consent = 'granted';
  }
} catch (e) {}
gtag('consent', 'default', {
  ad_storage: consent,
  ad_user_data: consent,
  ad_personalization: consent,
  analytics_storage: consent,
  wait_for_update: 500
});
`

export default function ConsentDefaults() {
  return (
    <Script id="consent-defaults" strategy="beforeInteractive">
      {source}
    </Script>
  )
}
