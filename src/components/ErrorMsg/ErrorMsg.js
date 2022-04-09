import './ErrorMSg.scss'

const ErrorMsg = ({ error }) => {
    return (
        <div className="error-container">
            <p className='error'>{error}</p>
        </div>
    )
}

export default ErrorMsg
