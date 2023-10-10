import PropTypes from 'prop-types'

const Logo = ({src, className, alt}) => {
  return (
    <img src={src} className={className} alt={alt} />
  )
}

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    alt: PropTypes.string
}
export default Logo
