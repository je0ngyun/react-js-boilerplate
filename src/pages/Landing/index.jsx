import React, { useState } from 'react'
import styled from 'styled-components'
import ThemeSwitch from '@components/ThemeSwitch'
import QueryBoundary from '@components/Error/QueryBoundary'
import useToast from '@hooks/useToast'
import usePopup from '@hooks/usePopup'
import SidebarItem from '@components/SidebarItem'

const StDiv = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`

const Landing = () => {
  const [curPart, setCurPart] = useState('파트1')
  const { fireToast } = useToast()
  const { openPopup } = usePopup()

  const handleToastFire = () => {
    fireToast('토스트 입니다.', 1500)
  }

  const handleItemClick = (target) => {
    setCurPart(target)
  }

  const handleOpenPopup = async () => {
    await openPopup({ render: <div>팝업내용 컴포넌트</div> })
  }

  return (
    <>
      <ThemeSwitch />
      <QueryBoundary loadingFallback={<>loading...</>}>
        <StDiv>{/* <Test /> */}</StDiv>
        <button onClick={handleToastFire}>Fire Toast</button>
        <button onClick={handleOpenPopup}>Open Popup</button>
        <div>
          <h1>sidebar Test</h1>
          <SidebarItem
            clickCb={handleItemClick}
            curPart={curPart}
            title="파트1"
          >
            <div>InnerLink</div>
            <div>InnerLink</div>
          </SidebarItem>
          <SidebarItem
            clickCb={handleItemClick}
            curPart={curPart}
            title="파트2"
          >
            <div>InnerLink</div>
            <div>InnerLink</div>
          </SidebarItem>
          <SidebarItem
            clickCb={handleItemClick}
            curPart={curPart}
            title="파트3"
            childPart={['파트4', '파트5']}
          >
            <div onClick={() => handleItemClick('파트4')}>
              InnerLink to part4
            </div>
            <div onClick={() => handleItemClick('파트5')}>
              InnerLink to part5
            </div>
          </SidebarItem>
        </div>
        <br />
        <div>{curPart}</div>
        <button onClick={() => setCurPart('파트2')}>파트변경 to 2</button>
        <button onClick={() => setCurPart('파트3')}>파트변경 to 3</button>
      </QueryBoundary>
    </>
  )
}

export default Landing
