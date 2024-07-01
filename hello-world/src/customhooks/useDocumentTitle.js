import {useEffect} from 'react'

function useDocumentTitle(value) {
    useEffect(() => {
      document.title =`${value}`
    }, [count])
    
}

export default useDocumentTitle
