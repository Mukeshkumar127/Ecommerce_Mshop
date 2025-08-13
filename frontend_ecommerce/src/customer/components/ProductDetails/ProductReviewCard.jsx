import React from 'react'
import { Avatar, Grid, Box, Rating} from '@mui/material'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid size={1.2}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                        R
                    </Avatar>
                </Box>
            </Grid>
            <Grid size={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Ramm</p>
                        <p className='opacity-70'>April 5, 2025</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5} />
                <p>nice product</p>
            </Grid>

            <br />
            
            <Grid size={1.2}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                        M
                    </Avatar>
                </Box>
            </Grid>
            <Grid size={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Manoj</p>
                        <p className='opacity-70'>May 2, 2025</p>
                    </div>
                </div>
                <Rating value={5} name='half-rating' readOnly precision={.5} />
                <p>I like this product so much</p>
            </Grid>

            <br />

            <Grid size={1.2}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>
                        M
                    </Avatar>
                </Box>
            </Grid>
            <Grid size={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Monika</p>
                        <p className='opacity-70'>April 5, 2025</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5} />
                <p>Nice product, I love this product</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard