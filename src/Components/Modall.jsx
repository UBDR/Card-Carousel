import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
function Modall(props) {

    function handleSubmit(e) {
        e.preventDefault()
        const newCard =
        {
            "card_name": e.target[0].value,
            "card_last_four": '**** **** **** ' + e.target[1].value,
            "expiry": e.target[2].value,
            "color": e.target[3].value,
            "spend_limit": e.target[4].value,

        }

        props.setCardProps(currentValue => [...currentValue, newCard]);
        props.toggleModal(false);

    }
    return (
        <div className='modalContainer'>
            <Modal isOpen={props.openState} >
                <ModalHeader>
                    Card Details
                </ModalHeader>
                <ModalBody className='modalBox'>
                    <form className='form' onSubmit={handleSubmit}>
                        <label>
                            <div style={{ display: 'inline-flex' }}>
                                <strong style={{ marginRight: '10px' }}>Name:</strong>
                                <input
                                    type="text"
                                    placeholder='Enter Card Holder Name'
                                    name="name"
                                />
                            </div>
                            <br />
                            <br />

                            <div style={{ display: 'inline-flex' }} >
                                <strong style={{ marginRight: '10px' }}> Card Number:</strong>
                                <input
                                    type="number"
                                    placeholder='Enter Card Number'
                                    name="number"
                                />
                            </div>
                            <br />
                            <br />

                            <div style={{ display: 'inline-flex' }}>
                                <strong style={{ marginRight: '10px' }} >Expiry:</strong>
                                <input
                                    type="text"
                                    placeholder='MM/YYYY'
                                    name="expiry"
                                />
                            </div>

                            <br />
                            <br />

                            <div style={{ display: 'inline-flex'}}>
                                <strong style={{ marginRight: '10px' }} >Color:</strong>
                                <input type="text"
                                    placeholder='Enter Color of the Card'
                                    name='color'
                                />
                            </div>

                            <br />
                            <br />

                            <div style={{ display: 'inline-flex' }}>
                                <strong style={{ marginRight: '10px' }}>Spend Limit:</strong>
                                <input type="text"
                                    placeholder='Enter Spend Limit'
                                    name='spend'
                                />
                            </div>

                            <div style=
                                {{ display: 'flex', justifyContent:'space-evenly', alignItems: 'center', marginTop: '20px' }}>
                                <input id='btn-submit' className='btn-smt' type="submit" value='Submit' />
                                <button id='btn-cancel' className='btn-smt' onClick={() => {
                                    props.toggleModal(false);
                                }}>Cancel</button>

                            </div>

                        </label>
                    </form>
                </ModalBody>
            </Modal>

        </div>
    )
}

export default Modall
