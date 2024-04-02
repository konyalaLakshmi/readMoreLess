// Write your code here
import {useState} from 'react'

import {BgContainer, Heading, Para, Image, B} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [isShort, setShort] = useState(true)

  const onClickButton = () => {
    setShort(prev => !prev)
  }

  const displayText = isShort
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription

  return (
    <BgContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{displayText}</Para>
      {isShort ? (
        <B type="button" onClick={onClickButton}>
          Read More
        </B>
      ) : (
        <B type="button" onClick={onClickButton}>
          Read Less
        </B>
      )}
    </BgContainer>
  )
}

export default ReadMore
