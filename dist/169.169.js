webpackJsonp([169],{225:function(e,a){e.exports=function(e){var a={ruleDeclaration:"^[a-zA-Z][a-zA-Z0-9-]*",unexpectedChars:"[!@#$^&',?+~`|:]"},n=["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],s=e.COMMENT(";","$"),l={className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},i={className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},r={className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},c={className:"symbol",begin:/%[si]/},o={begin:a.ruleDeclaration+"\\s*=",returnBegin:!0,end:/=/,relevance:0,contains:[{className:"attribute",begin:a.ruleDeclaration}]};return{illegal:a.unexpectedChars,keywords:n.join(" "),contains:[o,s,l,i,r,c,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}}});