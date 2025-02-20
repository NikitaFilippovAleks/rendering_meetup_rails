import React from 'react'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress';
// import Layout from '../components/Layout';

import { createRoot } from 'react-dom/client';

const pages = import.meta.glob('../pages/*.jsx')

document.addEventListener('DOMContentLoaded', () => {
  InertiaProgress.init();

  createInertiaApp({
    resolve: async name => {
      const page = (await pages[`../pages/${name}.jsx`]()).default;
      // page.layout = page.layout || Layout

      return page
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    },
  })
});
