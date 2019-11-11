import { useState, useEffect} from 'react'

const useGetPets = ( url ) => {
  const [ pest, setPets ] = useState([])
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPets(data))
  }, [])
  return pest
}

export default useGetPets 