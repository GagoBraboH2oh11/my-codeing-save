import Frase from "../frase/Frase"
import stylehello from "./helloworld.css"
function HelloWorld() {
    return(
        <div className={stylehello.contenthello}>
            <h1>Hello, World</h1>
            <Frase/>
        </div>
    )
}

export default HelloWorld