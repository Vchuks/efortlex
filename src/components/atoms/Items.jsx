import pic1 from '../../assets/images/image 33.png'
import pic2 from '../../assets/images/img3.png'
import pic3 from '../../assets/images/image 32.png'
import pic4 from '../../assets/images/img7.png'
import pic5 from '../../assets/images/img8.png'
import pic6 from '../../assets/images/img9.png'
import star from '../../assets/images/rating1.png'

const Items = [
    {
        id:1,
        name: 'Canon Cmera EOS 2000, Black 10x zoom',
        pic:pic1,
        smallpic:[pic1,pic1,pic1,pic1,pic1,pic1],
        price:'998.00',
        rate: star,
        description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        viewlink:'details_page',
        offset:1128,
        free:true,
        order:'154',
        fulldescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
        brand:['Huawei','Apple','Large', 'Memory']
    },
    {
        id:2,
        name: 'GoPro HERO6 4K Action Camera - Black',
        pic:pic2,
        smallpic:[pic2,pic2,pic2,pic2,pic2,pic2],
        price:'998.00',
        rate: star,
        description:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
        viewlink:'details_page',
        offset:0,
        free:true,
        order:'154',
        fulldescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
        brand:['Samsung','All','Large', 'Memory']

    },
    {
        id:3,
        name: 'GoPro HERO6 4K Action Camera - Black',
        pic:pic3,
        smallpic:[pic3,pic3,pic3,pic3,pic3,pic3],
        price:'998.00',
        rate: star,
        description:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
        viewlink:'details_page',
        offset:0,
        free:true,
        order:'154',
        fulldescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
        brand:['Lenovo','All','Large', 'Memory']

    },
    {
        id:4,
        name: 'GoPro HERO6 4K Action Camera - Black',
        pic:pic4,
        price:'998.00',
        smallpic:[pic4,pic4,pic4,pic4,pic4,pic4],
        rate: star,
        description:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
        viewlink:'details_page',
        offset:0,
        free:true,
        order:'154',
        fulldescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
        brand:['Refurbished','All','Large', 'Memory']

    },
    {
        id:5,
        name: 'GoPro HERO6 4K Action Camera - Black',
        pic:pic5,
        price:'998.00',
        smallpic:[pic5,pic5,pic5,pic5,pic5,pic5],
        rate: star,
        description:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
        viewlink:'details_page',
        offset:1128,
        free:true,
        order:'154',
        fulldescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
        brand:['Samsung','Any','Large','Memory']

    },
    {
        id:6,
        name: 'GoPro HERO6 4K Action Camera - Black',
        pic:pic6,
        price:'998.00',
        rate: star,
        smallpic:[pic6,pic6,pic6,pic6,pic6,pic6],
        description:`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit `,
        viewlink:'details_page',
        offset:0,
        free:true,
        order:'154',
        fulldescription:`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
        brand:['Pocco','Any','Large','Apple', 'Memory']

    },
    
]

export default Items
