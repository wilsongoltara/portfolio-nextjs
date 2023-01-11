export default function Card() {
  return (
    <div className='flex justify-center m-1'>
      <div className='bg-project1 bg-center bg-cover h-96'>
        <div className='flex flex-col justify-end items-center md:text-xl h-full text-black'>
          <h1 className='font-bold capitalize'>Trybetunes</h1>
          <p className='mb-2 leading-relaxed text-sm md:text-base'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            delectus error recusandae?
          </p>
          <button className='bg-gray-400 p-2 focus:outline-none hover:bg-gray-900 rounded'>
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}
