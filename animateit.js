	var container;
			var camera, scene, renderer;
			var group;
			var targetRotation = 0;
			var targetRotationOnMouseDown = 0;
			var mouseX = 0;
			var mouseXOnMouseDown = 0;
			var windowHalfX = window.innerWidth / 2;

			$( document ).ready(function() {
			init();
			animate();
		});
			function init() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );

				$(container).attr('id', 'intro');
				var info = document.createElement( 'div' );
				container.appendChild( info );
				scene = new THREE.Scene();
				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 7000 );
				camera.position.set( 0, 150, 1100 );
				scene.add( camera );
				var light = new THREE.PointLight( 0xffffff, 1.4 );
				camera.add( light );
				group = new THREE.Group();
				group.position.y = 0;
				scene.add( group );
//         group.rotation.y=160;
        
//         group.rotation.x=170;
        group.rotation.z=190.63

		
				function addShape( shape, extrudeSettings, color, x, y, z, rx, ry, rz, s ) {
					
					// extruded shape
					var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
					var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: color} ) );
					mesh.position.set( x, y, z - 75 );
					mesh.rotation.set( rx, ry, rz );
					mesh.scale.set( s, s, s );
					group.add( mesh );
				}
			
				// firsthex
				var firsthexPts = [];
				let x=300; let y =300;

				firsthexPts.push( new THREE.Vector2(150, 0) );
				firsthexPts.push( new THREE.Vector2( 0, 150 ) );
				firsthexPts.push( new THREE.Vector2( 0, 450 ) );
				firsthexPts.push( new THREE.Vector2( 300, 600 ) );
				firsthexPts.push( new THREE.Vector2( 600, 450 ) );
				firsthexPts.push( new THREE.Vector2(600, 150 ) );
				firsthexPts.push( new THREE.Vector2( 450, 0));
				firsthexPts.push( new THREE.Vector2( 450, 0+45));

				// firsthexPts.push( new THREE.Vector2(450,75+30));
				firsthexPts.push( new THREE.Vector2(600-30, 150+15 ) );
				firsthexPts.push( new THREE.Vector2( 600-30, 450-15 ) );
				firsthexPts.push( new THREE.Vector2( 300, 600-30 ) );
				firsthexPts.push( new THREE.Vector2( 0+30, 450-15 ) );
				firsthexPts.push( new THREE.Vector2( 0+30, 150+14 ) );
				firsthexPts.push( new THREE.Vector2(150, 0+45) );		
        
        

				
				for( var i = 0; i < firsthexPts.length; i ++ ) firsthexPts[ i ].multiplyScalar( 0.85 );
				var firsthexShape = new THREE.Shape( firsthexPts );
				// Second Hex
        var secondhexPts = [];
        
        
				secondhexPts.push( new THREE.Vector2( 600+300, 450-300 ) );
				secondhexPts.push( new THREE.Vector2(600+300, 150-300 ) );
				secondhexPts.push( new THREE.Vector2(300+300, 0-300 ) );
				secondhexPts.push( new THREE.Vector2( 0+300, 150-300 ) );
				secondhexPts.push( new THREE.Vector2( 0+300, 450-300 ) );
				secondhexPts.push( new THREE.Vector2( 150+300, 600-300 ) );
				secondhexPts.push( new THREE.Vector2( 150+300, 600-300-45 ) );
        
        secondhexPts.push( new THREE.Vector2( 0+300+30, 450-300-15 ) );
				secondhexPts.push( new THREE.Vector2(0+300+30, 150-300+15 ) );
				secondhexPts.push( new THREE.Vector2(300+300, 0-300+30 ) );
				secondhexPts.push( new THREE.Vector2(600+300-30, 150-300+15 ) );
				secondhexPts.push( new THREE.Vector2( 600+300-30, 450-300-15 ) );
				secondhexPts.push( new THREE.Vector2( 450+300, 600-300-45 ) );        
				secondhexPts.push( new THREE.Vector2( 450+300, 600-300 ) );
				
				for( var i = 0; i < secondhexPts.length; i ++ ) secondhexPts[ i ].multiplyScalar( 0.85 );
				var secondhexShape = new THREE.Shape( secondhexPts );
				// Triangle
			
			
				var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
				// addShape( shape, color, x, y, z, rx, ry,rz, s );
				addShape( secondhexShape,  extrudeSettings, 0xffffff, -300, -100, 0, 0, 0, 0, 1 );
			
			
        
			
			
				var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
				// addShape( shape, color, x, y, z, rx, ry,rz, s );
				addShape( firsthexShape,  extrudeSettings, 0xffffff, -300, -100, 0, 0, 0, 0, 1 );
			
			
				//
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setClearColor( 0xf7514d );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				document.addEventListener( 'touchmove', onDocumentTouchMove, false );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			//
			function onDocumentMouseDown( event ) {
				event.preventDefault();
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
				document.addEventListener( 'mouseout', onDocumentMouseOut, false );
				mouseXOnMouseDown = event.clientX - windowHalfX;
				targetRotationOnMouseDown = targetRotation;
			}
			function onDocumentMouseMove( event ) {
				mouseX = event.clientX - windowHalfX;
				targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
			}
			function onDocumentMouseUp( event ) {
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}
			function onDocumentMouseOut( event ) {
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			}
			function onDocumentTouchStart( event ) {
				if ( event.touches.length == 1 ) {
					event.preventDefault();
					mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
					targetRotationOnMouseDown = targetRotation;
				}
			}
			function onDocumentTouchMove( event ) {
				if ( event.touches.length == 1 ) {
					event.preventDefault();
					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
				}
			}
			//
			function animate() {
				requestAnimationFrame( animate );
				render();
			}
			function render() {
				group.rotation.x += 0.05;
				renderer.render( scene, camera );
			}

