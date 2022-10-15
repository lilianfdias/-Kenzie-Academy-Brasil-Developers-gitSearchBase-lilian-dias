const params = new URLSearchParams(window.location.search)
const user = params.get('user')
requestHome(user)
requestRepository(user)