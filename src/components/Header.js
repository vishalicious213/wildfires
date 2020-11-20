import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return (
        <header className='header'>
            <Icon icon={locationIcon} className='icon' />
            <h1>Wildfire Tracker</h1>
            <Icon icon={locationIcon} className='icon' />
        </header>
    )
}

export default Header