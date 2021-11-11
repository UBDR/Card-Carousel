import { useState } from "react";
import Modall from "./Modall";
function LeftSection(props) {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="button-bar">
                <div className='
            new-card-add'> Add New Card
                    <button className='add-card' onClick={() => {
                        setOpen(true);
                    }}>+</button>

                </div>
            </div>
            {
                open &&
                <Modall
            
                    openState={open}
                    toggleModal={setOpen}
                    setCardProps={props.setCardProps}
                />
            }
        </div>


    )
}

export default LeftSection
