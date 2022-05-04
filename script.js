;(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const name = searchParams.get('name')
    const date1 = searchParams.get('date1')
    const date2 = searchParams.get('date2')
    let date1a = new Date(date1).toDateString()
    let date2a = new Date(date2).toDateString()
    console.log(name)
    document.getElementById('name1').innerHTML = name 
    document.getElementById('date1').innerHTML = date1a
    document.getElementById('date2').innerHTML = date2a
    //if(domName) {
      //domName.textContent = 'Thank you for your interest in renting from us, ' + name
    //}
  })()