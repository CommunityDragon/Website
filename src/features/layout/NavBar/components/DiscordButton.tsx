import UkButton from "@components/uikit/Button"
import DarkDiscord from "@public/icons/discord-white.png"
import LightDiscord from "@public/icons/discord.png"

import styles from "./style.module.scss"

/**
 * discord button component
 */
const DiscordButton: React.FC = () => (
  <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/rZQwuek" className="uk-padding-remove-right">
    <UkButton className={`uk-padding-small uk-padding-remove-vertical ${styles.highlight_button}`}>
      <picture>
        <source srcSet={DarkDiscord.src} media="(prefers-color-scheme: dark)" />
        <img alt="Discord" src={LightDiscord.src} height="20" width="20" className="uk-margin-small-right" />
      </picture>
      <span className={styles.highlight_button_text}>Discord</span>
    </UkButton>
  </a>
)

export default DiscordButton