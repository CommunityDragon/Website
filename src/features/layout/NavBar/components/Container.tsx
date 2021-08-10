import Logo from "./Logo"
import DiscordButton from "./DiscordButton"
import PatreonButton from "./PatreonButton"
import UkNavBar from "@components/uikit/NavBar"
import UkContainer from "@components/uikit/Container"
import Anchor from "@components/common/Anchor"

/**
 * container component
 */
const Container: React.FC = () => (
  <>
    <UkNavBar transparent className='uk-padding uk-padding-remove-vertical'>
      <UkNavBar.Left style={{ flexGrow: 1 }}>
        <Logo />
        <UkNavBar.Nav className="uk-visible@m">
          <UkNavBar.NavItem>
            <Anchor href="/">Home</Anchor>
          </UkNavBar.NavItem>
          <UkNavBar.NavItem>
            <Anchor href="/blog">Blog</Anchor>
          </UkNavBar.NavItem>
          <UkNavBar.NavItem>
            <Anchor href="/documentation">Docs</Anchor>
          </UkNavBar.NavItem>
        </UkNavBar.Nav>
      </UkNavBar.Left>
      <UkNavBar.Right>
        <UkNavBar.Nav>
          <UkNavBar.NavItem>
            <DiscordButton />
          </UkNavBar.NavItem>
          <UkNavBar.NavItem>
            <PatreonButton />
          </UkNavBar.NavItem>
        </UkNavBar.Nav>
      </UkNavBar.Right>
    </UkNavBar>
    <UkContainer size='expand' className="uk-padding-large uk-padding-remove-vertical uk-margin-small-top">
      <hr />
    </UkContainer>
  </>
)

export default Container