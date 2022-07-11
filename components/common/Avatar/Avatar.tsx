import { FC, useRef, useEffect } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'

interface Props {}

const Avatar: FC<Props> = (props) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const { userAvatar } = useUserAvatar()

  return (
    <div
      ref={ref}
      style={{ backgroundImage: userAvatar }}
      className="inline-block h-8 w-10 rounded-full border-2 border-primary hover: focus: transition linear-out duration-150"
    >
      {/* Add an image - We're generating a gradient as placeholder  <img></img> */}
    </div>
  )
}

export default Avatar
