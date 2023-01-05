import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, description }) => {
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
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