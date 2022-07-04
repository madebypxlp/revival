import React, { FunctionComponent, useState } from 'react'
import styles from './VideoHero.module.scss'
import IVideoHero from './VideoHero.interface'
import Video from '@components/ui/VideoComponent/VideoComponent'
import Modal from '@components/ui/Modal'
import RImage from '@components/ui/Image/Image'
import Image from 'next/image'
import Button from '@components/ui/Button/Button'
import { ModalContent } from '@components/ui/Modal/Modal'

const VideoHeroModule: FunctionComponent<{ module: IVideoHero }> = ({
  module,
}) => {
  const { image, logo, youtubeId, videoName } = module

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className={`${styles.root} `}>
      <div className="container md:min-h-[62rem]">
        <div className="md:default-grid">
          <div className="col-span-6">
            <RImage
              image={image}
              className={styles.heroImage + ' overflow-hidden rounded-br-200'}
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center items-center">
            {logo?.sourceUrl && (
              <Image
                alt={logo.altText}
                src={logo.sourceUrl}
                width="686"
                height="138"
                objectFit="contain"
              />
            )}
            {youtubeId && (
              <Button
                className="mt-20"
                variant="large"
                color="yellow"
                type="default"
                onClick={(e) => {
                  e.preventDefault()
                  setModalOpen(true)
                }}
              >
                Watch Video
              </Button>
            )}
          </div>
        </div>
      </div>
      {youtubeId && (
        <Modal
          title={videoName}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <ModalContent>
            <Video source={youtubeId} />
          </ModalContent>
        </Modal>
      )}
    </div>
  )
}

export default VideoHeroModule
