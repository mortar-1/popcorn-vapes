'use server'
import Link from 'next/link'
import { headers } from 'next/headers'
import { MenuItem } from '@mui/material'

export default async function NotFound() {
    const headersList = await headers()
    console.log("headersList: ", headersList)
    const domain = headersList.get('host')

    return (
        <div>
            <h2>Not Found </h2>
            <p>Could not find requested resource</p>
            <MenuItem>
            <Link href='/'></Link>
            </MenuItem>

        </div>

    )
}
