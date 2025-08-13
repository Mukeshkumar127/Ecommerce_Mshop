import React from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard'

const Order = () => {
  return (
    <div className='px:5 lg:px-20'>
            <Grid size={9}>
                <div className='space-y-5 '>
                {[1,1,1,1,1].map((item)=> <OrderCard/>)}
                </div>                
            </Grid>

    </div>
    
  )
}

export default Order
