webpackJsonp([140],{254:function(e,t){e.exports=function(e){var t="primitive rsc_template",s="group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",a="property rsc_defaults op_defaults",r="params meta operations op rule attributes utilization",n="read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",i="number string",o="Master Started Slave Stopped start promote demote stop monitor true false";return{aliases:["crm","pcmk"],case_insensitive:!0,keywords:{keyword:r+" "+n+" "+i,literal:o},contains:[e.HASH_COMMENT_MODE,{beginKeywords:"node",starts:{end:"\\s*([\\w_-]+:)?",starts:{className:"title",end:"\\s*[\\$\\w_][\\w_-]*"}}},{beginKeywords:t,starts:{className:"title",end:"\\s*[\\$\\w_][\\w_-]*",starts:{end:"\\s*@?[\\w_][\\w_\\.:-]*"}}},{begin:"\\b("+s.split(" ").join("|")+")\\s+",keywords:s,starts:{className:"title",end:"[\\$\\w_][\\w_-]*"}},{beginKeywords:a,starts:{className:"title",end:"\\s*([\\w_-]+:)?"}},e.QUOTE_STRING_MODE,{className:"meta",begin:"(ocf|systemd|service|lsb):[\\w_:-]+",relevance:0},{className:"number",begin:"\\b\\d+(\\.\\d+)?(ms|s|h|m)?",relevance:0},{className:"literal",begin:"[-]?(infinity|inf)",relevance:0},{className:"attr",begin:/([A-Za-z\$_\#][\w_-]+)=/,relevance:0},{className:"tag",begin:"</?",end:"/?>",relevance:0}]}}}});
//# sourceMappingURL=140.140.js.map