import React, { useState } from 'react';


const Dropdown = ({title, description}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="dropdown" >
            <div className="header-dropdown">
                <div className="dropdown-title">{title}</div>
                <div className={`arrow-dropdown ${open}`} onClick={() => setOpen(!open)}>
                    <img src="./assets/logo/arrow_down.png" alt="Ouvrir la liste" />
                </div>
            </div>
            {
                open && <div className="dropdown-description">{description}</div>
            }
        </div>
    );
};

export default Dropdown;