webpackJsonp([5],{354:function(e,n){e.exports=function(e){var n="for let if while then else return where group by xquery encoding versionmodule namespace boundary-space preserve strip default collation base-uri orderingcopy-namespaces order declare import schema namespace function option in allowing emptyat tumbling window sliding window start when only end when previous next stable ascendingdescending empty greatest least some every satisfies switch case typeswitch try catch andor to union intersect instance of treat as castable cast map array delete insert intoreplace value rename copy modify update",a="false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute",s={begin:/\$[a-zA-Z0-9\-]+/},t={className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},i={className:"string",variants:[{begin:/"/,end:/"/,contains:[{begin:/""/,relevance:0}]},{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]}]},r={className:"meta",begin:"%\\w+"},c={className:"comment",begin:"\\(:",end:":\\)",relevance:10,contains:[{className:"doctag",begin:"@\\w+"}]},o={begin:"{",end:"}"},l=[s,i,t,c,r,o];return o.contains=l,{aliases:["xpath","xq"],case_insensitive:!1,lexemes:/[a-zA-Z\$][a-zA-Z0-9_:\-]*/,illegal:/(proc)|(abstract)|(extends)|(until)|(#)/,keywords:{keyword:n,literal:a},contains:l}}}});