function Boton (props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    const isEqual = valor => {
        return (valor === '=');
    };
    return (
        <div className={`contenedor-boton ${esOperador(props.children) ? "operador" : ""} 
         ${isEqual(props.children) ? "equal" : ""}`.trimEnd()} onClick={() => props.manejarClics(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;