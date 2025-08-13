import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { mens_jeans } from '../../../Data/mens_jeans'
import { mens_shirt } from '../../../Data/mens_shirt'
import { womens_dress } from '../../../Data/womens_dress'
import { womens_top } from '../../../Data/womens_top'
import { womens_jeans } from '../../../Data/womens_jeans'

const HomePage = () => {
  return (
    <div>
        <MainCrosel/>
        <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel  data={mens_kurta} sectionName={"Men's Kurta"}/> 
            <HomeSectionCarosel  data={mens_shirt} sectionName={"Men's Shirt"}/> 
            <HomeSectionCarosel  data={mens_jeans} sectionName={"Men's Jeans"}/> 
            <HomeSectionCarosel  data={womens_dress} sectionName={"Women's Dress"}/> 
            <HomeSectionCarosel  data={womens_top} sectionName={"Women's Top"}/> 
            <HomeSectionCarosel  data={womens_jeans} sectionName={"Women's Jeans"}/> 
        </div>
    </div>
  )
}

export default HomePage