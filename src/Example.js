async function handleSubmit(searchValue, type) {
    let response
    let data

    switch (type) {
      case "character":
        response = await fetch(url + "amiibo/?character=" + searchValue)
        data = await response.json()
        console.log(data)
        if (!data.error) {
          setAmiiboData(data.amiibo)
        }
        else {
          alert("No search results found. Try something else.")
        }
        break;
      case "gameseries":
        response = await fetch(url + "amiibo/?gameseries=" + searchValue)
        data = await response.json()
        console.log(data)
        if (!data.error) {
          setAmiiboData(data.amiibo)
        }
        else {
          alert("No search results found. Try something else.")
        }
        break;
      case "amiiboseries":
        response = await fetch(url + "amiibo/?amiiboSeries=" + searchValue)
        data = await response.json()
        console.log(data)
        if (!data.error) {
          setAmiiboData(data.amiibo)
        }
        else {
          alert("No search results found. Try something else.")
        }
        break;
      default:
        break;
    }
  }