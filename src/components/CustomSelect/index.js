import React from "react";
import { Select, Select2, Select3 } from "./index.style";
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';

const CustomSlect = ({ buttonText, onClick, type, disable}) => {
    return (
    <div>
        <a href="#">
        <Select onClick={onClick} type={type} disabled={disable}>
           <HomeIcon></HomeIcon>
            Home
        </Select>
        </a>
        <a href="#">
        <Select onClick={onClick} type={type} disabled={disable}>
           <BookIcon></BookIcon>
            Catalogos
        </Select>
        </a>
        <a href="#">
        <Select onClick={onClick} type={type} disabled={disable}>
           <PeopleIcon></PeopleIcon>
            Usuarios
        </Select>
        </a>
    </div>        
    );
};

export default CustomSlect;