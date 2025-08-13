import React, { useEffect } from 'react'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorE1Array = [...anchorEl];
    newAnchorE1Array[index] = event.currentTarget
    setAnchorEl(newAnchorE1Array);
  };
  const handleClose = (index) => {
    const newAnchorE1Array = [...anchorEl];
    newAnchorE1Array[index] = null
    setAnchorEl(newAnchorE1Array);
  };


  const dispatch = useDispatch();
  const {adminOrder} = useSelector(store=>store)

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder])

  const handleShipedOrder = (orderId) =>{
    dispatch(shipOrder(orderId))
    handleClose()
  }
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId))
    console.log("handle confirmed order ", orderId);
    
    handleClose()
  }
  const handleDeliveredOrder=(orderId)=>{
    dispatch(deliveredOrder(orderId))
    handleClose()
  }
  const handleDeleteOrder=(orderId)=>{
    console.log("deleting order ", orderId);
    
    dispatch(deleteOrder(orderId))
  }

  return (
    <div className='p-10'>
      <Card className='mt-2 bg-[#1b1b1b]'>
      <CardHeader title="All Orders" />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Update</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminOrder.orders?.map((item,index) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="" className=''>
                <AvatarGroup max={3} sx={{justifyContent: "start"}}>
                  {item.orderItems.map((orderItem)=><Avatar src={orderItem.product?.imageUrl}></Avatar>)}

                </AvatarGroup>
              </TableCell>

              <TableCell align='left' scope="row">
                {item.orderItems.map((orderItem)=> <p>{orderItem.product?.title}</p>)}
                {item.title}
              </TableCell>
              <TableCell align="left">{item._id}</TableCell>
              <TableCell align="left">{item.totalPrice}</TableCell>
              <TableCell align="left"><span
                className={`text-white px-5 py-2 rounded-full
                ${item.orderStatus === "CONFIRMED"?"bg-[#9da43c]":
                  item.orderStatus === "SHIPPED"?"bg-[#4141ff]":
                  item.orderStatus === "PLACED"?"bg-[#02B290]":
                  item.orderStatus === "PENDING"?"bg-[gray]":
                  "bg-[#025720]"
                }`}
              >{item.orderStatus}</span></TableCell>
              <TableCell align="left">
                <Button
                  id="basic-button"
                  aria-controls={`basic-menu-${item._id}`}
                  aria-haspopup="true"
                  aria-expanded={Boolean(anchorEl[index])}
                  onClick={(event)=>handleClick(event,index)}
                >
                  Status
                </Button>
                <Menu
                  id={`basic-menu-${item._id}`}
                  anchorEl={anchorEl[index]}
                  open={Boolean(anchorEl[index])}
                  onClose={()=>handleClose(index)}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={()=>handleConfirmedOrder(item._id)}>Confirmed Order</MenuItem>
                  <MenuItem onClick={()=>handleShipedOrder(item._id)}>Shipped Order</MenuItem>
                  <MenuItem onClick={()=>handleDeliveredOrder(item._id)}>Delivered Order</MenuItem>
                </Menu>
              </TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleDeleteOrder(item._id)} variant='outlined'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Card>
    </div>
  )
}

export default OrdersTable