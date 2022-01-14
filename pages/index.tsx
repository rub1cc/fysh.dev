import { Box } from '@chakra-ui/react'
import '@fontsource/ibm-plex-sans'
import * as React from 'react'
import { LandingFeatureSection } from '~/components/ui/landing-feature-section'
import { LandingFooterSection } from '~/components/ui/landing-footer-section'
import { LandingHeroSection } from '~/components/ui/landing-hero-section'
import { LandingNavbarSection } from '~/components/ui/landing-navbar-section'
import { LandingPartnerSection } from '~/components/ui/landing-partner-section'
import { LandingFAQSection } from '~/components/ui/landing-faq-section'
import { LandingProductSection } from '~/components/ui/landing-product-section'
import { LandingStatSection } from '~/components/ui/landing-stat-section'

const App: React.FC = (): JSX.Element | null => {
  return (
    <Box bg="white">
      <LandingNavbarSection />
      <LandingHeroSection />
      <LandingPartnerSection />
      <LandingProductSection />
      <LandingFeatureSection />
      <LandingStatSection />
      <LandingFAQSection />
      <LandingFooterSection />
    </Box>
  )
}

export default App
