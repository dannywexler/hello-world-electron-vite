import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/arya-blue/theme.css'
import { Button } from 'primereact/button';

import { useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)

    const increaseBy = (amount: number) => setCount(prev => prev + amount)

    return (
        <div className='flex'>
            <Button
                className='mr-2'
                label='+'
                onClick={() => increaseBy(2)}
            />
            {` Current count is: ${count}`}
        </div>
    )
}
