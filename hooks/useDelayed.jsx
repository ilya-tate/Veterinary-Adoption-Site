import React, {useEffect, useState} from 'react'

const useDelayed = (state, delay) => {
    const [render, setRender] = useState(state);

    useEffect(() => {
        const timer = setTimeout(() => setRender(state), delay);
        return () => clearTimeout(timer)
    }, [state, delay])

    return render
}

export default useDelayed