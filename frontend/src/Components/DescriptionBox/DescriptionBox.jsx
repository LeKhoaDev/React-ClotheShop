import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p> An Shop-Clothes website ia an online platform that facilitates the buying and
                    selling of products or services over the Intternet. It
                    serves as a virtual marketplace where businesses and individuals can showcase
                    their products, interact with customer, and coduct transactions without the need
                    for a physical presence. Shop-Clothes websites have gained immense popular due to their
                    convenience, accessibility, and the global reach they ofter.
                </p>
                <p>Shop-Clothes website typically display products os services along with detailed descriptions,
                    images, prices, and any avaiable variantions (e.g, sizes, colors).
                    Each product usually has its own dedicated page with relevant information.
                </p>
            </div>
        </div>
    )
}
