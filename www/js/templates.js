// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine

Templates = {

  home :
    '<div id="home" class="page">' +
        '<div class="scroller">' +
            '<ul class="list">' +
                '<li class="topcoat-button"><a href="#details"><strong>Medi Bot</strong></a></li>' +
                '<li class="topcoat-button"><a href="#details2"><strong>Ripple Bot</strong></a></li>' +
            '</ul>' +
            '<div id="map-canvas"></div>' +
        '</div>' +
    '</div>',

 details :
    '<div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>',

 details2 :
    '<div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>',

 debug :
    '<div>' +
        '<div class="scroller">' +
        	'<h2>Accelerometer</h2>' +
            '<div class="accelerometer"></div>' +
            '<h2>GPS</h2>' +
            '<div class="gps"></div>' +
            '<button class="topcoat-button--cta geo">get position</button>' +
        '</div>' +
    '</div>',
}