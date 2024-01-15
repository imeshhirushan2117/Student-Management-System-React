import React from 'react'
import Table from '../../component/Table/Table'
import { Box } from '@mui/material'
import Search from '../../common/Search/Search';
export default function StudentView() {
    return (
        <>
            <Box sx={{ marginBottom: '30px'}}>
                <Search />
            </Box>
            <Box>
                <Table />
            </Box>
        </>
    )
}
