import PropTypes from 'prop-types'

const Greeting = ({ name }) => {
  return <div>Hello {name}!</div>
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

Greeting.defaultProps = {
  name: ''
}

export default Greeting
