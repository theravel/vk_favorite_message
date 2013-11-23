(function() {
    if (!localStorage['name']) {
        localStorage['name'] = 'Кнопка'
    }
    if (!localStorage['link']) {
        localStorage['link'] = '/im?sel=1'
    }
    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        switch (request.method) {
            case 'vk_set_data':
                localStorage['name'] = request.data.name
                localStorage['link'] = request.data.link
                sendResponse()
                break
            case 'vk_get_data':
                sendResponse(localStorage)
                break
        }
    })
})()