import { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import logo from './Images/brand-logo.png';
import visa from './Images/visa.png';
function Card({ name, number, expiry, color, spend }) {
    const [showCurrentCard, setShowCurrentCard] = useState(false)
    const style = {
        backgroundColor: color
    }
    const handleCardClick = (event) => {
        setShowCurrentCard(true)
        console.log('hello', event.target.id)
    }
    return (
        <div>
            <Modal isOpen={showCurrentCard} >
                <ModalHeader>
                    Card Details
                </ModalHeader>
                <ModalBody className='modalBox'>
                    <p>Name: {name}</p>
                    <p>Card Number: {number}</p>
                    <p>Expiry: {expiry}</p>
                    <p>Spend Limit: {spend}</p>
                    <button id='btn-cancel' className='btn-smt' onClick={() => {
                        setShowCurrentCard(false)
                    }}>Close</button>
                </ModalBody>

            </Modal>
            <div onClick={handleCardClick} style={style} className='cards'>
                <img src={logo} alt="logo" className='brand-logo' />
                <span className='card-holder-name'>{name || 'Ubaidur Rahman'}</span>
                <span className='card-number'>{number}</span>
                <div className='card-logo-container'>
                    <div className='card-expiry-container'>
                        <span className='card-expiry'>EXPIRY</span>
                        <span className='card-expiry-value'>{expiry}</span>
                    </div>
                    <img src={visa} alt="visa" className="card-logo" />
                </div>

            </div>

        </div>


    )
}

export default Card
