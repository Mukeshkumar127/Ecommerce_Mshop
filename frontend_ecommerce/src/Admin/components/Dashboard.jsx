import React from 'react'
import { Grid } from '@mui/material'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrdersTable from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={3}>
            <Grid size={{xs:12 , md:4}}>
              <div className='shadow-lg shadow-gray-400'>
                <Achivement/>
              </div>
            </Grid>

            <Grid size={{xs: 12, md: 8}}>
              <div className='shadow-lg shadow-gray-400'>
                <MonthlyOverview/>
              </div>
            </Grid>

            <Grid size={{xs:12, md:6}}>
              <div className='shadow-lg shadow-gray-400'>
                <OrdersTable/>
              </div>
            </Grid>

            <Grid size={{xs:12, md:6}}>
              <div className='shadow-lg shadow-gray-400'>
                <ProductTableView/>
              </div>
            </Grid>

        </Grid>
    </div>
  )
}

export default AdminDashboard