import { ThreeDots  } from "react-loader-spinner";
import { createPortal } from "react-dom";

const modalPortal = document.querySelector('#modal-root');

export const Loader = props => {
    return (createPortal(
    <div className="Overlay">
        <ThreeDots 
            height="60" 
            width="60" 
            radius="9"
            color="#9d5f81" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>, modalPortal)
    )
}
