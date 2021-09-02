const canThrow = (distance) => {
  return (speed) => ({
    throw: () => {
      return `The battle robot throws the spear ${distance} yards at ${speed} miles per hour!`
    }
  })
}

const canDance = (name) => {
  return () => ({
    sambar: () => {
      return `${name} can samba!`
    }
  })
}