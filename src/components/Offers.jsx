import discount from '../assets/photos/discount.png'

function Offers() {

    return (
        <div className=' pt-6 flex h-44 w-full justify-center items-center shadow-2xl shadow-black'>
            <img src={discount} className='h-36 w-auto rounded-xl' alt="" />
        </div>
    )
}

export default Offers