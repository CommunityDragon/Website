import React from 'react'
import { propClass } from '@utilities/prop-class'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface IProps extends DivProps {
  size?: 'xsmall' | 'small' | 'large' | 'xlarge' | 'expand',
}

const UkContainer: React.FC<IProps> = ({ size, className, ...props }) => (
  <div
    {...props}
    className={`uk-container${propClass(className, {
      'uk-container-xsmall': size === 'xsmall',
      'uk-container-small': size === 'small',
      'uk-container-large': size === 'large',
      'uk-container-xlarge': size === 'xlarge',
      'uk-container-expand': size === 'expand',
    })}`}
  />
)

export default UkContainer