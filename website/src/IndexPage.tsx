import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import {Badges} from './components/Badges'
import Layout from './components/Layout'

const IconExplorer = dynamic(() => import('./components/IconExplorer'), {loading: () => <div>Loading...</div>})

const IndexPage: React.SFC = () => (
  <Layout>
    <Head>
      <title>Emotion Icons - a React Components icon library</title>
    </Head>
    <div>
      <h1>
        Emotion Icons{' '}
        <span role="img" aria-label="icon">
          👩‍🎤
        </span>
      </h1>
      <Badges />

      <p>
        Import icons from the following icon packs as <a href="https://emotion.sh">Emotion React Components</a>:{' '}
        <a href="https://icons.getbootstrap.com/">Boxicons</a>, <a href="https://boxicons.com/">Boxicons</a>,{' '}
        <a href="http://cryptoicons.co">Crypto Icons</a>, <a href="http://www.entypo.com/">Entypo</a>,{' '}
        <a href="https://akveo.github.io/eva-icons/">Eva Icons</a>, <a href="https://evil-icons.io">Evil Icons</a>,{' '}
        <a href="https://feathericons.com/">Feather</a>, <a href="https://fontawesome.com/">Font Awesome</a>,{' '}
        <a href="https://zurb.com/playground/foundation-icon-fonts-3">Foundation</a>,{' '}
        <a href="https://github.com/refactoringui/heroicons">Heroicons</a>, <a href="https://icomoon.io">Icomoon</a>,{' '}
        <a href="https://ionicons.com">Ionicons</a>, <a href="https://material.io/icons/">Material Design</a>,{' '}
        <a href="https://octicons.github.com/">Octicons</a>,{' '}
        <a href="https://www.npmjs.com/package/open-iconic">Open Iconic</a>,{' '}
        <a href="https://github.com/simple-icons/simple-icons">Simple Icons</a>,{' '}
        <a href="https://www.s-ings.com/typicons/">Typicons</a>, <a href="https://www.zondicons.com/">Zondicons</a>
      </p>

      <code className="demo">
        {`
import styled from '@emotion/styled'
import {Zap} from '@emotion-icons/octicons'

const RedZap = styled(Zap)\`
  color: red;
\`

const App = () => <RedZap />
    `.trim()}
      </code>

      <p>
        <a href="https://github.com/emotion-icons/emotion-icons">View documentation on GitHub</a>
      </p>

      <p>
        <a href="https://vercel.com/?utm_source=emotion-icons">
          <img height="30" src="/powered-by-vercel.svg" alt="Powered by Vercel" />
        </a>
      </p>

      <h2>Icon Explorer</h2>

      <IconExplorer />
    </div>
  </Layout>
)

export default IndexPage
