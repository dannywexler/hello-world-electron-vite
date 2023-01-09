import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/arya-blue/theme.css'
import { Button } from 'primereact/button';
import {
    countActions,
    useCountState,
    useNestedState,
    wait,
} from './rematchStore';

export default function App() {
    const { currentCountValue } = useCountState()
    const nested = useNestedState()

    return (
        <div className='flex'>
            <Button
                className='mr-2'
                label='+'
                onClick={async () => {
                    // await wait(1000)
                    countActions.increment(5);
                }}
            />
            {` Current count is: ${currentCountValue}`}
            {` Nested item is: ${nested}`}
        </div>
    )
}
