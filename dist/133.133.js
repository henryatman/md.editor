webpackJsonp([133],{262:function(e,r){e.exports=function(e){var r="exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure",n=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],t={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},a={className:"string",begin:/(#\d+)+/},s={begin:e.IDENT_RE+"\\s*=\\s*class\\s*\\(",returnBegin:!0,contains:[e.TITLE_MODE]},i={className:"function",beginKeywords:"function constructor destructor procedure",end:/[:;]/,keywords:"function constructor|10 destructor|10 procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:r,contains:[t,a]}].concat(n)};return{aliases:["dpr","dfm","pas","pascal","freepascal","lazarus","lpr","lfm"],case_insensitive:!0,keywords:r,illegal:/"|\$[G-Zg-z]|\/\*|<\/|\|/,contains:[t,a,e.NUMBER_MODE,s,i].concat(n)}}}});
//# sourceMappingURL=133.133.js.map