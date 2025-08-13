import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate= useNavigate();
  return (
    <div onClick={()=> navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-gray-400 hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid size={6}>

                <div className='flex cursor-pointer'>

                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70" alt="" />

                    <div className='ml-5 space-y-2'>

                        <p>Men Slim Mid Rise Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className=' opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>

            <Grid size={2}>
                <p>₹1099</p>
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard
