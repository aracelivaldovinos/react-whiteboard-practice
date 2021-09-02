const dancer = (name) => {
  return () => ({
    samba: () =>{
      return `${name} sambas!`;
    },
    tango: () =>{
      return `${name} tangos`
    }    
  })
}



      