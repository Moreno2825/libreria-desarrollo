import styled from "@emotion/styled";

export const Container = styled.div`
    height: 100%;
    display: flex;
    margin: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const DetailsContiner = styled.div`
 & div{
    text-overflow: ellipsis;
    text-align: center;
    width: 200px;
 }
 
 .NameStyle{
    font-size: 14px;
    font-weight: 600;
    text-overflow: ellipsis;
 }

 .AuthorStyle{
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;
    color: #2d3648;
 }
`;

export const PriceIconContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: #2d3648;
`;