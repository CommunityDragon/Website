import UkContainer from "@components/uikit/Container"
import Link from "next/link"

/**
 * not found page
 */
const NotFoundPage: React.FC = () => (
  <UkContainer size='small' className="uk-margin uk-margin-large-bottom">
    <div className='uk-text-center'>
      <h1 style={{ fontSize: "12rem" }}>500</h1>
      <h1>Oops... Seems like something broke.</h1>
      <span style={{ fontSize: '1.5rem' }} className="uk-text-light">
        Please inform us about it on <strong>
          <Link
            href="https://discord.gg/rZQwuek"
            target="_blank"
            rel="noreferrer noopener">
            Discord
          </Link>
        </strong>.
      </span>
    </div>
  </UkContainer>
)

export default NotFoundPage