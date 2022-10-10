import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

export const store = proxy({
    count: 0
})
const unsub = devtools(store, { name: 'My Valtio store', enabled: true })

export const setters = {
    increaseBy: (amount: number) => store.count += amount
}
