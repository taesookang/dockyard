import { Provider } from 'react-redux'
import {store} from './store'

interface Props {
    children: React.ReactNode
}

export const ReduxProvider: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store} >
            {children}
        </Provider>
    );
}
