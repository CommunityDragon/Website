import React from 'react'
import { propClass } from '@utilities/prop-class'
import Anchor, { AnchorProps } from '@components/common/Anchor'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface IProps {
  size?: 'small' | 'large',
  color?: 'default' | 'primary' | 'secondary' | 'danger' | 'text' | 'link',
}

const generateClassName = (className: any, size: any, color: any) => (
  `uk-button${propClass(className, {
    'uk-button-small': size === 'small',
    'uk-button-large': size === 'large',
    'uk-button-default': color === 'default',
    'uk-button-primary': color === 'primary',
    'uk-button-secondary': color === 'secondary',
    'uk-button-danger': color === 'danger',
    'uk-button-text': color === 'text',
    'uk-button-link': color === 'link',
  })}`
)

export const UkButton: React.FC<IProps & ButtonProps> = ({ size, color = 'default', className, ...props }) => (
  <button
    {...props}
    className={generateClassName(className, size, color)}
  />
)

export const UkLinkButton: React.FC<IProps & AnchorProps> = ({ size, color = 'default', className, ...props }) => (
  <Anchor className={generateClassName(className, size, color)} {...props} />
)

export default UkButton
