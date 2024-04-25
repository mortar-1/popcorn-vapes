import { Container } from '@mui/material'
import { ReactNode } from 'react'

export interface PageProps {
    children?: ReactNode;
};

export const Page = (props: PageProps) => {
    return (
        <Container maxWidth='md'>
            {props.children}
        </Container>
    )
}

export default Page;