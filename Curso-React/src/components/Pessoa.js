function Pessoa (props) {
    return(
        <div>
            <h1>Nome: {props.nome}</h1>
            <p>idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    );
};


export default Pessoa