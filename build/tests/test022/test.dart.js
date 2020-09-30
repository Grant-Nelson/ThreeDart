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
a[c]=function(){a[c]=function(){H.qG(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lB(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l8:function l8(){},
la:function(a){return new H.ef(a)},
ky:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oh:function(a,b,c,d){if(t.G.b(a))return new H.cr(a,b,c.J("@<0>").b0(d).J("cr<1,2>"))
return new H.aP(a,b,c.J("@<0>").b0(d).J("aP<1,2>"))},
ig:function(){return new P.c3("No element")},
o7:function(){return new P.c3("Too many elements")},
oD:function(a,b){var s=J.aJ(a)
if(typeof s!=="number")return s.W()
H.eO(a,0,s-1,b)},
eO:function(a,b,c,d){if(c-b<=32)H.oC(a,b,c,d)
else H.oB(a,b,c,d)},
oC:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b_(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a1()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oB:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a2(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a2(a6+a7,2),d=e-h,c=e+h,b=J.b_(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.H(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ab()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a1()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
q=m
r=l
break}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ab()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a1()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a1()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ab()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.l(a5,a6,b.h(a5,a4))
b.l(a5,a4,a0)
a4=q+1
b.l(a5,a7,b.h(a5,a4))
b.l(a5,a4,a2)
H.eO(a5,a6,r-2,a8)
H.eO(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.H(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.H(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ab()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eO(a5,r,q,a8)}else H.eO(a5,r,q,a8)},
ef:function ef(a){this.a=a},
p:function p(a){this.a=a},
k:function k(){},
cE:function cE(){},
bb:function bb(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b){this.a=null
this.b=a
this.c=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
fu:function fu(a,b){this.a=a
this.b=b},
cu:function cu(){},
fm:function fm(){},
c5:function c5(){},
o_:function(){throw H.b(P.B("Cannot modify unmodifiable Map"))},
nl:function(a){var s,r=H.nk(a)
if(r!=null)return r
s="minified:"+a
return s},
nc:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a5(a)
if(typeof s!="string")throw H.b(H.an(a))
return s},
cR:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
md:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
eH:function(a){return H.ol(a)},
ol:function(a){var s,r,q
if(a instanceof P.N)return H.am(H.bI(a),null)
if(J.dD(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.mc(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mc(q))return q}}return H.am(H.bI(a),null)},
mc:function(a){var s=a!=="Object"&&a!==""
return s},
om:function(){if(!!self.location)return self.location.href
return null},
mb:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ou:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.cd(q))throw H.b(H.an(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aQ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.an(q))}return H.mb(p)},
me:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cd(q))throw H.b(H.an(q))
if(q<0)throw H.b(H.an(q))
if(q>65535)return H.ou(a)}return H.mb(a)},
ov:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iC()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ar:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aQ(s,10))>>>0,56320|s&1023)}}throw H.b(P.a4(a,0,1114111,null,null))},
c0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ot:function(a){var s=H.c0(a).getFullYear()+0
return s},
or:function(a){var s=H.c0(a).getMonth()+1
return s},
on:function(a){var s=H.c0(a).getDate()+0
return s},
oo:function(a){var s=H.c0(a).getHours()+0
return s},
oq:function(a){var s=H.c0(a).getMinutes()+0
return s},
os:function(a){var s=H.c0(a).getSeconds()+0
return s},
op:function(a){var s=H.c0(a).getMilliseconds()+0
return s},
v:function(a){throw H.b(H.an(a))},
c:function(a,b){if(a==null)J.aJ(a)
throw H.b(H.ch(a,b))},
ch:function(a,b){var s,r,q="index"
if(!H.cd(b))return new P.af(!0,b,q,null)
s=J.aJ(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eI(b,q)},
qo:function(a,b,c){if(a>c)return P.a4(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a4(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
an:function(a){return new P.af(!0,a,null,null)},
qi:function(a){if(typeof a!="number")throw H.b(H.an(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ew()
s=new Error()
s.dartException=a
r=H.qH
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qH:function(){return J.a5(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b5(a))},
aW:function(a){var s,r,q,p,o,n
a=H.ng(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jj(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jk:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mq:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m8:function(a,b){return new H.ev(a,b==null?null:b.method)},
l9:function(a,b){var s=b==null,r=s?null:b.method
return new H.ed(a,r,s?null:b.receiver)},
ad:function(a){if(a==null)return new H.iP(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bJ(a,a.dartException)
return H.qe(a)},
bJ:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qe:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aQ(r,16)&8191)===10)switch(q){case 438:return H.bJ(a,H.l9(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bJ(a,H.m8(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.no()
o=$.np()
n=$.nq()
m=$.nr()
l=$.nu()
k=$.nv()
j=$.nt()
$.ns()
i=$.nx()
h=$.nw()
g=p.al(s)
if(g!=null)return H.bJ(a,H.l9(s,g))
else{g=o.al(s)
if(g!=null){g.method="call"
return H.bJ(a,H.l9(s,g))}else{g=n.al(s)
if(g==null){g=m.al(s)
if(g==null){g=l.al(s)
if(g==null){g=k.al(s)
if(g==null){g=j.al(s)
if(g==null){g=m.al(s)
if(g==null){g=i.al(s)
if(g==null){g=h.al(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bJ(a,H.m8(s,g))}}return H.bJ(a,new H.fl(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cU()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bJ(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cU()
return a},
lE:function(a){var s
if(a==null)return new H.ha(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.ha(a)},
qq:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qy:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qy)
a.$identity=s
return s},
nZ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eV().constructor.prototype):Object.create(new H.bN(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aK
if(typeof r!=="number")return r.A()
$.aK=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lW(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nV(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lW(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nV:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.na,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nT:H.nS
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nW:function(a,b,c,d){var s=H.lV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lW:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nY(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nW(r,!p,s,b)
if(r===0){p=$.aK
if(typeof p!=="number")return p.A()
$.aK=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kX())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aK
if(typeof p!=="number")return p.A()
$.aK=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kX())+"."+H.f(s)+"("+m+");}")()},
nX:function(a,b,c,d){var s=H.lV,r=H.nU
switch(b?-1:a){case 0:throw H.b(new H.eM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nY:function(a,b){var s,r,q,p,o,n,m=H.kX(),l=$.lT
if(l==null)l=$.lT=H.lS("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nX(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aK
if(typeof o!=="number")return o.A()
$.aK=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aK
if(typeof o!=="number")return o.A()
$.aK=o+1
return new Function(p+o+"}")()},
lB:function(a,b,c,d,e,f,g){return H.nZ(a,b,c,d,!!e,!!f,g)},
nS:function(a,b){return H.ho(v.typeUniverse,H.bI(a.a),b)},
nT:function(a,b){return H.ho(v.typeUniverse,H.bI(a.c),b)},
lV:function(a){return a.a},
nU:function(a){return a.c},
kX:function(){var s=$.lU
return s==null?$.lU=H.lS("self"):s},
lS:function(a){var s,r,q,p=new H.bN("self","target","receiver","name"),o=J.l7(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bL("Field name "+a+" not found."))},
qG:function(a){throw H.b(new P.dW(a))},
qs:function(a){return v.getIsolateTag(a)},
rN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qB:function(a){var s,r,q,p,o,n=$.n9.$1(a),m=$.kx[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n3.$2(a,n)
if(q!=null){m=$.kx[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kN(s)
$.kx[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kD[n]=s
return s}if(p==="-"){o=H.kN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ne(a,s)
if(p==="*")throw H.b(P.jt(n))
if(v.leafTags[n]===true){o=H.kN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ne(a,s)},
ne:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.lG(a,!1,null,!!a.$iz)},
qC:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kN(s)
else return J.lG(s,c,null,null)},
qw:function(){if(!0===$.lF)return
$.lF=!0
H.qx()},
qx:function(){var s,r,q,p,o,n,m,l
$.kx=Object.create(null)
$.kD=Object.create(null)
H.qv()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nf.$1(o)
if(n!=null){m=H.qC(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qv:function(){var s,r,q,p,o,n,m=C.J()
m=H.cf(C.K,H.cf(C.L,H.cf(C.v,H.cf(C.v,H.cf(C.M,H.cf(C.N,H.cf(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n9=new H.kz(p)
$.n3=new H.kA(o)
$.nf=new H.kB(n)},
cf:function(a,b){return a(b)||b},
ob:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
ni:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qp:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ng:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lJ:function(a,b,c){var s=H.qF(a,b,c)
return s},
qF:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ng(b),'g'),H.qp(c))},
cm:function cm(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jj:function jj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ev:function ev(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a){this.a=a},
iP:function iP(a){this.a=a},
ha:function ha(a){this.a=a
this.b=null},
bt:function bt(){},
f1:function f1(){},
eV:function eV(){},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ii:function ii(a){this.a=a},
il:function il(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cB:function cB(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
aZ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ch(b,a))},
ps:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qo(a,b,c))
return b},
cM:function cM(){},
X:function X(){},
bY:function bY(){},
bA:function bA(){},
cN:function cN(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
cO:function cO(){},
bZ:function bZ(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
oz:function(a,b){var s=b.c
return s==null?b.c=H.lp(a,b.z,!0):s},
mk:function(a,b){var s=b.c
return s==null?b.c=H.dt(a,"m_",[b.z]):s},
ml:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ml(a.z)
return s===11||s===12},
oy:function(a){return a.cy},
lD:function(a){return H.lq(v.typeUniverse,a,!1)},
bj:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bj(a,s,a0,a1)
if(r===s)return b
return H.mP(a,r,!0)
case 7:s=b.z
r=H.bj(a,s,a0,a1)
if(r===s)return b
return H.lp(a,r,!0)
case 8:s=b.z
r=H.bj(a,s,a0,a1)
if(r===s)return b
return H.mO(a,r,!0)
case 9:q=b.Q
p=H.dC(a,q,a0,a1)
if(p===q)return b
return H.dt(a,b.z,p)
case 10:o=b.z
n=H.bj(a,o,a0,a1)
m=b.Q
l=H.dC(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ln(a,n,l)
case 11:k=b.z
j=H.bj(a,k,a0,a1)
i=b.Q
h=H.qb(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mN(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dC(a,g,a0,a1)
o=b.z
n=H.bj(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lo(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hH("Attempted to substitute unexpected RTI kind "+c))}},
dC:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bj(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qc:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bj(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qb:function(a,b,c,d){var s,r=b.a,q=H.dC(a,r,c,d),p=b.b,o=H.dC(a,p,c,d),n=b.c,m=H.qc(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fN()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
qj:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.na(s)
return a.$S()}return null},
nb:function(a,b){var s
if(H.ml(b))if(a instanceof H.bt){s=H.qj(a)
if(s!=null)return s}return H.bI(a)},
bI:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lx(a)}if(Array.isArray(a))return H.lv(a)
return H.lx(J.dD(a))},
lv:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dz:function(a){var s=a.$ti
return s!=null?s:H.lx(a)},
lx:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pz(a,s)},
pz:function(a,b){var s=a instanceof H.bt?a.__proto__.__proto__.constructor:b,r=H.pa(v.typeUniverse,s.name)
b.$ccache=r
return r},
na:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lq(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
py:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dy(q,a,H.pD)
if(!H.b0(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dy(q,a,H.pG)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cd
else if(s===t.gR||s===t.H)r=H.pC
else if(s===t.N)r=H.pE
else r=s===t.cJ?H.ly:null
if(r!=null)return H.dy(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qz)){q.r="$i"+p
return H.dy(q,a,H.pF)}}else if(p===7)return H.dy(q,a,H.pw)
return H.dy(q,a,H.pu)},
dy:function(a,b,c){a.b=c
return a.b(b)},
px:function(a){var s,r,q=this
if(!H.b0(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pr
else if(q===t.K)r=H.pq
else r=H.pv
q.a=r
return q.a(a)},
q4:function(a){var s,r=a.y
if(!H.b0(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pu:function(a){var s=this
if(a==null)return H.q4(s)
return H.Y(v.typeUniverse,H.nb(a,s),null,s,null)},
pw:function(a){if(a==null)return!0
return this.z.b(a)},
pF:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dD(a)[r]},
rL:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mY(a,s)},
pv:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mY(a,s)},
mY:function(a,b){throw H.b(H.p0(H.mF(a,H.nb(a,b),H.am(b,null))))},
mF:function(a,b,c){var s=P.i4(a),r=H.am(b==null?H.bI(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
p0:function(a){return new H.dr("TypeError: "+a)},
a8:function(a,b){return new H.dr("TypeError: "+H.mF(a,null,b))},
pD:function(a){return a!=null},
pq:function(a){return a},
pG:function(a){return!0},
pr:function(a){return a},
ly:function(a){return!0===a||!1===a},
rx:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a8(a,"bool"))},
rz:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool"))},
ry:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool?"))},
rA:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"double"))},
rC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double"))},
rB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double?"))},
cd:function(a){return typeof a=="number"&&Math.floor(a)===a},
rD:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a8(a,"int"))},
rF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int"))},
rE:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int?"))},
pC:function(a){return typeof a=="number"},
rG:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"num"))},
rI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num"))},
rH:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num?"))},
pE:function(a){return typeof a=="string"},
rJ:function(a){if(typeof a=="string")return a
throw H.b(H.a8(a,"String"))},
lw:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String"))},
rK:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String?"))},
q7:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.A(r,H.am(a[q],b))
return s},
mZ:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.c(a6,i)
l=C.a.A(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.A(" extends ",H.am(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.am(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.A(a3,H.am(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.A(a3,H.am(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lM(H.am(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
am:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.am(a.z,b)
return s}if(l===7){r=a.z
s=H.am(r,b)
q=r.y
return J.lM(q===11||q===12?C.a.A("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.am(a.z,b))+">"
if(l===9){p=H.qd(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q7(o,b)+">"):p}if(l===11)return H.mZ(a,b,null)
if(l===12)return H.mZ(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
qd:function(a){var s,r=H.nk(a)
if(r!=null)return r
s="minified:"+a
return s},
mQ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pa:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lq(a,b,!1)
else if(typeof m=="number"){s=m
r=H.du(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dt(a,b,q)
n[b]=o
return o}else return m},
p8:function(a,b){return H.mX(a.tR,b)},
p7:function(a,b){return H.mX(a.eT,b)},
lq:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mL(H.mJ(a,null,b,c))
r.set(b,s)
return s},
ho:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mL(H.mJ(a,b,c,!0))
q.set(c,r)
return r},
p9:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ln(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bi:function(a,b){b.a=H.px
b.b=H.py
return b},
du:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.as(null,null)
s.y=b
s.cy=c
r=H.bi(a,s)
a.eC.set(c,r)
return r},
mP:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p5(a,b,r,c)
a.eC.set(r,s)
return s},
p5:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b0(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.as(null,null)
q.y=6
q.z=b
q.cy=c
return H.bi(a,q)},
lp:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p4(a,b,r,c)
a.eC.set(r,s)
return s},
p4:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b0(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kE(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kE(q.z))return q
else return H.oz(a,b)}}p=new H.as(null,null)
p.y=7
p.z=b
p.cy=c
return H.bi(a,p)},
mO:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.p2(a,b,r,c)
a.eC.set(r,s)
return s},
p2:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b0(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dt(a,"m_",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.as(null,null)
q.y=8
q.z=b
q.cy=c
return H.bi(a,q)},
p6:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.as(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bi(a,s)
a.eC.set(q,r)
return r},
hn:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
p1:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dt:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hn(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.as(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bi(a,r)
a.eC.set(p,q)
return q},
ln:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hn(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bi(a,o)
a.eC.set(q,n)
return n},
mN:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hn(m)
if(j>0){s=l>0?",":""
r=H.hn(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.p1(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bi(a,o)
a.eC.set(q,r)
return r},
lo:function(a,b,c,d){var s,r=b.cy+("<"+H.hn(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.p3(a,b,c,r,d)
a.eC.set(r,s)
return s},
p3:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bj(a,b,r,0)
m=H.dC(a,c,r,0)
return H.lo(a,n,m,c!==m)}}l=new H.as(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bi(a,l)},
mJ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mL:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oV(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mK(a,r,g,f,!1)
else if(q===46)r=H.mK(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bh(a.u,a.e,f.pop()))
break
case 94:f.push(H.p6(a.u,f.pop()))
break
case 35:f.push(H.du(a.u,5,"#"))
break
case 64:f.push(H.du(a.u,2,"@"))
break
case 126:f.push(H.du(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lm(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dt(p,n,o))
else{m=H.bh(p,a.e,n)
switch(m.y){case 11:f.push(H.lo(p,m,o,a.n))
break
default:f.push(H.ln(p,m,o))
break}}break
case 38:H.oW(a,f)
break
case 42:l=a.u
f.push(H.mP(l,H.bh(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lp(l,H.bh(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mO(l,H.bh(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fN()
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
H.lm(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mN(p,H.bh(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lm(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oY(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bh(a.u,a.e,h)},
oV:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mK:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mQ(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.oy(o)+'"')
d.push(H.ho(s,o,n))}else d.push(p)
return m},
oW:function(a,b){var s=b.pop()
if(0===s){b.push(H.du(a.u,1,"0&"))
return}if(1===s){b.push(H.du(a.u,4,"1&"))
return}throw H.b(P.hH("Unexpected extended operation "+H.f(s)))},
bh:function(a,b,c){if(typeof c=="string")return H.dt(a,c,a.sEA)
else if(typeof c=="number")return H.oX(a,b,c)
else return c},
lm:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bh(a,b,c[s])},
oY:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bh(a,b,c[s])},
oX:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hH("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hH("Bad index "+c+" for "+b.i(0)))},
Y:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b0(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b0(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Y(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Y(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Y(a,b,c,s,e)}if(r===8){if(!H.Y(a,b.z,c,d,e))return!1
return H.Y(a,H.mk(a,b),c,d,e)}if(r===7){s=H.Y(a,b.z,c,d,e)
return s}if(p===8){if(H.Y(a,b,c,d.z,e))return!0
return H.Y(a,b,c,H.mk(a,d),e)}if(p===7){s=H.Y(a,b,c,d.z,e)
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
if(!H.Y(a,k,c,j,e)||!H.Y(a,j,e,k,c))return!1}return H.n_(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.n_(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pB(a,b,c,d,e)}return!1},
n_:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Y(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Y(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Y(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Y(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Y(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pB:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Y(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mQ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Y(a,H.ho(a,b,l[p]),c,r[p],e))return!1
return!0},
kE:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b0(a))if(r!==7)if(!(r===6&&H.kE(a.z)))s=r===8&&H.kE(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qz:function(a){var s
if(!H.b0(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b0:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mX:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
as:function as(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fN:function fN(){this.c=this.b=this.a=null},
fI:function fI(){},
dr:function dr(a){this.a=a},
nk:function(a){return v.mangledGlobalNames[a]},
qD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hC:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lF==null){H.qw()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jt("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.m1()]
if(p!=null)return p
p=H.qB(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.m1(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
m1:function(){var s=$.mH
return s==null?$.mH=v.getIsolateTag("_$dart_js"):s},
o8:function(a,b){if(!H.cd(a))throw H.b(P.lQ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a4(a,0,4294967295,"length",null))
return J.o9(new Array(a),b)},
l6:function(a,b){if(!H.cd(a)||a<0)throw H.b(P.bL("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.J("x<0>"))},
o9:function(a,b){return J.l7(H.d(a,b.J("x<0>")))},
l7:function(a){a.fixed$length=Array
return a},
oa:function(a,b){return J.dH(a,b)},
dD:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.cx.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.cz.prototype
if(typeof a=="boolean")return J.eb.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hC(a)},
qr:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hC(a)},
b_:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hC(a)},
hB:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hC(a)},
n8:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bF.prototype
return a},
dE:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bF.prototype
return a},
aI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hC(a)},
lM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qr(a).A(a,b)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dD(a).q(a,b)},
lN:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n8(a).p(a,b)},
ck:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b_(a).h(a,b)},
kT:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nc(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hB(a).l(a,b,c)},
nH:function(a,b){return J.dE(a).C(a,b)},
nI:function(a,b,c){return J.aI(a).h0(a,b,c)},
nJ:function(a,b,c,d){return J.aI(a).hl(a,b,c,d)},
nK:function(a,b){return J.dE(a).V(a,b)},
dH:function(a,b){return J.n8(a).aU(a,b)},
kU:function(a,b){return J.b_(a).D(a,b)},
hF:function(a,b){return J.hB(a).I(a,b)},
nL:function(a,b,c,d){return J.aI(a).hN(a,b,c,d)},
kV:function(a,b){return J.hB(a).H(a,b)},
nM:function(a){return J.aI(a).ghu(a)},
kW:function(a){return J.aI(a).gdn(a)},
nN:function(a){return J.aI(a).gdr(a)},
ae:function(a){return J.dD(a).gS(a)},
b1:function(a){return J.hB(a).gR(a)},
aJ:function(a){return J.b_(a).gm(a)},
lO:function(a){return J.hB(a).ij(a)},
nO:function(a,b){return J.aI(a).io(a,b)},
nP:function(a,b,c){return J.dE(a).t(a,b,c)},
nQ:function(a){return J.dE(a).ix(a)},
a5:function(a){return J.dD(a).i(a)},
a:function a(){},
eb:function eb(){},
cz:function cz(){},
ba:function ba(){},
eB:function eB(){},
bF:function bF(){},
aB:function aB(){},
x:function x(a){this.$ti=a},
ih:function ih(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
by:function by(){},
cy:function cy(){},
cx:function cx(){},
aN:function aN(){}},P={
oL:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qf()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cg(new P.jS(q),1)).observe(s,{childList:true})
return new P.jR(q,s,r)}else if(self.setImmediate!=null)return P.qg()
return P.qh()},
oM:function(a){self.scheduleImmediate(H.cg(new P.jT(a),0))},
oN:function(a){self.setImmediate(H.cg(new P.jU(a),0))},
oO:function(a){P.lh(C.n,a)},
lh:function(a,b){var s=C.c.a2(a.a,1000)
return P.oZ(s<0?0:s,b)},
mp:function(a,b){var s=C.c.a2(a.a,1000)
return P.p_(s<0?0:s,b)},
oZ:function(a,b){var s=new P.dq()
s.eJ(a,b)
return s},
p_:function(a,b){var s=new P.dq()
s.eK(a,b)
return s},
rv:function(a){return new P.ca(a,1)},
oR:function(){return C.a5},
oS:function(a){return new P.ca(a,3)},
pI:function(a,b){return new P.dm(a,b.J("dm<0>"))},
q3:function(){var s,r
for(s=$.ce;s!=null;s=$.ce){$.dB=null
r=s.b
$.ce=r
if(r==null)$.dA=null
s.a.$0()}},
qa:function(){$.lz=!0
try{P.q3()}finally{$.dB=null
$.lz=!1
if($.ce!=null)$.lL().$1(P.n4())}},
q8:function(a){var s=new P.fv(a),r=$.dA
if(r==null){$.ce=$.dA=s
if(!$.lz)$.lL().$1(P.n4())}else $.dA=r.b=s},
q9:function(a){var s,r,q,p=$.ce
if(p==null){P.q8(a)
$.dB=$.dA
return}s=new P.fv(a)
r=$.dB
if(r==null){s.b=p
$.ce=$.dB=s}else{q=r.b
s.b=q
$.dB=r.b=s
if(q==null)$.dA=s}},
mo:function(a,b){var s=$.aH
if(s===C.f)return P.lh(a,b)
return P.lh(a,s.hv(b))},
oG:function(a,b){var s=$.aH
if(s===C.f)return P.mp(a,b)
return P.mp(a,s.dl(b,t.aF))},
n0:function(a,b,c,d,e){P.q9(new P.kq(d,e))},
q5:function(a,b,c,d){var s,r=$.aH
if(r===c)return d.$0()
$.aH=c
s=r
try{r=d.$0()
return r}finally{$.aH=s}},
q6:function(a,b,c,d,e){var s,r=$.aH
if(r===c)return d.$1(e)
$.aH=c
s=r
try{r=d.$1(e)
return r}finally{$.aH=s}},
jS:function jS(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
dq:function dq(){this.c=0},
ka:function ka(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dm:function dm(a,b){this.a=a
this.$ti=b},
fv:function fv(a){this.a=a
this.b=null},
cV:function cV(){},
eX:function eX(){},
cX:function cX(){},
kh:function kh(){},
kq:function kq(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
k_:function k_(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
od:function(a,b){return new H.C(a.J("@<0>").b0(b).J("C<1,2>"))},
oe:function(a,b,c){return H.qq(a,new H.C(b.J("@<0>").b0(c).J("C<1,2>")))},
lb:function(a,b){return new H.C(a.J("@<0>").b0(b).J("C<1,2>"))},
cC:function(a){return new P.da(a.J("da<0>"))},
ll:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oU:function(a,b){var s=new P.db(a,b)
s.c=a.e
return s},
o6:function(a,b,c){var s,r
if(P.lA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ac.push(a)
try{P.pH(a,s)}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}r=P.mm(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l5:function(a,b,c){var s,r
if(P.lA(a))return b+"..."+c
s=new P.T(b)
$.ac.push(a)
try{r=s
r.a=P.mm(r.a,a,", ")}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lA:function(a){var s,r
for(s=$.ac.length,r=0;r<s;++r)if(a===$.ac[r])return!0
return!1},
pH:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.f(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.u()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.u();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
of:function(a,b,c){var s=P.od(b,c)
a.H(0,new P.im(s,b,c))
return s},
m2:function(a,b){var s,r,q=P.cC(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
ld:function(a){var s,r={}
if(P.lA(a))return"{...}"
s=new P.T("")
try{$.ac.push(a)
s.a+="{"
r.a=!0
J.kV(a,new P.ir(r,s))
s.a+="}"}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
da:function da(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jY:function jY(a){this.a=a
this.c=this.b=null},
db:function db(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cw:function cw(){},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(){},
i:function i(){},
cG:function cG(){},
ir:function ir(a,b){this.a=a
this.b=b},
W:function W(){},
hp:function hp(){},
cH:function cH(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
di:function di(){},
dc:function dc(){},
dv:function dv(){},
oJ:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oK(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oK:function(a,b,c,d){var s=a?$.nz():$.ny()
if(s==null)return null
if(0===c&&d===b.length)return P.mv(s,b)
return P.mv(s,b.subarray(c,P.bc(c,d,b.length)))},
mv:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ad(r)}return null},
lR:function(a,b,c,d,e,f){if(C.c.bh(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
pp:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
po:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.W()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b_(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.af()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
jC:function jC(){},
jD:function jD(){},
hL:function hL(){},
hM:function hM(){},
dT:function dT(){},
dV:function dV(){},
i1:function i1(){},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
id:function id(a){this.a=a},
jA:function jA(){},
jE:function jE(){},
kf:function kf(a){this.b=0
this.c=a},
jB:function jB(a){this.a=a},
ke:function ke(a){this.a=a
this.b=16
this.c=0},
kC:function(a,b){var s=H.md(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
o3:function(a){if(a instanceof H.bt)return a.i(0)
return"Instance of '"+H.f(H.eH(a))+"'"},
io:function(a,b,c,d){var s,r=c?J.l6(a,d):J.o8(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lc:function(a,b,c){var s,r=H.d([],c.J("x<0>"))
for(s=J.b1(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.l7(r)},
og:function(a,b,c){var s,r,q=J.l6(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
eZ:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bc(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ab()
q=c<r}else q=!0
return H.me(q?s.slice(b,c):s)}if(t.bm.b(a))return H.ov(a,b,P.bc(b,c,a.length))
return P.oE(a,b,c)},
oE:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a4(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a4(c,b,a.length,o,o))
r=J.b1(a)
for(q=0;q<b;++q)if(!r.u())throw H.b(P.a4(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.b(P.a4(c,b,q,o,o))
p.push(r.gB(r))}return H.me(p)},
ow:function(a){return new H.ec(a,H.ob(a,!1,!0,!1,!1,!1))},
mm:function(a,b,c){var s=J.b1(b)
if(!s.u())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.u())}else{a+=H.f(s.gB(s))
for(;s.u();)a=a+c+H.f(s.gB(s))}return a},
ms:function(){var s=H.om()
if(s!=null)return P.oI(s)
throw H.b(P.B("'Uri.base' is not supported"))},
kd:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nF().b
if(typeof b!="string")H.q(H.an(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghM().cd(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ar(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
o0:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
o1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dY:function(a){if(a>=10)return""+a
return"0"+a},
lX:function(a){return new P.bu(1000*a)},
i4:function(a){if(typeof a=="number"||H.ly(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o3(a)},
hH:function(a){return new P.dK(a)},
bL:function(a){return new P.af(!1,null,null,a)},
lQ:function(a,b,c){return new P.af(!0,a,b,c)},
nR:function(a,b){if(a==null)throw H.b(new P.af(!1,null,b,"Must not be null"))
return a},
mf:function(a){var s=null
return new P.c1(s,s,!1,s,s,a)},
eI:function(a,b){return new P.c1(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c1(b,c,!0,a,d,"Invalid value")},
bc:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.b(P.a4(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.b(P.a4(b,a,c,"end",null))
return b}return c},
mg:function(a,b){if(a<0)throw H.b(P.a4(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aJ(b):e
return new P.e9(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fn(a)},
jt:function(a){return new P.fk(a)},
lg:function(a){return new P.c3(a)},
b5:function(a){return new P.dU(a)},
u:function(a){return new P.fK(a)},
a3:function(a,b,c){return new P.ia(a,b,c)},
lI:function(a){H.qD(a)},
oI:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.mr(a4<a4?C.a.t(a5,0,a4):a5,5,a3).geh()
else if(s===32)return P.mr(C.a.t(a5,5,a4),0,a3).geh()}r=P.io(8,0,!1,t.S)
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
if(P.n1(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.n1(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a7(a5,"..",m)))h=l>m+2&&C.a.a7(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a7(a5,"file",0)){if(o<=0){if(!C.a.a7(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.t(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aY(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a7(a5,"http",0)){if(q&&n+3===m&&C.a.a7(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aY(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a7(a5,"https",0)){if(q&&n+4===m&&C.a.a7(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aY(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h4(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pi(a5,0,p)
else{if(p===0)P.cb(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pj(a5,d,o-1):""
b=P.pf(a5,o,n,!1)
q=n+1
if(q<m){a=H.md(C.a.t(a5,q,m),a3)
a0=P.ph(a==null?H.q(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pg(a5,m,l,a3,i,b!=null)
a2=l<k?P.ls(a5,l+1,k,a3):a3
return new P.bH(i,c,b,a0,a1,a2,k<a4?P.pe(a5,k+1,a4):a3)},
mu:function(a){var s=t.N
return C.b.hS(H.d(a.split("&"),t.s),P.lb(s,s),new P.jy(C.e))},
oH:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jv(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.V(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kC(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.a1()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kC(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.a1()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
mt:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jw(a),b=new P.jx(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.V(a,r)
if(n===58){if(r===a0){++r
if(C.a.V(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gay(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oH(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.c.aQ(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
mR:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cb:function(a,b,c){throw H.b(P.a3(c,a,b))},
ph:function(a,b){if(a!=null&&a===P.mR(b))return null
return a},
pf:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cb(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pc(a,r,s)
if(q<s){p=q+1
o=P.mW(a,C.a.a7(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mt(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.br(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mW(a,C.a.a7(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mt(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pl(a,b,c)},
pc:function(a,b,c){var s=C.a.br(a,"%",b)
return s>=b&&s<c?s:c},
mW:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.T(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.lt(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.T("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cb(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.T("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.T("")
n=i}else n=i
n.a+=j
n.a+=P.lr(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pl:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.lt(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.T("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.T("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cb(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.T("")
m=q}else m=q
m.a+=l
m.a+=P.lr(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pi:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mT(C.a.C(a,b)))P.cb(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cb(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.pb(r?a.toLowerCase():a)},
pb:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pj:function(a,b,c){return P.dw(a,b,c,C.Z,!1)},
pg:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dw(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a4(s,"/"))s="/"+s
return P.pk(s,e,f)},
pk:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a4(a,"/"))return P.pm(a,!s||c)
return P.pn(a)},
ls:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bL("Both query and queryParameters specified"))
return P.dw(a,b,c,C.l,!0)}if(d==null)return null
s=new P.T("")
r.a=""
d.H(0,new P.kb(new P.kc(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pe:function(a,b,c){return P.dw(a,b,c,C.l,!0)},
lt:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.ky(s)
p=H.ky(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aQ(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ar(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lr:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hb(a,6*o)&63|p
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
n+=3}}return P.eZ(s,0,null)},
dw:function(a,b,c,d,e){var s=P.mV(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lt(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cb(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lr(o)}}if(p==null){p=new P.T("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mU:function(a){if(C.a.a4(a,"."))return!0
return C.a.dR(a,"/.")!==-1},
pn:function(a){var s,r,q,p,o,n,m
if(!P.mU(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.H(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pm:function(a,b){var s,r,q,p,o,n
if(!P.mU(a))return!b?P.mS(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gay(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gay(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.mS(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.j(s,"/")},
mS:function(a){var s,r,q,p=a.length
if(p>=2&&P.mT(J.nH(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.ac(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pd:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bL("Invalid URL encoding"))}}return s},
lu:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.p(C.a.t(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.b(P.bL("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bL("Truncated URI"))
p.push(P.pd(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cd(p)},
mT:function(a){var s=a|32
return 97<=s&&s<=122},
mr:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gay(j)
if(p!==44||r!==n+7||!C.a.a7(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.i_(0,a,m,s)
else{l=P.mV(a,m,s,C.l,!0)
if(l!=null)a=C.a.aY(a,m,s,l)}return new P.ju(a,j,c)},
pt:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.og(22,new P.kl(),t.gc),l=new P.kk(m),k=new P.km(),j=new P.kn(),i=l.$2(0,225)
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
n1:function(a,b,c,d,e){var s,r,q,p,o,n=$.nG()
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
ax:function ax(){},
ah:function ah(a,b){this.a=a
this.b=b},
Z:function Z(){},
bu:function bu(a){this.a=a},
hY:function hY(){},
hZ:function hZ(){},
L:function L(){},
dK:function dK(a){this.a=a},
ew:function ew(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e9:function e9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fn:function fn(a){this.a=a},
fk:function fk(a){this.a=a},
c3:function c3(a){this.a=a},
dU:function dU(a){this.a=a},
ez:function ez(){},
cU:function cU(){},
dW:function dW(a){this.a=a},
fK:function fK(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(){},
l:function l(){},
h:function h(){},
ea:function ea(){},
n:function n(){},
I:function I(){},
aq:function aq(){},
R:function R(){},
N:function N(){},
y:function y(){},
T:function T(a){this.a=a},
jy:function jy(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(){},
kk:function kk(a){this.a=a},
km:function km(){},
kn:function kn(){},
h4:function h4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fB:function fB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qm:function(a){var s
if(t.v.b(a)){s=J.nN(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.ds(a.data,a.height,a.width)},
ql:function(a){if(a instanceof P.ds)return{data:a.a,height:a.b,width:a.c}
return a},
bk:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lb(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qk:function(a){var s={}
a.H(0,new P.kr(s))
return s},
k4:function k4(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
i8:function i8(){},
i9:function i9(){},
jX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h2:function h2(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
eg:function eg(){},
aT:function aT(){},
ex:function ex(){},
iQ:function iQ(){},
c2:function c2(){},
eY:function eY(){},
m:function m(){},
aV:function aV(){},
fa:function fa(){},
fR:function fR(){},
fS:function fS(){},
fZ:function fZ(){},
h_:function h_(){},
hc:function hc(){},
hd:function hd(){},
hl:function hl(){},
hm:function hm(){},
be:function be(){},
hJ:function hJ(){},
dM:function dM(){},
hK:function hK(a){this.a=a},
dN:function dN(){},
b3:function b3(){},
ey:function ey(){},
fx:function fx(){},
eK:function eK(){},
eT:function eT(){},
h8:function h8(){},
h9:function h9(){}},W={
lP:function(){var s=document.createElement("a")
return s},
kZ:function(){var s=document.createElement("canvas")
return s},
o2:function(a,b,c){var s,r=document.body
r.toString
s=C.q.ak(r,a,b,c)
s.toString
r=new H.aY(new W.a1(s),new W.i_(),t.ac.J("aY<i.E>"))
return t.h.a(r.gaJ(r))},
i0:function(a){return"wheel"},
cs:function(a){var s,r,q="element tag unavailable"
try{s=J.aI(a)
if(typeof s.gee(a)=="string")q=s.gee(a)}catch(r){H.ad(r)}return q},
o5:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ad(s)}return q},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mI:function(a,b,c,d){var s=W.jW(W.jW(W.jW(W.jW(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a_:function(a,b,c,d){var s=new W.fJ(a,b,c==null?null:W.n2(new W.jV(c),t.aD),!1)
s.hi()
return s},
mG:function(a){var s=W.lP(),r=window.location
s=new W.c9(new W.k1(s,r))
s.eC(a)
return s},
oP:function(a,b,c,d){return!0},
oQ:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mM:function(){var s=t.N,r=P.m2(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.hg(r,P.cC(s),P.cC(s),P.cC(s),null)
s.eI(null,new H.cI(C.A,new W.k8(),t.eM),q,null)
return s},
n2:function(a,b){var s=$.aH
if(s===C.f)return a
return s.dl(a,b)},
r:function r(){},
hG:function hG(){},
dI:function dI(){},
dJ:function dJ(){},
bM:function bM(){},
bq:function bq(){},
br:function br(){},
bs:function bs(){},
ay:function ay(){},
hR:function hR(){},
J:function J(){},
co:function co(){},
hS:function hS(){},
ao:function ao(){},
aM:function aM(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
b6:function b6(){},
hW:function hW(){},
cp:function cp(){},
cq:function cq(){},
e0:function e0(){},
hX:function hX(){},
fy:function fy(a,b){this.a=a
this.b=b},
E:function E(){},
i_:function i_(){},
j:function j(){},
e:function e(){},
ai:function ai(){},
bQ:function bQ(){},
e3:function e3(){},
e5:function e5(){},
aA:function aA(){},
ic:function ic(){},
bw:function bw(){},
bx:function bx(){},
bS:function bS(){},
bU:function bU(){},
bz:function bz(){},
ip:function ip(){},
iI:function iI(){},
bV:function bV(){},
en:function en(){},
iJ:function iJ(a){this.a=a},
eo:function eo(){},
iK:function iK(a){this.a=a},
aC:function aC(){},
ep:function ep(){},
aj:function aj(){},
a1:function a1(a){this.a=a},
w:function w(){},
cP:function cP(){},
aD:function aD(){},
eD:function eD(){},
eL:function eL(){},
iY:function iY(a){this.a=a},
eN:function eN(){},
at:function at(){},
eP:function eP(){},
aE:function aE(){},
eQ:function eQ(){},
aF:function aF(){},
eW:function eW(){},
j8:function j8(a){this.a=a},
au:function au(){},
bd:function bd(){},
cW:function cW(){},
f_:function f_(){},
f0:function f0(){},
c4:function c4(){},
av:function av(){},
aa:function aa(){},
f3:function f3(){},
f4:function f4(){},
je:function je(){},
aG:function aG(){},
bE:function bE(){},
f9:function f9(){},
ji:function ji(){},
aX:function aX(){},
jz:function jz(){},
fs:function fs(){},
bg:function bg(){},
c7:function c7(){},
c8:function c8(){},
fz:function fz(){},
d8:function d8(){},
fO:function fO(){},
dd:function dd(){},
h7:function h7(){},
he:function he(){},
fw:function fw(){},
fG:function fG(a){this.a=a},
l3:function l3(a,b){this.a=a
this.$ti=b},
fJ:function fJ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jV:function jV(a){this.a=a},
lk:function lk(a){this.$ti=a},
c9:function c9(a){this.a=a},
M:function M(){},
cQ:function cQ(a){this.a=a},
iN:function iN(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(){},
k2:function k2(){},
k3:function k3(){},
hg:function hg(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k8:function k8(){},
hf:function hf(){},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ak:function ak(){},
k1:function k1(a,b){this.a=a
this.b=b},
hq:function hq(a){this.a=a
this.b=!1},
kg:function kg(a){this.a=a},
fA:function fA(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fL:function fL(){},
fM:function fM(){},
fP:function fP(){},
fQ:function fQ(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
h0:function h0(){},
h1:function h1(){},
h3:function h3(){},
dk:function dk(){},
dl:function dl(){},
h5:function h5(){},
h6:function h6(){},
hb:function hb(){},
hh:function hh(){},
hi:function hi(){},
dn:function dn(){},
dp:function dp(){},
hj:function hj(){},
hk:function hk(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){}},K={
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.iT(s,r)},
t:function(a){var s=new K.iZ()
s.ez(a)
return s},
b2:function b2(){},
e7:function e7(){},
is:function is(){},
a9:function a9(){this.a=null},
iT:function iT(a,b){this.a=a
this.b=b},
iZ:function iZ(){this.a=null}},L={
jg:function(){var s=new L.jf()
s.a=new H.C(t.cn)
s.b=new H.C(t.dL)
s.c=P.cC(t.X)
return s},
eU:function eU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a){this.b=a
this.c=null},
jf:function jf(){var _=this
_.d=_.c=_.b=_.a=null},
fb:function fb(a){this.b=a
this.a=this.c=null}},O={
l_:function(a){var s=new O.ag(a.J("ag<0>"))
s.bE(a)
return s},
ag:function ag(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cK:function cK(){this.b=this.a=null},
m3:function(){var s,r=new O.el(),q=O.l_(t.hc)
r.e=q
q.bi(r.gfa(),r.gfc())
q=new O.aQ(r,"emission")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a0(0,0,0)
r.f=q
q=new O.aQ(r,"ambient")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a0(0,0,0)
r.r=q
q=new O.aQ(r,"diffuse")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a0(0,0,0)
r.x=q
q=new O.aQ(r,"invDiffuse")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a0(0,0,0)
r.y=q
q=new O.iy(r,"specular")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a0(0,0,0)
q.ch=100
r.z=q
q=new O.iu(r,"bump")
q.c=new A.a2(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aQ(r,"reflect")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a0(0,0,0)
r.cx=q
q=new O.ix(r,"refract")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a0(0,0,0)
q.ch=1
r.cy=q
q=new O.it(r,"alpha")
q.c=new A.a2(!1,!1,!1)
q.f=1
r.db=q
q=new D.cA()
q.bE(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.cK(q.gf8(),q.gfM(),q.gfQ())
r.dx=q
s=new O.iw()
s.b=new V.aL(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.K():s
q.n(0,r.gh2())
q=r.dx
s=q.z
q=s==null?q.z=D.K():s
q.n(0,r.gbk())
r.fr=null
return r},
el:function el(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){},
it:function it(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){},
iu:function iu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aQ:function aQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iw:function iw(){var _=this
_.e=_.d=_.c=_.b=null},
ix:function ix(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iy:function iy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f2:function f2(){}},E={
l2:function(){var s,r=new E.bv()
r.a=""
r.b=!0
s=O.l_(t.l)
r.y=s
s.bi(r.gi0(),r.gi3())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sag(0,null)
r.sbf(null)
r.saW(null)
return r},
mD:function(){if(J.kU(window.navigator.vendor,"Google"))return C.G
if(J.kU(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b_(s).D(s,"Trident")||C.a.D(s,"Edge"))return C.t
if(J.kU(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mE:function(){var s=window.navigator.appVersion
if(J.b_(s).D(s,"Win"))return C.a0
if(C.a.D(s,"Mac"))return C.B
if(C.a.D(s,"Linux"))return C.a1
return C.a2},
ox:function(a,b){var s=new E.iU(a)
s.ey(a,b)
return s},
oF:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mn(a,!0,!0,!0,!1)
s=W.kZ()
r=s.style
r.width="100%"
r.height="100%"
J.kW(a).n(0,s)
return E.mn(s,!0,!0,!0,!1)},
mn:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f6(),n=t.z,m=C.i.cI(a,"webgl2",P.oe(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.ox(m,a)
n=new T.jb(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fp(a)
s=new X.ij()
s.c=new X.ap(!1,!1,!1)
s.d=P.cC(t.e)
n.b=s
s=new X.iL(n)
s.f=0
s.r=V.bC()
s.x=V.bC()
s.ch=s.Q=1
n.c=s
s=new X.iq(n)
s.r=0
s.x=V.bC()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jh(n)
s.f=V.bC()
s.r=V.bC()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.i2
n.Q=(s==null?$.i2=new E.fH(E.mD(),E.mE()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a_(q,"contextmenu",n.gfk(),!1))
n.z.push(W.a_(a,"focus",n.gfq(),!1))
n.z.push(W.a_(a,"blur",n.gfe(),!1))
n.z.push(W.a_(q,"keyup",n.gfv(),!1))
n.z.push(W.a_(q,"keydown",n.gft(),!1))
n.z.push(W.a_(a,"mousedown",n.gfB(),!1))
n.z.push(W.a_(a,"mouseup",n.gfF(),!1))
n.z.push(W.a_(a,p,n.gfD(),!1))
r=n.z
W.i0(a)
W.i0(a)
r.push(W.a_(a,W.i0(a),n.gfH(),!1))
n.z.push(W.a_(q,p,n.gfm(),!1))
n.z.push(W.a_(q,"mouseup",n.gfo(),!1))
n.z.push(W.a_(q,"pointerlockchange",n.gfJ(),!1))
n.z.push(W.a_(a,"touchstart",n.gfW(),!1))
n.z.push(W.a_(a,"touchend",n.gfS(),!1))
n.z.push(W.a_(a,"touchmove",n.gfU(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ah(Date.now(),!1)
o.db=0
o.d7()
return o},
hN:function hN(){},
bv:function bv(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(a){this.b=a},
c_:function c_(a){this.b=a},
fH:function fH(a,b){this.a=a
this.b=b},
iU:function iU(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
f6:function f6(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jd:function jd(a){this.a=a}},Z={
lj:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.ft(b,s)},
aw:function(a){return new Z.bf(a)},
ft:function ft(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jQ:function jQ(a){this.a=a},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a){this.a=a}},D={
K:function(){var s=new D.bP()
s.d=0
return s},
hO:function hO(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
U:function U(){this.b=null},
b8:function b8(){this.b=null},
b9:function b9(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dO:function dO(){},
dZ:function dZ(){},
V:function V(){},
cA:function cA(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bB:function bB(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eR:function eR(){}},X={dS:function dS(a,b){this.a=a
this.b=b},ee:function ee(a,b){this.a=a
this.b=b},ij:function ij(){var _=this
_.d=_.c=_.b=_.a=null},cF:function cF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iq:function iq(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},bW:function bW(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iL:function iL(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bX:function bX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eF:function eF(){},cY:function cY(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jh:function jh(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fp:function fp(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
o4:function(a){var s=new X.ib(),r=new V.aL(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.mj
if(r==null){r=V.mi(0,0,1,1)
$.mj=r}s.r=r
return s},
kY:function kY(){},
ib:function ib(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eA:function eA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
j9:function j9(){}},V={
hD:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
kS:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bh(a-b,s)
return(a<0?a+s:a)+b},
G:function(a,b,c){if(a==null)return C.a.am("null",c)
$.D().toString
return C.a.am(C.d.eg(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ci:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.G(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.am(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
lH:function(a){return C.d.iu(Math.pow(2,C.V.cr(Math.log(H.qi(a))/Math.log(2))))},
cL:function(){var s=$.iH
return s==null?$.iH=V.aS(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aS:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m7:function(a,b,c){return V.aS(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
le:function(a,b,c,d){return V.aS(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m4:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aS(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
m5:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aS(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
m6:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aS(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
bC:function(){var s=$.ma
return s==null?$.ma=new V.al(0,0):s},
ok:function(){var s=$.aU
return s==null?$.aU=new V.Q(0,0,0):s},
mi:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eJ(a,b,c,d)},
d6:function(){var s=$.mB
return s==null?$.mB=new V.F(0,0,0):s},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function i3(){},
em:function em(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aR:function aR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
al:function al(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qE:function(a){P.oG(C.S,new V.kO(a))},
oA:function(a){var s=new V.j3()
s.eB(a,!0)
return s},
b4:function b4(){},
kO:function kO(a){this.a=a},
dX:function dX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e6:function e6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e8:function e8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eC:function eC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iR:function iR(a){this.a=a
this.c=null},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(){this.b=this.a=null},
j5:function j5(a){this.a=a},
j4:function j4(a){this.a=a},
j6:function j6(a){this.a=a}},U={
l0:function(){var s=new U.hP()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
hQ:function(a){var s=new U.cl()
s.a=a
return s},
l4:function(){var s=new U.bR()
s.bE(t.ah)
s.bi(s.geF(),s.gfO())
s.e=null
s.f=V.cL()
s.r=0
return s},
hP:function hP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cl:function cl(){this.b=this.a=null},
bR:function bR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cS:function cS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={e1:function e1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
oi:function(a,b){var s=a.aE,r=new A.ek(b,s)
r.eA(b,s)
r.ex(a,b)
return r},
oj:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gat(a5)+a6.gat(a6)+a7.gat(a7)+a8.gat(a8)+a9.gat(a9)+b0.gat(b0)+b1.gat(b1)+b2.gat(b2)+b3.gat(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
if(!b1.a)n=b1.c
else n=!0
if(!n)if(!b2.a){n=b2.c
m=n}else m=!0
else m=!0
l=s>0
if(!a6.a)s=a6.c
else s=!0
if(!s){if(!a7.a)s=a7.c
else s=!0
if(!s){if(!a8.a)s=a8.c
else s=!0
if(!s)if(!a9.a)s=a9.c
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a9.a
if(s)n=a9.c
else n=!0
j=n||l||o>0||m
if(!a7.a)o=a7.c
else o=!0
if(!o){if(!a8.a)o=a8.c
else o=!0
if(!o){if(s)s=a9.c
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!b0.a)s=b0.c
else s=!0
h=s||m}else h=!0
if(!b0.a)g=b0.c
else g=!0
f=a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c||b2.c||b3.c
e=a4>0
d=h||g||j||!1
c=l&&i
a1=a1&&f
b=$.bo()
if(h){s=$.bn()
b=new Z.bf(b.a|s.a)}if(g){s=$.bm()
b=new Z.bf(b.a|s.a)}if(f){s=$.bp()
b=new Z.bf(b.a|s.a)}if(e){s=$.bl()
b=new Z.bf(b.a|s.a)}return new A.iv(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
ko:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kp:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.ko(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hE(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
pN:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ko(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.c){r=s+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
pJ:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kp(b,r,"ambient")
b.a+="\n"},
pL:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kp(b,r,"diffuse")
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
pO:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kp(b,r,"invDiffuse")
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
pU:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kp(b,r,"specular")
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
pQ:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
if(a.f.c){s+="uniform samplerCube bumpTxt;\n"
b.a=s
s+="\n"
b.a=s}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f
q=r.a
if(!q)r=r.c
else r=!0
if(!r||q)s=b.a=s+"   return normalize(normalVec);\n"
else{s+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
b.a=s
s+="   vec3 n = normalize(normalVec);\n"
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
pS:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ko(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pT:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ko(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
pK:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hE(r)
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
if(typeof s!=="number")return s.af()
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
s=c.a+="   return "+C.b.j(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.d([],p)
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)o.push("ambientColor")
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
if(!s.a)s=s.c
else s=!0
if(s)n.push("diffuse(norm, normDir)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.j(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.j(o," + ")+");\n"
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
pM:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hE(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.af()
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
if(!l.a)l=l.c
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
else p=!0
if(p)k.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.j(k," + ")+");\n"}else c.a+="   highLight = "+C.b.j(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.j(m," + ")+");\n"
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
pR:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hE(r)
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
if(typeof s!=="number")return s.af()
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
m=c.a+="   return "+C.b.j(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.d([],p)
m=a.b
if(!m.a)m=m.c
else m=!0
if(m)j.push("ambientColor")
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
if(!p.a)p=p.c
else p=!0
if(p)i.push("diffuse(norm, normDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
p=a.e
if(!p.a)p=p.c
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.j(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.j(j," + ")+");\n"
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
pV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hE(r)
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
if(typeof s!=="number")return s.af()
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
if(m){s=$.i2
if(s==null)s=$.i2=new E.fH(E.mD(),E.mE())
p=c.a
if(s.b===C.B){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.b.j(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.d([],s)
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)h.push("ambientColor")
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
if(!s.a)s=s.c
else s=!0
if(s)g.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.j(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.j(h," + ")+");\n"
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
pP:function(a,b){var s,r
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
if(!s.a)s=s.c
else s=!0
if(s)r.push("ambientColor")
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)r.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pW:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.T("")
g.a="precision mediump float;\n"
g.a=i
s=a.k4
if(s){g.a=h
r=h}else r=i
if(a.r1){r+="varying vec3 binormalVec;\n"
g.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
g.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
g.a=r}if(a.k2){r+="varying vec3 objPos;\n"
g.a=r}r=g.a=(a.k3?g.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
g.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
g.a=r}if(a.dy)r=g.a=r+"uniform mat4 invViewMat;\n"
g.a=r+"\n"
A.pN(a,g)
A.pJ(a,g)
A.pL(a,g)
A.pO(a,g)
A.pU(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.pS(a,g)
A.pT(a,g)}A.pQ(a,g)
p=g.a+="// === Alpha ===\n"
p=g.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
g.a=p}o=o.c
p=(o?g.a=p+"uniform samplerCube alphaTxt;\n":p)+"float alphaValue()\n"
g.a=p
p=g.a=p+"{\n"
if(!n)m=o
else m=!0
if(!m)p=g.a=p+"   return 1.0;\n"
else if(o){if(n){p+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
g.a=p}else{p+="   float a = textureCube(alphaTxt, txtCube).a;\n"
g.a=p}p+="   if (a <= 0.000001) discard;\n"
g.a=p
p+="   return a;\n"
g.a=p}else if(n){p+="   return alpha;\n"
g.a=p}p+="}\n"
g.a=p
g.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.pK(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.pM(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.pR(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.o)(o),++l)A.pV(a,o[l],g)
A.pP(a,g)}o=g.a+="// === Main ===\n"
o+="\n"
g.a=o
o+="void main()\n"
g.a=o
o+="{\n"
g.a=o
o=g.a=o+"   float alpha = alphaValue();\n"
s=s?g.a=o+"   vec3 norm = normal();\n":o
if(r)g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=H.d([],t.i)
if(p){g.a+=u.o
k.push("lightAccum")
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setAmbientColor();\n"
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setDiffuseColor();\n"
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setInvDiffuseColor();\n"
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.c(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.c(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.c(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.o)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.c(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(!s.a)s=s.c
else s=!0
if(s)k.push("emissionColor()")
s=a.r
if(!s.a)s=s.c
else s=!0
if(s)k.push("reflect(refl)")
s=a.x
if(!s.a)s=s.c
else s=!0
if(s)k.push("refract(refl)")
if(k.length<=0)k.push("vec3(0.0, 0.0, 0.0)")
s=g.a+="   vec4 objClr = vec4("+C.b.j(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pX:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bp+"];\n"
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
pZ:function(a,b){var s
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
pY:function(a,b){var s
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
q0:function(a,b){var s,r
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
q1:function(a,b){var s,r
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
q_:function(a,b){var s
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
q2:function(a,b){var s
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
hE:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.ac(a,1)},
li:function(a,b,c,d,e){var s=new A.jm(a,c,e)
s.f=d
P.io(d,0,!1,t.e)
return s},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b){var _=this
_.dz=_.iJ=_.bq=_.aE=_.bp=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iR=_.iQ=_.iP=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.ci=_.cg=_.dL=_.iO=_.dK=_.dJ=_.iN=_.dI=_.dH=_.dG=_.iM=_.dF=_.dE=_.dD=_.iL=_.dC=_.dB=_.iK=_.dA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dP:function dP(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
eG:function eG(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bp=b5
_.aE=b6
_.bq=b7},
cZ:function cZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d_:function d_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d1:function d1(a,b,c,d,e,f,g,h,i,j){var _=this
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
d2:function d2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cT:function cT(){},
fc:function fc(){},
jr:function jr(a){this.a=a},
fe:function fe(a,b,c){this.a=a
this.c=b
this.d=c},
jo:function jo(a,b,c){this.a=a
this.c=b
this.d=c},
jp:function jp(a,b,c){this.a=a
this.c=b
this.d=c},
jq:function jq(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fd:function fd(a,b,c){this.a=a
this.c=b
this.d=c},
jn:function jn(a,b,c){this.a=a
this.c=b
this.d=c},
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
js:function js(a,b,c){this.a=a
this.c=b
this.d=c},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lC:function(a,b,c,d){var s=F.lf()
F.dx(s,b,c,d,a,1,0,0,1)
F.dx(s,b,c,d,a,0,1,0,3)
F.dx(s,b,c,d,a,0,0,1,2)
F.dx(s,b,c,d,a,-1,0,0,0)
F.dx(s,b,c,d,a,0,-1,0,0)
F.dx(s,b,c,d,a,0,0,-1,3)
s.ax()
return s},
kj:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dx:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.F(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.F(s+a5,r+a3,q+a4)
o=new V.F(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.F(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.kj(g)
j=F.kj(f)
i=F.lK(a1,a2,new F.ki(h,F.kj(e),F.kj(d),j,k,a0),b)
if(i!=null)a.bb(i)},
n7:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.lf()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.F(0,0,r).M()
p.push(o.ho(new V.bD(a,-1,-1,-1),new V.aL(1,1,1,1),new V.Q(0,0,c),new V.F(0,0,r),new V.al(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.v(i)
n=new V.F(k,j,r).M()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fr(new V.bD(a,-1,-1,-1),null,new V.aL(h,f,g,1),new V.Q(k*i,j*i,c),new V.F(0,0,r),new V.al(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.hm(p)
return s},
n5:function(a,b,c){return F.qn(!0,a,1,new F.ks(1,c),b)},
qn:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.lK(c,e,new F.ku(d),r)
if(s==null)return r
s.ax()
s.c7()
if(b)s.bb(F.n7(3,!1,1,new F.kv(d),e))
s.bb(F.n7(1,!0,-1,new F.kw(d),e))
return s},
nh:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kP()
r=F.lC(a,null,new F.kQ(q,1),b)
r.c7()
return r},
nj:function(){return F.n6(15,30,0.5,1,new F.kR())},
qA:function(){return F.n6(12,120,0.3,1,new F.kF(3,2))},
n6:function(a,b,c,d,e){var s=F.lK(a,b,new F.kt(e,d,b,c),null)
if(s==null)return null
s.ax()
s.c7()
return s},
lK:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.lf()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fr(e,e,new V.aL(n,0,0,1),e,e,new V.al(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.ce(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.fr(e,e,new V.aL(h,g,f,1),e,e,new V.al(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.ce(d))}}s.d.hn(a+1,b+1,r)
return s},
ct:function(a,b,c){var s=new F.e2(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.c3(a)
s.c4(b)
s.h7(c)
s.a.a.d.b.push(s)
s.a.a.Y()
return s},
oc:function(a,b){var s=new F.eh(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.c3(a)
s.c4(b)
s.a.a.c.b.push(s)
s.a.a.Y()
return s},
lf:function(){var s=new F.j_(),r=new F.jF(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.j2(s)
r.b=H.d([],t.p)
s.b=r
r=new F.j1(s)
r.b=H.d([],t.L)
s.c=r
r=new F.j0(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
fr:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fq(),p=new F.jN()
p.b=H.d([],t.p)
q.b=p
p=new F.jJ()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jG()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.nA()
q.e=0
p=$.bo()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bn().a)!==0?e:r
q.x=(s&$.bm().a)!==0?b:r
q.y=(s&$.bK().a)!==0?f:r
q.z=(s&$.bp().a)!==0?g:r
q.Q=(s&$.nB().a)!==0?c:r
q.ch=(s&$.cj().a)!==0?i:0
q.cx=(s&$.bl().a)!==0?a:r
return q},
ki:function ki(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ks:function ks(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kP:function kP(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(){},
kF:function kF(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(){},
j7:function j7(){},
eh:function eh(){this.b=this.a=null},
ik:function ik(){},
jl:function jl(){},
eE:function eE(){this.a=null},
j_:function j_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(a){this.a=a
this.b=null},
j1:function j1(a){this.a=a
this.b=null},
j2:function j2(a){this.a=a
this.b=null},
fq:function fq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jP:function jP(a){this.a=a},
jO:function jO(a){this.a=a},
jF:function jF(a){this.a=a
this.c=this.b=null},
jG:function jG(){this.d=this.c=this.b=null},
jH:function jH(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
jJ:function jJ(){this.c=this.b=null},
jL:function jL(){},
jK:function jK(){},
jM:function jM(){},
iO:function iO(){},
jN:function jN(){this.b=null}},T={f5:function f5(){},ja:function ja(){var _=this
_.e=_.d=_.c=_.b=_.a=null},jb:function jb(a){var _=this
_.a=a
_.e=_.d=_.c=null},jc:function jc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nd:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=34067,a7="modifiers",a8=V.oA("Test 022"),a9=W.kZ()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
s=t.i
a8.di(H.d(["Test of the Material Lighting shader with a textured point light."],s))
a8.hk(H.d(["shapes"],s))
a8.di(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a4)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.oF(r,!0,!0,!0,!1)
p=q.f
o=p.a
n=o.createTexture()
o.bindTexture(a6,n)
o.texParameteri(a6,10242,10497)
o.texParameteri(a6,10243,10497)
o.texParameteri(a6,10241,9729)
o.texParameteri(a6,10240,9729)
o.bindTexture(a6,a5)
m=new T.ja()
m.a=0
m.b=n
m.c=!1
m.d=0
p.aN(m,n,"../resources/earthColor/posx.png",34069,!1,!1)
p.aN(m,n,"../resources/earthColor/negx.png",34070,!1,!1)
p.aN(m,n,"../resources/earthColor/posy.png",34071,!1,!1)
p.aN(m,n,"../resources/earthColor/negy.png",34072,!1,!1)
p.aN(m,n,"../resources/earthColor/posz.png",34073,!1,!1)
p.aN(m,n,"../resources/earthColor/negz.png",34074,!1,!1)
l=U.l4()
l.n(0,U.hQ(V.m7(0,0,2)))
p=new U.cS()
p.r=p.f=p.e=p.d=p.c=p.b=p.a=0
p.sej(0)
p.se7(0,0)
p.sed(0)
o=p.d
$.D().toString
if(!(Math.abs(o-0.5)<1e-9)){p.d=0.5
o=new D.A("deltaYaw",o,0.5)
o.b=!0
p.G(o)}o=p.e
$.D().toString
if(!(Math.abs(o-0.5)<1e-9)){p.e=0.5
o=new D.A("deltaPitch",o,0.5)
o.b=!0
p.G(o)}o=p.f
$.D().toString
if(!(Math.abs(o-0)<1e-9)){p.f=0
o=new D.A("deltaRoll",o,0)
o.b=!0
p.G(o)}l.n(0,p)
k=E.l2()
p=U.l4()
p.n(0,U.hQ(V.le(0.2,0.2,0.2,1)))
p.n(0,l)
k.saW(p)
k.sag(0,F.nh(8,8))
p=O.m3()
o=p.f
j=o.c
if(!j.c)o.c0(new A.a2(j.a,!1,!0))
j=o.e
if(j!==m){if(j!=null)j.gv().K(0,o.gbk())
i=o.e
o.e=m
m.gv().n(0,o.gbk())
j=new D.A(o.b+".textureCube",i,o.e)
j.b=!0
o.a.a_(j)}k.sbf(p)
h=new D.bB()
h.c=new V.a0(1,1,1)
h.r=1
h.y=h.x=0
h.z=!0
h.a=V.cL()
i=h.b
h.b=l
l.gv().n(0,h.gbF())
p=new D.A("mover",i,h.b)
p.b=!0
h.a8(p)
g=new V.a0(1,1,1)
if(!h.c.q(0,g)){i=h.c
h.c=g
p=new D.A("color",i,g)
p.b=!0
h.a8(p)}p=h.d
if(p!==m){if(p!=null)p.gv().K(0,h.gbF())
i=h.d
h.d=m
m.gv().n(0,h.gbF())
p=new D.A("texture",i,h.d)
p.b=!0
h.a8(p)}p=$.mC
if(p==null){p=new V.d7(1,0.00390625,0.0000152587890625,0)
$.mC=p
f=p}else f=p
if(!J.H(h.f,f)){i=h.f
h.f=f
p=new D.A("shadowAdjust",i,f)
p.b=!0
h.a8(p)}p=h.r
$.D().toString
if(!(Math.abs(p-1)<1e-9)){h.r=1
p=new D.A("attenuation0",p,1)
p.b=!0
h.a8(p)}p=h.x
$.D().toString
if(!(Math.abs(p-0.15)<1e-9)){h.x=0.15
p=new D.A("attenuation1",p,0.15)
p.b=!0
h.a8(p)}p=h.y
$.D().toString
if(!(Math.abs(p-0.05)<1e-9)){h.y=0.05
p=new D.A("attenuation2",p,0.05)
p.b=!0
h.a8(p)}e=O.m3()
e.dx.n(0,h)
p=e.r
p.saT(0,new V.a0(0.1,0.1,0.1))
p=e.x
p.saT(0,new V.a0(1,1,1))
p=e.z
p.saT(0,new V.a0(1,1,1))
p=e.z
p.c0(new A.a2(!0,!1,p.c.c))
p.d9(100)
d=E.l2()
d.saW(U.hQ(V.le(3,3,3,1)))
p=F.lC(1,a5,a5,1)
p.cq()
d.sag(0,p)
c=E.l2()
c.sag(0,F.nj())
b=U.l4()
p=q.x
o=new U.d4()
j=U.l0()
j.scH(0,!0)
j.scv(6.283185307179586)
j.scz(0)
j.sX(0,0)
j.scw(100)
j.sU(0)
j.scf(0.5)
o.b=j
a=o.gaO()
j.gv().n(0,a)
j=U.l0()
j.scH(0,!0)
j.scv(6.283185307179586)
j.scz(0)
j.sX(0,0)
j.scw(100)
j.sU(0)
j.scf(0.5)
o.c=j
j.gv().n(0,a)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
a0=new X.ap(!1,!1,!1)
i=o.d
o.d=a0
j=new D.A(a7,i,a0)
j.b=!0
o.G(j)
j=o.f
if(j!==!1){o.f=!1
j=new D.A("invertX",j,!1)
j.b=!0
o.G(j)}j=o.r
if(j!==!1){o.r=!1
j=new D.A("invertY",j,!1)
j.b=!0
o.G(j)}o.b5(p)
b.n(0,o)
p=q.x
o=new U.d3()
j=U.l0()
j.scH(0,!0)
j.scv(6.283185307179586)
j.scz(0)
j.sX(0,0)
j.scw(100)
j.sU(0)
j.scf(0.2)
o.b=j
j.gv().n(0,o.gaO())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
a0=new X.ap(!0,!1,!1)
i=o.c
o.c=a0
j=new D.A(a7,i,a0)
j.b=!0
o.G(j)
o.b5(p)
b.n(0,o)
p=q.x
o=new U.d5()
o.c=0.01
o.e=o.d=0
a0=new X.ap(!1,!1,!1)
o.b=a0
j=new D.A(a7,a5,a0)
j.b=!0
o.G(j)
o.b5(p)
b.n(0,o)
b.n(0,U.hQ(V.m7(0,0,5)))
a1=new M.e1()
a1.a=!0
p=O.l_(t.l)
a1.e=p
p.bi(a1.gfg(),a1.gfi())
a1.y=a1.x=a1.r=a1.f=null
a2=X.o4(a5)
a3=new X.eA()
a3.c=1.0471975511965976
a3.d=0.1
a3.e=2000
a3.saW(a5)
p=a3.c
$.D().toString
if(!(Math.abs(p-1.0471975511965976)<1e-9)){a3.c=1.0471975511965976
p=new D.A("fov",p,1.0471975511965976)
p.b=!0
a3.aL(p)}p=a3.d
$.D().toString
if(!(Math.abs(p-0.1)<1e-9)){a3.d=0.1
p=new D.A("near",p,0.1)
p.b=!0
a3.aL(p)}p=a3.e
$.D().toString
if(!(Math.abs(p-2000)<1e-9)){a3.e=2000
p=new D.A("far",p,2000)
p.b=!0
a3.aL(p)}p=a1.b
if(p!==a3){if(p!=null)p.gv().K(0,a1.gau())
i=a1.b
a1.b=a3
a3.gv().n(0,a1.gau())
p=new D.A("camera",i,a1.b)
p.b=!0
a1.az(p)}p=a1.c
if(p!==a2){if(p!=null)p.gv().K(0,a1.gau())
i=a1.c
a1.c=a2
a2.gv().n(0,a1.gau())
p=new D.A("target",i,a1.c)
p.b=!0
a1.az(p)}a1.sbf(a5)
a1.sbf(e)
a1.e.n(0,d)
a1.e.n(0,c)
a1.e.n(0,k)
a1.b.saW(b)
p=q.d
if(p!==a1){if(p!=null)p.gv().K(0,q.gcQ())
q.d=a1
a1.gv().n(0,q.gcQ())
q.cR()}p=new V.iR("shapes")
s=s.getElementById("shapes")
p.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
p.b4(0,"Cube",new T.kG(c))
p.b4(0,"Cylinder",new T.kH(c))
p.b4(0,"Cone",new T.kI(c))
p.b4(0,"Sphere",new T.kJ(c))
p.dg(0,"Toroid",new T.kK(c),!0)
p.b4(0,"Knot",new T.kL(c))
s=q.Q
if(s==null)s=q.Q=D.K()
p=s.b
s=p==null?s.b=H.d([],t.f):p
s.push(new T.kM(a8,e))
V.qE(q)},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l8.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gS:function(a){return H.cR(a)},
i:function(a){return"Instance of '"+H.f(H.eH(a))+"'"}}
J.eb.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$iax:1}
J.cz.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.ba.prototype={
gS:function(a){return 0},
i:function(a){return String(a)},
$im0:1}
J.eB.prototype={}
J.bF.prototype={}
J.aB.prototype={
i:function(a){var s=a[$.nn()]
if(s==null)return this.eu(a)
return"JavaScript function for "+H.f(J.a5(s))},
$iaz:1}
J.x.prototype={
cD:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eI(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("remove"))
for(s=0;s<a.length;++s)if(J.H(a[s],b)){a.splice(s,1)
return!0}return!1},
aj:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
H:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b5(a))}},
j:function(a,b){var s,r,q=P.io(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hX:function(a){return this.j(a,"")},
hR:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b5(a))}return s},
hS:function(a,b,c){return this.hR(a,b,c,t.z)},
hQ:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b5(a))}throw H.b(H.ig())},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghP:function(a){if(a.length>0)return a[0]
throw H.b(H.ig())},
gay:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ig())},
dj:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b5(a))}return!1},
b_:function(a,b){if(!!a.immutable$list)H.q(P.B("sort"))
H.oD(a,b==null?J.pA():b)},
ep:function(a){return this.b_(a,null)},
D:function(a,b){var s
for(s=0;s<a.length;++s)if(J.H(a[s],b))return!0
return!1},
i:function(a){return P.l5(a,"[","]")},
gR:function(a){return new J.a6(a,a.length)},
gS:function(a){return H.cR(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.ch(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.B("indexed set"))
if(b>=a.length||b<0)throw H.b(H.ch(a,b))
a[b]=c},
$ik:1,
$ih:1,
$in:1}
J.ih.prototype={}
J.a6.prototype={
gB:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.by.prototype={
aU:function(a,b){var s
if(typeof b!="number")throw H.b(H.an(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbt(b)
if(this.gbt(a)===s)return 0
if(this.gbt(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbt:function(a){return a===0?1/a<0:a<0},
iu:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.B(""+a+".toInt()"))},
cr:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.B(""+a+".floor()"))},
aq:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.B(""+a+".round()"))},
eg:function(a,b){var s
if(b>20)throw H.b(P.a4(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbt(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
p:function(a,b){if(typeof b!="number")throw H.b(H.an(b))
return a*b},
bh:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ew:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dc(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dc(a,b)},
dc:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aQ:function(a,b){var s
if(a>0)s=this.da(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hb:function(a,b){if(b<0)throw H.b(H.an(b))
return this.da(a,b)},
da:function(a,b){return b>31?0:a>>>b},
$iZ:1,
$iR:1}
J.cy.prototype={$il:1}
J.cx.prototype={}
J.aN.prototype={
V:function(a,b){if(b<0)throw H.b(H.ch(a,b))
if(b>=a.length)H.q(H.ch(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.b(H.ch(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!="string")throw H.b(P.lQ(b,null,null))
return a+b},
aY:function(a,b,c,d){var s,r,q=P.bc(b,c,a.length)
if(!H.cd(q))H.q(H.an(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a7:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a4:function(a,b){return this.a7(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eI(b,null))
if(b>c)throw H.b(P.eI(b,null))
if(c>a.length)throw H.b(P.eI(c,null))
return a.substring(b,c)},
ac:function(a,b){return this.t(a,b,null)},
ix:function(a){return a.toLowerCase()},
p:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
am:function(a,b){var s=b-a.length
if(s<=0)return a
return this.p(" ",s)+a},
br:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dR:function(a,b){return this.br(a,b,0)},
hz:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a4(c,0,s,null,null))
return H.ni(a,b,c)},
D:function(a,b){return this.hz(a,b,0)},
aU:function(a,b){var s
if(typeof b!="string")throw H.b(H.an(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gS:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gm:function(a){return a.length},
$iy:1}
H.ef.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.k.prototype={}
H.cE.prototype={
gR:function(a){return new H.bb(this,this.gm(this))},
bB:function(a,b){return this.es(0,b)}}
H.bb.prototype={
gB:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.b_(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b5(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aP.prototype={
gR:function(a){return new H.ej(J.b1(this.a),this.b)},
gm:function(a){return J.aJ(this.a)},
I:function(a,b){return this.b.$1(J.hF(this.a,b))}}
H.cr.prototype={$ik:1}
H.ej.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cI.prototype={
gm:function(a){return J.aJ(this.a)},
I:function(a,b){return this.b.$1(J.hF(this.a,b))}}
H.aY.prototype={
gR:function(a){return new H.fu(J.b1(this.a),this.b)}}
H.fu.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cu.prototype={}
H.fm.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify an unmodifiable list"))}}
H.c5.prototype={}
H.cm.prototype={
i:function(a){return P.ld(this)},
l:function(a,b,c){H.o_()},
$iI:1}
H.cn.prototype={
gm:function(a){return this.a},
cc:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cc(0,b))return null
return this.d0(b)},
d0:function(a){return this.b[a]},
H:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d0(q))}}}
H.jj.prototype={
al:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ev.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ed.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fl.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iP.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ha.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bt.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nl(r==null?"unknown":r)+"'"},
$iaz:1,
giB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f1.prototype={}
H.eV.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nl(s)+"'"}}
H.bN.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bN))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.cR(this.a)
else s=typeof r!=="object"?J.ae(r):H.cR(r)
return(s^H.cR(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eH(s))+"'")}}
H.eM.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gm:function(a){return this.a},
gbs:function(a){return this.a===0},
ga0:function(a){return new H.cB(this,H.dz(this).J("cB<1>"))},
giA:function(a){var s=this,r=H.dz(s)
return H.oh(s.ga0(s),new H.ii(s),r.c,r.Q[1])},
cc:function(a,b){var s=this.b
if(s==null)return!1
return this.eU(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bl(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bl(p,b)
q=r==null?n:r.b
return q}else return o.hV(b)},
hV:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d1(p,q.dS(a))
r=q.dT(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cU(s==null?q.b=q.bW():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cU(r==null?q.c=q.bW():r,b,c)}else q.hW(b,c)},
hW:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bW()
s=p.dS(a)
r=p.d1(o,s)
if(r==null)p.c1(o,s,[p.bX(a,b)])
else{q=p.dT(r,a)
if(q>=0)r[q].b=b
else r.push(p.bX(a,b))}},
H:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b5(s))
r=r.c}},
cU:function(a,b,c){var s=this.bl(a,b)
if(s==null)this.c1(a,b,this.bX(b,c))
else s.b=c},
f4:function(){this.r=this.r+1&67108863},
bX:function(a,b){var s,r=this,q=new H.il(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f4()
return q},
dS:function(a){return J.ae(a)&0x3ffffff},
dT:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1},
i:function(a){return P.ld(this)},
bl:function(a,b){return a[b]},
d1:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
eU:function(a,b){return this.bl(a,b)!=null},
bW:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c1(r,s,r)
this.eY(r,s)
return r}}
H.ii.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dz(this.a).J("2(1)")}}
H.il.prototype={}
H.cB.prototype={
gm:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.ei(s,s.r)
r.c=s.e
return r}}
H.ei.prototype={
gB:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kz.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.kA.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kB.prototype={
$1:function(a){return this.a(a)}}
H.ec.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imh:1}
H.cM.prototype={$icM:1}
H.X.prototype={$iX:1}
H.bY.prototype={
gm:function(a){return a.length},
$iz:1}
H.bA.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aZ(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cN.prototype={
l:function(a,b,c){H.aZ(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.eq.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.cO.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aZ(b,a,a.length)
return a[b]}}
H.bZ.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aZ(b,a,a.length)
return a[b]},
$ibZ:1,
$ibe:1}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.as.prototype={
J:function(a){return H.ho(v.typeUniverse,this,a)},
b0:function(a){return H.p9(v.typeUniverse,this,a)}}
H.fN.prototype={}
H.fI.prototype={
i:function(a){return this.a}}
H.dr.prototype={}
P.jS.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jR.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jT.prototype={
$0:function(){this.a.$0()}}
P.jU.prototype={
$0:function(){this.a.$0()}}
P.dq.prototype={
eJ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cg(new P.ka(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
eK:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cg(new P.k9(this,a,Date.now(),b),0),a)
else throw H.b(P.B("Periodic timer."))},
$icX:1}
P.ka.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k9.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ew(s,o)}q.c=p
r.d.$1(q)}}
P.ca.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bG.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.ca){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b1(s)
if(o instanceof P.bG){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dm.prototype={
gR:function(a){return new P.bG(this.a())}}
P.fv.prototype={}
P.cV.prototype={}
P.eX.prototype={}
P.cX.prototype={}
P.kh.prototype={}
P.kq.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a5(this.b)
throw s}}
P.jZ.prototype={
iq:function(a){var s,r,q,p=null
try{if(C.f===$.aH){a.$0()
return}P.q5(p,p,this,a)}catch(q){s=H.ad(q)
r=H.lE(q)
P.n0(p,p,this,s,r)}},
ir:function(a,b){var s,r,q,p=null
try{if(C.f===$.aH){a.$1(b)
return}P.q6(p,p,this,a,b)}catch(q){s=H.ad(q)
r=H.lE(q)
P.n0(p,p,this,s,r)}},
is:function(a,b){return this.ir(a,b,t.z)},
hv:function(a){return new P.k_(this,a)},
dl:function(a,b){return new P.k0(this,a,b)}}
P.k_.prototype={
$0:function(){return this.a.iq(this.b)}}
P.k0.prototype={
$1:function(a){return this.a.is(this.b,a)},
$S:function(){return this.c.J("~(0)")}}
P.da.prototype={
gR:function(a){var s=new P.db(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
D:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eT(b)
return r}},
eT:function(a){var s=this.d
if(s==null)return!1
return this.bN(s[this.bJ(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cW(s==null?q.b=P.ll():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cW(r==null?q.c=P.ll():r,b)}else return q.eM(0,b)},
eM:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.ll()
s=q.bJ(b)
r=p[s]
if(r==null)p[s]=[q.bI(b)]
else{if(q.bN(r,b)>=0)return!1
r.push(q.bI(b))}return!0},
K:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fZ(this.c,b)
else return this.fY(0,b)},
fY:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bJ(b)
r=n[s]
q=o.bN(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.de(p)
return!0},
cW:function(a,b){if(a[b]!=null)return!1
a[b]=this.bI(b)
return!0},
fZ:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.de(s)
delete a[b]
return!0},
cX:function(){this.r=1073741823&this.r+1},
bI:function(a){var s,r=this,q=new P.jY(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cX()
return q},
de:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cX()},
bJ:function(a){return J.ae(a)&1073741823},
bN:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1}}
P.jY.prototype={}
P.db.prototype={
gB:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cw.prototype={}
P.im.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cD.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gR:function(a){return new H.bb(a,this.gm(a))},
I:function(a,b){return this.h(a,b)},
gbs:function(a){return this.gm(a)===0},
iw:function(a,b){var s,r,q,p,o=this
if(o.gbs(a)){s=J.l6(0,H.bI(a).J("i.E"))
return s}r=o.h(a,0)
q=P.io(o.gm(a),r,!0,H.bI(a).J("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
iv:function(a){return this.iw(a,!0)},
hN:function(a,b,c,d){var s
P.bc(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.l5(a,"[","]")}}
P.cG.prototype={}
P.ir.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:17}
P.W.prototype={
H:function(a,b){var s,r
for(s=J.b1(this.ga0(a));s.u();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aJ(this.ga0(a))},
i:function(a){return P.ld(a)},
$iI:1}
P.hp.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify unmodifiable map"))}}
P.cH.prototype={
h:function(a,b){return J.ck(this.a,b)},
l:function(a,b,c){J.kT(this.a,b,c)},
H:function(a,b){J.kV(this.a,b)},
gm:function(a){return J.aJ(this.a)},
i:function(a){return J.a5(this.a)},
$iI:1}
P.c6.prototype={}
P.di.prototype={
aj:function(a,b){var s
for(s=J.b1(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.l5(this,"{","}")},
I:function(a,b){var s,r,q,p="index"
P.nR(b,p)
P.mg(b,p)
for(s=P.oU(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.b(P.O(b,this,p,null,r))},
$ik:1,
$ih:1}
P.dc.prototype={}
P.dv.prototype={}
P.jC.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ad(r)}return null}}
P.jD.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ad(r)}return null}}
P.hL.prototype={
i_:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bc(a2,a3,a1.length)
if(a3==null)throw H.b(P.mf("Invalid range"))
s=$.nD()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.ky(C.a.C(a1,l))
h=H.ky(C.a.C(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.c(s,g)
f=s[g]
if(f>=0){g=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.T("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.ar(k)
q=l
continue}}throw H.b(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.lR(a1,n,a3,o,m,d)
else{c=C.c.bh(d-1,4)+1
if(c===1)throw H.b(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aY(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lR(a1,n,a3,o,m,b)
else{c=C.c.bh(b,4)
if(c===1)throw H.b(P.a3(a,a1,a3))
if(c>1)a1=C.a.aY(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hM.prototype={}
P.dT.prototype={}
P.dV.prototype={}
P.i1.prototype={}
P.ie.prototype={
i:function(a){return this.a}}
P.id.prototype={
eV:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.c(a,p)
switch(a[p]){case"&":n="&amp;"
break
case'"':n=s?"&quot;":m
break
case"'":n=q?"&#39;":m
break
case"<":n="&lt;"
break
case">":n="&gt;"
break
case"/":n=r?"&#47;":m
break
default:n=m}if(n!=null){if(o==null)o=new P.T("")
if(p>b)o.a+=C.a.t(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nP(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jA.prototype={
ghM:function(){return C.Q}}
P.jE.prototype={
cd:function(a){var s,r,q,p=P.bc(0,null,a.length)
if(p==null)throw H.b(P.mf("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kf(r)
if(q.f_(a,0,p)!==p){J.nK(a,p-1)
q.c6()}return new Uint8Array(r.subarray(0,H.ps(0,q.b,r.length)))}}
P.kf.prototype={
c6:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
hj:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c6()
return!1}},
f_:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hj(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c6()}else if(p<=2047){o=l.b
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
P.jB.prototype={
cd:function(a){var s=this.a,r=P.oJ(s,a,0,null)
if(r!=null)return r
return new P.ke(s).hA(a,0,null,!0)}}
P.ke.prototype={
hA:function(a,b,c,d){var s,r,q,p,o=this,n=P.bc(b,c,J.aJ(a))
if(b===n)return""
s=P.po(a,b,n)
if(typeof n!=="number")return n.W()
n-=b
r=o.bK(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pp(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bK:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.W()
if(c-b>1000){s=C.c.a2(b+c,2)
r=q.bK(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bK(a,s,c,d)}return q.hF(a,b,c,d)},
hF:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.T(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ar(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ar(j)
break
case 65:g.a+=H.ar(j);--f
break
default:p=g.a+=H.ar(j)
g.a=p+H.ar(j)
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
g.a+=H.ar(a[l])}else g.a+=P.eZ(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ar(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.ax.prototype={}
P.ah.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
aU:function(a,b){return C.c.aU(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.aQ(s,30))&1073741823},
i:function(a){var s=this,r=P.o0(H.ot(s)),q=P.dY(H.or(s)),p=P.dY(H.on(s)),o=P.dY(H.oo(s)),n=P.dY(H.oq(s)),m=P.dY(H.os(s)),l=P.o1(H.op(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Z.prototype={}
P.bu.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
aU:function(a,b){return C.c.aU(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hZ(),o=this.a
if(o<0)return"-"+new P.bu(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.hY().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.L.prototype={}
P.dK.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i4(s)
return"Assertion failed"}}
P.ew.prototype={
i:function(a){return"Throw of null."}}
P.af.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbM()+o+m
if(!q.a)return l
s=q.gbL()
r=P.i4(q.b)
return l+s+": "+r}}
P.c1.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e9.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var s,r=this.b
if(typeof r!=="number")return r.ab()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fn.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fk.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c3.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dU.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i4(s)+"."}}
P.ez.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.cU.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.dW.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fK.prototype={
i:function(a){return"Exception: "+this.a}}
P.ia.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.V(d,o)
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
i=""}h=C.a.t(d,k,l)
return f+j+h+i+"\n"+C.a.p(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.az.prototype={}
P.l.prototype={}
P.h.prototype={
bB:function(a,b){return new H.aY(this,b,H.dz(this).J("aY<h.E>"))},
gm:function(a){var s,r=this.gR(this)
for(s=0;r.u();)++s
return s},
gaJ:function(a){var s,r=this.gR(this)
if(!r.u())throw H.b(H.ig())
s=r.gB(r)
if(r.u())throw H.b(H.o7())
return s},
I:function(a,b){var s,r,q
P.mg(b,"index")
for(s=this.gR(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.O(b,this,"index",null,r))},
i:function(a){return P.o6(this,"(",")")}}
P.ea.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.I.prototype={}
P.aq.prototype={
gS:function(a){return P.N.prototype.gS.call(C.j,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gS:function(a){return H.cR(this)},
i:function(a){return"Instance of '"+H.f(H.eH(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.T.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jy.prototype={
$2:function(a,b){var s,r,q,p=J.dE(b).dR(b,"=")
if(p===-1){if(b!=="")J.kT(a,P.lu(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.ac(b,p+1)
q=this.a
J.kT(a,P.lu(s,0,s.length,q,!0),P.lu(r,0,r.length,q,!0))}return a}}
P.jv.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jw.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jx.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kC(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.ab()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bH.prototype={
gc5:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.f(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.q(H.la("Field '_text' has been assigned during initialization."))}return o},
gS:function(a){var s=this,r=s.z
if(r==null){r=C.a.gS(s.gc5())
if(s.z==null)s.z=r
else r=H.q(H.la("Field 'hashCode' has been assigned during initialization."))}return r},
gcC:function(){var s=this,r=s.Q
if(r==null){r=new P.c6(P.mu(s.gbe(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.la("Field 'queryParameters' has been assigned during initialization."))}return r},
gei:function(){return this.b},
gct:function(a){var s=this.c
if(s==null)return""
if(C.a.a4(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbv:function(a){var s=this.d
return s==null?P.mR(this.a):s},
gbe:function(a){var s=this.f
return s==null?"":s},
gcs:function(){var s=this.r
return s==null?"":s},
eb:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a4(s,"/"))s="/"+s
q=s
p=P.ls(null,0,0,b)
return new P.bH(n,l,j,k,q,p,o.r)},
gdM:function(){return this.c!=null},
gdP:function(){return this.f!=null},
gdN:function(){return this.r!=null},
i:function(a){return this.gc5()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbC()&&s.c!=null===b.gdM()&&s.b===b.gei()&&s.gct(s)===b.gct(b)&&s.gbv(s)===b.gbv(b)&&s.e===b.ge6(b)&&s.f!=null===b.gdP()&&s.gbe(s)===b.gbe(b)&&s.r!=null===b.gdN()&&s.gcs()===b.gcs()},
$ifo:1,
gbC:function(){return this.a},
ge6:function(a){return this.e}}
P.kc.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kd(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kd(C.h,b,C.e,!0))}}}
P.kb.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b1(b),r=this.a;s.u();)r.$2(a,s.gB(s))}}
P.ju.prototype={
geh:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.br(s,"?",m)
q=s.length
if(r>=0){p=P.dw(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fB("data","",n,n,P.dw(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kl.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kk.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.nL(s,0,96,b)
return s},
$S:18}
P.km.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.kn.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.h4.prototype={
gdM:function(){return this.c>0},
gdO:function(){return this.c>0&&this.d+1<this.e},
gdP:function(){return this.f<this.r},
gdN:function(){return this.r<this.a.length},
gd2:function(){return this.b===4&&C.a.a4(this.a,"http")},
gd3:function(){return this.b===5&&C.a.a4(this.a,"https")},
gbC:function(){var s=this.x
return s==null?this.x=this.eS():s},
eS:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gd2())return"http"
if(s.gd3())return"https"
if(r===4&&C.a.a4(s.a,"file"))return"file"
if(r===7&&C.a.a4(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
gei:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gct:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbv:function(a){var s=this
if(s.gdO())return P.kC(C.a.t(s.a,s.d+1,s.e),null)
if(s.gd2())return 80
if(s.gd3())return 443
return 0},
ge6:function(a){return C.a.t(this.a,this.e,this.f)},
gbe:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gcs:function(){var s=this.r,r=this.a
return s<r.length?C.a.ac(r,s+1):""},
gcC:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.c6(P.mu(s.gbe(s)),t.U)},
eb:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbC(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdO()?n.gbv(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a4(r,"/"))r="/"+r
p=P.ls(m,0,0,b)
q=n.r
o=q<j.length?C.a.ac(j,q+1):m
return new P.bH(l,i,s,h,r,p,o)},
gS:function(a){var s=this.y
return s==null?this.y=C.a.gS(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifo:1}
P.fB.prototype={}
W.r.prototype={}
W.hG.prototype={
gm:function(a){return a.length}}
W.dI.prototype={
i:function(a){return String(a)}}
W.dJ.prototype={
i:function(a){return String(a)}}
W.bM.prototype={$ibM:1}
W.bq.prototype={$ibq:1}
W.br.prototype={$ibr:1}
W.bs.prototype={
cI:function(a,b,c){if(c!=null)return a.getContext(b,P.qk(c))
return a.getContext(b)},
el:function(a,b){return this.cI(a,b,null)},
$ibs:1}
W.ay.prototype={
gm:function(a){return a.length}}
W.hR.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.co.prototype={
gm:function(a){return a.length}}
W.hS.prototype={}
W.ao.prototype={}
W.aM.prototype={}
W.hT.prototype={
gm:function(a){return a.length}}
W.hU.prototype={
gm:function(a){return a.length}}
W.hV.prototype={
gm:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.hW.prototype={
i:function(a){return String(a)}}
W.cp.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.cq.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaI(a))+" x "+H.f(this.gaF(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aI(b)
s=a.left==s.gbu(b)&&a.top==s.gby(b)&&this.gaI(a)==s.gaI(b)&&this.gaF(a)==s.gaF(b)}else s=!1
return s},
gS:function(a){return W.mI(J.ae(a.left),J.ae(a.top),J.ae(this.gaI(a)),J.ae(this.gaF(a)))},
gdm:function(a){return a.bottom},
gaF:function(a){return a.height},
gbu:function(a){return a.left},
gbx:function(a){return a.right},
gby:function(a){return a.top},
gaI:function(a){return a.width},
$ia7:1}
W.e0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hX.prototype={
gm:function(a){return a.length}}
W.fy.prototype={
gbs:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var s=this.iv(this)
return new J.a6(s,s.length)}}
W.E.prototype={
ghu:function(a){return new W.fG(a)},
gdn:function(a){return new W.fy(a,a.children)},
gdq:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ab()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ab()
if(p<0)p=-p*0
return new P.a7(s,r,q,p,t.q)},
i:function(a){return a.localName},
ak:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lZ
if(s==null){s=H.d([],t.o)
r=new W.cQ(s)
s.push(W.mG(null))
s.push(W.mM())
$.lZ=r
d=r}else d=s
s=$.lY
if(s==null){s=new W.hq(d)
$.lY=s
c=s}else{s.a=d
c=s}}if($.b7==null){s=document
r=s.implementation.createHTMLDocument("")
$.b7=r
$.l1=r.createRange()
r=$.b7.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.b7.head.appendChild(r)}s=$.b7
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b7
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b7.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Y,a.tagName)){$.l1.selectNodeContents(q)
s=$.l1
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b7.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b7.body)J.lO(q)
c.cJ(p)
document.adoptNode(p)
return p},
hD:function(a,b,c){return this.ak(a,b,c,null)},
en:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
gee:function(a){return a.tagName},
$iE:1}
W.i_.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hl:function(a,b,c,d){if(c!=null)this.eN(a,b,c,!1)},
eN:function(a,b,c,d){return a.addEventListener(b,H.cg(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
W.bQ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1,
$ibQ:1}
W.e3.prototype={
gm:function(a){return a.length}}
W.e5.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.ic.prototype={
gm:function(a){return a.length}}
W.bw.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.bx.prototype={
gdr:function(a){return a.data},
$ibx:1}
W.bS.prototype={$ibS:1}
W.bU.prototype={$ibU:1}
W.bz.prototype={$ibz:1}
W.ip.prototype={
i:function(a){return String(a)}}
W.iI.prototype={
gm:function(a){return a.length}}
W.bV.prototype={$ibV:1}
W.en.prototype={
h:function(a,b){return P.bk(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.H(a,new W.iJ(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
W.iJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eo.prototype={
h:function(a,b){return P.bk(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.H(a,new W.iK(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
W.iK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aC.prototype={$iaC:1}
W.ep.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aj.prototype={$iaj:1}
W.a1.prototype={
gaJ:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.lg("No elements"))
if(r>1)throw H.b(P.lg("More than one element"))
s=s.firstChild
s.toString
return s},
aj:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gR:function(a){var s=this.a.childNodes
return new W.cv(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.w.prototype={
ij:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
io:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nI(s,b,a)}catch(q){H.ad(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.er(a):s},
h0:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cP.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aD.prototype={
gm:function(a){return a.length},
$iaD:1}
W.eD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.eL.prototype={
h:function(a,b){return P.bk(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.H(a,new W.iY(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
W.iY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eN.prototype={
gm:function(a){return a.length}}
W.at.prototype={$iat:1}
W.eP.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aE.prototype={$iaE:1}
W.eQ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aF.prototype={
gm:function(a){return a.length},
$iaF:1}
W.eW.prototype={
h:function(a,b){return a.getItem(H.lw(b))},
l:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga0:function(a){var s=H.d([],t.s)
this.H(a,new W.j8(s))
return s},
gm:function(a){return a.length},
$iI:1}
W.j8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.bd.prototype={$ibd:1}
W.cW.prototype={
ak:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=W.o2("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a1(r).aj(0,new W.a1(s))
return r}}
W.f_.prototype={
ak:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ak(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaJ(s)
q.toString
s=new W.a1(q)
p=s.gaJ(s)
r.toString
p.toString
new W.a1(r).aj(0,new W.a1(p))
return r}}
W.f0.prototype={
ak:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ak(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaJ(s)
r.toString
q.toString
new W.a1(r).aj(0,new W.a1(q))
return r}}
W.c4.prototype={$ic4:1}
W.av.prototype={$iav:1}
W.aa.prototype={$iaa:1}
W.f3.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.f4.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.je.prototype={
gm:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bE.prototype={$ibE:1}
W.f9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ji.prototype={
gm:function(a){return a.length}}
W.aX.prototype={}
W.jz.prototype={
i:function(a){return String(a)}}
W.fs.prototype={
gm:function(a){return a.length}}
W.bg.prototype={
ghH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
ghG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.B("deltaX is not supported"))},
$ibg:1}
W.c7.prototype={
h1:function(a,b){return a.requestAnimationFrame(H.cg(b,1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c8.prototype={$ic8:1}
W.fz.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d8.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aI(b)
s=a.left==s.gbu(b)&&a.top==s.gby(b)&&a.width==s.gaI(b)&&a.height==s.gaF(b)}else s=!1
return s},
gS:function(a){return W.mI(J.ae(a.left),J.ae(a.top),J.ae(a.width),J.ae(a.height))},
gaF:function(a){return a.height},
gaI:function(a){return a.width}}
W.fO.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.dd.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.h7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.he.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.fw.prototype={
H:function(a,b){var s,r,q,p,o
for(s=this.ga0(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga0:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.c(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fG.prototype={
h:function(a,b){return this.a.getAttribute(H.lw(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga0(this).length}}
W.l3.prototype={}
W.fJ.prototype={
hi:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nJ(s,this.c,r,!1)}}}
W.jV.prototype={
$1:function(a){return this.a.$1(a)}}
W.lk.prototype={}
W.c9.prototype={
eC:function(a){var s
if($.d9.gbs($.d9)){for(s=0;s<262;++s)$.d9.l(0,C.X[s],W.qt())
for(s=0;s<12;++s)$.d9.l(0,C.o[s],W.qu())}},
aR:function(a){return $.nE().D(0,W.cs(a))},
aw:function(a,b,c){var s=$.d9.h(0,H.f(W.cs(a))+"::"+b)
if(s==null)s=$.d9.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iak:1}
W.M.prototype={
gR:function(a){return new W.cv(a,this.gm(a))}}
W.cQ.prototype={
aR:function(a){return C.b.dj(this.a,new W.iN(a))},
aw:function(a,b,c){return C.b.dj(this.a,new W.iM(a,b,c))},
$iak:1}
W.iN.prototype={
$1:function(a){return a.aR(this.a)}}
W.iM.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)}}
W.dj.prototype={
eI:function(a,b,c,d){var s,r,q
this.a.aj(0,c)
s=b.bB(0,new W.k2())
r=b.bB(0,new W.k3())
this.b.aj(0,s)
q=this.c
q.aj(0,C.w)
q.aj(0,r)},
aR:function(a){return this.a.D(0,W.cs(a))},
aw:function(a,b,c){var s=this,r=W.cs(a),q=s.c
if(q.D(0,H.f(r)+"::"+b))return s.d.hp(c)
else if(q.D(0,"*::"+b))return s.d.hp(c)
else{q=s.b
if(q.D(0,H.f(r)+"::"+b))return!0
else if(q.D(0,"*::"+b))return!0
else if(q.D(0,H.f(r)+"::*"))return!0
else if(q.D(0,"*::*"))return!0}return!1},
$iak:1}
W.k2.prototype={
$1:function(a){return!C.b.D(C.o,a)}}
W.k3.prototype={
$1:function(a){return C.b.D(C.o,a)}}
W.hg.prototype={
aw:function(a,b,c){if(this.ev(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.k8.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hf.prototype={
aR:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cs(a)==="foreignObject")return!1
if(s)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.a4(b,"on"))return!1
return this.aR(a)},
$iak:1}
W.cv.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.ck(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.ak.prototype={}
W.k1.prototype={}
W.hq.prototype={
cJ:function(a){var s=this,r=new W.kg(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b3:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lO(a)
else b.removeChild(a)},
h6:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nM(a)
l=m.a.getAttribute("is")
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=='attributes'||h.name=='attributes'||h.id=='lastChild'||h.name=='lastChild'||h.id=='previousSibling'||h.name=='previousSibling'||h.id=='children'||h.name=='children')return true}return false}(a)
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ad(p)}r="element unprintable"
try{r=J.a5(a)}catch(p){H.ad(p)}try{q=W.cs(a)
this.h5(a,b,n,r,q,m,l)}catch(p){if(H.ad(p) instanceof P.af)throw p
else{this.b3(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h5:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b3(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aR(a)){m.b3(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aw(a,"is",g)){m.b3(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga0(f)
r=H.d(s.slice(0),H.lv(s).J("x<1>"))
for(q=f.ga0(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.c(r,q)
p=r[q]
o=m.a
n=J.nQ(p)
H.lw(p)
if(!o.aw(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cJ(a.content)}}
W.kg.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h6(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b3(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.lg("Corrupt HTML")
throw H.b(q)}}catch(o){H.ad(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fA.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h3.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.hb.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
P.k4.prototype={
cp:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bA:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.ly(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ah)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jt("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cp(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.kV(a,new P.k6(n,o))
return n.a}if(t.aH.b(a)){s=o.cp(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.hC(a,s)}if(t.eH.b(a)){s=o.cp(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hT(a,new P.k7(n,o))
return n.b}throw H.b(P.jt("structured clone of other type"))},
hC:function(a,b){var s,r=J.b_(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.bA(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.k6.prototype={
$2:function(a,b){this.a.a[a]=this.b.bA(b)},
$S:3}
P.k7.prototype={
$2:function(a,b){this.a.b[a]=this.b.bA(b)},
$S:3}
P.ds.prototype={$ibx:1,
gdr:function(a){return this.a}}
P.kr.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.k5.prototype={
hT:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e4.prototype={
gbm:function(){var s=this.b,r=H.dz(s)
return new H.aP(new H.aY(s,new P.i8(),r.J("aY<i.E>")),new P.i9(),r.J("aP<i.E,E>"))},
l:function(a,b,c){var s=this.gbm()
J.nO(s.b.$1(J.hF(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aJ(this.gbm().a)},
h:function(a,b){var s=this.gbm()
return s.b.$1(J.hF(s.a,b))},
gR:function(a){var s=P.lc(this.gbm(),!1,t.h)
return new J.a6(s,s.length)}}
P.i8.prototype={
$1:function(a){return t.h.b(a)}}
P.i9.prototype={
$1:function(a){return t.h.a(a)}}
P.h2.prototype={
gbx:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdm:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aI(b)
if(s==r.gbu(b)){q=n.b
if(q==r.gby(b)){p=n.c
if(typeof s!=="number")return s.A()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gbx(b)){s=n.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdm(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.ae(q),o=r.b,n=J.ae(o),m=r.c
if(typeof q!=="number")return q.A()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.A()
if(typeof q!=="number")return H.v(q)
q=C.c.gS(s.a(o+q))
return P.oT(P.jX(P.jX(P.jX(P.jX(0,p),n),m),q))}}
P.a7.prototype={
gbu:function(a){return this.a},
gby:function(a){return this.b},
gaI:function(a){return this.c},
gaF:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.eg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.aT.prototype={$iaT:1}
P.ex.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.iQ.prototype={
gm:function(a){return a.length}}
P.c2.prototype={$ic2:1}
P.eY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gdn:function(a){return new P.e4(a,new W.a1(a))},
ak:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.o)
n.push(W.mG(null))
n.push(W.mM())
n.push(new W.hf())
c=new W.hq(new W.cQ(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hD(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a1(q)
o=n.gaJ(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aV.prototype={$iaV:1}
P.fa.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fR.prototype={}
P.fS.prototype={}
P.fZ.prototype={}
P.h_.prototype={}
P.hc.prototype={}
P.hd.prototype={}
P.hl.prototype={}
P.hm.prototype={}
P.be.prototype={$ik:1,$ih:1,$in:1}
P.hJ.prototype={
gm:function(a){return a.length}}
P.dM.prototype={
h:function(a,b){return P.bk(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.H(a,new P.hK(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
P.hK.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dN.prototype={
gm:function(a){return a.length}}
P.b3.prototype={}
P.ey.prototype={
gm:function(a){return a.length}}
P.fx.prototype={}
P.eK.prototype={
it:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.ql(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bL("Incorrect number or type of arguments"))}}
P.eT.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
s=P.bk(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.h8.prototype={}
P.h9.prototype={}
K.b2.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"}}
K.e7.prototype={
aG:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aG(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.is.prototype={}
K.a9.prototype={
aG:function(a,b){return!this.eq(0,b)},
i:function(a){return"!["+this.cN(0)+"]"}}
K.iT.prototype={
aG:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.ar(this.a),r=H.ar(this.b)
return s+".."+r}}
K.iZ.prototype={
ez:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.bb(a,a.gm(a));r.u();){q=r.d
s.l(0,q,!0)}p=P.lc(s.ga0(s),!0,t.e)
C.b.ep(p)
this.a=p},
aG:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.eZ(this.a,0,null)}}
L.eU.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fb(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
hO:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aG(0,a))return p}return null},
i:function(a){return this.b},
dd:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.D(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga0(l),l=l.gR(l);l.u();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.D(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f7.prototype={
i:function(a){var s=H.lJ(this.b,"\n","\\n"),r=H.lJ(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f8.prototype={
aH:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jf.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eU(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
P:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.f8(a)
s.c=new H.C(t.dO)
this.b.l(0,a,s)}return s},
cG:function(a){return this.iy(a)},
iy:function(a){var s=this
return P.pI(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cG(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cD(a1,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hO(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eZ(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.B("removeRange"))
P.bc(0,k,a0.length)
a0.splice(0,k-0)
C.b.aj(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.D(0,n.a)?7:8
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
if(d.d!=null){g=P.eZ(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f7(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.D(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oR()
case 1:return P.oS(o)}}},t.eB)},
i:function(a){var s,r=new P.T(""),q=this.d
if(q!=null)r.a=q.dd()+"\n"
for(q=this.a,q=q.giA(q),q=q.gR(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=s.dd()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fb.prototype={
i:function(a){return this.b.b+": "+this.cN(0)}}
O.ag.prototype={
bE:function(a){this.a=H.d([],a.J("x<0*>"))
this.c=this.b=null},
cK:function(a,b,c){this.b=b
this.c=a},
bi:function(a,b){return this.cK(a,null,b)},
fL:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
f7:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.a6(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dz(q).J("x<ag.T*>")
if(q.fL(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.f7(r,H.d([b],p))}},
$ih:1}
O.cK.prototype={
gm:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.K():s},
aK:function(){var s=this.b
if(s!=null)s.E(null)},
ga6:function(a){var s=this.a
if(s.length>0)return C.b.gay(s)
else return V.cL()},
e9:function(a){var s=this.a
if(a==null)s.push(V.cL())
else s.push(a)
this.aK()},
cB:function(){var s=this.a
if(s.length>0){s.pop()
this.aK()}}}
E.hN.prototype={}
E.bv.prototype={
cV:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a6(s,s.length);s.u();){r=s.d
if(r.f==null)r.cV()}},
sag:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gv().K(0,q.ge1())
s=q.c
if(s!=null)s.gv().n(0,q.ge1())
r=new D.A("shape",p,q.c)
r.b=!0
q.ap(r)}},
sbf:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gv().K(0,q.ge3())
s=q.f
q.f=a
if(a!=null)a.gv().n(0,q.ge3())
q.cV()
r=new D.A("technique",s,q.f)
r.b=!0
q.ap(r)}},
saW:function(a){var s,r,q=this
if(!J.H(q.r,a)){s=q.r
if(s!=null)s.gv().K(0,q.ge_())
if(a!=null)a.gv().n(0,q.ge_())
q.r=a
r=new D.A("mover",s,a)
r.b=!0
q.ap(r)}},
ar:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.as(0,b,q):null
if(!J.H(o,q.x)){s=q.x
q.x=o
r=new D.A("matrix",s,o)
r.b=!0
q.ap(r)}p=q.f
if(p!=null)p.ar(0,b)
for(p=q.y.a,p=new J.a6(p,p.length);p.u();)p.d.ar(0,b)},
aX:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga6(q))
else o.push(p.p(0,q.ga6(q)))
q.aK()
a.ea(r.f)
q=a.dy
s=(q&&C.b).gay(q)
if(s!=null&&r.d!=null)s.im(a,r)
for(q=r.y.a,q=new J.a6(q,q.length);q.u();)q.d.aX(a)
a.e8()
a.dx.cB()},
ap:function(a){var s=this.z
if(s!=null)s.E(a)},
Y:function(){return this.ap(null)},
e2:function(a){this.e=null
this.ap(a)},
i6:function(){return this.e2(null)},
e4:function(a){this.ap(a)},
i7:function(){return this.e4(null)},
e0:function(a){this.ap(a)},
i5:function(){return this.e0(null)},
dZ:function(a){this.ap(a)},
i2:function(){return this.dZ(null)},
i1:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdY(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bP()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.Y()},
i4:function(a,b){var s,r
for(s=b.gR(b),r=this.gdY();s.u();)s.gB(s).gv().K(0,r)
this.Y()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bO.prototype={
i:function(a){return this.b}}
E.c_.prototype={
i:function(a){return this.b}}
E.fH.prototype={}
E.iU.prototype={
ey:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ah(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cK()
r=t.h8
s.a=H.d([],r)
s.gv().n(0,new E.iV(q))
q.cy=s
s=new O.cK()
s.a=H.d([],r)
s.gv().n(0,new E.iW(q))
q.db=s
s=new O.cK()
s.a=H.d([],r)
s.gv().n(0,new E.iX(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
gii:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga6(q)
s=r.db
s=r.z=q.p(0,s.ga6(s))
q=s}return q},
ea:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gay(s):a)},
e8:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iV.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iW.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iX.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f6.prototype={
cS:function(a){this.ec()},
cR:function(){return this.cS(null)},
ghU:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.lX(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ah(q,!1)
return s/p},
d7:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.p()
if(typeof p!=="number")return H.v(p)
s=C.d.cr(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.p()
r=C.d.cr(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mo(C.n,q.gip())}},
ec:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.eZ(s)
r=W.n2(new E.jd(this),t.H)
r.toString
C.F.h1(s,r)}},
il:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d7()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ah(p,!1)
q.y=P.lX(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aK()
p=q.db
C.b.sm(p.a,0)
p.aK()
p=q.dx
C.b.sm(p.a,0)
p.aK()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.aX(n.e)}q=n.Q
if(q!=null)q.E(null)}catch(o){s=H.ad(o)
r=H.lE(o)
P.lI("Error: "+H.f(s))
P.lI("Stack: "+H.f(r))
throw H.b(s)}}}
E.jd.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.il()}}}
Z.ft.prototype={}
Z.dQ.prototype={
c8:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ad(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.jQ.prototype={}
Z.dR.prototype={
aV:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
c8:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].c8(a)},
iz:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aX:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.c(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a5(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bT.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eH(this.c))+"'")+"]"}}
Z.bf.prototype={
gcM:function(a){var s=this.a,r=(s&$.bo().a)!==0?3:0
if((s&$.bn().a)!==0)r+=3
if((s&$.bm().a)!==0)r+=3
if((s&$.bK().a)!==0)r+=2
if((s&$.bp().a)!==0)r+=3
if((s&$.dF().a)!==0)r+=3
if((s&$.dG().a)!==0)r+=4
if((s&$.cj().a)!==0)++r
return(s&$.bl().a)!==0?r+4:r},
hq:function(a){var s,r=$.bo(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bK()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dF()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0)if(s===a)return r
return $.nC()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bf))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bo().a)!==0)s.push("Pos")
if((r&$.bn().a)!==0)s.push("Norm")
if((r&$.bm().a)!==0)s.push("Binm")
if((r&$.bK().a)!==0)s.push("Txt2D")
if((r&$.bp().a)!==0)s.push("TxtCube")
if((r&$.dF().a)!==0)s.push("Clr3")
if((r&$.dG().a)!==0)s.push("Clr4")
if((r&$.cj().a)!==0)s.push("Weight")
if((r&$.bl().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hO.prototype={}
D.bP.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
K:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.a
s=(q&&C.b).K(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.b
s=(q&&C.b).K(q,b)||s}return s},
E:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.U()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.H(P.lc(s,!0,t.dm),new D.i5(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.H(s,new D.i6(o))}return!0},
hJ:function(){return this.E(null)},
an:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.E(s)}}}}
D.i5.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.i6.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.U.prototype={}
D.b8.prototype={}
D.b9.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dS.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ee.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ee))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ij.prototype={
ic:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i8:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}}
X.cF.prototype={}
X.iq.prototype={
b1:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.p()
s=b.b
r=o.ch
if(typeof s!=="number")return s.p()
q=new V.al(m.a+l*k,m.b+s*r)
r=o.a.gaS()
p=new X.bW(a,V.bC(),o.x,r,q)
p.b=!0
o.z=new P.ah(n,!1)
o.x=q
return p},
cA:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.em()
if(typeof s!=="number")return s.af()
this.r=(s&~r)>>>0
return!1},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.b1(a,b))
return!0},
ie:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaS()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.p()
o=a.b
n=m.cy
if(typeof o!=="number")return o.p()
r=new X.bX(new V.ab(q*p,o*n),s,r)
r.b=!0
l.E(r)
return!0},
fA:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cF(c,p.a.gaS(),b)
q.b=!0
r.E(q)
p.y=new P.ah(s,!1)
p.x=V.bC()}}
X.ap.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ap))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bW.prototype={}
X.iL.prototype={
bO:function(a,b,c){var s=this,r=new P.ah(Date.now(),!1),q=s.a.gaS(),p=new X.bW(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cA:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.E(this.bO(a,b,!0))
return!0},
bd:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.em()
if(typeof r!=="number")return r.af()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.E(s.bO(a,b,!0))
return!0},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.bO(a,b,!1))
return!0},
ig:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaS()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.p()
p=a.b
o=n.ch
if(typeof p!=="number")return p.p()
s=new X.bX(new V.ab(r*q,p*o),s,b)
s.b=!0
m.E(s)
return!0},
gdt:function(){var s=this.b
return s==null?this.b=D.K():s},
gbz:function(){var s=this.c
return s==null?this.c=D.K():s},
gdW:function(){var s=this.d
return s==null?this.d=D.K():s}}
X.bX.prototype={}
X.eF.prototype={}
X.cY.prototype={}
X.jh.prototype={
b1:function(a,b){var s=this,r=new P.ah(Date.now(),!1),q=a.length>0?a[0]:V.bC(),p=s.a.gaS(),o=new X.cY(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
ib:function(a){var s=this.b
if(s==null)return!1
s.E(this.b1(a,!0))
return!0},
i9:function(a){var s=this.c
if(s==null)return!1
s.E(this.b1(a,!0))
return!0},
ia:function(a){var s=this.d
if(s==null)return!1
s.E(this.b1(a,!1))
return!0}}
X.fp.prototype={
gaS:function(){var s=this.a,r=C.i.gdq(s).c
r.toString
s=C.i.gdq(s).d
s.toString
return V.mi(0,0,r,s)},
cZ:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ee(s,new X.ap(r,a.altKey,a.shiftKey))},
aP:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ap(r,a.altKey,a.shiftKey)},
c2:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ap(r,a.altKey,a.shiftKey)},
aC:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.W()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.W()
if(typeof s!=="number")return H.v(s)
return new V.al(q-o,p-s)},
b2:function(a){return new V.ab(a.movementX,a.movementY)},
bY:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.aq(p.pageX)
C.d.aq(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.aq(p.pageX)
m=C.d.aq(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.al(o-n,m-l))}return j},
aA:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dS(s,new X.ap(r,a.altKey,a.shiftKey))},
bP:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.W()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
fs:function(a){this.f=!0},
ff:function(a){this.f=!1},
fl:function(a){if(this.f&&this.bP(a))a.preventDefault()},
fw:function(a){var s
if(!this.f)return
s=this.cZ(a)
this.b.ic(s)},
fu:function(a){var s
if(!this.f)return
s=this.cZ(a)
this.b.i8(s)},
fC:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.aA(a)
r=p.b2(a)
if(p.d.cA(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aA(a)
q=p.aC(a)
if(p.c.cA(s,q))a.preventDefault()},
fG:function(a){var s,r,q,p=this
p.aP(a)
s=p.aA(a)
if(p.x){r=p.b2(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bd(s,q))a.preventDefault()},
fp:function(a){var s,r,q,p=this
if(!p.bP(a)){p.aP(a)
s=p.aA(a)
if(p.x){r=p.b2(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bd(s,q))a.preventDefault()}},
fE:function(a){var s,r,q,p=this
p.aP(a)
s=p.aA(a)
if(p.x){r=p.b2(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bc(s,q))a.preventDefault()},
fn:function(a){var s,r,q,p=this
if(!p.bP(a)){p.aP(a)
s=p.aA(a)
if(p.x){r=p.b2(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.bc(s,q))a.preventDefault()}},
fI:function(a){var s,r,q=this
q.aP(a)
s=new V.ab((a&&C.E).ghG(a),C.E.ghH(a)).p(0,q.Q)
if(q.x){if(q.d.ie(s))a.preventDefault()
return}if(q.r)return
r=q.aC(a)
if(q.c.ig(s,r))a.preventDefault()},
fK:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aA(q.y)
r=q.aC(q.y)
q.d.fA(s,r,p)}},
fX:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c2(a)
s=r.bY(a)
if(r.e.ib(s))a.preventDefault()},
fT:function(a){var s
this.c2(a)
s=this.bY(a)
if(this.e.i9(s))a.preventDefault()},
fV:function(a){var s
this.c2(a)
s=this.bY(a)
if(this.e.ia(s))a.preventDefault()}}
D.dO.prototype={$iV:1}
D.dZ.prototype={$iV:1}
D.V.prototype={}
D.cA.prototype={
a8:function(a){var s=this.y
if(s!=null)s.E(a)},
d5:function(a){var s=this.z
if(s!=null)s.E(a)},
fz:function(){return this.d5(null)},
fN:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eD(q))return!1}return!0},
f9:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gd4(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bB)this.r.push(o)
n=o.Q
if(n==null){n=new D.bP()
n.d=0
o.Q=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.b8()
s.b=!0
this.a8(s)},
fR:function(a,b){var s,r,q
for(s=b.gR(b),r=this.gd4();s.u();){q=s.gB(s)
C.b.K(this.e,q)
q.gv().K(0,r)}s=new D.b9()
s.b=!0
this.a8(s)},
eD:function(a){var s=C.b.D(this.r,a)
return s}}
D.bB.prototype={
a8:function(a){var s=this.Q
if(s!=null)s.E(a)},
eE:function(){return this.a8(null)},
gaa:function(){var s=this.d!=null?1:0
return s+4},
$iV:1}
D.eR.prototype={$iV:1}
V.a0.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.aL.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+", "+V.G(s.d,3,0)+"]"}}
V.i3.prototype={}
V.em.prototype={
ae:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.em))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.ci(H.d([o.a,o.d,o.r],n),3,0),l=V.ci(H.d([o.b,o.e,o.x],n),3,0),k=V.ci(H.d([o.c,o.f,o.y],n),3,0)
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
V.aR.prototype={
ae:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dU:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.D().toString
if(Math.abs(b3-0)<1e-9)return V.cL()
s=1/b3
r=-l
q=-a2
return V.aS((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
p:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aS(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bg:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aR))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
if(!(Math.abs(b.z-r.z)<1e-9))return!1
if(!(Math.abs(b.Q-r.Q)<1e-9))return!1
if(!(Math.abs(b.ch-r.ch)<1e-9))return!1
if(!(Math.abs(b.cx-r.cx)<1e-9))return!1
if(!(Math.abs(b.cy-r.cy)<1e-9))return!1
if(!(Math.abs(b.db-r.db)<1e-9))return!1
if(!(Math.abs(b.dx-r.dx)<1e-9))return!1
return!0},
i:function(a){return this.O()},
F:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.ci(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.ci(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.ci(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.ci(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
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
O:function(){return this.F("")}}
V.al.prototype={
a3:function(a){return new V.ab(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.Q.prototype={
A:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.bD.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bD))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+", "+V.G(s.d,3,0)+"]"}}
V.eJ.prototype={
gad:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eJ))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+", "+V.G(s.d,3,0)+"]"}}
V.ab.prototype={
b8:function(a){return Math.sqrt(this.a5(this))},
a5:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.v(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.v(r)
return q*p+s*r},
p:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.p()
if(typeof b!=="number")return H.v(b)
s=this.b
if(typeof s!=="number")return s.p()
return new V.ab(r*b,s*b)},
Z:function(a,b){var s,r
$.D().toString
if(Math.abs(b-0)<1e-9){s=$.mw
return s==null?$.mw=new V.ab(0,0):s}s=this.a
if(typeof s!=="number")return s.Z()
r=this.b
if(typeof r!=="number")return r.Z()
return new V.ab(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
s=b.a
r=this.a
$.D().toString
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.F.prototype={
b8:function(a){return Math.sqrt(this.a5(this))},
a5:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){return new V.F(V.hD(this.a,a.a,b),V.hD(this.b,a.b,b),V.hD(this.c,a.c,b))},
M:function(){var s=this,r=Math.sqrt(s.a5(s))
if(r===1)return s
return s.Z(0,r)},
aD:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.F(s*r-q*p,q*o-n*r,n*p-s*o)},
A:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.F(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
Z:function(a,b){$.D().toString
if(Math.abs(b-0)<1e-9)return V.d6()
return new V.F(this.a/b,this.b/b,this.c/b)},
dV:function(){$.D().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.F))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.d7.prototype={
b8:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d7))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+", "+V.G(s.d,3,0)+"]"}}
U.hP.prototype={
bH:function(a){var s=V.kS(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
G:function(a){var s=this.y
if(s!=null)s.E(a)},
scH:function(a,b){},
scv:function(a){var s,r=this,q=r.b
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bH(s)}q=new D.A("maximumLocation",q,r.b)
q.b=!0
r.G(q)}},
scz:function(a){var s,r=this,q=r.c
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bH(s)}q=new D.A("minimumLocation",q,r.c)
q.b=!0
r.G(q)}},
sX:function(a,b){var s,r=this
b=r.bH(b)
s=r.d
$.D().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.A("location",s,b)
s.b=!0
r.G(s)}},
scw:function(a){var s,r,q=this,p=q.e
$.D().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.A("maximumVelocity",p,a)
p.b=!0
q.G(p)}},
sU:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.A("velocity",r,a)
r.b=!0
s.G(r)}},
scf:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.A("dampening",s,a)
s.b=!0
this.G(s)}},
ar:function(a,b){var s,r,q,p=this,o=p.f
$.D().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sX(0,p.d+s*b)
o=p.x
$.D().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sU(s)}}}
U.cl.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.K():s},
as:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cl))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.bR.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.K():s},
G:function(a){var s=this.e
if(s!=null)s.E(a)},
a9:function(){return this.G(null)},
eG:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaO(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b8()
s.b=!0
this.G(s)},
fP:function(a,b){var s,r
for(s=b.gR(b),r=this.gaO();s.u();)s.gB(s).gv().K(0,r)
s=new D.b9()
s.b=!0
this.G(s)},
as:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ab()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a6(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.as(0,b,c)
if(r!=null)s=s==null?r:r.p(0,s)}}q.f=s==null?V.cL():s
p=q.e
if(p!=null)p.an(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bR))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.c(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.c(p,r)
if(!J.H(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cS.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
G:function(a){var s=this.y
if(s!=null)s.E(a)},
sej:function(a){var s
a=V.kS(a,0,6.283185307179586)
s=this.a
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.A("yaw",s,a)
s.b=!0
this.G(s)}},
se7:function(a,b){var s
b=V.kS(b,0,6.283185307179586)
s=this.b
$.D().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.A("pitch",s,b)
s.b=!0
this.G(s)}},
sed:function(a){var s
a=V.kS(a,0,6.283185307179586)
s=this.c
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.A("roll",s,a)
s.b=!0
this.G(s)}},
as:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sej(s.a+s.d*b.y)
s.se7(0,s.b+s.e*b.y)
s.sed(s.c+s.f*b.y)
s.x=V.m6(s.c).p(0,V.m5(s.b)).p(0,V.m4(s.a))
r=s.y
if(r!=null)r.an(0)}return s.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cS))return!1
s=q.a
r=b.a
$.D().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+"], ["+V.G(s.d,3,0)+", "+V.G(s.e,3,0)+", "+V.G(s.f,3,0)+"]"}}
U.d3.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.K():s},
G:function(a){var s=this.cy
if(s!=null)s.E(a)},
a9:function(){return this.G(null)},
b5:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdt().n(0,s.gbQ())
s.a.c.gdW().n(0,s.gbS())
s.a.c.gbz().n(0,s.gbU())
return!0},
bR:function(a){var s=this
if(!J.H(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bT:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a3(a.d)
s=s.a5(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a3(a.d).p(0,2).Z(0,s.gad())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.p()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sU(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a3(q).p(0,2).Z(0,s.gad())
r=l.b
o=p.a
if(typeof o!=="number")return o.T()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
l.b.sU(0)
l.Q=a.z.a3(q).p(0,2).Z(0,s.gad())}l.a9()},
bV:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a5(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.p()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sU(r*10*q)
p.a9()}},
as:function(a,b,c){var s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.ch=p
s=b.y
r.b.ar(0,s)
r.cx=V.m6(r.b.d)}return r.cx},
$iS:1}
U.d4.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.K():s},
G:function(a){var s=this.fx
if(s!=null)s.E(a)},
a9:function(){return this.G(null)},
b5:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdt().n(0,q.gbQ())
q.a.c.gdW().n(0,q.gbS())
q.a.c.gbz().n(0,q.gbU())
s=q.a.d
r=s.f
s=r==null?s.f=D.K():r
s.n(0,q.gf0())
s=q.a.d
r=s.d
s=r==null?s.d=D.K():r
s.n(0,q.gf2())
s=q.a.e
r=s.b
s=r==null?s.b=D.K():r
s.n(0,q.ghg())
s=q.a.e
r=s.d
s=r==null?s.d=D.K():r
s.n(0,q.ghe())
s=q.a.e
r=s.c
s=r==null?s.c=D.K():r
s.n(0,q.ghc())
return!0},
av:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.T()
s=-s}if(this.r){if(typeof r!=="number")return r.T()
r=-r}return new V.ab(s,r)},
bR:function(a){var s=this
t.c.a(a)
if(!J.H(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bT:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a3(a.d)
s=s.a5(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.a3(a.d).p(0,2).Z(0,s.gad()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.a3(q).p(0,2).Z(0,s.gad()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sX(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a3(q).p(0,2).Z(0,s.gad()))}l.a9()},
bV:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a5(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.a9()}},
f1:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f3:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.H(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.av(r.a3(q).p(0,2).Z(0,s.gad()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sX(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a3(q).p(0,2).Z(0,s.gad()))
l.a9()},
hh:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hf:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a3(a.d)
s=s.a5(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.a3(a.d).p(0,2).Z(0,s.gad()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.a3(q).p(0,2).Z(0,s.gad()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sX(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a3(q).p(0,2).Z(0,s.gad()))}l.a9()},
hd:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a5(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.a9()}},
as:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.dy=p
s=b.y
r.c.ar(0,s)
r.b.ar(0,s)
r.fr=V.m4(r.b.d).p(0,V.m5(r.c.d))}return r.fr},
$iS:1}
U.d5.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.K():s},
G:function(a){var s=this.r
if(s!=null)s.E(a)},
b5:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.K():r
r=p.gf5()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.K():q).n(0,r)
return!0},
f6:function(a){var s,r,q,p,o=this
if(!J.H(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.p()
p=s+r*q
if(s!==p){o.d=p
s=new D.A("zoom",s,p)
s.b=!0
o.G(s)}},
as:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.le(s,s,s,1)}return r.f},
$iS:1}
M.e1.prototype={
az:function(a){var s=this.y
if(s!=null)s.E(a)},
eH:function(){return this.az(null)},
fh:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gau(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bP()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b8()
s.b=!0
this.az(s)},
fj:function(a,b){var s,r
for(s=b.gR(b),r=this.gau();s.u();)s.gB(s).gv().K(0,r)
s=new D.b9()
s.b=!0
this.az(s)},
sbf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().K(0,r.gau())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gau())
q=new D.A("technique",s,r.d)
q.b=!0
r.az(q)}},
gv:function(){var s=this.y
return s==null?this.y=D.K():s},
aX:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.ea(a3.d)
s=a3.c
s.toString
r=a4.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.v(q)
m=C.d.aq(n*q)
n=o.b
if(typeof p!=="number")return H.v(p)
l=C.d.aq(n*p)
n=C.d.aq(o.c*q)
a4.c=n
o=C.d.aq(o.d*p)
a4.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=a3.b
r=a4.c
o=a4.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.aS(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.e9(g)
r=$.m9
if(r==null){r=V.ok()
o=$.mz
if(o==null)o=$.mz=new V.F(0,1,0)
n=$.mx
f=(n==null?$.mx=new V.F(0,0,-1):n).M()
e=o.aD(f).M()
d=f.aD(e)
c=new V.F(r.a,r.b,r.c)
b=e.T(0).a5(c)
a=d.T(0).a5(c)
a0=f.T(0).a5(c)
r=V.aS(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.m9=r
a1=r}else a1=r
r=s.b
if(r!=null){a2=r.as(0,a4,s)
if(a2!=null)a1=a2.p(0,a1)}a4.db.e9(a1)
s=a3.d
if(s!=null)s.ar(0,a4)
for(s=a3.e.a,s=new J.a6(s,s.length);s.u();)s.d.ar(0,a4)
for(s=a3.e.a,s=new J.a6(s,s.length);s.u();)s.d.aX(a4)
a3.b.toString
a4.cy.cB()
a4.db.cB()
a3.c.toString
a4.e8()}}
A.dL.prototype={}
A.hI.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hK:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hI:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a2.prototype={
gat:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a2))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.ek.prototype={
ex:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
c4.z=c9
s=new P.T("")
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
A.pX(c9,s)
A.pZ(c9,s)
A.pY(c9,s)
A.q0(c9,s)
A.q1(c9,s)
A.q_(c9,s)
A.q2(c9,s)
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
k=A.pW(c4.z)
c4.c=l
c4.d=k
c4.e=c4.d_(l,35633)
c4.f=c4.d_(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.u("Failed to link shader: "+H.f(j)))}c4.h8()
c4.ha()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.L(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.L(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.L(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.L(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.L(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.L(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.L(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.L(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.bp
if(q>0){c4.k4=c4.y.L(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.u(c6+n+c7))
p.push(r.a(h))}}r=c9.a
if(r.a)c4.r2=t.r.a(c4.y.L(0,"emissionClr"))
if(r.c)c4.ry=t.Q.a(c4.y.L(0,"emissionTxt"))
r=c9.b
if(r.a)c4.x1=t.r.a(c4.y.L(0,"ambientClr"))
if(r.c)c4.y1=t.Q.a(c4.y.L(0,"ambientTxt"))
r=c9.c
if(r.a)c4.y2=t.r.a(c4.y.L(0,"diffuseClr"))
if(r.c)c4.aE=t.Q.a(c4.y.L(0,"diffuseTxt"))
r=c9.d
if(r.a)c4.bq=t.r.a(c4.y.L(0,"invDiffuseClr"))
if(r.c)c4.dz=t.Q.a(c4.y.L(0,"invDiffuseTxt"))
r=c9.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c4.dC=t.n.a(c4.y.L(0,"shininess"))
if(q)c4.dA=t.r.a(c4.y.L(0,"specularClr"))
if(r.c)c4.dB=t.Q.a(c4.y.L(0,"specularTxt"))}if(c9.f.c)c4.dD=t.Q.a(c4.y.L(0,"bumpTxt"))
if(c9.db){r=t.Q
c4.dE=r.a(c4.y.L(0,"envSampler"))
q=c9.r
if(q.a)c4.dF=t.r.a(c4.y.L(0,"reflectClr"))
if(q.c)c4.dG=r.a(c4.y.L(0,"reflectTxt"))
q=c9.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c4.dH=t.n.a(c4.y.L(0,"refraction"))
if(p)c4.dI=t.r.a(c4.y.L(0,"refractClr"))
if(q.c)c4.dJ=r.a(c4.y.L(0,"refractTxt"))}}r=c9.y
if(r.a)c4.dK=t.n.a(c4.y.L(0,"alpha"))
if(r.c)c4.dL=t.Q.a(c4.y.L(0,"alphaTxt"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.cg=new H.C(t.J)
c4.ci=new H.C(t.en)
for(p=t.r,o=t.n,n=t.d6,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="barLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){b=c4.y
a=d+"s["+i+"].startPnt"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
p.a(h)
b=c4.y
a=d+"s["+i+"].endPnt"
a0=b.h(0,a)
if(a0==null)H.q(P.u(c6+a+c7))
p.a(a0)
b=c4.y
a=d+"s["+i+"].color"
a1=b.h(0,a)
if(a1==null)H.q(P.u(c6+a+c7))
p.a(a1)
if(typeof e!=="number")return e.af()
if((e&4)!==0){b=c4.y
a=d+"s["+i+"].att0"
a2=b.h(0,a)
if(a2==null)H.q(P.u(c6+a+c7))
o.a(a2)
b=c4.y
a=d+"s["+i+"].att1"
a3=b.h(0,a)
if(a3==null)H.q(P.u(c6+a+c7))
o.a(a3)
b=c4.y
a=d+"s["+i+"].att2"
a4=b.h(0,a)
if(a4==null)H.q(P.u(c6+a+c7))
o.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cZ(h,a0,a1,a7,a6,a5))}c4.ci.l(0,e,c)
m=c4.cg
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.cj=new H.C(t.J)
c4.ck=new H.C(t.af)
for(p=t.r,o=t.w,n=t.dv,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.af()
b=(e&1)!==0
if(b){a=c4.y
a8=d+"s["+i+"].objUp"
h=a.h(0,a8)
if(h==null)H.q(P.u(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].objRight"
a0=a.h(0,a8)
if(a0==null)H.q(P.u(c6+a8+c7))
p.a(a0)
a=c4.y
a8=d+"s["+i+"].objDir"
a1=a.h(0,a8)
if(a1==null)H.q(P.u(c6+a8+c7))
p.a(a1)
a9=a1
b0=a0
b1=h}else{a9=c5
b0=a9
b1=b0}a=c4.y
a8=d+"s["+i+"].viewDir"
h=a.h(0,a8)
if(h==null)H.q(P.u(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].color"
a0=a.h(0,a8)
if(a0==null)H.q(P.u(c6+a8+c7))
p.a(a0)
if(b){b=c4.y
a=d+"sTexture2D"+i
a1=b.h(0,a)
if(a1==null)H.q(P.u(c6+a+c7))
o.a(a1)
b2=a1}else b2=c5
c.push(new A.d_(b1,b0,a9,h,a0,b2))}c4.ck.l(0,e,c)
m=c4.cj
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.cl=new H.C(t.J)
c4.cm=new H.C(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.f(e)
c=H.d([],a)
for(a8=f.b,i=0;i<a8;++i){b3=c4.y
b4=d+"s["+i+"].point"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
p.a(h)
b3=c4.y
b4=d+"s["+i+"].viewPnt"
a0=b3.h(0,b4)
if(a0==null)H.q(P.u(c6+b4+c7))
p.a(a0)
b3=c4.y
b4=d+"s["+i+"].color"
a1=b3.h(0,b4)
if(a1==null)H.q(P.u(c6+b4+c7))
p.a(a1)
if(typeof e!=="number")return e.af()
if((e&3)!==0){b3=c4.y
b4=d+"s["+i+"].invViewRotMat"
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
o.a(a2)
b5=a2}else b5=c5
if((e&1)!==0){b3=c4.y
b4=d+"sTextureCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
n.a(a2)
b2=a2}else b2=c5
if((e&2)!==0){b3=c4.y
b4=d+"sShadowCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
n.a(a2)
b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
m.a(a3)
b6=a2
b7=a3}else{b6=c5
b7=b6}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
b.a(a2)
b3=c4.y
b4=d+"s["+i+"].att1"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
b.a(a3)
b3=c4.y
b4=d+"s["+i+"].att2"
a4=b3.h(0,b4)
if(a4==null)H.q(P.u(c6+b4+c7))
b.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.d1(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.cm.l(0,e,c)
a8=c4.cl
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
a8.l(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.cn=new H.C(t.J)
c4.co=new H.C(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.w,b=t.fF,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.f(e)
c=H.d([],b)
for(a=f.b,i=0;i<a;++i){a8=c4.y
b3=d+"s["+i+"].objPnt"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
p.a(h)
a8=c4.y
b3=d+"s["+i+"].objDir"
a0=a8.h(0,b3)
if(a0==null)H.q(P.u(c6+b3+c7))
p.a(a0)
a8=c4.y
b3=d+"s["+i+"].viewPnt"
a1=a8.h(0,b3)
if(a1==null)H.q(P.u(c6+b3+c7))
p.a(a1)
a8=c4.y
b3=d+"s["+i+"].color"
a2=a8.h(0,b3)
if(a2==null)H.q(P.u(c6+b3+c7))
p.a(a2)
if(typeof e!=="number")return e.af()
if((e&3)!==0){a8=c4.y
b3=d+"s["+i+"].objUp"
a3=a8.h(0,b3)
if(a3==null)H.q(P.u(c6+b3+c7))
p.a(a3)
a8=c4.y
b3=d+"s["+i+"].objRight"
a4=a8.h(0,b3)
if(a4==null)H.q(P.u(c6+b3+c7))
p.a(a4)
a8=c4.y
b3=d+"s["+i+"].tuScalar"
b8=a8.h(0,b3)
if(b8==null)H.q(P.u(c6+b3+c7))
o.a(b8)
a8=c4.y
b3=d+"s["+i+"].tvScalar"
b9=a8.h(0,b3)
if(b9==null)H.q(P.u(c6+b3+c7))
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
if(a3==null)H.q(P.u(c6+b4+c7))
n.a(a3)
b7=a3}else b7=c5
if((e&8)!==0){b3=c4.y
b4=d+"s["+i+"].cutoff"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].coneAngle"
a4=b3.h(0,b4)
if(a4==null)H.q(P.u(c6+b4+c7))
o.a(a4)
c2=a4
c3=a3}else{c2=c5
c3=c2}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].att1"
a4=b3.h(0,b4)
if(a4==null)H.q(P.u(c6+b4+c7))
o.a(a4)
b3=c4.y
b4=d+"s["+i+"].att2"
b8=b3.h(0,b4)
if(b8==null)H.q(P.u(c6+b4+c7))
o.a(b8)
a5=b8
a6=a4
a7=a3}else{a5=c5
a6=a5
a7=a6}if((e&1)!==0){b3=c4.y
b4=d+"sTexture2D"+i
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
m.a(a3)
b2=a3}else b2=c5
if(a8){a8=c4.y
b3=d+"sShadow2D"+i
a3=a8.h(0,b3)
if(a3==null)H.q(P.u(c6+b3+c7))
m.a(a3)
b6=a3}else b6=c5
c.push(new A.d2(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.co.l(0,e,c)
a=c4.cn
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
a.l(0,e,h)}}}},
ai:function(a,b){if(b!=null&&b.d>=6)a.eo(b)}}
A.dP.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e_.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eG.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eS.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iv.prototype={
i:function(a){return this.aE}}
A.cZ.prototype={}
A.d_.prototype={}
A.d1.prototype={}
A.d2.prototype={}
A.cT.prototype={
eA:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
d_:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
h8:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dL(n,r.name,q))}p.x=new A.hI(o)},
ha:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hE(r.type,r.size,r.name,q))}p.y=new A.jr(o)},
aM:function(a,b,c){var s=this.a
if(a===1)return new A.fe(s,b,c)
else return A.li(s,this.r,b,a,c)},
eW:function(a,b,c){var s=this.a
if(a===1)return new A.fi(s,b,c)
else return A.li(s,this.r,b,a,c)},
eX:function(a,b,c){var s=this.a
if(a===1)return new A.fj(s,b,c)
else return A.li(s,this.r,b,a,c)},
bn:function(a,b){return new P.fK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hE:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aM(b,c,d)
case 5121:return s.aM(b,c,d)
case 5122:return s.aM(b,c,d)
case 5123:return s.aM(b,c,d)
case 5124:return s.aM(b,c,d)
case 5125:return s.aM(b,c,d)
case 5126:return new A.fd(s.a,c,d)
case 35664:return new A.jn(s.a,c,d)
case 35665:return new A.ff(s.a,c,d)
case 35666:return new A.fg(s.a,c,d)
case 35667:return new A.jo(s.a,c,d)
case 35668:return new A.jp(s.a,c,d)
case 35669:return new A.jq(s.a,c,d)
case 35674:return new A.js(s.a,c,d)
case 35675:return new A.fh(s.a,c,d)
case 35676:return new A.d0(s.a,c,d)
case 35678:return s.eW(b,c,d)
case 35680:return s.eX(b,c,d)
case 35670:throw H.b(s.bn("BOOL",c))
case 35671:throw H.b(s.bn("BOOL_VEC2",c))
case 35672:throw H.b(s.bn("BOOL_VEC3",c))
case 35673:throw H.b(s.bn("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.fc.prototype={}
A.jr.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
L:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.O()},
O:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fe.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jo.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jp.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jq.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jm.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fd.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jn.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.ff.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.js.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fh.prototype={
ao:function(a){var s=new Float32Array(H.cc(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d0.prototype={
ao:function(a){var s=new Float32Array(H.cc(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fi.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fj.prototype={
eo:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ki.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cu(q.b,b).cu(q.d.cu(q.c,b),c)
a.sX(0,new V.Q(p.a,p.b,p.c))
a.sef(p.M())
q=1-b
s=1-c
a.sdk(new V.bD(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.ks.prototype={
$2:function(a,b){return V.hD(this.a,this.b,b)}}
F.ku.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hD(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.v(n)
q=-q*n
s=p*n
a.sX(0,new V.Q(q,s,o))
a.sef(new V.F(q,s,o).M())
a.sdk(new V.bD(1-c,2+c,-1,-1))}}
F.kv.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kw.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kP.prototype={
$2:function(a,b){return 0}}
F.kQ.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.v(r)
s=a.f
r=new V.F(s.a,s.b,s.c).M().p(0,this.b+r)
a.sX(0,new V.Q(r.a,r.b,r.c))}}
F.kR.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.kF.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.Q(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kt.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lN(l.$1(m),k)
k=J.lN(l.$1(m+3.141592653589793/n.c),k).W(0,j)
s=new V.F(k.a,k.b,k.c).M()
l=$.my
if(l==null){l=new V.F(1,0,0)
$.my=l
r=l}else r=l
if(!J.H(s,r)){l=$.mA
if(l==null){l=new V.F(0,0,1)
$.mA=l
r=l}else r=l}q=s.aD(r).M()
r=q.aD(s).M()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.p(0,l*k)
k=q.p(0,o*k)
a.sX(0,j.A(0,new V.Q(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.e2.prototype={
b6:function(){var s=this
if(!s.gb7()){C.b.K(s.a.a.d.b,s)
s.a.a.Y()}s.bZ()
s.c_()
s.h_()},
c3:function(a){this.a=a
a.d.b.push(this)},
c4:function(a){this.b=a
a.d.c.push(this)},
h7:function(a){this.c=a
a.d.d.push(this)},
bZ:function(){var s=this.a
if(s!=null){C.b.K(s.d.b,this)
this.a=null}},
c_:function(){var s=this.b
if(s!=null){C.b.K(s.d.c,this)
this.b=null}},
h_:function(){var s=this.c
if(s!=null){C.b.K(s.d.d,this)
this.c=null}},
gb7:function(){return this.a==null||this.b==null||this.c==null},
eP:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d6()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.dV())return p
return q.M()},
eR:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.W(0,n)
q=new V.F(o.a,o.b,o.c).M()
o=r.W(0,n)
return q.aD(new V.F(o.a,o.b,o.c).M()).M()},
cb:function(){var s,r=this
if(r.d!=null)return!0
s=r.eP()
if(s==null){s=r.eR()
if(s==null)return!1}r.d=s
r.a.a.Y()
return!0},
eO:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d6()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.dV())return p
return q.M()},
eQ:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.D().toString
if(Math.abs(p-0)<1e-9){j=b.W(0,e)
o=new V.F(j.a,j.b,j.c).M()
if(q.a-r.a<0)o=o.T(0)}else{n=(j-s.b)/p
j=b.W(0,e).p(0,n).A(0,e).W(0,h)
o=new V.F(j.a,j.b,j.c).M()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.T(0)}j=l.d
if(j!=null){m=j.M()
o=m.aD(o).M().aD(m).M()}return o},
c9:function(){var s,r=this
if(r.e!=null)return!0
s=r.eO()
if(s==null){s=r.eQ()
if(s==null)return!1}r.e=s
r.a.a.Y()
return!0},
ghy:function(a){var s=this
if(J.H(s.a,s.b))return!0
if(J.H(s.b,s.c))return!0
if(J.H(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var s,r,q=this
if(q.gb7())return a+"disposed"
s=a+C.a.am(J.a5(q.a.e),0)+", "+C.a.am(J.a5(q.b.e),0)+", "+C.a.am(J.a5(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
O:function(){return this.F("")}}
F.i7.prototype={}
F.j7.prototype={
ba:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.eh.prototype={
b6:function(){var s=this
if(!s.gb7()){C.b.K(s.a.a.c.b,s)
s.a.a.Y()}s.bZ()
s.c_()},
c3:function(a){this.a=a
a.c.b.push(this)},
c4:function(a){this.b=a
a.c.c.push(this)},
bZ:function(){var s=this.a
if(s!=null){C.b.K(s.c.b,this)
this.a=null}},
c_:function(){var s=this.b
if(s!=null){C.b.K(s.c.c,this)
this.b=null}},
gb7:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){if(this.gb7())return a+"disposed"
return a+C.a.am(J.a5(this.a.e),0)+", "+C.a.am(J.a5(this.b.e),0)},
O:function(){return this.F("")}}
F.ik.prototype={}
F.jl.prototype={
ba:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
return r==s.e}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
return r==s.e}else return!1}}}
F.eE.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.am(J.a5(s.e),0)},
O:function(){return this.F("")}}
F.j_.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.K():s},
bb:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.w()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hB())}f.a.w()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eE()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.E(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.oc(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.ct(j,i,g)}e=f.e
if(e!=null)e.an(0)},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ax()||!1
if(!r.a.ax())s=!1
q=r.e
if(q!=null)q.an(0)
return s},
hZ:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.lv(m).J("x<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghP(s)
C.b.cD(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(o!=null&&a.ba(0,r,o)){q.push(o)
C.b.cD(s,p)}}if(q.length>1)b.bb(q)}}n.a.w()
n.c.cE()
n.d.cE()
n.b.ik()
n.c.cF(new F.jl())
n.d.cF(new F.j7())
m=n.e
if(m!=null)m.an(0)},
c7:function(){this.hZ(new F.jK(),new F.iO())},
cq:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cq()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.c(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdX(new V.F(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.F(-o.a,-o.b,-o.c).M()
if(!J.H(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.an(0)},
hw:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bo().a)!==0?1:0
if((s&$.bn().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.bp().a)!==0)++r
if((s&$.dF().a)!==0)++r
if((s&$.dG().a)!==0)++r
if((s&$.cj().a)!==0)++r
if((s&$.bl().a)!==0)++r
q=a6.gcM(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hq(k)
i=j.gcM(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dQ(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hY(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cc(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dR(new Z.ft(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)}a1=Z.lj(s,34963,a0)
a.b.push(new Z.bT(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)}a1=Z.lj(s,34963,a0)
a.b.push(new Z.bT(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].c
m.a.a.w()
a0.push(m.e)}a1=Z.lj(s,34963,a0)
a.b.push(new Z.bT(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.F(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.F(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.F(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.F(r))}return C.b.j(q,"\n")},
Y:function(){var s=this.e
if(s!=null)s.E(null)}}
F.j0.prototype={
hm:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.n(0,s)
r.a.n(0,p)
r.a.n(0,o)
n.push(F.ct(s,p,o))}}return n},
hn:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.ct(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.ct(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.ct(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.ct(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
cF:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.ba(0,n,l)){n.b6()
break}}}}},
cE:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.ghy(q)
if(r)q.b6()}},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cb())q=!1
return q},
ca:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c9())q=!1
return q},
cq:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.F(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.F(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.E(null)}},
i:function(a){return this.O()},
F:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(a))
return C.b.j(p,"\n")},
O:function(){return this.F("")}}
F.j1.prototype={
gm:function(a){return this.b.length},
cF:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.ba(0,n,l)){n.b6()
break}}}}},
cE:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=J.H(q.a,q.b)
if(r)q.b6()}},
i:function(a){return this.O()},
F:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].F(a+(""+s+". ")))}return C.b.j(q,"\n")},
O:function(){return this.F("")}}
F.j2.prototype={
gm:function(a){return this.b.length},
ik:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.K(q.b.b,r)
q=r.a.a.e
if(q!=null)q.E(null)
q=r.a
if(q!=null){C.b.K(q.b.b,r)
r.a=null}}}},
i:function(a){return this.O()},
F:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(a))
return C.b.j(p,"\n")},
O:function(){return this.F("")}}
F.fq.prototype={
ce:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fr(s.cx,p,m,r,q,o,n,a,l)},
hB:function(){return this.ce(null)},
sX:function(a,b){var s
if(!J.H(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Y()}},
sdX:function(a){var s
a=a==null?null:a.M()
if(!J.H(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Y()}},
sef:function(a){var s
if(!J.H(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Y()}},
sdk:function(a){var s
if(!J.H(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Y()}},
hY:function(a){var s,r,q=this
if(a.q(0,$.bo())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bn())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bm())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bK())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.q(0,$.bp())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dF())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dG())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.q(0,$.cj()))return H.d([q.ch],t.m)
else if(a.q(0,$.bl())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
cb:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d6()
r.d.H(0,new F.jP(q))
r.r=q.a.M()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.an(0)}return!0},
c9:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d6()
r.d.H(0,new F.jO(q))
r.x=q.a.M()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.an(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.am(J.a5(q.e),0))
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
o.push(V.G(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
O:function(){return this.F("")}}
F.jP.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.jO.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.jF.prototype={
w:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.u("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Y()
return!0},
ho:function(a,b,c,d,e,f){var s=F.fr(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cb()
return!0},
ca:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c9()
return!0},
hx:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.M()
if(!J.H(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}return!0},
i:function(a){return this.O()},
F:function(a){var s,r,q,p
this.w()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].F(a))
return C.b.j(s,"\n")},
O:function(){return this.F("")}}
F.jG.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.c(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.c(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.c(r,b)
return r[b]},
H:function(a,b){var s=this
C.b.H(s.b,b)
C.b.H(s.c,new F.jH(s,b))
C.b.H(s.d,new F.jI(s,b))},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
return C.b.j(p,"\n")}}
F.jH.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.jI.prototype={
$1:function(a){var s=this.a
if(!J.H(a.a,s)&&!J.H(a.b,s))this.b.$1(a)}}
F.jJ.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
return C.b.j(p,"\n")}}
F.jL.prototype={}
F.jK.prototype={
ba:function(a,b,c){return J.H(b.f,c.f)}}
F.jM.prototype={}
F.iO.prototype={
bb:function(a){var s,r,q,p=V.d6()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.F(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.M()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdX(p)
return null}}
F.jN.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
return C.b.j(p,"\n")}}
O.el.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.K():s},
a_:function(a){var s=this.fr
if(s!=null)s.E(a)},
bG:function(){return this.a_(null)},
d6:function(a){this.a=null
this.a_(a)},
h3:function(){return this.d6(null)},
fb:function(a,b){var s=new D.b8()
s.b=!0
this.a_(s)},
fd:function(a,b){var s=new D.b9()
s.b=!0
this.a_(s)},
cY:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaa()
n=d.h(0,p.gaa())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.H(0,new O.iz(f,m))
C.b.b_(m,new O.iA())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaa()
n=l.h(0,p.gaa())
l.l(0,o,n==null?1:n)}k=H.d([],t.M)
l.H(0,new O.iB(f,k))
C.b.b_(k,new O.iC())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaa()
n=j.h(0,p.gaa())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.H(0,new O.iD(f,i))
C.b.b_(i,new O.iE())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gaa()
o=h.h(0,p.gaa())
h.l(0,r,o==null?1:o)}g=H.d([],t.cz)
h.H(0,new O.iF(f,g))
C.b.b_(g,new O.iG())
e=C.c.a2(f.e.a.length+3,4)
f.dy.toString
return A.oj(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ah:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
ar:function(a,b){var s,r,q
for(s=this.dx.a,s=new J.a6(s,s.length);s.u();){r=s.d
r.toString
q=$.iH
r.a=q==null?$.iH=new V.aR(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q
q=r.b
if(q!=null)r.a=q.as(0,b,r)}},
im:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cY()
s=b6.fr.h(0,b5.aE)
if(s==null){s=A.oi(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.u("May not cache a shader with no name."))
if(b6.fr.cc(0,r))H.q(P.u('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.l(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bq
b5=b7.e
if(!(b5 instanceof Z.dR))b5=b7.e=null
if(b5==null||!b5.d.q(0,p)){b5=q.k4
if(b5)b7.d.ax()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.ca()
n.a.ca()
n=n.e
if(n!=null)n.an(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.hx()
m=m.e
if(m!=null)m.an(0)}k=b7.d.hw(new Z.jQ(b6.a),p)
k.aV($.bo()).e=b4.a.Q.c
if(b5)k.aV($.bn()).e=b4.a.cx.c
if(o)k.aV($.bm()).e=b4.a.ch.c
if(q.r2)k.aV($.bK()).e=b4.a.cy.c
if(n)k.aV($.bp()).e=b4.a.db.c
if(q.ry)k.aV($.bl()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.hK()
if(q.fr){b5=b4.a
n=b6.dx
n=n.ga6(n)
b5=b5.dy
b5.toString
b5.ao(n.ae(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.ga6(n)
m=b6.dx
m=b6.cx=n.p(0,m.ga6(m))
n=m}b5=b5.fr
b5.toString
b5.ao(n.ae(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gii()
m=b6.dx
m=b6.ch=n.p(0,m.ga6(m))
n=m}b5=b5.fy
b5.toString
b5.ao(n.ae(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.ga6(n)
b5=b5.fx
b5.toString
b5.ao(n.ae(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ao(C.j.ae(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ao(C.j.ae(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ao(C.j.ae(n,!0))}if(q.bp>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.c(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.c(b5,h)
b5=b5[h]
g=new Float32Array(H.cc(n.ae(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}b5=q.a
if(b5.a){n=b4.a
m=b4.f.f
n=n.r2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.ah(j,b4.f.e)
b5=b4.a
n=b4.f.e
b5.ai(b5.ry,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
m=b4.r.f
n=n.x1
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.ah(j,b4.r.e)
b5=b4.a
n=b4.r.e
b5.ai(b5.y1,n)}b5=q.c
if(b5.a){n=b4.a
m=b4.x.f
n=n.y2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.ah(j,b4.x.e)
b5=b4.a
n=b4.x.e
b5.ai(b5.aE,n)}b5=q.d
if(b5.a){n=b4.a
m=b4.y.f
n=n.bq
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.ah(j,b4.y.e)
b5=b4.a
n=b4.y.e
b5.ai(b5.dz,n)}b5=q.e
n=b5.a
if(!n)m=b5.c
else m=!0
if(m){m=b4.a
l=b4.z.ch
m=m.dC
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.z.f
n=n.dA
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.ah(j,b4.z.e)
b5=b4.a
n=b4.z.e
b5.ai(b5.dB,n)}b5=q.z
if(b5.length>0){f=new H.C(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.gaa()
b=f.h(0,c)
if(b==null)b=0
f.l(0,c,b+1)
a=J.ck(b4.a.ci.h(0,c),b)
l=d.giE()
a0=$.aU
l=l.bg(a0==null?$.aU=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giI()
a0=$.aU
l=l.bg(a0==null?$.aU=new V.Q(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaT(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.ghL()){l=d.ghr()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.ghs()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.ght()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.cg.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.ga6(n)
a2=new H.C(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.gaa()
b=a2.h(0,c)
if(b==null)b=0
a2.l(0,c,b+1)
a=J.ck(b4.a.ck.h(0,c),b)
l=d.gds(d)
l=new V.F(C.d.p(a1.a,l.gdu(l))+C.d.p(a1.b,l.gdv(l))+C.d.p(a1.c,l.gdw()),C.d.p(a1.e,l.gdu(l))+C.d.p(a1.f,l.gdv(l))+C.d.p(a1.r,l.gdw()),C.d.p(a1.y,l.gdu(l))+C.d.p(a1.z,l.gdv(l))+C.d.p(a1.Q,l.gdw())).M()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.gaT(d)
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)
d.gaZ()
l=d.gds(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gbz()
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gbx(d)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaZ()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaZ()
a0=l.gb9(l)
if(a0){a0=a.r
a0.toString
a3=l.gb9(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gdQ(l))}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.cj.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.ga6(n)
a5=new H.C(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.gaa()
b=a5.h(0,c)
if(b==null)b=0
a5.l(0,c,b+1)
a=J.ck(b4.a.cm.h(0,c),b)
a6=a1.p(0,d.a)
l=d.a
a0=$.aU
l=l.bg(a0==null?$.aU=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aU
l=a6.bg(l==null?$.aU=new V.Q(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.c
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.d!=null||!1){l=a6.dU(0)
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
g=new Float32Array(H.cc(new V.em(a0,a3,a4,a7,a8,a9,b0,b1,l).ae(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)}l=d.d
a0=l!=null
if(a0){if(a0)if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.d
a0=l!=null
if(a0&&l.d>=6){a3=a.f
a3.toString
a0=!a0||l.d<6
a4=a3.a
a3=a3.d
if(a0)a4.uniform1i(a3,0)
else a4.uniform1i(a3,l.a)}}l=d.r
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.x
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.y
a0=a.Q
a0.a.uniform1f(a0.d,l)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.cl.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.ga6(n)
b3=new H.C(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.gaa()
b=b3.h(0,c)
if(b==null)b=0
b3.l(0,c,b+1)
a=J.ck(b4.a.co.h(0,c),b)
l=d.gih(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gds(d).M()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.bg(d.gih(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaT(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaZ()
l=d.gbz()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gbx(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giS()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.giT()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gaZ()
l=d.gaZ()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaZ()
a0=l.gb9(l)
if(a0){a0=a.dx
a0.toString
a3=l.gb9(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gdQ(l))}d.gcL()
l=d.giD()
a0=a.z
a0.a.uniform4f(a0.d,l.a,l.b,l.c,l.d)
l=d.gcL()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gcL()
a0=l.gb9(l)
if(a0){a0=a.dy
a0.toString
a3=l.gb9(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gdQ(l))}if(d.giH()){l=d.giG()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.giF()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.ghL()){l=d.ghr()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.ghs()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.ght()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.cn.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.f.c){b4.ah(j,b4.Q.e)
b5=b4.a
n=b4.Q.e
b5.ai(b5.dD,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.ga6(n).dU(0)}b5=b5.id
b5.toString
b5.ao(n.ae(0,!0))}if(q.db){b4.ah(j,b4.ch)
b5=b4.a
n=b4.ch
b5.ai(b5.dE,n)
b5=q.r
if(b5.a){n=b4.a
m=b4.cx.f
n=n.dF
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.ah(j,b4.cx.e)
b5=b4.a
n=b4.cx.e
b5.ai(b5.dG,n)}b5=q.x
n=b5.a
if(!n)m=b5.c
else m=!0
if(m){m=b4.a
l=b4.cy.ch
m=m.dH
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.cy.f
n=n.dI
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.ah(j,b4.cy.e)
b5=b4.a
n=b4.cy.e
b5.ai(b5.dJ,n)}}b5=q.y
n=b5.a
m=!n
if(m)l=b5.c
else l=!0
if(l){if(n){n=b4.a
l=b4.db.f
n=n.dK
n.a.uniform1f(n.d,l)}if(b5.c){b4.ah(j,b4.db.e)
n=b4.a
l=b4.db.e
n.ai(n.dL,l)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){n=j[h]
if(!n.c&&n.d>=6){n.c=!0
o.activeTexture(33984+n.a)
o.bindTexture(34067,n.b)}}n=b7.e
n.c8(b6)
n.aX(b6)
n.iz(b6)
if(m)b5=b5.c
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
if(b5.c){b5.c=!1
o.activeTexture(33984+b5.a)
o.bindTexture(34067,null)}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.hI()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cY().aE}}
O.iz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dP(a,C.c.a2(b+3,4)*4))}}
O.iA.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.iB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.e_(a,C.c.a2(b+3,4)*4))}}
O.iC.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.iD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.eG(a,C.c.a2(b+3,4)*4))}}
O.iE.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.iF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.eS(a,C.c.a2(b+3,4)*4))}}
O.iG.prototype={
$2:function(a,b){return J.dH(a.a,b.a)}}
O.it.prototype={
aB:function(){var s,r=this
r.cO()
s=r.f
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.A(r.b,s,1)
s.b=!0
r.a.a_(s)}}}
O.cJ.prototype={
a_:function(a){return this.a.a_(a)},
bG:function(){return this.a_(null)},
aB:function(){},
c0:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aB()
s=q.a
s.a=null
s.a_(null)}}}
O.iu.prototype={}
O.aQ.prototype={
d8:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.A(q.b+".color",s,a)
r.b=!0
q.a.a_(r)}},
aB:function(){this.cO()
this.d8(new V.a0(1,1,1))},
saT:function(a,b){this.c0(new A.a2(!0,!1,this.c.c))
this.d8(b)}}
O.iw.prototype={}
O.ix.prototype={
aB:function(){var s,r=this
r.cP()
s=r.ch
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.A(r.b+".refraction",s,1)
s.b=!0
r.a.a_(s)}}}
O.iy.prototype={
d9:function(a){var s=this,r=s.ch
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.A(s.b+".shininess",r,a)
r.b=!0
s.a.a_(r)}},
aB:function(){this.cP()
this.d9(100)}}
O.f2.prototype={}
T.f5.prototype={}
T.ja.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.K():s}}
T.jb.prototype={
aN:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a_(s,"load",new T.jc(this,s,!1,b,!1,d,a),!1)},
h4:function(a,b,c){var s,r,q,p
b=V.lH(b)
s=V.lH(a.width)
r=V.lH(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kZ()
q.width=s
q.height=r
p=C.i.el(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qm(p.getImageData(0,0,q.width,q.height))}}}
T.jc.prototype={
$1:function(a){var s=this,r=s.a,q=r.h4(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.a3.it(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.hJ()}++r.e}}
X.kY.prototype={}
X.ib.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.K():s}}
X.eA.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.K():s},
aL:function(a){var s=this.f
if(s!=null)s.E(a)},
eL:function(){return this.aL(null)},
saW:function(a){var s,r,q=this
if(!J.H(q.b,a)){s=q.b
if(s!=null)s.gv().K(0,q.gcT())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gcT())
s=new D.A("mover",r,q.b)
s.b=!0
q.aL(s)}}}
X.j9.prototype={}
V.b4.prototype={
bj:function(a){this.b=new P.id(C.T)
this.c=null
this.d=H.d([],t.u)},
N:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.d([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.d([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eV(o,0,o.length)
l=m==null?o:m
C.R.en(n,H.lJ(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gay(k.d).push(n)}},
e5:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bo()
r.toString
q=new H.p(s)
q=new P.bG(r.cG(new H.bb(q,q.gm(q))).a())
for(;q.u();)p.bw(q.gB(q))}}
V.kO.prototype={
$1:function(a){var s=C.d.eg(this.a.ghU(),2)
if(s!=="0.00")P.lI(s+" fps")}}
V.dX.prototype={
bw:function(a){var s=this
switch(a.a){case"Class":s.N(a.b,"#551")
break
case"Comment":s.N(a.b,"#777")
break
case"Id":s.N(a.b,"#111")
break
case"Num":s.N(a.b,"#191")
break
case"Reserved":s.N(a.b,"#119")
break
case"String":s.N(a.b,"#171")
break
case"Symbol":s.N(a.b,"#616")
break
case"Type":s.N(a.b,"#B11")
break
case"Whitespace":s.N(a.b,"#111")
break}},
bo:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jg()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.t(new H.p('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.t(new H.p('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.t(new H.p('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b2())
r=a3.k(0,p).j(0,f)
s=K.t(new H.p("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.t(new H.p("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.t(new H.p("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b2())
r=a3.k(0,p).j(0,c)
s=K.t(new H.p("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.a9()
q=t.B
r.a=H.d([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.t(new H.p("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.a9()
r.a=H.d([],q)
s.a.push(r)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.t(new H.p(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.t(new H.p(" \n\t"))
s.a.push(r)
r=a3.k(0,n)
r.d=r.a.P("Num")
r=a3.k(0,l)
r.d=r.a.P("Num")
r=a3.k(0,k)
r.d=r.a.P("Symbol")
r=a3.k(0,h)
r.d=r.a.P("String")
r=a3.k(0,e)
r.d=r.a.P("String")
r=a3.k(0,a)
r.d=r.a.P(b)
r=a3.k(0,a2)
r.d=r.a.P(a2)
r=a3.k(0,o)
r=r.d=r.a.P(o)
s=t.i
r.aH(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aH(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aH(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e6.prototype={
bw:function(a){var s=this
switch(a.a){case"Builtin":s.N(a.b,"#411")
break
case"Comment":s.N(a.b,"#777")
break
case"Id":s.N(a.b,"#111")
break
case"Num":s.N(a.b,"#191")
break
case"Preprocess":s.N(a.b,"#737")
break
case"Reserved":s.N(a.b,"#119")
break
case"Symbol":s.N(a.b,"#611")
break
case"Type":s.N(a.b,"#171")
break
case"Whitespace":s.N(a.b,"#111")
break}},
bo:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jg()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.t(new H.p("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.t(new H.p("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b2())
r=c.k(0,h).j(0,g)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.a9()
q=t.B
r.a=H.d([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.t(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.a9()
s.a=H.d([],q)
r.a.push(s)
r=K.t(new H.p("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.t(new H.p(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.t(new H.p(" \n\t"))
r.a.push(s)
s=c.k(0,n)
s.d=s.a.P("Num")
s=c.k(0,l)
s.d=s.a.P("Num")
s=c.k(0,k)
s.d=s.a.P("Symbol")
s=c.k(0,g)
s.d=s.a.P(h)
s=c.k(0,e)
s.d=s.a.P(f)
s=c.k(0,d)
s.d=s.a.P(d)
s=c.k(0,o)
s=s.d=s.a.P(o)
r=t.i
s.aH(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aH(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aH(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e8.prototype={
bw:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.N(a.b,"#911")
s.N("=",r)
break
case"Id":s.N(a.b,r)
break
case"Other":s.N(a.b,r)
break
case"Reserved":s.N(a.b,"#119")
break
case"String":s.N(a.b,"#171")
break
case"Symbol":s.N(a.b,"#616")
break}},
bo:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jg()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.t(new H.p("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.t(new H.p("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.t(new H.p("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.t(new H.p('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.t(new H.p('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.t(new H.p("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.t(new H.p('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b2())
j.k(0,q).j(0,k).a.push(new K.b2())
s=j.k(0,k).j(0,k)
r=new K.a9()
r.a=H.d([],t.B)
s.a.push(r)
s=K.t(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.P("Symbol")
s=j.k(0,l)
s.d=s.a.P("String")
s=j.k(0,p)
r=s.a.P(p)
s.d=r
r.aH(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.P(o)
r=j.k(0,k)
r.d=r.a.P(k)
return j}}
V.eC.prototype={
e5:function(a,b){this.d=H.d([],t.u)
this.N(C.b.j(b,"\n"),"#111")},
bw:function(a){},
bo:function(){return null}}
V.iR.prototype={
dg:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.ms().gcC().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.df(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.kW(k.c).n(0,o)
m=W.o5("radio")
m.checked=q
m.name=s
W.a_(m,"change",new V.iS(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.kW(k.c).n(0,p.createElement("br"))},
b4:function(a,b,c){return this.dg(a,b,c,!1)},
df:function(a){var s,r,q=P.ms(),p=t.X,o=P.of(q.gcC(),p,p)
o.l(0,this.a,a)
s=q.eb(0,o)
p=window.history
r=s.gc5()
p.toString
p.replaceState(new P.k5([],[]).bA(""),"",r)}}
V.iS.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.df(s.d)}}}
V.j3.prototype={
eB:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a_(o,"scroll",new V.j5(m),!1)},
di:function(a){var s,r,q,p,o,n,m,l
this.h9()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hX(a)
q.toString
p=new H.p(p)
p=new P.bG(q.cG(new H.bb(p,p.gm(p))).a())
for(;p.u();){q=p.gB(p)
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
if(H.ni(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kd(C.x,q,C.e,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.f(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
ek:function(a){var s,r,q,p=new V.dX("dart")
p.bj("dart")
s=new V.e6("glsl")
s.bj("glsl")
r=new V.e8("html")
r.bj("html")
q=C.b.hQ(H.d([p,s,r],t.b7),new V.j6(a))
if(q!=null)return q
p=new V.eC("plain")
p.bj("plain")
return p},
dh:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dE(q).a4(q,"+")){b2[r]=C.a.ac(q,1)
a8.push(1)
s=!0}else if(C.a.a4(q,"-")){b2[r]=C.a.ac(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ek(b0)
p.e5(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kd(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lP()
h.href="#"+H.f(l)
h.textContent=a9
i.appendChild(h)
j.appendChild(i)
k.appendChild(j)
m.appendChild(k)
if(s)for(g=b1,f=g,r=0;e=p.d,r<e.length;++r){q=e[r]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className="codeLineNums codeLineLight"
b=o.createElement("td")
b.className=a6
if(r>=a8.length)return H.c(a8,r)
a=a8[r]
if(a===0){++f;++g
c.textContent=""+f
b.textContent=""+g}else if(a>0){d.className="codeTableRow codeLineLightGreen"
c.className="codeLineNums codeLineGreen codeLineCenter"
b.className="codeLineNums codeLineGreen";++g
c.textContent="+"
b.textContent=""+g}else if(a<0){d.className="codeTableRow codeLineLightRed"
c.className="codeLineNums codeLineRed"
b.className="codeLineNums codeLineRed codeLineCenter";++f
c.textContent=""+f
b.textContent="-"}a0=o.createElement("td")
a0.className=a7
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.o)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.o)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gR(q);a4.u();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hk:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h9:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jg()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.a9()
p=t.B
q.a=H.d([],p)
r.a.push(q)
r=K.t(new H.p("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.a9()
q.a=H.d([],p)
r.a.push(q)
r=K.t(new H.p("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.a9()
q.a=H.d([],p)
r.a.push(q)
r=K.t(new H.p("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.t(new H.p("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.t(new H.p("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.a9()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.a9()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b2())
q=s.k(0,g).j(0,g)
r=new K.a9()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.P(n)
q=s.k(0,l)
q.d=q.a.P(m)
q=s.k(0,"CodeEnd")
q.d=q.a.P(k)
q=s.k(0,h)
q.d=q.a.P("Link")
q=s.k(0,g)
q.d=q.a.P(g)
this.b=s}}
V.j5.prototype={
$1:function(a){P.mo(C.n,new V.j4(this.a))}}
V.j4.prototype={
$0:function(){var s=C.d.aq(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j6.prototype={
$1:function(a){return a.a===this.a}}
T.kG.prototype={
$0:function(){this.a.sag(0,F.lC(1,null,null,1))}}
T.kH.prototype={
$0:function(){this.a.sag(0,F.n5(!0,40,1))}}
T.kI.prototype={
$0:function(){this.a.sag(0,F.n5(!1,40,0))}}
T.kJ.prototype={
$0:function(){this.a.sag(0,F.nh(6,6))}}
T.kK.prototype={
$0:function(){this.a.sag(0,F.nj())}}
T.kL.prototype={
$0:function(){this.a.sag(0,F.qA())}}
T.kM.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.dh("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.dh("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.er=s.i
s=J.ba.prototype
s.eu=s.i
s=P.h.prototype
s.es=s.bB
s=W.E.prototype
s.bD=s.ak
s=W.dj.prototype
s.ev=s.aw
s=K.e7.prototype
s.eq=s.aG
s.cN=s.i
s=O.cJ.prototype
s.cO=s.aB
s=O.aQ.prototype
s.cP=s.aB})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pA","oa",21)
r(P,"qf","oM",8)
r(P,"qg","oN",8)
r(P,"qh","oO",8)
q(P,"n4","qa",9)
r(W,"rO","i0",22)
p(W,"qt",4,null,["$4"],["oP"],14,0)
p(W,"qu",4,null,["$4"],["oQ"],14,0)
var j
o(j=E.bv.prototype,"ge1",0,0,null,["$1","$0"],["e2","i6"],0,0)
o(j,"ge3",0,0,null,["$1","$0"],["e4","i7"],0,0)
o(j,"ge_",0,0,null,["$1","$0"],["e0","i5"],0,0)
o(j,"gdY",0,0,null,["$1","$0"],["dZ","i2"],0,0)
n(j,"gi0","i1",4)
n(j,"gi3","i4",4)
o(j=E.f6.prototype,"gcQ",0,0,null,["$1","$0"],["cS","cR"],0,0)
m(j,"gip","ec",9)
l(j=X.fp.prototype,"gfq","fs",5)
l(j,"gfe","ff",5)
l(j,"gfk","fl",2)
l(j,"gfv","fw",10)
l(j,"gft","fu",10)
l(j,"gfB","fC",2)
l(j,"gfF","fG",2)
l(j,"gfo","fp",2)
l(j,"gfD","fE",2)
l(j,"gfm","fn",2)
l(j,"gfH","fI",19)
l(j,"gfJ","fK",5)
l(j,"gfW","fX",6)
l(j,"gfS","fT",6)
l(j,"gfU","fV",6)
o(j=D.cA.prototype,"gd4",0,0,null,["$1","$0"],["d5","fz"],0,0)
l(j,"gfM","fN",20)
n(j,"gf8","f9",11)
n(j,"gfQ","fR",11)
o(D.bB.prototype,"gbF",0,0,null,["$1","$0"],["a8","eE"],0,0)
k(V.ab.prototype,"gm","b8",7)
k(V.F.prototype,"gm","b8",7)
k(V.d7.prototype,"gm","b8",7)
o(j=U.bR.prototype,"gaO",0,0,null,["$1","$0"],["G","a9"],0,0)
n(j,"geF","eG",12)
n(j,"gfO","fP",12)
o(j=U.d3.prototype,"gaO",0,0,null,["$1","$0"],["G","a9"],0,0)
l(j,"gbQ","bR",1)
l(j,"gbS","bT",1)
l(j,"gbU","bV",1)
o(j=U.d4.prototype,"gaO",0,0,null,["$1","$0"],["G","a9"],0,0)
l(j,"gbQ","bR",1)
l(j,"gbS","bT",1)
l(j,"gbU","bV",1)
l(j,"gf0","f1",1)
l(j,"gf2","f3",1)
l(j,"ghg","hh",1)
l(j,"ghe","hf",1)
l(j,"ghc","hd",1)
l(U.d5.prototype,"gf5","f6",1)
o(j=M.e1.prototype,"gau",0,0,null,["$1","$0"],["az","eH"],0,0)
n(j,"gfg","fh",4)
n(j,"gfi","fj",4)
o(j=O.el.prototype,"gbk",0,0,null,["$1","$0"],["a_","bG"],0,0)
o(j,"gh2",0,0,null,["$1","$0"],["d6","h3"],0,0)
n(j,"gfa","fb",13)
n(j,"gfc","fd",13)
o(O.cJ.prototype,"gbk",0,0,null,["$1","$0"],["a_","bG"],0,0)
o(X.eA.prototype,"gcT",0,0,null,["$1","$0"],["aL","eL"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.l8,J.a,J.a6,P.L,P.dc,P.h,H.bb,P.ea,H.cu,H.fm,H.cm,H.jj,H.iP,H.ha,H.bt,P.W,H.il,H.ei,H.ec,H.as,H.fN,P.dq,P.ca,P.bG,P.fv,P.cV,P.eX,P.cX,P.kh,P.di,P.jY,P.db,P.i,P.hp,P.cH,P.dT,P.ie,P.kf,P.ke,P.ax,P.ah,P.R,P.bu,P.ez,P.cU,P.fK,P.ia,P.az,P.n,P.I,P.aq,P.y,P.T,P.bH,P.ju,P.h4,W.hS,W.l3,W.lk,W.c9,W.M,W.cQ,W.dj,W.hf,W.cv,W.ak,W.k1,W.hq,P.k4,P.ds,P.h2,P.be,K.b2,K.e7,K.is,K.iT,K.iZ,L.eU,L.f7,L.f8,L.jf,O.ag,O.cK,E.hN,E.bv,E.bO,E.c_,E.fH,E.iU,E.f6,Z.ft,Z.jQ,Z.dR,Z.bT,Z.bf,D.hO,D.bP,D.U,X.dS,X.ee,X.ij,X.iq,X.ap,X.iL,X.jh,X.fp,D.dO,D.dZ,D.V,D.bB,D.eR,V.a0,V.aL,V.i3,V.em,V.aR,V.al,V.Q,V.bD,V.eJ,V.ab,V.F,V.d7,U.d3,U.d4,U.d5,M.e1,A.dL,A.hI,A.a2,A.dP,A.e_,A.eG,A.eS,A.iv,A.cZ,A.d_,A.d1,A.d2,A.fc,A.jr,F.e2,F.i7,F.eh,F.ik,F.eE,F.j_,F.j0,F.j1,F.j2,F.fq,F.jF,F.jG,F.jJ,F.jL,F.jM,F.jN,O.f2,O.cJ,O.iw,T.jb,X.kY,X.j9,X.eA,V.b4,V.iR,V.j3])
q(J.a,[J.eb,J.cz,J.ba,J.x,J.by,J.aN,H.cM,H.X,W.e,W.hG,W.bq,W.aM,W.J,W.fA,W.ao,W.hV,W.hW,W.fC,W.cq,W.fE,W.hX,W.j,W.fL,W.aA,W.ic,W.fP,W.bx,W.ip,W.iI,W.fT,W.fU,W.aC,W.fV,W.fX,W.aD,W.h0,W.h3,W.aE,W.h5,W.aF,W.hb,W.au,W.hh,W.je,W.aG,W.hj,W.ji,W.jz,W.hr,W.ht,W.hv,W.hx,W.hz,P.aO,P.fR,P.aT,P.fZ,P.iQ,P.hc,P.aV,P.hl,P.hJ,P.fx,P.eK,P.h8])
q(J.ba,[J.eB,J.bF,J.aB])
r(J.ih,J.x)
q(J.by,[J.cy,J.cx])
q(P.L,[H.ef,H.ev,H.ed,H.fl,H.eM,H.fI,P.dK,P.ew,P.af,P.fn,P.fk,P.c3,P.dU,P.dW])
r(P.cD,P.dc)
q(P.cD,[H.c5,W.fy,W.a1,P.e4])
r(H.p,H.c5)
q(P.h,[H.k,H.aP,H.aY,P.cw])
q(H.k,[H.cE,H.cB])
r(H.cr,H.aP)
q(P.ea,[H.ej,H.fu])
r(H.cI,H.cE)
r(H.cn,H.cm)
q(H.bt,[H.f1,H.ii,H.kz,H.kA,H.kB,P.jS,P.jR,P.jT,P.jU,P.ka,P.k9,P.kq,P.k_,P.k0,P.im,P.ir,P.jC,P.jD,P.hY,P.hZ,P.jy,P.jv,P.jw,P.jx,P.kc,P.kb,P.kl,P.kk,P.km,P.kn,W.i_,W.iJ,W.iK,W.iY,W.j8,W.jV,W.iN,W.iM,W.k2,W.k3,W.k8,W.kg,P.k6,P.k7,P.kr,P.i8,P.i9,P.hK,E.iV,E.iW,E.iX,E.jd,D.i5,D.i6,F.ki,F.ks,F.ku,F.kv,F.kw,F.kP,F.kQ,F.kR,F.kF,F.kt,F.jP,F.jO,F.jH,F.jI,O.iz,O.iA,O.iB,O.iC,O.iD,O.iE,O.iF,O.iG,T.jc,V.kO,V.iS,V.j5,V.j4,V.j6,T.kG,T.kH,T.kI,T.kJ,T.kK,T.kL,T.kM])
q(H.f1,[H.eV,H.bN])
r(P.cG,P.W)
q(P.cG,[H.C,W.fw])
r(H.bY,H.X)
q(H.bY,[H.de,H.dg])
r(H.df,H.de)
r(H.bA,H.df)
r(H.dh,H.dg)
r(H.cN,H.dh)
q(H.cN,[H.eq,H.er,H.es,H.et,H.eu,H.cO,H.bZ])
r(H.dr,H.fI)
r(P.dm,P.cw)
r(P.jZ,P.kh)
r(P.da,P.di)
r(P.dv,P.cH)
r(P.c6,P.dv)
q(P.dT,[P.hL,P.i1])
r(P.dV,P.eX)
q(P.dV,[P.hM,P.id,P.jE,P.jB])
r(P.jA,P.i1)
q(P.R,[P.Z,P.l])
q(P.af,[P.c1,P.e9])
r(P.fB,P.bH)
q(W.e,[W.w,W.e3,W.bV,W.at,W.dk,W.av,W.aa,W.dn,W.fs,W.c7,P.dN,P.b3])
q(W.w,[W.E,W.ay,W.c8])
q(W.E,[W.r,P.m])
q(W.r,[W.dI,W.dJ,W.bM,W.br,W.bs,W.b6,W.e5,W.bS,W.bU,W.eN,W.bd,W.cW,W.f_,W.f0,W.c4])
r(W.hR,W.aM)
r(W.co,W.fA)
q(W.ao,[W.hT,W.hU])
r(W.fD,W.fC)
r(W.cp,W.fD)
r(W.fF,W.fE)
r(W.e0,W.fF)
r(W.ai,W.bq)
r(W.fM,W.fL)
r(W.bQ,W.fM)
r(W.fQ,W.fP)
r(W.bw,W.fQ)
r(W.aX,W.j)
q(W.aX,[W.bz,W.aj,W.bE])
r(W.en,W.fT)
r(W.eo,W.fU)
r(W.fW,W.fV)
r(W.ep,W.fW)
r(W.fY,W.fX)
r(W.cP,W.fY)
r(W.h1,W.h0)
r(W.eD,W.h1)
r(W.eL,W.h3)
r(W.dl,W.dk)
r(W.eP,W.dl)
r(W.h6,W.h5)
r(W.eQ,W.h6)
r(W.eW,W.hb)
r(W.hi,W.hh)
r(W.f3,W.hi)
r(W.dp,W.dn)
r(W.f4,W.dp)
r(W.hk,W.hj)
r(W.f9,W.hk)
r(W.bg,W.aj)
r(W.hs,W.hr)
r(W.fz,W.hs)
r(W.d8,W.cq)
r(W.hu,W.ht)
r(W.fO,W.hu)
r(W.hw,W.hv)
r(W.dd,W.hw)
r(W.hy,W.hx)
r(W.h7,W.hy)
r(W.hA,W.hz)
r(W.he,W.hA)
r(W.fG,W.fw)
r(W.fJ,P.cV)
r(W.hg,W.dj)
r(P.k5,P.k4)
r(P.a7,P.h2)
r(P.fS,P.fR)
r(P.eg,P.fS)
r(P.h_,P.fZ)
r(P.ex,P.h_)
r(P.c2,P.m)
r(P.hd,P.hc)
r(P.eY,P.hd)
r(P.hm,P.hl)
r(P.fa,P.hm)
r(P.dM,P.fx)
r(P.ey,P.b3)
r(P.h9,P.h8)
r(P.eT,P.h9)
q(K.e7,[K.a9,L.fb])
q(E.hN,[Z.dQ,A.cT,T.f5])
q(D.U,[D.b8,D.b9,D.A,X.eF])
q(X.eF,[X.cF,X.bW,X.bX,X.cY])
q(O.ag,[D.cA,U.bR])
q(D.hO,[U.hP,U.S])
q(U.S,[U.cl,U.cS])
r(A.ek,A.cT)
q(A.fc,[A.fe,A.jo,A.jp,A.jq,A.jm,A.fd,A.jn,A.ff,A.fg,A.js,A.fh,A.d0,A.fi,A.fj])
r(F.j7,F.i7)
r(F.jl,F.ik)
r(F.jK,F.jL)
r(F.iO,F.jM)
r(O.el,O.f2)
q(O.cJ,[O.it,O.iu,O.aQ])
q(O.aQ,[O.ix,O.iy])
r(T.ja,T.f5)
r(X.ib,X.j9)
q(V.b4,[V.dX,V.e6,V.e8,V.eC])
s(H.c5,H.fm)
s(H.de,P.i)
s(H.df,H.cu)
s(H.dg,P.i)
s(H.dh,H.cu)
s(P.dc,P.i)
s(P.dv,P.hp)
s(W.fA,W.hS)
s(W.fC,P.i)
s(W.fD,W.M)
s(W.fE,P.i)
s(W.fF,W.M)
s(W.fL,P.i)
s(W.fM,W.M)
s(W.fP,P.i)
s(W.fQ,W.M)
s(W.fT,P.W)
s(W.fU,P.W)
s(W.fV,P.i)
s(W.fW,W.M)
s(W.fX,P.i)
s(W.fY,W.M)
s(W.h0,P.i)
s(W.h1,W.M)
s(W.h3,P.W)
s(W.dk,P.i)
s(W.dl,W.M)
s(W.h5,P.i)
s(W.h6,W.M)
s(W.hb,P.W)
s(W.hh,P.i)
s(W.hi,W.M)
s(W.dn,P.i)
s(W.dp,W.M)
s(W.hj,P.i)
s(W.hk,W.M)
s(W.hr,P.i)
s(W.hs,W.M)
s(W.ht,P.i)
s(W.hu,W.M)
s(W.hv,P.i)
s(W.hw,W.M)
s(W.hx,P.i)
s(W.hy,W.M)
s(W.hz,P.i)
s(W.hA,W.M)
s(P.fR,P.i)
s(P.fS,W.M)
s(P.fZ,P.i)
s(P.h_,W.M)
s(P.hc,P.i)
s(P.hd,W.M)
s(P.hl,P.i)
s(P.hm,W.M)
s(P.fx,P.W)
s(P.h8,P.i)
s(P.h9,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Z:"double",R:"num",y:"String",ax:"bool",aq:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U*])","~(U*)","~(aj*)","aq(@,@)","~(l*,h<bv*>*)","~(j*)","~(bE*)","Z*()","~(~())","~()","~(bz*)","~(l*,h<V*>*)","~(l*,h<S*>*)","~(l*,h<aR*>*)","ax(E,y,y,c9)","@(@)","aq(@)","aq(N?,N?)","be(@,@)","~(bg*)","ax*(h<V*>*)","l(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p8(v.typeUniverse,JSON.parse('{"aB":"ba","eB":"ba","bF":"ba","qJ":"j","qT":"j","qL":"b3","qK":"e","r_":"e","r1":"e","qI":"m","qU":"m","qM":"r","qX":"r","qV":"w","qS":"w","rr":"aa","qQ":"aX","qN":"ay","r2":"ay","r0":"aj","qW":"bw","qZ":"bA","qY":"X","eb":{"ax":[]},"ba":{"m0":[],"az":[]},"x":{"n":["1"],"k":["1"],"h":["1"]},"ih":{"x":["1"],"n":["1"],"k":["1"],"h":["1"]},"by":{"Z":[],"R":[]},"cy":{"Z":[],"l":[],"R":[]},"cx":{"Z":[],"R":[]},"aN":{"y":[]},"ef":{"L":[]},"p":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cE":{"k":["1"],"h":["1"]},"aP":{"h":["2"],"h.E":"2"},"cr":{"aP":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cI":{"cE":["2"],"k":["2"],"h":["2"],"h.E":"2"},"aY":{"h":["1"],"h.E":"1"},"c5":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cm":{"I":["1","2"]},"cn":{"I":["1","2"]},"ev":{"L":[]},"ed":{"L":[]},"fl":{"L":[]},"bt":{"az":[]},"f1":{"az":[]},"eV":{"az":[]},"bN":{"az":[]},"eM":{"L":[]},"C":{"W":["1","2"],"I":["1","2"]},"cB":{"k":["1"],"h":["1"],"h.E":"1"},"ec":{"mh":[]},"bY":{"z":["1"],"X":[]},"bA":{"i":["Z"],"z":["Z"],"n":["Z"],"X":[],"k":["Z"],"h":["Z"],"i.E":"Z"},"cN":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"]},"eq":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"er":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"es":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"et":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"eu":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"cO":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"bZ":{"i":["l"],"be":[],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"fI":{"L":[]},"dr":{"L":[]},"dq":{"cX":[]},"dm":{"h":["1"],"h.E":"1"},"da":{"di":["1"],"k":["1"],"h":["1"]},"cw":{"h":["1"]},"cD":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cG":{"W":["1","2"],"I":["1","2"]},"W":{"I":["1","2"]},"cH":{"I":["1","2"]},"c6":{"I":["1","2"]},"di":{"k":["1"],"h":["1"]},"Z":{"R":[]},"dK":{"L":[]},"ew":{"L":[]},"af":{"L":[]},"c1":{"L":[]},"e9":{"L":[]},"fn":{"L":[]},"fk":{"L":[]},"c3":{"L":[]},"dU":{"L":[]},"ez":{"L":[]},"cU":{"L":[]},"dW":{"L":[]},"l":{"R":[]},"n":{"k":["1"],"h":["1"]},"bH":{"fo":[]},"h4":{"fo":[]},"fB":{"fo":[]},"r":{"E":[],"w":[],"e":[]},"dI":{"E":[],"w":[],"e":[]},"dJ":{"E":[],"w":[],"e":[]},"bM":{"E":[],"w":[],"e":[]},"br":{"E":[],"w":[],"e":[]},"bs":{"E":[],"w":[],"e":[]},"ay":{"w":[],"e":[]},"b6":{"E":[],"w":[],"e":[]},"cp":{"i":["a7<R>"],"n":["a7<R>"],"z":["a7<R>"],"k":["a7<R>"],"h":["a7<R>"],"i.E":"a7<R>"},"cq":{"a7":["R"]},"e0":{"i":["y"],"n":["y"],"z":["y"],"k":["y"],"h":["y"],"i.E":"y"},"fy":{"i":["E"],"n":["E"],"k":["E"],"h":["E"],"i.E":"E"},"E":{"w":[],"e":[]},"ai":{"bq":[]},"bQ":{"i":["ai"],"n":["ai"],"z":["ai"],"k":["ai"],"h":["ai"],"i.E":"ai"},"e3":{"e":[]},"e5":{"E":[],"w":[],"e":[]},"bw":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"bS":{"E":[],"w":[],"e":[]},"bU":{"E":[],"w":[],"e":[]},"bz":{"j":[]},"bV":{"e":[]},"en":{"W":["y","@"],"I":["y","@"]},"eo":{"W":["y","@"],"I":["y","@"]},"ep":{"i":["aC"],"n":["aC"],"z":["aC"],"k":["aC"],"h":["aC"],"i.E":"aC"},"aj":{"j":[]},"a1":{"i":["w"],"n":["w"],"k":["w"],"h":["w"],"i.E":"w"},"w":{"e":[]},"cP":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"eD":{"i":["aD"],"n":["aD"],"z":["aD"],"k":["aD"],"h":["aD"],"i.E":"aD"},"eL":{"W":["y","@"],"I":["y","@"]},"eN":{"E":[],"w":[],"e":[]},"at":{"e":[]},"eP":{"i":["at"],"n":["at"],"z":["at"],"e":[],"k":["at"],"h":["at"],"i.E":"at"},"eQ":{"i":["aE"],"n":["aE"],"z":["aE"],"k":["aE"],"h":["aE"],"i.E":"aE"},"eW":{"W":["y","y"],"I":["y","y"]},"bd":{"E":[],"w":[],"e":[]},"cW":{"E":[],"w":[],"e":[]},"f_":{"E":[],"w":[],"e":[]},"f0":{"E":[],"w":[],"e":[]},"c4":{"E":[],"w":[],"e":[]},"av":{"e":[]},"aa":{"e":[]},"f3":{"i":["aa"],"n":["aa"],"z":["aa"],"k":["aa"],"h":["aa"],"i.E":"aa"},"f4":{"i":["av"],"n":["av"],"z":["av"],"e":[],"k":["av"],"h":["av"],"i.E":"av"},"bE":{"j":[]},"f9":{"i":["aG"],"n":["aG"],"z":["aG"],"k":["aG"],"h":["aG"],"i.E":"aG"},"aX":{"j":[]},"fs":{"e":[]},"bg":{"aj":[],"j":[]},"c7":{"e":[]},"c8":{"w":[],"e":[]},"fz":{"i":["J"],"n":["J"],"z":["J"],"k":["J"],"h":["J"],"i.E":"J"},"d8":{"a7":["R"]},"fO":{"i":["aA?"],"n":["aA?"],"z":["aA?"],"k":["aA?"],"h":["aA?"],"i.E":"aA?"},"dd":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"h7":{"i":["aF"],"n":["aF"],"z":["aF"],"k":["aF"],"h":["aF"],"i.E":"aF"},"he":{"i":["au"],"n":["au"],"z":["au"],"k":["au"],"h":["au"],"i.E":"au"},"fw":{"W":["y","y"],"I":["y","y"]},"fG":{"W":["y","y"],"I":["y","y"]},"c9":{"ak":[]},"cQ":{"ak":[]},"dj":{"ak":[]},"hg":{"ak":[]},"hf":{"ak":[]},"ds":{"bx":[]},"e4":{"i":["E"],"n":["E"],"k":["E"],"h":["E"],"i.E":"E"},"a7":{"h2":["1"]},"eg":{"i":["aO"],"n":["aO"],"k":["aO"],"h":["aO"],"i.E":"aO"},"ex":{"i":["aT"],"n":["aT"],"k":["aT"],"h":["aT"],"i.E":"aT"},"c2":{"m":[],"E":[],"w":[],"e":[]},"eY":{"i":["y"],"n":["y"],"k":["y"],"h":["y"],"i.E":"y"},"m":{"E":[],"w":[],"e":[]},"fa":{"i":["aV"],"n":["aV"],"k":["aV"],"h":["aV"],"i.E":"aV"},"be":{"n":["l"],"k":["l"],"h":["l"]},"dM":{"W":["y","@"],"I":["y","@"]},"dN":{"e":[]},"b3":{"e":[]},"ey":{"e":[]},"eT":{"i":["I<@,@>"],"n":["I<@,@>"],"k":["I<@,@>"],"h":["I<@,@>"],"i.E":"I<@,@>"},"ag":{"h":["1*"],"ag.T":"1"},"b8":{"U":[]},"b9":{"U":[]},"A":{"U":[]},"cF":{"U":[]},"bW":{"U":[]},"bX":{"U":[]},"eF":{"U":[]},"cY":{"U":[]},"dO":{"V":[]},"dZ":{"V":[]},"cA":{"ag":["V*"],"h":["V*"],"ag.T":"V*"},"bB":{"V":[]},"eR":{"V":[]},"cl":{"S":[]},"bR":{"ag":["S*"],"S":[],"h":["S*"],"ag.T":"S*"},"cS":{"S":[]},"d3":{"S":[]},"d4":{"S":[]},"d5":{"S":[]},"ek":{"cT":[]},"dX":{"b4":[]},"e6":{"b4":[]},"e8":{"b4":[]},"eC":{"b4":[]}}'))
H.p7(v.typeUniverse,JSON.parse('{"a6":1,"k":1,"bb":1,"ej":2,"fu":1,"cu":1,"fm":1,"c5":1,"cm":2,"ei":1,"bY":1,"bG":1,"cV":1,"eX":2,"db":1,"cw":1,"cD":1,"cG":2,"hp":2,"cH":2,"dc":1,"dv":2,"dT":2,"dV":2,"ea":1,"fJ":1,"M":1,"cv":1,"b8":1,"b9":1,"A":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lD
return{D:s("bM"),d:s("bq"),Y:s("br"),G:s("k<@>"),h:s("E"),C:s("L"),aD:s("j"),c8:s("ai"),bX:s("bQ"),Z:s("az"),v:s("bx"),fS:s("bS"),gk:s("bU"),o:s("x<ak>"),s:s("x<y>"),gn:s("x<@>"),t:s("x<l>"),x:s("x<dL*>"),bb:s("x<dO*>"),am:s("x<dP*>"),g0:s("x<dQ*>"),b7:s("x<b4*>"),cP:s("x<dZ*>"),M:s("x<e_*>"),k:s("x<b6*>"),b:s("x<e2*>"),aZ:s("x<bT*>"),L:s("x<eh*>"),u:s("x<n<b6*>*>"),B:s("x<is*>"),h8:s("x<aR*>"),eb:s("x<bB*>"),cS:s("x<al*>"),d1:s("x<eG*>"),p:s("x<eE*>"),du:s("x<eR*>"),cz:s("x<eS*>"),eG:s("x<cV<N*>*>"),i:s("x<y*>"),fG:s("x<f2*>"),bw:s("x<f5*>"),br:s("x<fb*>"),fj:s("x<fc*>"),d6:s("x<cZ*>"),dv:s("x<d_*>"),hg:s("x<d0*>"),by:s("x<d1*>"),fF:s("x<d2*>"),j:s("x<fq*>"),m:s("x<Z*>"),V:s("x<l*>"),f:s("x<~(U*)*>"),T:s("cz"),eH:s("m0"),g:s("aB"),aU:s("z<@>"),h9:s("C<y*,cT*>"),cn:s("C<y*,eU*>"),dO:s("C<y*,y*>"),dL:s("C<y*,f8*>"),en:s("C<l*,n<cZ*>*>"),af:s("C<l*,n<d_*>*>"),gr:s("C<l*,n<d1*>*>"),gb:s("C<l*,n<d2*>*>"),J:s("C<l*,fe*>"),E:s("C<l*,ax*>"),a:s("C<l*,l*>"),aH:s("n<@>"),eO:s("I<@,@>"),eM:s("cI<y*,y>"),bK:s("bV"),bZ:s("cM"),dD:s("X"),bm:s("bZ"),P:s("aq"),K:s("N"),q:s("a7<R>"),fv:s("mh"),ew:s("c2"),N:s("y"),g7:s("m"),bY:s("bd"),aW:s("c4"),aF:s("cX"),gc:s("be"),ak:s("bF"),U:s("c6<y,y>"),R:s("fo"),gH:s("c8"),ac:s("a1"),cJ:s("ax"),gR:s("Z"),z:s("@"),S:s("l"),fr:s("bs*"),l:s("bv*"),gj:s("V*"),dn:s("cF*"),hc:s("aR*"),c:s("bW*"),F:s("bX*"),ah:s("S*"),A:s("0&*"),_:s("N*"),X:s("y*"),eB:s("f7*"),eP:s("cY*"),n:s("fd*"),r:s("ff*"),y:s("fg*"),O:s("fh*"),I:s("d0*"),w:s("fi*"),Q:s("fj*"),e:s("l*"),dm:s("~(U*)*"),bG:s("m_<aq>?"),W:s("N?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.br.prototype
C.i=W.bs.prototype
C.R=W.b6.prototype
C.U=J.a.prototype
C.b=J.x.prototype
C.V=J.cx.prototype
C.c=J.cy.prototype
C.j=J.cz.prototype
C.d=J.by.prototype
C.a=J.aN.prototype
C.W=J.aB.prototype
C.C=J.eB.prototype
C.a3=P.eK.prototype
C.D=W.cW.prototype
C.p=J.bF.prototype
C.E=W.bg.prototype
C.F=W.c7.prototype
C.G=new E.bO("Browser.chrome")
C.r=new E.bO("Browser.firefox")
C.t=new E.bO("Browser.edge")
C.H=new E.bO("Browser.other")
C.a6=new P.hM()
C.I=new P.hL()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=function() {
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
C.O=function(getTagFallback) {
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
C.K=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.L=function(hooks) {
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
C.N=function(hooks) {
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
C.M=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.P=new P.ez()
C.e=new P.jA()
C.Q=new P.jE()
C.f=new P.jZ()
C.n=new P.bu(0)
C.S=new P.bu(5e6)
C.T=new P.ie("element",!1,!1,!1)
C.k=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.X=H.d(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Y=H.d(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.d(s([]),t.i)
C.Z=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.d(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.d(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a_=new H.cn(0,{},C.w,H.lD("cn<y*,y*>"))
C.a0=new E.c_("OperatingSystem.windows")
C.B=new E.c_("OperatingSystem.mac")
C.a1=new E.c_("OperatingSystem.linux")
C.a2=new E.c_("OperatingSystem.other")
C.a4=new P.jB(!1)
C.a5=new P.ca(null,2)})();(function staticFields(){$.mH=null
$.aK=0
$.lU=null
$.lT=null
$.n9=null
$.n3=null
$.nf=null
$.kx=null
$.kD=null
$.lF=null
$.ce=null
$.dA=null
$.dB=null
$.lz=!1
$.aH=C.f
$.ac=H.d([],H.lD("x<N>"))
$.b7=null
$.l1=null
$.lZ=null
$.lY=null
$.d9=P.lb(t.N,t.Z)
$.i2=null
$.iH=null
$.ma=null
$.aU=null
$.mj=null
$.mw=null
$.mB=null
$.my=null
$.mz=null
$.mA=null
$.mx=null
$.mC=null
$.m9=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qR","nn",function(){return H.qs("_$dart_dartClosure")})
s($,"r3","no",function(){return H.aW(H.jk({
toString:function(){return"$receiver$"}}))})
s($,"r4","np",function(){return H.aW(H.jk({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"r5","nq",function(){return H.aW(H.jk(null))})
s($,"r6","nr",function(){return H.aW(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r9","nu",function(){return H.aW(H.jk(void 0))})
s($,"ra","nv",function(){return H.aW(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r8","nt",function(){return H.aW(H.mq(null))})
s($,"r7","ns",function(){return H.aW(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rc","nx",function(){return H.aW(H.mq(void 0))})
s($,"rb","nw",function(){return H.aW(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rs","lL",function(){return P.oL()})
s($,"rd","ny",function(){return new P.jC().$0()})
s($,"re","nz",function(){return new P.jD().$0()})
s($,"rt","nD",function(){return new Int8Array(H.cc(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rw","nF",function(){return P.ow("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rM","nG",function(){return P.pt()})
s($,"ru","nE",function(){return P.m2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rl","nC",function(){return Z.aw(0)})
s($,"rf","nA",function(){return Z.aw(511)})
s($,"rn","bo",function(){return Z.aw(1)})
s($,"rm","bn",function(){return Z.aw(2)})
s($,"rh","bm",function(){return Z.aw(4)})
s($,"ro","bK",function(){return Z.aw(8)})
s($,"rp","bp",function(){return Z.aw(16)})
s($,"ri","dF",function(){return Z.aw(32)})
s($,"rj","dG",function(){return Z.aw(64)})
s($,"rk","nB",function(){return Z.aw(96)})
s($,"rq","cj",function(){return Z.aw(128)})
s($,"rg","bl",function(){return Z.aw(256)})
s($,"qP","nm",function(){return new V.i3()})
s($,"qO","D",function(){return $.nm()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cM,DataView:H.X,ArrayBufferView:H.X,Float32Array:H.bA,Float64Array:H.bA,Int16Array:H.eq,Int32Array:H.er,Int8Array:H.es,Uint16Array:H.et,Uint32Array:H.eu,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.bZ,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hG,HTMLAnchorElement:W.dI,HTMLAreaElement:W.dJ,HTMLBaseElement:W.bM,Blob:W.bq,HTMLBodyElement:W.br,HTMLCanvasElement:W.bs,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.hR,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.co,MSStyleCSSProperties:W.co,CSS2Properties:W.co,CSSImageValue:W.ao,CSSKeywordValue:W.ao,CSSNumericValue:W.ao,CSSPositionValue:W.ao,CSSResourceValue:W.ao,CSSUnitValue:W.ao,CSSURLImageValue:W.ao,CSSStyleValue:W.ao,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.hT,CSSUnparsedValue:W.hU,DataTransferItemList:W.hV,HTMLDivElement:W.b6,DOMException:W.hW,ClientRectList:W.cp,DOMRectList:W.cp,DOMRectReadOnly:W.cq,DOMStringList:W.e0,DOMTokenList:W.hX,Element:W.E,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.bQ,FileWriter:W.e3,HTMLFormElement:W.e5,Gamepad:W.aA,History:W.ic,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,ImageData:W.bx,HTMLImageElement:W.bS,HTMLInputElement:W.bU,KeyboardEvent:W.bz,Location:W.ip,MediaList:W.iI,MessagePort:W.bV,MIDIInputMap:W.en,MIDIOutputMap:W.eo,MimeType:W.aC,MimeTypeArray:W.ep,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aD,PluginArray:W.eD,RTCStatsReport:W.eL,HTMLSelectElement:W.eN,SourceBuffer:W.at,SourceBufferList:W.eP,SpeechGrammar:W.aE,SpeechGrammarList:W.eQ,SpeechRecognitionResult:W.aF,Storage:W.eW,CSSStyleSheet:W.au,StyleSheet:W.au,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.cW,HTMLTableRowElement:W.f_,HTMLTableSectionElement:W.f0,HTMLTemplateElement:W.c4,TextTrack:W.av,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.f3,TextTrackList:W.f4,TimeRanges:W.je,Touch:W.aG,TouchEvent:W.bE,TouchList:W.f9,TrackDefaultList:W.ji,CompositionEvent:W.aX,FocusEvent:W.aX,TextEvent:W.aX,UIEvent:W.aX,URL:W.jz,VideoTrackList:W.fs,WheelEvent:W.bg,Window:W.c7,DOMWindow:W.c7,Attr:W.c8,CSSRuleList:W.fz,ClientRect:W.d8,DOMRect:W.d8,GamepadList:W.fO,NamedNodeMap:W.dd,MozNamedAttrMap:W.dd,SpeechRecognitionResultList:W.h7,StyleSheetList:W.he,SVGLength:P.aO,SVGLengthList:P.eg,SVGNumber:P.aT,SVGNumberList:P.ex,SVGPointList:P.iQ,SVGScriptElement:P.c2,SVGStringList:P.eY,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aV,SVGTransformList:P.fa,AudioBuffer:P.hJ,AudioParamMap:P.dM,AudioTrackList:P.dN,AudioContext:P.b3,webkitAudioContext:P.b3,BaseAudioContext:P.b3,OfflineAudioContext:P.ey,WebGL2RenderingContext:P.eK,SQLResultSetRowList:P.eT})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.nd,[])
else T.nd([])})})()
//# sourceMappingURL=test.dart.js.map
