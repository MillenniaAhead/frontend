import React from 'react';
import { AiOutlineHome, AiOutlineCalendar} from 'react-icons/ai';
import { BsTag, BsEmojiSmile, BsQuestionCircle} from 'react-icons/bs';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div>
                <AiOutlineHome/><br />
                <AiOutlineCalendar/> <br />
                <BsTag/><br />
                <BsEmojiSmile/>
            </div>
            <div>
            <BsQuestionCircle/>
            </div>
        </div>
    );
};

export default Sidebar;