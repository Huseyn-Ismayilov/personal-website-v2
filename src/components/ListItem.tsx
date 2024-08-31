import React from 'react'

interface ListItemProps {
  image: string
  title: string
  date: string
  corporate: string
  accomplishments?: string[]
}

const ListItem: React.FC<ListItemProps> = props => {
  return (
    <div className='flex md:gap-5 gap-3 relative attbc0 overflow-hidden'>
      <div className='sm:size-10 size-8 shrink-0 flex items-center justify-center'>
        <img src={props.image} alt='' />
      </div>
      <div className='grow'>
        <div className='flex sm:flex-row flex-col justify-between gap-1 sm:mb-1 mb-3'>
          <h3 className='text-lg font-bold whitespace-pre-wrap leading-tight'>
            {props.title}
          </h3>
          <span className='block text-md font-medium text-black/50 whitespace-nowrap'>
            {props.date}
          </span>
        </div>
        <h5 className='lg:text-base text-md text-black/50 font-medium'>{props.corporate}</h5>
        {props.accomplishments && (
          <ul className='list-disc ps-4 mt-2'>
            {props.accomplishments.map((item, index) => (
              <li key={index} className='text-gray-400 text-sm pb-1'>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='line absolute left-0 -right-[100px] bottom-0 h-[1px] border-b border-gray-200'></div>
    </div>
  )
}
export default ListItem
