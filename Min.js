 (function() {
        window.load = function(url, containerId) {
            const iframeContainer = document.getElementById(containerId);
            const iframe = document.createElement('iframe');
            
            iframe.src = url;
            iframe.style.border = 'none';
            iframe.width = '100%';
            iframe.height = '100%';

            iframeContainer.appendChild(iframe);
        };
    })();
