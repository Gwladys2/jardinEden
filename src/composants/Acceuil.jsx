
import "../css/main.css"
import photo from "../assets/photo_acceuil.png"

function Acceuil(){
    const ligneStyle = {
        width: '1200px',
        height: '5px',
        backgroundColor: '#521248',
        align:'center',
        marginTop:50,
        marginLeft:150
    };

    return(
        <div>
            <div className={"acceuil"}>
                <img src={photo} className={""}/>
                <h1 className={"text-5xl mt-8 text-[#521248]"}>Présentation de l'école</h1>
                <div style={ligneStyle}>_</div>
            </div>

        </div>
    )
}
export default Acceuil
