/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var native=true;;
var $navi;
var slider;
var map=false;

var app = {
		
	
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
    	if(!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
    		native = false;
    		setTimeout(function() { app.onDeviceReady(); }, 500); //this is the browser
      	} else {
      	   	document.addEventListener("deviceready", app.onDeviceReady, false);
      	}
        
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        slider = new PageSlider($(".app"));
        $('.app').html('');
        $navi = $('#navi');
        
        //route to home
        route();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

$(window).on('hashchange', route);

// Basic page routing
function loadPageTemplate(hash,data,template) {
	if(!template) template = hash.substr(1);
	
	tmpl = Templates[template];
	
		var page = Mustache.render(tmpl,data);
		id=hash.substr(1);
		var $page=$(page);
	    $page.attr('id',id);
		
		console.log(['data',data]);
		if(hash==='#debug') slider.slidePageFrom($page,'left');
		else slider.slidePage($page);
		pageEnter($page);
	
}

function route(event) {
	console.log('route');
    var page,
    	id,
        hash = window.location.hash;
    if(hash==='') hash='#home';
    
	$page=$(hash);
	pageLeave(slider.getCurrentPage());
    if($page.length==0)
    {	var data;
		if (hash === "#debug") {
	        
			data={img: "buildbot.jpg", name: "DEBUG", description: "Debuggy debuggy buggity bug."};
	
	    } else if (hash === "#details") {
	
			data={img: "medibot.jpg", name: "Medi Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."};
	
	    } else if (hash === "#details2") {
	
			data={img: "ripplebot.jpg", name: "Ripple Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."};
	
	    }
	    else {
			data={};

	    }
	    loadPageTemplate(hash,data);
	}
    else
	{
		if(hash==='#debug') slider.slidePageFrom($page,'left');
		else slider.slidePage($page);
		pageEnter($page);
	}
}

function pageLeave(page)
{	console.log(['page leave',page]);
	if(!page || typeof page === 'undefined') return;
	id=page.attr('id');
	if(id=='home')
	{	$navi.find('.debug').remove();
		
	}
}

function pageEnter(page)
{	if(typeof page === 'undefined') return;
	
	id=page.attr('id');
	if(id=='home')
	{	$navi.prepend('<a href="#debug" class="topcoat-button debug left">Debug</a>');
		
		
	}
	else if(id=='debug')
	{	
	
		
	}
}
// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}
