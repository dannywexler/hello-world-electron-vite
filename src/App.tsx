import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/arya-blue/theme.css'
import { Button } from 'primereact/button';

import { useSnapshot } from 'valtio';
import { store, setters } from './valtioStore'

export default function App() {
    const snap = useSnapshot(store)

    return (
        <div className='flex'>
            <Button
                className='mr-2'
                label='+'
                onClick={() => setters.increaseBy(2)}
            />
            {` Current count is: ${snap.count}`}
        </div>
    )
}
