import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import catPicture from './images/cat.jpg'

const Modal = () => {
    const { isModalOpen, closeModal, imgSrc } = useGlobalContext();


    return (
        <div className={`${ isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`} >
            <div className='modal-container'>
                <img id="cat-pic" src={imgSrc} alt="cat-picture"></img>
                <button onClick={closeModal} className='close-modal-btn'>
                    <FaTimes></FaTimes>
                </button>
            </div>
        </div>
    )
}


export default Modal
