import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/arya-blue/theme.css'
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './rematchStore';
import { Dispatch, countActions } from './rematchStore'

export default function App() {
    const count = useSelector((state: RootState) => state.count.count)
    // const dispatch = useDispatch<Dispatch>()

    return (
        <div className='flex'>
            <Button
                className='mr-2'
                label='+'
                // onClick={() => dispatch.count.increment(13)}
                onClick={() => countActions.increment(5)}
            />
            {` Current count is: ${count}`}
        </div>
    )
}
