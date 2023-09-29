import styled from "@emotion/styled";

export const ImagenD = styled.div`
    display: flex;     
    justify-content: center;
    align-items: center;
`;

export const Buttons = styled.div`
    display: flex;     
    justify-content: center;
    margin-top: 30px;

    & > button {
        min-width: 225px; 
        flex-basis: 0;
        margin-right: 18px; 
    }
    & > button:last-child {
        margin-right: 0; 
    }
`;

export const Custom = styled.div`

}
`;
