import React from 'react'

import { CSSProperties} from "react";
import ClipLoader from "react-spinners/ClipLoader"
const override: CSSProperties = {
  display: "block",
  margin: "5rem auto",
};
import { useGlobalContext } from '../../hooks/useGlobalContext'

type Props = {}

const Spinner = (props: Props) => {
    const {isLoading}=useGlobalContext()!
  return (
    <ClipLoader

    loading={isLoading}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
    
  )
}

export default Spinner