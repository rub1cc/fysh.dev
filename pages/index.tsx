import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { LandingFeatureSection } from '~/components/landing/landing-feature-section'
import { LandingFooterSection } from '~/components/landing/landing-footer-section'
import { LandingHeroSection } from '~/components/landing/landing-hero-section'
import { LandingNavbarSection } from '~/components/landing/landing-navbar-section'
import { LandingPartnerSection } from '~/components/landing/landing-partner-section'
import { LandingServiceSection } from '~/components/landing/landing-service-section'
import { LandingStatSection } from '~/components/landing/landing-stat-section'

const App: React.FC = (): JSX.Element | null => {
  return (
    <Box bg="white" fontSize="xl">
      <LandingNavbarSection />
      <LandingHeroSection />
      <LandingPartnerSection />
      <LandingServiceSection />
      <LandingFeatureSection />
      <LandingStatSection />
      <LandingFooterSection />
    </Box>
  )
}

export default App
