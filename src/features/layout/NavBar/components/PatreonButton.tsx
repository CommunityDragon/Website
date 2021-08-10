import Patreon from "@public/icons/patreon.png"
import UkButton from "@components/uikit/Button"

import styles from "./style.module.scss"

/**
 * discord button component
 */
const DiscordButton: React.FC = () => (
  <a target="_blank" rel="noreferrer noopener" href="https://www.patreon.com/communitydragon" className="uk-padding-remove-left uk-margin-small-left">
    <UkButton color='danger' className={`uk-padding-small uk-padding-remove-vertical ${styles.patreon} ${styles.highlight_button}`}>
      <img alt="Patreon" src={Patreon.src} height="20" width="20" className="uk-margin-small-right" />
      <span className={styles.highlight_button_text}>Support us</span>
    </UkButton>
  </a>
)

export default DiscordButton