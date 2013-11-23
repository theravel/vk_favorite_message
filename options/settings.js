document.addEventListener("DOMContentLoaded", function(){
    chrome.extension.sendRequest(
        { method: 'vk_get_data' },
        function(data) {
            document.getElementById('name').value = data.name
            document.getElementById('link').value = data.link
            document.getElementById('save').addEventListener('click', function(){
                // save
                console.log(document.getElementById('link'))
                chrome.extension.sendRequest({
                    method: 'vk_set_data',
                    data: {
                        name: document.getElementById('name').value,
                        link: document.getElementById('link').value
                    }
                })
            }, false)
        }
    )
}, false)