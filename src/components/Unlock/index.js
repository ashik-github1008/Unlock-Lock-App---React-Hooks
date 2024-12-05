// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  MainContainer,
  Img,
  Text,
  UnlockButton,
} from './styledComponents.js'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const changeLockType = () => {
    setLock(prevState => !prevState)
  }

  return (
    <AppContainer>
      <MainContainer>
        <Img
          src={
            isLocked
              ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
          }
          alt={isLocked ? 'lock' : 'unlock'}
        />
        <Text>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</Text>
        <UnlockButton onClick={changeLockType}>
          {isLocked ? 'Unlock' : 'Lock'}
        </UnlockButton>
      </MainContainer>
    </AppContainer>
  )
}

export default Unlock
