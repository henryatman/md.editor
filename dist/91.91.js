webpackJsonp([91],{303:function(e,n){e.exports=function(e){var n={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline interface annotation data sealed internal infix operator out by constructor super trait volatile transient native default",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},a={className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},i={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"},s={className:"subst",variants:[{begin:"\\$"+e.UNDERSCORE_IDENT_RE},{begin:"\\${",end:"}",contains:[e.APOS_STRING_MODE,e.C_NUMBER_MODE]}]},t={className:"string",variants:[{begin:'"""',end:'"""',contains:[s]},{begin:"'",end:"'",illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,s]}]},r={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"},l={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[e.inherit(t,{className:"meta-string"})]}]};return{keywords:n,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,i,r,l,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:n,illegal:/fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,relevance:5,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],relevance:0},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,l,t,e.C_NUMBER_MODE]},e.C_BLOCK_COMMENT_MODE]},{className:"class",beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,excludeBegin:!0,returnEnd:!0},r,l]},t,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:"\n"},e.C_NUMBER_MODE]}}}});
//# sourceMappingURL=91.91.js.map