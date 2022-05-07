import React from 'react'
import { StPopupContainer, StPopup } from './style'
import PropTypes from 'prop-types'

const Popup = React.forwardRef(
  ({ render, cancelButton, handleCancle, handleConfirm }, ref) => {
    return (
      <StPopupContainer>
        <StPopup ref={ref}>
          {render && <div>{render}</div>}
          <button onClick={handleConfirm}>확인</button>
          {cancelButton && <button onClick={handleCancle}>취소</button>}
        </StPopup>
      </StPopupContainer>
    )
  }
)

Popup.displayName = 'Popup'
Popup.propTypes = {
  render: PropTypes.node,
  cancelButton: PropTypes.bool,
  handleCancle: PropTypes.func,
  handleConfirm: PropTypes.func,
}

export default Popup
