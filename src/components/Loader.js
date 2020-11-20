import spinner from '../img/spinner.gif'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={spinner} alt='Loading' />
            <hi>Fetching Data</hi>
        </div>
    )
}

export default Loader