
import { Children } from '../../hooks/useGlobalContext'



const PrimaryButton=({children}: Children)=> {
  return (
    <span className='btn btn-primary'>{children}</span>
  )
}

export default PrimaryButton