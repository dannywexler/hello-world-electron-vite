import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/arya-blue/theme.css'
import { Button } from 'primereact/button';

import { useStore } from './zustandStore'

export default function App() {
    const {count, increaseBy} = useStore()
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
