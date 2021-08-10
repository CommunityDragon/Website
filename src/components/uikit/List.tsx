import { propClass } from "@utilities/prop-class"

type UlProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
type LiProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

interface IComponents {
  ListItem: React.FC<LiProps>
}

interface IProps extends UlProps {
  marker?: 'disc' | 'circle' | 'square' | 'decimal' | 'hyphen' | 'bullet',
  color?: 'muted' | 'emphasis' | 'primary' | 'secondary',
  size?: 'large' | 'collapse',
  divider?: boolean,
  striped?: boolean,
}

const UkList: React.FC<IProps> & IComponents = ({ marker, color, size, divider, striped, className, ...props }) => (
  <ul
    {...props}
    className={`uk-list${propClass(className, {
      'uk-list-disc': marker === 'disc',
      'uk-list-circle': marker === 'circle',
      'uk-list-square': marker === 'square',
      'uk-list-decimal': marker === 'decimal',
      'uk-list-hyphen': marker === 'hyphen',
      'uk-list-bullet': marker === 'bullet',
      'uk-list-muted': color === 'muted',
      'uk-list-emphasis': color === 'emphasis',
      'uk-list-primary': color === 'primary',
      'uk-list-secondary': color === 'secondary',
      'uk-list-large': size === 'large',
      'uk-list-collapse': size === 'collapse',
      'uk-list-divider': divider,
      'uk-list-striped': striped,
    })}`}
  />
)

UkList.ListItem = props => (
  <li {...props} />
)

export default UkList