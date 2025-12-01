import { useEffect } from 'react';
import posthog from 'posthog-js';
import Intercom from '@intercom/messenger-js-sdk';

export const Analytics = () => {
  useEffect(() => {
    // Initialize PostHog
    posthog.init('phc_Gaksl1OP0ZVYeErlumeRTuj5xJqPMQPe3H8UKxMpwAM', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
    });

    // Initialize Intercom
    Intercom({
      app_id: 'xu0gfiqb',
    });

    // Google Tag Manager is loaded via script tag in index.html
    console.log('Analytics initialized: PostHog, Intercom, and GTM');
  }, []);

  return null;
};
