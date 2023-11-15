import Stylesay from './saymynamestyle.css'
function SayMyName(props) {
    return(

        <div className={Stylesay.conteiner_say}>
            <h3>Ola, {props.nome} voce nao esta cadastrado!</h3>
        </div>
        
    )
}

export default SayMyName