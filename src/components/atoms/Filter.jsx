import PropTypes from 'prop-types'
const Filter = ({listvalue, title,src,imgclassName, type='checkbox', listname, ...rest}) => {
  return (
    <div className='flex gap-3 py-1'>
      <input type={type} className='' {...rest} name={listname} value={listvalue} />
      <p className='text-cfour'>{title}</p>
      <img src={src} alt="" className={imgclassName}/>
    </div>
  )
}

Filter.propTypes = {
    listvalue:PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string,
    listname: PropTypes.string,
    src: PropTypes.string,
    imgclassName: PropTypes.string,
}
export default Filter
