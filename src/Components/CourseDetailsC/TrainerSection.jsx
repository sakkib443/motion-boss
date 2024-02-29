
import img from '../../../public/img/ah.jpg'
const TrainerSection = () => {
    return (
        <div className='text-center shadow-md px-12 py-12'>
            <div className='flex justify-center'>
                <img className='w-40' src={img} alt="" />
            </div>
            <div className='my-2'>
                <p>Instuctor</p>
                <h1 className='text-3xl font-bold'>Ahsanullah Shaon</h1>
            </div>
        </div>
    );
};

export default TrainerSection;