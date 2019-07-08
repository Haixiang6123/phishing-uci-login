const loginButton = document.querySelector('#login-button')

loginButton.addEventListener('click', function (event) {
    const loginStatus = document.querySelector('#login_status_span')
    const loginImage = document.querySelector('#login_image_span')
    loginButton.style.display = 'none'
    loginStatus.style.visibility = 'visible'
    loginImage.style.visibility = 'visible'
    setTimeout(function () {
        alert('You are hacked, haha !!!')
    }, 1000)
})