import type { InferGetStaticPropsType } from 'next'
import ComponentRenderer from '@components/ui/ComponentRenderer/ComponentRenderer'
import { PageInterface } from 'framework/wordpress/interfaces/page'
import { Layout } from '@components/common'
import { useIsMobile } from '@commerce/utils/hooks'

export default function Pages({}: InferGetStaticPropsType<PageInterface>) {
  return null
}

Pages.Layout = function getLayout() {
  const isMobile = useIsMobile()
  return (
    <>
      {true && process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <div className="devGrid w-full h-full container">
            <div className={'default-grid h-full'}>
              {Array(isMobile ? 2 : 12)
                .fill({})
                .map(() => {
                  return (
                    <div
                      className={'col col-span-1'}
                      key={new Date().getTime() + Math.random()}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      )}
      <ComponentRenderer />
    </>
  )
}
