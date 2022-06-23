import React, { FunctionComponent } from 'react'
import styles from './AuthorRow.module.scss'
import IAuthorRow from './AuthorRow.interface'
import Button from '../../ui/Button/Button'
import Image from 'next/image'

const AuthorRowModule: FunctionComponent<any> = ({ module }) => {
  const { authorName, authorPosition, authorBioCopy, authorLink, disclaimer } =
    module
  console.log('NAME' + authorLink)

  const line = <div className={`h-1 bg-greyscale-4 ${styles.colSpan} mb-50`} />
  const point = <div className="bg-black rounded-full w-15 h-15 mr-5" />

  const showImage = false

  return (
    <div className={`${styles.root} container md:default-grid mb-100`}>
      {line}
      {showImage && (
        <div className="col-span-2 md:col-start-2 mb-20 md:mb-0 text-center md:text-left">
          <Image
            className="bg-blue-default rounded-full"
            width="159"
            height="157"
            src="/pugFace.png"
            alt=""
          />
        </div>
      )}
      <div
        className={`col-span-2 md:col-span-8 lg:-ml-15 ${
          showImage ? 'md:col-start-4' : 'md:col-start-3'
        }`}
      >
        {authorName && (
          <h4 className={` typo-h4 text-blue-default mb-10`}>
            Written by: {authorName}
          </h4>
        )}
        {authorPosition && (
          <p className="typo-large-paragraph mb-20">{authorPosition}</p>
        )}
        {authorBioCopy && (
          <p className="typo-large-paragraph mb-20">{authorBioCopy}</p>
        )}
        {authorLink && (
          <div className="text-center md:text-left">
            <Button
              variant="large"
              className="mb-50"
              color="yellow"
              type="default"
              link={authorLink}
            ></Button>
          </div>
        )}
      </div>
      {line}
      <div className={`${styles.colSpan} typo-feedback mb-60 `}>
        <span className="mr-30">
          Was this Helpful? We’d Love Your Feedback!
        </span>
        <div className="inline-flex items-center">
          {point}
          <span className="mr-10">0</span>
          {point}
          <span>0</span>
        </div>
      </div>
      <div className={`${styles.colSpan} typo-legal-text`}>{disclaimer}</div>
    </div>
  )
}

export default AuthorRowModule
