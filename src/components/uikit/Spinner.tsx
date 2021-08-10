import React from 'react'
import { propClass } from '@utilities/prop-class'
import { propString } from '@utilities/prop-string'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface IProps extends DivProps {
  ratio?: number,
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'muted',
}

const UkSpinner: React.FC<IProps> = ({ ratio = 1, color, className, ...props }) => (
  <div
    {...props}
    uk-spinner={propString({ ratio })}
    className={`uk-button${propClass(className, {
      'uk-text-primary': color === 'primary',
      'uk-text-secondary': color === 'secondary',
      'uk-text-success': color === 'success',
      'uk-text-warning': color === 'warning',
      'uk-text-danger': color === 'danger',
      'uk-text-muted': color === 'muted',
    })}`}
  />
)

export default UkSpinner