import { Ring } from "react-spinners-css"

function Loading() {
    return(
        <>
        <div style={{backgroundColor: "black", width: "160cap", height: "100cap" }}>
                <div style={{height: "500px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Ring size={150} />
                </div>
        </div></>
      )
}

export default Loading