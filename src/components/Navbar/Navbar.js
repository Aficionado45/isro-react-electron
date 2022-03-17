import styled from "styled-components";

function Navbar() {
    return (
        <NavbarWrapper>
            <Title>IIT Guwahati</Title>
            <RightPart>
                <a style={fontXL}>Home</a>
                <a style={fontXL}>Input</a>
            </RightPart>
        </NavbarWrapper>
    );
}

export default Navbar;

const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 90px 120px;
`;

const Title = styled.h1`
    font-size: 36px;
`;

const RightPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 64px;
`

const fontXL = {
    fontSize: "36px"
}