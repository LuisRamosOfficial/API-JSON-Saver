const  download = async() => {
    const url = document.querySelector('#url')
    console.log(url.value)
    await fetch(url.value).then((response) => {
        response.json().then((data) => {
            if (data.status && data.status == 404) {
                window.alert('An error occurred while trying to find the API');
            }
            else {
                
                var f = new File([JSON.stringify(data)], 'response.json', {
                    type: 'text/plain',
                });
                saveAs(f)
            }
            })
    })
}