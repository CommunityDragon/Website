import React from 'react'
import { propClass } from '@utilities/prop-class'
import { propString } from '@utilities/prop-string'
import Anchor, { AnchorProps } from '@components/common/Anchor'

type LiProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
type UlProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
type NavProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface IComponents {
  Nav: React.FC<UlProps>
  NavItem: React.FC<LiProps & { active?: boolean }>
  Item: React.FC<DivProps>
  Logo: React.FC<AnchorProps>
  Left: React.FC<DivProps>
  Right: React.FC<DivProps>
  Center: React.FC<DivProps>
}

interface IProps extends NavProps {
  align?: 'left' | 'right' | 'center',
  mode?: 'click' | 'hover',
  delayShow?: number,
  delayHide?: number,
  boundary?: string,
  boundaryAlign?: boolean,
  offset?: number,
  dropbar?: boolean,
  dropbarMode?: boolean,
  duration?: number,
  transparent?: boolean,
}

const UkNavBar: React.FC<IProps> & IComponents = ({
  align = 'left',
  mode = 'click',
  delayShow = 0,
  delayHide = 800,
  boundary = 'window',
  boundaryAlign = false,
  offset = 0,
  dropbar = false,
  dropbarMode = false,
  duration = 200,
  transparent = false,
  className,
  ...props
}) => (
  <nav
    {...props}
    className={`uk-navbar uk-navbar-container${propClass(className, {
      'uk-navbar-transparent': transparent,
    })}`}
    uk-navbar={propString({
      align,
      mode,
      delayShow,
      delayHide,
      boundary,
      boundaryAlign,
      offset,
      dropbar,
      dropbarMode,
      duration,
    })}
  />
)

UkNavBar.NavItem = ({ active, className, ...props }) => (
  <li {...props} className={propClass(className, { 'uk-active': active })} />
)

UkNavBar.Nav = ({ className, ...props }) => (
  <ul {...props} className={`uk-navbar-nav ${className ?? ''}`} />
)

UkNavBar.Logo = ({ className, ...props }) => (
  <Anchor {...props} className={`uk-logo ${className ?? ''}`} />
)

UkNavBar.Item = ({ className, ...props }) => (
  <div {...props} className={`uk-navbar-item ${className ?? ''}`} />
)

UkNavBar.Left = ({ className, ...props }) => (
  <div {...props} className={`uk-navbar-left ${className ?? ''}`} />
)

UkNavBar.Center = ({ className, ...props }) => (
  <div {...props} className={`uk-navbar-center ${className ?? ''}`} />
)

UkNavBar.Right = ({ className, ...props }) => (
  <div {...props} className={`uk-navbar-right ${className ?? ''}`} />
)


export default UkNavBar