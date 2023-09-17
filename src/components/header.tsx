import Logo from '@/assets/react.svg'
import { cn } from '@/util/class-names'
import { useWindowScroll } from '@mantine/hooks'
import { useMemo } from 'react'

type Props = {}

export const Header = (props: Props) => {
  const [scroll] = useWindowScroll()

  const onScroll = useMemo(() => scroll.y >= 20, [scroll.y])

  return (
    <header
      className={cn(
        'bg-transparent p-10 transition duration-300',
        onScroll && 'fixed left-0 right-0 bg-white/80 backdrop-blur-md'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <img className="h-10 w-10" src={Logo} alt="Logo" />
          header
        </div>
      </div>
    </header>
  )
}
