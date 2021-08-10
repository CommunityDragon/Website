import UkNavBar from "@components/uikit/NavBar"
import DarkLogo from "@public/icons/logo-white.png"
import LightLogo from "@public/icons/logo.png"

/**
 * logo component
 */
const Logo: React.FC = () => (
  <UkNavBar.Logo href='/' className='uk-navbar-item'>
    <picture>
      <source srcSet={DarkLogo.src} media="(prefers-color-scheme: dark)" />
      <img alt="CommunityDragon" src={LightLogo.src} height="50" width="50" />
    </picture>
  </UkNavBar.Logo>
)

export default Logo