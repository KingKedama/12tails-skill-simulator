var skillMolBasicLv = [     1,2,3,4,
							4,10,16,200,
							6,12,18,24,
							32,40,200,200,
							10,20,30,40,
							200,200,200,200,
							200,200,200,200,
							200,200,200,200
               		];
var skillMolALv =[	3,9,15,21,
					5,11,17,23,
					7,13,19,25,
					9,15,21,27,
               	    16,20,24,200,
					20,24,28,32,
					24,27,30,33,
					35,40,45,200
              ];
var skillMolBLv =[	3,9,15,21,
					5,11,17,23,
					7,13,19,25,
					9,15,21,27,
               	    16,20,24,200,
					20,24,28,32,
					24,27,30,33,
					35,40,45,200
               ];
var skillMolCLv = [	55,55,55,55,
                   	60,60,60,60,
                   	70,70,70,70,
                   	75,75,75,75,
                   	90,90,90,90,
                   	100,100,100,100,
                   	110,110,110,110,
                   	120,120,120,120
                   ];
var skillMolBasicReq = [	0,1,2,3,
							1,2,3,0,
							2,4,6,8,
							6,10,0,0,
							2,4,6,8,
							0,0,0,0,
							0,0,0,0,
							0,0,0,0
                     ];
var skillMolAReq = [		0,1,2,3,
                 	        1,3,5,7,
                 	        2,4,6,8,
                 	        3,5,7,9,
                 	        4,8,12,0,
                 	      	12,15,18,21,
                 	      	15,18,21,24,
                 	      	23,25,27,0
                   ];
var skillMolBReq = [		0,1,2,3,
                 	        1,3,5,7,
                 	        2,4,6,8,
                 	        3,5,7,9,
                 	        4,8,12,0,
                 	      	12,15,18,21,
                 	      	15,18,21,24,
                 	      	23,25,27,0
                    ];
var skillMolCReq = [		0,0,0,0,
                    		1,1,1,1,
                    		3,3,3,3,
                    		4,4,4,4,
                    		7,7,7,7,
                    		9,9,9,9,
                    		11,11,11,11,
                    		13,13,13,13
                    ];

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var hook;
var lvl=2, Basicskill= [0,0,0,0,0,0,0,0], Askill=[0,0,0,0,0,0,0,0], Bskill, Cskill;
$(document).ready(function(){
    hook = $('#skill_simulator_hook');
    hook.html('banamana');
    var htmlvars=getUrlVars();
	if(htmlvars['lvl']){
        lvl=parseInt(htmlvars['lvl'],10);
	};
    
	Basicskill=htmlvars['basic'];
	Askill=htmlvars['a'];
	Bskill=htmlvars['b'];
	Cskill=htmlvars['c'];
	
	//generate the initial layout html
	var html =''; 
	
});
//addOnloadHook();