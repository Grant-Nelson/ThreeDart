(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=='function')n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.pl(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kw(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=='string')q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={k4:function k4(){},
k6:function(a){return new H.dO(a)},
jF:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
mW:function(a,b){if(t.Y.b(a))return new H.cc(a,b)
return new H.bp(a,b)},
mO:function(){return new P.et("No element")},
nh:function(a,b){var s=J.aT(a)
if(typeof s!=="number")return s.t()
H.em(a,0,s-1,b)},
em:function(a,b,c,d){if(c-b<=32)H.ng(a,b,c,d)
else H.nf(a,b,c,d)},
ng:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aR(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.S()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
nf:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.Z(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.Z(a6+a7,2),d=e-h,c=e+h,b=J.aR(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a3
a3=a2
a2=s}b.j(a5,g,a)
b.j(a5,e,a1)
b.j(a5,f,a3)
b.j(a5,d,b.h(a5,a6))
b.j(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.L(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a2()
if(n<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.S()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
q=m
r=l
break}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.a2()
if(j<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.S()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.S()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a2()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.j(a5,a6,b.h(a5,a4))
b.j(a5,a4,a0)
a4=q+1
b.j(a5,a7,b.h(a5,a4))
b.j(a5,a4,a2)
H.em(a5,a6,r-2,a8)
H.em(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.L(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.L(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a2()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}H.em(a5,r,q,a8)}else H.em(a5,r,q,a8)},
dO:function dO(a){this.a=a},
N:function N(a){this.a=a},
m:function m(){},
bK:function bK(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bp:function bp(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=null
this.b=a
this.c=b},
cM:function cM(a,b){this.a=a
this.b=b},
f_:function f_(a,b){this.a=a
this.b=b},
cd:function cd(){},
eS:function eS(){},
bS:function bS(){},
mH:function(){throw H.b(P.x("Cannot modify unmodifiable Map"))},
m6:function(a){var s,r=H.m5(a)
if(r!=null)return r
s="minified:"+a
return s},
lY:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
h:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a6(a)
if(typeof s!="string")throw H.b(H.ao(a))
return s},
cy:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
l6:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a0(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
ef:function(a){return H.n_(a)},
n_:function(a){var s,r,q
if(a instanceof P.K)return H.ae(H.bw(a),null)
if(J.dd(a)===C.M||t.ak.b(a)){s=C.r(a)
if(H.l5(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.l5(q))return q}}return H.ae(H.bw(a),null)},
l5:function(a){var s=a!=="Object"&&a!==""
return s},
n0:function(){if(!!self.location)return self.location.href
return null},
l4:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
n8:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.bZ(q))throw H.b(H.ao(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aJ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.ao(q))}return H.l4(p)},
l7:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bZ(q))throw H.b(H.ao(q))
if(q<0)throw H.b(H.ao(q))
if(q>65535)return H.n8(a)}return H.l4(a)},
n9:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.hU()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aM:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aJ(s,10))>>>0,56320|s&1023)}}throw H.b(P.a0(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n7:function(a){var s=H.bQ(a).getFullYear()+0
return s},
n5:function(a){var s=H.bQ(a).getMonth()+1
return s},
n1:function(a){var s=H.bQ(a).getDate()+0
return s},
n2:function(a){var s=H.bQ(a).getHours()+0
return s},
n4:function(a){var s=H.bQ(a).getMinutes()+0
return s},
n6:function(a){var s=H.bQ(a).getSeconds()+0
return s},
n3:function(a){var s=H.bQ(a).getMilliseconds()+0
return s},
f:function(a){throw H.b(H.ao(a))},
c:function(a,b){if(a==null)J.aT(a)
throw H.b(H.c2(a,b))},
c2:function(a,b){var s,r,q="index"
if(!H.bZ(b))return new P.af(!0,b,q,null)
s=J.aT(a)
if(!(b<0)){if(typeof s!=="number")return H.f(s)
r=b>=s}else r=!0
if(r)return P.M(b,a,q,null,s)
return P.eg(b,q)},
p4:function(a,b,c){if(a>c)return P.a0(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a0(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
ao:function(a){return new P.af(!0,a,null,null)},
oZ:function(a){if(typeof a!="number")throw H.b(H.ao(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.e4()
s=new Error()
s.dartException=a
r=H.pm
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pm:function(){return J.a6(this.dartException)},
q:function(a){throw H.b(a)},
r:function(a){throw H.b(P.bC(a))},
aO:function(a){var s,r,q,p,o,n
a=H.m1(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lk:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l0:function(a,b){return new H.e3(a,b==null?null:b.method)},
k5:function(a,b){var s=b==null,r=s?null:b.method
return new H.dN(a,r,s?null:b.receiver)},
b7:function(a){if(a==null)return new H.i5(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bx(a,a.dartException)
return H.oV(a)},
bx:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oV:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aJ(r,16)&8191)===10)switch(q){case 438:return H.bx(a,H.k5(H.h(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bx(a,H.l0(H.h(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.m9()
o=$.ma()
n=$.mb()
m=$.mc()
l=$.mf()
k=$.mg()
j=$.me()
$.md()
i=$.mi()
h=$.mh()
g=p.ac(s)
if(g!=null)return H.bx(a,H.k5(s,g))
else{g=o.ac(s)
if(g!=null){g.method="call"
return H.bx(a,H.k5(s,g))}else{g=n.ac(s)
if(g==null){g=m.ac(s)
if(g==null){g=l.ac(s)
if(g==null){g=k.ac(s)
if(g==null){g=j.ac(s)
if(g==null){g=m.ac(s)
if(g==null){g=i.ac(s)
if(g==null){g=h.ac(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bx(a,H.l0(s,g))}}return H.bx(a,new H.eR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cB()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bx(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cB()
return a},
kz:function(a){var s
if(a==null)return new H.fF(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fF(a)},
p6:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
pe:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.t("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pe)
a.$identity=s
return s},
mG:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.il().constructor.prototype):Object.create(new H.c6(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aB
if(typeof r!=="number")return r.w()
$.aB=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kN(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mC(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kN(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mC:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lW,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.mA:H.mz
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
mD:function(a,b,c,d){var s=H.kM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kN:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mF(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mD(r,!p,s,b)
if(r===0){p=$.aB
if(typeof p!=="number")return p.w()
$.aB=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.h(H.jW())+";return "+n+"."+H.h(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aB
if(typeof p!=="number")return p.w()
$.aB=p+1
m+=p
return new Function("return function("+m+"){return this."+H.h(H.jW())+"."+H.h(s)+"("+m+");}")()},
mE:function(a,b,c,d){var s=H.kM,r=H.mB
switch(b?-1:a){case 0:throw H.b(new H.ek("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mF:function(a,b){var s,r,q,p,o,n,m=H.jW(),l=$.kK
if(l==null)l=$.kK=H.kJ("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mE(r,!p,s,b)
if(r===1){p="return function(){return this."+H.h(m)+"."+H.h(s)+"(this."+l+");"
o=$.aB
if(typeof o!=="number")return o.w()
$.aB=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.h(m)+"."+H.h(s)+"(this."+l+", "+n+");"
o=$.aB
if(typeof o!=="number")return o.w()
$.aB=o+1
return new Function(p+o+"}")()},
kw:function(a,b,c,d,e,f,g){return H.mG(a,b,c,d,!!e,!!f,g)},
mz:function(a,b){return H.fR(v.typeUniverse,H.bw(a.a),b)},
mA:function(a,b){return H.fR(v.typeUniverse,H.bw(a.c),b)},
kM:function(a){return a.a},
mB:function(a){return a.c},
jW:function(){var s=$.kL
return s==null?$.kL=H.kJ("self"):s},
kJ:function(a){var s,r,q,p=new H.c6("self","target","receiver","name"),o=J.k3(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bz("Field name "+a+" not found."))},
pl:function(a){throw H.b(new P.dy(a))},
p9:function(a){return v.getIsolateTag(a)},
qs:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pg:function(a){var s,r,q,p,o,n=$.lV.$1(a),m=$.jB[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jK[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lT.$2(a,n)
if(q!=null){m=$.jB[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jK[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jO(s)
$.jB[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jK[n]=s
return s}if(p==="-"){o=H.jO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.m_(a,s)
if(p==="*")throw H.b(P.iI(n))
if(v.leafTags[n]===true){o=H.jO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.m_(a,s)},
m_:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kC(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jO:function(a){return J.kC(a,!1,null,!!a.$iw)},
ph:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jO(s)
else return J.kC(s,c,null,null)},
pc:function(){if(!0===$.kA)return
$.kA=!0
H.pd()},
pd:function(){var s,r,q,p,o,n,m,l
$.jB=Object.create(null)
$.jK=Object.create(null)
H.pb()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.m0.$1(o)
if(n!=null){m=H.ph(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pb:function(){var s,r,q,p,o,n,m=C.D()
m=H.c0(C.E,H.c0(C.F,H.c0(C.t,H.c0(C.t,H.c0(C.G,H.c0(C.H,H.c0(C.I(C.r),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lV=new H.jG(p)
$.lT=new H.jH(o)
$.m0=new H.jI(n)},
c0:function(a,b){return a(b)||b},
mR:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a_("Illegal RegExp pattern ("+String(n)+")",a,null))},
m2:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
p5:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m1:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m3:function(a,b,c){var s=H.pk(a,b,c)
return s},
pk:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m1(b),'g'),H.p5(c))},
c7:function c7(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iz:function iz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e3:function e3(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(a){this.a=a},
i5:function i5(a){this.a=a},
fF:function fF(a){this.a=a
this.b=null},
bB:function bB(){},
ip:function ip(){},
il:function il(){},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ek:function ek(a){this.a=a},
y:function y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hF:function hF(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b
this.c=null},
cm:function cm(a){this.a=a},
dR:function dR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
dM:function dM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bY:function(a){return a},
aQ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.c2(b,a))},
o8:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.p4(a,b,c))
return b},
ct:function ct(){},
T:function T(){},
bN:function bN(){},
br:function br(){},
cu:function cu(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
cv:function cv(){},
bO:function bO(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
nd:function(a,b){var s=b.c
return s==null?b.c=H.kl(a,b.z,!0):s},
ld:function(a,b){var s=b.c
return s==null?b.c=H.d4(a,"kP",[b.z]):s},
le:function(a){var s=a.y
if(s===6||s===7||s===8)return H.le(a.z)
return s===11||s===12},
nc:function(a){return a.cy},
kx:function(a){return H.km(v.typeUniverse,a,!1)},
b4:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b4(a,s,a0,a1)
if(r===s)return b
return H.lD(a,r,!0)
case 7:s=b.z
r=H.b4(a,s,a0,a1)
if(r===s)return b
return H.kl(a,r,!0)
case 8:s=b.z
r=H.b4(a,s,a0,a1)
if(r===s)return b
return H.lC(a,r,!0)
case 9:q=b.Q
p=H.dc(a,q,a0,a1)
if(p===q)return b
return H.d4(a,b.z,p)
case 10:o=b.z
n=H.b4(a,o,a0,a1)
m=b.Q
l=H.dc(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kj(a,n,l)
case 11:k=b.z
j=H.b4(a,k,a0,a1)
i=b.Q
h=H.oS(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lB(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dc(a,g,a0,a1)
o=b.z
n=H.b4(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kk(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.h6("Attempted to substitute unexpected RTI kind "+c))}},
dc:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b4(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
oT:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b4(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
oS:function(a,b,c,d){var s,r=b.a,q=H.dc(a,r,c,d),p=b.b,o=H.dc(a,p,c,d),n=b.c,m=H.oT(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fh()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
p_:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lW(s)
return a.$S()}return null},
lX:function(a,b){var s
if(H.le(b))if(a instanceof H.bB){s=H.p_(a)
if(s!=null)return s}return H.bw(a)},
bw:function(a){var s
if(a instanceof P.K){s=a.$ti
return s!=null?s:H.ks(a)}if(Array.isArray(a))return H.o4(a)
return H.ks(J.dd(a))},
o4:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
lO:function(a){var s=a.$ti
return s!=null?s:H.ks(a)},
ks:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.of(a,s)},
of:function(a,b){var s=a instanceof H.bB?a.__proto__.__proto__.constructor:b,r=H.nP(v.typeUniverse,s.name)
b.$ccache=r
return r},
lW:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.km(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oe:function(a){var s,r,q=this,p=t.K
if(q===p)return H.d9(q,a,H.oj)
if(!H.aS(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.d9(q,a,H.om)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bZ
else if(s===t.gR||s===t.H)r=H.oi
else if(s===t.N)r=H.ok
else r=s===t.cJ?H.kt:null
if(r!=null)return H.d9(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.pf)){q.r="$i"+p
return H.d9(q,a,H.ol)}}else if(p===7)return H.d9(q,a,H.oc)
return H.d9(q,a,H.oa)},
d9:function(a,b,c){a.b=c
return a.b(b)},
od:function(a){var s,r,q=this
if(!H.aS(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.o7
else if(q===t.K)r=H.o5
else r=H.ob
q.a=r
return q.a(a)},
oL:function(a){var s,r=a.y
if(!H.aS(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
oa:function(a){var s=this
if(a==null)return H.oL(s)
return H.V(v.typeUniverse,H.lX(a,s),null,s,null)},
oc:function(a){if(a==null)return!0
return this.z.b(a)},
ol:function(a){var s=this,r=s.r
if(a instanceof P.K)return!!a[r]
return!!J.dd(a)[r]},
qq:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lM(a,s)},
ob:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lM(a,s)},
lM:function(a,b){throw H.b(H.nF(H.lv(a,H.lX(a,b),H.ae(b,null))))},
lv:function(a,b,c){var s=P.hw(a),r=H.ae(b==null?H.bw(a):b,null)
return s+": type '"+H.h(r)+"' is not a subtype of type '"+H.h(c)+"'"},
nF:function(a){return new H.d2("TypeError: "+a)},
a5:function(a,b){return new H.d2("TypeError: "+H.lv(a,null,b))},
oj:function(a){return a!=null},
o5:function(a){return a},
om:function(a){return!0},
o7:function(a){return a},
kt:function(a){return!0===a||!1===a},
qc:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a5(a,"bool"))},
qe:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a5(a,"bool"))},
qd:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a5(a,"bool?"))},
qf:function(a){if(typeof a=="number")return a
throw H.b(H.a5(a,"double"))},
qh:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"double"))},
qg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"double?"))},
bZ:function(a){return typeof a=="number"&&Math.floor(a)===a},
qi:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a5(a,"int"))},
qk:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a5(a,"int"))},
qj:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a5(a,"int?"))},
oi:function(a){return typeof a=="number"},
ql:function(a){if(typeof a=="number")return a
throw H.b(H.a5(a,"num"))},
qn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"num"))},
qm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"num?"))},
ok:function(a){return typeof a=="string"},
qo:function(a){if(typeof a=="string")return a
throw H.b(H.a5(a,"String"))},
o6:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a5(a,"String"))},
qp:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a5(a,"String?"))},
oO:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.w(r,H.ae(a[q],b))
return s},
lN:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.c(a6,i)
l=C.a.w(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.w(" extends ",H.ae(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ae(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.w(a3,H.ae(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.w(a3,H.ae(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kG(H.ae(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.h(a1)},
ae:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ae(a.z,b)
return s}if(l===7){r=a.z
s=H.ae(r,b)
q=r.y
return J.kG(q===11||q===12?C.a.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.h(H.ae(a.z,b))+">"
if(l===9){p=H.oU(a.z)
o=a.Q
return o.length!==0?p+("<"+H.oO(o,b)+">"):p}if(l===11)return H.lN(a,b,null)
if(l===12)return H.lN(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
oU:function(a){var s,r=H.m5(a)
if(r!=null)return r
s="minified:"+a
return s},
lE:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nP:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.km(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d5(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d4(a,b,q)
n[b]=o
return o}else return m},
nN:function(a,b){return H.lL(a.tR,b)},
nM:function(a,b){return H.lL(a.eT,b)},
km:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lA(H.ly(a,null,b,c))
r.set(b,s)
return s},
fR:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lA(H.ly(a,b,c,!0))
q.set(c,r)
return r},
nO:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kj(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b3:function(a,b){b.a=H.od
b.b=H.oe
return b},
d5:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ai(null,null)
s.y=b
s.cy=c
r=H.b3(a,s)
a.eC.set(c,r)
return r},
lD:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nK(a,b,r,c)
a.eC.set(r,s)
return s},
nK:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aS(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ai(null,null)
q.y=6
q.z=b
q.cy=c
return H.b3(a,q)},
kl:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nJ(a,b,r,c)
a.eC.set(r,s)
return s},
nJ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aS(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jL(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jL(q.z))return q
else return H.nd(a,b)}}p=new H.ai(null,null)
p.y=7
p.z=b
p.cy=c
return H.b3(a,p)},
lC:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nH(a,b,r,c)
a.eC.set(r,s)
return s},
nH:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aS(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d4(a,"kP",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ai(null,null)
q.y=8
q.z=b
q.cy=c
return H.b3(a,q)},
nL:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ai(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b3(a,s)
a.eC.set(q,r)
return r},
fQ:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nG:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d4:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fQ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ai(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b3(a,r)
a.eC.set(p,q)
return q},
kj:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fQ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ai(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b3(a,o)
a.eC.set(q,n)
return n},
lB:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fQ(m)
if(j>0){s=l>0?",":""
r=H.fQ(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nG(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ai(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b3(a,o)
a.eC.set(q,r)
return r},
kk:function(a,b,c,d){var s,r=b.cy+("<"+H.fQ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nI(a,b,c,r,d)
a.eC.set(r,s)
return s},
nI:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b4(a,b,r,0)
m=H.dc(a,c,r,0)
return H.kk(a,n,m,c!==m)}}l=new H.ai(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b3(a,l)},
ly:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.nz(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lz(a,r,g,f,!1)
else if(q===46)r=H.lz(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.b2(a.u,a.e,f.pop()))
break
case 94:f.push(H.nL(a.u,f.pop()))
break
case 35:f.push(H.d5(a.u,5,"#"))
break
case 64:f.push(H.d5(a.u,2,"@"))
break
case 126:f.push(H.d5(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.ki(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.d4(p,n,o))
else{m=H.b2(p,a.e,n)
switch(m.y){case 11:f.push(H.kk(p,m,o,a.n))
break
default:f.push(H.kj(p,m,o))
break}}break
case 38:H.nA(a,f)
break
case 42:l=a.u
f.push(H.lD(l,H.b2(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.kl(l,H.b2(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.lC(l,H.b2(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fh()
j=p.sEA
i=p.sEA
n=f.pop()
if(typeof n=="number")switch(n){case-1:j=f.pop()
break
case-2:i=f.pop()
break
default:f.push(n)
break}else f.push(n)
o=f.splice(a.p)
H.ki(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.lB(p,H.b2(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.ki(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.nC(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.b2(a.u,a.e,h)},
nz:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lz:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lE(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.nc(o)+'"')
d.push(H.fR(s,o,n))}else d.push(p)
return m},
nA:function(a,b){var s=b.pop()
if(0===s){b.push(H.d5(a.u,1,"0&"))
return}if(1===s){b.push(H.d5(a.u,4,"1&"))
return}throw H.b(P.h6("Unexpected extended operation "+H.h(s)))},
b2:function(a,b,c){if(typeof c=="string")return H.d4(a,c,a.sEA)
else if(typeof c=="number")return H.nB(a,b,c)
else return c},
ki:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b2(a,b,c[s])},
nC:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b2(a,b,c[s])},
nB:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.h6("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.h6("Bad index "+c+" for "+b.i(0)))},
V:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aS(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aS(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.V(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.V(a,b.z,c,d,e)
if(p===6){s=d.z
return H.V(a,b,c,s,e)}if(r===8){if(!H.V(a,b.z,c,d,e))return!1
return H.V(a,H.ld(a,b),c,d,e)}if(r===7){s=H.V(a,b.z,c,d,e)
return s}if(p===8){if(H.V(a,b,c,d.z,e))return!0
return H.V(a,b,c,H.ld(a,d),e)}if(p===7){s=H.V(a,b,c,d.z,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.V(a,k,c,j,e)||!H.V(a,j,e,k,c))return!1}return H.lP(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.lP(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oh(a,b,c,d,e)}return!1},
lP:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.V(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.V(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.V(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.V(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.V(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oh:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.V(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lE(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.V(a,H.fR(a,b,l[p]),c,r[p],e))return!1
return!0},
jL:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aS(a))if(r!==7)if(!(r===6&&H.jL(a.z)))s=r===8&&H.jL(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pf:function(a){var s
if(!H.aS(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aS:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
lL:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ai:function ai(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fh:function fh(){this.c=this.b=this.a=null},
fc:function fc(){},
d2:function d2(a){this.a=a},
m5:function(a){return v.mangledGlobalNames[a]},
pi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h2:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kA==null){H.pc()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.iI("Return interceptor for "+H.h(s(a,o))))}q=a.constructor
p=q==null?null:q[J.kS()]
if(p!=null)return p
p=H.pg(a)
if(p!=null)return p
if(typeof a=="function")return C.O
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,J.kS(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
kS:function(){var s=$.lw
return s==null?$.lw=v.getIsolateTag("_$dart_js"):s},
mP:function(a,b){if(!H.bZ(a))throw H.b(P.kH(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a0(a,0,4294967295,"length",null))
return J.k3(H.d(new Array(a),b.T("u<0>")))},
k2:function(a,b){if(!H.bZ(a)||a<0)throw H.b(P.bz("Length must be a non-negative integer: "+H.h(a)))
return H.d(new Array(a),b.T("u<0>"))},
k3:function(a){a.fixed$length=Array
return a},
mQ:function(a,b){return J.dg(a,b)},
dd:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.cg.prototype}if(typeof a=="string")return J.aF.prototype
if(a==null)return J.ci.prototype
if(typeof a=="boolean")return J.dL.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.K)return a
return J.h2(a)},
p7:function(a){if(typeof a=="number")return J.bm.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.K)return a
return J.h2(a)},
aR:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.K)return a
return J.h2(a)},
jC:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.K)return a
return J.h2(a)},
p8:function(a){if(typeof a=="number")return J.bm.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bu.prototype
return a},
ky:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bu.prototype
return a},
b6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.K)return a
return J.h2(a)},
kG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p7(a).w(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dd(a).n(a,b)},
c5:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aR(a).h(a,b)},
jR:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lY(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jC(a).j(a,b,c)},
mr:function(a,b){return J.ky(a).C(a,b)},
ms:function(a,b,c){return J.b6(a).fs(a,b,c)},
mt:function(a,b,c,d){return J.b6(a).fO(a,b,c,d)},
mu:function(a,b){return J.ky(a).R(a,b)},
dg:function(a,b){return J.p8(a).aL(a,b)},
jS:function(a,b){return J.aR(a).L(a,b)},
jT:function(a,b){return J.jC(a).F(a,b)},
mv:function(a,b,c,d){return J.b6(a).h9(a,b,c,d)},
jU:function(a,b){return J.jC(a).E(a,b)},
jV:function(a){return J.b6(a).gcY(a)},
mw:function(a){return J.b6(a).gd_(a)},
aa:function(a){return J.dd(a).gM(a)},
bd:function(a){return J.jC(a).gO(a)},
aT:function(a){return J.aR(a).gk(a)},
mx:function(a,b){return J.b6(a).hI(a,b)},
a6:function(a){return J.dd(a).i(a)},
a:function a(){},
dL:function dL(){},
ci:function ci(){},
aV:function aV(){},
e9:function e9(){},
bu:function bu(){},
as:function as(){},
u:function u(a){this.$ti=a},
hE:function hE(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bm:function bm(){},
ch:function ch(){},
cg:function cg(){},
aF:function aF(){}},P={
nr:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.oW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c1(new P.j6(q),1)).observe(s,{childList:true})
return new P.j5(q,s,r)}else if(self.setImmediate!=null)return P.oX()
return P.oY()},
ns:function(a){self.scheduleImmediate(H.c1(new P.j7(a),0))},
nt:function(a){self.setImmediate(H.c1(new P.j8(a),0))},
nu:function(a){P.kb(C.m,a)},
kb:function(a,b){var s=C.c.Z(a.a,1000)
return P.nD(s<0?0:s,b)},
lj:function(a,b){var s=C.c.Z(a.a,1000)
return P.nE(s<0?0:s,b)},
nD:function(a,b){var s=new P.d1()
s.eb(a,b)
return s},
nE:function(a,b){var s=new P.d1()
s.ec(a,b)
return s},
qa:function(a){return new P.bV(a,1)},
nv:function(){return C.Y},
nw:function(a){return new P.bV(a,3)},
oo:function(a){return new P.cZ(a)},
oK:function(){var s,r
for(s=$.c_;s!=null;s=$.c_){$.db=null
r=s.b
$.c_=r
if(r==null)$.da=null
s.a.$0()}},
oR:function(){$.ku=!0
try{P.oK()}finally{$.db=null
$.ku=!1
if($.c_!=null)$.kF().$1(P.lU())}},
oP:function(a){var s=new P.f0(a),r=$.da
if(r==null){$.c_=$.da=s
if(!$.ku)$.kF().$1(P.lU())}else $.da=r.b=s},
oQ:function(a){var s,r,q,p=$.c_
if(p==null){P.oP(a)
$.db=$.da
return}s=new P.f0(a)
r=$.db
if(r==null){s.b=p
$.c_=$.db=s}else{q=r.b
s.b=q
$.db=r.b=s
if(q==null)$.da=s}},
li:function(a,b){var s=$.aA
if(s===C.f)return P.kb(a,b)
return P.kb(a,s.fR(b))},
nk:function(a,b){var s=$.aA
if(s===C.f)return P.lj(a,b)
return P.lj(a,s.cW(b,t.aF))},
lQ:function(a,b,c,d,e){P.oQ(new P.jz(d,e))},
oM:function(a,b,c,d){var s,r=$.aA
if(r===c)return d.$0()
$.aA=c
s=r
try{r=d.$0()
return r}finally{$.aA=s}},
oN:function(a,b,c,d,e){var s,r=$.aA
if(r===c)return d.$1(e)
$.aA=c
s=r
try{r=d.$1(e)
return r}finally{$.aA=s}},
j6:function j6(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
d1:function d1(){this.c=0},
jl:function jl(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b){this.a=a
this.b=b},
bW:function bW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cZ:function cZ(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null},
cC:function cC(){},
ev:function ev(){},
cD:function cD(){},
jq:function jq(){},
jz:function jz(a,b){this.a=a
this.b=b},
jd:function jd(){},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function(a,b){return new H.y(a.T("@<0>").bs(b).T("y<1,2>"))},
mT:function(a,b,c){return H.p6(a,new H.y(b.T("@<0>").bs(c).T("y<1,2>")))},
kT:function(a,b){return new H.y(a.T("@<0>").bs(b).T("y<1,2>"))},
kU:function(a){return new P.cO(a.T("cO<0>"))},
kh:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ny:function(a,b){var s=new P.cP(a,b)
s.c=a.e
return s},
mN:function(a,b,c){var s,r
if(P.kv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.a9.push(a)
try{P.on(a,s)}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}r=P.lg(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
k1:function(a,b,c){var s,r
if(P.kv(a))return b+"..."+c
s=new P.U(b)
$.a9.push(a)
try{r=s
r.a=P.lg(r.a,a,", ")}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kv:function(a){var s,r
for(s=$.a9.length,r=0;r<s;++r)if(a===$.a9[r])return!0
return!1},
on:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.h(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.v()){if(j<=4){b.push(H.h(p))
return}r=H.h(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.v();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.h(p)
r=H.h(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
mU:function(a,b,c){var s=P.mS(b,c)
a.E(0,new P.hI(s,b,c))
return s},
k8:function(a){var s,r={}
if(P.kv(a))return"{...}"
s=new P.U("")
try{$.a9.push(a)
s.a+="{"
r.a=!0
J.jU(a,new P.hM(r,s))
s.a+="}"}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cO:function cO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jc:function jc(a){this.a=a
this.c=this.b=null},
cP:function cP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function cf(){},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(){},
j:function j(){},
cp:function cp(){},
hM:function hM(a,b){this.a=a
this.b=b},
at:function at(){},
fS:function fS(){},
cq:function cq(){},
bT:function bT(a,b){this.a=a
this.$ti=b},
cW:function cW(){},
cQ:function cQ(){},
d6:function d6(){},
nn:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.no(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
no:function(a,b,c,d){var s=a?$.mk():$.mj()
if(s==null)return null
if(0===c&&d===b.length)return P.lo(s,b)
return P.lo(s,b.subarray(c,P.aY(c,d,b.length)))},
lo:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.b7(r)}return null},
kI:function(a,b,c,d,e,f){if(C.c.b5(f,4)!==0)throw H.b(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a_("Invalid base64 padding, more than two '=' characters",a,b))},
o3:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
o2:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.t()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aR(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.a5()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
iR:function iR(){},
iS:function iS(){},
ha:function ha(){},
hb:function hb(){},
du:function du(){},
dx:function dx(){},
hs:function hs(){},
iP:function iP(){},
iT:function iT(){},
jp:function jp(a){this.b=0
this.c=a},
iQ:function iQ(a){this.a=a},
jo:function jo(a){this.a=a
this.b=16
this.c=0},
jJ:function(a,b){var s=H.l6(a,b)
if(s!=null)return s
throw H.b(P.a_(a,null,null))},
mK:function(a){if(a instanceof H.bB)return a.i(0)
return"Instance of '"+H.h(H.ef(a))+"'"},
hJ:function(a,b,c,d){var s,r=c?J.k2(a,d):J.mP(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
k7:function(a,b,c){var s,r=H.d([],c.T("u<0>"))
for(s=J.bd(a);s.v();)r.push(s.gD(s))
if(b)return r
return J.k3(r)},
mV:function(a,b,c){var s,r,q=J.k2(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
ex:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.aY(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a2()
q=c<r}else q=!0
return H.l7(q?s.slice(b,c):s)}if(t.bm.b(a))return H.n9(a,b,P.aY(b,c,a.length))
return P.ni(a,b,c)},
ni:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a0(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a0(c,b,a.length,o,o))
r=J.bd(a)
for(q=0;q<b;++q)if(!r.v())throw H.b(P.a0(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gD(r))
else for(q=b;q<c;++q){if(!r.v())throw H.b(P.a0(c,b,q,o,o))
p.push(r.gD(r))}return H.l7(p)},
na:function(a){return new H.dM(a,H.mR(a,!1,!0,!1,!1,!1))},
lg:function(a,b,c){var s=J.bd(b)
if(!s.v())return a
if(c.length===0){do a+=H.h(s.gD(s))
while(s.v())}else{a+=H.h(s.gD(s))
for(;s.v();)a=a+c+H.h(s.gD(s))}return a},
kd:function(){var s=H.n0()
if(s!=null)return P.nm(s)
throw H.b(P.x("'Uri.base' is not supported"))},
kr:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mp().b
if(typeof b!="string")H.q(H.ao(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.gh8().bU(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aM(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mI:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dz:function(a){if(a>=10)return""+a
return"0"+a},
kO:function(a){return new P.bi(1000*a)},
hw:function(a){if(typeof a=="number"||H.kt(a)||null==a)return J.a6(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mK(a)},
h6:function(a){return new P.dj(a)},
bz:function(a){return new P.af(!1,null,null,a)},
kH:function(a,b,c){return new P.af(!0,a,b,c)},
my:function(a,b){if(a==null)throw H.b(new P.af(!1,null,b,"Must not be null"))
return a},
l8:function(a){var s=null
return new P.bR(s,s,!1,s,s,a)},
eg:function(a,b){return new P.bR(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.bR(b,c,!0,a,d,"Invalid value")},
aY:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.f(c)
s=a>c}else s=!0
if(s)throw H.b(P.a0(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.f(c)
s=b>c}else s=!0
if(s)throw H.b(P.a0(b,a,c,"end",null))
return b}return c},
l9:function(a,b){if(a<0)throw H.b(P.a0(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aT(b):e
return new P.dJ(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eT(a)},
iI:function(a){return new P.eQ(a)},
bC:function(a){return new P.dw(a)},
t:function(a){return new P.fe(a)},
a_:function(a,b,c){return new P.hB(a,b,c)},
kE:function(a){H.pi(a)},
nm:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.ll(a4<a4?C.a.p(a5,0,a4):a5,5,a3).gdM()
else if(s===32)return P.ll(C.a.p(a5,5,a4),0,a3).gdM()}r=P.hJ(8,0,!1,t.S)
q=r.length
if(0>=q)return H.c(r,0)
r[0]=0
if(1>=q)return H.c(r,1)
r[1]=-1
if(2>=q)return H.c(r,2)
r[2]=-1
if(7>=q)return H.c(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.lR(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.lR(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
r[7]=p}q=r.length
if(2>=q)return H.c(r,2)
o=r[2]+1
if(3>=q)return H.c(r,3)
n=r[3]
if(4>=q)return H.c(r,4)
m=r[4]
if(5>=q)return H.c(r,5)
l=r[5]
if(6>=q)return H.c(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.c(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a0(a5,"..",m)))h=l>m+2&&C.a.a0(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a0(a5,"file",0)){if(o<=0){if(!C.a.a0(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.p(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aS(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a0(a5,"http",0)){if(q&&n+3===m&&C.a.a0(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aS(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a0(a5,"https",0)){if(q&&n+4===m&&C.a.a0(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aS(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.p(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fz(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.nX(a5,0,p)
else{if(p===0)P.bX(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.nY(a5,d,o-1):""
b=P.nU(a5,o,n,!1)
q=n+1
if(q<m){a=H.l6(C.a.p(a5,q,m),a3)
a0=P.nW(a==null?H.q(P.a_("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.nV(a5,m,l,a3,i,b!=null)
a2=l<k?P.ko(a5,l+1,k,a3):a3
return new P.bv(i,c,b,a0,a1,a2,k<a4?P.nT(a5,k+1,a4):a3)},
ln:function(a){var s=t.N
return C.b.hc(H.d(a.split("&"),t.s),P.kT(s,s),new P.iN(C.e))},
nl:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.iK(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.R(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.jJ(C.a.p(a,q,r),null)
if(typeof n!=="number")return n.S()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.jJ(C.a.p(a,q,c),null)
if(typeof n!=="number")return n.S()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
lm:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.iL(a),b=new P.iM(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.R(a,r)
if(n===58){if(r===a0){++r
if(C.a.R(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gax(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.nl(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.c.aJ(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
lF:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bX:function(a,b,c){throw H.b(P.a_(c,a,b))},
nW:function(a,b){if(a!=null&&a===P.lF(b))return null
return a},
nU:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.R(a,b)===91){s=c-1
if(C.a.R(a,s)!==93)P.bX(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.nR(a,r,s)
if(q<s){p=q+1
o=P.lK(a,C.a.a0(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lm(a,r,q)
return C.a.p(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.R(a,n)===58){q=C.a.bf(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.lK(a,C.a.a0(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lm(a,b,q)
return"["+C.a.p(a,b,q)+o+"]"}return P.o_(a,b,c)},
nR:function(a,b,c){var s=C.a.bf(a,"%",b)
return s>=b&&s<c?s:c},
lK:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.U(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.R(a,s)
if(p===37){o=P.kp(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.U("")
m=i.a+=C.a.p(a,r,s)
if(n)o=C.a.p(a,s,s+3)
else if(o==="%")P.bX(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.U("")
if(r<s){i.a+=C.a.p(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.R(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.p(a,r,s)
if(i==null){i=new P.U("")
n=i}else n=i
n.a+=j
n.a+=P.kn(p)
s+=k
r=s}}}if(i==null)return C.a.p(a,b,c)
if(r<c)i.a+=C.a.p(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
o_:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.R(a,s)
if(o===37){n=P.kp(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.U("")
l=C.a.p(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.p(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.u,m)
m=(C.u[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.U("")
if(r<s){q.a+=C.a.p(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.bX(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.R(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.p(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.U("")
m=q}else m=q
m.a+=l
m.a+=P.kn(o)
s+=j
r=s}}}}if(q==null)return C.a.p(a,b,c)
if(r<c){l=C.a.p(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
nX:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lH(C.a.C(a,b)))P.bX(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.bX(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.p(a,b,c)
return P.nQ(r?a.toLowerCase():a)},
nQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nY:function(a,b,c){return P.d7(a,b,c,C.Q,!1)},
nV:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.d7(a,b,c,C.v,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a6(s,"/"))s="/"+s
return P.nZ(s,e,f)},
nZ:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a6(a,"/"))return P.o0(a,!s||c)
return P.o1(a)},
ko:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bz("Both query and queryParameters specified"))
return P.d7(a,b,c,C.k,!0)}if(d==null)return null
s=new P.U("")
r.a=""
d.E(0,new P.jm(new P.jn(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
nT:function(a,b,c){return P.d7(a,b,c,C.k,!0)},
kp:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.R(a,b+1)
r=C.a.R(a,n)
q=H.jF(s)
p=H.jF(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aJ(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aM(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.p(a,b,b+3).toUpperCase()
return null},
kn:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.c(s,0)
s[0]=37
q=C.a.C(k,a>>>4)
if(1>=r)return H.c(s,1)
s[1]=q
q=C.a.C(k,a&15)
if(2>=r)return H.c(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.fD(a,6*o)&63|p
if(n>=r)return H.c(s,n)
s[n]=37
q=n+1
l=C.a.C(k,m>>>4)
if(q>=r)return H.c(s,q)
s[q]=l
l=n+2
q=C.a.C(k,m&15)
if(l>=r)return H.c(s,l)
s[l]=q
n+=3}}return P.ex(s,0,null)},
d7:function(a,b,c,d,e){var s=P.lJ(a,b,c,d,e)
return s==null?C.a.p(a,b,c):s},
lJ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.R(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kp(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.bX(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.R(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.kn(o)}}if(p==null){p=new P.U("")
n=p}else n=p
n.a+=C.a.p(a,q,r)
n.a+=H.h(m)
if(typeof l!=="number")return H.f(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.p(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
lI:function(a){if(C.a.a6(a,"."))return!0
return C.a.dj(a,"/.")!==-1},
o1:function(a){var s,r,q,p,o,n,m
if(!P.lI(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.L(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.q(s,"/")},
o0:function(a,b){var s,r,q,p,o,n
if(!P.lI(a))return!b?P.lG(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gax(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gax(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.lG(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.q(s,"/")},
lG:function(a){var s,r,q,p=a.length
if(p>=2&&P.lH(J.mr(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.p(a,0,s)+"%3A"+C.a.a7(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
nS:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bz("Invalid URL encoding"))}}return s},
kq:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.p(a,b,c)
else p=new H.N(C.a.p(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.b(P.bz("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bz("Truncated URI"))
p.push(P.nS(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.X.bU(p)},
lH:function(a){var s=a|32
return 97<=s&&s<=122},
ll:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a_(k,a,r))}}if(q<0&&r>b)throw H.b(P.a_(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gax(j)
if(p!==44||r!==n+7||!C.a.a0(a,"base64",n+1))throw H.b(P.a_("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.C.hm(0,a,m,s)
else{l=P.lJ(a,m,s,C.k,!0)
if(l!=null)a=C.a.aS(a,m,s,l)}return new P.iJ(a,j,c)},
o9:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.mV(22,new P.ju(),t.gc),l=new P.jt(m),k=new P.jv(),j=new P.jw(),i=l.$2(0,225)
k.$3(i,s,1)
k.$3(i,r,14)
k.$3(i,q,34)
k.$3(i,p,3)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(14,225)
k.$3(i,s,1)
k.$3(i,r,15)
k.$3(i,q,34)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(15,225)
k.$3(i,s,1)
k.$3(i,"%",225)
k.$3(i,q,34)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(1,225)
k.$3(i,s,1)
k.$3(i,q,34)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(2,235)
k.$3(i,s,139)
k.$3(i,p,131)
k.$3(i,r,146)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(3,235)
k.$3(i,s,11)
k.$3(i,p,68)
k.$3(i,r,18)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(4,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,"[",232)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(5,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(6,231)
j.$3(i,"19",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(7,231)
j.$3(i,"09",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
k.$3(l.$2(8,8),"]",5)
i=l.$2(9,235)
k.$3(i,s,11)
k.$3(i,r,16)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(16,235)
k.$3(i,s,11)
k.$3(i,r,17)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(17,235)
k.$3(i,s,11)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(10,235)
k.$3(i,s,11)
k.$3(i,r,18)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(18,235)
k.$3(i,s,11)
k.$3(i,r,19)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(19,235)
k.$3(i,s,11)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(11,235)
k.$3(i,s,11)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(12,236)
k.$3(i,s,12)
k.$3(i,o,12)
k.$3(i,n,205)
i=l.$2(13,237)
k.$3(i,s,13)
k.$3(i,o,13)
j.$3(l.$2(20,245),"az",21)
i=l.$2(21,245)
j.$3(i,"az",21)
j.$3(i,"09",21)
k.$3(i,"+-.",21)
return m},
lR:function(a,b,c,d,e){var s,r,q,p,o,n=$.mq()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.c(n,d)
r=n[d]
q=C.a.C(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.c(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.c(e,o)
e[o]=s}return d},
ap:function ap(){},
ab:function ab(a,b){this.a=a
this.b=b},
W:function W(){},
bi:function bi(a){this.a=a},
hp:function hp(){},
hq:function hq(){},
H:function H(){},
dj:function dj(a){this.a=a},
e4:function e4(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dJ:function dJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eT:function eT(a){this.a=a},
eQ:function eQ(a){this.a=a},
et:function et(a){this.a=a},
dw:function dw(a){this.a=a},
e7:function e7(){},
cB:function cB(){},
dy:function dy(a){this.a=a},
fe:function fe(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
i:function i(){},
dK:function dK(){},
o:function o(){},
F:function F(){},
ah:function ah(){},
P:function P(){},
K:function K(){},
B:function B(){},
U:function U(a){this.a=a},
iN:function iN(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
bv:function bv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jn:function jn(a,b){this.a=a
this.b=b},
jm:function jm(a){this.a=a},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(){},
jt:function jt(a){this.a=a},
jv:function jv(){},
jw:function jw(){},
fz:function fz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
f6:function f6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
p2:function(a){var s
if(t.u.b(a)){s=J.mw(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.d3(a.data,a.height,a.width)},
p1:function(a){if(a instanceof P.d3)return{data:a.a,height:a.b,width:a.c}
return a},
b5:function(a){var s,r,q,p,o
if(a==null)return null
s=P.kT(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.j(0,o,a[o])}return s},
p0:function(a){var s={}
a.E(0,new P.jA(s))
return s},
jg:function jg(){},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a){this.a=a},
jh:function jh(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(){},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fx:function fx(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aG:function aG(){},
dP:function dP(){},
aK:function aK(){},
e5:function e5(){},
i6:function i6(){},
ew:function ew(){},
n:function n(){},
aN:function aN(){},
eG:function eG(){},
fl:function fl(){},
fm:function fm(){},
ft:function ft(){},
fu:function fu(){},
fH:function fH(){},
fI:function fI(){},
fO:function fO(){},
fP:function fP(){},
b_:function b_(){},
h8:function h8(){},
dl:function dl(){},
h9:function h9(a){this.a=a},
dm:function dm(){},
aU:function aU(){},
e6:function e6(){},
f1:function f1(){},
ei:function ei(){},
er:function er(){},
fD:function fD(){},
fE:function fE(){}},W={
jY:function(){var s=document.createElement("canvas")
return s},
hr:function(a){return"wheel"},
mM:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.b7(s)}return q},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lx:function(a,b,c,d){var s=W.ja(W.ja(W.ja(W.ja(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
X:function(a,b,c,d){var s=new W.fd(a,b,c==null?null:W.lS(new W.j9(c),t.G),!1)
s.fK()
return s},
lS:function(a,b){var s=$.aA
if(s===C.f)return a
return s.cW(a,b)},
p:function p(){},
h4:function h4(){},
dh:function dh(){},
di:function di(){},
be:function be(){},
bf:function bf(){},
aq:function aq(){},
hi:function hi(){},
G:function G(){},
c9:function c9(){},
hj:function hj(){},
ag:function ag(){},
aC:function aC(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ca:function ca(){},
cb:function cb(){},
dB:function dB(){},
ho:function ho(){},
f3:function f3(a,b){this.a=a
this.b=b},
E:function E(){},
k:function k(){},
e:function e(){},
ac:function ac(){},
bF:function bF(){},
dF:function dF(){},
dH:function dH(){},
ar:function ar(){},
hD:function hD(){},
bk:function bk(){},
bl:function bl(){},
bH:function bH(){},
bJ:function bJ(){},
dt:function dt(){},
bo:function bo(){},
hK:function hK(){},
i1:function i1(){},
bL:function bL(){},
dW:function dW(){},
i2:function i2(a){this.a=a},
dX:function dX(){},
i3:function i3(a){this.a=a},
au:function au(){},
dY:function dY(){},
ad:function ad(){},
f2:function f2(a){this.a=a},
v:function v(){},
cw:function cw(){},
av:function av(){},
ea:function ea(){},
ej:function ej(){},
ib:function ib(a){this.a=a},
el:function el(){},
aj:function aj(){},
en:function en(){},
ax:function ax(){},
eo:function eo(){},
ay:function ay(){},
eu:function eu(){},
im:function im(a){this.a=a},
ak:function ak(){},
aZ:function aZ(){},
al:function al(){},
a8:function a8(){},
ez:function ez(){},
eA:function eA(){},
iv:function iv(){},
az:function az(){},
bt:function bt(){},
eF:function eF(){},
iy:function iy(){},
aP:function aP(){},
iO:function iO(){},
eY:function eY(){},
b1:function b1(){},
bU:function bU(){},
f4:function f4(){},
cN:function cN(){},
fi:function fi(){},
cR:function cR(){},
fC:function fC(){},
fJ:function fJ(){},
k0:function k0(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j9:function j9(a){this.a=a},
kg:function kg(a){this.$ti=a},
J:function J(){},
ce:function ce(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
f5:function f5(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
ff:function ff(){},
fg:function fg(){},
fj:function fj(){},
fk:function fk(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
fv:function fv(){},
fw:function fw(){},
fy:function fy(){},
cX:function cX(){},
cY:function cY(){},
fA:function fA(){},
fB:function fB(){},
fG:function fG(){},
fK:function fK(){},
fL:function fL(){},
d_:function d_(){},
d0:function d0(){},
fM:function fM(){},
fN:function fN(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){}},K={
a1:function(a){var s=new K.ic()
s.e_(a)
return s},
h5:function h5(){},
dI:function dI(){},
hN:function hN(){},
aX:function aX(){this.a=null},
ic:function ic(){this.a=null}},L={es:function es(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},eE:function eE(a){this.b=a
this.c=null},iw:function iw(){var _=this
_.d=_.c=_.b=_.a=null},eH:function eH(a){this.b=a
this.a=this.c=null}},O={
jZ:function(a){var s=new O.Y(a.T("Y<0>"))
s.b7(a)
return s},
Y:function Y(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cs:function cs(){this.b=this.a=null},
kV:function(){var s,r=new O.dU(),q=O.jZ(t.hc)
r.e=q
q.b6(r.geI(),r.geK())
q=new O.aH(r,"emission")
q.c=new A.Z(!1,!1,!1)
q.f=new V.O(0,0,0)
r.f=q
q=new O.aH(r,"ambient")
q.c=new A.Z(!1,!1,!1)
q.f=new V.O(0,0,0)
r.r=q
q=new O.aH(r,"diffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.O(0,0,0)
r.x=q
q=new O.aH(r,"invDiffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.O(0,0,0)
r.y=q
q=new O.hT(r,"specular")
q.c=new A.Z(!1,!1,!1)
q.f=new V.O(0,0,0)
q.ch=100
r.z=q
q=new O.hP(r,"bump")
q.c=new A.Z(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aH(r,"reflect")
q.c=new A.Z(!1,!1,!1)
q.f=new V.O(0,0,0)
r.cx=q
q=new O.hS(r,"refract")
q.c=new A.Z(!1,!1,!1)
q.f=new V.O(0,0,0)
q.ch=1
r.cy=q
q=new O.hO(r,"alpha")
q.c=new A.Z(!1,!1,!1)
q.f=1
r.db=q
q=new D.cl()
q.b7(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.bo(q.geG(),q.gfd(),q.gfh())
r.dx=q
s=new O.hR()
s.b=new V.bg(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.I():s
q.m(0,r.gfu())
q=r.dx
s=q.z
q=s==null?q.z=D.I():s
q.m(0,r.gba())
r.fr=null
return r},
dU:function dU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(){},
hO:function hO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(){},
hP:function hP(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aH:function aH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hR:function hR(){var _=this
_.e=_.d=_.c=_.b=null},
hS:function hS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hT:function hT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ey:function ey(){}},E={
ht:function(){var s,r=new E.bj()
r.a=""
r.b=!0
s=O.jZ(t.l)
r.y=s
s.b6(r.ghn(),r.ghq())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbp(0,null)
r.sce(null)
r.saQ(null)
return r},
lt:function(){if(J.jS(window.navigator.vendor,"Google"))return C.A
if(J.jS(window.navigator.userAgent,"Firefox"))return C.p
var s=window.navigator.appVersion
if(J.aR(s).L(s,"Trident")||C.a.L(s,"Edge"))return C.q
if(J.jS(window.navigator.appName,"Microsoft"))return C.q
return C.B},
lu:function(){var s=window.navigator.appVersion
if(J.aR(s).L(s,"Win"))return C.T
if(C.a.L(s,"Mac"))return C.w
if(C.a.L(s,"Linux"))return C.U
return C.V},
nb:function(a,b){var s=new E.i7(a)
s.dZ(a,b)
return s},
nj:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.lh(a,!0,!0,!0,!1)
s=W.jY()
r=s.style
r.width="100%"
r.height="100%"
J.jV(a).m(0,s)
return E.lh(s,!0,!0,!0,!1)},
lh:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eC(),n=t.z,m=C.i.cg(a,"webgl2",P.mT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.t("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.nb(m,a)
n=new T.is(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.eV(a)
s=new X.hG()
s.d=P.kU(t.e)
n.b=s
s=new X.i4(n)
s.f=0
s.r=V.bs()
s.x=V.bs()
s.ch=s.Q=1
n.c=s
s=new X.hL(n)
s.r=0
s.x=V.bs()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.ix(n)
s.f=V.bs()
s.r=V.bs()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hu
n.Q=(s==null?$.hu=new E.fb(E.lt(),E.lu()):s).a===C.p?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.X(q,"contextmenu",n.geS(),!1))
n.z.push(W.X(a,"focus",n.geY(),!1))
n.z.push(W.X(a,"blur",n.geM(),!1))
n.z.push(W.X(q,"keyup",n.gbF(),!1))
n.z.push(W.X(q,"keydown",n.gbq(),!1))
n.z.push(W.X(a,"mousedown",n.gf3(),!1))
n.z.push(W.X(a,"mouseup",n.gf7(),!1))
n.z.push(W.X(a,p,n.gf5(),!1))
r=n.z
W.hr(a)
W.hr(a)
r.push(W.X(a,W.hr(a),n.gf9(),!1))
n.z.push(W.X(q,p,n.geU(),!1))
n.z.push(W.X(q,"mouseup",n.geW(),!1))
n.z.push(W.X(q,"pointerlockchange",n.gfb(),!1))
n.z.push(W.X(a,"touchstart",n.gfn(),!1))
n.z.push(W.X(a,"touchend",n.gfj(),!1))
n.z.push(W.X(a,"touchmove",n.gfl(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ab(Date.now(),!1)
o.db=0
o.cI()
return o},
hc:function hc(){},
bj:function bj(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bA:function bA(a){this.b=a},
bP:function bP(a){this.b=a},
fb:function fb(a,b){this.a=a
this.b=b},
i7:function i7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
eC:function eC(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iu:function iu(a){this.a=a}},Z={
kf:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bY(c)),35044)
a.bindBuffer(b,null)
return new Z.eZ(b,s)},
an:function(a){return new Z.b0(a)},
eZ:function eZ(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j4:function j4(a){this.a=a},
dr:function dr(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a}},D={
I:function(){var s=new D.bE()
s.d=0
return s},
hd:function hd(){},
bE:function bE(){var _=this
_.d=_.c=_.b=_.a=null},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
Q:function Q(){this.b=null},
aD:function aD(){this.b=null},
aE:function aE(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
k_:function(a,b){var s,r,q=new D.bh()
q.c=new V.O(1,1,1)
q.a=V.nq()
q.d=V.ke()
q.e=V.np()
s=q.b
q.b=b
b.gu().m(0,q.ge8())
r=new D.z("mover",s,q.b)
r.b=!0
q.ar(r)
if(!q.c.n(0,a)){s=q.c
q.c=a
r=new D.z("color",s,a)
r.b=!0
q.ar(r)}return q},
dn:function dn(){},
bh:function bh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
R:function R(){},
cl:function cl(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
ec:function ec(){},
ep:function ep(){}},X={
ck:function(){var s=new X.cj()
s.b7(t.D)
s.f=s.e=null
s.r=!1
s.y=s.x=null
s.bo(s.ge2(),s.ge4(),s.ge6())
return s},
ds:function ds(a,b){this.a=a
this.b=b},
a7:function a7(a,b){this.a=a
this.b=b},
bn:function bn(a){this.c=a
this.b=null},
cj:function cj(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hG:function hG(){this.d=this.b=this.a=null},
co:function co(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
hL:function hL(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
i4:function i4(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ed:function ed(){},
cE:function cE(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
ix:function ix(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
eV:function eV(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mL:function(a){var s=new X.hC(),r=new V.bg(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.lc
if(r==null){r=V.lb(0,0,1,1)
$.lc=r}s.r=r
return s},
jX:function jX(){},
hC:function hC(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(){},
p3:function(a){var s,r,q,p,o,n,m,l,k,j,i=null,h=O.kV(),g=h.dx,f=U.hh(V.ka(1,-3,-1,i))
g.m(0,D.k_(new V.O(0.4,0.4,1),f))
g=h.dx
f=U.hh(V.ka(0,1,0,i))
g.m(0,D.k_(new V.O(0,0.2,0.1),f))
g=h.r
g.san(0,new V.O(0.2,0.2,0.2))
g=h.x
g.san(0,new V.O(0.7,0.7,0.7))
h.z.san(0,new V.O(1,1,1))
g=h.z
g.bJ(new A.Z(!0,g.c.b,!1))
g.cK(10)
s=E.ht()
s.sce(h)
r=F.lf()
F.d8(r,i,i,1,1,1,0,0,1)
F.d8(r,i,i,1,1,0,1,0,3)
F.d8(r,i,i,1,1,0,0,1,2)
F.d8(r,i,i,1,1,-1,0,0,0)
F.d8(r,i,i,1,1,0,-1,0,0)
F.d8(r,i,i,1,1,0,0,-1,3)
r.aK()
for(g=t.o,q=-60;q<=60;q+=12)for(f=q/10,p=-60;p<=60;p+=12){o=E.ht()
o.sbp(0,r)
n=p/10
m=new U.cz()
m.r=m.f=m.e=m.d=m.c=m.b=m.a=0
m.sdO(f)
m.sdB(0,n)
m.sdH(0)
l=m.d
$.A().toString
if(!(Math.abs(l-f)<1e-9)){m.d=f
l=new D.z("deltaYaw",l,f)
l.b=!0
k=m.y
if(k!=null)k.A(l)}l=m.e
$.A().toString
if(!(Math.abs(l-n)<1e-9)){m.e=n
n=new D.z("deltaPitch",l,n)
n.b=!0
l=m.y
if(l!=null)l.A(n)}n=m.f
$.A().toString
if(!(Math.abs(n-0.32)<1e-9)){m.f=0.32
n=new D.z("deltaRoll",n,0.32)
n.b=!0
l=m.y
if(l!=null)l.A(n)}n=new U.bD()
n.sV(0,new V.aI(1,0,0,q,0,1,0,0,0,0,1,p,0,0,0,1))
o.saQ(U.kQ(H.d([m,n],g)))
n=s.y
m=n.$ti.T("u<Y.T*>")
if(n.bH(H.d([o],m))){l=n.a
j=l.length
l.push(o)
m=H.d([o],m)
n=n.c
if(n!=null)n.$2(j,m)}}return s},
lZ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=1000,a0=V.ne("Test 038"),a1=W.jY()
a1.className="pageLargeCanvas"
a1.id=b
a0.a.appendChild(a1)
s=t.i
a0.cR(H.d(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],s))
a0.fN(H.d(["options"],s))
a0.cR(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b)
if(r==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.nj(r,!0,!0,!0,!1)
p=E.ht()
a0=p.y
o=q.f.hk("../resources/Grass.png",!0,!0)
n=U.hh(V.kZ(0,-3,0).l(0,V.aJ(a,0,0,0,0,1,0,0,0,0,a,0,0,0,0,1)).l(0,V.k9(-1.5707963267948966)))
m=O.kV()
l=new V.aW(a,0,0,0,a,0,0,0,1)
if(!J.L(m.b,l)){k=m.b
j=k==null&&!0
if(j)m.a=null
m.b=l
k=new D.z("texture2DMatrix",k,l)
k.b=!0
m.W(k)}m.dx.m(0,D.k_(new V.O(1,1,1),U.hh(V.ka(1,-3,-1,null))))
k=m.r
k.san(0,new V.O(0.5,0.5,0.5))
k=m.x
k.san(0,new V.O(0.5,0.5,0.5))
m.r.sdI(o)
m.x.sdI(o)
k=E.ht()
k.sbp(0,F.pa(20,20))
k.saQ(n)
k.sce(m)
a0.m(0,k)
p.y.m(0,X.p3(q))
k=q.x
i=new U.cL()
a0=X.ck()
a0.aa(39)
a0.aa(68)
j=i.gf_()
a0.gaO().m(0,j)
i.a=a0
a0=X.ck()
a0.aa(37)
a0.aa(65)
a0.gaO().m(0,j)
i.b=a0
a0=X.ck()
a0.aa(81)
a0.gaO().m(0,j)
i.c=a0
a0=X.ck()
a0.aa(69)
a0.gaO().m(0,j)
i.d=a0
a0=X.ck()
a0.aa(40)
a0.aa(83)
a0.gaO().m(0,j)
i.e=a0
a0=X.ck()
a0.aa(38)
a0.aa(87)
a0.gaO().m(0,j)
i.f=a0
a0=U.dv()
a0.sb_(30)
a0.sav(0)
j=i.gaD()
a0.gu().m(0,j)
i.r=a0
a0=U.dv()
a0.sb_(30)
a0.sav(0)
a0.gu().m(0,j)
i.x=a0
a0=U.dv()
a0.sb_(30)
a0.sav(0)
a0.gu().m(0,j)
i.y=a0
i.Q=i.z=null
i.ch=60
i.cx=15
i.cy=0
i.dy=i.dx=i.db=null
i.a.am(k)
i.b.am(k)
i.c.am(k)
i.d.am(k)
i.e.am(k)
i.f.am(k)
a0=q.x
h=new U.cK()
k=U.dv()
k.scf(0,!0)
k.sc9(6.283185307179586)
k.sca(0)
k.sa_(0,0)
k.sb_(100)
k.sP(0)
k.sav(0.5)
h.b=k
j=h.gaD()
k.gu().m(0,j)
k=U.dv()
k.scf(0,!0)
k.sc9(6.283185307179586)
k.sca(0)
k.sa_(0,0)
k.sb_(100)
k.sP(0)
k.sav(0.5)
h.c=k
k.gu().m(0,j)
h.d=null
h.r=h.f=h.e=!1
h.y=h.x=2.5
h.Q=4
h.ch=h.cx=!1
h.db=h.cy=0
h.dx=null
h.dy=0
h.fx=h.fr=null
g=new X.bq(!1,!1,!1)
f=h.d
h.d=g
k=new D.z("modifiers",f,g)
k.b=!0
h.H(k)
k=h.f
if(k!==!1){h.f=!1
k=new D.z("invertX",k,!1)
k.b=!0
h.H(k)}k=h.r
if(k!==!1){h.r=!1
k=new D.z("invertY",k,!1)
k.b=!0
h.H(k)}h.am(a0)
h.b.sc9(1.5707963267948966)
h.b.sca(-1.5707963267948966)
h.b.sav(1)
h.c.sav(1)
h.b.scf(0,!1)
h.gu().m(0,new X.jM(i,h))
e=U.kQ(H.d([i,h],t.o))
a0=new M.dC()
a0.a=!0
k=O.jZ(t.l)
a0.e=k
k.b6(a0.geO(),a0.geQ())
a0.y=a0.x=a0.r=a0.f=null
d=X.mL(null)
c=new X.e8()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saQ(null)
k=c.c
$.A().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
k=new D.z("fov",k,1.0471975511965976)
k.b=!0
c.aG(k)}k=c.d
$.A().toString
if(!(Math.abs(k-0.1)<1e-9)){c.d=0.1
k=new D.z("near",k,0.1)
k.b=!0
c.aG(k)}k=c.e
$.A().toString
if(!(Math.abs(k-2000)<1e-9)){c.e=2000
k=new D.z("far",k,2000)
k.b=!0
c.aG(k)}k=a0.b
if(k!==c){if(k!=null)k.gu().U(0,a0.gaE())
f=a0.b
a0.b=c
c.gu().m(0,a0.gaE())
k=new D.z("camera",f,a0.b)
k.b=!0
a0.aF(k)}k=a0.c
if(k!==d){if(k!=null)k.gu().U(0,a0.gaE())
f=a0.c
a0.c=d
d.gu().m(0,a0.gaE())
k=new D.z("target",f,a0.c)
k.b=!0
a0.aF(k)}a0.e.m(0,p)
a0.b.saQ(e)
k=q.d
if(k!==a0){if(k!=null)k.gu().U(0,q.gcn())
q.d=a0
a0.gu().m(0,q.gcn())
q.co()}a0=new V.he("options")
s=s.getElementById("options")
a0.c=s
if(s==null)H.q("Failed to find options for CheckGroup")
a0.d=H.d([],t.aM)
a0.fM(0,"Mouse Locking",new X.jN(q),!1)
V.pj(q)},
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(a){this.a=a}},V={
kB:function(a,b,c){var s
if(c<=0)s=a
else if(c>=1)s=b
else{if(typeof b!=="number")return b.t()
if(typeof a!=="number")return H.f(a)
s=a+c*(b-a)}return s},
jQ:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.b5(a-b,s)
return(a<0?a+s:a)+b},
D:function(a,b,c){if(a==null)return C.a.ad("null",c)
$.A().toString
return C.a.ad(C.d.dK(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c3:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.r)(a),++q){p=V.D(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.ad(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
kD:function(a){return C.d.hO(Math.pow(2,C.N.c4(Math.log(H.oZ(a))/Math.log(2))))},
mZ:function(){var s=$.kW
return s==null?$.kW=new V.aW(1,0,0,0,1,0,0,0,1):s},
dV:function(){var s=$.l_
return s==null?$.l_=V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kZ:function(a,b,c){return V.aJ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
k9:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aJ(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
kY:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aJ(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
ka:function(a,b,c,d){d=V.ke()
return V.kX(V.l3(),d,new V.C(a,b,c))},
kX:function(a,b,c){var s=c.N(),r=b.aX(s).N(),q=s.aX(r),p=new V.C(a.a,a.b,a.c),o=r.J(0).a3(p),n=q.J(0).a3(p),m=s.J(0).a3(p)
return V.aJ(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bs:function(){var s=$.l2
return s==null?$.l2=new V.aw(0,0):s},
l3:function(){var s=$.aL
return s==null?$.aL=new V.a3(0,0,0):s},
lb:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eh(a,b,c,d)},
eW:function(){var s=$.lr
return s==null?$.lr=new V.C(0,0,0):s},
np:function(){var s=$.iU
return s==null?$.iU=new V.C(-1,0,0):s},
ke:function(){var s=$.iV
return s==null?$.iV=new V.C(0,1,0):s},
nq:function(){var s=$.iW
return s==null?$.iW=new V.C(0,0,1):s},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(){},
aW:function aW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aI:function aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
aw:function aw(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
pj:function(a){P.nk(C.L,new V.jP(a))},
ne:function(a){var s=new V.ii()
s.e1(a,!0)
return s},
he:function he(a){this.a=a
this.d=this.c=null},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jP:function jP(a){this.a=a},
ii:function ii(){this.b=this.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a}},U={
dv:function(){var s=new U.hg()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
hh:function(a){var s=new U.bD()
s.a=a
return s},
kQ:function(a){var s=new U.bG()
s.b7(t.ah)
s.b6(s.geE(),s.gff())
s.bc(0,a)
s.e=null
s.f=V.dV()
s.r=0
return s},
hg:function hg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){this.b=this.a=null},
bG:function bG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cz:function cz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cL:function cL(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dC:function dC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mX:function(a,b){var s=a.aY,r=new A.dT(b,s)
r.e0(b,s)
r.dY(a,b)
return r},
mY:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+b1.gak(b1)+b2.gak(b2)+b3.gak(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.r)(b4),++r)a+="_"+H.h(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)a+="_"+H.h(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)a+="_"+H.h(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.r)(b7),++r)a+="_"+H.h(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
m=b1.a||b1.b||!1||b2.a||b2.b||!1
l=s>0
if(!(a6.a||a6.b||!1))if(!(a7.a||a7.b||!1)){s=a8.a||a8.b||!1||a9.a||a9.b||!1
k=s}else k=!0
else k=!0
s=!a9.a
j=!s||a9.b||!1||l||o>0||m
if(!(a7.a||a7.b||!1))i=a8.a||a8.b||!1||!s||a9.b||!1
else i=!0
if(!i)h=b0.a||b0.b||!1||m
else h=!0
g=b0.a||b0.b||!1
f=a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b||b2.b||b3.b
e=a4>0
d=h||g||j||!1
c=l&&i
a0=a0&&f
b=$.bb()
if(h){s=$.ba()
b=new Z.b0(b.a|s.a)}if(g){s=$.b9()
b=new Z.b0(b.a|s.a)}if(f){s=$.bc()
b=new Z.b0(b.a|s.a)}if(e){s=$.b8()
b=new Z.b0(b.a|s.a)}return new A.hQ(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jx:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jy:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.jx(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.h3(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
ot:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jx(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.b){r=s+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
op:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jy(b,r,"ambient")
b.a+="\n"},
or:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jy(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.e
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
ou:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jy(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.e
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
oA:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jy(b,r,"specular")
r=b.a+="\n"
r+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=r
r+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=r
r+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=r
r+=u.e
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
ow:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
r=a.f
q=r.b
if(q){s+="uniform sampler2D bumpTxt;\n"
b.a=s
s=b.a=s+"\n"}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=r.a
if(!(r||q||!1)||r)s=b.a=s+"   return normalize(normalVec);\n"
else{s=(q?b.a=s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
b.a=s
s+="   vec3 b = normalize(binormalVec);\n"
b.a=s
s+="   vec3 c = normalize(cross(b, n));\n"
b.a=s
s+="   b = cross(n, c);\n"
b.a=s
s+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=s
s+="                   -c.x, -c.y, -c.z,\n"
b.a=s
s+="                    n.x,  n.y,  n.z);\n"
b.a=s
s=b.a=s+"   return mat * normalize(2.0*color - 1.0);\n"}s+="}\n"
b.a=s
b.a=s+"\n"},
oy:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jx(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
oz:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jx(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
oq:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.h(s)
q=A.h3(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 startPnt;\n"
c.a=p
p+="   vec3 endPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.a5()
s=(s&4)!==0
if(s){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+m+"];\n"
p+="\n"
c.a=p
p+="vec3 "+r+"ClosestPoint("+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=p
p+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=p
p+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=p
p+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=p
p+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=p
p+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=p
p+="   return lit.startPnt + t*lineVec;\n"
c.a=p
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Intensity(vec3 normDir, vec3 litPnt, "+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
if(s){p+="   float dist = length(objPos - litPnt);\n"
c.a=p
p+=u.u
c.a=p
p+=u.z
c.a=p
c.a=p+"\n"}p=t.i
o=H.d([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.q(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.d([],p)
s=a.b
if(s.a||s.b||!1)o.push("ambientColor")
if(a.dx){c.a+=u.k
o.push("highLight")
s=c.a+="   vec3 litPnt  = "+r+"ClosestPoint(lit);\n"
s+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=s
s+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=s
s+="   vec3 intensity = "+r+"Intensity(normDir, litPnt, lit);\n"
c.a=s
c.a=s+"   if(length(intensity) > 0.0001) {\n"
n=H.d([],p)
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.q(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.q(o," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
c.a=s+u.o
m=c.a+="   for(int i = 0; i < "+m+"; ++i)\n"
m+="   {\n"
c.a=m
m+="      if(i >= "+r+"Count) break;\n"
c.a=m
m+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=m
m+="   }\n"
c.a=m
m+="   return lightAccum;\n"
c.a=m
m+="}\n"
c.a=m
c.a=m+"\n"},
os:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.h(s)
q=A.h3(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.a5()
s=(s&1)!==0
if(s){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p=c.a=p+"   vec3 objDir;\n"}p+="   vec3 viewDir;\n"
c.a=p
p+="   vec3 color;\n"
c.a=p
p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+j+"];\n"
if(s)for(o=0;o<j;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
p=t.i
m=H.d([],p)
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
p=a.c
if(p.a||p.b||!1)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)k.push("specular(norm, lit.viewDir)")
if(s){p=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
p+="   float tu = dot(offset, lit.objUp);\n"
c.a=p
p+="   float tv = dot(offset, lit.objRight);\n"
c.a=p
p+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=p
p+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.b.q(k," + ")+");\n"}else c.a+="   highLight = "+C.b.q(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.q(m," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(s){for(s=p,o=0;o<j;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}j=s}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+r+"Count) break;\n"
c.a=j
j+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
ox:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.h(s)
q=A.h3(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 point;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.a5()
o=(s&3)!==0
if(o){p+="   mat3 invViewRotMat;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&4)!==0
if(m){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+h+"];\n"
s=(s&1)!==0
if(s)for(l=0;l<h;++l)p=c.a+="uniform samplerCube "+r+"sTextureCube"+l+";\n"
p+="\n"
c.a=p
k=s?", samplerCube txtCube":""
if(n)k+=", samplerCube shadowCube"
p+="vec3 "+r+"Intensity(vec3 normDir, "+q+" lit"+k+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   float dist = length(objPos - lit.point);\n"
if(m){p+=u.u
c.a=p
p+=u.z
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.v
c.a=p
p+=u.q
c.a=p
c.a=p+"\n"}p=t.i
j=H.d([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.b.q(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.d([],p)
m=a.b
if(m.a||m.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.d([],p)
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.q(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.q(j," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(o){for(l=0;l<h;++l){c.a+="   if("+r+"Count <= "+l+") return lightAccum;\n"
k=s?", "+r+"sTextureCube"+l:""
if(n)k+=", "+r+"sShadowCube"+l
p=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+l+"]"+k+");\n"}h=p}else{h=c.a+="   for(int i = 0; i < "+h+"; ++i)\n"
h+="   {\n"
c.a=h
h+="      if(i >= "+r+"Count) break;\n"
c.a=h
h+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=h
h=c.a=h+"   }\n"}h+="   return lightAccum;\n"
c.a=h
h+="}\n"
c.a=h
c.a=h+"\n"},
oB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.h(s)
q=A.h3(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 objPnt;\n"
c.a=p
p+="   vec3 objDir;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.a5()
o=(s&3)!==0
if(o){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p+="   float tuScalar;\n"
c.a=p
p+="   float tvScalar;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&8)!==0
if(m){p+="   float cutoff;\n"
c.a=p
p+="   float coneAngle;\n"
c.a=p}l=(s&4)!==0
if(l){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+e+"];\n"
k=(s&1)!==0
if(k)for(j=0;j<e;++j)p=c.a+=f+r+"sTexture2D"+j+";\n"
if(n)for(j=0;j<e;++j)p=c.a+=f+r+"sShadow2D"+j+";\n"
p+="\n"
c.a=p
i=k?", sampler2D txt2D":""
if(n)i+=", sampler2D shadow2D"
p+="vec3 "+r+"Intensity("+q+" lit"+i+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   vec3 dir = objPos - lit.objPnt;\n"
if((s&6)!==0){s=p+"   float dist = length(dir);\n"
c.a=s}else s=p
if(l){s+=u.u
c.a=s
s+=u.z
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.hu
if(s==null)s=$.hu=new E.fb(E.lt(),E.lu())
p=c.a
if(s.b===C.w){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
c.a=s
s=c.a=s+"   float angle = atan(crossMag, zScale);\n"}else s=c.a=p+"   float angle = acos(zScale);\n"
s+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=s
s+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=s
s+="\n"
c.a=s}if(o){s+="   normDir = normDir / zScale;\n"
c.a=s
s+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=s
s+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=s
s+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=s
s=c.a=s+"\n"}if(n){s+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=s
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}s=t.i
h=H.d([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.b.q(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.d([],s)
p=a.b
if(p.a||p.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.d([],s)
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.q(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.q(h," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
s+=u.o
c.a=s
if(o){for(j=0;j<e;++j){c.a+="   if("+r+"Count <= "+j+") return lightAccum;\n"
i=k?", "+r+"sTexture2D"+j:""
if(n)i+=", "+r+"sShadow2D"+j
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+j+"]"+i+");\n"}e=s}else{e=c.a+="   for(int i = 0; i < "+e+"; ++i)\n"
e+="   {\n"
c.a=e
e+="      if(i >= "+r+"Count) break;\n"
c.a=e
e+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=e
e=c.a=e+"   }\n"}e+="   return lightAccum;\n"
c.a=e
e+="}\n"
c.a=e
c.a=e+"\n"},
ov:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.d([],t.i)
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.q(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oC:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.U("")
h.a="precision mediump float;\n"
h.a=j
s=a.k4
if(s){h.a=i
r=i}else r=j
if(a.r1){r+="varying vec3 binormalVec;\n"
h.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
h.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
h.a=r}if(a.k2){r+="varying vec3 objPos;\n"
h.a=r}r=h.a=(a.k3?h.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
h.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
h.a=r}if(a.dy)r=h.a=r+"uniform mat4 invViewMat;\n"
h.a=r+"\n"
A.ot(a,h)
A.op(a,h)
A.or(a,h)
A.ou(a,h)
A.oA(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.oy(a,h)
A.oz(a,h)}A.ow(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
h.a=p}o=o.b
if(o)p=h.a=p+"uniform sampler2D alphaTxt;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!(n||o||!1))p=h.a=p+"   return 1.0;\n"
else if(o||!1){if(n){if(o){p+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
h.a=p}}else if(o){p+="   float a = texture2D(alphaTxt, txt2D).a;\n"
h.a=p}p+="   if (a <= 0.000001) discard;\n"
h.a=p
p+="   return a;\n"
h.a=p}else if(n){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.oq(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.os(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.ox(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.r)(o),++m)A.oB(a,o[m],h)
A.ov(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.d([],t.i)
if(p){h.a+=u.o
l.push("lightAccum")
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.r)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.q(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
oD:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aM+"];\n"
s+="attribute vec4 bendAttr;\n"
b.a=s
s+="\n"
b.a=s
s+="float weightSum;\n"
b.a=s
s=b.a=s+"vec3 bendPos;\n"
r=a.k4
if(r){s+="vec3 bendNorm;\n"
b.a=s}q=a.r1
s=(q?b.a=s+"vec3 bendBinm;\n":s)+"\n"
b.a=s
s+="void adjustBend(float bendVal)\n"
b.a=s
s+="{\n"
b.a=s
s+="   if(bendVal >= 0.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=s
s+="      if(index < bendMatCount)\n"
b.a=s
s+="      {\n"
b.a=s
s+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=s
s+="         mat4 m = bendValues[index].mat;\n"
b.a=s
s+="         weightSum += weight;\n"
b.a=s
s=b.a=s+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(r){s+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=s}s=(q?b.a=s+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":s)+"      }\n"
b.a=s
s+="   }\n"
b.a=s
s+="}\n"
b.a=s
s+="\n"
b.a=s
s+="void setupBendData()\n"
b.a=s
s+="{\n"
b.a=s
s=b.a=s+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(r){s+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":s)+"   weightSum = 0.0;\n"
b.a=s
s+="   adjustBend(bendAttr.x);\n"
b.a=s
s+="   adjustBend(bendAttr.y);\n"
b.a=s
s+="   adjustBend(bendAttr.z);\n"
b.a=s
s+="   adjustBend(bendAttr.w);\n"
b.a=s
s+="   if(weightSum < 1.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      float weight = 1.0 - weightSum;\n"
b.a=s
s=b.a=s+"      bendPos += posAttr*weight;\n"
if(r){s+="      bendNorm += normAttr*weight;\n"
b.a=s}s=(q?b.a=s+"      bendBinm += binmAttr*weight;\n":s)+"   }\n"
b.a=s
s+="   else\n"
b.a=s
s+="   {\n"
b.a=s
s+="      bendPos = bendPos/weightSum;\n"
b.a=s
s=b.a=s+"   }\n"
if(r){s+="   bendNorm = normalize(bendNorm);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = normalize(bendBinm);\n":s)+"}\n"
b.a=s
b.a=s+"\n"},
oF:function(a,b){var s
if(!a.k4)return
s=b.a+="varying vec3 normalVec;\n"
s+="\n"
b.a=s
s+="vec3 getNorm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
oE:function(a,b){var s
if(!a.r1)return
s=b.a+="varying vec3 binormalVec;\n"
s+="\n"
b.a=s
s+="vec3 getBinm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
oH:function(a,b){var s,r
if(!a.r2)return
s=a.x1
if(s)b.a+="uniform mat3 txt2DMat;\n"
r=b.a+="attribute vec2 txt2DAttr;\n"
r+="varying vec2 txt2D;\n"
b.a=r
r+="\n"
b.a=r
r+="vec2 getTxt2D()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=r+"   return txt2DAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
oI:function(a,b){var s,r
if(!a.rx)return
s=a.x2
if(s)b.a+="uniform mat4 txtCubeMat;\n"
r=b.a+="attribute vec3 txtCubeAttr;\n"
r+="varying vec3 txtCube;\n"
b.a=r
r+="\n"
b.a=r
r+="vec3 getTxtCube()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=r+"   return txtCubeAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
oG:function(a,b){var s
if(!a.k2)return
s=b.a+="varying vec3 objPos;\n"
s+="\n"
b.a=s
s+="vec3 getObjPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
oJ:function(a,b){var s
if(!a.k3)return
s=b.a+="varying vec3 viewPos;\n"
s+="\n"
b.a=s
s+="vec3 getViewPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
h3:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.a7(a,1)},
kc:function(a,b,c,d,e){var s=new A.iB(a,c,e)
s.f=d
P.hJ(d,0,!1,t.e)
return s},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){var _=this
_.i0=_.d1=_.be=_.aY=_.aM=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i8=_.i7=_.i6=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.i5=_.de=_.dd=_.i4=_.dc=_.da=_.d9=_.i3=_.d8=_.d7=_.d6=_.i2=_.d5=_.d4=_.i1=_.d3=_.d2=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dp:function dp(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=a0
_.go=a1
_.id=a2
_.k1=a3
_.k2=a4
_.k3=a5
_.k4=a6
_.r1=a7
_.r2=a8
_.rx=a9
_.ry=b0
_.x1=b1
_.x2=b2
_.y1=b3
_.y2=b4
_.aM=b5
_.aY=b6
_.be=b7},
cF:function cF(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cG:function cG(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cI:function cI(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j},
cJ:function cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p},
cA:function cA(){},
eI:function eI(){},
iG:function iG(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
eJ:function eJ(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
eL:function eL(a,b,c){this.a=a
this.c=b
this.d=c},
eM:function eM(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
eN:function eN(a,b,c){this.a=a
this.c=b
this.d=c},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
eO:function eO(a,b,c){this.a=a
this.c=b
this.d=c},
eP:function eP(a,b,c){this.a=a
this.c=b
this.d=c}},F={
js:function(a){var s,r=a.a
if(typeof r!=="number")return r.S()
s=r>0?1:0
r=a.b
if(typeof r!=="number")return r.S()
if(r>0)s+=2
r=a.c
if(typeof r!=="number")return r.S()
return(r>0?s+4:s)*2},
d8:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.C(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.C(s+a5,r+a3,q+a4)
o=new V.C(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.C(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.js(g)
j=F.js(f)
i=F.m4(a1,a2,new F.jr(h,F.js(e),F.js(d),j,k,a0),b)
if(i!=null)a.hl(i)},
pa:function(a,b){var s,r={}
r.a=s
r.a=null
r.a=new F.jD()
return F.m4(b,a,new F.jE(r),null)},
m4:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)return null
if(b<1)return null
s=F.lf()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
m=o.cQ(new V.bg(n,0,0,1),new V.aw(p,1))
c.$3(m,p,0)
r.push(m.bV(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cQ(new V.bg(h,g,f,1),new V.aw(p,k))
c.$3(m,p,l)
r.push(m.bV(d))}}s.d.fP(a+1,b+1,r)
return s},
dE:function(a,b,c){var s=new F.dD(),r=a.a
if(r==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.t("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.a1()
return s},
lf:function(){var s=new F.id(),r=new F.iX(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.ih(s)
r.b=H.d([],t.k)
s.b=r
r=new F.ig(s)
r.b=H.d([],t.B)
s.c=r
r=new F.ie(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
ls:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.eX(),p=new F.j1()
p.b=H.d([],t.k)
q.b=p
p=new F.j0()
s=t.B
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.iY()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.ml()
q.e=0
p=$.bb()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.ba().a)!==0?e:r
q.x=(s&$.b9().a)!==0?b:r
q.y=(s&$.bc().a)!==0?f:r
q.z=(s&$.by().a)!==0?g:r
q.Q=(s&$.mm().a)!==0?c:r
q.ch=(s&$.c4().a)!==0?i:0
q.cx=(s&$.b8().a)!==0?a:r
return q},
jr:function jr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jD:function jD(){},
jE:function jE(a){this.a=a},
dD:function dD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){this.b=this.a=null},
eb:function eb(){this.a=null},
id:function id(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
eX:function eX(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a},
iX:function iX(a){this.a=a
this.c=this.b=null},
iY:function iY(){this.d=this.c=this.b=null},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(){this.c=this.b=null},
j1:function j1(){this.b=null}},T={eB:function eB(){},iq:function iq(){},ir:function ir(){var _=this
_.y=_.d=_.c=_.b=_.a=null},is:function is(a){var _=this
_.a=a
_.e=_.d=_.b=null},it:function it(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k4.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gM:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.h(H.ef(a))+"'"}}
J.dL.prototype={
i:function(a){return String(a)},
gM:function(a){return a?519018:218159},
$iap:1}
J.ci.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gM:function(a){return 0}}
J.aV.prototype={
gM:function(a){return 0},
i:function(a){return String(a)},
$ikR:1}
J.e9.prototype={}
J.bu.prototype={}
J.as.prototype={
i:function(a){var s=a[$.m8()]
if(s==null)return this.dW(a)
return"JavaScript function for "+H.h(J.a6(s))}}
J.u.prototype={
hF:function(a,b){var s
if(!!a.fixed$length)H.q(P.x("removeAt"))
s=a.length
if(b>=s)throw H.b(P.eg(b,null))
return a.splice(b,1)[0]},
U:function(a,b){var s
if(!!a.fixed$length)H.q(P.x("remove"))
for(s=0;s<a.length;++s)if(J.L(a[s],b)){a.splice(s,1)
return!0}return!1},
bc:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.x("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.r)(b),++r)a.push(b[r])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.bC(a))}},
q:function(a,b){var s,r,q=P.hJ(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.h(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hi:function(a){return this.q(a,"")},
hb:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.bC(a))}return s},
hc:function(a,b,c){return this.hb(a,b,c,t.z)},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
gax:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.mO())},
aU:function(a,b){if(!!a.immutable$list)H.q(P.x("sort"))
H.nh(a,b==null?J.og():b)},
dT:function(a){return this.aU(a,null)},
L:function(a,b){var s
for(s=0;s<a.length;++s)if(J.L(a[s],b))return!0
return!1},
i:function(a){return P.k1(a,"[","]")},
gO:function(a){return new J.a2(a,a.length)},
gM:function(a){return H.cy(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.x("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.c2(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.q(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.c2(a,b))
a[b]=c},
$im:1,
$ii:1,
$io:1}
J.hE.prototype={}
J.a2.prototype={
gD:function(a){return this.d},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bm.prototype={
aL:function(a,b){var s
if(typeof b!="number")throw H.b(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbh(b)
if(this.gbh(a)===s)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
hO:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.x(""+a+".toInt()"))},
c4:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.x(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
dK:function(a,b){var s
if(b>20)throw H.b(P.a0(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
b5:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.x("Result of truncating division is "+H.h(s)+": "+H.h(a)+" ~/ "+b))},
aJ:function(a,b){var s
if(a>0)s=this.cL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fD:function(a,b){if(b<0)throw H.b(H.ao(b))
return this.cL(a,b)},
cL:function(a,b){return b>31?0:a>>>b},
$iW:1,
$iP:1}
J.ch.prototype={$il:1}
J.cg.prototype={}
J.aF.prototype={
R:function(a,b){if(b<0)throw H.b(H.c2(a,b))
if(b>=a.length)H.q(H.c2(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.b(H.c2(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.b(P.kH(b,null,null))
return a+b},
aS:function(a,b,c,d){var s,r,q=P.aY(b,c,a.length)
if(!H.bZ(q))H.q(H.ao(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a0:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a0(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a6:function(a,b){return this.a0(a,b,0)},
p:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eg(b,null))
if(b>c)throw H.b(P.eg(b,null))
if(c>a.length)throw H.b(P.eg(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.p(a,b,null)},
l:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.J)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ad:function(a,b){var s=b-a.length
if(s<=0)return a
return this.l(" ",s)+a},
hv:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.l(c,s)},
bf:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a0(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dj:function(a,b){return this.bf(a,b,0)},
fU:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a0(c,0,s,null,null))
return H.m2(a,b,c)},
L:function(a,b){return this.fU(a,b,0)},
aL:function(a,b){var s
if(typeof b!="string")throw H.b(H.ao(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gM:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iB:1}
H.dO.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.N.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.R(this.a,b)}}
H.m.prototype={}
H.bK.prototype={
gD:function(a){var s=this.d
return s},
v:function(){var s,r=this,q=r.a,p=J.aR(q),o=p.gk(q)
if(r.b!=o)throw H.b(P.bC(q))
s=r.c
if(typeof o!=="number")return H.f(o)
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.bp.prototype={
gO:function(a){return new H.dS(J.bd(this.a),this.b)},
gk:function(a){return J.aT(this.a)},
F:function(a,b){return this.b.$1(J.jT(this.a,b))}}
H.cc.prototype={$im:1}
H.dS.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){var s=this.a
return s}}
H.cM.prototype={
gO:function(a){return new H.f_(J.bd(this.a),this.b)}}
H.f_.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.cd.prototype={}
H.eS.prototype={
j:function(a,b,c){throw H.b(P.x("Cannot modify an unmodifiable list"))}}
H.bS.prototype={}
H.c7.prototype={
i:function(a){return P.k8(this)},
j:function(a,b,c){H.mH()},
$iF:1}
H.c8.prototype={
gk:function(a){return this.a},
bT:function(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bT(0,b))return null
return this.cA(b)},
cA:function(a){return this.b[a]},
E:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cA(q))}}}
H.iz.prototype={
ac:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.e3.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dN.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.h(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.h(r.a)+")"
return q+p+"' on '"+s+"' ("+H.h(r.a)+")"}}
H.eR.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i5.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fF.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bB.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.m6(r==null?"unknown":r)+"'"},
ghT:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ip.prototype={}
H.il.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.m6(s)+"'"}}
H.c6.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c6))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gM:function(a){var s,r=this.c
if(r==null)s=H.cy(this.a)
else s=typeof r!=="object"?J.aa(r):H.cy(r)
return(s^H.cy(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.ef(s))+"'")}}
H.ek.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.y.prototype={
gk:function(a){return this.a},
gab:function(a){return new H.cm(this)},
ghS:function(a){return H.mW(this.gab(this),new H.hF(this))},
bT:function(a,b){var s=this.b
if(s==null)return!1
return this.en(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b8(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b8(p,b)
q=r==null?n:r.b
return q}else return o.hg(b)},
hg:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cB(p,q.dk(a))
r=q.dl(s,a)
if(r<0)return null
return s[r].b},
j:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cs(s==null?q.b=q.bC():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cs(r==null?q.c=q.bC():r,b,c)}else q.hh(b,c)},
hh:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bC()
s=p.dk(a)
r=p.cB(o,s)
if(r==null)p.bK(o,s,[p.bD(a,b)])
else{q=p.dl(r,a)
if(q>=0)r[q].b=b
else r.push(p.bD(a,b))}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.bC(s))
r=r.c}},
cs:function(a,b,c){var s=this.b8(a,b)
if(s==null)this.bK(a,b,this.bD(b,c))
else s.b=c},
bD:function(a,b){var s=this,r=new H.hH(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dk:function(a){return J.aa(a)&0x3ffffff},
dl:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1},
i:function(a){return P.k8(this)},
b8:function(a,b){return a[b]},
cB:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
eq:function(a,b){delete a[b]},
en:function(a,b){return this.b8(a,b)!=null},
bC:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bK(r,s,r)
this.eq(r,s)
return r}}
H.hF.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.lO(this.a).T("2(1)")}}
H.hH.prototype={}
H.cm.prototype={
gk:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.dR(s,s.r)
r.c=s.e
return r}}
H.dR.prototype={
gD:function(a){return this.d},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.bC(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jG.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jH.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jI.prototype={
$1:function(a){return this.a(a)}}
H.dM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ila:1}
H.ct.prototype={$ict:1}
H.T.prototype={$iT:1}
H.bN.prototype={
gk:function(a){return a.length},
$iw:1}
H.br.prototype={
h:function(a,b){H.aQ(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aQ(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$io:1}
H.cu.prototype={
j:function(a,b,c){H.aQ(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$io:1}
H.dZ.prototype={
h:function(a,b){H.aQ(b,a,a.length)
return a[b]}}
H.e_.prototype={
h:function(a,b){H.aQ(b,a,a.length)
return a[b]}}
H.e0.prototype={
h:function(a,b){H.aQ(b,a,a.length)
return a[b]}}
H.e1.prototype={
h:function(a,b){H.aQ(b,a,a.length)
return a[b]}}
H.e2.prototype={
h:function(a,b){H.aQ(b,a,a.length)
return a[b]}}
H.cv.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aQ(b,a,a.length)
return a[b]}}
H.bO.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aQ(b,a,a.length)
return a[b]},
$ibO:1,
$ib_:1}
H.cS.prototype={}
H.cT.prototype={}
H.cU.prototype={}
H.cV.prototype={}
H.ai.prototype={
T:function(a){return H.fR(v.typeUniverse,this,a)},
bs:function(a){return H.nO(v.typeUniverse,this,a)}}
H.fh.prototype={}
H.fc.prototype={
i:function(a){return this.a}}
H.d2.prototype={}
P.j6.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.j5.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.j7.prototype={
$0:function(){this.a.$0()}}
P.j8.prototype={
$0:function(){this.a.$0()}}
P.d1.prototype={
eb:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c1(new P.jl(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))},
ec:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c1(new P.jk(this,a,Date.now(),b),0),a)
else throw H.b(P.x("Periodic timer."))},
$icD:1}
P.jl.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jk.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dX(s,o)}q.c=p
r.d.$1(q)}}
P.bV.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.h(this.a)+")"}}
P.bW.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bV){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bd(s)
if(o instanceof P.bW){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cZ.prototype={
gO:function(a){return new P.bW(this.a())}}
P.f0.prototype={}
P.cC.prototype={}
P.ev.prototype={}
P.cD.prototype={}
P.jq.prototype={}
P.jz.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a6(this.b)
throw s}}
P.jd.prototype={
hK:function(a){var s,r,q,p=null
try{if(C.f===$.aA){a.$0()
return}P.oM(p,p,this,a)}catch(q){s=H.b7(q)
r=H.kz(q)
P.lQ(p,p,this,s,r)}},
hL:function(a,b){var s,r,q,p=null
try{if(C.f===$.aA){a.$1(b)
return}P.oN(p,p,this,a,b)}catch(q){s=H.b7(q)
r=H.kz(q)
P.lQ(p,p,this,s,r)}},
hM:function(a,b){return this.hL(a,b,t.z)},
fR:function(a){return new P.je(this,a)},
cW:function(a,b){return new P.jf(this,a,b)}}
P.je.prototype={
$0:function(){return this.a.hK(this.b)}}
P.jf.prototype={
$1:function(a){return this.a.hM(this.b,a)},
$S:function(){return this.c.T("~(0)")}}
P.cO.prototype={
gO:function(a){var s=new P.cP(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
L:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ek(b)
return r}},
ek:function(a){var s=this.d
if(s==null)return!1
return this.bz(s[this.bv(a)],a)>=0},
m:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cu(s==null?q.b=P.kh():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cu(r==null?q.c=P.kh():r,b)}else return q.ee(0,b)},
ee:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kh()
s=q.bv(b)
r=p[s]
if(r==null)p[s]=[q.bu(b)]
else{if(q.bz(r,b)>=0)return!1
r.push(q.bu(b))}return!0},
U:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fq(this.c,b)
else return this.fp(0,b)},
fp:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bv(b)
r=n[s]
q=o.bz(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cO(p)
return!0},
cu:function(a,b){if(a[b]!=null)return!1
a[b]=this.bu(b)
return!0},
fq:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cO(s)
delete a[b]
return!0},
cE:function(){this.r=1073741823&this.r+1},
bu:function(a){var s,r=this,q=new P.jc(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cE()
return q},
cO:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cE()},
bv:function(a){return J.aa(a)&1073741823},
bz:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1}}
P.jc.prototype={}
P.cP.prototype={
gD:function(a){return this.d},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.bC(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cf.prototype={}
P.hI.prototype={
$2:function(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cn.prototype={$im:1,$ii:1,$io:1}
P.j.prototype={
gO:function(a){return new H.bK(a,this.gk(a))},
F:function(a,b){return this.h(a,b)},
gdm:function(a){return this.gk(a)===0},
hP:function(a){var s,r,q,p,o=this
if(o.gdm(a)){s=J.k2(0,H.bw(a).T("j.E"))
return s}r=o.h(a,0)
q=P.hJ(o.gk(a),r,!0,H.bw(a).T("j.E"))
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.f(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
h9:function(a,b,c,d){var s
P.aY(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
i:function(a){return P.k1(a,"[","]")}}
P.cp.prototype={}
P.hM.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.h(a)
r.a=s+": "
r.a+=H.h(b)},
$S:17}
P.at.prototype={
E:function(a,b){var s,r
for(s=J.bd(this.gab(a));s.v();){r=s.gD(s)
b.$2(r,this.h(a,r))}},
gk:function(a){return J.aT(this.gab(a))},
i:function(a){return P.k8(a)},
$iF:1}
P.fS.prototype={
j:function(a,b,c){throw H.b(P.x("Cannot modify unmodifiable map"))}}
P.cq.prototype={
h:function(a,b){return J.c5(this.a,b)},
j:function(a,b,c){J.jR(this.a,b,c)},
E:function(a,b){J.jU(this.a,b)},
gk:function(a){return J.aT(this.a)},
i:function(a){return J.a6(this.a)},
$iF:1}
P.bT.prototype={}
P.cW.prototype={
i:function(a){return P.k1(this,"{","}")},
F:function(a,b){var s,r,q,p="index"
P.my(b,p)
P.l9(b,p)
for(s=P.ny(this,this.r),r=0;s.v();){q=s.d
if(b===r)return q;++r}throw H.b(P.M(b,this,p,null,r))},
$im:1,
$ii:1}
P.cQ.prototype={}
P.d6.prototype={}
P.iR.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.b7(r)}return null}}
P.iS.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.b7(r)}return null}}
P.ha.prototype={
hm:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.aY(a2,a3,a1.length)
if(a3==null)throw H.b(P.l8("Invalid range"))
s=$.mo()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.jF(C.a.C(a1,l))
h=H.jF(C.a.C(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.c(s,g)
f=s[g]
if(f>=0){g=C.a.R("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.U("")
e=p}else e=p
d=e.a+=C.a.p(a1,q,r)
e.a=d+H.aM(k)
q=l
continue}}throw H.b(P.a_("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.p(a1,q,a3)
d=e.length
if(o>=0)P.kI(a1,n,a3,o,m,d)
else{c=C.c.b5(d-1,4)+1
if(c===1)throw H.b(P.a_(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aS(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.kI(a1,n,a3,o,m,b)
else{c=C.c.b5(b,4)
if(c===1)throw H.b(P.a_(a,a1,a3))
if(c>1)a1=C.a.aS(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hb.prototype={}
P.du.prototype={}
P.dx.prototype={}
P.hs.prototype={}
P.iP.prototype={
gh8:function(){return C.K}}
P.iT.prototype={
bU:function(a){var s,r,q,p=P.aY(0,null,a.length)
if(p==null)throw H.b(P.l8("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jp(r)
if(q.es(a,0,p)!==p){J.mu(a,p-1)
q.bO()}return new Uint8Array(r.subarray(0,H.o8(0,q.b,r.length)))}}
P.jp.prototype={
bO:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
fL:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.c(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.c(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=128|s&63
return!0}else{n.bO()
return!1}},
es:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.R(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fL(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bO()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.c(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.c(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=128|p&63}}}return q}}
P.iQ.prototype={
bU:function(a){var s=this.a,r=P.nn(s,a,0,null)
if(r!=null)return r
return new P.jo(s).fV(a,0,null,!0)}}
P.jo.prototype={
fV:function(a,b,c,d){var s,r,q,p,o=this,n=P.aY(b,c,J.aT(a))
if(b===n)return""
s=P.o2(a,b,n)
if(typeof n!=="number")return n.t()
n-=b
r=o.bw(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.o3(q)
o.b=0
throw H.b(P.a_(p,a,b+o.c))}return r},
bw:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.t()
if(c-b>1000){s=C.c.Z(b+c,2)
r=q.bw(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bw(a,s,c,d)}return q.fZ(a,b,c,d)},
fZ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.U(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aM(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aM(j)
break
case 65:g.a+=H.aM(j);--f
break
default:p=g.a+=H.aM(j)
g.a=p+H.aM(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.c(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.c(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.c(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.c(a,l)
g.a+=H.aM(a[l])}else g.a+=P.ex(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aM(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.ap.prototype={}
P.ab.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aL:function(a,b){return C.c.aL(this.a,b.a)},
gM:function(a){var s=this.a
return(s^C.c.aJ(s,30))&1073741823},
i:function(a){var s=this,r=P.mI(H.n7(s)),q=P.dz(H.n5(s)),p=P.dz(H.n1(s)),o=P.dz(H.n2(s)),n=P.dz(H.n4(s)),m=P.dz(H.n6(s)),l=P.mJ(H.n3(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.W.prototype={}
P.bi.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bi&&this.a===b.a},
gM:function(a){return C.c.gM(this.a)},
aL:function(a,b){return C.c.aL(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hq(),o=this.a
if(o<0)return"-"+new P.bi(0-o).i(0)
s=p.$1(C.c.Z(o,6e7)%60)
r=p.$1(C.c.Z(o,1e6)%60)
q=new P.hp().$1(o%1e6)
return""+C.c.Z(o,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.hp.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.H.prototype={}
P.dj.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hw(s)
return"Assertion failed"}}
P.e4.prototype={
i:function(a){return"Throw of null."}}
P.af.prototype={
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gby()+o+m
if(!q.a)return l
s=q.gbx()
r=P.hw(q.b)
return l+s+": "+r}}
P.bR.prototype={
gby:function(){return"RangeError"},
gbx:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.h(q):""
else if(q==null)s=": Not greater than or equal to "+H.h(r)
else if(q>r)s=": Not in inclusive range "+H.h(r)+".."+H.h(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.h(r)
return s}}
P.dJ.prototype={
gby:function(){return"RangeError"},
gbx:function(){var s,r=this.b
if(typeof r!=="number")return r.a2()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.h(s)},
gk:function(a){return this.f}}
P.eT.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eQ.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.et.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dw.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hw(s)+"."}}
P.e7.prototype={
i:function(a){return"Out of Memory"},
$iH:1}
P.cB.prototype={
i:function(a){return"Stack Overflow"},
$iH:1}
P.dy.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fe.prototype={
i:function(a){return"Exception: "+this.a}}
P.hB.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.p(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.R(d,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(e-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-e<75){k=m-75
l=m
i=""}else{k=e-36
l=e+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}h=C.a.p(d,k,l)
return f+j+h+i+"\n"+C.a.l(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.h(e)+")"):f}}
P.l.prototype={}
P.i.prototype={
gk:function(a){var s,r=this.gO(this)
for(s=0;r.v();)++s
return s},
F:function(a,b){var s,r,q
P.l9(b,"index")
for(s=this.gO(this),r=0;s.v();){q=s.gD(s)
if(b===r)return q;++r}throw H.b(P.M(b,this,"index",null,r))},
i:function(a){return P.mN(this,"(",")")}}
P.dK.prototype={}
P.o.prototype={$im:1,$ii:1}
P.F.prototype={}
P.ah.prototype={
gM:function(a){return P.K.prototype.gM.call(C.n,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
n:function(a,b){return this===b},
gM:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.h(H.ef(this))+"'"},
toString:function(){return this.i(this)}}
P.B.prototype={}
P.U.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iN.prototype={
$2:function(a,b){var s,r,q,p=J.ky(b).dj(b,"=")
if(p===-1){if(b!=="")J.jR(a,P.kq(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.p(b,0,p)
r=C.a.a7(b,p+1)
q=this.a
J.jR(a,P.kq(s,0,s.length,q,!0),P.kq(r,0,r.length,q,!0))}return a}}
P.iK.prototype={
$2:function(a,b){throw H.b(P.a_("Illegal IPv4 address, "+a,this.a,b))}}
P.iL.prototype={
$2:function(a,b){throw H.b(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iM.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jJ(C.a.p(this.b,a,b),16)
if(typeof s!=="number")return s.a2()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bv.prototype={
gbM:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.h(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.q(H.k6("Field '_text' has been assigned during initialization."))}return o},
gM:function(a){var s=this,r=s.z
if(r==null){r=C.a.gM(s.gbM())
if(s.z==null)s.z=r
else r=H.q(H.k6("Field 'hashCode' has been assigned during initialization."))}return r},
gbk:function(){var s=this,r=s.Q
if(r==null){r=new P.bT(P.ln(s.gb2(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.k6("Field 'queryParameters' has been assigned during initialization."))}return r},
gdN:function(){return this.b},
gc6:function(a){var s=this.c
if(s==null)return""
if(C.a.a6(s,"["))return C.a.p(s,1,s.length-1)
return s},
gbj:function(a){var s=this.d
return s==null?P.lF(this.a):s},
gb2:function(a){var s=this.f
return s==null?"":s},
gc5:function(){var s=this.r
return s==null?"":s},
dF:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a6(s,"/"))s="/"+s
q=s
p=P.ko(null,0,0,b)
return new P.bv(n,l,j,k,q,p,o.r)},
gdf:function(){return this.c!=null},
gdi:function(){return this.f!=null},
gdg:function(){return this.r!=null},
i:function(a){return this.gbM()},
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbn()&&s.c!=null===b.gdf()&&s.b===b.gdN()&&s.gc6(s)===b.gc6(b)&&s.gbj(s)===b.gbj(b)&&s.e===b.gdA(b)&&s.f!=null===b.gdi()&&s.gb2(s)===b.gb2(b)&&s.r!=null===b.gdg()&&s.gc5()===b.gc5()},
$ieU:1,
gbn:function(){return this.a},
gdA:function(a){return this.e}}
P.jn.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.h(P.kr(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.h(P.kr(C.h,b,C.e,!0))}}}
P.jm.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.bd(b),r=this.a;s.v();)r.$2(a,s.gD(s))}}
P.iJ.prototype={
gdM:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bf(s,"?",m)
q=s.length
if(r>=0){p=P.d7(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.f6("data","",n,n,P.d7(s,m,q,C.v,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ju.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jt.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.mv(s,0,96,b)
return s},
$S:18}
P.jv.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.jw.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.fz.prototype={
gdf:function(){return this.c>0},
gdh:function(){return this.c>0&&this.d+1<this.e},
gdi:function(){return this.f<this.r},
gdg:function(){return this.r<this.a.length},
gcC:function(){return this.b===4&&C.a.a6(this.a,"http")},
gcD:function(){return this.b===5&&C.a.a6(this.a,"https")},
gbn:function(){var s=this.x
return s==null?this.x=this.el():s},
el:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcC())return"http"
if(s.gcD())return"https"
if(r===4&&C.a.a6(s.a,"file"))return"file"
if(r===7&&C.a.a6(s.a,"package"))return"package"
return C.a.p(s.a,0,r)},
gdN:function(){var s=this.c,r=this.b+3
return s>r?C.a.p(this.a,r,s-1):""},
gc6:function(a){var s=this.c
return s>0?C.a.p(this.a,s,this.d):""},
gbj:function(a){var s=this
if(s.gdh())return P.jJ(C.a.p(s.a,s.d+1,s.e),null)
if(s.gcC())return 80
if(s.gcD())return 443
return 0},
gdA:function(a){return C.a.p(this.a,this.e,this.f)},
gb2:function(a){var s=this.f,r=this.r
return s<r?C.a.p(this.a,s+1,r):""},
gc5:function(){var s=this.r,r=this.a
return s<r.length?C.a.a7(r,s+1):""},
gbk:function(){var s=this
if(s.f>=s.r)return C.S
return new P.bT(P.ln(s.gb2(s)),t.U)},
dF:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbn(),k=l==="file",j=n.c,i=j>0?C.a.p(n.a,n.b+3,j):"",h=n.gdh()?n.gbj(n):m
j=n.c
if(j>0)s=C.a.p(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.p(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a6(r,"/"))r="/"+r
p=P.ko(m,0,0,b)
q=n.r
o=q<j.length?C.a.a7(j,q+1):m
return new P.bv(l,i,s,h,r,p,o)},
gM:function(a){var s=this.y
return s==null?this.y=C.a.gM(this.a):s},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ieU:1}
P.f6.prototype={}
W.p.prototype={}
W.h4.prototype={
gk:function(a){return a.length}}
W.dh.prototype={
i:function(a){return String(a)}}
W.di.prototype={
i:function(a){return String(a)}}
W.be.prototype={$ibe:1}
W.bf.prototype={
cg:function(a,b,c){if(c!=null)return a.getContext(b,P.p0(c))
return a.getContext(b)},
dP:function(a,b){return this.cg(a,b,null)},
$ibf:1}
W.aq.prototype={
gk:function(a){return a.length}}
W.hi.prototype={
gk:function(a){return a.length}}
W.G.prototype={$iG:1}
W.c9.prototype={
gk:function(a){return a.length}}
W.hj.prototype={}
W.ag.prototype={}
W.aC.prototype={}
W.hk.prototype={
gk:function(a){return a.length}}
W.hl.prototype={
gk:function(a){return a.length}}
W.hm.prototype={
gk:function(a){return a.length}}
W.hn.prototype={
i:function(a){return String(a)}}
W.ca.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.cb.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaB(a))+" x "+H.h(this.gaw(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b6(b)
s=a.left==s.gbi(b)&&a.top==s.gbl(b)&&this.gaB(a)==s.gaB(b)&&this.gaw(a)==s.gaw(b)}else s=!1
return s},
gM:function(a){return W.lx(J.aa(a.left),J.aa(a.top),J.aa(this.gaB(a)),J.aa(this.gaw(a)))},
gcX:function(a){return a.bottom},
gaw:function(a){return a.height},
gbi:function(a){return a.left},
gcd:function(a){return a.right},
gbl:function(a){return a.top},
gaB:function(a){return a.width},
$ia4:1}
W.dB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.ho.prototype={
gk:function(a){return a.length}}
W.f3.prototype={
gdm:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
j:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
m:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.hP(this)
return new J.a2(s,s.length)}}
W.E.prototype={
gcY:function(a){return new W.f3(a,a.children)},
gcZ:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a2()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a2()
if(p<0)p=-p*0
return new P.a4(s,r,q,p,t.q)},
i:function(a){return a.localName},
$iE:1}
W.k.prototype={$ik:1}
W.e.prototype={
fO:function(a,b,c,d){if(c!=null)this.ef(a,b,c,!1)},
ef:function(a,b,c,d){return a.addEventListener(b,H.c1(c,1),!1)},
$ie:1}
W.ac.prototype={$iac:1}
W.bF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1,
$ibF:1}
W.dF.prototype={
gk:function(a){return a.length}}
W.dH.prototype={
gk:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.hD.prototype={
gk:function(a){return a.length}}
W.bk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.bl.prototype={
gd_:function(a){return a.data},
$ibl:1}
W.bH.prototype={$ibH:1}
W.bJ.prototype={$ibJ:1}
W.dt.prototype={$iE:1,$ie:1,$iv:1}
W.bo.prototype={$ibo:1}
W.hK.prototype={
i:function(a){return String(a)}}
W.i1.prototype={
gk:function(a){return a.length}}
W.bL.prototype={$ibL:1}
W.dW.prototype={
h:function(a,b){return P.b5(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b5(s.value[1]))}},
gab:function(a){var s=H.d([],t.s)
this.E(a,new W.i2(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.x("Not supported"))},
$iF:1}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dX.prototype={
h:function(a,b){return P.b5(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b5(s.value[1]))}},
gab:function(a){var s=H.d([],t.s)
this.E(a,new W.i3(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.x("Not supported"))},
$iF:1}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.dY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.ad.prototype={$iad:1}
W.f2.prototype={
j:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.ce(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.v.prototype={
hI:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.ms(s,b,a)}catch(q){H.b7(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dV(a):s},
fs:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.av.prototype={
gk:function(a){return a.length},
$iav:1}
W.ea.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.ej.prototype={
h:function(a,b){return P.b5(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b5(s.value[1]))}},
gab:function(a){var s=H.d([],t.s)
this.E(a,new W.ib(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.x("Not supported"))},
$iF:1}
W.ib.prototype={
$2:function(a,b){return this.a.push(a)}}
W.el.prototype={
gk:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.en.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.ax.prototype={$iax:1}
W.eo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.ay.prototype={
gk:function(a){return a.length},
$iay:1}
W.eu.prototype={
h:function(a,b){return a.getItem(H.o6(b))},
j:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gab:function(a){var s=H.d([],t.s)
this.E(a,new W.im(s))
return s},
gk:function(a){return a.length},
$iF:1}
W.im.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ak.prototype={$iak:1}
W.aZ.prototype={$iaZ:1}
W.al.prototype={$ial:1}
W.a8.prototype={$ia8:1}
W.ez.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.eA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.iv.prototype={
gk:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.bt.prototype={$ibt:1}
W.eF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.iy.prototype={
gk:function(a){return a.length}}
W.aP.prototype={}
W.iO.prototype={
i:function(a){return String(a)}}
W.eY.prototype={
gk:function(a){return a.length}}
W.b1.prototype={
gh0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.x("deltaY is not supported"))},
gh_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.x("deltaX is not supported"))},
$ib1:1}
W.bU.prototype={
ft:function(a,b){return a.requestAnimationFrame(H.c1(b,1))},
er:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.f4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.cN.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b6(b)
s=a.left==s.gbi(b)&&a.top==s.gbl(b)&&a.width==s.gaB(b)&&a.height==s.gaw(b)}else s=!1
return s},
gM:function(a){return W.lx(J.aa(a.left),J.aa(a.top),J.aa(a.width),J.aa(a.height))},
gaw:function(a){return a.height},
gaB:function(a){return a.width}}
W.fi.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.cR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.fC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$im:1,
$iw:1,
$ii:1,
$io:1}
W.k0.prototype={}
W.fd.prototype={
fK:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mt(s,this.c,r,!1)}}}
W.j9.prototype={
$1:function(a){return this.a.$1(a)}}
W.kg.prototype={}
W.J.prototype={
gO:function(a){return new W.ce(a,this.gk(a))}}
W.ce.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.c5(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return this.d}}
W.f5.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fy.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fG.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
P.jg.prototype={
c3:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bm:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.kt(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ab)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.iI("structured clone of RegExp"))
if(t.v.b(a))return a
if(t.F.b(a))return a
if(t.bX.b(a))return a
if(t.u.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.c3(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.jU(a,new P.ji(n,o))
return n.a}if(t.aH.b(a)){s=o.c3(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.fX(a,s)}if(t.eH.b(a)){s=o.c3(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hd(a,new P.jj(n,o))
return n.b}throw H.b(P.iI("structured clone of other type"))},
fX:function(a,b){var s,r=J.aR(a),q=r.gk(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.f(q)
s=0
for(;s<q;++s){o=this.bm(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.ji.prototype={
$2:function(a,b){this.a.a[a]=this.b.bm(b)},
$S:3}
P.jj.prototype={
$2:function(a,b){this.a.b[a]=this.b.bm(b)},
$S:3}
P.d3.prototype={$ibl:1,
gd_:function(a){return this.a}}
P.jA.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jh.prototype={
hd:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dG.prototype={
gb9:function(){return new H.bp(new H.cM(this.b,new P.hz()),new P.hA())},
j:function(a,b,c){var s=this.gb9()
J.mx(s.b.$1(J.jT(s.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aT(this.gb9().a)},
h:function(a,b){var s=this.gb9()
return s.b.$1(J.jT(s.a,b))},
gO:function(a){var s=P.k7(this.gb9(),!1,t.h)
return new J.a2(s,s.length)}}
P.hz.prototype={
$1:function(a){return t.h.b(a)}}
P.hA.prototype={
$1:function(a){return t.h.a(a)}}
P.fx.prototype={
gcd:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
gcX:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.h(s.a)+", "+H.h(s.b)+") "+H.h(s.c)+" x "+H.h(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.b6(b)
if(s==r.gbi(b)){q=n.b
if(q==r.gbl(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.f(p)
o=n.$ti.c
if(o.a(s+p)===r.gcd(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.f(s)
r=o.a(q+s)===r.gcX(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gM:function(a){var s,r=this,q=r.a,p=J.aa(q),o=r.b,n=J.aa(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.f(m)
s=r.$ti.c
m=C.c.gM(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.f(q)
q=C.c.gM(s.a(o+q))
return P.nx(P.jb(P.jb(P.jb(P.jb(0,p),n),m),q))}}
P.a4.prototype={
gbi:function(a){return this.a},
gbl:function(a){return this.b},
gaB:function(a){return this.c},
gaw:function(a){return this.d}}
P.aG.prototype={$iaG:1}
P.dP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.aK.prototype={$iaK:1}
P.e5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.i6.prototype={
gk:function(a){return a.length}}
P.ew.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.n.prototype={
gcY:function(a){return new P.dG(a,new W.f2(a))}}
P.aN.prototype={$iaN:1}
P.eG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.fl.prototype={}
P.fm.prototype={}
P.ft.prototype={}
P.fu.prototype={}
P.fH.prototype={}
P.fI.prototype={}
P.fO.prototype={}
P.fP.prototype={}
P.b_.prototype={$im:1,$ii:1,$io:1}
P.h8.prototype={
gk:function(a){return a.length}}
P.dl.prototype={
h:function(a,b){return P.b5(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b5(s.value[1]))}},
gab:function(a){var s=H.d([],t.s)
this.E(a,new P.h9(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.b(P.x("Not supported"))},
$iF:1}
P.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dm.prototype={
gk:function(a){return a.length}}
P.aU.prototype={}
P.e6.prototype={
gk:function(a){return a.length}}
P.f1.prototype={}
P.ei.prototype={
hN:function(a,b,c,d,e,f,g){var s
if(t.u.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.p1(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bz("Incorrect number or type of arguments"))}}
P.er.prototype={
gk:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.M(b,a,null,null,null))
s=P.b5(a.item(b))
s.toString
return s},
j:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.fD.prototype={}
P.fE.prototype={}
K.h5.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"}}
K.dI.prototype={
aP:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].aP(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.hN.prototype={}
K.aX.prototype={
aP:function(a,b){return!this.dU(0,b)},
i:function(a){return"!["+this.cj(0)+"]"}}
K.ic.prototype={
e_:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.t("May not create a Set with zero characters."))
s=new H.y(t.E)
for(r=new H.bK(a,a.gk(a));r.v();){q=r.d
s.j(0,q,!0)}p=P.k7(s.gab(s),!0,t.e)
C.b.dT(p)
this.a=p},
aP:function(a,b){return C.b.L(this.a,b)},
i:function(a){return P.ex(this.a,0,null)}}
L.es.prototype={
q:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.eH(this.a.K(0,b))
p.a=H.d([],t.L)
p.c=!1
this.c.push(p)
return p},
ha:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.aP(0,a))return p}return null},
i:function(a){return this.b},
cN:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.L(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gab(l),l=l.gO(l);l.v();){r=l.gD(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.h(r)+" => ["+H.h(q)+"]")
m=s.c.L(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eD.prototype={
i:function(a){var s=H.m3(this.b,"\n","\\n"),r=H.m3(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eE.prototype={
i:function(a){return this.b}}
L.iw.prototype={
K:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.es(this,b)
s.c=H.d([],t.br)
this.a.j(0,b,s)}return s},
b3:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eE(a)
s.c=new H.y(t.dO)
this.b.j(0,a,s)}return s},
dL:function(a){return this.hQ(a)},
hQ:function(a){var s=this
return P.oo(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dL(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.hF(a1,0)
else{if(!r.v()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.ha(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.ex(a0,0,null)
throw H.b(P.t("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.x("removeRange"))
P.aY(0,k,a0.length)
a0.splice(0,k-0)
C.b.bc(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.L(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)b.push(j)
d=h.b
if(d.d!=null){g=P.ex(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.eD(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.L(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.nv()
case 1:return P.nw(o)}}},t.eB)},
i:function(a){var s,r=new P.U(""),q=this.d
if(q!=null)r.a=q.cN()+"\n"
for(q=this.a,q=q.ghS(q),q=q.gO(q);q.v();){s=q.gD(q)
if(s!=this.d)r.a+=s.cN()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.eH.prototype={
i:function(a){return this.b.b+": "+this.cj(0)}}
O.Y.prototype={
b7:function(a){this.a=H.d([],a.T("u<0*>"))
this.c=this.b=null},
bo:function(a,b,c){this.b=b
this.c=a},
b6:function(a,b){return this.bo(a,null,b)},
bH:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cm:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a2(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
m:function(a,b){var s,r,q=this,p=H.lO(q).T("u<Y.T*>")
if(q.bH(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.cm(r,H.d([b],p))}},
bc:function(a,b){var s,r
if(this.bH(b)){s=this.a
r=s.length
C.b.bc(s,b)
this.cm(r,b)}},
$ii:1}
O.cs.prototype={
gk:function(a){return this.a.length},
gu:function(){var s=this.b
return s==null?this.b=D.I():s},
aC:function(){var s=this.b
if(s!=null)s.A(null)},
gV:function(a){var s=this.a
if(s.length>0)return C.b.gax(s)
else return V.dV()},
dD:function(a){var s=this.a
if(a==null)s.push(V.dV())
else s.push(a)
this.aC()},
cc:function(){var s=this.a
if(s.length>0){s.pop()
this.aC()}}}
E.hc.prototype={}
E.bj.prototype={
ct:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a2(s,s.length);s.v();){r=s.d
if(r.f==null)r.ct()}},
sbp:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gu().U(0,q.gdu())
s=q.c
if(s!=null)s.gu().m(0,q.gdu())
r=new D.z("shape",p,q.c)
r.b=!0
q.ai(r)}},
sce:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gu().U(0,q.gdw())
s=q.f
q.f=a
if(a!=null)a.gu().m(0,q.gdw())
q.ct()
r=new D.z("technique",s,q.f)
r.b=!0
q.ai(r)}},
saQ:function(a){var s,r,q=this
if(!J.L(q.r,a)){s=q.r
if(s!=null)s.gu().U(0,q.gds())
if(a!=null)a.gu().m(0,q.gds())
q.r=a
r=new D.z("mover",s,a)
r.b=!0
q.ai(r)}},
ae:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aA(0,b,q):null
if(!J.L(o,q.x)){s=q.x
q.x=o
r=new D.z("matrix",s,o)
r.b=!0
q.ai(r)}p=q.f
if(p!=null)p.ae(0,b)
for(p=q.y.a,p=new J.a2(p,p.length);p.v();)p.d.ae(0,b)},
aR:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gV(q))
else o.push(p.l(0,q.gV(q)))
q.aC()
a.dE(r.f)
q=a.dy
s=(q&&C.b).gax(q)
if(s!=null&&r.d!=null)s.hH(a,r)
for(q=r.y.a,q=new J.a2(q,q.length);q.v();)q.d.aR(a)
a.dC()
a.dx.cc()},
ai:function(a){var s=this.z
if(s!=null)s.A(a)},
a1:function(){return this.ai(null)},
dv:function(a){this.e=null
this.ai(a)},
ht:function(){return this.dv(null)},
dz:function(a){this.ai(a)},
hu:function(){return this.dz(null)},
dt:function(a){this.ai(a)},
hs:function(){return this.dt(null)},
dr:function(a){this.ai(a)},
hp:function(){return this.dr(null)},
ho:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdq(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bE()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.a1()},
hr:function(a,b){var s,r
for(s=b.gO(b),r=this.gdq();s.v();)s.gD(s).gu().U(0,r)
this.a1()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bA.prototype={
i:function(a){return this.b}}
E.bP.prototype={
i:function(a){return this.b}}
E.fb.prototype={}
E.i7.prototype={
dZ:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ab(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cs()
r=t.p
s.a=H.d([],r)
s.gu().m(0,new E.i8(q))
q.cy=s
s=new O.cs()
s.a=H.d([],r)
s.gu().m(0,new E.i9(q))
q.db=s
s=new O.cs()
s.a=H.d([],r)
s.gu().m(0,new E.ia(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.y(t.h9)},
ghE:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gV(q)
s=r.db
s=r.z=q.l(0,s.gV(s))
q=s}return q},
dE:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gax(s):a)},
dC:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.i8.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.i9.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.ia.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eC.prototype={
cp:function(a){this.dG()},
co:function(){return this.cp(null)},
ghe:function(){var s,r=this,q=Date.now(),p=C.c.Z(P.kO(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ab(q,!1)
return s/p},
cI:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.l()
if(typeof p!=="number")return H.f(p)
s=C.d.c4(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.l()
r=C.d.c4(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.li(C.m,q.ghJ())}},
dG:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.z.er(s)
r=W.lS(new E.iu(this),t.H)
r.toString
C.z.ft(s,r)}},
hG:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cI()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ab(p,!1)
q.y=P.kO(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aC()
p=q.db
C.b.sk(p.a,0)
p.aC()
p=q.dx
C.b.sk(p.a,0)
p.aC()
p=q.dy
p.toString
C.b.sk(p,0)
q.dy.push(null)
m.aR(n.e)}}catch(o){s=H.b7(o)
r=H.kz(o)
P.kE("Error: "+H.h(s))
P.kE("Stack: "+H.h(r))
throw H.b(s)}}}
E.iu.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hG()}}}
Z.eZ.prototype={}
Z.dq.prototype={
bP:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.b7(q)
r=P.t('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.h(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.h(s.e)+"]"}}
Z.j4.prototype={}
Z.dr.prototype={
aN:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bP:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bP(a)},
hR:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aR:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.c(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a6(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.q(n,", ")+"\nAttrs:   "+C.b.q(p,", ")}}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.ef(this.c))+"'")+"]"}}
Z.b0.prototype={
gci:function(a){var s=this.a,r=(s&$.bb().a)!==0?3:0
if((s&$.ba().a)!==0)r+=3
if((s&$.b9().a)!==0)r+=3
if((s&$.bc().a)!==0)r+=2
if((s&$.by().a)!==0)r+=3
if((s&$.de().a)!==0)r+=3
if((s&$.df().a)!==0)r+=4
if((s&$.c4().a)!==0)++r
return(s&$.b8().a)!==0?r+4:r},
fQ:function(a){var s,r=$.bb(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.ba()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bc()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.by()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.de()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.df()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b8()
if((q&r.a)!==0)if(s===a)return r
return $.mn()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bb().a)!==0)s.push("Pos")
if((r&$.ba().a)!==0)s.push("Norm")
if((r&$.b9().a)!==0)s.push("Binm")
if((r&$.bc().a)!==0)s.push("Txt2D")
if((r&$.by().a)!==0)s.push("TxtCube")
if((r&$.de().a)!==0)s.push("Clr3")
if((r&$.df().a)!==0)s.push("Clr4")
if((r&$.c4().a)!==0)s.push("Weight")
if((r&$.b8().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.q(s,"|")}}
D.hd.prototype={}
D.bE.prototype={
m:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
U:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.L(q,b)
if(q===!0){q=r.a
s=(q&&C.b).U(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.L(q,b)
if(q===!0){q=r.b
s=(q&&C.b).U(q,b)||s}return s},
A:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.Q()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.E(P.k7(s,!0,t.dm),new D.hx(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.E(s,new D.hy(o))}return!0},
h6:function(){return this.A(null)},
aq:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.hx.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hy.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Q.prototype={}
D.aD.prototype={}
D.aE.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.ds.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ds))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.a7.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.a7))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.bn.prototype={}
X.cj.prototype={
gaO:function(){var s=this.y
return s==null?this.y=D.I():s},
aa:function(a){this.m(0,new X.a7(a,new X.bq(!1,!1,!1)))},
cq:function(a){},
e5:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(C.b.L(this.a,q))return!1}return!0},
e3:function(a,b){var s=new D.aD()
s.b=!0
this.cq(s)},
e7:function(a,b){var s=new D.aE()
s.b=!0
this.cq(s)},
br:function(a){var s,r=this
if(!r.r&&a instanceof X.bn){s=a.c
if(C.b.L(r.a,s)){r.r=!0
s=r.y
if(s!=null)s.A(a)}}},
bG:function(a){var s
if(this.r&&a instanceof X.bn){s=a.c
if(C.b.L(this.a,s))this.r=!1}},
am:function(a){var s,r,q=this
if(q.f!=null)return!1
q.f=a
s=a.b
r=s.b
if(r==null)r=s.b=D.I()
r.m(0,q.gbq())
r=s.a
s=r==null?s.a=D.I():r
s.m(0,q.gbF())
return!0}}
X.hG.prototype={
hA:function(a){var s,r
this.d.m(0,a.a)
s=this.a
if(s==null)return!1
r=new X.bn(a)
r.b=!0
return s.A(r)},
hw:function(a){var s,r
this.d.U(0,a.a)
s=this.b
if(s==null)return!1
r=new X.bn(a)
r.b=!0
return s.A(r)}}
X.co.prototype={}
X.hL.prototype={
aV:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.l()
s=b.b
r=o.ch
if(typeof s!=="number")return s.l()
q=new V.aw(m.a+l*k,m.b+s*r)
r=o.a.gbd()
p=new X.bM(a,V.bs(),o.x,r,q)
p.b=!0
o.z=new P.ab(n,!1)
o.x=q
return p},
cb:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dQ()
if(typeof s!=="number")return s.a5()
this.r=(s&~r)>>>0
return!1},
b0:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.aV(a,b))
return!0},
hB:function(a){return!1},
f2:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.co(c,p.a.gbd(),b)
q.b=!0
r.A(q)
p.y=new P.ab(s,!1)
p.x=V.bs()}}
X.bq.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bq))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bM.prototype={}
X.i4.prototype={
bA:function(a,b,c){var s=this,r=new P.ab(Date.now(),!1),q=s.a.gbd(),p=new X.bM(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cb:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.bA(a,b,!0))
return!0},
b1:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dQ()
if(typeof r!=="number")return r.a5()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.A(s.bA(a,b,!0))
return!0},
b0:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bA(a,b,!1))
return!0},
hC:function(a,b){return!1}}
X.ed.prototype={}
X.cE.prototype={}
X.ix.prototype={
aV:function(a,b){var s=this,r=new P.ab(Date.now(),!1),q=a.length>0?a[0]:V.bs(),p=s.a.gbd(),o=new X.cE(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hz:function(a){var s=this.b
if(s==null)return!1
s.A(this.aV(a,!0))
return!0},
hx:function(a){var s=this.c
if(s==null)return!1
s.A(this.aV(a,!0))
return!0},
hy:function(a){var s=this.d
if(s==null)return!1
s.A(this.aV(a,!1))
return!0}}
X.eV.prototype={
gbd:function(){var s=this.a,r=C.i.gcZ(s).c
r.toString
s=C.i.gcZ(s).d
s.toString
return V.lb(0,0,r,s)},
cw:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.a7(s,new X.bq(r,a.altKey,a.shiftKey))},
aI:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bL:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
au:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.t()
if(typeof o!=="number")return H.f(o)
s=r.top
if(typeof p!=="number")return p.t()
if(typeof s!=="number")return H.f(s)
return new V.aw(q-o,p-s)},
aW:function(a){return new V.am(a.movementX,a.movementY)},
bI:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=C.d.aj(p.pageX)
C.d.aj(p.pageY)
n=k.left
if(typeof n!=="number")return H.f(n)
C.d.aj(p.pageX)
m=C.d.aj(p.pageY)
l=k.top
if(typeof l!=="number")return H.f(l)
j.push(new V.aw(o-n,m-l))}return j},
as:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.ds(s,new X.bq(r,a.altKey,a.shiftKey))},
bB:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.t()
if(typeof n!=="number")return H.f(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.t()
if(typeof p!=="number")return H.f(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.f(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.f(p)
p=r<p}else p=!1
return p},
eZ:function(a){this.f=!0},
eN:function(a){this.f=!1},
eT:function(a){if(this.f&&this.bB(a))a.preventDefault()},
bG:function(a){var s
if(!this.f)return
s=this.cw(a)
if(this.b.hA(s))a.preventDefault()},
br:function(a){var s
if(!this.f)return
s=this.cw(a)
if(this.b.hw(s))a.preventDefault()},
f4:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aI(a)
if(p.x){s=p.as(a)
r=p.aW(a)
if(p.d.cb(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.as(a)
q=p.au(a)
if(p.c.cb(s,q))a.preventDefault()},
f8:function(a){var s,r,q,p=this
p.aI(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b1(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b1(s,q))a.preventDefault()},
eX:function(a){var s,r,q,p=this
if(!p.bB(a)){p.aI(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b1(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b1(s,q))a.preventDefault()}},
f6:function(a){var s,r,q,p=this
p.aI(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b0(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b0(s,q))a.preventDefault()},
eV:function(a){var s,r,q,p=this
if(!p.bB(a)){p.aI(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b0(s,r))a.preventDefault()
return}if(p.r)return
q=p.au(a)
if(p.c.b0(s,q))a.preventDefault()}},
fa:function(a){var s,r,q=this
q.aI(a)
s=new V.am((a&&C.y).gh_(a),C.y.gh0(a)).l(0,q.Q)
if(q.x){if(q.d.hB(s))a.preventDefault()
return}if(q.r)return
r=q.au(a)
if(q.c.hC(s,r))a.preventDefault()},
fc:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.as(q.y)
r=q.au(q.y)
q.d.f2(s,r,p)}},
fo:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bL(a)
s=r.bI(a)
if(r.e.hz(s))a.preventDefault()},
fk:function(a){var s
this.bL(a)
s=this.bI(a)
if(this.e.hx(s))a.preventDefault()},
fm:function(a){var s
this.bL(a)
s=this.bI(a)
if(this.e.hy(s))a.preventDefault()}}
D.dn.prototype={$iR:1}
D.bh.prototype={
ar:function(a){var s=this.r
if(s!=null)s.A(a)},
e9:function(){return this.ar(null)},
$iR:1}
D.R.prototype={}
D.cl.prototype={
ar:function(a){var s=this.y
if(s!=null)s.A(a)},
cG:function(a){var s=this.z
if(s!=null)s.A(a)},
f1:function(){return this.cG(null)},
fe:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(q==null||this.em(q))return!1}return!0},
eH:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcF(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o instanceof D.bh)this.f.push(o)
n=o.r
if(n==null){n=new D.bE()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.aD()
s.b=!0
this.ar(s)},
fi:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gcF();s.v();){q=s.gD(s)
C.b.U(this.e,q)
q.gu().U(0,r)}s=new D.aE()
s.b=!0
this.ar(s)},
em:function(a){var s=C.b.L(this.f,a)
return s}}
D.ec.prototype={$iR:1}
D.ep.prototype={$iR:1}
V.O.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bg.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bg))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.hv.prototype={}
V.aW.prototype={
a4:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
bg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=g.e,d=g.y
if(typeof e!=="number")return e.l()
if(typeof d!=="number")return H.f(d)
s=e*d
r=g.f
q=g.x
if(typeof r!=="number")return r.l()
if(typeof q!=="number")return H.f(q)
if(typeof f!=="number")return f.l()
p=g.d
o=g.b
if(typeof o!=="number")return o.l()
n=o*d
m=g.c
if(typeof m!=="number")return H.f(m)
l=q*m
if(typeof p!=="number")return p.l()
k=g.r
j=o*r-e*m
if(typeof k!=="number")return k.l()
i=f*(s-r*q)-p*(n-l)+k*j
$.A().toString
if(Math.abs(i-0)<1e-9)return V.mZ()
h=1/i
return new V.aW((s-q*r)*h,(l-n)*h,j*h,(k*r-p*d)*h,(f*d-k*m)*h,(p*m-f*r)*h,(p*q-k*e)*h,(k*o-f*q)*h,(f*e-p*o)*h)},
az:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.d
if(typeof o!=="number")return o.l()
n=i.e
if(typeof n!=="number")return n.l()
m=i.f
if(typeof m!=="number")return m.l()
l=i.r
if(typeof l!=="number")return l.l()
k=i.x
if(typeof k!=="number")return k.l()
j=i.y
if(typeof j!=="number")return j.l()
return new V.C(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aW))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.c3(H.d([o.a,o.d,o.r],n),3,0),l=V.c3(H.d([o.b,o.e,o.x],n),3,0),k=V.c3(H.d([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.c(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.c(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.c(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.c(m,1)
p=" "+m[1]+", "
if(1>=r)return H.c(l,1)
p=p+l[1]+", "
if(1>=q)return H.c(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.c(m,2)
n=" "+m[2]+", "
if(2>=r)return H.c(l,2)
n=n+l[2]+", "
if(2>=q)return H.c(k,2)
return p+(n+k[2]+"]")}}
V.aI.prototype={
a4:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
bg:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.f(p)
o=b1.c
if(typeof o!=="number")return o.l()
n=b2*p-o*r
m=b1.x
l=b1.d
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.l()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.l()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.l()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.A().toString
if(Math.abs(a7-0)<1e-9)return V.dV()
a8=1/a7
a9=-r
b0=-d
return V.aJ((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
l:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=b1.d
n=b5.cx
m=b5.b
if(typeof m!=="number")return H.f(m)
l=b5.f
if(typeof l!=="number")return H.f(l)
k=b5.z
if(typeof k!=="number")return H.f(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.f(i)
h=b5.r
if(typeof h!=="number")return H.f(h)
g=b5.Q
if(typeof g!=="number")return H.f(g)
f=b5.db
e=b5.d
d=b5.x
c=b5.ch
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.l()
a0=b1.f
if(typeof a0!=="number")return a0.l()
a1=b1.r
if(typeof a1!=="number")return a1.l()
a2=b1.x
a3=b1.y
if(typeof a3!=="number")return a3.l()
a4=b1.z
if(typeof a4!=="number")return a4.l()
a5=b1.Q
if(typeof a5!=="number")return a5.l()
a6=b1.ch
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.aJ(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
az:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.e
if(typeof o!=="number")return o.l()
n=i.f
if(typeof n!=="number")return n.l()
m=i.r
if(typeof m!=="number")return m.l()
l=i.y
if(typeof l!=="number")return l.l()
k=i.z
if(typeof k!=="number")return k.l()
j=i.Q
if(typeof j!=="number")return j.l()
return new V.C(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
b4:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.e
if(typeof o!=="number")return o.l()
n=i.f
if(typeof n!=="number")return n.l()
m=i.r
if(typeof m!=="number")return m.l()
l=i.y
if(typeof l!=="number")return l.l()
k=i.z
if(typeof k!=="number")return k.l()
j=i.Q
if(typeof j!=="number")return j.l()
return new V.a3(h*g+s*r+q*p+i.d,o*g+n*r+m*p+i.x,l*g+k*r+j*p+i.ch)},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aI))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.I()},
B:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.c3(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.c3(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.c3(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.c3(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.c(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.c(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.c(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.c(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.c(l,1)
o=o+l[1]+", "
if(1>=r)return H.c(k,1)
o=o+k[1]+", "
if(1>=q)return H.c(j,1)
o=o+j[1]+", "
if(1>=p)return H.c(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.c(l,2)
s=s+l[2]+", "
if(2>=r)return H.c(k,2)
s=s+k[2]+", "
if(2>=q)return H.c(j,2)
s=s+j[2]+", "
if(2>=p)return H.c(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.c(l,3)
o=o+l[3]+", "
if(3>=r)return H.c(k,3)
o=o+k[3]+", "
if(3>=q)return H.c(j,3)
o=o+j[3]+", "
if(3>=p)return H.c(i,3)
return s+(o+i[3]+"]")},
I:function(){return this.B("")}}
V.aw.prototype={
af:function(a){return new V.am(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.a3.prototype={
t:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.t()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.f(p)
return new V.a3(o-n,s-r,q-p)},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.cx.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cx))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.eh.prototype={
gap:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eh))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.am.prototype={
c7:function(a){return Math.sqrt(this.a3(this))},
a3:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
return q*p+s*r},
l:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.l()
if(typeof b!=="number")return H.f(b)
s=this.b
if(typeof s!=="number")return s.l()
return new V.am(r*b,s*b)},
X:function(a,b){var s,r
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.lp
return s==null?$.lp=new V.am(0,0):s}s=this.a
if(typeof s!=="number")return s.X()
r=this.b
if(typeof r!=="number")return r.X()
return new V.am(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
s=b.a
r=this.a
$.A().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.C.prototype={
c7:function(a){return Math.sqrt(this.a3(this))},
a3:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
return o*n+s*r+q*p},
c8:function(a,b){return new V.C(V.kB(this.a,a.a,b),V.kB(this.b,a.b,b),V.kB(this.c,a.c,b))},
N:function(){var s=this,r=Math.sqrt(s.a3(s))
if(r===1)return s
return s.X(0,r)},
aX:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=a.a
if(typeof q!=="number")return H.f(q)
p=this.a
if(typeof p!=="number")return p.l()
return new V.C(o*n-s*r,s*q-p*n,p*r-o*q)},
w:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.w()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.f(p)
return new V.C(o+n,s+r,q+p)},
J:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.J()
s=this.b
if(typeof s!=="number")return s.J()
r=this.c
if(typeof r!=="number")return r.J()
return new V.C(-q,-s,-r)},
X:function(a,b){var s,r,q
$.A().toString
if(Math.abs(b-0)<1e-9)return V.eW()
s=this.a
if(typeof s!=="number")return s.X()
r=this.b
if(typeof r!=="number")return r.X()
q=this.c
if(typeof q!=="number")return q.X()
return new V.C(s/b,r/b,q/b)},
dn:function(){var s=this.a
$.A().toString
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.hg.prototype={
bt:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.jQ(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gu:function(){var s=this.y
return s==null?this.y=D.I():s},
H:function(a){var s=this.y
if(s!=null)s.A(a)},
scf:function(a,b){var s=this.a
if(s!==b){this.a=b
s=new D.z("wrap",s,b)
s.b=!0
this.H(s)}},
sc9:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bt(s)}q=new D.z("maximumLocation",q,r.b)
q.b=!0
r.H(q)}},
sca:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bt(s)}q=new D.z("minimumLocation",q,r.c)
q.b=!0
r.H(q)}},
sa_:function(a,b){var s,r=this
b=r.bt(b==null?0:b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.z("location",s,b)
s.b=!0
r.H(s)}},
sb_:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.z("maximumVelocity",p,a)
p.b=!0
q.H(p)}},
sP:function(a){var s=this,r=a==null?0:a,q=s.e
a=-q
if(!(r<a))a=r>q?q:r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.z("velocity",r,a)
r.b=!0
s.H(r)}},
sav:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.z("dampening",s,a)
s.b=!0
this.H(s)}},
ae:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa_(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sP(s)}}}
U.bD.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.I():s},
sV:function(a,b){var s,r,q,p=this
if(!J.L(p.a,b)){s=p.a
p.a=b
r=new D.z("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.A(r)}},
aA:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bD))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bG.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.I():s},
H:function(a){var s=this.e
if(s!=null)s.A(a)},
a8:function(){return this.H(null)},
eF:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaD(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gu()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aD()
s.b=!0
this.H(s)},
fg:function(a,b){var s,r
for(s=b.gO(b),r=this.gaD();s.v();)s.gD(s).gu().U(0,r)
s=new D.aE()
s.b=!0
this.H(s)},
aA:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a2()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a2(p,p.length),s=null;p.v();){o=p.d
if(o!=null){r=o.aA(0,b,c)
if(r!=null)s=s==null?r:r.l(0,s)}}q.f=s==null?V.dV():s
p=q.e
if(p!=null)p.aq(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.c(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.c(p,r)
if(!J.L(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cz.prototype={
gu:function(){var s=this.y
return s==null?this.y=D.I():s},
H:function(a){var s=this.y
if(s!=null)s.A(a)},
sdO:function(a){var s
a=V.jQ(a,0,6.283185307179586)
s=this.a
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.z("yaw",s,a)
s.b=!0
this.H(s)}},
sdB:function(a,b){var s
b=V.jQ(b,0,6.283185307179586)
s=this.b
$.A().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.z("pitch",s,b)
s.b=!0
this.H(s)}},
sdH:function(a){var s
a=V.jQ(a,0,6.283185307179586)
s=this.c
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.z("roll",s,a)
s.b=!0
this.H(s)}},
aA:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.sdO(q.a+q.d*b.y)
q.sdB(0,q.b+q.e*b.y)
q.sdH(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.aJ(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).l(0,V.kY(q.b)).l(0,V.k9(q.a))
p=q.y
if(p!=null)p.aq(0)}return q.x},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cz))return!1
s=q.a
r=b.a
$.A().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+"], ["+V.D(s.d,3,0)+", "+V.D(s.e,3,0)+", "+V.D(s.f,3,0)+"]"}}
U.cK.prototype={
gu:function(){var s=this.fx
return s==null?this.fx=D.I():s},
H:function(a){var s=this.fx
if(s!=null)s.A(a)},
a8:function(){return this.H(null)},
am:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.I():r
s.m(0,q.gey())
s=q.a.c
r=s.d
s=r==null?s.d=D.I():r
s.m(0,q.geA())
s=q.a.c
r=s.c
s=r==null?s.c=D.I():r
s.m(0,q.geC())
s=q.a.d
r=s.f
s=r==null?s.f=D.I():r
s.m(0,q.geu())
s=q.a.d
r=s.d
s=r==null?s.d=D.I():r
s.m(0,q.gew())
s=q.a.e
r=s.b
s=r==null?s.b=D.I():r
s.m(0,q.gfI())
s=q.a.e
r=s.d
s=r==null?s.d=D.I():r
s.m(0,q.gfG())
s=q.a.e
r=s.c
s=r==null?s.c=D.I():r
s.m(0,q.gfE())
return!0},
al:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.J()
s=-s}if(this.r){if(typeof r!=="number")return r.J()
r=-r}return new V.am(s,r)},
ez:function(a){var s=this
t.d.a(a)
if(!J.L(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eB:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.af(a.d)
s=s.a3(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.al(a.y.af(a.d).l(0,2).X(0,s.gap()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.al(r.af(q).l(0,2).X(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sa_(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.al(a.z.af(q).l(0,2).X(0,s.gap()))}l.a8()},
eD:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a3(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sP(-r*10*s)
p.a8()}},
ev:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ex:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.L(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.al(r.af(q).l(0,2).X(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sa_(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.al(a.z.af(q).l(0,2).X(0,s.gap()))
l.a8()},
fJ:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fH:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.af(a.d)
s=s.a3(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.al(a.y.af(a.d).l(0,2).X(0,s.gap()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.al(r.af(q).l(0,2).X(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sa_(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.al(a.z.af(q).l(0,2).X(0,s.gap()))}l.a8()},
fF:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a3(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sP(-r*10*s)
p.a8()}},
aA:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.dy=p
s=b.y
r.c.ae(0,s)
r.b.ae(0,s)
r.fr=V.k9(r.b.d).l(0,V.kY(r.c.d))}return r.fr},
$iS:1}
U.cL.prototype={
gu:function(){var s=this.dx
return s==null?this.dx=D.I():s},
H:function(a){var s=this.dx
if(s!=null)s.A(a)},
a8:function(){return this.H(null)},
ga_:function(a){return new V.a3(this.r.d,this.x.d,this.y.d)},
f0:function(a){this.H(a)},
bN:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.w()
e+=d}else if(b.r){if(typeof e!=="number")return e.t()
e-=d}else{if(typeof e!=="number")return e.S()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aA:function(a,b,c){var s,r,q,p,o=this,n=o.cy,m=b.e
if(typeof n!=="number")return n.a2()
if(n<m){o.cy=m
o.ga_(o)
s=b.y
if(s>0.1)s=0.1
n=o.ch
if(typeof n!=="number")return n.l()
r=n*s
n=o.cx
if(typeof n!=="number")return n.l()
q=n*s
p=new V.C(o.r.f,o.x.f,o.y.f)
n=o.Q
if(n!=null)p=n.az(p)
p=new V.C(o.bN(o.a,o.b,r,q,p.a),o.bN(o.c,o.d,r,q,p.b),o.bN(o.e,o.f,r,q,p.c))
n=o.z
if(n!=null)p=n.az(p)
o.r.sP(p.a)
o.x.sP(p.b)
o.y.sP(p.c)
o.r.ae(0,s)
o.x.ae(0,s)
o.y.ae(0,s)
o.db=V.kZ(o.r.d,-o.x.d,o.y.d)}return o.db},
$iS:1}
M.dC.prototype={
aF:function(a){var s=this.y
if(s!=null)s.A(a)},
ea:function(){return this.aF(null)},
eP:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaE(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bE()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aD()
s.b=!0
this.aF(s)},
eR:function(a,b){var s,r
for(s=b.gO(b),r=this.gaE();s.v();)s.gD(s).gu().U(0,r)
s=new D.aE()
s.b=!0
this.aF(s)},
gu:function(){var s=this.y
return s==null?this.y=D.I():s},
aR:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dE(d.d)
s=d.c
s.toString
r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.f(q)
m=C.d.aj(n*q)
n=o.b
if(typeof p!=="number")return H.f(p)
l=C.d.aj(n*p)
n=C.d.aj(o.c*q)
a.c=n
o=C.d.aj(o.d*p)
a.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=d.b
r=a.c
o=a.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.aJ(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dD(g)
r=$.l1
if(r==null){r=V.l3()
o=V.ke()
n=$.lq
r=V.kX(r,o,n==null?$.lq=new V.C(0,0,-1):n)
$.l1=r
f=r}else f=r
r=s.b
if(r!=null){e=r.aA(0,a,s)
if(e!=null)f=e.l(0,f)}a.db.dD(f)
for(s=d.e.a,s=new J.a2(s,s.length);s.v();)s.d.ae(0,a)
for(s=d.e.a,s=new J.a2(s,s.length);s.v();)s.d.aR(a)
d.b.toString
a.cy.cc()
a.db.cc()
d.c.toString
a.dC()}}
A.dk.prototype={}
A.h7.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h7:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
h1:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.Z.prototype={
gak:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.Z))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dT.prototype={
dY:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
c4.z=c9
s=new P.U("")
r=c9.fr
if(r){s.a=c8
q=c8}else q=""
p=c9.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c9.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c9.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.oD(c9,s)
A.oF(c9,s)
A.oE(c9,s)
A.oH(c9,s)
A.oI(c9,s)
A.oG(c9,s)
A.oJ(c9,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c9.ry
q+="   return projViewObjMat*vec4("+(m?"bendPos":"posAttr")+", 1.0);\n"
s.a=q
q+="}\n"
s.a=q
q+="\n"
s.a=q
q+="void main()\n"
s.a=q
q=s.a=q+"{\n"
if(m){q+="   setupBendData();\n"
s.a=q}if(o){q+="   normalVec = getNorm();\n"
s.a=q}if(n){q+="   binormalVec = getBinm();\n"
s.a=q}if(c9.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c9.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c9.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c9.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
l=q.charCodeAt(0)==0?q:q
k=A.oC(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cz(l,35633)
c4.f=c4.cz(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.t("Failed to link shader: "+H.h(j)))}c4.fA()
c4.fC()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.G(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.G(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.G(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.G(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.G(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.G(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.G(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.G(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.aM
if(q>0){c4.k4=c4.y.G(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.t(c6+n+c7))
p.push(r.a(h))}}r=c9.a
if(r.a)c4.r2=t.r.a(c4.y.G(0,"emissionClr"))
if(r.b)c4.rx=t.c.a(c4.y.G(0,"emissionTxt"))
r=c9.b
if(r.a)c4.x1=t.r.a(c4.y.G(0,"ambientClr"))
if(r.b)c4.x2=t.c.a(c4.y.G(0,"ambientTxt"))
r=c9.c
if(r.a)c4.y2=t.r.a(c4.y.G(0,"diffuseClr"))
if(r.b)c4.aM=t.c.a(c4.y.G(0,"diffuseTxt"))
r=c9.d
if(r.a)c4.be=t.r.a(c4.y.G(0,"invDiffuseClr"))
if(r.b)c4.d1=t.c.a(c4.y.G(0,"invDiffuseTxt"))
r=c9.e
q=r.a
if(q||r.b||!1){c4.d4=t.n.a(c4.y.G(0,"shininess"))
if(q)c4.d2=t.r.a(c4.y.G(0,"specularClr"))
if(r.b)c4.d3=t.c.a(c4.y.G(0,"specularTxt"))}if(c9.f.b)c4.d5=t.c.a(c4.y.G(0,"bumpTxt"))
if(c9.db){c4.d6=t.Q.a(c4.y.G(0,"envSampler"))
r=c9.r
if(r.a)c4.d7=t.r.a(c4.y.G(0,"reflectClr"))
if(r.b)c4.d8=t.c.a(c4.y.G(0,"reflectTxt"))
r=c9.x
q=r.a
if(q||r.b||!1){c4.d9=t.n.a(c4.y.G(0,"refraction"))
if(q)c4.da=t.r.a(c4.y.G(0,"refractClr"))
if(r.b)c4.dc=t.c.a(c4.y.G(0,"refractTxt"))}}r=c9.y
if(r.a)c4.dd=t.n.a(c4.y.G(0,"alpha"))
if(r.b)c4.de=t.c.a(c4.y.G(0,"alphaTxt"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.bW=new H.y(t.J)
c4.bX=new H.y(t.en)
for(p=t.r,o=t.n,n=t.d6,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="barLight"+H.h(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){b=c4.y
a=d+"s["+i+"].startPnt"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
p.a(h)
b=c4.y
a=d+"s["+i+"].endPnt"
a0=b.h(0,a)
if(a0==null)H.q(P.t(c6+a+c7))
p.a(a0)
b=c4.y
a=d+"s["+i+"].color"
a1=b.h(0,a)
if(a1==null)H.q(P.t(c6+a+c7))
p.a(a1)
if(typeof e!=="number")return e.a5()
if((e&4)!==0){b=c4.y
a=d+"s["+i+"].att0"
a2=b.h(0,a)
if(a2==null)H.q(P.t(c6+a+c7))
o.a(a2)
b=c4.y
a=d+"s["+i+"].att1"
a3=b.h(0,a)
if(a3==null)H.q(P.t(c6+a+c7))
o.a(a3)
b=c4.y
a=d+"s["+i+"].att2"
a4=b.h(0,a)
if(a4==null)H.q(P.t(c6+a+c7))
o.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cF(h,a0,a1,a7,a6,a5))}c4.bX.j(0,e,c)
m=c4.bW
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
m.j(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.bY=new H.y(t.J)
c4.bZ=new H.y(t.af)
for(p=t.r,o=t.c,n=t.dv,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.h(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.a5()
b=(e&1)!==0
if(b){a=c4.y
a8=d+"s["+i+"].objUp"
h=a.h(0,a8)
if(h==null)H.q(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].objRight"
a0=a.h(0,a8)
if(a0==null)H.q(P.t(c6+a8+c7))
p.a(a0)
a=c4.y
a8=d+"s["+i+"].objDir"
a1=a.h(0,a8)
if(a1==null)H.q(P.t(c6+a8+c7))
p.a(a1)
a9=a1
b0=a0
b1=h}else{a9=c5
b0=a9
b1=b0}a=c4.y
a8=d+"s["+i+"].viewDir"
h=a.h(0,a8)
if(h==null)H.q(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].color"
a0=a.h(0,a8)
if(a0==null)H.q(P.t(c6+a8+c7))
p.a(a0)
if(b){b=c4.y
a=d+"sTexture2D"+i
a1=b.h(0,a)
if(a1==null)H.q(P.t(c6+a+c7))
o.a(a1)
b2=a1}else b2=c5
c.push(new A.cG(b1,b0,a9,h,a0,b2))}c4.bZ.j(0,e,c)
m=c4.bY
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
m.j(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.c_=new H.y(t.J)
c4.c0=new H.y(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.h(e)
c=H.d([],a)
for(a8=f.b,i=0;i<a8;++i){b3=c4.y
b4=d+"s["+i+"].point"
h=b3.h(0,b4)
if(h==null)H.q(P.t(c6+b4+c7))
p.a(h)
b3=c4.y
b4=d+"s["+i+"].viewPnt"
a0=b3.h(0,b4)
if(a0==null)H.q(P.t(c6+b4+c7))
p.a(a0)
b3=c4.y
b4=d+"s["+i+"].color"
a1=b3.h(0,b4)
if(a1==null)H.q(P.t(c6+b4+c7))
p.a(a1)
if(typeof e!=="number")return e.a5()
if((e&3)!==0){b3=c4.y
b4=d+"s["+i+"].invViewRotMat"
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
o.a(a2)
b5=a2}else b5=c5
if((e&1)!==0){b3=c4.y
b4=d+"sTextureCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
n.a(a2)
b2=a2}else b2=c5
if((e&2)!==0){b3=c4.y
b4=d+"sShadowCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
n.a(a2)
b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
m.a(a3)
b6=a2
b7=a3}else{b6=c5
b7=b6}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
b.a(a2)
b3=c4.y
b4=d+"s["+i+"].att1"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
b.a(a3)
b3=c4.y
b4=d+"s["+i+"].att2"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
b.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cI(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.c0.j(0,e,c)
a8=c4.c_
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.t(c6+b4+c7))
a8.j(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.c1=new H.y(t.J)
c4.c2=new H.y(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,b=t.fF,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.h(e)
c=H.d([],b)
for(a=f.b,i=0;i<a;++i){a8=c4.y
b3=d+"s["+i+"].objPnt"
h=a8.h(0,b3)
if(h==null)H.q(P.t(c6+b3+c7))
p.a(h)
a8=c4.y
b3=d+"s["+i+"].objDir"
a0=a8.h(0,b3)
if(a0==null)H.q(P.t(c6+b3+c7))
p.a(a0)
a8=c4.y
b3=d+"s["+i+"].viewPnt"
a1=a8.h(0,b3)
if(a1==null)H.q(P.t(c6+b3+c7))
p.a(a1)
a8=c4.y
b3=d+"s["+i+"].color"
a2=a8.h(0,b3)
if(a2==null)H.q(P.t(c6+b3+c7))
p.a(a2)
if(typeof e!=="number")return e.a5()
if((e&3)!==0){a8=c4.y
b3=d+"s["+i+"].objUp"
a3=a8.h(0,b3)
if(a3==null)H.q(P.t(c6+b3+c7))
p.a(a3)
a8=c4.y
b3=d+"s["+i+"].objRight"
a4=a8.h(0,b3)
if(a4==null)H.q(P.t(c6+b3+c7))
p.a(a4)
a8=c4.y
b3=d+"s["+i+"].tuScalar"
b8=a8.h(0,b3)
if(b8==null)H.q(P.t(c6+b3+c7))
o.a(b8)
a8=c4.y
b3=d+"s["+i+"].tvScalar"
b9=a8.h(0,b3)
if(b9==null)H.q(P.t(c6+b3+c7))
o.a(b9)
c0=b9
c1=b8
b0=a4
b1=a3}else{c0=c5
c1=c0
b0=c1
b1=b0}a8=(e&2)!==0
if(a8){b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
n.a(a3)
b7=a3}else b7=c5
if((e&8)!==0){b3=c4.y
b4=d+"s["+i+"].cutoff"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].coneAngle"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
o.a(a4)
c2=a4
c3=a3}else{c2=c5
c3=c2}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].att1"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
o.a(a4)
b3=c4.y
b4=d+"s["+i+"].att2"
b8=b3.h(0,b4)
if(b8==null)H.q(P.t(c6+b4+c7))
o.a(b8)
a5=b8
a6=a4
a7=a3}else{a5=c5
a6=a5
a7=a6}if((e&1)!==0){b3=c4.y
b4=d+"sTexture2D"+i
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
m.a(a3)
b2=a3}else b2=c5
if(a8){a8=c4.y
b3=d+"sShadow2D"+i
a3=a8.h(0,b3)
if(a3==null)H.q(P.t(c6+b3+c7))
m.a(a3)
b6=a3}else b6=c5
c.push(new A.cJ(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.c2.j(0,e,c)
a=c4.c1
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.t(c6+b3+c7))
a.j(0,e,h)}}}},
ah:function(a,b){if(b!=null&&b.d)a.dR(b)},
fz:function(a,b){}}
A.dp.prototype={
i:function(a){return"barLight"+H.h(this.a)}}
A.dA.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.ee.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.eq.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.hQ.prototype={
i:function(a){return this.aY}}
A.cF.prototype={}
A.cG.prototype={}
A.cI.prototype={}
A.cJ.prototype={}
A.cA.prototype={
e0:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cz:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.t("Error compiling shader '"+H.h(q)+"': "+H.h(s)))}return q},
fA:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dk(n,r.name,q))}p.x=new A.h7(o)},
fC:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fY(r.type,r.size,r.name,q))}p.y=new A.iG(o)},
aH:function(a,b,c){var s=this.a
if(a===1)return new A.eK(s,b,c)
else return A.kc(s,this.r,b,a,c)},
eo:function(a,b,c){var s=this.a
if(a===1)return new A.eO(s,b,c)
else return A.kc(s,this.r,b,a,c)},
ep:function(a,b,c){var s=this.a
if(a===1)return new A.eP(s,b,c)
else return A.kc(s,this.r,b,a,c)},
bb:function(a,b){return new P.fe(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fY:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aH(b,c,d)
case 5121:return s.aH(b,c,d)
case 5122:return s.aH(b,c,d)
case 5123:return s.aH(b,c,d)
case 5124:return s.aH(b,c,d)
case 5125:return s.aH(b,c,d)
case 5126:return new A.eJ(s.a,c,d)
case 35664:return new A.iC(s.a,c,d)
case 35665:return new A.eL(s.a,c,d)
case 35666:return new A.eM(s.a,c,d)
case 35667:return new A.iD(s.a,c,d)
case 35668:return new A.iE(s.a,c,d)
case 35669:return new A.iF(s.a,c,d)
case 35674:return new A.iH(s.a,c,d)
case 35675:return new A.eN(s.a,c,d)
case 35676:return new A.cH(s.a,c,d)
case 35678:return s.eo(b,c,d)
case 35680:return s.ep(b,c,d)
case 35670:throw H.b(s.bb("BOOL",c))
case 35671:throw H.b(s.bb("BOOL_VEC2",c))
case 35672:throw H.b(s.bb("BOOL_VEC3",c))
case 35673:throw H.b(s.bb("BOOL_VEC4",c))
default:throw H.b(P.t("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.eI.prototype={}
A.iG.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
G:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.I()},
I:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.eK.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)}}
A.eJ.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.eL.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.eM.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.eN.prototype={
ag:function(a){var s=new Float32Array(H.bY(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.cH.prototype={
ag:function(a){var s=new Float32Array(H.bY(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.eO.prototype={
dR:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.eP.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.jr.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c8(q.b,b).c8(q.d.c8(q.c,b),c)
a.sa_(0,new V.a3(p.a,p.b,p.c))
a.sdJ(p.N())
q=1-b
s=1-c
a.scV(new V.cx(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))}}
F.jD.prototype={
$2:function(a,b){return 0}}
F.jE.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sa_(0,new V.a3(q,p,this.a.a.$2(b,c)))
a.sdJ(new V.C(q,p,1).N())
s=1-b
r=1-c
a.scV(new V.cx(b*c,2+s*c,4+b*r,6+s*r))}}
F.dD.prototype={
eh:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.eW()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dn())return p
return q.N()},
ej:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.t(0,n)
q=new V.C(o.a,o.b,o.c).N()
o=r.t(0,n)
return q.aX(new V.C(o.a,o.b,o.c).N()).N()},
bS:function(){var s,r=this
if(r.d!=null)return!0
s=r.eh()
if(s==null){s=r.ej()
if(s==null)return!1}r.d=s
r.a.a.a1()
return!0},
eg:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.eW()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dn())return p
return q.N()},
ei:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.t(0,e)
o=new V.C(j.a,j.b,j.c).N()
if(q.a-r.a<0)o=o.J(0)}else{n=(j-s.b)/p
j=b.t(0,e)
i=j.a
if(typeof i!=="number")return i.l()
g=j.b
if(typeof g!=="number")return g.l()
j=j.c
if(typeof j!=="number")return j.l()
f=e.a
if(typeof f!=="number")return H.f(f)
d=e.b
if(typeof d!=="number")return H.f(d)
c=e.c
if(typeof c!=="number")return H.f(c)
c=new V.a3(i*n+f,g*n+d,j*n+c).t(0,h)
o=new V.C(c.a,c.b,c.c).N()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.J(0)}j=l.d
if(j!=null){m=j.N()
o=m.aX(o).N().aX(m).N()}return o},
bQ:function(){var s,r=this
if(r.e!=null)return!0
s=r.eg()
if(s==null){s=r.ei()
if(s==null)return!1}r.e=s
r.a.a.a1()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
B:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.a.ad(J.a6(q.e),0)+", "+C.a.ad(J.a6(r.b.e),0)+", "+C.a.ad(J.a6(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
I:function(){return this.B("")}}
F.dQ.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
B:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.a.ad(J.a6(s.e),0)+", "+C.a.ad(J.a6(this.b.e),0)},
I:function(){return this.B("")}}
F.eb.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ad(J.a6(s.e),0)},
I:function(){return this.B("")}}
F.id.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.I():s},
hl:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.Y()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){p=e[q]
f.a.m(0,p.fW())}f.a.Y()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
l=n[m]
f.b.a.a.m(0,l)
m=new F.eb()
if(l.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.A(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.c.a
n.a.m(0,j)
n.a.m(0,i)
n=new F.dQ()
m=j.a
if(m==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(m!=i.a)H.q(P.t("May not create a line with vertices attached to different shapes."))
n.a=j
j.c.b.push(n)
n.b=i
i.c.c.push(n)
n.a.a.c.b.push(n)
n=n.a.a.e
if(n!=null)n.A(null)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
g=n[m]
m=f.d.a
m.a.m(0,j)
m.a.m(0,i)
m.a.m(0,g)
F.dE(j,i,g)}e=f.e
if(e!=null)e.aq(0)},
aK:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aK()||!1
if(!r.a.aK())s=!1
q=r.e
if(q!=null)q.aq(0)
return s},
fS:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bb().a)!==0?1:0
if((s&$.ba().a)!==0)++r
if((s&$.b9().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.by().a)!==0)++r
if((s&$.de().a)!==0)++r
if((s&$.df().a)!==0)++r
if((s&$.c4().a)!==0)++r
if((s&$.b8().a)!==0)++r
q=a6.gci(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.fQ(k)
i=j.gci(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dq(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hj(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.bY(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dr(new Z.eZ(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.Y()
a0.push(m.e)}a1=Z.kf(s,34963,a0)
a.b.push(new Z.bI(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.Y()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.Y()
a0.push(m.e)}a1=Z.kf(s,34963,a0)
a.b.push(new Z.bI(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.Y()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.Y()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].c
m.a.a.Y()
a0.push(m.e)}a1=Z.kf(s,34963,a0)
a.b.push(new Z.bI(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.B(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.B(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.B(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.B(r))}return C.b.q(q,"\n")},
a1:function(){var s=this.e
if(s!=null)s.A(null)}}
F.ie.prototype={
fP:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.c(c,q)
k=c[q];++q
if(q>=l)return H.c(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.c(c,i)
h=c[i]
if(r<0||r>=l)return H.c(c,r)
g=c[r]
l=s.a
if(n){l.m(0,k)
s.a.m(0,j)
s.a.m(0,h)
f.push(F.dE(k,j,h))
s.a.m(0,k)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.dE(k,h,g))}else{l.m(0,j)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.dE(j,h,g))
s.a.m(0,j)
s.a.m(0,g)
s.a.m(0,k)
f.push(F.dE(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
aK:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].bS())q=!1
return q},
bR:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].bQ())q=!1
return q},
i:function(a){return this.I()},
B:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(a))
return C.b.q(p,"\n")},
I:function(){return this.B("")}}
F.ig.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
B:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].B(a+(""+s+". ")))}return C.b.q(q,"\n")},
I:function(){return this.B("")}}
F.ih.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
B:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(a))
return C.b.q(p,"\n")},
I:function(){return this.B("")}}
F.eX.prototype={
bV:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.ls(s.cx,p,m,r,q,o,n,a,l)},
fW:function(){return this.bV(null)},
sa_:function(a,b){var s
if(!J.L(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a1()}},
sdJ:function(a){var s
if(!J.L(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a1()}},
scV:function(a){var s
if(!J.L(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a1()}},
hj:function(a){var s,r,q=this
if(a.n(0,$.bb())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.ba())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.b9())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.bc())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.n(0,$.by())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.de())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.n(0,$.df())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.n(0,$.c4()))return H.d([q.ch],t.m)
else if(a.n(0,$.b8())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
bS:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eW()
r.d.E(0,new F.j3(q))
r.r=q.a.N()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
bQ:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eW()
r.d.E(0,new F.j2(q))
r.x=q.a.N()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
B:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ad(J.a6(q.e),0))
s=q.f
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.x
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.y
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.z
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.Q
if(s!=null)o.push(s.i(0))
else o.push(p)
o.push(V.D(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.q(o,", ")
return a+"{"+r+"}"},
I:function(){return this.B("")}}
F.j3.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.j2.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.iX.prototype={
Y:function(){},
m:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.t("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a1()
return!0},
cQ:function(a,b){var s=null,r=F.ls(s,s,a,s,s,b,s,s,0)
this.m(0,r)
return r},
gk:function(a){return this.c.length},
aK:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].bS()
return!0},
bR:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].bQ()
return!0},
fT:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r.N()
if(!J.L(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}}return!0},
i:function(a){return this.I()},
B:function(a){var s,r,q,p
this.Y()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].B(a))
return C.b.q(s,"\n")},
I:function(){return this.B("")}}
F.iY.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){var s=this
C.b.E(s.b,b)
C.b.E(s.c,new F.iZ(s,b))
C.b.E(s.d,new F.j_(s,b))},
i:function(a){return this.I()},
I:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.q(p,"\n")}}
F.iZ.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.j_.prototype={
$1:function(a){var s=this.a
if(!J.L(a.a,s)&&!J.L(a.b,s))this.b.$1(a)}}
F.j0.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
I:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.q(p,"\n")}}
F.j1.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.q(p,"\n")}}
O.dU.prototype={
gu:function(){var s=this.fr
return s==null?this.fr=D.I():s},
W:function(a){var s=this.fr
if(s!=null)s.A(a)},
bE:function(){return this.W(null)},
cH:function(a){this.a=null
this.W(a)},
fv:function(){return this.cH(null)},
eJ:function(a,b){var s=new D.aD()
s.b=!0
this.W(s)},
eL:function(a,b){var s=new D.aE()
s.b=!0
this.W(s)},
cv:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.y(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gao()
n=d.h(0,p.gao())
d.j(0,o,n==null?1:n)}m=H.d([],t.am)
d.E(0,new O.hU(f,m))
C.b.aU(m,new O.hV())
l=new H.y(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){o=l.h(0,0)
l.j(0,0,o==null?1:o)}k=H.d([],t.M)
l.E(0,new O.hW(f,k))
C.b.aU(k,new O.hX())
j=new H.y(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gao()
n=j.h(0,p.gao())
j.j(0,o,n==null?1:n)}i=H.d([],t.d1)
j.E(0,new O.hY(f,i))
C.b.aU(i,new O.hZ())
h=new H.y(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.r)(e),++q){p=e[q]
r=p.gao()
o=h.h(0,p.gao())
h.j(0,r,o==null?1:o)}g=H.d([],t.cz)
h.E(0,new O.i_(f,g))
C.b.aU(g,new O.i0())
e=C.c.Z(f.e.a.length+3,4)
s=f.b
f.dy.toString
return A.mY(s!=null,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a9:function(a,b){if(b!=null)if(!C.b.L(a,b)){b.a=a.length
a.push(b)}},
ae:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a2(s,s.length);s.v();){r=s.d
r.toString
q=$.iW
if(q==null)q=$.iW=new V.C(0,0,1)
r.a=q
p=$.iV
r.d=p==null?$.iV=new V.C(0,1,0):p
p=$.iU
r.e=p==null?$.iU=new V.C(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.az(q).N()
r.d=o.az(r.d).N()
r.e=o.az(r.e).N()}}}},
hH:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cv()
s=b6.fr.h(0,b5.aY)
if(s==null){s=A.mX(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.t("May not cache a shader with no name."))
if(b6.fr.bT(0,r))H.q(P.t('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.j(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.be
b5=b7.e
if(!(b5 instanceof Z.dr))b5=b7.e=null
if(b5==null||!b5.d.n(0,p)){b5=q.k4
if(b5)b7.d.aK()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bR()
n.a.bR()
n=n.e
if(n!=null)n.aq(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.fT()
m=m.e
if(m!=null)m.aq(0)}k=b7.d.fS(new Z.j4(b6.a),p)
k.aN($.bb()).e=b4.a.Q.c
if(b5)k.aN($.ba()).e=b4.a.cx.c
if(o)k.aN($.b9()).e=b4.a.ch.c
if(q.r2)k.aN($.bc()).e=b4.a.cy.c
if(n)k.aN($.by()).e=b4.a.db.c
if(q.ry)k.aN($.b8()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.h7()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gV(n)
b5=b5.dy
b5.toString
b5.ag(n.a4(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gV(n)
m=b6.dx
m=b6.cx=n.l(0,m.gV(m))
n=m}b5=b5.fr
b5.toString
b5.ag(n.a4(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.ghE()
m=b6.dx
m=b6.ch=n.l(0,m.gV(m))
n=m}b5=b5.fy
b5.toString
b5.ag(n.a4(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gV(n)
b5=b5.fx
b5.toString
b5.ag(n.a4(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ag(n.a4(0,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ag(C.n.a4(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ag(C.n.a4(n,!0))}if(q.aM>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.c(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.c(b5,h)
b5=b5[h]
g=new Float32Array(H.bY(n.a4(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}b5=q.a
if(b5.a){n=b4.a
m=b4.f.f
n=n.r2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.a9(j,b4.f.d)
b5=b4.a
n=b4.f.d
b5.ah(b5.rx,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
m=b4.r.f
n=n.x1
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.a9(j,b4.r.d)
b5=b4.a
n=b4.r.d
b5.ah(b5.x2,n)}b5=q.c
if(b5.a){n=b4.a
m=b4.x.f
n=n.y2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.a9(j,b4.x.d)
b5=b4.a
n=b4.x.d
b5.ah(b5.aM,n)}b5=q.d
if(b5.a){n=b4.a
m=b4.y.f
n=n.be
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.a9(j,b4.y.d)
b5=b4.a
n=b4.y.d
b5.ah(b5.d1,n)}b5=q.e
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.z.ch
m=m.d4
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.z.f
n=n.d2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.a9(j,b4.z.d)
b5=b4.a
n=b4.z.d
b5.ah(b5.d3,n)}b5=q.z
if(b5.length>0){f=new H.y(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gao()
b=f.h(0,c)
if(b==null)b=0
f.j(0,c,b+1)
a=J.c5(b4.a.bX.h(0,c),b)
l=d.ghV()
a0=$.aL
l=l.b4(a0==null?$.aL=new V.a3(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gi_()
a0=$.aL
l=l.b4(a0==null?$.aL=new V.a3(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gan(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gd0()){l=d.gcS()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gcT()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gcU()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.bW.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gV(n)
a2=new H.y(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.j(0,0,b+1)
a=J.c5(b4.a.bZ.h(0,0),b)
l=a1.az(d.a).N()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.bY.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gV(n)
a5=new H.y(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gao()
b=a5.h(0,c)
if(b==null)b=0
a5.j(0,c,b+1)
a=J.c5(b4.a.c0.h(0,c),b)
a6=a1.l(0,d.gV(d))
l=d.gV(d)
a0=$.aL
l=l.b4(a0==null?$.aL=new V.a3(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aL
l=a6.b4(l==null?$.aL=new V.a3(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gan(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=a6.bg(0)
a0=l.a
a3=l.b
a4=l.c
a7=l.e
a8=l.f
a9=l.r
b0=l.y
b1=l.z
l=l.Q
b2=a.d
b2.toString
g=new Float32Array(H.bY(new V.aW(a0,a3,a4,a7,a8,a9,b0,b1,l).a4(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gay()
l=d.gay()
if(!C.b.L(j,l)){l.a=j.length
j.push(l)}l=d.gay()
a0=l.gaZ(l)
if(a0){a0=a.f
a0.toString
a3=l.gaZ(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghf(l))}d.gaT()
l=d.gdS()
a0=a.x
a0.toString
a3=l.gh3(l)
a4=l.gh4(l)
a7=l.gh5()
l=l.gh2()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaT()
if(!C.b.L(j,l)){l.a=j.length
j.push(l)}l=d.gaT()
a0=l.gaZ(l)
if(a0){a0=a.r
a0.toString
a3=l.gaZ(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghf(l))}if(d.gd0()){l=d.gcS()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gcT()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gcU()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.c_.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gV(n)
b3=new H.y(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gao()
b=b3.h(0,c)
if(b==null)b=0
b3.j(0,c,b+1)
a=J.c5(b4.a.c2.h(0,c),b)
l=d.ghD(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghY(d).N()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.b4(d.ghD(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gan(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=d.gib()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcd(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gi9()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.gia()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gay()
l=d.gay()
if(!C.b.L(j,l)){l.a=j.length
j.push(l)}l=d.gay()
a0=l.gaZ(l)
if(a0){a0=a.dx
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gaT()
l=d.gdS()
a0=a.z
a0.toString
a3=l.gh3(l)
a4=l.gh4(l)
a7=l.gh5()
l=l.gh2()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaT()
if(!C.b.L(j,l)){l.a=j.length
j.push(l)}l=d.gaT()
a0=l.gaZ(l)
if(a0){a0=a.dy
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.ghZ()){l=d.ghX()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.ghW()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gd0()){l=d.gcS()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gcT()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gcU()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.c1.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.f.b){b4.a9(j,b4.Q.d)
b5=b4.a
n=b4.Q.d
b5.ah(b5.d5,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gV(n).bg(0)}b5=b5.id
b5.toString
b5.ag(n.a4(0,!0))}if(q.db){b4.a9(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fz(b5.d6,n)
b5=q.r
if(b5.a){n=b4.a
m=b4.cx.f
n=n.d7
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.a9(j,b4.cx.d)
b5=b4.a
n=b4.cx.d
b5.ah(b5.d8,n)}b5=q.x
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.cy.ch
m=m.d9
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.cy.f
n=n.da
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.a9(j,b4.cy.d)
b5=b4.a
n=b4.cy.d
b5.ah(b5.dc,n)}}b5=q.y
n=b5.a
m=!n
if(!m||b5.b||!1){if(n){n=b4.a
l=b4.db.f
n=n.dd
n.a.uniform1f(n.d,l)}if(b5.b){b4.a9(j,b4.db.d)
n=b4.a
l=b4.db.d
n.ah(n.de,l)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){n=j[h]
if(!n.c&&n.d){n.c=!0
o.activeTexture(33984+n.a)
o.bindTexture(3553,n.b)}}n=b7.e
n.bP(b6)
n.aR(b6)
n.hR(b6)
if(!m||b5.b||!1)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
if(b5.c){b5.c=!1
o.activeTexture(33984+b5.a)
o.bindTexture(3553,null)}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.h1()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cv().aY}}
O.hU.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dp(a,C.c.Z(b+3,4)*4))}}
O.hV.prototype={
$2:function(a,b){return J.dg(a.a,b.a)}}
O.hW.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dA(a,C.c.Z(b+3,4)*4))}}
O.hX.prototype={
$2:function(a,b){return J.dg(a.a,b.a)}}
O.hY.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.ee(a,C.c.Z(b+3,4)*4))}}
O.hZ.prototype={
$2:function(a,b){return J.dg(a.a,b.a)}}
O.i_.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eq(a,C.c.Z(b+3,4)*4))}}
O.i0.prototype={
$2:function(a,b){return J.dg(a.a,b.a)}}
O.hO.prototype={
at:function(){var s,r=this
r.ck()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.z(r.b,s,1)
s.b=!0
r.a.W(s)}}}
O.cr.prototype={
W:function(a){return this.a.W(a)},
bE:function(){return this.W(null)},
at:function(){},
bJ:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.at()
s=q.a
s.a=null
s.W(null)}},
sdI:function(a){var s,r=this,q=r.c
if(!q.b)r.bJ(new A.Z(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gu().U(0,r.gba())
s=r.d
r.d=a
a.gu().m(0,r.gba())
q=new D.z(r.b+".texture2D",s,r.d)
q.b=!0
r.a.W(q)}}}
O.hP.prototype={}
O.aH.prototype={
cJ:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.z(q.b+".color",s,a)
r.b=!0
q.a.W(r)}},
at:function(){this.ck()
this.cJ(new V.O(1,1,1))},
san:function(a,b){this.bJ(new A.Z(!0,this.c.b,!1))
this.cJ(b)}}
O.hR.prototype={}
O.hS.prototype={
at:function(){var s,r=this
r.cl()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.z(r.b+".refraction",s,1)
s.b=!0
r.a.W(s)}}}
O.hT.prototype={
cK:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.z(s.b+".shininess",r,a)
r.b=!0
s.a.W(r)}},
at:function(){this.cl()
this.cK(100)}}
O.ey.prototype={}
T.eB.prototype={}
T.iq.prototype={}
T.ir.prototype={
gu:function(){var s=this.y
return s==null?this.y=D.I():s}}
T.is.prototype={
hk:function(a,b,c){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9987)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.ir()
r.a=0
r.b=o
r.d=r.c=!1
W.X(s,"load",new T.it(this,r,s,!1,o,!1,!0),!1)
return r},
fw:function(a,b,c){var s,r,q,p
b=V.kD(b)
s=V.kD(a.width)
r=V.kD(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jY()
q.width=s
q.height=r
p=C.i.dP(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.p2(p.getImageData(0,0,q.width,q.height))}}}
T.it.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.fw(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.W.hN(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.h6()}++s.e}}
X.jX.prototype={}
X.hC.prototype={
gu:function(){var s=this.x
return s==null?this.x=D.I():s}}
X.e8.prototype={
gu:function(){var s=this.f
return s==null?this.f=D.I():s},
aG:function(a){var s=this.f
if(s!=null)s.A(a)},
ed:function(){return this.aG(null)},
saQ:function(a){var s,r,q=this
if(!J.L(q.b,a)){s=q.b
if(s!=null)s.gu().U(0,q.gcr())
r=q.b
q.b=a
if(a!=null)a.gu().m(0,q.gcr())
s=new D.z("mover",r,q.b)
s.b=!0
q.aG(s)}}}
X.io.prototype={}
V.he.prototype={
fM:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if(j.c==null)return
s=j.d.length
r=P.kd().gbk().h(0,j.a)
if(r==null||r.length<=s){q=!0
p=!1}else{if(s>=r.length)return H.c(r,s)
p=r[s]==="1"
q=!1}c.$1(p)
o=document
n=o.createElement("label")
m=n.style
m.whiteSpace="nowrap"
J.jV(j.c).m(0,n)
l=W.mM("checkbox")
l.checked=p
W.X(l,"change",new V.hf(j,c,l,s),!1)
n.children
n.appendChild(l)
k=o.createElement("span")
k.textContent=b
n.children
n.appendChild(k)
J.jV(j.c).m(0,o.createElement("br"))
j.d.push(l)
if(q)j.cP(s,p)},
cP:function(a,b){var s,r,q,p,o,n=this.a,m=P.kd().gbk().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.hv(m,a-s+1,"0")
r=a>0?C.a.p(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.a7(m,s)
q=P.kd()
s=t.X
p=P.mU(q.gbk(),s,s)
p.j(0,n,r)
o=q.dF(0,p)
n=window.history
s=o.gbM()
n.toString
n.replaceState(new P.jh([],[]).bm(""),"",s)}}
V.hf.prototype={
$1:function(a){var s=this,r=s.c
s.b.$1(r.checked)
s.a.cP(s.d,r.checked)}}
V.jP.prototype={
$1:function(a){var s=C.d.dK(this.a.ghe(),2)
if(s!=="0.00")P.kE(s+" fps")}}
V.ii.prototype={
e1:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
m.className="scrollTop"
n.appendChild(m)
s=o.createElement("div")
s.className="scrollPage"
n.appendChild(s)
r=o.createElement("div")
r.className="pageCenter"
s.appendChild(r)
if(a.length!==0){o.title=a
q=o.createElement("div")
q.className="pageTitle"
q.textContent=a
r.appendChild(q)}p=o.createElement("div")
this.a=p
r.appendChild(p)
this.b=null
W.X(o,"scroll",new V.ik(m),!1)},
cR:function(a){var s,r,q,p,o,n,m,l
this.fB()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hi(a)
q.toString
p=new H.N(p)
p=new P.bW(q.dL(new H.bK(p,p.gk(p))).a())
for(;p.v();){q=p.gD(p)
switch(q.a){case"Bold":o=s.createElement("div")
o.className="boldPar"
o.textContent=q.b
r.appendChild(o)
break
case"Italic":o=s.createElement("div")
o.className="italicPar"
o.textContent=q.b
r.appendChild(o)
break
case"Code":o=s.createElement("div")
o.className="codePar"
o.textContent=q.b
r.appendChild(o)
break
case"Link":q=q.b
if(H.m2(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kr(C.R,q,C.e,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.h(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
fN:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.bY
q=s.a(r.insertCell(-1)).style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
o.id=a[p]
q=o.style
q.textAlign="left"
q=o.style
q.verticalAlign="top"
n=s.a(r.insertCell(-1))
q=n.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
n.appendChild(o)}},
fB:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=new L.iw()
s.a=new H.y(t.cn)
s.b=new H.y(t.w)
s.c=P.kU(t.X)
s.d=s.K(0,o)
r=s.K(0,o).q(0,n)
q=K.a1(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.K(0,n).q(0,n)
q=new K.aX()
p=t.L
q.a=H.d([],p)
r.a.push(q)
r=K.a1(new H.N("*"))
q.a.push(r)
r=s.K(0,n).q(0,"BoldEnd")
q=K.a1(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.K(0,o).q(0,m)
q=K.a1(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.K(0,m).q(0,m)
q=new K.aX()
q.a=H.d([],p)
r.a.push(q)
r=K.a1(new H.N("_"))
q.a.push(r)
r=s.K(0,m).q(0,l)
q=K.a1(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.K(0,o).q(0,k)
q=K.a1(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.K(0,k).q(0,k)
q=new K.aX()
q.a=H.d([],p)
r.a.push(q)
r=K.a1(new H.N("`"))
q.a.push(r)
r=s.K(0,k).q(0,"CodeEnd")
q=K.a1(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.K(0,o).q(0,j)
q=K.a1(new H.N("["))
r.a.push(q)
r.c=!0
r=s.K(0,j).q(0,i)
q=K.a1(new H.N("|"))
r.a.push(q)
q=s.K(0,j).q(0,h)
r=K.a1(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.K(0,j).q(0,j)
r=new K.aX()
r.a=H.d([],p)
q.a.push(r)
q=K.a1(new H.N("|]"))
r.a.push(q)
q=s.K(0,i).q(0,h)
r=K.a1(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.K(0,i).q(0,i)
r=new K.aX()
r.a=H.d([],p)
q.a.push(r)
q=K.a1(new H.N("|]"))
r.a.push(q)
s.K(0,o).q(0,g).a.push(new K.h5())
q=s.K(0,g).q(0,g)
r=new K.aX()
r.a=H.d([],p)
q.a.push(r)
q=K.a1(new H.N("*_`["))
r.a.push(q)
q=s.K(0,"BoldEnd")
q.d=q.a.b3(n)
q=s.K(0,l)
q.d=q.a.b3(m)
q=s.K(0,"CodeEnd")
q.d=q.a.b3(k)
q=s.K(0,h)
q.d=q.a.b3("Link")
q=s.K(0,g)
q.d=q.a.b3(g)
this.b=s}}
V.ik.prototype={
$1:function(a){P.li(C.m,new V.ij(this.a))}}
V.ij.prototype={
$0:function(){var s=C.d.aj(document.documentElement.scrollTop),r=this.a.style,q=H.h(-0.01*s)+"px"
r.top=q}}
X.jM.prototype={
$1:function(a){var s,r=this.a,q=-this.b.c.d,p=Math.cos(q),o=Math.sin(q)
q=new V.aW(p,0,-o,0,1,0,o,0,p)
if(!J.L(r.z,q)){s=r.z
r.z=q
r.Q=q.bg(0)
q=new D.z("velocityRotation",s,r.z)
q.b=!0
r.H(q)}}}
X.jN.prototype={
$1:function(a){this.a.x.r=a}};(function aliases(){var s=J.a.prototype
s.dV=s.i
s=J.aV.prototype
s.dW=s.i
s=K.dI.prototype
s.dU=s.aP
s.cj=s.i
s=O.cr.prototype
s.ck=s.at
s=O.aH.prototype
s.cl=s.at})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"og","mQ",22)
r(P,"oW","ns",7)
r(P,"oX","nt",7)
r(P,"oY","nu",7)
q(P,"lU","oR",8)
r(W,"qt","hr",23)
var k
p(k=E.bj.prototype,"gdu",0,0,null,["$1","$0"],["dv","ht"],0,0)
p(k,"gdw",0,0,null,["$1","$0"],["dz","hu"],0,0)
p(k,"gds",0,0,null,["$1","$0"],["dt","hs"],0,0)
p(k,"gdq",0,0,null,["$1","$0"],["dr","hp"],0,0)
o(k,"ghn","ho",4)
o(k,"ghq","hr",4)
p(k=E.eC.prototype,"gcn",0,0,null,["$1","$0"],["cp","co"],0,0)
n(k,"ghJ","dG",8)
m(k=X.cj.prototype,"ge4","e5",19)
o(k,"ge2","e3",9)
o(k,"ge6","e7",9)
m(k,"gbq","br",1)
m(k,"gbF","bG",1)
m(k=X.eV.prototype,"geY","eZ",5)
m(k,"geM","eN",5)
m(k,"geS","eT",2)
m(k,"gbF","bG",10)
m(k,"gbq","br",10)
m(k,"gf3","f4",2)
m(k,"gf7","f8",2)
m(k,"geW","eX",2)
m(k,"gf5","f6",2)
m(k,"geU","eV",2)
m(k,"gf9","fa",20)
m(k,"gfb","fc",5)
m(k,"gfn","fo",6)
m(k,"gfj","fk",6)
m(k,"gfl","fm",6)
p(D.bh.prototype,"ge8",0,0,null,["$1","$0"],["ar","e9"],0,0)
p(k=D.cl.prototype,"gcF",0,0,null,["$1","$0"],["cG","f1"],0,0)
m(k,"gfd","fe",21)
o(k,"geG","eH",11)
o(k,"gfh","fi",11)
l(V.am.prototype,"gk","c7",12)
l(V.C.prototype,"gk","c7",12)
p(k=U.bG.prototype,"gaD",0,0,null,["$1","$0"],["H","a8"],0,0)
o(k,"geE","eF",13)
o(k,"gff","fg",13)
p(k=U.cK.prototype,"gaD",0,0,null,["$1","$0"],["H","a8"],0,0)
m(k,"gey","ez",1)
m(k,"geA","eB",1)
m(k,"geC","eD",1)
m(k,"geu","ev",1)
m(k,"gew","ex",1)
m(k,"gfI","fJ",1)
m(k,"gfG","fH",1)
m(k,"gfE","fF",1)
p(k=U.cL.prototype,"gaD",0,0,null,["$1","$0"],["H","a8"],0,0)
m(k,"gf_","f0",1)
p(k=M.dC.prototype,"gaE",0,0,null,["$1","$0"],["aF","ea"],0,0)
o(k,"geO","eP",4)
o(k,"geQ","eR",4)
p(k=O.dU.prototype,"gba",0,0,null,["$1","$0"],["W","bE"],0,0)
p(k,"gfu",0,0,null,["$1","$0"],["cH","fv"],0,0)
o(k,"geI","eJ",14)
o(k,"geK","eL",14)
p(O.cr.prototype,"gba",0,0,null,["$1","$0"],["W","bE"],0,0)
p(X.e8.prototype,"gcr",0,0,null,["$1","$0"],["aG","ed"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.K,null)
q(P.K,[H.k4,J.a,J.a2,P.H,P.cQ,P.i,H.bK,P.dK,H.cd,H.eS,H.c7,H.iz,H.i5,H.fF,H.bB,P.at,H.hH,H.dR,H.dM,H.ai,H.fh,P.d1,P.bV,P.bW,P.f0,P.cC,P.ev,P.cD,P.jq,P.cW,P.jc,P.cP,P.j,P.fS,P.cq,P.du,P.jp,P.jo,P.ap,P.ab,P.P,P.bi,P.e7,P.cB,P.fe,P.hB,P.o,P.F,P.ah,P.B,P.U,P.bv,P.iJ,P.fz,W.hj,W.dt,W.k0,W.kg,W.J,W.ce,P.jg,P.d3,P.fx,P.b_,K.h5,K.dI,K.hN,K.ic,L.es,L.eD,L.eE,L.iw,O.Y,O.cs,E.hc,E.bj,E.bA,E.bP,E.fb,E.i7,E.eC,Z.eZ,Z.j4,Z.dr,Z.bI,Z.b0,D.hd,D.bE,D.Q,X.ds,X.a7,X.hG,X.hL,X.bq,X.i4,X.ix,X.eV,D.dn,D.bh,D.R,D.ec,D.ep,V.O,V.bg,V.hv,V.aW,V.aI,V.aw,V.a3,V.cx,V.eh,V.am,V.C,U.cK,U.cL,M.dC,A.dk,A.h7,A.Z,A.dp,A.dA,A.ee,A.eq,A.hQ,A.cF,A.cG,A.cI,A.cJ,A.eI,A.iG,F.dD,F.dQ,F.eb,F.id,F.ie,F.ig,F.ih,F.eX,F.iX,F.iY,F.j0,F.j1,O.ey,O.cr,O.hR,T.is,X.jX,X.io,X.e8,V.he,V.ii])
q(J.a,[J.dL,J.ci,J.aV,J.u,J.bm,J.aF,H.ct,H.T,W.e,W.h4,W.be,W.aC,W.G,W.f5,W.ag,W.hm,W.hn,W.f7,W.cb,W.f9,W.ho,W.k,W.ff,W.ar,W.hD,W.fj,W.bl,W.hK,W.i1,W.fn,W.fo,W.au,W.fp,W.fr,W.av,W.fv,W.fy,W.ax,W.fA,W.ay,W.fG,W.ak,W.fK,W.iv,W.az,W.fM,W.iy,W.iO,W.fT,W.fV,W.fX,W.fZ,W.h0,P.aG,P.fl,P.aK,P.ft,P.i6,P.fH,P.aN,P.fO,P.h8,P.f1,P.ei,P.fD])
q(J.aV,[J.e9,J.bu,J.as])
r(J.hE,J.u)
q(J.bm,[J.ch,J.cg])
q(P.H,[H.dO,H.e3,H.dN,H.eR,H.ek,H.fc,P.dj,P.e4,P.af,P.eT,P.eQ,P.et,P.dw,P.dy])
r(P.cn,P.cQ)
q(P.cn,[H.bS,W.f3,W.f2,P.dG])
r(H.N,H.bS)
q(P.i,[H.m,H.bp,H.cM,P.cf])
r(H.cc,H.bp)
q(P.dK,[H.dS,H.f_])
r(H.c8,H.c7)
q(H.bB,[H.ip,H.hF,H.jG,H.jH,H.jI,P.j6,P.j5,P.j7,P.j8,P.jl,P.jk,P.jz,P.je,P.jf,P.hI,P.hM,P.iR,P.iS,P.hp,P.hq,P.iN,P.iK,P.iL,P.iM,P.jn,P.jm,P.ju,P.jt,P.jv,P.jw,W.i2,W.i3,W.ib,W.im,W.j9,P.ji,P.jj,P.jA,P.hz,P.hA,P.h9,E.i8,E.i9,E.ia,E.iu,D.hx,D.hy,F.jr,F.jD,F.jE,F.j3,F.j2,F.iZ,F.j_,O.hU,O.hV,O.hW,O.hX,O.hY,O.hZ,O.i_,O.i0,T.it,V.hf,V.jP,V.ik,V.ij,X.jM,X.jN])
q(H.ip,[H.il,H.c6])
r(P.cp,P.at)
r(H.y,P.cp)
r(H.cm,H.m)
r(H.bN,H.T)
q(H.bN,[H.cS,H.cU])
r(H.cT,H.cS)
r(H.br,H.cT)
r(H.cV,H.cU)
r(H.cu,H.cV)
q(H.cu,[H.dZ,H.e_,H.e0,H.e1,H.e2,H.cv,H.bO])
r(H.d2,H.fc)
r(P.cZ,P.cf)
r(P.jd,P.jq)
r(P.cO,P.cW)
r(P.d6,P.cq)
r(P.bT,P.d6)
q(P.du,[P.ha,P.hs])
r(P.dx,P.ev)
q(P.dx,[P.hb,P.iT,P.iQ])
r(P.iP,P.hs)
q(P.P,[P.W,P.l])
q(P.af,[P.bR,P.dJ])
r(P.f6,P.bv)
q(W.e,[W.v,W.dF,W.bL,W.aj,W.cX,W.al,W.a8,W.d_,W.eY,W.bU,P.dm,P.aU])
q(W.v,[W.E,W.aq])
q(W.E,[W.p,P.n])
q(W.p,[W.dh,W.di,W.bf,W.dH,W.bH,W.bJ,W.el,W.aZ])
r(W.hi,W.aC)
r(W.c9,W.f5)
q(W.ag,[W.hk,W.hl])
r(W.f8,W.f7)
r(W.ca,W.f8)
r(W.fa,W.f9)
r(W.dB,W.fa)
r(W.ac,W.be)
r(W.fg,W.ff)
r(W.bF,W.fg)
r(W.fk,W.fj)
r(W.bk,W.fk)
r(W.aP,W.k)
q(W.aP,[W.bo,W.ad,W.bt])
r(W.dW,W.fn)
r(W.dX,W.fo)
r(W.fq,W.fp)
r(W.dY,W.fq)
r(W.fs,W.fr)
r(W.cw,W.fs)
r(W.fw,W.fv)
r(W.ea,W.fw)
r(W.ej,W.fy)
r(W.cY,W.cX)
r(W.en,W.cY)
r(W.fB,W.fA)
r(W.eo,W.fB)
r(W.eu,W.fG)
r(W.fL,W.fK)
r(W.ez,W.fL)
r(W.d0,W.d_)
r(W.eA,W.d0)
r(W.fN,W.fM)
r(W.eF,W.fN)
r(W.b1,W.ad)
r(W.fU,W.fT)
r(W.f4,W.fU)
r(W.cN,W.cb)
r(W.fW,W.fV)
r(W.fi,W.fW)
r(W.fY,W.fX)
r(W.cR,W.fY)
r(W.h_,W.fZ)
r(W.fC,W.h_)
r(W.h1,W.h0)
r(W.fJ,W.h1)
r(W.fd,P.cC)
r(P.jh,P.jg)
r(P.a4,P.fx)
r(P.fm,P.fl)
r(P.dP,P.fm)
r(P.fu,P.ft)
r(P.e5,P.fu)
r(P.fI,P.fH)
r(P.ew,P.fI)
r(P.fP,P.fO)
r(P.eG,P.fP)
r(P.dl,P.f1)
r(P.e6,P.aU)
r(P.fE,P.fD)
r(P.er,P.fE)
q(K.dI,[K.aX,L.eH])
q(E.hc,[Z.dq,A.cA,T.eB])
q(D.Q,[D.aD,D.aE,D.z,X.bn,X.ed])
q(O.Y,[X.cj,D.cl,U.bG])
q(X.ed,[X.co,X.bM,X.cE])
q(D.hd,[U.hg,U.S])
q(U.S,[U.bD,U.cz])
r(A.dT,A.cA)
q(A.eI,[A.eK,A.iD,A.iE,A.iF,A.iB,A.eJ,A.iC,A.eL,A.eM,A.iH,A.eN,A.cH,A.eO,A.eP])
r(O.dU,O.ey)
q(O.cr,[O.hO,O.hP,O.aH])
q(O.aH,[O.hS,O.hT])
r(T.iq,T.eB)
r(T.ir,T.iq)
r(X.hC,X.io)
s(H.bS,H.eS)
s(H.cS,P.j)
s(H.cT,H.cd)
s(H.cU,P.j)
s(H.cV,H.cd)
s(P.cQ,P.j)
s(P.d6,P.fS)
s(W.f5,W.hj)
s(W.f7,P.j)
s(W.f8,W.J)
s(W.f9,P.j)
s(W.fa,W.J)
s(W.ff,P.j)
s(W.fg,W.J)
s(W.fj,P.j)
s(W.fk,W.J)
s(W.fn,P.at)
s(W.fo,P.at)
s(W.fp,P.j)
s(W.fq,W.J)
s(W.fr,P.j)
s(W.fs,W.J)
s(W.fv,P.j)
s(W.fw,W.J)
s(W.fy,P.at)
s(W.cX,P.j)
s(W.cY,W.J)
s(W.fA,P.j)
s(W.fB,W.J)
s(W.fG,P.at)
s(W.fK,P.j)
s(W.fL,W.J)
s(W.d_,P.j)
s(W.d0,W.J)
s(W.fM,P.j)
s(W.fN,W.J)
s(W.fT,P.j)
s(W.fU,W.J)
s(W.fV,P.j)
s(W.fW,W.J)
s(W.fX,P.j)
s(W.fY,W.J)
s(W.fZ,P.j)
s(W.h_,W.J)
s(W.h0,P.j)
s(W.h1,W.J)
s(P.fl,P.j)
s(P.fm,W.J)
s(P.ft,P.j)
s(P.fu,W.J)
s(P.fH,P.j)
s(P.fI,W.J)
s(P.fO,P.j)
s(P.fP,W.J)
s(P.f1,P.at)
s(P.fD,P.j)
s(P.fE,W.J)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",W:"double",P:"num",B:"String",ap:"bool",ah:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Q*])","~(Q*)","~(ad*)","ah(@,@)","~(l*,i<bj*>*)","~(k*)","~(bt*)","~(~())","~()","~(l*,i<a7*>*)","~(bo*)","~(l*,i<R*>*)","W*()","~(l*,i<S*>*)","~(l*,i<aI*>*)","@(@)","ah(@)","ah(K?,K?)","b_(@,@)","ap*(i<a7*>*)","~(b1*)","ap*(i<R*>*)","l(@,@)","B(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nN(v.typeUniverse,JSON.parse('{"as":"aV","e9":"aV","bu":"aV","po":"k","py":"k","pq":"aU","pp":"e","pG":"e","pI":"e","pn":"n","pA":"n","pr":"p","pD":"p","pB":"v","px":"v","q7":"a8","pv":"aP","ps":"aq","pJ":"aq","pH":"ad","pC":"bk","pF":"br","pE":"T","dL":{"ap":[]},"aV":{"kR":[]},"u":{"o":["1"],"m":["1"],"i":["1"]},"hE":{"u":["1"],"o":["1"],"m":["1"],"i":["1"]},"bm":{"W":[],"P":[]},"ch":{"W":[],"l":[],"P":[]},"cg":{"W":[],"P":[]},"aF":{"B":[]},"dO":{"H":[]},"N":{"j":["l"],"o":["l"],"m":["l"],"i":["l"],"j.E":"l"},"m":{"i":["1"]},"bp":{"i":["2"]},"cc":{"m":["2"],"i":["2"]},"cM":{"i":["1"]},"bS":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"c7":{"F":["1","2"]},"c8":{"F":["1","2"]},"e3":{"H":[]},"dN":{"H":[]},"eR":{"H":[]},"ek":{"H":[]},"y":{"F":["1","2"]},"cm":{"m":["1"],"i":["1"]},"dM":{"la":[]},"bN":{"w":["1"],"T":[]},"br":{"j":["W"],"w":["W"],"o":["W"],"T":[],"m":["W"],"i":["W"],"j.E":"W"},"cu":{"j":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"]},"dZ":{"j":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"],"j.E":"l"},"e_":{"j":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"],"j.E":"l"},"e0":{"j":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"],"j.E":"l"},"e1":{"j":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"],"j.E":"l"},"e2":{"j":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"],"j.E":"l"},"cv":{"j":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"],"j.E":"l"},"bO":{"j":["l"],"b_":[],"w":["l"],"o":["l"],"T":[],"m":["l"],"i":["l"],"j.E":"l"},"fc":{"H":[]},"d2":{"H":[]},"d1":{"cD":[]},"cZ":{"i":["1"]},"cO":{"m":["1"],"i":["1"]},"cf":{"i":["1"]},"cn":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"cp":{"F":["1","2"]},"at":{"F":["1","2"]},"cq":{"F":["1","2"]},"bT":{"F":["1","2"]},"cW":{"m":["1"],"i":["1"]},"W":{"P":[]},"dj":{"H":[]},"e4":{"H":[]},"af":{"H":[]},"bR":{"H":[]},"dJ":{"H":[]},"eT":{"H":[]},"eQ":{"H":[]},"et":{"H":[]},"dw":{"H":[]},"e7":{"H":[]},"cB":{"H":[]},"dy":{"H":[]},"l":{"P":[]},"o":{"m":["1"],"i":["1"]},"bv":{"eU":[]},"fz":{"eU":[]},"f6":{"eU":[]},"p":{"E":[],"v":[],"e":[]},"dh":{"E":[],"v":[],"e":[]},"di":{"E":[],"v":[],"e":[]},"bf":{"E":[],"v":[],"e":[]},"aq":{"v":[],"e":[]},"ca":{"j":["a4<P>"],"o":["a4<P>"],"w":["a4<P>"],"m":["a4<P>"],"i":["a4<P>"],"j.E":"a4<P>"},"cb":{"a4":["P"]},"dB":{"j":["B"],"o":["B"],"w":["B"],"m":["B"],"i":["B"],"j.E":"B"},"f3":{"j":["E"],"o":["E"],"m":["E"],"i":["E"],"j.E":"E"},"E":{"v":[],"e":[]},"ac":{"be":[]},"bF":{"j":["ac"],"o":["ac"],"w":["ac"],"m":["ac"],"i":["ac"],"j.E":"ac"},"dF":{"e":[]},"dH":{"E":[],"v":[],"e":[]},"bk":{"j":["v"],"o":["v"],"w":["v"],"m":["v"],"i":["v"],"j.E":"v"},"bH":{"E":[],"v":[],"e":[]},"bJ":{"E":[],"v":[],"e":[]},"dt":{"E":[],"v":[],"e":[]},"bo":{"k":[]},"bL":{"e":[]},"dW":{"F":["B","@"]},"dX":{"F":["B","@"]},"dY":{"j":["au"],"o":["au"],"w":["au"],"m":["au"],"i":["au"],"j.E":"au"},"ad":{"k":[]},"f2":{"j":["v"],"o":["v"],"m":["v"],"i":["v"],"j.E":"v"},"v":{"e":[]},"cw":{"j":["v"],"o":["v"],"w":["v"],"m":["v"],"i":["v"],"j.E":"v"},"ea":{"j":["av"],"o":["av"],"w":["av"],"m":["av"],"i":["av"],"j.E":"av"},"ej":{"F":["B","@"]},"el":{"E":[],"v":[],"e":[]},"aj":{"e":[]},"en":{"j":["aj"],"o":["aj"],"w":["aj"],"e":[],"m":["aj"],"i":["aj"],"j.E":"aj"},"eo":{"j":["ax"],"o":["ax"],"w":["ax"],"m":["ax"],"i":["ax"],"j.E":"ax"},"eu":{"F":["B","B"]},"aZ":{"E":[],"v":[],"e":[]},"al":{"e":[]},"a8":{"e":[]},"ez":{"j":["a8"],"o":["a8"],"w":["a8"],"m":["a8"],"i":["a8"],"j.E":"a8"},"eA":{"j":["al"],"o":["al"],"w":["al"],"e":[],"m":["al"],"i":["al"],"j.E":"al"},"bt":{"k":[]},"eF":{"j":["az"],"o":["az"],"w":["az"],"m":["az"],"i":["az"],"j.E":"az"},"aP":{"k":[]},"eY":{"e":[]},"b1":{"ad":[],"k":[]},"bU":{"e":[]},"f4":{"j":["G"],"o":["G"],"w":["G"],"m":["G"],"i":["G"],"j.E":"G"},"cN":{"a4":["P"]},"fi":{"j":["ar?"],"o":["ar?"],"w":["ar?"],"m":["ar?"],"i":["ar?"],"j.E":"ar?"},"cR":{"j":["v"],"o":["v"],"w":["v"],"m":["v"],"i":["v"],"j.E":"v"},"fC":{"j":["ay"],"o":["ay"],"w":["ay"],"m":["ay"],"i":["ay"],"j.E":"ay"},"fJ":{"j":["ak"],"o":["ak"],"w":["ak"],"m":["ak"],"i":["ak"],"j.E":"ak"},"d3":{"bl":[]},"dG":{"j":["E"],"o":["E"],"m":["E"],"i":["E"],"j.E":"E"},"a4":{"fx":["1"]},"dP":{"j":["aG"],"o":["aG"],"m":["aG"],"i":["aG"],"j.E":"aG"},"e5":{"j":["aK"],"o":["aK"],"m":["aK"],"i":["aK"],"j.E":"aK"},"ew":{"j":["B"],"o":["B"],"m":["B"],"i":["B"],"j.E":"B"},"n":{"E":[],"v":[],"e":[]},"eG":{"j":["aN"],"o":["aN"],"m":["aN"],"i":["aN"],"j.E":"aN"},"b_":{"o":["l"],"m":["l"],"i":["l"]},"dl":{"F":["B","@"]},"dm":{"e":[]},"aU":{"e":[]},"e6":{"e":[]},"er":{"j":["F<@,@>"],"o":["F<@,@>"],"m":["F<@,@>"],"i":["F<@,@>"],"j.E":"F<@,@>"},"Y":{"i":["1*"],"Y.T":"1"},"aD":{"Q":[]},"aE":{"Q":[]},"z":{"Q":[]},"bn":{"Q":[]},"cj":{"Y":["a7*"],"i":["a7*"],"Y.T":"a7*"},"co":{"Q":[]},"bM":{"Q":[]},"ed":{"Q":[]},"cE":{"Q":[]},"dn":{"R":[]},"bh":{"R":[]},"cl":{"Y":["R*"],"i":["R*"],"Y.T":"R*"},"ec":{"R":[]},"ep":{"R":[]},"bD":{"S":[]},"bG":{"Y":["S*"],"S":[],"i":["S*"],"Y.T":"S*"},"cz":{"S":[]},"cK":{"S":[]},"cL":{"S":[]},"dT":{"cA":[]}}'))
H.nM(v.typeUniverse,JSON.parse('{"a2":1,"m":1,"bK":1,"bp":2,"cc":2,"dS":2,"cM":1,"f_":1,"cd":1,"eS":1,"bS":1,"c7":2,"cm":1,"dR":1,"bN":1,"bW":1,"cZ":1,"cC":1,"ev":2,"cP":1,"cf":1,"cn":1,"cp":2,"at":2,"fS":2,"cq":2,"cW":1,"cQ":1,"d6":2,"du":2,"dx":2,"i":1,"dK":1,"fd":1,"J":1,"ce":1,"aD":1,"aE":1,"z":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.kx
return{F:s("be"),Y:s("m<@>"),h:s("E"),C:s("H"),G:s("k"),v:s("ac"),bX:s("bF"),Z:s("pz"),u:s("bl"),fS:s("bH"),gk:s("bJ"),s:s("u<B>"),gn:s("u<@>"),t:s("u<l>"),x:s("u<dk*>"),bb:s("u<dn*>"),am:s("u<dp*>"),g0:s("u<dq*>"),aM:s("u<dt*>"),cP:s("u<bh*>"),M:s("u<dA*>"),b:s("u<dD*>"),aZ:s("u<bI*>"),B:s("u<dQ*>"),L:s("u<hN*>"),p:s("u<aI*>"),o:s("u<S*>"),eb:s("u<ec*>"),cS:s("u<aw*>"),d1:s("u<ee*>"),k:s("u<eb*>"),du:s("u<ep*>"),cz:s("u<eq*>"),eG:s("u<cC<K*>*>"),i:s("u<B*>"),fG:s("u<ey*>"),bw:s("u<eB*>"),br:s("u<eH*>"),fj:s("u<eI*>"),d6:s("u<cF*>"),dv:s("u<cG*>"),hg:s("u<cH*>"),by:s("u<cI*>"),fF:s("u<cJ*>"),j:s("u<eX*>"),m:s("u<W*>"),V:s("u<l*>"),f:s("u<~(Q*)*>"),T:s("ci"),eH:s("kR"),g:s("as"),aU:s("w<@>"),h9:s("y<B*,cA*>"),cn:s("y<B*,es*>"),dO:s("y<B*,B*>"),w:s("y<B*,eE*>"),en:s("y<l*,o<cF*>*>"),af:s("y<l*,o<cG*>*>"),gr:s("y<l*,o<cI*>*>"),gb:s("y<l*,o<cJ*>*>"),J:s("y<l*,eK*>"),E:s("y<l*,ap*>"),a:s("y<l*,l*>"),aH:s("o<@>"),eO:s("F<@,@>"),bK:s("bL"),bZ:s("ct"),dD:s("T"),bm:s("bO"),P:s("ah"),K:s("K"),q:s("a4<P>"),fv:s("la"),N:s("B"),bY:s("aZ"),aF:s("cD"),gc:s("b_"),ak:s("bu"),U:s("bT<B,B>"),R:s("eU"),cJ:s("ap"),gR:s("W"),z:s("@"),S:s("l"),fr:s("bf*"),l:s("bj*"),D:s("a7*"),gj:s("R*"),dn:s("co*"),hc:s("aI*"),d:s("bM*"),ah:s("S*"),A:s("0&*"),_:s("K*"),X:s("B*"),eB:s("eD*"),eP:s("cE*"),n:s("eJ*"),r:s("eL*"),y:s("eM*"),O:s("eN*"),I:s("cH*"),c:s("eO*"),Q:s("eP*"),e:s("l*"),dm:s("~(Q*)*"),bG:s("kP<ah>?"),W:s("K?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.bf.prototype
C.M=J.a.prototype
C.b=J.u.prototype
C.N=J.cg.prototype
C.c=J.ch.prototype
C.n=J.ci.prototype
C.d=J.bm.prototype
C.a=J.aF.prototype
C.O=J.as.prototype
C.x=J.e9.prototype
C.W=P.ei.prototype
C.o=J.bu.prototype
C.y=W.b1.prototype
C.z=W.bU.prototype
C.A=new E.bA("Browser.chrome")
C.p=new E.bA("Browser.firefox")
C.q=new E.bA("Browser.edge")
C.B=new E.bA("Browser.other")
C.Z=new P.hb()
C.C=new P.ha()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.I=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.H=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.G=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.t=function(hooks) { return hooks; }

C.J=new P.e7()
C.e=new P.iP()
C.K=new P.iT()
C.f=new P.jd()
C.m=new P.bi(0)
C.L=new P.bi(5e6)
C.j=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.k=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.l=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Q=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.R=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.u=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.v=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.P=H.d(s([]),t.i)
C.S=new H.c8(0,{},C.P,H.kx("c8<B*,B*>"))
C.T=new E.bP("OperatingSystem.windows")
C.w=new E.bP("OperatingSystem.mac")
C.U=new E.bP("OperatingSystem.linux")
C.V=new E.bP("OperatingSystem.other")
C.X=new P.iQ(!1)
C.Y=new P.bV(null,2)})();(function staticFields(){$.lw=null
$.aB=0
$.kL=null
$.kK=null
$.lV=null
$.lT=null
$.m0=null
$.jB=null
$.jK=null
$.kA=null
$.c_=null
$.da=null
$.db=null
$.ku=!1
$.aA=C.f
$.a9=H.d([],H.kx("u<K>"))
$.hu=null
$.kW=null
$.l_=null
$.l2=null
$.aL=null
$.lc=null
$.lp=null
$.lr=null
$.iU=null
$.iV=null
$.iW=null
$.lq=null
$.l1=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"pw","m8",function(){return H.p9("_$dart_dartClosure")})
s($,"pK","m9",function(){return H.aO(H.iA({
toString:function(){return"$receiver$"}}))})
s($,"pL","ma",function(){return H.aO(H.iA({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"pM","mb",function(){return H.aO(H.iA(null))})
s($,"pN","mc",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"pQ","mf",function(){return H.aO(H.iA(void 0))})
s($,"pR","mg",function(){return H.aO(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"pP","me",function(){return H.aO(H.lk(null))})
s($,"pO","md",function(){return H.aO(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"pT","mi",function(){return H.aO(H.lk(void 0))})
s($,"pS","mh",function(){return H.aO(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"q8","kF",function(){return P.nr()})
s($,"pU","mj",function(){return new P.iR().$0()})
s($,"pV","mk",function(){return new P.iS().$0()})
s($,"q9","mo",function(){return new Int8Array(H.bY(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qb","mp",function(){return P.na("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qr","mq",function(){return P.o9()})
s($,"q1","mn",function(){return Z.an(0)})
s($,"pW","ml",function(){return Z.an(511)})
s($,"q3","bb",function(){return Z.an(1)})
s($,"q2","ba",function(){return Z.an(2)})
s($,"pY","b9",function(){return Z.an(4)})
s($,"q4","bc",function(){return Z.an(8)})
s($,"q5","by",function(){return Z.an(16)})
s($,"pZ","de",function(){return Z.an(32)})
s($,"q_","df",function(){return Z.an(64)})
s($,"q0","mm",function(){return Z.an(96)})
s($,"q6","c4",function(){return Z.an(128)})
s($,"pX","b8",function(){return Z.an(256)})
s($,"pu","m7",function(){return new V.hv()})
s($,"pt","A",function(){return $.m7()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ct,DataView:H.T,ArrayBufferView:H.T,Float32Array:H.br,Float64Array:H.br,Int16Array:H.dZ,Int32Array:H.e_,Int8Array:H.e0,Uint16Array:H.e1,Uint32Array:H.e2,Uint8ClampedArray:H.cv,CanvasPixelArray:H.cv,Uint8Array:H.bO,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLBodyElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLDivElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.h4,HTMLAnchorElement:W.dh,HTMLAreaElement:W.di,Blob:W.be,HTMLCanvasElement:W.bf,CDATASection:W.aq,CharacterData:W.aq,Comment:W.aq,ProcessingInstruction:W.aq,Text:W.aq,CSSPerspective:W.hi,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.c9,MSStyleCSSProperties:W.c9,CSS2Properties:W.c9,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.aC,CSSRotation:W.aC,CSSScale:W.aC,CSSSkew:W.aC,CSSTranslation:W.aC,CSSTransformComponent:W.aC,CSSTransformValue:W.hk,CSSUnparsedValue:W.hl,DataTransferItemList:W.hm,DOMException:W.hn,ClientRectList:W.ca,DOMRectList:W.ca,DOMRectReadOnly:W.cb,DOMStringList:W.dB,DOMTokenList:W.ho,Element:W.E,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,SubmitEvent:W.k,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ac,FileList:W.bF,FileWriter:W.dF,HTMLFormElement:W.dH,Gamepad:W.ar,History:W.hD,HTMLCollection:W.bk,HTMLFormControlsCollection:W.bk,HTMLOptionsCollection:W.bk,ImageData:W.bl,HTMLImageElement:W.bH,HTMLInputElement:W.bJ,KeyboardEvent:W.bo,Location:W.hK,MediaList:W.i1,MessagePort:W.bL,MIDIInputMap:W.dW,MIDIOutputMap:W.dX,MimeType:W.au,MimeTypeArray:W.dY,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.av,PluginArray:W.ea,RTCStatsReport:W.ej,HTMLSelectElement:W.el,SourceBuffer:W.aj,SourceBufferList:W.en,SpeechGrammar:W.ax,SpeechGrammarList:W.eo,SpeechRecognitionResult:W.ay,Storage:W.eu,CSSStyleSheet:W.ak,StyleSheet:W.ak,HTMLTableCellElement:W.aZ,HTMLTableDataCellElement:W.aZ,HTMLTableHeaderCellElement:W.aZ,TextTrack:W.al,TextTrackCue:W.a8,VTTCue:W.a8,TextTrackCueList:W.ez,TextTrackList:W.eA,TimeRanges:W.iv,Touch:W.az,TouchEvent:W.bt,TouchList:W.eF,TrackDefaultList:W.iy,CompositionEvent:W.aP,FocusEvent:W.aP,TextEvent:W.aP,UIEvent:W.aP,URL:W.iO,VideoTrackList:W.eY,WheelEvent:W.b1,Window:W.bU,DOMWindow:W.bU,CSSRuleList:W.f4,ClientRect:W.cN,DOMRect:W.cN,GamepadList:W.fi,NamedNodeMap:W.cR,MozNamedAttrMap:W.cR,SpeechRecognitionResultList:W.fC,StyleSheetList:W.fJ,SVGLength:P.aG,SVGLengthList:P.dP,SVGNumber:P.aK,SVGNumberList:P.e5,SVGPointList:P.i6,SVGStringList:P.ew,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aN,SVGTransformList:P.eG,AudioBuffer:P.h8,AudioParamMap:P.dl,AudioTrackList:P.dm,AudioContext:P.aU,webkitAudioContext:P.aU,BaseAudioContext:P.aU,OfflineAudioContext:P.e6,WebGL2RenderingContext:P.ei,SQLResultSetRowList:P.er})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.br.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
W.cX.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.lZ,[])
else X.lZ([])})})()
//# sourceMappingURL=test.dart.js.map
