import React from 'react'

interface ProfileProps {
  src: string
  size?: string
  className?: string
  active?: boolean // active prop'u artık isteğe bağlı olarak tanımlanıyor
}

const ProfilePhoto: React.FC<ProfileProps> = ({
  src,
  size,
  className,
  active = false
}) => {
  return (
    <div
      className={`${
        size == 'sm' ? 'w-[60px] h-[60px]' : 'w-[75px] h-[75px]' } relative border-4 rounded-full border-white shadow-lg`}
    >
      <img src={src} alt='' className='w-full' />
      {active && 
        <div className='absolute right-0.5 top-0.5 w-3 h-3 border border-white bg-green-600 rounded-full'></div>
      }
    </div>
  )
}

export default ProfilePhoto
