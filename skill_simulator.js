var skills= {
    mole: {
        BasicLv: [     [1,2,3,4],
							[4,10,16,200],
							[6,12,18,24],
							[32,40,200,200],
							[10,20,30,40],
							[200,200,200,200],
							[200,200,200,200],
							[200,200,200,200]
               		],
        ALv :[	[3,9,15,21],
					[5,11,17,23],
					[7,13,19,25],
					[9,15,21,27],
               	    [16,20,24,200],
					[20,24,28,32],
					[24,27,30,33],
					[35,40,45,200]
              ],
        BLv :[	[3,9,15,21],
					[5,11,17,23],
					[7,13,19,25],
					[9,15,21,27],
               	    [16,20,24,200],
					[20,24,28,32],
					[24,27,30,33],
					[35,40,45,200]
               ],
        BasicReq : [	[0,1,2,3],
							[1,2,3,0],
							[2,4,6,8],
							[6,10,0,0],
							[2,4,6,8],
							[0,0,0,0],
							[0,0,0,0],
							[0,0,0,0]
                     ],
        AReq : [		[0,1,2,3],
                 	        [1,3,5,7],
                 	        [2,4,6,8],
                 	        [3,5,7,9],
                 	        [4,8,12,0],
                 	      	[12,15,18,21],
                 	      	[15,18,21,24],
                 	      	[23,25,27,0]
                   ],
        BReq : [		[0,1,2,3],
                 	        [1,3,5,7],
                 	        [2,4,6,8],
                 	        [3,5,7,9],
                 	        [4,8,12,0],
                 	      	[12,15,18,21],
                 	      	[15,18,21,24],
                 	      	[23,25,27,0]
                    ],
        BasicName : [['nAttack1','nAttack2','nAttack3','nAttack4'],
                     ['','','',''],
                     ['','','',''],
                     ['','','',''],
                     ['','','',''],
                     ['','','',''],
                     ['','','',''],
                     ['','','','']]
    }


};


var skillCLv = [	[55,55,55,55],
                   	[60,60,60,60],
                   	[70,70,70,70],
                   	[75,75,75,75],
                   	[90,90,90,90],
                   	[100,100,100,100],
                   	[110,110,110,110],
                   	[120,120,120,120]
                   ];

var skillCReq = [		[0,0,0,0],
                    		[1,1,1,1],
                    		[3,3,3,3],
                    		[4,4,4,4],
                    		[7,7,7,7],
                    		[9,9,9,9],
                    		[11,11,11,11],
                    		[13,13,13,13]
                    ];

                    
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var hook;
var lvl=2,passedlvl, Basicskill= [0,0,0,0,0,0,0,0], Askill=[0,0,0,0,0,0,0,0], Bskill=[0,0,0,0,0,0,0,0], Cskill=[0,0,0,0,0,0,0,0];

function stringToIntArray(string,array){

    if(string){
        for(var i=0;i < string.length;i++){
            var val = parseInt(string.charAt(i),10);
            if(val){
                array[i]=val;
            }
        } 
    }
}


function isValid(){
};

function makeTable(tree){
    var html ='<table border="0"  width="300" >'; 
    for(var i = 0;i < 8;i++){
        html+='<tr>';
        for(var j = 0; j < 4; j++){
            html+='<td>';
            if(skills['mole'][tree+'Lv'][i][j] !=200){
                //html+=skills['mole'][tree+'Lv'][i][j];
               
                var image='https://raw.github.com/KingKedama/12tails-skill-simulator/master/mole/th_'+skills['mole'][tree+'Name'][i][j];
                if(image){
                    html+='<img scr="'+image+'"></img>';
                }
            }
            html+='</td>';
        }
        html+= '<tr>'
    }
    html+='</table>';
    return html;

}
$(document).ready(function(){
    hook = $('#skill_simulator_hook');
    hook.html('banamana');
    
    //init from read in varaibles
    var htmlvars=getUrlVars();
	if(htmlvars['lvl']){
        passedlvl=parseInt(htmlvars['lvl'],10);//not used, but makes urls pretty, and we might as well check that it's right.
	}
    stringToIntArray(htmlvars['basic'],Basicskill);
    stringToIntArray(htmlvars['a'],Askill);
    stringToIntArray(htmlvars['b'],Bskill);
    stringToIntArray(htmlvars['c'],Cskill);
	//generate the initial layout html
	var html =''; 
    html += makeTable('Basic');
	hook.html(html);
});
//addOnloadHook();