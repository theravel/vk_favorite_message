(function(personId, buttonName) {
    var news = document.getElementById('l_nwsf')
    var menuItem = news.cloneNode(true)
    menuItem.id = 'favorite_msg'
    menuItem.firstChild.href = '/im?sel=' + personId
    menuItem.firstChild.lastChild.innerHTML = buttonName
    news.parentNode.insertBefore(menuItem, document.getElementById('l_msg'))
})(111, 'Кнопка')
