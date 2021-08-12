import { FC, useRef, useEffect } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    <div ref={ref} className="inline-block h-8 w-8 rounded-full border-primary">
      <svg
        height="32"
        enableBackground="new 0 0 100 100"
        fill="#fff"
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50,5C25.187,5,5,25.187,5,50s20.187,45,45,45s45-20.187,45-45S74.813,5,50,5z M50,91.537   C27.097,91.537,8.463,72.903,8.463,50S27.097,8.463,50,8.463S91.537,27.097,91.537,50S72.903,91.537,50,91.537z" />
        <path d="m50.003 54.795c9.596 0 16.12-7.783 16.12-17.382 0-9.601-6.524-17.381-16.12-17.381-9.602 0-16.126 7.78-16.126 17.381 0 9.599 6.524 17.382 16.126 17.382z" />
        <path d="m63.022 53.654c-3.442 3.091-7.948 4.918-13.02 4.918-5.074 0-9.583-1.827-13.025-4.918-8.187 4.477-13.839 12.976-14.267 22.859 6.924 7.124 16.596 11.564 27.29 11.564s20.366-4.44 27.292-11.563c-0.428-9.884-6.083-18.383-14.27-22.86z" />
      </svg>
    </div>
  )
}

export default Avatar
