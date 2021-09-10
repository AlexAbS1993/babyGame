type winPosition = {
  left: number
  right: number
  top: number
  bottom: number
}

type positionType = {
  left: number
  top: number
  height: number
  width: number
}
export function winCondition(position: positionType, winPosition: winPosition) {
  if (
    (position.left > winPosition.left &&
      position.left < winPosition.right &&
      position.top < winPosition.top &&
      position.top > winPosition.bottom) ||
    (position.left + position.width < winPosition.right &&
      position.left + position.width > winPosition.left &&
      position.top < winPosition.top &&
      position.top > winPosition.bottom) ||
    (position.left > winPosition.left &&
      position.left < winPosition.right &&
      position.top + position.height < winPosition.bottom &&
      position.top + position.height > winPosition.top) ||
    (position.left + position.width < winPosition.right &&
      position.left + position.width > winPosition.left &&
      position.top + position.height < winPosition.bottom &&
      position.top + position.height > winPosition.top)
  ) {
    return true
  }
  return false
}
