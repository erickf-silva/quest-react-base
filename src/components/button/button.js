import './button.css'

const showLabel = (label) => {
    alert(`A label desse botão é ${(label)}`)
}

const Button = ({label}) => {
    return <button className='button' onClick={() => showLabel(label)}>{label}</button>
}

export default Button