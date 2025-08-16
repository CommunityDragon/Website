import UkContainer from "@components/uikit/Container"
import DarkLogo from "@public/logo-white.png"
import LightLogo from "@public/logo.png"
import LazyLoad from "react-lazyload"

import styles from './style.module.scss'

interface IProps {
  requests: number,
  bytes: number,
}

const Container: React.FC<IProps> = ({ requests, bytes }) => (
  <UkContainer size='small' className={`${styles.hero} uk-margin-large-bottom uk-margin-large-top`}>
    <div className='uk-grid uk-child-width-1-2@s uk-child-width-1-5@m' uk-grid>
      <div className="uk-width-1-1 uk-width-1-2@s uk-width-3-5@m uk-text-center uk-text-right@s">
        <h1 className='uk-text-bold'>Hoarding League of Legends data since 2017</h1>
        <p className='uk-text-large'>We&apos;ve served <strong className='uk-text-emphasis'>
          {Math.round(requests / 1000000)} million
        </strong> requests, equating to <strong className='uk-text-emphasis'>
          {Math.round(bytes / 1000000000)} GB
        </strong> of data over the past 30 days</p>
      </div>
      <div className="uk-width-1-2@s uk-width-2-5@m uk-text-center uk-text-right@m">
        <LazyLoad height={240}>
          <picture>
            <source srcSet={DarkLogo.src} media="(prefers-color-scheme: dark)" />
              <img style={{ height: '15rem', objectFit: 'contain' }} alt="CommunityDragon" src={LightLogo.src} className="uk-margin-small-right" />
          </picture>
        </LazyLoad>
      </div>
    </div>
  </UkContainer>
)

export default Container
