webpackJsonp([150],{244:function(e,n){e.exports=function(e){var n="div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",a="false true",r=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],s={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},i={className:"string",begin:/(#\d+)+/},o={className:"number",begin:"\\b\\d+(\\.\\d+)?(DT|D|T)",relevance:0},t={className:"string",begin:'"',end:'"'},c={className:"function",beginKeywords:"procedure",end:/[:;]/,keywords:"procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,contains:[s,i]}].concat(r)},d={className:"class",begin:"OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",returnBegin:!0,contains:[e.TITLE_MODE,c]};return{case_insensitive:!0,keywords:{keyword:n,literal:a},illegal:/\/\*/,contains:[s,i,o,t,e.NUMBER_MODE,d,c]}}}});
//# sourceMappingURL=150.150.js.map