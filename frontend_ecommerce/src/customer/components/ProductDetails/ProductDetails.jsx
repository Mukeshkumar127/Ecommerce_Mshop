'use client'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Grid, Box } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';
import { mens_kurta } from '../../../Data/mens_kurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsById } from '../../../State/Product/Action';
import { addItemToCart } from '../../../State/Cart/Action';

const product = {
  name: '',
  price: '',
  href: '',
  breadcrumbs: [
  
  ],
  images: [
    
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const {products} = useSelector(store=>store);


  const handleAddToCart = ()=>{
    const data = {productId:params.productId,size:selectedSize.name}
    console.log("data.... ",data);
    
    dispatch(addItemToCart(data));
    navigate("/cart")
  }

  useEffect(()=>{
    const data = {productId: params.productId}
    dispatch(findProductsById(data))
  },[params.productId])

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        
        
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

        <div className="flex flex-col items-center">
          <div className='overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]'>
            <img
              src={products?.product?.imageUrl}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-wrap space-x-5 justify-center">
            {product.images.map((item)=> 
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
              <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover object-center"
              />
            </div> )}           
          </div>
          
        </div>


        <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="lg:col-span-2">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
              {" "}
              {products.product?.brand}
            </h1>
            <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>
              {products.product?.title}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>

            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
              <p className='font-semibold'>{products.product?.discountedPrice}</p>
              <p className='opacity-50 line-through'>{products.product?.price}</p>
              <p className='text-green-600 font-semibold'>66% Off</p>
            </div>

            <div className="mt-6">
              <div className='flex items-center space-x-3'>
              <Rating name="read-only" value={5.5} readOnly />
              <p className='opacity-50 text-sm'>56540 Ratings</p>
              <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>3870 Reviews</p>
              </div>
            </div>

            <form className="mt-10">

              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ checked }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer text-gray-900 shadow-xs'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase sm:flex-1 sm:py-6',
                            checked ? 'bg-gray-400 text-white' : 'bg-white hover:bg-gray-200'
                          )
                        }
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <Button
              onClick={handleAddToCart}
               variant="contained" sx={{px:"2rem", py:"1rem",bgcolor:"#9155fd", "&:hover":{ bgcolor: "#7e3ff2"},"&:active": {bgcolor: "#6b2de8" }}}>

                Add To Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
          
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
        </section>

        
        <section>
          <h1 className='font-semibold text-lg pb-4'>Recent Review & Rating</h1>

          <div className='border p-5'>
            <Grid container spacing={7}>
              
              <Grid size={7}>
                <div className='space-y-5'>
                  {[1].map((item)=> <ProductReviewCard />)}
                </div>
              </Grid>

              <Grid size={5}>
                <h1 className='text-xl font-semibold pb-2'>Product Ratings</h1>

                <div className='flex items-center space-x-3'>
                  <Rating value={4.6} precision={.5} readOnly/>
                  <p className='opacity-60'>54890 Ratings</p>
                </div>

                <Box className="mt-5 space-y-3">
                  <Grid container alignItems="center" gap={2}> 
                    <Grid size={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid size={7}>
                      <LinearProgress sx={{bgcolor:"#d0d0dd0", borderRadius:4, height:7}} variant='determinate' value={55} color='success' />
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}> 
                    <Grid size={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid size={7}>
                      <LinearProgress sx={{bgcolor:"#d0d0dd0", borderRadius:4, height:7}} variant='determinate' value={40} color='success' />
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}> 
                    <Grid size={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid size={7}>
                      <LinearProgress sx={{bgcolor:"#d0d0dd0", borderRadius:4, height:7, color:"yellow"}} variant='determinate' value={25}  />
                    </Grid>                    
                  </Grid>

                  <Grid container alignItems="center" gap={2}> 
                    <Grid size={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid size={7}>
                      <LinearProgress sx={{bgcolor:"#d0d0dd0", borderRadius:4, height:7}} variant='determinate' value={20} color='warning' />
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center" gap={2}> 
                    <Grid size={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid size={7}>
                      <LinearProgress sx={{bgcolor:"#d0d0dd0", borderRadius:4, height:7}} variant='determinate' value={10} color='error' />
                    </Grid>
                  </Grid>

                  
                </Box>
              </Grid>

            </Grid>
            
          </div>
        </section>
         
      </div>
    </div>
  )
}


