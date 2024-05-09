console.log('ddddddddddd')

(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'lander/mv/counters/first.min.js';
    document.head.appendChild(script);

    countersFirstStep({
        window,
        subId: '3q1smn64ltoaf',
        tpixid: '{tpixid}',
        ymc: '{ymc}',
        gua: 'G-5P1L4PCD3Q',
        pixid: '2212606788939628',
        yaMetricaParams: {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
        }
    });
})();


(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'lander/mv/counters/second.min.js';
    document.head.appendChild(script);

    countersSecondStep({
        window,
        gtagParams: [
            // { title: 'event', setting: 'Lead' }
        ],
        fbPixelParams: [
            // { title: 'track', setting: 'Lead' }
        ],
    });
})();