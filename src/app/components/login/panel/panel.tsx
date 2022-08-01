import { FC } from 'react'
import { IPanel } from './panel.types'

const Panel: FC<IPanel> = ({ title, subTitle, buttonText, onButton }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <button className={'ghost button'} onClick={() => onButton()}>
        {buttonText}
      </button>
    </>
  )
}

export default Panel
