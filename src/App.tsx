import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/arya-blue/theme.css'
import { Button } from 'primereact/button';

import { myActions, myState } from './main';

export default function App() {
    const count = myState(state => state.count)

    // const increaseBy = myActions(actions => actions.increaseBy)
    const actions = myActions(actions => actions)

    return (
        <div className='flex'>
            <Button
                className='mr-2'
                label='+'
                onClick={() => {
                    actions.increaseBy(2)
                    actions.nested.nestedToggle(true)
                }}
            />
            {'Current count is: ' + count}
        </div>
    )
}
