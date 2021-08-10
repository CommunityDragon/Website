import React from 'react'
import { propClass } from '@utilities/prop-class'
import { propString } from '@utilities/prop-string'
import Anchor, { AnchorProps } from '@components/common/Anchor'

type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

interface IProps {
  name: string,
  ratio?: number,
  link?: boolean,
  button?: boolean
}

const UkIcon: React.FC<IProps & SpanProps & AnchorProps> = ({ name, ratio = 1, link, button, className, ...props }) => {
  const Component = props.href ? Anchor : 'span'

  return (
    <Component
      {...props}
      className={`uk-icon${propClass(className, {
        'uk-icon-button': button,
        'uk-icon-link': link,
      })}`}
      uk-icon={propString({
        icon: name,
        ratio,
      })}
    />
  )
}

export default UkIcon