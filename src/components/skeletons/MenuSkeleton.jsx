import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MenuSkeleton() {
    return (
        <div style={{padding:'50px'}}>
            <Skeleton borderRadius={20} baseColor='gray' height={1600}/>
        </div>
    )
}

export default MenuSkeleton