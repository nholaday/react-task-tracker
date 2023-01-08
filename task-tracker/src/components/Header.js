import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, description, showAdd, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {!showAdd ? (
        <Button color="green" text="Add" onClick={onAdd} />
      ) : (
        <Button color="grey" text="Hide Add" onClick={onAdd} />
      )}
    </header>
  );
}

Header.defaultProps = {
    description: "description",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// <h1 style={headingStyle}>
const headingStyle = {
    color: "red",
    backgroundColor: "black"
}

export default Header