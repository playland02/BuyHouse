
function Alerts({ error, type }) {

    let color_component;

    if(type === 'error'){
        color_component = 'rgba(250, 51, 51, 0.821)'

    }else if(type === 'sucess'){
        color_component = 'rgba(119, 255, 85, 0.867)'
    }
    else{
        color_component = 'white'
    }

    const css = {
        backgroundColor: color_component,
        width: "50%",
        margin: "auto",
        padding: "1%",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight:"700"
    }

    return (
        <>
            <div>
                <p style={css}>{error}</p>
            </div >

        </>
    )
} export default Alerts