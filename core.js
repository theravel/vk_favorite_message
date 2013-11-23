chrome.extension.sendRequest(
    { method: 'vk_get_data' },
    function(data) {
        var news = document.getElementById('l_nwsf')
        var menuItem = news.cloneNode(true)
        menuItem.id = 'favorite_msg'
        menuItem.firstChild.href = data.link
        menuItem.firstChild.lastChild.innerHTML = data.name
        news.parentNode.insertBefore(menuItem, document.getElementById('l_msg'))
    }
)