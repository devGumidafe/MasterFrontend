import { Container, IconButton, styled } from "@mui/material";

export const StyleContainer = styled(Container)`
display:flex;
flex-direction:column;
gap: 1rem;
padding: 2rem;

@media (min-width: 768px) {
    flex-direction:row;
}

`;

