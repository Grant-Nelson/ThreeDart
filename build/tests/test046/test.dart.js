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
a[c]=function(){a[c]=function(){H.nF(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jB(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jg:function jg(){},
lx:function(a,b){if(t.U.b(a))return new H.bU(a,b)
return new H.aZ(a,b)},
jW:function(){return new P.dO("No element")},
lS:function(a,b){var s=J.bf(a)
if(typeof s!=="number")return s.a1()
H.dJ(a,0,s-1,b)},
dJ:function(a,b,c,d){if(c-b<=32)H.lR(a,b,c,d)
else H.lQ(a,b,c,d)},
lR:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b9(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a0()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
lQ:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.Z(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.Z(a6+a7,2),d=e-h,c=e+h,b=J.b9(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.B(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a6()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a0()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
q=m
r=l
break}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.a6()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a0()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a0()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a6()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.k(a5,a6,b.h(a5,a4))
b.k(a5,a4,a0)
a4=q+1
b.k(a5,a7,b.h(a5,a4))
b.k(a5,a4,a2)
H.dJ(a5,a6,r-2,a8)
H.dJ(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.B(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.B(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a6()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.dJ(a5,r,q,a8)}else H.dJ(a5,r,q,a8)},
H:function H(a){this.a=a},
i:function i(){},
bp:function bp(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aZ:function aZ(a,b){this.a=a
this.b=b},
bU:function bU(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=null
this.b=a
this.c=b},
ck:function ck(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=b},
bX:function bX(){},
ec:function ec(){},
bB:function bB(){},
kS:function(a){var s,r=H.kR(a)
if(r!=null)return r
s="minified:"+a
return s},
nw:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
e:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
if(typeof s!="string")throw H.c(H.aL(a))
return s},
cc:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dB:function(a){return H.lA(a)},
lA:function(a){var s,r,q
if(a instanceof P.G)return H.a1(H.cN(a),null)
if(J.cM(a)===C.F||t.o.b(a)){s=C.m(a)
if(H.k8(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.k8(q))return q}}return H.a1(H.cN(a),null)},
k8:function(a){var s=a!=="Object"&&a!==""
return s},
k7:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lK:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(!H.cI(q))throw H.c(H.aL(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b2(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aL(q))}return H.k7(p)},
lJ:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cI(q))throw H.c(H.aL(q))
if(q<0)throw H.c(H.aL(q))
if(q>65535)return H.lK(a)}return H.k7(a)},
lI:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.b2(s,10))>>>0,56320|s&1023)}throw H.c(P.aC(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lH:function(a){var s=H.bx(a).getFullYear()+0
return s},
lF:function(a){var s=H.bx(a).getMonth()+1
return s},
lB:function(a){var s=H.bx(a).getDate()+0
return s},
lC:function(a){var s=H.bx(a).getHours()+0
return s},
lE:function(a){var s=H.bx(a).getMinutes()+0
return s},
lG:function(a){var s=H.bx(a).getSeconds()+0
return s},
lD:function(a){var s=H.bx(a).getMilliseconds()+0
return s},
o:function(a){throw H.c(H.aL(a))},
d:function(a,b){if(a==null)J.bf(a)
throw H.c(H.bI(a,b))},
bI:function(a,b){var s,r,q="index"
if(!H.cI(b))return new P.a2(!0,b,q,null)
s=J.bf(a)
if(!(b<0)){if(typeof s!=="number")return H.o(s)
r=b>=s}else r=!0
if(r)return P.F(b,a,q,null,s)
return P.dC(b,q)},
nl:function(a,b,c){if(a>c)return P.aC(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aC(b,a,c,"end",null)
return new P.a2(!0,b,"end",null)},
aL:function(a){return new P.a2(!0,a,null,null)},
ng:function(a){if(typeof a!="number")throw H.c(H.aL(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dt()
s=new Error()
s.dartException=a
r=H.nG
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nG:function(){return J.Z(this.dartException)},
n:function(a){throw H.c(a)},
l:function(a){throw H.c(P.bO(a))},
ar:function(a){var s,r,q,p,o,n
a=H.kO(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.i3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
i4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ki:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
k2:function(a,b){return new H.ds(a,b==null?null:b.method)},
jh:function(a,b){var s=b==null,r=s?null:b.method
return new H.db(a,r,s?null:b.receiver)},
fk:function(a){if(a==null)return new H.ht(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bb(a,a.dartException)
return H.nc(a)},
bb:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nc:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b2(r,16)&8191)===10)switch(q){case 438:return H.bb(a,H.jh(H.e(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bb(a,H.k2(H.e(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.kV()
o=$.kW()
n=$.kX()
m=$.kY()
l=$.l0()
k=$.l1()
j=$.l_()
$.kZ()
i=$.l3()
h=$.l2()
g=p.a8(s)
if(g!=null)return H.bb(a,H.jh(s,g))
else{g=o.a8(s)
if(g!=null){g.method="call"
return H.bb(a,H.jh(s,g))}else{g=n.a8(s)
if(g==null){g=m.a8(s)
if(g==null){g=l.a8(s)
if(g==null){g=k.a8(s)
if(g==null){g=j.a8(s)
if(g==null){g=m.a8(s)
if(g==null){g=i.a8(s)
if(g==null){g=h.a8(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bb(a,H.k2(s,g))}}return H.bb(a,new H.eb(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cd()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bb(a,new P.a2(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cd()
return a},
jD:function(a){var s
if(a==null)return new H.eW(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.eW(a)},
nn:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nv:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nv)
a.$identity=s
return s},
ll:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hO().constructor.prototype):Object.create(new H.bL(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ah
if(typeof r!=="number")return r.u()
$.ah=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jR(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lh(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jR(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lh:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kJ,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lf:H.le
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
li:function(a,b,c,d){var s=H.jQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jR:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lk(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.li(r,!p,s,b)
if(r===0){p=$.ah
if(typeof p!=="number")return p.u()
$.ah=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.e(H.j7())+";return "+n+"."+H.e(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ah
if(typeof p!=="number")return p.u()
$.ah=p+1
m+=p
return new Function("return function("+m+"){return this."+H.e(H.j7())+"."+H.e(s)+"("+m+");}")()},
lj:function(a,b,c,d){var s=H.jQ,r=H.lg
switch(b?-1:a){case 0:throw H.c(new H.dF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lk:function(a,b){var s,r,q,p,o,n,m=H.j7(),l=$.jO
if(l==null)l=$.jO=H.jN("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lj(r,!p,s,b)
if(r===1){p="return function(){return this."+H.e(m)+"."+H.e(s)+"(this."+l+");"
o=$.ah
if(typeof o!=="number")return o.u()
$.ah=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.e(m)+"."+H.e(s)+"(this."+l+", "+n+");"
o=$.ah
if(typeof o!=="number")return o.u()
$.ah=o+1
return new Function(p+o+"}")()},
jB:function(a,b,c,d,e,f,g){return H.ll(a,b,c,d,!!e,!!f,g)},
le:function(a,b){return H.f7(v.typeUniverse,H.cN(a.a),b)},
lf:function(a,b){return H.f7(v.typeUniverse,H.cN(a.c),b)},
jQ:function(a){return a.a},
lg:function(a){return a.c},
j7:function(){var s=$.jP
return s==null?$.jP=H.jN("self"):s},
jN:function(a){var s,r,q,p=new H.bL("self","target","receiver","name"),o=J.jf(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.j6("Field name "+a+" not found."))},
nF:function(a){throw H.c(new P.d0(a))},
nr:function(a){return v.getIsolateTag(a)},
oI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ny:function(a){var s,r,q,p,o,n=$.kI.$1(a),m=$.iU[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kG.$2(a,n)
if(q!=null){m=$.iU[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.j0(s)
$.iU[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iY[n]=s
return s}if(p==="-"){o=H.j0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kM(a,s)
if(p==="*")throw H.c(P.kj(n))
if(v.leafTags[n]===true){o=H.j0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kM(a,s)},
kM:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j0:function(a){return J.jG(a,!1,null,!!a.$iq)},
nz:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.j0(s)
else return J.jG(s,c,null,null)},
nt:function(){if(!0===$.jE)return
$.jE=!0
H.nu()},
nu:function(){var s,r,q,p,o,n,m,l
$.iU=Object.create(null)
$.iY=Object.create(null)
H.ns()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kN.$1(o)
if(n!=null){m=H.nz(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ns:function(){var s,r,q,p,o,n,m=C.w()
m=H.bG(C.x,H.bG(C.y,H.bG(C.n,H.bG(C.n,H.bG(C.z,H.bG(C.A,H.bG(C.B(C.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kI=new H.iV(p)
$.kG=new H.iW(o)
$.kN=new H.iX(n)},
bG:function(a,b){return a(b)||b},
lt:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fU("Illegal RegExp pattern ("+String(n)+")",a))},
kP:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nm:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kQ:function(a,b,c){var s=H.nD(a,b,c)
return s},
nD:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kO(b),'g'),H.nm(c))},
i3:function i3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ds:function ds(a,b){this.a=a
this.b=b},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a){this.a=a},
ht:function ht(a){this.a=a},
eW:function eW(a){this.a=a
this.b=null},
bh:function bh(){},
hS:function hS(){},
hO:function hO(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a){this.a=a},
r:function r(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h_:function h_(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b
this.c=null},
ay:function ay(a){this.a=a},
de:function de(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function(a){return a},
at:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bI(b,a))},
mq:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nl(a,b,c))
return b},
c9:function c9(){},
bu:function bu(){},
b0:function b0(){},
c8:function c8(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
ca:function ca(){},
dr:function dr(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
lO:function(a,b){var s=b.c
return s==null?b.c=H.jw(a,b.z,!0):s},
kc:function(a,b){var s=b.c
return s==null?b.c=H.cD(a,"jV",[b.z]):s},
kd:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kd(a.z)
return s===11||s===12},
lN:function(a){return a.cy},
no:function(a){return H.jx(v.typeUniverse,a,!1)},
aK:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.kx(a,r,!0)
case 7:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.jw(a,r,!0)
case 8:s=b.z
r=H.aK(a,s,a0,a1)
if(r===s)return b
return H.kw(a,r,!0)
case 9:q=b.Q
p=H.cL(a,q,a0,a1)
if(p===q)return b
return H.cD(a,b.z,p)
case 10:o=b.z
n=H.aK(a,o,a0,a1)
m=b.Q
l=H.cL(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ju(a,n,l)
case 11:k=b.z
j=H.aK(a,k,a0,a1)
i=b.Q
h=H.n9(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kv(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cL(a,g,a0,a1)
o=b.z
n=H.aK(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jv(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fn("Attempted to substitute unexpected RTI kind "+c))}},
cL:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aK(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
na:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aK(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
n9:function(a,b,c,d){var s,r=b.a,q=H.cL(a,r,c,d),p=b.b,o=H.cL(a,p,c,d),n=b.c,m=H.na(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.ez()
s.a=q
s.b=o
s.c=m
return s},
oK:function(a,b){a[v.arrayRti]=b
return a},
nh:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kJ(s)
return a.$S()}return null},
kK:function(a,b){var s
if(H.kd(b))if(a instanceof H.bh){s=H.nh(a)
if(s!=null)return s}return H.cN(a)},
cN:function(a){var s
if(a instanceof P.G){s=a.$ti
return s!=null?s:H.jy(a)}if(Array.isArray(a))return H.mm(a)
return H.jy(J.cM(a))},
mm:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mw:function(a){var s=a.$ti
return s!=null?s:H.jy(a)},
jy:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mx(a,s)},
mx:function(a,b){var s=a instanceof H.bh?a.__proto__.__proto__.constructor:b,r=H.mk(v.typeUniverse,s.name)
b.$ccache=r
return r},
kJ:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jx(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mv:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cH(q,a,H.mB)
if(!H.au(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cH(q,a,H.mE)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cI
else if(s===t.d||s===t.H)r=H.mA
else if(s===t.N)r=H.mC
else r=s===t.v?H.kC:null
if(r!=null)return H.cH(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.nx)){q.r="$i"+p
return H.cH(q,a,H.mD)}}else if(p===7)return H.cH(q,a,H.mt)
return H.cH(q,a,H.mr)},
cH:function(a,b,c){a.b=c
return a.b(b)},
mu:function(a){var s,r,q=this
if(!H.au(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mp
else if(q===t.K)r=H.mn
else r=H.ms
q.a=r
return q.a(a)},
n2:function(a){var s,r=a.y
if(!H.au(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mr:function(a){var s=this
if(a==null)return H.n2(s)
return H.L(v.typeUniverse,H.kK(a,s),null,s,null)},
mt:function(a){if(a==null)return!0
return this.z.b(a)},
mD:function(a){var s=this,r=s.r
if(a instanceof P.G)return!!a[r]
return!!J.cM(a)[r]},
oH:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kA(a,s)},
ms:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kA(a,s)},
kA:function(a,b){throw H.c(H.ma(H.kp(a,H.kK(a,b),H.a1(b,null))))},
kp:function(a,b,c){var s=P.fN(a),r=H.a1(b==null?H.cN(a):b,null)
return s+": type '"+H.e(r)+"' is not a subtype of type '"+H.e(c)+"'"},
ma:function(a){return new H.cB("TypeError: "+a)},
U:function(a,b){return new H.cB("TypeError: "+H.kp(a,null,b))},
mB:function(a){return a!=null},
mn:function(a){return a},
mE:function(a){return!0},
mp:function(a){return a},
kC:function(a){return!0===a||!1===a},
ot:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.U(a,"bool"))},
ov:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool"))},
ou:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool?"))},
ow:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"double"))},
oy:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double"))},
ox:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double?"))},
cI:function(a){return typeof a=="number"&&Math.floor(a)===a},
oz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.U(a,"int"))},
oB:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int"))},
oA:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int?"))},
mA:function(a){return typeof a=="number"},
oC:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"num"))},
oE:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num"))},
oD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num?"))},
mC:function(a){return typeof a=="string"},
oF:function(a){if(typeof a=="string")return a
throw H.c(H.U(a,"String"))},
mo:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String"))},
oG:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String?"))},
n5:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.u(r,H.a1(a[q],b))
return s},
kB:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.b.u(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.u(" extends ",H.a1(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a1(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.u(a3,H.a1(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.u(a3,H.a1(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jK(H.a1(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.e(a1)},
a1:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a1(a.z,b)
return s}if(l===7){r=a.z
s=H.a1(r,b)
q=r.y
return J.jK(q===11||q===12?C.b.u("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.e(H.a1(a.z,b))+">"
if(l===9){p=H.nb(a.z)
o=a.Q
return o.length!==0?p+("<"+H.n5(o,b)+">"):p}if(l===11)return H.kB(a,b,null)
if(l===12)return H.kB(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nb:function(a){var s,r=H.kR(a)
if(r!=null)return r
s="minified:"+a
return s},
ky:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mk:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jx(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cE(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cD(a,b,q)
n[b]=o
return o}else return m},
mi:function(a,b){return H.kz(a.tR,b)},
mh:function(a,b){return H.kz(a.eT,b)},
jx:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.ku(H.ks(a,null,b,c))
r.set(b,s)
return s},
f7:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.ku(H.ks(a,b,c,!0))
q.set(c,r)
return r},
mj:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ju(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aJ:function(a,b){b.a=H.mu
b.b=H.mv
return b},
cE:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a9(null,null)
s.y=b
s.cy=c
r=H.aJ(a,s)
a.eC.set(c,r)
return r},
kx:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mf(a,b,r,c)
a.eC.set(r,s)
return s},
mf:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.au(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a9(null,null)
q.y=6
q.z=b
q.cy=c
return H.aJ(a,q)},
jw:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.me(a,b,r,c)
a.eC.set(r,s)
return s},
me:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.au(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.iZ(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.iZ(q.z))return q
else return H.lO(a,b)}}p=new H.a9(null,null)
p.y=7
p.z=b
p.cy=c
return H.aJ(a,p)},
kw:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mc(a,b,r,c)
a.eC.set(r,s)
return s},
mc:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.au(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cD(a,"jV",[b])
else if(b===t.P||b===t.T)return t.l}q=new H.a9(null,null)
q.y=8
q.z=b
q.cy=c
return H.aJ(a,q)},
mg:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a9(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aJ(a,s)
a.eC.set(q,r)
return r},
f6:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mb:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cD:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.f6(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a9(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aJ(a,r)
a.eC.set(p,q)
return q},
ju:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.f6(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a9(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aJ(a,o)
a.eC.set(q,n)
return n},
kv:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.f6(m)
if(j>0){s=l>0?",":""
r=H.f6(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mb(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a9(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aJ(a,o)
a.eC.set(q,r)
return r},
jv:function(a,b,c,d){var s,r=b.cy+("<"+H.f6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.md(a,b,c,r,d)
a.eC.set(r,s)
return s},
md:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aK(a,b,r,0)
m=H.cL(a,c,r,0)
return H.jv(a,n,m,c!==m)}}l=new H.a9(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aJ(a,l)},
ks:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ku:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.m4(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kt(a,r,g,f,!1)
else if(q===46)r=H.kt(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aI(a.u,a.e,f.pop()))
break
case 94:f.push(H.mg(a.u,f.pop()))
break
case 35:f.push(H.cE(a.u,5,"#"))
break
case 64:f.push(H.cE(a.u,2,"@"))
break
case 126:f.push(H.cE(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jt(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cD(p,n,o))
else{m=H.aI(p,a.e,n)
switch(m.y){case 11:f.push(H.jv(p,m,o,a.n))
break
default:f.push(H.ju(p,m,o))
break}}break
case 38:H.m5(a,f)
break
case 42:l=a.u
f.push(H.kx(l,H.aI(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jw(l,H.aI(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.kw(l,H.aI(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.ez()
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
H.jt(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.kv(p,H.aI(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jt(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.m7(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aI(a.u,a.e,h)},
m4:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kt:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ky(s,o.z)[p]
if(n==null)H.n('No "'+p+'" in "'+H.lN(o)+'"')
d.push(H.f7(s,o,n))}else d.push(p)
return m},
m5:function(a,b){var s=b.pop()
if(0===s){b.push(H.cE(a.u,1,"0&"))
return}if(1===s){b.push(H.cE(a.u,4,"1&"))
return}throw H.c(P.fn("Unexpected extended operation "+H.e(s)))},
aI:function(a,b,c){if(typeof c=="string")return H.cD(a,c,a.sEA)
else if(typeof c=="number")return H.m6(a,b,c)
else return c},
jt:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aI(a,b,c[s])},
m7:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aI(a,b,c[s])},
m6:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fn("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fn("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.au(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.au(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=d.z
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kc(a,b),c,d,e)}if(r===7){s=H.L(a,b.z,c,d,e)
return s}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kc(a,d),e)}if(p===7){s=H.L(a,b,c,d.z,e)
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.kD(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kD(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mz(a,b,c,d,e)}return!1},
kD:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.L(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.L(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mz:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ky(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.f7(a,b,l[p]),c,r[p],e))return!1
return!0},
iZ:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.au(a))if(r!==7)if(!(r===6&&H.iZ(a.z)))s=r===8&&H.iZ(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nx:function(a){var s
if(!H.au(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
au:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kz:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ez:function ez(){this.c=this.b=this.a=null},
eu:function eu(){},
cB:function cB(a){this.a=a},
kR:function(a){return v.mangledGlobalNames[a]},
nA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fi:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.jE==null){H.nt()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kj("Return interceptor for "+H.e(s(a,o))))}q=a.constructor
p=q==null?null:q[J.jY()]
if(p!=null)return p
p=H.ny(a)
if(p!=null)return p
if(typeof a=="function")return C.H
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,J.jY(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
jY:function(){var s=$.kq
return s==null?$.kq=v.getIsolateTag("_$dart_js"):s},
lq:function(a){if(!H.cI(a))throw H.c(P.jM(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aC(a,0,4294967295,"length",null))
return J.lr(new Array(a))},
jX:function(a){if(!H.cI(a)||a<0)throw H.c(P.j6("Length must be a non-negative integer: "+H.e(a)))
return new Array(a)},
lr:function(a){return J.jf(a)},
jf:function(a){a.fixed$length=Array
return a},
ls:function(a,b){return J.cR(a,b)},
cM:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c1.prototype
return J.c0.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.c2.prototype
if(typeof a=="boolean")return J.fY.prototype
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
np:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
b9:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
jC:function(a){if(a==null)return a
if(a.constructor==Array)return J.a5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
nq:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bA.prototype
return a},
ba:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ad.prototype
return a}if(a instanceof P.G)return a
return J.fi(a)},
jK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.np(a).u(a,b)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cM(a).n(a,b)},
cQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nw(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b9(a).h(a,b)},
l8:function(a,b,c){return J.ba(a).eX(a,b,c)},
l9:function(a,b,c,d){return J.ba(a).ff(a,b,c,d)},
cR:function(a,b){return J.nq(a).aC(a,b)},
j4:function(a,b){return J.b9(a).K(a,b)},
j5:function(a,b){return J.jC(a).B(a,b)},
la:function(a,b){return J.jC(a).F(a,b)},
jL:function(a){return J.ba(a).gcT(a)},
lb:function(a){return J.ba(a).gcW(a)},
W:function(a){return J.cM(a).gO(a)},
be:function(a){return J.jC(a).gL(a)},
bf:function(a){return J.b9(a).gj(a)},
lc:function(a,b){return J.ba(a).h0(a,b)},
Z:function(a){return J.cM(a).i(a)},
a:function a(){},
fY:function fY(){},
c2:function c2(){},
aX:function aX(){},
dy:function dy(){},
bA:function bA(){},
ad:function ad(){},
a5:function a5(){},
da:function da(){},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aW:function aW(){},
c1:function c1(){},
c0:function c0(){},
ax:function ax(){}},P={
lX:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nd()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bH(new P.iA(q),1)).observe(s,{childList:true})
return new P.iz(q,s,r)}else if(self.setImmediate!=null)return P.ne()
return P.nf()},
lY:function(a){self.scheduleImmediate(H.bH(new P.iB(a),0))},
lZ:function(a){self.setImmediate(H.bH(new P.iC(a),0))},
m_:function(a){P.jn(C.i,a)},
jn:function(a,b){var s=C.c.Z(a.a,1000)
return P.m8(s<0?0:s,b)},
kh:function(a,b){var s=C.c.Z(a.a,1000)
return P.m9(s<0?0:s,b)},
m8:function(a,b){var s=new P.cA()
s.dD(a,b)
return s},
m9:function(a,b){var s=new P.cA()
s.dE(a,b)
return s},
or:function(a){return new P.bD(a,1)},
m0:function(){return C.N},
m1:function(a){return new P.bD(a,3)},
mG:function(a){return new P.cx(a)},
n1:function(){var s,r
for(s=$.bF;s!=null;s=$.bF){$.cK=null
r=s.b
$.bF=r
if(r==null)$.cJ=null
s.a.$0()}},
n8:function(){$.jz=!0
try{P.n1()}finally{$.cK=null
$.jz=!1
if($.bF!=null)$.jJ().$1(P.kH())}},
n6:function(a){var s=new P.ej(a),r=$.cJ
if(r==null){$.bF=$.cJ=s
if(!$.jz)$.jJ().$1(P.kH())}else $.cJ=r.b=s},
n7:function(a){var s,r,q,p=$.bF
if(p==null){P.n6(a)
$.cK=$.cJ
return}s=new P.ej(a)
r=$.cK
if(r==null){s.b=p
$.bF=$.cK=s}else{q=r.b
s.b=q
$.cK=r.b=s
if(q==null)$.cJ=s}},
kg:function(a,b){var s=$.af
if(s===C.e)return P.jn(a,b)
return P.jn(a,s.fj(b))},
lU:function(a,b){var s=$.af
if(s===C.e)return P.kh(a,b)
return P.kh(a,s.cQ(b,t.Y))},
kE:function(a,b,c,d,e){P.n7(new P.iS(d,e))},
n3:function(a,b,c,d){var s,r=$.af
if(r===c)return d.$0()
$.af=c
s=r
try{r=d.$0()
return r}finally{$.af=s}},
n4:function(a,b,c,d,e){var s,r=$.af
if(r===c)return d.$1(e)
$.af=c
s=r
try{r=d.$1(e)
return r}finally{$.af=s}},
iA:function iA(a){this.a=a},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
cA:function cA(){this.c=0},
iL:function iL(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b){this.a=a
this.b=b},
bE:function bE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cx:function cx(a){this.a=a},
ej:function ej(a){this.a=a
this.b=null},
dP:function dP(){},
dQ:function dQ(){},
ce:function ce(){},
iN:function iN(){},
iS:function iS(a,b){this.a=a
this.b=b},
iH:function iH(){},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
lw:function(a,b,c){return H.nn(a,new H.r(b.al("@<0>").cq(c).al("r<1,2>")))},
lv:function(a,b){return new H.r(a.al("@<0>").cq(b).al("r<1,2>"))},
jZ:function(a){return new P.cm(a.al("cm<0>"))},
js:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
m3:function(a,b){var s=new P.cn(a,b)
s.c=a.e
return s},
lp:function(a,b,c){var s,r
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.Y.push(a)
try{P.mF(a,s)}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}r=P.ke(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
je:function(a,b,c){var s,r
if(P.jA(a))return b+"..."+c
s=new P.b4(b)
$.Y.push(a)
try{r=s
r.a=P.ke(r.a,a,", ")}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jA:function(a){var s,r
for(s=$.Y.length,r=0;r<s;++r)if(a===$.Y[r])return!0
return!1},
mF:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.e(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.t()){if(j<=4){b.push(H.e(p))
return}r=H.e(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.t();p=o,o=n){n=l.gE(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.e(p)
r=H.e(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
k_:function(a){var s,r={}
if(P.jA(a))return"{...}"
s=new P.b4("")
try{$.Y.push(a)
s.a+="{"
r.a=!0
J.la(a,new P.h6(r,s))
s.a+="}"}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cm:function cm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iG:function iG(a){this.a=a
this.c=this.b=null},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c_:function c_(){},
c4:function c4(){},
z:function z(){},
dg:function dg(){},
h6:function h6(a,b){this.a=a
this.b=b},
an:function an(){},
cu:function cu(){},
co:function co(){},
cY:function cY(){},
d_:function d_(){},
fK:function fK(){},
ig:function ig(){},
ih:function ih(){},
iM:function iM(a){this.b=0
this.c=a},
lo:function(a){if(a instanceof H.bh)return a.i(0)
return"Instance of '"+H.e(H.dB(a))+"'"},
ji:function(a,b,c){var s,r=c?J.jX(a):J.lq(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jj:function(a,b){var s,r=[]
for(s=J.be(a);s.t();)r.push(s.gE(s))
if(b)return r
return J.jf(r)},
jm:function(a){var s,r=a,q=r.length,p=P.jk(0,null,q)
if(typeof p!=="number")return p.a6()
s=p<q
return H.lJ(s?r.slice(0,p):r)},
lL:function(a){return new H.fZ(a,H.lt(a,!1,!0,!1,!1,!1))},
ke:function(a,b,c){var s=J.be(b)
if(!s.t())return a
if(c.length===0){do a+=H.e(s.gE(s))
while(s.t())}else{a+=H.e(s.gE(s))
for(;s.t();)a=a+c+H.e(s.gE(s))}return a},
ml:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.o){s=$.l7().b
s=s.test(b)}else s=!1
if(s)return b
r=C.D.fo(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.lI(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lm:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ln:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
jT:function(a){return new P.aR(1000*a)},
fN:function(a){if(typeof a=="number"||H.kC(a)||null==a)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lo(a)},
fn:function(a){return new P.cU(a)},
j6:function(a){return new P.a2(!1,null,null,a)},
jM:function(a,b,c){return new P.a2(!0,a,b,c)},
ld:function(a,b){if(a==null)throw H.c(new P.a2(!1,null,b,"Must not be null"))
return a},
dC:function(a,b){return new P.by(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.by(b,c,!0,a,d,"Invalid value")},
jk:function(a,b,c){var s
if(typeof c!=="number")return H.o(c)
s=a>c
if(s)throw H.c(P.aC(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
s=b>c}else s=!0
if(s)throw H.c(P.aC(b,a,c,"end",null))
return b}return c},
k9:function(a,b){if(a<0)throw H.c(P.aC(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bf(b):e
return new P.d8(s,!0,a,c,"Index out of range")},
u:function(a){return new P.ed(a)},
kj:function(a){return new P.ea(a)},
bO:function(a){return new P.cZ(a)},
m:function(a){return new P.ew(a)},
jI:function(a){H.nA(a)},
b8:function b8(){},
a4:function a4(a,b){this.a=a
this.b=b},
V:function V(){},
aR:function aR(a){this.a=a},
fH:function fH(){},
fI:function fI(){},
E:function E(){},
cU:function cU(a){this.a=a},
dt:function dt(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d8:function d8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ed:function ed(a){this.a=a},
ea:function ea(a){this.a=a},
dO:function dO(a){this.a=a},
cZ:function cZ(a){this.a=a},
dw:function dw(){},
cd:function cd(){},
d0:function d0(a){this.a=a},
ew:function ew(a){this.a=a},
fU:function fU(a,b){this.a=a
this.b=b},
p:function p(){},
f:function f(){},
d9:function d9(){},
am:function am(){},
df:function df(){},
a7:function a7(){},
O:function O(){},
G:function G(){},
K:function K(){},
b4:function b4(a){this.a=a},
nk:function(a){var s
if(t.s.b(a)){s=J.lb(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cC(a.data,a.height,a.width)},
nj:function(a){if(a instanceof P.cC)return{data:a.a,height:a.b,width:a.c}
return a},
aM:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lv(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
ni:function(a){var s={}
a.F(0,new P.iT(s))
return s},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
d5:function d5(a,b){this.a=a
this.b=b},
fS:function fS(){},
fT:function fT(){},
iF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eP:function eP(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bo:function bo(){},
dd:function dd(){},
bv:function bv(){},
du:function du(){},
hw:function hw(){},
dR:function dR(){},
j:function j(){},
bz:function bz(){},
dY:function dY(){},
eD:function eD(){},
eE:function eE(){},
eL:function eL(){},
eM:function eM(){},
eY:function eY(){},
eZ:function eZ(){},
f4:function f4(){},
f5:function f5(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(a){this.a=a},
cV:function cV(){},
av:function av(){},
dv:function dv(){},
ek:function ek(){},
dE:function dE(){},
dM:function dM(){},
eU:function eU(){},
eV:function eV(){}},W={
j9:function(){var s=document.createElement("canvas")
return s},
fJ:function(a){return"wheel"},
iE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kr:function(a,b,c,d){var s=W.iE(W.iE(W.iE(W.iE(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
N:function(a,b,c,d){var s=W.kF(new W.iD(c),t.D)
if(s!=null&&!0)J.l9(a,b,s,!1)
return new W.ev(a,b,s,!1)},
kF:function(a,b){var s=$.af
if(s===C.e)return a
return s.cQ(a,b)},
k:function k(){},
fl:function fl(){},
cS:function cS(){},
cT:function cT(){},
cW:function cW(){},
aQ:function aQ(){},
ac:function ac(){},
fz:function fz(){},
D:function D(){},
bR:function bR(){},
fA:function fA(){},
a3:function a3(){},
ai:function ai(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fF:function fF(){},
bS:function bS(){},
bT:function bT(){},
d2:function d2(){},
fG:function fG(){},
em:function em(a,b){this.a=a
this.b=b},
I:function I(){},
h:function h(){},
b:function b(){},
aS:function aS(){},
d3:function d3(){},
d4:function d4(){},
d6:function d6(){},
aT:function aT(){},
fW:function fW(){},
aU:function aU(){},
aV:function aV(){},
bn:function bn(){},
aY:function aY(){},
h4:function h4(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
hp:function hp(){},
hq:function hq(a){this.a=a},
b_:function b_(){},
dk:function dk(){},
a_:function a_(){},
el:function el(a){this.a=a},
t:function t(){},
cb:function cb(){},
b1:function b1(){},
dz:function dz(){},
hB:function hB(){},
hC:function hC(a){this.a=a},
dG:function dG(){},
aD:function aD(){},
dK:function dK(){},
b2:function b2(){},
dL:function dL(){},
b3:function b3(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
aE:function aE(){},
aF:function aF(){},
aG:function aG(){},
ae:function ae(){},
dS:function dS(){},
dT:function dT(){},
hZ:function hZ(){},
b5:function b5(){},
b6:function b6(){},
dX:function dX(){},
i1:function i1(){},
as:function as(){},
ie:function ie(){},
ef:function ef(){},
aH:function aH(){},
bC:function bC(){},
en:function en(){},
cl:function cl(){},
eA:function eA(){},
cp:function cp(){},
eT:function eT(){},
f_:function f_(){},
jc:function jc(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iD:function iD(a){this.a=a},
jr:function jr(a){this.$ti=a},
C:function C(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
ex:function ex(){},
ey:function ey(){},
eB:function eB(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eQ:function eQ(){},
cv:function cv(){},
cw:function cw(){},
eR:function eR(){},
eS:function eS(){},
eX:function eX(){},
f0:function f0(){},
f1:function f1(){},
cy:function cy(){},
cz:function cz(){},
f2:function f2(){},
f3:function f3(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){}},K={
S:function(a){var s=new K.hD()
s.dz(a)
return s},
fm:function fm(){},
d7:function d7(){},
az:function az(){this.a=null},
hD:function hD(){this.a=null}},L={dN:function dN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},dW:function dW(a){this.b=a
this.c=null},i_:function i_(){var _=this
_.d=_.c=_.b=_.a=null},i2:function i2(a){this.b=a
this.a=this.c=null}},O={
ja:function(){var s=new O.bi()
s.b_()
return s},
bi:function bi(){this.c=this.b=this.a=null},
c7:function c7(){this.b=this.a=null},
dh:function dh(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(){},
h8:function h8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
di:function di(){},
h9:function h9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ao:function ao(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hb:function hb(){var _=this
_.e=_.d=_.c=_.b=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hd:function hd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hT:function hT(){},
kL:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7="testCanvas",a8=null,a9=34067,b0="modifiers",b1=V.lP("Test 046"),b2=W.j9()
b2.className="pageLargeCanvas"
b2.id=a7
b1.a.appendChild(b2)
b1.fe(["buttons"])
b1.cL(["Test of the fullscreen function of the ThreeDart."])
b1.cL(["\xab[Back to Tests|../]"])
b1=document
s=b1.getElementById(a7)
if(s==null)H.n(P.m("Failed to find an element with the identifier, testCanvas."))
r=E.lT(s,!0,!0,!0,!1)
q=X.jd(a8)
q.scU(0,!1)
p=E.jU()
p.sbe(0,F.nC())
o=r.f
n=o.a
m=n.createTexture()
n.bindTexture(a9,m)
n.texParameteri(a9,10242,10497)
n.texParameteri(a9,10243,10497)
n.texParameteri(a9,10241,9729)
n.texParameteri(a9,10240,9729)
n.bindTexture(a9,a8)
l=new T.hV()
l.a=0
l.b=m
l.c=!1
l.d=0
o.az(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.az(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.az(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.az(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.az(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.az(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.dh()
o=O.ja()
k.e=o
o.aF(k.ge5(),k.ge7())
o=new O.ao(k,"emission")
o.c=new A.Q(!1,!1,!1)
o.f=new V.J(0,0,0)
k.f=o
o=new O.ao(k,"ambient")
o.c=new A.Q(!1,!1,!1)
o.f=new V.J(0,0,0)
k.r=o
o=new O.ao(k,"diffuse")
o.c=new A.Q(!1,!1,!1)
o.f=new V.J(0,0,0)
k.x=o
o=new O.ao(k,"invDiffuse")
o.c=new A.Q(!1,!1,!1)
o.f=new V.J(0,0,0)
k.y=o
o=new O.hd(k,"specular")
o.c=new A.Q(!1,!1,!1)
o.f=new V.J(0,0,0)
o.ch=100
k.z=o
o=new O.h9(k,"bump")
o.c=new A.Q(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.ao(k,"reflect")
o.c=new A.Q(!1,!1,!1)
o.f=new V.J(0,0,0)
k.cx=o
o=new O.hc(k,"refract")
o.c=new A.Q(!1,!1,!1)
o.f=new V.J(0,0,0)
o.ch=1
k.cy=o
o=new O.h8(k,"alpha")
o.c=new A.Q(!1,!1,!1)
o.f=1
k.db=o
o=new D.c3()
o.b_()
o.e=[]
o.f=[]
o.r=[]
o.x=[]
o.z=o.y=null
o.cc(o.ge3(),o.geE(),o.geI())
k.dx=o
n=new O.hb()
n.b=new V.aw(0,0,0,0)
n.c=1
n.d=10
n.e=!1
k.dy=n
n=o.y
o=n==null?o.y=D.y():n
o.l(0,k.geZ())
o=k.dx
n=o.z
o=n==null?o.z=D.y():n
n=k.gbv()
o.l(0,n)
k.fr=null
o=k.dx
j=V.jp()
i=U.jS(V.k0(V.k6(),j,new V.w(-1,-1,-1)))
h=new V.J(1,1,1)
g=new D.bj()
g.c=new V.J(1,1,1)
g.a=V.lW()
g.d=V.jp()
g.e=V.lV()
f=g.b
g.b=i
i.gm().l(0,g.gdB())
i=new D.v("mover",f,g.b)
i.b=!0
g.aj(i)
if(!g.c.n(0,h)){f=g.c
g.c=h
i=new D.v("color",f,h)
i.b=!0
g.aj(i)}o.l(0,g)
o=k.r
o.sag(0,new V.J(0.1,0.1,0.1))
o=k.x
o.sag(0,new V.J(0.1,0.1,0.1))
o=k.z
o.sag(0,new V.J(1,1,1))
o=k.z
o.bA(new A.Q(!0,!1,!1))
o.cH(10)
o=k.ch
if(o!==l){if(o!=null)o.gm().C(0,n)
f=k.ch
k.ch=l
l.gm().l(0,n)
o=new D.v("environment",f,k.ch)
o.b=!0
k.U(o)}o=k.cy
o.bA(new A.Q(!0,!1,!1))
o.cG(0.6)
o=k.cy
o.sag(0,new V.J(1,1,1))
o=k.cx
o.sag(0,new V.J(0.6,0.6,0.6))
e=new U.bm()
e.b_()
e.aF(e.ge1(),e.geG())
e.e=null
e.f=V.br()
e.r=0
o=r.x
n=new U.ch()
i=U.jb()
i.sca(0,!0)
i.sbZ(6.283185307179586)
i.sc1(0)
i.sX(0,0)
i.sc_(100)
i.sM(0)
i.sbL(0.5)
n.b=i
g=n.gax()
i.gm().l(0,g)
i=U.jb()
i.sca(0,!0)
i.sbZ(6.283185307179586)
i.sc1(0)
i.sX(0,0)
i.sc_(100)
i.sM(0)
i.sbL(0.5)
n.c=i
i.gm().l(0,g)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
d=new X.a6(!1,!1,!1)
f=n.d
n.d=d
i=new D.v(b0,f,d)
i.b=!0
n.I(i)
i=n.f
if(i!==!1){n.f=!1
i=new D.v("invertX",i,!1)
i.b=!0
n.I(i)}i=n.r
if(i!==!1){n.r=!1
i=new D.v("invertY",i,!1)
i.b=!0
n.I(i)}n.aM(o)
e.l(0,n)
o=r.x
n=new U.cg()
i=U.jb()
i.sca(0,!0)
i.sbZ(6.283185307179586)
i.sc1(0)
i.sX(0,0)
i.sc_(100)
i.sM(0)
i.sbL(0.2)
n.b=i
i.gm().l(0,n.gax())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
d=new X.a6(!0,!1,!1)
f=n.c
n.c=d
i=new D.v(b0,f,d)
i.b=!0
n.I(i)
n.aM(o)
e.l(0,n)
o=r.x
n=new U.ci()
n.c=0.01
n.e=n.d=0
d=new X.a6(!1,!1,!1)
n.b=d
i=new D.v(b0,a8,d)
i.b=!0
n.I(i)
n.aM(o)
e.l(0,n)
e.l(0,U.jS(V.ap(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.k3(e)
b=new M.bQ()
b.a=!0
o=E.jU()
a=F.jl()
n=a.a
i=new V.w(-1,-1,1).D()
a0=n.b5(new V.aB(1,2,4,6),V.fx(255,0,0),new V.M(-1,-1,0),new V.a0(0,1),i,a8)
i=a.a
n=new V.w(1,-1,1).D()
a1=i.b5(new V.aB(0,3,4,6),V.fx(0,0,255),new V.M(1,-1,0),new V.a0(1,1),n,a8)
n=a.a
i=new V.w(1,1,1).D()
a2=n.b5(new V.aB(0,2,5,6),V.fx(0,128,0),new V.M(1,1,0),new V.a0(1,0),i,a8)
i=a.a
n=V.aA()
g=new V.w(-1,1,1).D()
a3=i.b5(new V.aB(0,2,4,7),V.fx(255,255,0),new V.M(-1,1,0),n,g,a8)
a.d.fg([a0,a1,a2,a3])
a.ao()
o.sbe(0,a)
b.e=o
b.saN(a8)
b.saW(0,a8)
b.saX(a8)
o=new O.dI()
o.b=1.0471975511965976
o.d=new V.J(1,1,1)
f=o.c
o.c=l
l.gm().l(0,o.gbv())
n=new D.v("boxTexture",f,o.c)
n.b=!0
o.U(n)
b.saX(o)
b.saW(0,q)
b.saN(c)
a4=new M.bV()
a4.a=!0
o=O.ja()
a4.e=o
o.aF(a4.geb(),a4.ged())
a4.y=a4.x=a4.r=a4.f=null
a5=X.jd(a8)
a4.saN(a8)
a4.saW(0,a5)
a4.saX(a8)
a4.saN(c)
a4.saX(k)
a4.saW(0,q)
a4.e.l(0,p)
a4.c.scU(0,!1)
o=new M.bN()
o.b_()
o.e=!0
o.f=!1
o.r=null
o.aF(o.geK(),o.geM())
o.b4(0,[b,a4])
n=r.d
if(n!==o){if(n!=null)n.gm().C(0,r.gcm())
r.d=o
o.gm().l(0,r.gcm())
r.cn()}s=b1.getElementById("buttons")
a6=b1.createElement("button")
a6.textContent="Fullscreen"
W.N(a6,"click",new O.j_(r),!1)
J.jL(s).l(0,a6)
V.nB(r)},
j_:function j_(a){this.a=a}},E={
jU:function(){var s,r=new E.bk()
r.a=""
r.b=!0
s=O.ja()
r.y=s
s.aF(r.gfK(),r.gfN())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbe(0,null)
return r},
kn:function(){if(J.j4(window.navigator.vendor,"Google"))return C.u
if(J.j4(window.navigator.userAgent,"Firefox"))return C.k
var s=window.navigator.appVersion
if(J.b9(s).K(s,"Trident")||C.b.K(s,"Edge"))return C.l
if(J.j4(window.navigator.appName,"Microsoft"))return C.l
return C.v},
ko:function(){var s=window.navigator.appVersion
if(J.b9(s).K(s,"Win"))return C.J
if(C.b.K(s,"Mac"))return C.p
if(C.b.K(s,"Linux"))return C.K
return C.L},
lM:function(a,b){var s=new E.hx(a)
s.dw(a,b)
return s},
lT:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kf(a,!0,!0,!0,!1)
s=W.j9()
r=s.style
r.width="100%"
r.height="100%"
J.jL(a).l(0,s)
return E.kf(s,!0,!0,!0,!1)},
kf:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.dU(),n=t.z,m=C.f.cb(a,"webgl2",P.lw(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.n(P.m("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.lM(m,a)
n=new T.hW(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.ee(a)
s=new X.h0()
s.c=new X.a6(!1,!1,!1)
s.d=P.jZ(t.e)
n.b=s
s=new X.hr(n)
s.f=0
s.r=V.aA()
s.x=V.aA()
s.ch=s.Q=1
n.c=s
s=new X.h5(n)
s.r=0
s.x=V.aA()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.i0(n)
s.f=V.aA()
s.r=V.aA()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fL
n.Q=(s==null?$.fL=new E.et(E.kn(),E.ko()):s).a===C.k?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.N(q,"contextmenu",n.gef(),!1))
n.z.push(W.N(a,"focus",n.gel(),!1))
n.z.push(W.N(a,"blur",n.ge9(),!1))
n.z.push(W.N(q,"keyup",n.gep(),!1))
n.z.push(W.N(q,"keydown",n.gen(),!1))
n.z.push(W.N(a,"mousedown",n.geu(),!1))
n.z.push(W.N(a,"mouseup",n.gey(),!1))
n.z.push(W.N(a,p,n.gew(),!1))
r=n.z
W.fJ(a)
W.fJ(a)
r.push(W.N(a,W.fJ(a),n.geA(),!1))
n.z.push(W.N(q,p,n.geh(),!1))
n.z.push(W.N(q,"mouseup",n.gej(),!1))
n.z.push(W.N(q,"pointerlockchange",n.geC(),!1))
n.z.push(W.N(a,"touchstart",n.geS(),!1))
n.z.push(W.N(a,"touchend",n.geO(),!1))
n.z.push(W.N(a,"touchmove",n.geQ(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a4(Date.now(),!1)
o.db=0
o.cE()
return o},
fu:function fu(){},
bk:function bk(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bg:function bg(a){this.b=a},
bw:function bw(a){this.b=a},
et:function et(a,b){this.a=a
this.b=b},
hx:function hx(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
dU:function dU(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hY:function hY(a){this.a=a}},Z={
jq:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cG(c)),35044)
a.bindBuffer(b,null)
return new Z.eg(b,s)},
ab:function(a){return new Z.b7(a)},
eg:function eg(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eh:function eh(a){this.a=a},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
y:function(){var s=new D.bl()
s.d=0
return s},
fw:function fw(){},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
P:function P(){this.b=null},
aj:function aj(){this.b=null},
ak:function ak(){this.b=null},
v:function v(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bj:function bj(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
al:function al(){},
c3:function c3(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={cX:function cX(a,b){this.a=a
this.b=b},dc:function dc(a,b){this.a=a
this.b=b},h0:function h0(){var _=this
_.d=_.c=_.b=_.a=null},c5:function c5(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h5:function h5(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hr:function hr(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bt:function bt(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dA:function dA(){},cf:function cf(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i0:function i0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ee:function ee(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jd:function(a){var s=new X.fV(),r=new V.aw(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.kb
if(r==null){r=V.ka(0,0,1,1)
$.kb=r}s.r=r
return s},
k3:function(a){var s,r,q=new X.dx()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gdF())
r=new D.v("mover",s,q.b)
r.b=!0
q.ae(r)}r=q.c
$.x().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.v("fov",r,1.0471975511965976)
r.b=!0
q.ae(r)}r=q.d
$.x().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.v("near",r,0.1)
r.b=!0
q.ae(r)}r=q.e
$.x().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.v("far",r,2000)
r.b=!0
q.ae(r)}return q},
j8:function j8(){},
fV:function fV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(){this.b=this.a=null},
dx:function dx(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hR:function hR(){}},V={
fx:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aw(s,r,q,1)},
jF:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nH:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dl(a-b,s)
return(a<0?a+s:a)+b},
A:function(a,b,c){if(a==null)return C.b.a9("null",c)
$.x().toString
return C.b.a9(C.d.di(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bJ:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.l)(a),++q){p=V.A(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.b.a9(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
jH:function(a){return C.d.h7(Math.pow(2,C.G.bU(Math.log(H.ng(a))/Math.log(2))))},
br:function(){var s=$.k1
return s==null?$.k1=V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k0:function(a,b,c){var s=c.D(),r=b.aO(s).D(),q=s.aO(r),p=new V.w(a.a,a.b,a.c),o=r.J(0).a_(p),n=q.J(0).a_(p),m=s.J(0).a_(p)
return V.ap(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
aA:function(){var s=$.k5
return s==null?$.k5=new V.a0(0,0):s},
k6:function(){var s=$.aq
return s==null?$.aq=new V.M(0,0,0):s},
ka:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dD(a,b,c,d)},
cj:function(){var s=$.km
return s==null?$.km=new V.w(0,0,0):s},
lV:function(){var s=$.ii
return s==null?$.ii=new V.w(-1,0,0):s},
jp:function(){var s=$.ij
return s==null?$.ij=new V.w(0,1,0):s},
lW:function(){var s=$.ik
return s==null?$.ik=new V.w(0,0,1):s},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(){},
dj:function dj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bq:function bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
nB:function(a){P.lU(C.E,new V.j1(a))},
lP:function(a){var s=new V.hI()
s.dA(a,!0)
return s},
j1:function j1(a){this.a=a},
hI:function hI(){this.b=this.a=null},
hK:function hK(a){this.a=a},
hJ:function hJ(a){this.a=a}},U={
jb:function(){var s=new U.fy()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
jS:function(a){var s=new U.bP()
s.a=a
return s},
fy:function fy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){this.b=this.a=null},
bm:function bm(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
R:function R(){},
cg:function cg(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ch:function ch(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ci:function ci(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={bN:function bN(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},bQ:function bQ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},bV:function bV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aa:function aa(){}},A={
ly:function(a,b){var s=a.aR,r=new A.h7(b,s)
r.ck(b,s)
r.dv(a,b)
return r},
lz:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+a9.gad(a9)+b0.gad(b0)+b1.gad(b1)+b2.gad(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.l)(b3),++r)b+="_"+H.e(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.l)(b4),++r)b+="_"+H.e(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.l)(b5),++r)b+="_"+H.e(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.l)(b6),++r)b+="_"+H.e(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
for(o=b4.length,r=0;r<o;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(n=b6.length,r=0;r<n;++r,p=!0)q+=b6[r].b
if(!b0.a)n=!1
else n=!0
if(!n)if(!b1.a)m=!1
else m=!0
else m=!0
l=s>0
if(!a5.a)s=!1
else s=!0
if(!s){if(!a6.a)s=!1
else s=!0
if(!s){if(!a7.a)s=!1
else s=!0
if(!s)if(!a8.a)s=!1
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a8.a
if(s)n=!1
else n=!0
j=n||l||o>0||m
if(!a6.a)o=!1
else o=!0
if(!o){if(!a7.a)o=!1
else o=!0
if(!o){if(s)s=!1
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!a9.a)s=!1
else s=!0
h=s||m}else h=!0
if(!a9.a)g=!1
else g=!0
f=a3>0
e=h||g||j||!1
d=l&&i
c=$.ag()
if(h){s=$.aP()
c=new Z.b7(c.a|s.a)}if(g){s=$.aO()
c=new Z.b7(c.a|s.a)}if(f){s=$.aN()
c=new Z.b7(c.a|s.a)}return new A.ha(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
iQ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iR:function(a,b,c){var s
A.iQ(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fj(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
mL:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iQ(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
mH:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.iR(b,r,"ambient")
b.a+="\n"},
mJ:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.iR(b,r,"diffuse")
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
mM:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.iR(b,r,"invDiffuse")
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
mS:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.iR(b,r,"specular")
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
mO:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s+="\n"
b.a=s
s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f.a
if(!r)q=!1
else q=!0
if(!q||r)s=b.a=s+"   return normalize(normalVec);\n"
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
mQ:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iQ(b,r,"reflect")
r=b.a+="\n"
r+="vec3 reflect(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = reflectClr;\n"
b.a=r}r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
mR:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iQ(b,r,"refract")
r=b.a+="uniform float refraction;\n"
r+="\n"
b.a=r
r+="vec3 refract(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = refractClr;\n"
b.a=r}r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
mI:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.e(s)
q=A.fj(r)
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
if(typeof s!=="number")return s.aa()
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
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.p(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
if(!a.b.a)s=!1
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
n=[]
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.p(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
mK:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.e(s)
q=A.fj(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.aa()
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
p=c.a+="uniform "+q+" "+r+"s["+k+"];\n"
if(s)for(o=0;o<k;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
m=[]
if(!a.b.a)p=!1
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
if(!a.c.a)p=!1
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
else p=!0
if(p)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.p(l," + ")+");\n"}else c.a+="   highLight = "+C.a.p(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.p(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<k;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}k=s}else{k=c.a+="   for(int i = 0; i < "+k+"; ++i)\n"
k+="   {\n"
c.a=k
k+="      if(i >= "+r+"Count) break;\n"
c.a=k
k+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=k
k=c.a=k+"   }\n"}k+="   return lightAccum;\n"
c.a=k
k+="}\n"
c.a=k
c.a=k+"\n"},
mP:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.e(s)
q=A.fj(r)
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
if(typeof s!=="number")return s.aa()
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
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.p(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
if(!a.b.a)p=!1
else p=!0
if(p)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
mT:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.e(s)
q=A.fj(r)
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
if(typeof s!=="number")return s.aa()
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
if(m){s=$.fL
if(s==null)s=$.fL=new E.et(E.kn(),E.ko())
p=c.a
if(s.b===C.p){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.p(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
if(!a.b.a)s=!1
else s=!0
if(s)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.p(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(h," + ")+");\n"
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
mN:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=[]
if(!a.b.a)s=!1
else s=!0
if(s)r.push("ambientColor")
if(!a.c.a)s=!1
else s=!0
if(s)r.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
mU:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.b4("")
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
A.mL(a,h)
A.mH(a,h)
A.mJ(a,h)
A.mM(a,h)
A.mS(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.mQ(a,h)
A.mR(a,h)}A.mO(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y.a
if(o)p=h.a=p+"uniform float alpha;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!o)n=!1
else n=!0
if(!n)p=h.a=p+"   return 1.0;\n"
else if(o){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mI(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mK(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mP(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mT(a,o[m],h)
A.mN(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
if(s){s=o+"   vec3 norm = normal();\n"
h.a=s}else s=o
if(r)s=h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=[]
if(p){h.a=s+u.o
l.push("lightAccum")
if(!a.b.a)s=!1
else s=!0
if(s)h.a+="   setAmbientColor();\n"
if(!a.c.a)s=!1
else s=!0
if(s)h.a+="   setDiffuseColor();\n"
if(!a.d.a)s=!1
else s=!0
if(s)h.a+="   setInvDiffuseColor();\n"
if(!a.e.a)s=!1
else s=!0
if(s)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aI(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aI(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aI(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.aI(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.p(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
mV:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b6+"];\n"
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
mX:function(a,b){var s
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
mW:function(a,b){var s
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
mZ:function(a,b){var s,r
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
n_:function(a,b){var s,r
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
mY:function(a,b){var s
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
n0:function(a,b){var s
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
fj:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.aI(a,1)},
jo:function(a,b,c,d,e){var s=new A.i7(a,c,e)
s.f=d
P.ji(d,0,!1)
return s},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a,b){var _=this
_.hj=_.hi=_.b7=_.aR=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hw=_.hv=_.hu=_.bT=_.bS=_.bR=_.bQ=_.bP=_.bO=_.bN=_.bM=_.ht=_.hs=_.d5=_.hr=_.hq=_.d4=_.d3=_.hp=_.ho=_.d2=_.d1=_.hn=_.hm=_.d0=_.hl=_.hk=_.d_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ft:function ft(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b6=b5
_.aR=b6
_.b7=b7},
e2:function e2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
e3:function e3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
e6:function e6(a,b,c,d,e,f,g,h,i,j){var _=this
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
e9:function e9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dH:function dH(){},
hM:function hM(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i6:function i6(){},
ic:function ic(a){this.a=a},
e_:function e_(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
dZ:function dZ(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
e0:function e0(a,b,c){this.a=a
this.c=b
this.d=c},
e1:function e1(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
e4:function e4(a,b,c){this.a=a
this.c=b
this.d=c},
e5:function e5(a,b,c){this.a=a
this.c=b
this.d=c},
e7:function e7(a,b,c){this.a=a
this.c=b
this.d=c},
e8:function e8(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iP:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cF:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.w(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.w(s+a5,r+a3,q+a4)
o=new V.w(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.w(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.iP(g)
j=F.iP(f)
i=F.nE(a1,a2,new F.iO(h,F.iP(e),F.iP(d),j,k,a0),b)
if(i!=null)a.c0(i)},
nC:function(){var s,r,q=null,p={}
p.a=s
p.a=null
p.a=new F.j2()
p=new F.j3(p,1)
r=F.jl()
F.cF(r,q,p,8,8,1,0,0,1)
F.cF(r,q,p,8,8,0,1,0,3)
F.cF(r,q,p,8,8,0,0,1,2)
F.cF(r,q,p,8,8,-1,0,0,0)
F.cF(r,q,p,8,8,0,-1,0,0)
F.cF(r,q,p,8,8,0,0,-1,3)
r.ao()
r.fJ(new F.it(),new F.hs())
return r},
nE:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.jl()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.im(e,e,new V.aw(n,0,0,1),e,e,new V.a0(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bK(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.im(e,e,new V.aw(h,g,f,1),e,e,new V.a0(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bK(d))}}s.d.fh(a+1,b+1,r)
return s},
bW:function(a,b,c){var s=new F.fQ(),r=a.a
if(r==null)H.n(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.n(P.m("May not create a face with vertices attached to different shapes."))
s.bD(a)
s.bE(b)
s.f2(c)
s.a.a.d.b.push(s)
s.a.a.W()
return s},
lu:function(a,b){var s=new F.h1(),r=a.a
if(r==null)H.n(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.n(P.m("May not create a line with vertices attached to different shapes."))
s.bD(a)
s.bE(b)
s.a.a.c.b.push(s)
s.a.a.W()
return s},
jl:function(){var s=new F.hE(),r=new F.io(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hH(s)
r.b=[]
s.b=r
r=new F.hG(s)
r.b=[]
s.c=r
r=new F.hF(s)
r.b=[]
s.d=r
return s},
im:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.il(),p=new F.iw()
p.b=[]
q.b=p
p=new F.is()
p.b=[]
p.c=[]
q.c=p
p=new F.ip()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.l4()
q.e=0
p=$.ag()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aP().a)!==0?e:r
q.x=(s&$.aO().a)!==0?b:r
q.y=(s&$.bc().a)!==0?f:r
q.z=(s&$.bd().a)!==0?g:r
q.Q=(s&$.l5().a)!==0?c:r
q.ch=(s&$.bK().a)!==0?i:0
q.cx=(s&$.aN().a)!==0?a:r
return q},
iO:function iO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j2:function j2(){},
j3:function j3(a,b){this.a=a
this.b=b},
fQ:function fQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(){},
hL:function hL(){},
h1:function h1(){this.b=this.a=null},
h2:function h2(){},
i5:function i5(){},
hu:function hu(){this.a=null},
hE:function hE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
il:function il(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iy:function iy(a){this.a=a},
ix:function ix(a){this.a=a},
io:function io(a){this.a=a
this.c=this.b=null},
ip:function ip(){this.d=this.c=this.b=null},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(){this.c=this.b=null},
iu:function iu(){},
it:function it(){},
iv:function iv(){},
hs:function hs(){},
iw:function iw(){this.b=null}},T={hU:function hU(){},hV:function hV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hW:function hW(a){var _=this
_.a=a
_.e=_.d=_.c=null},hX:function hX(a,b,c,d,e,f,g){var _=this
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
H.jg.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gO:function(a){return H.cc(a)},
i:function(a){return"Instance of '"+H.e(H.dB(a))+"'"}}
J.fY.prototype={
i:function(a){return String(a)},
gO:function(a){return a?519018:218159}}
J.c2.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0}}
J.aX.prototype={
gO:function(a){return 0},
i:function(a){return String(a)}}
J.dy.prototype={}
J.bA.prototype={}
J.ad.prototype={
i:function(a){var s=a[$.kU()]
if(s==null)return this.dt(a)
return"JavaScript function for "+H.e(J.Z(s))}}
J.a5.prototype={
c5:function(a,b){if(!!a.fixed$length)H.n(P.u("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dC(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var s
if(!!a.fixed$length)H.n(P.u("remove"))
for(s=0;s<a.length;++s)if(J.B(a[s],b)){a.splice(s,1)
return!0}return!1},
b4:function(a,b){var s,r
if(!!a.fixed$length)H.n(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.l)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bO(a))}},
p:function(a,b){var s,r,q=P.ji(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.e(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
fH:function(a){return this.p(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gfD:function(a){if(a.length>0)return a[0]
throw H.c(H.jW())},
gbW:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.jW())},
aH:function(a,b){if(!!a.immutable$list)H.n(P.u("sort"))
H.lS(a,b==null?J.my():b)},
dq:function(a){return this.aH(a,null)},
K:function(a,b){var s
for(s=0;s<a.length;++s)if(J.B(a[s],b))return!0
return!1},
i:function(a){return P.je(a,"[","]")},
gL:function(a){return new J.T(a,a.length)},
gO:function(a){return H.cc(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.n(P.u("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bI(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.u("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bI(a,b))
a[b]=c},
$ii:1,
$if:1}
J.da.prototype={}
J.T.prototype={
gE:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.l(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aW.prototype={
aC:function(a,b){var s
if(typeof b!="number")throw H.c(H.aL(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb8(b)
if(this.gb8(a)===s)return 0
if(this.gb8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb8:function(a){return a===0?1/a<0:a<0},
h7:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.u(""+a+".toInt()"))},
bU:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.u(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
di:function(a,b){var s
if(b>20)throw H.c(P.aC(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb8(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
dl:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
du:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cI(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cI(a,b)},
cI:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.u("Result of truncating division is "+H.e(s)+": "+H.e(a)+" ~/ "+b))},
b2:function(a,b){var s
if(a>0)s=this.f6(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
f6:function(a,b){return b>31?0:a>>>b},
$iV:1,
$iO:1}
J.c1.prototype={$ip:1}
J.c0.prototype={}
J.ax.prototype={
bJ:function(a,b){if(b<0)throw H.c(H.bI(a,b))
if(b>=a.length)H.n(H.bI(a,b))
return a.charCodeAt(b)},
cr:function(a,b){if(b>=a.length)throw H.c(H.bI(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!="string")throw H.c(P.jM(b,null,null))
return a+b},
cf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dC(b,null))
if(b>c)throw H.c(P.dC(b,null))
if(c>a.length)throw H.c(P.dC(c,null))
return a.substring(b,c)},
aI:function(a,b){return this.cf(a,b,null)},
v:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.C)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a9:function(a,b){var s=b-a.length
if(s<=0)return a
return this.v(" ",s)+a},
fm:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aC(c,0,s,null,null))
return H.kP(a,b,c)},
K:function(a,b){return this.fm(a,b,0)},
aC:function(a,b){var s
if(typeof b!="string")throw H.c(H.aL(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gO:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$iK:1}
H.H.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bJ(this.a,b)}}
H.i.prototype={}
H.bp.prototype={
gE:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.b9(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bO(q))
s=r.c
if(typeof o!=="number")return H.o(o)
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.aZ.prototype={
gL:function(a){return new H.c6(J.be(this.a),this.b)},
gj:function(a){return J.bf(this.a)},
B:function(a,b){return this.b.$1(J.j5(this.a,b))}}
H.bU.prototype={$ii:1}
H.c6.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){var s=this.a
return s}}
H.ck.prototype={
gL:function(a){return new H.ei(J.be(this.a),this.b)}}
H.ei.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.bX.prototype={}
H.ec.prototype={
k:function(a,b,c){throw H.c(P.u("Cannot modify an unmodifiable list"))}}
H.bB.prototype={}
H.i3.prototype={
a8:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ds.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.db.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.e(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.e(r.a)+")"
return q+p+"' on '"+s+"' ("+H.e(r.a)+")"}}
H.eb.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ht.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.eW.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bh.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kS(r==null?"unknown":r)+"'"},
ghb:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hS.prototype={}
H.hO.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kS(s)+"'"}}
H.bL.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bL))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gO:function(a){var s,r=this.c
if(r==null)s=H.cc(this.a)
else s=typeof r!=="object"?J.W(r):H.cc(r)
return(s^H.cc(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.dB(s))+"'")}}
H.dF.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.r.prototype={
gj:function(a){return this.a},
gar:function(a){return new H.ay(this)},
gha:function(a){return H.lx(new H.ay(this),new H.h_(this))},
fn:function(a,b){var s=this.b
if(s==null)return!1
return this.dQ(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b0(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b0(p,b)
q=r==null?n:r.b
return q}else return o.fG(b)},
fG:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cw(q,J.W(a)&0x3ffffff)
r=this.d7(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cp(s==null?m.b=m.bt():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cp(r==null?m.c=m.bt():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bt()
p=J.W(b)&0x3ffffff
o=m.cw(q,p)
if(o==null)m.bB(q,p,[m.bu(b,c)])
else{n=m.d7(o,b)
if(n>=0)o[n].b=c
else o.push(m.bu(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bO(s))
r=r.c}},
cp:function(a,b,c){var s=this.b0(a,b)
if(s==null)this.bB(a,b,this.bu(b,c))
else s.b=c},
bu:function(a,b){var s=this,r=new H.h3(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
d7:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.B(a[r].a,b))return r
return-1},
i:function(a){return P.k_(this)},
b0:function(a,b){return a[b]},
cw:function(a,b){return a[b]},
bB:function(a,b,c){a[b]=c},
dT:function(a,b){delete a[b]},
dQ:function(a,b){return this.b0(a,b)!=null},
bt:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bB(r,s,r)
this.dT(r,s)
return r}}
H.h_.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mw(this.a).al("2(1)")}}
H.h3.prototype={}
H.ay.prototype={
gj:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.de(s,s.r)
r.c=s.e
return r}}
H.de.prototype={
gE:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bO(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iV.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.iW.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iX.prototype={
$1:function(a){return this.a(a)}}
H.fZ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c9.prototype={}
H.bu.prototype={
gj:function(a){return a.length},
$iq:1}
H.b0.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]},
k:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.c8.prototype={
k:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dl.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dm.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dn.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dp.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dq.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.ca.prototype={
gj:function(a){return a.length},
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.dr.prototype={
gj:function(a){return a.length},
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.cq.prototype={}
H.cr.prototype={}
H.cs.prototype={}
H.ct.prototype={}
H.a9.prototype={
al:function(a){return H.f7(v.typeUniverse,this,a)},
cq:function(a){return H.mj(v.typeUniverse,this,a)}}
H.ez.prototype={}
H.eu.prototype={
i:function(a){return this.a}}
H.cB.prototype={}
P.iA.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.iz.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iB.prototype={
$0:function(){this.a.$0()}}
P.iC.prototype={
$0:function(){this.a.$0()}}
P.cA.prototype={
dD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bH(new P.iL(this,b),0),a)
else throw H.c(P.u("`setTimeout()` not found."))},
dE:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bH(new P.iK(this,a,Date.now(),b),0),a)
else throw H.c(P.u("Periodic timer."))},
$ice:1}
P.iL.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iK.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.du(s,o)}q.c=p
r.d.$1(q)}}
P.bD.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bE.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bD){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.be(s)
if(o instanceof P.bE){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cx.prototype={
gL:function(a){return new P.bE(this.a())}}
P.ej.prototype={}
P.dP.prototype={}
P.dQ.prototype={}
P.ce.prototype={}
P.iN.prototype={}
P.iS.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.Z(this.b)
throw s}}
P.iH.prototype={
h2:function(a){var s,r,q,p=null
try{if(C.e===$.af){a.$0()
return}P.n3(p,p,this,a)}catch(q){s=H.fk(q)
r=H.jD(q)
P.kE(p,p,this,s,r)}},
h3:function(a,b){var s,r,q,p=null
try{if(C.e===$.af){a.$1(b)
return}P.n4(p,p,this,a,b)}catch(q){s=H.fk(q)
r=H.jD(q)
P.kE(p,p,this,s,r)}},
h4:function(a,b){return this.h3(a,b,t.z)},
fj:function(a){return new P.iI(this,a)},
cQ:function(a,b){return new P.iJ(this,a,b)}}
P.iI.prototype={
$0:function(){return this.a.h2(this.b)}}
P.iJ.prototype={
$1:function(a){return this.a.h4(this.b,a)},
$S:function(){return this.c.al("~(0)")}}
P.cm.prototype={
gL:function(a){var s=new P.cn(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
K:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dO(b)
return r}},
dO:function(a){var s=this.d
if(s==null)return!1
return this.bk(s[this.bh(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cs(s==null?q.b=P.js():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cs(r==null?q.c=P.js():r,b)}else return q.dH(0,b)},
dH:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.js()
s=q.bh(b)
r=p[s]
if(r==null)p[s]=[q.bg(b)]
else{if(q.bk(r,b)>=0)return!1
r.push(q.bg(b))}return!0},
C:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.eV(this.c,b)
else return this.eU(0,b)},
eU:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bh(b)
r=n[s]
q=o.bk(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cK(p)
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bg(b)
return!0},
eV:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cK(s)
delete a[b]
return!0},
cz:function(){this.r=1073741823&this.r+1},
bg:function(a){var s,r=this,q=new P.iG(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cz()
return q},
cK:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cz()},
bh:function(a){return J.W(a)&1073741823},
bk:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.B(a[r].a,b))return r
return-1}}
P.iG.prototype={}
P.cn.prototype={
gE:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bO(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c_.prototype={}
P.c4.prototype={$ii:1,$if:1}
P.z.prototype={
gL:function(a){return new H.bp(a,this.gj(a))},
B:function(a,b){return this.h(a,b)},
gd8:function(a){return this.gj(a)===0},
h8:function(a){var s,r,q,p,o=this
if(o.gd8(a)){s=J.jX(0)
return s}r=o.h(a,0)
q=P.ji(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.o(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
i:function(a){return P.je(a,"[","]")}}
P.dg.prototype={}
P.h6.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.e(a)
r.a=s+": "
r.a+=H.e(b)},
$S:16}
P.an.prototype={
F:function(a,b){var s,r
for(s=J.be(this.gar(a));s.t();){r=s.gE(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.bf(this.gar(a))},
i:function(a){return P.k_(a)}}
P.cu.prototype={
i:function(a){return P.je(this,"{","}")},
B:function(a,b){var s,r,q,p="index"
P.ld(b,p)
P.k9(b,p)
for(s=P.m3(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.c(P.F(b,this,p,null,r))},
$ii:1,
$if:1}
P.co.prototype={}
P.cY.prototype={}
P.d_.prototype={}
P.fK.prototype={}
P.ig.prototype={}
P.ih.prototype={
fo:function(a){var s,r,q,p=null,o=P.jk(0,p,a.length)
if(o==null)throw H.c(new P.by(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.iM(r)
if(q.dV(a,0,o)!==o){C.b.bJ(a,o-1)
q.bF()}return new Uint8Array(r.subarray(0,H.mq(0,q.b,r.length)))}}
P.iM.prototype={
bF:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fd:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s&63
return!0}else{n.bF()
return!1}},
dV:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bJ(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.cr(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fd(p,C.b.cr(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bF()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=128|p&63}}}return q}}
P.b8.prototype={}
P.a4.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a&&!0},
aC:function(a,b){return C.c.aC(this.a,b.a)},
gO:function(a){var s=this.a
return(s^C.c.b2(s,30))&1073741823},
i:function(a){var s=this,r=P.lm(H.lH(s)),q=P.d1(H.lF(s)),p=P.d1(H.lB(s)),o=P.d1(H.lC(s)),n=P.d1(H.lE(s)),m=P.d1(H.lG(s)),l=P.ln(H.lD(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.V.prototype={}
P.aR.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gO:function(a){return C.c.gO(this.a)},
aC:function(a,b){return C.c.aC(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fI(),o=this.a
if(o<0)return"-"+new P.aR(0-o).i(0)
s=p.$1(C.c.Z(o,6e7)%60)
r=p.$1(C.c.Z(o,1e6)%60)
q=new P.fH().$1(o%1e6)
return""+C.c.Z(o,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.fH.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fI.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.E.prototype={}
P.cU.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fN(s)
return"Assertion failed"}}
P.dt.prototype={
i:function(a){return"Throw of null."}}
P.a2.prototype={
gbj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbi:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbj()+o+m
if(!q.a)return l
s=q.gbi()
r=P.fN(q.b)
return l+s+": "+r}}
P.by.prototype={
gbj:function(){return"RangeError"},
gbi:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.e(q):""
else if(q==null)s=": Not greater than or equal to "+H.e(r)
else if(q>r)s=": Not in inclusive range "+H.e(r)+".."+H.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.e(r)
return s}}
P.d8.prototype={
gbj:function(){return"RangeError"},
gbi:function(){var s,r=this.b
if(typeof r!=="number")return r.a6()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.e(s)},
gj:function(a){return this.f}}
P.ed.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ea.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.cZ.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fN(s)+"."}}
P.dw.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.cd.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.d0.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.ew.prototype={
i:function(a){return"Exception: "+this.a}}
P.fU.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.cf(q,0,75)+"..."
return r+"\n"+q}}
P.p.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gL(this)
for(s=0;r.t();)++s
return s},
B:function(a,b){var s,r,q
P.k9(b,"index")
for(s=this.gL(this),r=0;s.t();){q=s.gE(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.lp(this,"(",")")}}
P.d9.prototype={}
P.am.prototype={$ii:1,$if:1}
P.df.prototype={}
P.a7.prototype={
gO:function(a){return P.G.prototype.gO.call(C.h,this)},
i:function(a){return"null"}}
P.O.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
n:function(a,b){return this===b},
gO:function(a){return H.cc(this)},
i:function(a){return"Instance of '"+H.e(H.dB(this))+"'"},
toString:function(){return this.i(this)}}
P.K.prototype={}
P.b4.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fl.prototype={
gj:function(a){return a.length}}
W.cS.prototype={
i:function(a){return String(a)}}
W.cT.prototype={
i:function(a){return String(a)}}
W.cW.prototype={}
W.aQ.prototype={
cb:function(a,b,c){if(c!=null)return a.getContext(b,P.ni(c))
return a.getContext(b)},
dk:function(a,b){return this.cb(a,b,null)},
$iaQ:1}
W.ac.prototype={
gj:function(a){return a.length}}
W.fz.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bR.prototype={
gj:function(a){return a.length}}
W.fA.prototype={}
W.a3.prototype={}
W.ai.prototype={}
W.fB.prototype={
gj:function(a){return a.length}}
W.fC.prototype={
gj:function(a){return a.length}}
W.fD.prototype={
gj:function(a){return a.length}}
W.fF.prototype={
i:function(a){return String(a)}}
W.bS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.bT.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gav(a))+" x "+H.e(this.gaq(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.ba(b)
s=a.left==s.gb9(b)&&a.top==s.gbc(b)&&this.gav(a)==s.gav(b)&&this.gaq(a)==s.gaq(b)}else s=!1
return s},
gO:function(a){return W.kr(J.W(a.left),J.W(a.top),J.W(this.gav(a)),J.W(this.gaq(a)))},
gcR:function(a){return a.bottom},
gaq:function(a){return a.height},
gb9:function(a){return a.left},
gc8:function(a){return a.right},
gbc:function(a){return a.top},
gav:function(a){return a.width},
$ia8:1}
W.d2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.fG.prototype={
gj:function(a){return a.length}}
W.em.prototype={
gd8:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var s=this.h8(this)
return new J.T(s,s.length)}}
W.I.prototype={
gcT:function(a){return new W.em(a,a.children)},
gcV:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a6()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a6()
if(p<0)p=-p*0
return new P.a8(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iI:1}
W.h.prototype={$ih:1}
W.b.prototype={
ff:function(a,b,c,d){if(c!=null)this.dI(a,b,c,!1)},
dI:function(a,b,c,d){return a.addEventListener(b,H.bH(c,1),!1)},
$ib:1}
W.aS.prototype={$iaS:1}
W.d3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.d4.prototype={
gj:function(a){return a.length}}
W.d6.prototype={
gj:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.fW.prototype={
gj:function(a){return a.length}}
W.aU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.aV.prototype={
gcW:function(a){return a.data},
$iaV:1}
W.bn.prototype={$ibn:1}
W.aY.prototype={$iaY:1}
W.h4.prototype={
i:function(a){return String(a)}}
W.hm.prototype={
gj:function(a){return a.length}}
W.hn.prototype={
h:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gar:function(a){var s=[]
this.F(a,new W.ho(s))
return s},
gj:function(a){return a.size}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hp.prototype={
h:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gar:function(a){var s=[]
this.F(a,new W.hq(s))
return s},
gj:function(a){return a.size}}
W.hq.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b_.prototype={$ib_:1}
W.dk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.a_.prototype={$ia_:1}
W.el.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gL:function(a){var s=this.a.childNodes
return new W.bY(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
h0:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.l8(s,b,a)}catch(q){H.fk(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ds(a):s},
eX:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.cb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b1.prototype={
gj:function(a){return a.length},
$ib1:1}
W.dz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.hB.prototype={
h:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gar:function(a){var s=[]
this.F(a,new W.hC(s))
return s},
gj:function(a){return a.size}}
W.hC.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dG.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.dK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b2.prototype={$ib2:1}
W.dL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.b3.prototype={
gj:function(a){return a.length},
$ib3:1}
W.hP.prototype={
h:function(a,b){return a.getItem(H.mo(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gar:function(a){var s=[]
this.F(a,new W.hQ(s))
return s},
gj:function(a){return a.length}}
W.hQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.aF.prototype={$iaF:1}
W.aG.prototype={$iaG:1}
W.ae.prototype={$iae:1}
W.dS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.dT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.hZ.prototype={
gj:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.b6.prototype={$ib6:1}
W.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.i1.prototype={
gj:function(a){return a.length}}
W.as.prototype={}
W.ie.prototype={
i:function(a){return String(a)}}
W.ef.prototype={
gj:function(a){return a.length}}
W.aH.prototype={
gft:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
gfs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.u("deltaX is not supported"))},
$iaH:1}
W.bC.prototype={
eY:function(a,b){return a.requestAnimationFrame(H.bH(b,1))},
dU:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.en.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.cl.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.ba(b)
s=a.left==s.gb9(b)&&a.top==s.gbc(b)&&a.width==s.gav(b)&&a.height==s.gaq(b)}else s=!1
return s},
gO:function(a){return W.kr(J.W(a.left),J.W(a.top),J.W(a.width),J.W(a.height))},
gaq:function(a){return a.height},
gav:function(a){return a.width}}
W.eA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.cp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.f_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$iq:1,
$if:1}
W.jc.prototype={}
W.ev.prototype={}
W.iD.prototype={
$1:function(a){return this.a.$1(a)}}
W.jr.prototype={}
W.C.prototype={
gL:function(a){return new W.bY(a,this.gj(a))}}
W.bY.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cQ(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return this.d}}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eQ.prototype={}
W.cv.prototype={}
W.cw.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eX.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
P.cC.prototype={$iaV:1,
gcW:function(a){return this.a}}
P.iT.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.d5.prototype={
gb1:function(){return new H.aZ(new H.ck(this.b,new P.fS()),new P.fT())},
k:function(a,b,c){var s=this.gb1()
J.lc(s.b.$1(J.j5(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bf(this.gb1().a)},
h:function(a,b){var s=this.gb1()
return s.b.$1(J.j5(s.a,b))},
gL:function(a){var s=P.jj(this.gb1(),!1)
return new J.T(s,s.length)}}
P.fS.prototype={
$1:function(a){return t.h.b(a)}}
P.fT.prototype={
$1:function(a){return t.h.a(a)}}
P.eP.prototype={
gc8:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
gcR:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.e(s.a)+", "+H.e(s.b)+") "+H.e(s.c)+" x "+H.e(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.ba(b)
if(s==r.gb9(b)){q=n.b
if(q==r.gbc(b)){p=n.c
if(typeof s!=="number")return s.u()
if(typeof p!=="number")return H.o(p)
o=n.$ti.c
if(o.a(s+p)===r.gc8(b)){s=n.d
if(typeof q!=="number")return q.u()
if(typeof s!=="number")return H.o(s)
r=o.a(q+s)===r.gcR(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gO:function(a){var s,r=this,q=r.a,p=J.W(q),o=r.b,n=J.W(o),m=r.c
if(typeof q!=="number")return q.u()
if(typeof m!=="number")return H.o(m)
s=r.$ti.c
m=C.c.gO(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.u()
if(typeof q!=="number")return H.o(q)
q=C.c.gO(s.a(o+q))
return P.m2(P.iF(P.iF(P.iF(P.iF(0,p),n),m),q))}}
P.a8.prototype={
gb9:function(a){return this.a},
gbc:function(a){return this.b},
gav:function(a){return this.c},
gaq:function(a){return this.d}}
P.bo.prototype={$ibo:1}
P.dd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bv.prototype={$ibv:1}
P.du.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hw.prototype={
gj:function(a){return a.length}}
P.dR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcT:function(a){return new P.d5(a,new W.el(a))}}
P.bz.prototype={$ibz:1}
P.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eD.prototype={}
P.eE.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f4.prototype={}
P.f5.prototype={}
P.fq.prototype={
gj:function(a){return a.length}}
P.fr.prototype={
h:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aM(s.value[1]))}},
gar:function(a){var s=[]
this.F(a,new P.fs(s))
return s},
gj:function(a){return a.size}}
P.fs.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cV.prototype={
gj:function(a){return a.length}}
P.av.prototype={}
P.dv.prototype={
gj:function(a){return a.length}}
P.ek.prototype={}
P.dE.prototype={
h5:function(a,b,c,d,e,f,g){var s
if(t.s.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.nj(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.j6("Incorrect number or type of arguments"))}}
P.dM.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
s=P.aM(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eU.prototype={}
P.eV.prototype={}
K.fm.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"}}
K.d7.prototype={
aD:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)if(s[q].aD(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.az.prototype={
aD:function(a,b){return!this.dr(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}}
K.hD.prototype={
dz:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
s=new H.r(t.E)
for(r=new H.bp(a,a.gj(a));r.t();){q=r.d
s.k(0,q,!0)}p=P.jj(new H.ay(s),!0)
C.a.dq(p)
this.a=p},
aD:function(a,b){return C.a.K(this.a,b)},
i:function(a){return P.jm(this.a)}}
L.dN.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.i2(this.a.H(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fC:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.aD(0,a))return p}return null},
i:function(a){return this.b},
cJ:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.K(0,l))m+=" (consume)"
for(l=new H.ay(n.d.c),l=l.gL(l);l.t();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.e(r)+" => ["+H.e(q)+"]")
m=s.c.K(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.l)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.dV.prototype={
i:function(a){var s=H.kQ(this.b,"\n","\\n"),r=H.kQ(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.dW.prototype={
i:function(a){return this.b}}
L.i_.prototype={
H:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dN(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
aY:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.dW(a)
s.c=new H.r(t.i)
this.b.k(0,a,s)}return s},
dj:function(a){return this.h9(a)},
h9:function(a){var s=this
return P.mG(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dj(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.c5(a0,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fC(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jm(b)
throw H.c(P.m("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.n(P.u("removeRange"))
P.jk(0,k,b.length)
b.splice(0,k-0)
C.a.b4(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.K(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)c.push(j)
d=h.b
if(d.d!=null){g=P.jm(c)
f=d.d
e=f.c.h(0,g)
n=new L.dV(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.K(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.m0()
case 1:return P.m1(o)}}},t.j)},
i:function(a){var s,r=new P.b4(""),q=this.d
if(q!=null)r.a=q.cJ()+"\n"
for(q=this.a,q=q.gha(q),q=new H.c6(J.be(q.a),q.b);q.t();){s=q.a
if(s!=this.d)r.a+=s.cJ()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.i2.prototype={
i:function(a){return this.b.b+": "+this.cg(0)}}
O.bi.prototype={
b_:function(){this.a=[]
this.c=this.b=null},
cc:function(a,b,c){this.b=b
this.c=a},
aF:function(a,b){return this.cc(a,null,b)},
cC:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cl:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.T(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.cC([b])){s=this.a
r=s.length
s.push(b)
this.cl(r,[b])}},
b4:function(a,b){var s,r
if(this.cC(b)){s=this.a
r=s.length
C.a.b4(s,b)
this.cl(r,b)}},
$if:1}
O.c7.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
aw:function(){var s=this.b
if(s!=null)s.w(null)},
gV:function(a){var s=this.a
if(s.length>0)return C.a.gbW(s)
else return V.br()},
bb:function(a){var s=this.a
if(a==null)s.push(V.br())
else s.push(a)
this.aw()},
as:function(){var s=this.a
if(s.length>0){s.pop()
this.aw()}}}
E.fu.prototype={}
E.bk.prototype={
sbe:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().C(0,q.gde())
s=q.c
if(s!=null)s.gm().l(0,q.gde())
r=new D.v("shape",p,q.c)
r.b=!0
q.ba(r)}},
ac:function(a,b){var s
for(s=this.y.a,s=new J.T(s,s.length);s.t();)s.d.ac(0,b)},
a5:function(a){var s,r=this,q=a.dx
q.a.push(q.gV(q))
q.aw()
a.c4(r.f)
q=a.dy
s=(q&&C.a).gbW(q)
if(s!=null&&r.d!=null)s.dg(a,r)
for(q=r.y.a,q=new J.T(q,q.length);q.t();)q.d.a5(a)
a.c3()
a.dx.as()},
ba:function(a){var s=this.z
if(s!=null)s.w(a)},
W:function(){return this.ba(null)},
df:function(a){this.e=null
this.ba(a)},
fP:function(){return this.df(null)},
dd:function(a){this.ba(a)},
fM:function(){return this.dd(null)},
fL:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdc(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bl()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.W()},
fO:function(a,b){var s,r
for(s=b.gL(b),r=this.gdc();s.t();)s.gE(s).gm().C(0,r)
this.W()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bg.prototype={
i:function(a){return this.b}}
E.bw.prototype={
i:function(a){return this.b}}
E.et.prototype={}
E.hx.prototype={
dw:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a4(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.c7()
s.a=[]
s.gm().l(0,new E.hy(r))
r.cy=s
s=new O.c7()
s.a=[]
s.gm().l(0,new E.hz(r))
r.db=s
s=new O.c7()
s.a=[]
s.gm().l(0,new E.hA(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.r(t.G)},
gfY:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gV(q)
s=r.db
s=r.z=q.v(0,s.gV(s))
q=s}return q},
c4:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbW(s):a)},
c3:function(){var s=this.dy
if(s.length>1)s.pop()},
cM:function(a){var s=a.b
if(s.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.fn(0,s))throw H.c(P.m('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.k(0,s,a)}}
E.hy.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hz.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hA.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.dU.prototype={
co:function(a){this.dh()},
cn:function(){return this.co(null)},
gfE:function(){var s,r=this,q=Date.now(),p=C.c.Z(P.jT(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a4(q,!1)
return s/p},
cE:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.o(p)
s=C.d.bU(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.v()
r=C.d.bU(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kg(C.i,q.gh1())}},
dh:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.t.dU(s)
r=W.kF(new E.hY(this),t.H)
r.toString
C.t.eY(s,r)}},
h_:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cE()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a4(p,!1)
q.y=P.jT(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aw()
p=q.db
C.a.sj(p.a,0)
p.aw()
p=q.dx
C.a.sj(p.a,0)
p.aw()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.a5(n.e)}}catch(o){s=H.fk(o)
r=H.jD(o)
P.jI("Error: "+H.e(s))
P.jI("Stack: "+H.e(r))
throw H.c(s)}}}
E.hY.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.h_()}}}
Z.eg.prototype={}
Z.fv.prototype={
S:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fk(q)
r=P.m('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.e(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.e(s.e)+"]"}}
Z.eh.prototype={}
Z.bM.prototype={
ap:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
S:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].S(a)},
au:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a5:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.Z(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(o,", ")+"\nAttrs:   "+C.a.p(p,", ")}}
Z.bZ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.dB(this.c))+"'")+"]"}}
Z.b7.prototype={
gce:function(a){var s=this.a,r=(s&$.ag().a)!==0?3:0
if((s&$.aP().a)!==0)r+=3
if((s&$.aO().a)!==0)r+=3
if((s&$.bc().a)!==0)r+=2
if((s&$.bd().a)!==0)r+=3
if((s&$.cO().a)!==0)r+=3
if((s&$.cP().a)!==0)r+=4
if((s&$.bK().a)!==0)++r
return(s&$.aN().a)!==0?r+4:r},
fi:function(a){var s,r=$.ag(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bc()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bd()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bK()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aN()
if((q&r.a)!==0)if(s===a)return r
return $.l6()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ag().a)!==0)s.push("Pos")
if((r&$.aP().a)!==0)s.push("Norm")
if((r&$.aO().a)!==0)s.push("Binm")
if((r&$.bc().a)!==0)s.push("Txt2D")
if((r&$.bd().a)!==0)s.push("TxtCube")
if((r&$.cO().a)!==0)s.push("Clr3")
if((r&$.cP().a)!==0)s.push("Clr4")
if((r&$.bK().a)!==0)s.push("Weight")
if((r&$.aN().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.fw.prototype={}
D.bl.prototype={
l:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
C:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.K(q,b)
if(q===!0){q=r.a
s=(q&&C.a).C(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.K(q,b)
if(q===!0){q=r.b
s=(q&&C.a).C(q,b)||s}return s},
w:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.P()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.F(P.jj(s,!0),new D.fO(o))
s=p.b
if(s!=null){p.b=[]
C.a.F(s,new D.fP(o))}return!0},
fA:function(){return this.w(null)},
ai:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.w(s)}}}}
D.fO.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.fP.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.P.prototype={}
D.aj.prototype={}
D.ak.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cX.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dc.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dc))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.h0.prototype={
fU:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fQ:function(a){this.c=a.b
this.d.C(0,a.a)
return!1}}
X.c5.prototype={}
X.h5.prototype={
aK:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.v()
s=b.b
r=o.ch
if(typeof s!=="number")return s.v()
q=new V.a0(m.a+l*k,m.b+s*r)
r=o.a.gaB()
p=new X.bs(a,V.aA(),o.x,r,q)
p.b=!0
o.z=new P.a4(n,!1)
o.x=q
return p},
c2:function(a,b){this.r=a.a
return!1},
aV:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dm()
if(typeof s!=="number")return s.aa()
this.r=(s&~r)>>>0
return!1},
aU:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.aK(a,b))
return!0},
fV:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaB()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.v()
o=a.b
n=m.cy
if(typeof o!=="number")return o.v()
r=new X.bt(new V.X(q*p,o*n),s,r)
r.b=!0
l.w(r)
return!0},
es:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.c5(c,p.a.gaB(),b)
q.b=!0
r.w(q)
p.y=new P.a4(s,!1)
p.x=V.aA()}}
X.a6.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a6))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bs.prototype={}
X.hr.prototype={
bl:function(a,b,c){var s=this,r=new P.a4(Date.now(),!1),q=s.a.gaB(),p=new X.bs(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
c2:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.w(this.bl(a,b,!0))
return!0},
aV:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dm()
if(typeof r!=="number")return r.aa()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.w(s.bl(a,b,!0))
return!0},
aU:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.bl(a,b,!1))
return!0},
fW:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaB()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.v()
p=a.b
o=n.ch
if(typeof p!=="number")return p.v()
s=new X.bt(new V.X(r*q,p*o),s,b)
s.b=!0
m.w(s)
return!0},
gcY:function(){var s=this.b
return s==null?this.b=D.y():s},
gc9:function(){var s=this.c
return s==null?this.c=D.y():s},
gda:function(){var s=this.d
return s==null?this.d=D.y():s}}
X.bt.prototype={}
X.dA.prototype={}
X.cf.prototype={}
X.i0.prototype={
aK:function(a,b){var s=this,r=new P.a4(Date.now(),!1),q=a.length>0?a[0]:V.aA(),p=s.a.gaB(),o=new X.cf(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
fT:function(a){var s=this.b
if(s==null)return!1
s.w(this.aK(a,!0))
return!0},
fR:function(a){var s=this.c
if(s==null)return!1
s.w(this.aK(a,!0))
return!0},
fS:function(a){var s=this.d
if(s==null)return!1
s.w(this.aK(a,!1))
return!0}}
X.ee.prototype={
gaB:function(){var s=this.a,r=C.f.gcV(s).c
r.toString
s=C.f.gcV(s).d
s.toString
return V.ka(0,0,r,s)},
cu:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dc(s,new X.a6(r,a.altKey,a.shiftKey))},
aA:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a6(r,a.altKey,a.shiftKey)},
bC:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a6(r,a.altKey,a.shiftKey)},
an:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a1()
if(typeof o!=="number")return H.o(o)
s=r.top
if(typeof p!=="number")return p.a1()
if(typeof s!=="number")return H.o(s)
return new V.a0(q-o,p-s)},
aL:function(a){return new V.X(a.movementX,a.movementY)},
bx:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=C.d.ab(p.pageX)
C.d.ab(p.pageY)
n=k.left
if(typeof n!=="number")return H.o(n)
C.d.ab(p.pageX)
m=C.d.ab(p.pageY)
l=k.top
if(typeof l!=="number")return H.o(l)
j.push(new V.a0(o-n,m-l))}return j},
ak:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.cX(s,new X.a6(r,a.altKey,a.shiftKey))},
bm:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a1()
if(typeof n!=="number")return H.o(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a1()
if(typeof p!=="number")return H.o(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.o(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.o(p)
p=r<p}else p=!1
return p},
em:function(a){this.f=!0},
ea:function(a){this.f=!1},
eg:function(a){if(this.f&&this.bm(a))a.preventDefault()},
eq:function(a){var s
if(!this.f)return
s=this.cu(a)
this.b.fU(s)},
eo:function(a){var s
if(!this.f)return
s=this.cu(a)
this.b.fQ(s)},
ev:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aA(a)
if(p.x){s=p.ak(a)
r=p.aL(a)
if(p.d.c2(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ak(a)
q=p.an(a)
if(p.c.c2(s,q))a.preventDefault()},
ez:function(a){var s,r,q,p=this
p.aA(a)
s=p.ak(a)
if(p.x){r=p.aL(a)
if(p.d.aV(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aV(s,q))a.preventDefault()},
ek:function(a){var s,r,q,p=this
if(!p.bm(a)){p.aA(a)
s=p.ak(a)
if(p.x){r=p.aL(a)
if(p.d.aV(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aV(s,q))a.preventDefault()}},
ex:function(a){var s,r,q,p=this
p.aA(a)
s=p.ak(a)
if(p.x){r=p.aL(a)
if(p.d.aU(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aU(s,q))a.preventDefault()},
ei:function(a){var s,r,q,p=this
if(!p.bm(a)){p.aA(a)
s=p.ak(a)
if(p.x){r=p.aL(a)
if(p.d.aU(s,r))a.preventDefault()
return}if(p.r)return
q=p.an(a)
if(p.c.aU(s,q))a.preventDefault()}},
eB:function(a){var s,r,q=this
q.aA(a)
s=new V.X((a&&C.r).gfs(a),C.r.gft(a)).v(0,q.Q)
if(q.x){if(q.d.fV(s))a.preventDefault()
return}if(q.r)return
r=q.an(a)
if(q.c.fW(s,r))a.preventDefault()},
eD:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ak(q.y)
r=q.an(q.y)
q.d.es(s,r,p)}},
eT:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bC(a)
s=r.bx(a)
if(r.e.fT(s))a.preventDefault()},
eP:function(a){var s
this.bC(a)
s=this.bx(a)
if(this.e.fR(s))a.preventDefault()},
eR:function(a){var s
this.bC(a)
s=this.bx(a)
if(this.e.fS(s))a.preventDefault()}}
D.bj.prototype={
aj:function(a){var s=this.r
if(s!=null)s.w(a)},
dC:function(){return this.aj(null)},
$ial:1}
D.al.prototype={}
D.c3.prototype={
aj:function(a){var s=this.y
if(s!=null)s.w(a)},
cB:function(a){var s=this.z
if(s!=null)s.w(a)},
er:function(){return this.cB(null)},
eF:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(q==null||this.dP(q))return!1}return!0},
e4:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcA(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p instanceof D.bj)this.f.push(p)
o=p.r
if(o==null){o=new D.bl()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.aj()
s.b=!0
this.aj(s)},
eJ:function(a,b){var s,r,q
for(s=b.gL(b),r=this.gcA();s.t();){q=s.gE(s)
C.a.C(this.e,q)
q.gm().C(0,r)}s=new D.ak()
s.b=!0
this.aj(s)},
dP:function(a){var s=C.a.K(this.f,a)
return s}}
V.J.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.J))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aw.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aw))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.fM.prototype={}
V.dj.prototype={
a3:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dj))return!1
s=b.a
$.x().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bJ([o.a,o.d,o.r],3,0),m=V.bJ([o.b,o.e,o.x],3,0),l=V.bJ([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.d(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.d(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.d(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.d(n,1)
p=" "+n[1]+", "
if(1>=r)return H.d(m,1)
p=p+m[1]+", "
if(1>=q)return H.d(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.d(n,2)
k=" "+n[2]+", "
if(2>=r)return H.d(m,2)
k=k+m[2]+", "
if(2>=q)return H.d(l,2)
return p+(k+l[2]+"]")}}
V.bq.prototype={
a3:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
bV:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.x().toString
if(Math.abs(b3-0)<1e-9)return V.br()
s=1/b3
r=-l
q=-a2
return V.ap((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
v:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ap(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bd:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.w(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aZ:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.M(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bq))return!1
s=b.a
$.x().toString
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
i:function(a){return this.G()},
A:function(a){var s,r,q,p,o,n=this,m=V.bJ([n.a,n.e,n.y,n.cx],3,0),l=V.bJ([n.b,n.f,n.z,n.cy],3,0),k=V.bJ([n.c,n.r,n.Q,n.db],3,0),j=V.bJ([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.d(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.d(m,1)
o=o+m[1]+", "
if(1>=r)return H.d(l,1)
o=o+l[1]+", "
if(1>=q)return H.d(k,1)
o=o+k[1]+", "
if(1>=p)return H.d(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.d(m,2)
s=s+m[2]+", "
if(2>=r)return H.d(l,2)
s=s+l[2]+", "
if(2>=q)return H.d(k,2)
s=s+k[2]+", "
if(2>=p)return H.d(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.d(m,3)
o=o+m[3]+", "
if(3>=r)return H.d(l,3)
o=o+l[3]+", "
if(3>=q)return H.d(k,3)
o=o+k[3]+", "
if(3>=p)return H.d(j,3)
return s+(o+j[3]+"]")},
G:function(){return this.A("")}}
V.a0.prototype={
Y:function(a){return new V.X(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.M.prototype={
a1:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aB.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aB))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.dD.prototype={
ga4:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dD))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.X.prototype={
bX:function(a){return Math.sqrt(this.a_(this))},
a_:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.v()
if(typeof p!=="number")return H.o(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.o(r)
return q*p+s*r},
v:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.v()
if(typeof b!=="number")return H.o(b)
s=this.b
if(typeof s!=="number")return s.v()
return new V.X(r*b,s*b)},
T:function(a,b){var s,r
$.x().toString
if(Math.abs(b-0)<1e-9){s=$.kk
return s==null?$.kk=new V.X(0,0):s}s=this.a
if(typeof s!=="number")return s.T()
r=this.b
if(typeof r!=="number")return r.T()
return new V.X(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
r=this.a
$.x().toString
if(typeof s!=="number")return s.a1()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a1()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.w.prototype={
bX:function(a){return Math.sqrt(this.a_(this))},
a_:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bY:function(a,b){return new V.w(V.jF(this.a,a.a,b),V.jF(this.b,a.b,b),V.jF(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.a_(s))
if(r===1)return s
return s.T(0,r)},
aO:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.w(s*r-q*p,q*o-n*r,n*p-s*o)},
u:function(a,b){return new V.w(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.w(-this.a,-this.b,-this.c)},
T:function(a,b){$.x().toString
if(Math.abs(b-0)<1e-9)return V.cj()
return new V.w(this.a/b,this.b/b,this.c/b)},
d9:function(){$.x().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.w))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.fy.prototype={
bf:function(a){var s=V.nH(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
I:function(a){var s=this.y
if(s!=null)s.w(a)},
sca:function(a,b){},
sbZ:function(a){var s,r=this,q=r.b
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bf(s)}q=new D.v("maximumLocation",q,r.b)
q.b=!0
r.I(q)}},
sc1:function(a){var s,r=this,q=r.c
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bf(s)}q=new D.v("minimumLocation",q,r.c)
q.b=!0
r.I(q)}},
sX:function(a,b){var s,r=this
b=r.bf(b)
s=r.d
$.x().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.v("location",s,b)
s.b=!0
r.I(s)}},
sc_:function(a){var s,r,q=this,p=q.e
$.x().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.v("maximumVelocity",p,a)
p.b=!0
q.I(p)}},
sM:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.v("velocity",r,a)
r.b=!0
s.I(r)}},
sbL:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.v("dampening",s,a)
s.b=!0
this.I(s)}},
ac:function(a,b){var s,r,q,p=this,o=p.f
$.x().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sX(0,p.d+s*b)
o=p.x
$.x().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sM(s)}}}
U.bP.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
aE:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bP))return!1
return J.B(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bm.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
I:function(a){var s=this.e
if(s!=null)s.w(a)},
a2:function(){return this.I(null)},
e2:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gax(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.I(s)},
eH:function(a,b){var s,r
for(s=b.gL(b),r=this.gax();s.t();)s.gE(s).gm().C(0,r)
s=new D.ak()
s.b=!0
this.I(s)},
aE:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a6()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.T(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.aE(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}q.f=s==null?V.br():s
p=q.e
if(p!=null)p.ai(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bm))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.B(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iR:1}
U.R.prototype={}
U.cg.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.y():s},
I:function(a){var s=this.cy
if(s!=null)s.w(a)},
a2:function(){return this.I(null)},
aM:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gcY().l(0,s.gbn())
s.a.c.gda().l(0,s.gbp())
s.a.c.gc9().l(0,s.gbr())
return!0},
bo:function(a){var s=this
if(!J.B(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bq:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.Y(a.d)
s=s.a_(s)
r=l.r
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.Y(a.d).v(0,2).T(0,s.ga4())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.v()
q=l.e
if(typeof q!=="number")return H.o(q)
r.sM(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.Y(q).v(0,2).T(0,s.ga4())
r=l.b
o=p.a
if(typeof o!=="number")return o.J()
n=l.e
if(typeof n!=="number")return H.o(n)
m=l.z
if(typeof m!=="number")return H.o(m)
r.sX(0,-o*n+m)
l.b.sM(0)
l.Q=a.z.Y(q).v(0,2).T(0,s.ga4())}l.a2()},
bs:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a_(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.v()
q=p.e
if(typeof q!=="number")return H.o(q)
s.sM(r*10*q)
p.a2()}},
aE:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a6()
if(o<n){p.ch=n
s=b.y
p.b.ac(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.ap(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iR:1}
U.ch.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.y():s},
I:function(a){var s=this.fx
if(s!=null)s.w(a)},
a2:function(){return this.I(null)},
aM:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gcY().l(0,q.gbn())
q.a.c.gda().l(0,q.gbp())
q.a.c.gc9().l(0,q.gbr())
s=q.a.d
r=s.f
s=r==null?s.f=D.y():r
s.l(0,q.gdW())
s=q.a.d
r=s.d
s=r==null?s.d=D.y():r
s.l(0,q.gdY())
s=q.a.e
r=s.b
s=r==null?s.b=D.y():r
s.l(0,q.gfb())
s=q.a.e
r=s.d
s=r==null?s.d=D.y():r
s.l(0,q.gf9())
s=q.a.e
r=s.c
s=r==null?s.c=D.y():r
s.l(0,q.gf7())
return!0},
af:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.J()
s=-s}if(this.r){if(typeof r!=="number")return r.J()
r=-r}return new V.X(s,r)},
bo:function(a){var s=this
t.c.a(a)
if(!J.B(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bq:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.Y(a.d)
s=s.a_(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.af(a.y.Y(a.d).v(0,2).T(0,s.ga4()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sM(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sM(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.af(r.Y(q).v(0,2).T(0,s.ga4()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sX(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.af(a.z.Y(q).v(0,2).T(0,s.ga4()))}l.a2()},
bs:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a_(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sM(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sM(-r*10*s)
p.a2()}},
dX:function(a){var s=this
if(t.x.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
dZ:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.B(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.af(r.Y(q).v(0,2).T(0,s.ga4()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sX(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.af(a.z.Y(q).v(0,2).T(0,s.ga4()))
l.a2()},
fc:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fa:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.Y(a.d)
s=s.a_(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.af(a.y.Y(a.d).v(0,2).T(0,s.ga4()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sM(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sM(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.af(r.Y(q).v(0,2).T(0,s.ga4()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sX(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.af(a.z.Y(q).v(0,2).T(0,s.ga4()))}l.a2()},
f8:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a_(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sM(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sM(-r*10*s)
p.a2()}},
aE:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a6()
if(o<n){p.dy=n
s=b.y
p.c.ac(0,s)
p.b.ac(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.ap(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.v(0,V.ap(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iR:1}
U.ci.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
I:function(a){var s=this.r
if(s!=null)s.w(a)},
aM:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.y():r
r=p.ge_()
s.l(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.y():q).l(0,r)
return!0},
e0:function(a){var s,r,q,p,o=this
if(!J.B(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.v()
p=s+r*q
if(s!==p){o.d=p
s=new D.v("zoom",s,p)
s.b=!0
o.I(s)}},
aE:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ap(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iR:1}
M.bN.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
R:function(a){var s=this.r
if(s!=null)s.w(a)},
aJ:function(){return this.R(null)},
eL:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.R(s)},
eN:function(a,b){var s,r
for(s=b.gL(b),r=this.gP();s.t();)s.gE(s).gm().C(0,r)
s=new D.ak()
s.b=!0
this.R(s)},
a5:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.T(s,s.length);s.t();){r=s.d
if(r!=null)r.a5(a)}q.f=!1},
$iaa:1}
M.bQ.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
R:function(a){var s=this.r
if(s!=null)s.w(a)},
aJ:function(){return this.R(null)},
saN:function(a){var s,r,q=this
if(a==null)a=new X.fX()
s=q.b
if(s!==a){if(s!=null)s.gm().C(0,q.gP())
r=q.b
q.b=a
a.gm().l(0,q.gP())
s=new D.v("camera",r,q.b)
s.b=!0
q.R(s)}},
saW:function(a,b){var s,r,q=this
if(b==null)b=X.jd(null)
s=q.c
if(s!==b){if(s!=null)s.gm().C(0,q.gP())
r=q.c
q.c=b
b.gm().l(0,q.gP())
s=new D.v("target",r,q.c)
s.b=!0
q.R(s)}},
saX:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().C(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gP())
q=new D.v("technique",s,r.d)
q.b=!0
r.R(q)}},
a5:function(a){var s=this
a.c4(s.d)
s.c.S(a)
s.b.S(a)
s.e.ac(0,a)
s.e.a5(a)
s.b.au(a)
s.c.toString
a.c3()},
$iaa:1}
M.bV.prototype={
R:function(a){var s=this.y
if(s!=null)s.w(a)},
aJ:function(){return this.R(null)},
ec:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bl()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aj()
s.b=!0
this.R(s)},
ee:function(a,b){var s,r
for(s=b.gL(b),r=this.gP();s.t();)s.gE(s).gm().C(0,r)
s=new D.ak()
s.b=!0
this.R(s)},
saN:function(a){var s,r,q=this
if(a==null)a=X.k3(null)
s=q.b
if(s!==a){if(s!=null)s.gm().C(0,q.gP())
r=q.b
q.b=a
a.gm().l(0,q.gP())
s=new D.v("camera",r,q.b)
s.b=!0
q.R(s)}},
saW:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().C(0,r.gP())
s=r.c
r.c=b
b.gm().l(0,r.gP())
q=new D.v("target",s,r.c)
q.b=!0
r.R(q)}},
saX:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().C(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gP())
q=new D.v("technique",s,r.d)
q.b=!0
r.R(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
a5:function(a){var s,r=this
a.c4(r.d)
r.c.S(a)
r.b.S(a)
s=r.d
if(s!=null)s.ac(0,a)
for(s=r.e.a,s=new J.T(s,s.length);s.t();)s.d.ac(0,a)
for(s=r.e.a,s=new J.T(s,s.length);s.t();)s.d.a5(a)
r.b.toString
a.cy.as()
a.db.as()
r.c.toString
a.c3()},
$iaa:1}
M.aa.prototype={}
A.fo.prototype={}
A.fp.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fB:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cX:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.Q.prototype={
gad:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.Q))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.h7.prototype={
dv:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.b4("")
r=c5.fr
if(r){s.a=c4
q=c4}else q=""
p=c5.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c5.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c5.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.mV(c5,s)
A.mX(c5,s)
A.mW(c5,s)
A.mZ(c5,s)
A.n_(c5,s)
A.mY(c5,s)
A.n0(c5,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c5.ry
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
s.a=q}if(c5.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c5.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c5.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c5.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c0.d6(0,q.charCodeAt(0)==0?q:q,A.mU(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.N(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.N(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.N(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.N(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.N(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.N(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.N(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.N(0,"colorMat"))
c0.r1=[]
q=c5.b6
if(q>0){c0.k4=c0.y.N(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.n(P.m(c2+n+c3))
p.push(r.a(k))}}if(c5.a.a)c0.r2=t.r.a(c0.y.N(0,"emissionClr"))
if(c5.b.a)c0.x1=t.r.a(c0.y.N(0,"ambientClr"))
if(c5.c.a)c0.y2=t.r.a(c0.y.N(0,"diffuseClr"))
if(c5.d.a)c0.b7=t.r.a(c0.y.N(0,"invDiffuseClr"))
r=c5.e.a
if(!r)q=!1
else q=!0
if(q){c0.d0=t.n.a(c0.y.N(0,"shininess"))
if(r)c0.d_=t.r.a(c0.y.N(0,"specularClr"))}if(c5.db){c0.d1=t.Q.a(c0.y.N(0,"envSampler"))
if(c5.r.a)c0.d2=t.r.a(c0.y.N(0,"reflectClr"))
r=c5.x.a
if(!r)q=!1
else q=!0
if(q){c0.d3=t.n.a(c0.y.N(0,"refraction"))
if(r)c0.d4=t.r.a(c0.y.N(0,"refractClr"))}}if(c5.y.a)c0.d5=t.n.a(c0.y.N(0,"alpha"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bM=new H.r(t.J)
c0.bN=new H.r(t.u)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="barLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.n(P.m(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.aa()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.n(P.m(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.n(P.m(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.n(P.m(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.e2(k,d,c,a3,a2,a1))}c0.bN.k(0,h,f)
n=c0.bM
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.bO=new H.r(t.J)
c0.bP=new H.r(t.L)
for(p=t.r,o=t.t,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.aa()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.n(P.m(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.e3(a7,a6,a5,k,d,a8))}c0.bP.k(0,h,f)
n=c0.bO
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.bQ=new H.r(t.J)
c0.bR=new H.r(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.e(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.n(P.m(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.n(P.m(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.aa()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.e6(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.bR.k(0,h,f)
a4=c0.bQ
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
a4.k(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.bS=new H.r(t.J)
c0.bT=new H.r(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.t,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.e(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.n(P.m(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.n(P.m(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.n(P.m(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.aa()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.n(P.m(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.n(P.m(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.n(P.m(c2+a9+c3))
o.a(b5)
b6=b5
b7=b4
a6=a0
a7=a}else{b6=c1
b7=b6
a6=b7
a7=a6}a4=(h&2)!==0
if(a4){a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.n(P.m(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.e9(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.bT.k(0,h,f)
e=c0.bS
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
e.k(0,h,k)}}}},
f1:function(a,b){if(b!=null&&b.d>=6)a.cd(b)}}
A.ft.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.fE.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.hv.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.hN.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.ha.prototype={
i:function(a){return this.aR}}
A.e2.prototype={}
A.e3.prototype={}
A.e6.prototype={}
A.e9.prototype={}
A.dH.prototype={
ck:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
d6:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cv(b,35633)
p.f=p.cv(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.n(P.m("Failed to link shader: "+H.e(q)))}p.f3()
p.f5()},
S:function(a){a.a.useProgram(this.r)
this.x.fB()},
cv:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.m("Error compiling shader '"+H.e(q)+"': "+H.e(s)))}return q},
f3:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fo(n,r.name,q))}p.x=new A.fp(o)},
f5:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fq(r.type,r.size,r.name,q))}p.y=new A.ic(o)},
ay:function(a,b,c){var s=this.a
if(a===1)return new A.e_(s,b,c)
else return A.jo(s,this.r,b,a,c)},
dR:function(a,b,c){var s=this.a
if(a===1)return new A.e7(s,b,c)
else return A.jo(s,this.r,b,a,c)},
dS:function(a,b,c){var s=this.a
if(a===1)return new A.e8(s,b,c)
else return A.jo(s,this.r,b,a,c)},
b3:function(a,b){return new P.ew(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fq:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ay(b,c,d)
case 5121:return s.ay(b,c,d)
case 5122:return s.ay(b,c,d)
case 5123:return s.ay(b,c,d)
case 5124:return s.ay(b,c,d)
case 5125:return s.ay(b,c,d)
case 5126:return new A.dZ(s.a,c,d)
case 35664:return new A.i8(s.a,c,d)
case 35665:return new A.e0(s.a,c,d)
case 35666:return new A.e1(s.a,c,d)
case 35667:return new A.i9(s.a,c,d)
case 35668:return new A.ia(s.a,c,d)
case 35669:return new A.ib(s.a,c,d)
case 35674:return new A.id(s.a,c,d)
case 35675:return new A.e4(s.a,c,d)
case 35676:return new A.e5(s.a,c,d)
case 35678:return s.dR(b,c,d)
case 35680:return s.dS(b,c,d)
case 35670:throw H.c(s.b3("BOOL",c))
case 35671:throw H.c(s.b3("BOOL_VEC2",c))
case 35672:throw H.c(s.b3("BOOL_VEC3",c))
case 35673:throw H.c(s.b3("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hM.prototype={}
A.i6.prototype={}
A.ic.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
N:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.G()},
G:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.e_.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.dZ.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.e0.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.e1.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.id.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.e4.prototype={
a7:function(a){var s=new Float32Array(H.cG(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.e5.prototype={
a7:function(a){var s=new Float32Array(H.cG(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.e7.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.e8.prototype={
cd:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iO.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bY(q.b,b).bY(q.d.bY(q.c,b),c)
a.sX(0,new V.M(p.a,p.b,p.c))
a.sh6(p.D())
q=1-b
s=1-c
s=new V.aB(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.B(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.W()}r.f.$3(a,b,c)}}
F.j2.prototype={
$2:function(a,b){return 0}}
F.j3.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.o(r)
s=this.b+r
r=a.f
r=new V.w(r.a,r.b,r.c).D()
a.sX(0,new V.M(r.a*s,r.b*s,r.c*s))}}
F.fQ.prototype={
aP:function(){var s=this
if(!s.gaQ()){C.a.C(s.a.a.d.b,s)
s.a.a.W()}s.by()
s.bz()
s.eW()},
bD:function(a){this.a=a
a.d.b.push(this)},
bE:function(a){this.b=a
a.d.c.push(this)},
f2:function(a){this.c=a
a.d.d.push(this)},
by:function(){var s=this.a
if(s!=null){C.a.C(s.d.b,this)
this.a=null}},
bz:function(){var s=this.b
if(s!=null){C.a.C(s.d.c,this)
this.b=null}},
eW:function(){var s=this.c
if(s!=null){C.a.C(s.d.d,this)
this.c=null}},
gaQ:function(){return this.a==null||this.b==null||this.c==null},
dL:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cj()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.d9())return p
return q.D()},
dN:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a1(0,n)
q=new V.w(o.a,o.b,o.c).D()
o=r.a1(0,n)
return q.aO(new V.w(o.a,o.b,o.c).D()).D()},
bI:function(){var s,r=this
if(r.d!=null)return!0
s=r.dL()
if(s==null){s=r.dN()
if(s==null)return!1}r.d=s
r.a.a.W()
return!0},
dK:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cj()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.d9())return p
return q.D()},
dM:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.x().toString
if(Math.abs(p-0)<1e-9){j=b.a1(0,e)
o=new V.w(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.J(0)}else{n=(j-s.b)/p
j=b.a1(0,e)
j=new V.M(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a1(0,h)
o=new V.w(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.J(0)}j=l.d
if(j!=null){m=j.D()
o=m.aO(o).D().aO(m).D()}return o},
bG:function(){var s,r=this
if(r.e!=null)return!0
s=r.dK()
if(s==null){s=r.dM()
if(s==null)return!1}r.e=s
r.a.a.W()
return!0},
gfl:function(a){var s=this
if(J.B(s.a,s.b))return!0
if(J.B(s.b,s.c))return!0
if(J.B(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var s,r,q=this
if(q.gaQ())return a+"disposed"
s=a+C.b.a9(J.Z(q.a.e),0)+", "+C.b.a9(J.Z(q.b.e),0)+", "+C.b.a9(J.Z(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
G:function(){return this.A("")}}
F.fR.prototype={}
F.hL.prototype={
aT:function(a,b,c){var s,r=b.a
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.h1.prototype={
aP:function(){var s=this
if(!s.gaQ()){C.a.C(s.a.a.c.b,s)
s.a.a.W()}s.by()
s.bz()},
bD:function(a){this.a=a
a.c.b.push(this)},
bE:function(a){this.b=a
a.c.c.push(this)},
by:function(){var s=this.a
if(s!=null){C.a.C(s.c.b,this)
this.a=null}},
bz:function(){var s=this.b
if(s!=null){C.a.C(s.c.c,this)
this.b=null}},
gaQ:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){if(this.gaQ())return a+"disposed"
return a+C.b.a9(J.Z(this.a.e),0)+", "+C.b.a9(J.Z(this.b.e),0)},
G:function(){return this.A("")}}
F.h2.prototype={}
F.i5.prototype={
aT:function(a,b,c){var s,r=b.a
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
return r==s.e}else{r=b.a
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
return r==s.e}else return!1}}}
F.hu.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.a9(J.Z(s.e),0)},
G:function(){return this.A("")}}
F.hE.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
c0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.q()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){p=e[q]
f.a.l(0,p.fp())}f.a.q()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.l(0,l)
m=new F.hu()
if(l.a==null)H.n(P.m("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.w(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.l(0,j)
n.a.l(0,i)
F.lu(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.l(0,j)
m.a.l(0,i)
m.a.l(0,g)
F.bW(j,i,g)}e=f.e
if(e!=null)e.ai(0)},
ao:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ao()||!1
if(!r.a.ao())s=!1
q=r.e
if(q!=null)q.ai(0)
return s},
fJ:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.gfD(s)
C.a.c5(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.aT(0,r,o)){q.push(o)
C.a.c5(s,p)}}if(q.length>1)b.c0(q)}}n.a.q()
n.c.c6()
n.d.c6()
n.b.fZ()
n.c.c7(new F.i5())
n.d.c7(new F.hL())
m=n.e
if(m!=null)m.ai(0)},
cS:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.ag().a)!==0?1:0
if((s&$.aP().a)!==0)++r
if((s&$.aO().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.bd().a)!==0)++r
if((s&$.cO().a)!==0)++r
if((s&$.cP().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.aN().a)!==0)++r
q=a5.gce(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fi(l)
j=k.gce(k)
n[l]=new Z.fv(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.d(h,i)
g=h[i].fI(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.d(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cG(o)),35044)
s.bindBuffer(a2,null)
b=new Z.bM(new Z.eg(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)}a0=Z.jq(s,34963,a)
b.b.push(new Z.bZ(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.q()
a.push(h.e)}a0=Z.jq(s,34963,a)
b.b.push(new Z.bZ(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.q()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.q()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].c
h.a.a.q()
a.push(h.e)}a0=Z.jq(s,34963,a)
b.b.push(new Z.bZ(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.A(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.A(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.A(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.A(r))}return C.a.p(q,"\n")},
W:function(){var s=this.e
if(s!=null)s.w(null)}}
F.hF.prototype={
fg:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.l(0,n)
s.a.l(0,q)
s.a.l(0,p)
o.push(F.bW(n,q,p))}return o},
fh:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.d(c,q)
k=c[q];++q
if(q>=l)return H.d(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.d(c,i)
h=c[i]
if(r<0||r>=l)return H.d(c,r)
g=c[r]
l=s.a
if(n){l.l(0,k)
s.a.l(0,j)
s.a.l(0,h)
f.push(F.bW(k,j,h))
s.a.l(0,k)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.bW(k,h,g))}else{l.l(0,j)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.bW(j,h,g))
s.a.l(0,j)
s.a.l(0,g)
s.a.l(0,k)
f.push(F.bW(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
c7:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.aT(0,n,l)){n.aP()
break}}}}},
c6:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.gfl(q)
if(r)q.aP()}},
ao:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bI())q=!1
return q},
bH:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bG())q=!1
return q},
i:function(a){return this.G()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(a))
return C.a.p(p,"\n")},
G:function(){return this.A("")}}
F.hG.prototype={
gj:function(a){return this.b.length},
c7:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.aT(0,n,l)){n.aP()
break}}}}},
c6:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.B(q.a,q.b)
if(r)q.aP()}},
i:function(a){return this.G()},
A:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].A(a+(""+s+". ")))}return C.a.p(q,"\n")},
G:function(){return this.A("")}}
F.hH.prototype={
gj:function(a){return this.b.length},
fZ:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.a.C(q.b.b,r)
q=r.a.a.e
if(q!=null)q.w(null)
q=r.a
if(q!=null){C.a.C(q.b.b,r)
r.a=null}}}},
i:function(a){return this.G()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(a))
return C.a.p(p,"\n")},
G:function(){return this.A("")}}
F.il.prototype={
bK:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.im(s.cx,p,m,r,q,o,n,a,l)},
fp:function(){return this.bK(null)},
sX:function(a,b){var s
if(!J.B(this.f,b)){this.f=b
s=this.a
if(s!=null)s.W()}},
sh6:function(a){var s
if(!J.B(this.z,a)){this.z=a
s=this.a
if(s!=null)s.W()}},
fI:function(a){var s,r=this
if(a.n(0,$.ag())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aP())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aO())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.bc())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.n(0,$.bd())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cO())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cP())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.n(0,$.bK()))return[r.ch]
else if(a.n(0,$.aN())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bI:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cj()
r.d.F(0,new F.iy(q))
r.r=q.a.D()
q=r.a
if(q!=null){q.W()
q=r.a.e
if(q!=null)q.ai(0)}return!0},
bG:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cj()
r.d.F(0,new F.ix(q))
r.x=q.a.D()
q=r.a
if(q!=null){q.W()
q=r.a.e
if(q!=null)q.ai(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.a9(J.Z(q.e),0))
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
o.push(V.A(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.p(o,", ")
return a+"{"+r+"}"},
G:function(){return this.A("")}}
F.iy.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.ix.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.io.prototype={
q:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.W()
return!0},
b5:function(a,b,c,d,e,f){var s=F.im(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
ao:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bI()
return!0},
bH:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bG()
return!0},
fk:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.z==null){o=p.r.D()
if(!J.B(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}}return!0},
i:function(a){return this.G()},
A:function(a){var s,r,q,p
this.q()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p)s.push(r[p].A(a))
return C.a.p(s,"\n")},
G:function(){return this.A("")}}
F.ip.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.d(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.d(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.d(r,b)
return r[b]},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.iq(s,b))
C.a.F(s.d,new F.ir(s,b))},
i:function(a){return this.G()},
G:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(""))
return C.a.p(p,"\n")}}
F.iq.prototype={
$1:function(a){if(!J.B(a.a,this.a))this.b.$1(a)}}
F.ir.prototype={
$1:function(a){var s=this.a
if(!J.B(a.a,s)&&!J.B(a.b,s))this.b.$1(a)}}
F.is.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.G()},
G:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(""))
return C.a.p(p,"\n")}}
F.iu.prototype={}
F.it.prototype={
aT:function(a,b,c){return J.B(b.f,c.f)}}
F.iv.prototype={}
F.hs.prototype={
c0:function(a){var s,r,q,p,o,n,m=V.cj()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.w(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.D()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){p=a[r]
o=q?null:m.D()
if(!J.B(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.w(null)}}}return null}}
F.iw.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.G()},
G:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].A(""))
return C.a.p(p,"\n")}}
O.dh.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.y():s},
U:function(a){var s=this.fr
if(s!=null)s.w(a)},
bw:function(){return this.U(null)},
cD:function(a){this.a=null
this.U(a)},
f_:function(){return this.cD(null)},
e6:function(a,b){var s=new D.aj()
s.b=!0
this.U(s)},
e8:function(a,b){var s=new D.ak()
s.b=!0
this.U(s)},
ct:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.r(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.gah()
n=d.h(0,p.gah())
d.k(0,o,n==null?1:n)}m=[]
d.F(0,new O.he(f,m))
C.a.aH(m,new O.hf())
l=new H.r(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=[]
l.F(0,new O.hg(f,k))
C.a.aH(k,new O.hh())
j=new H.r(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.gah()
n=j.h(0,p.gah())
j.k(0,o,n==null?1:n)}i=[]
j.F(0,new O.hi(f,i))
C.a.aH(i,new O.hj())
h=new H.r(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.l)(e),++q){p=e[q]
r=p.gah()
o=h.h(0,p.gah())
h.k(0,r,o==null?1:o)}g=[]
h.F(0,new O.hk(f,g))
C.a.aH(g,new O.hl())
e=C.c.Z(f.e.a.length+3,4)
f.dy.toString
return A.lz(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
dJ:function(a,b){if(b!=null)if(!C.a.K(a,b)){b.a=a.length
a.push(b)}},
ac:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.T(s,s.length);s.t();){r=s.d
r.toString
q=$.ik
if(q==null)q=$.ik=new V.w(0,0,1)
r.a=q
p=$.ij
r.d=p==null?$.ij=new V.w(0,1,0):p
p=$.ii
r.e=p==null?$.ii=new V.w(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bd(q).D()
r.d=o.bd(r.d).D()
r.e=o.bd(r.e).D()}}}},
dg:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ct()
s=b4.fr.h(0,b3.aR)
if(s==null){s=A.ly(b3,b4.a)
b4.cM(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.b7
b3=b5.e
if(!(b3 instanceof Z.bM))b3=b5.e=null
if(b3==null||!b3.d.n(0,q)){b3=r.k4
if(b3)b5.d.ao()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bH()
o.a.bH()
o=o.e
if(o!=null)o.ai(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.fk()
n=n.e
if(n!=null)n.ai(0)}l=b5.d.cS(new Z.eh(b4.a),q)
l.ap($.ag()).e=b2.a.Q.c
if(b3)l.ap($.aP()).e=b2.a.cx.c
if(p)l.ap($.aO()).e=b2.a.ch.c
if(r.r2)l.ap($.bc()).e=b2.a.cy.c
if(o)l.ap($.bd()).e=b2.a.db.c
if(r.ry)l.ap($.aN()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.S(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gV(p)
b3=b3.dy
b3.toString
b3.a7(p.a3(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gV(p)
o=b4.dx
o=b4.cx=p.v(0,o.gV(o))
p=o}b3=b3.fr
b3.toString
b3.a7(p.a3(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gfY()
o=b4.dx
o=b4.ch=p.v(0,o.gV(o))
p=o}b3=b3.fy
b3.toString
b3.a7(p.a3(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gV(p)
b3=b3.fx
b3.toString
b3.a7(p.a3(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a7(C.h.a3(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a7(C.h.a3(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a7(C.h.a3(p,!0))}if(r.b6>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.cG(p.a3(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}if(r.a.a){b3=b2.a
p=b2.f.f
b3=b3.r2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.k1){if(r.b.a){b3=b2.a
p=b2.r.f
b3=b3.x1
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.c.a){b3=b2.a
p=b2.x.f
b3=b3.y2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.d.a){b3=b2.a
p=b2.y.f
b3=b3.b7
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d0
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d_
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.z
if(b3.length>0){g=new H.r(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gah()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
b=J.cQ(b2.a.bN.h(0,d),c)
n=e.ghc()
m=$.aq
n=n.aZ(m==null?$.aq=new V.M(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghh()
m=$.aq
n=n.aZ(m==null?$.aq=new V.M(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gag(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gcZ()){n=e.gcN()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gcO()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gcP()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bM.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gV(p)
a0=new H.r(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
b=J.cQ(b2.a.bP.h(0,0),c)
n=a.bd(e.a).D()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.bO.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gV(p)
a3=new H.r(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gah()
c=a3.h(0,d)
if(c==null)c=0
a3.k(0,d,c+1)
b=J.cQ(b2.a.bR.h(0,d),c)
a4=a.v(0,e.gV(e))
n=e.gV(e)
m=$.aq
n=n.aZ(m==null?$.aq=new V.M(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aq
n=a4.aZ(n==null?$.aq=new V.M(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gag(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gat()
n=a4.bV(0)
m=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=b.d
b0.toString
h=new Float32Array(H.cG(new V.dj(m,a1,a2,a5,a6,a7,a8,a9,n).a3(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gat()
n=e.gat()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gat()
m=n.gaS(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaG()
n=e.gdn()
m=b.x
m.toString
a1=n.gfv(n)
a2=n.gfw(n)
a5=n.gfz()
n=n.gfu()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaG()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaG()
m=n.gaS(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gcZ()){n=e.gcN()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gcO()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gcP()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.bQ.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gV(p)
b1=new H.r(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gah()
c=b1.h(0,d)
if(c==null)c=0
b1.k(0,d,c+1)
b=J.cQ(b2.a.bT.h(0,d),c)
n=e.gfX(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghf(e).D()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.aZ(e.gfX(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gag(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gat()
n=e.gc9()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gc8(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghx()
m=b.x
m.a.uniform1f(m.d,n)
n=e.ghy()
m=b.y
m.a.uniform1f(m.d,n)
e.gat()
n=e.gat()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gat()
m=n.gaS(n)
if(m){m=b.dx
m.toString
a1=n.gaS(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gfF(n))}e.gaG()
n=e.gdn()
m=b.z
m.toString
a1=n.gfv(n)
a2=n.gfw(n)
a5=n.gfz()
n=n.gfu()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaG()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaG()
m=n.gaS(n)
if(m){m=b.dy
m.toString
a1=n.gaS(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gfF(n))}if(e.ghg()){n=e.ghe()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.ghd()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gcZ()){n=e.gcN()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gcO()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gcP()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.bS.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gV(p).bV(0)}b3=b3.id
b3.toString
b3.a7(p.a3(0,!0))}if(r.db){b2.dJ(k,b2.ch)
b3=b2.a
p=b2.ch
b3.f1(b3.d1,p)
if(r.r.a){b3=b2.a
p=b2.cx.f
b3=b3.d2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.d3
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.d4
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=r.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.d5
b3.a.uniform1f(b3.d,o)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].S(b4)
b3=b5.e
b3.S(b4)
b3.a5(b4)
b3.au(b4)
if(p)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(34067,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.cX()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.ct().aR}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.ft(a,C.c.Z(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fE(a,C.c.Z(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.hi.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hv(a,C.c.Z(b+3,4)*4))}}
O.hj.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.hk.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hN(a,C.c.Z(b+3,4)*4))}}
O.hl.prototype={
$2:function(a,b){return J.cR(a.a,b.a)}}
O.h8.prototype={
am:function(){var s,r=this
r.ci()
s=r.f
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.v(r.b,s,1)
s.b=!0
r.a.U(s)}}}
O.di.prototype={
am:function(){},
bA:function(a){var s,r,q=this
if(!q.c.n(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.am()
s=q.a
s.a=null
s.U(null)}}}
O.h9.prototype={}
O.ao.prototype={
cF:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.v(q.b+".color",s,a)
r.b=!0
q.a.U(r)}},
am:function(){this.ci()
this.cF(new V.J(1,1,1))},
sag:function(a,b){this.bA(new A.Q(!0,!1,!1))
this.cF(b)}}
O.hb.prototype={}
O.hc.prototype={
cG:function(a){var s=this,r=s.ch
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.v(s.b+".refraction",r,a)
r.b=!0
s.a.U(r)}},
am:function(){this.cj()
this.cG(1)}}
O.hd.prototype={
cH:function(a){var s=this,r=s.ch
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.v(s.b+".shininess",r,a)
r.b=!0
s.a.U(r)}},
am:function(){this.cj()
this.cH(100)}}
O.dI.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
U:function(a){var s=this.e
if(s!=null)s.w(a)},
bw:function(){return this.U(null)},
dg:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.hM(r,l)
s.ck(r,l)
s.d6(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.cM(s)}m.a=s}if(b.e==null){r=b.d.cS(new Z.eh(a.a),$.ag())
r.ap($.ag()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.S(a)}r=a.d
q=a.c
p=m.a
p.S(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.cd(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gV(q).bV(0)
p=p.db
p.toString
p.a7(q.a3(0,!0))
r=b.e
if(r instanceof Z.bM){r.S(a)
r.a5(a)
r.au(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.cX()
r=m.c
if(r!=null)r.au(a)}}
O.hT.prototype={}
T.hU.prototype={}
T.hV.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
S:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
au:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.hW.prototype={
az:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.N(s,"load",new T.hX(this,s,!1,b,!1,d,a),!1)},
f0:function(a,b,c){var s,r,q,p
b=V.jH(b)
s=V.jH(a.width)
r=V.jH(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.j9()
q.width=s
q.height=r
p=C.f.dk(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nk(p.getImageData(0,0,q.width,q.height))}}}
T.hX.prototype={
$1:function(a){var s=this,r=s.a,q=r.f0(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.M.h5(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.fA()}++r.e}}
X.j8.prototype={}
X.fV.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.y():s},
ae:function(a){var s=this.x
if(s!=null)s.w(a)},
scU:function(a,b){var s
if(this.b){this.b=!1
s=new D.v("clearColor",!0,!1)
s.b=!0
this.ae(s)}},
S:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.o(s)
o=C.d.ab(p*s)
p=q.b
if(typeof r!=="number")return H.o(r)
n=C.d.ab(p*r)
p=C.d.ab(q.c*s)
a.c=p
q=C.d.ab(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.fX.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
S:function(a){var s
a.cy.bb(V.br())
s=V.br()
a.db.bb(s)},
au:function(a){a.cy.as()
a.db.as()}}
X.dx.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.y():s},
ae:function(a){var s=this.f
if(s!=null)s.w(a)},
dG:function(){return this.ae(null)},
S:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.ap(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bb(i)
p=$.k4
if(p==null){p=V.k6()
o=V.jp()
n=$.kl
p=V.k0(p,o,n==null?$.kl=new V.w(0,0,-1):n)
$.k4=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aE(0,a,q)
if(r!=null)s=r.v(0,s)}a.db.bb(s)},
au:function(a){a.cy.as()
a.db.as()}}
X.hR.prototype={}
V.j1.prototype={
$1:function(a){var s=C.d.di(this.a.gfE(),2)
if(s!=="0.00")P.jI(s+" fps")}}
V.hI.prototype={
dA:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.N(o,"scroll",new V.hK(m),!1)},
cL:function(a){var s,r,q,p,o,n,m,l
this.f4()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fH(a)
q.toString
p=new H.H(p)
p=new P.bE(q.dj(new H.bp(p,p.gj(p))).a())
for(;p.t();){q=p.gE(p)
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
if(H.kP(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.ml(C.I,q,C.o,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+l
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
fe:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.k
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
f4:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.i_()
s.a=new H.r(t.V)
s.b=new H.r(t.w)
s.c=P.jZ(t.f)
s.d=s.H(0,p)
r=s.H(0,p).p(0,o)
q=K.S(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.H(0,o).p(0,o)
q=new K.az()
q.a=[]
r.a.push(q)
r=K.S(new H.H("*"))
q.a.push(r)
r=s.H(0,o).p(0,"BoldEnd")
q=K.S(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.H(0,p).p(0,n)
q=K.S(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.H(0,n).p(0,n)
q=new K.az()
q.a=[]
r.a.push(q)
r=K.S(new H.H("_"))
q.a.push(r)
r=s.H(0,n).p(0,m)
q=K.S(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.H(0,p).p(0,l)
q=K.S(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.H(0,l).p(0,l)
q=new K.az()
q.a=[]
r.a.push(q)
r=K.S(new H.H("`"))
q.a.push(r)
r=s.H(0,l).p(0,"CodeEnd")
q=K.S(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.H(0,p).p(0,k)
q=K.S(new H.H("["))
r.a.push(q)
r.c=!0
r=s.H(0,k).p(0,j)
q=K.S(new H.H("|"))
r.a.push(q)
q=s.H(0,k).p(0,i)
r=K.S(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.H(0,k).p(0,k)
r=new K.az()
r.a=[]
q.a.push(r)
q=K.S(new H.H("|]"))
r.a.push(q)
q=s.H(0,j).p(0,i)
r=K.S(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.H(0,j).p(0,j)
r=new K.az()
r.a=[]
q.a.push(r)
q=K.S(new H.H("|]"))
r.a.push(q)
s.H(0,p).p(0,h).a.push(new K.fm())
q=s.H(0,h).p(0,h)
r=new K.az()
r.a=[]
q.a.push(r)
q=K.S(new H.H("*_`["))
r.a.push(q)
q=s.H(0,"BoldEnd")
q.d=q.a.aY(o)
q=s.H(0,m)
q.d=q.a.aY(n)
q=s.H(0,"CodeEnd")
q.d=q.a.aY(l)
q=s.H(0,i)
q.d=q.a.aY("Link")
q=s.H(0,h)
q.d=q.a.aY(h)
this.b=s}}
V.hK.prototype={
$1:function(a){P.kg(C.i,new V.hJ(this.a))}}
V.hJ.prototype={
$0:function(){var s=C.d.ab(document.documentElement.scrollTop),r=this.a.style,q=H.e(-0.01*s)+"px"
r.top=q}}
O.j_.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return null}};(function aliases(){var s=J.a.prototype
s.ds=s.i
s=J.aX.prototype
s.dt=s.i
s=K.d7.prototype
s.dr=s.aD
s.cg=s.i
s=O.di.prototype
s.ci=s.am
s=O.ao.prototype
s.cj=s.am})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"my","ls",20)
r(P,"nd","lY",6)
r(P,"ne","lZ",6)
r(P,"nf","m_",6)
q(P,"kH","n8",7)
r(W,"oJ","fJ",21)
var k
p(k=E.bk.prototype,"gde",0,0,null,["$1","$0"],["df","fP"],0,0)
p(k,"gdc",0,0,null,["$1","$0"],["dd","fM"],0,0)
o(k,"gfK","fL",3)
o(k,"gfN","fO",3)
p(k=E.dU.prototype,"gcm",0,0,null,["$1","$0"],["co","cn"],0,0)
n(k,"gh1","dh",7)
m(k=X.ee.prototype,"gel","em",4)
m(k,"ge9","ea",4)
m(k,"gef","eg",2)
m(k,"gep","eq",8)
m(k,"gen","eo",8)
m(k,"geu","ev",2)
m(k,"gey","ez",2)
m(k,"gej","ek",2)
m(k,"gew","ex",2)
m(k,"geh","ei",2)
m(k,"geA","eB",18)
m(k,"geC","eD",4)
m(k,"geS","eT",5)
m(k,"geO","eP",5)
m(k,"geQ","eR",5)
p(D.bj.prototype,"gdB",0,0,null,["$1","$0"],["aj","dC"],0,0)
p(k=D.c3.prototype,"gcA",0,0,null,["$1","$0"],["cB","er"],0,0)
m(k,"geE","eF",19)
o(k,"ge3","e4",9)
o(k,"geI","eJ",9)
l(V.X.prototype,"gj","bX",10)
l(V.w.prototype,"gj","bX",10)
p(k=U.bm.prototype,"gax",0,0,null,["$1","$0"],["I","a2"],0,0)
o(k,"ge1","e2",11)
o(k,"geG","eH",11)
p(k=U.cg.prototype,"gax",0,0,null,["$1","$0"],["I","a2"],0,0)
m(k,"gbn","bo",1)
m(k,"gbp","bq",1)
m(k,"gbr","bs",1)
p(k=U.ch.prototype,"gax",0,0,null,["$1","$0"],["I","a2"],0,0)
m(k,"gbn","bo",1)
m(k,"gbp","bq",1)
m(k,"gbr","bs",1)
m(k,"gdW","dX",1)
m(k,"gdY","dZ",1)
m(k,"gfb","fc",1)
m(k,"gf9","fa",1)
m(k,"gf7","f8",1)
m(U.ci.prototype,"ge_","e0",1)
p(k=M.bN.prototype,"gP",0,0,null,["$1","$0"],["R","aJ"],0,0)
o(k,"geK","eL",12)
o(k,"geM","eN",12)
p(M.bQ.prototype,"gP",0,0,null,["$1","$0"],["R","aJ"],0,0)
p(k=M.bV.prototype,"gP",0,0,null,["$1","$0"],["R","aJ"],0,0)
o(k,"geb","ec",3)
o(k,"ged","ee",3)
p(k=O.dh.prototype,"gbv",0,0,null,["$1","$0"],["U","bw"],0,0)
p(k,"geZ",0,0,null,["$1","$0"],["cD","f_"],0,0)
o(k,"ge5","e6",13)
o(k,"ge7","e8",13)
p(O.dI.prototype,"gbv",0,0,null,["$1","$0"],["U","bw"],0,0)
p(X.dx.prototype,"gdF",0,0,null,["$1","$0"],["ae","dG"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.G,null)
q(P.G,[H.jg,J.a,J.T,P.co,P.f,H.bp,P.d9,H.bX,H.ec,H.i3,P.E,H.ht,H.eW,H.bh,P.an,H.h3,H.de,H.fZ,H.a9,H.ez,P.cA,P.bD,P.bE,P.ej,P.dP,P.dQ,P.ce,P.iN,P.cu,P.iG,P.cn,P.z,P.cY,P.iM,P.b8,P.a4,P.O,P.aR,P.dw,P.cd,P.ew,P.fU,P.am,P.df,P.a7,P.K,P.b4,W.fA,W.jc,W.jr,W.C,W.bY,P.cC,P.eP,K.fm,K.d7,K.hD,L.dN,L.dV,L.dW,L.i_,O.bi,O.c7,E.fu,E.bk,E.bg,E.bw,E.et,E.hx,E.dU,Z.eg,Z.eh,Z.bM,Z.bZ,Z.b7,D.fw,D.bl,D.P,X.cX,X.dc,X.h0,X.h5,X.a6,X.hr,X.i0,X.ee,D.bj,D.al,V.J,V.aw,V.fM,V.dj,V.bq,V.a0,V.M,V.aB,V.dD,V.X,V.w,U.cg,U.ch,U.ci,M.bQ,M.bV,M.aa,A.fo,A.fp,A.Q,A.ft,A.fE,A.hv,A.hN,A.ha,A.e2,A.e3,A.e6,A.e9,A.i6,A.ic,F.fQ,F.fR,F.h1,F.h2,F.hu,F.hE,F.hF,F.hG,F.hH,F.il,F.io,F.ip,F.is,F.iu,F.iv,F.iw,O.hT,O.di,O.hb,T.hW,X.j8,X.hR,X.fX,X.dx,V.hI])
q(J.a,[J.fY,J.c2,J.aX,J.a5,J.aW,J.ax,H.c9,W.b,W.fl,W.cW,W.ai,W.D,W.eo,W.a3,W.fD,W.fF,W.ep,W.bT,W.er,W.fG,W.h,W.ex,W.aT,W.fW,W.eB,W.aV,W.h4,W.hm,W.eF,W.eG,W.b_,W.eH,W.eJ,W.b1,W.eN,W.eQ,W.b2,W.eR,W.b3,W.eX,W.aE,W.f0,W.hZ,W.b5,W.f2,W.i1,W.ie,W.f8,W.fa,W.fc,W.fe,W.fg,P.bo,P.eD,P.bv,P.eL,P.hw,P.eY,P.bz,P.f4,P.fq,P.ek,P.dE,P.eU])
q(J.aX,[J.dy,J.bA,J.ad])
r(J.da,J.a5)
q(J.aW,[J.c1,J.c0])
r(P.c4,P.co)
q(P.c4,[H.bB,W.em,W.el,P.d5])
r(H.H,H.bB)
q(P.f,[H.i,H.aZ,H.ck,P.c_])
r(H.bU,H.aZ)
q(P.d9,[H.c6,H.ei])
q(P.E,[H.ds,H.db,H.eb,H.dF,H.eu,P.cU,P.dt,P.a2,P.ed,P.ea,P.dO,P.cZ,P.d0])
q(H.bh,[H.hS,H.h_,H.iV,H.iW,H.iX,P.iA,P.iz,P.iB,P.iC,P.iL,P.iK,P.iS,P.iI,P.iJ,P.h6,P.fH,P.fI,W.ho,W.hq,W.hC,W.hQ,W.iD,P.iT,P.fS,P.fT,P.fs,E.hy,E.hz,E.hA,E.hY,D.fO,D.fP,F.iO,F.j2,F.j3,F.iy,F.ix,F.iq,F.ir,O.he,O.hf,O.hg,O.hh,O.hi,O.hj,O.hk,O.hl,T.hX,V.j1,V.hK,V.hJ,O.j_])
q(H.hS,[H.hO,H.bL])
r(P.dg,P.an)
r(H.r,P.dg)
r(H.ay,H.i)
r(H.bu,H.c9)
q(H.bu,[H.cq,H.cs])
r(H.cr,H.cq)
r(H.b0,H.cr)
r(H.ct,H.cs)
r(H.c8,H.ct)
q(H.c8,[H.dl,H.dm,H.dn,H.dp,H.dq,H.ca,H.dr])
r(H.cB,H.eu)
r(P.cx,P.c_)
r(P.iH,P.iN)
r(P.cm,P.cu)
r(P.d_,P.dQ)
r(P.fK,P.cY)
r(P.ig,P.fK)
r(P.ih,P.d_)
q(P.O,[P.V,P.p])
q(P.a2,[P.by,P.d8])
q(W.b,[W.t,W.d4,W.aD,W.cv,W.aG,W.ae,W.cy,W.ef,W.bC,P.cV,P.av])
q(W.t,[W.I,W.ac])
q(W.I,[W.k,P.j])
q(W.k,[W.cS,W.cT,W.aQ,W.d6,W.bn,W.dG,W.aF])
r(W.fz,W.ai)
r(W.bR,W.eo)
q(W.a3,[W.fB,W.fC])
r(W.eq,W.ep)
r(W.bS,W.eq)
r(W.es,W.er)
r(W.d2,W.es)
r(W.aS,W.cW)
r(W.ey,W.ex)
r(W.d3,W.ey)
r(W.eC,W.eB)
r(W.aU,W.eC)
r(W.as,W.h)
q(W.as,[W.aY,W.a_,W.b6])
r(W.hn,W.eF)
r(W.hp,W.eG)
r(W.eI,W.eH)
r(W.dk,W.eI)
r(W.eK,W.eJ)
r(W.cb,W.eK)
r(W.eO,W.eN)
r(W.dz,W.eO)
r(W.hB,W.eQ)
r(W.cw,W.cv)
r(W.dK,W.cw)
r(W.eS,W.eR)
r(W.dL,W.eS)
r(W.hP,W.eX)
r(W.f1,W.f0)
r(W.dS,W.f1)
r(W.cz,W.cy)
r(W.dT,W.cz)
r(W.f3,W.f2)
r(W.dX,W.f3)
r(W.aH,W.a_)
r(W.f9,W.f8)
r(W.en,W.f9)
r(W.cl,W.bT)
r(W.fb,W.fa)
r(W.eA,W.fb)
r(W.fd,W.fc)
r(W.cp,W.fd)
r(W.ff,W.fe)
r(W.eT,W.ff)
r(W.fh,W.fg)
r(W.f_,W.fh)
r(W.ev,P.dP)
r(P.a8,P.eP)
r(P.eE,P.eD)
r(P.dd,P.eE)
r(P.eM,P.eL)
r(P.du,P.eM)
r(P.eZ,P.eY)
r(P.dR,P.eZ)
r(P.f5,P.f4)
r(P.dY,P.f5)
r(P.fr,P.ek)
r(P.dv,P.av)
r(P.eV,P.eU)
r(P.dM,P.eV)
q(K.d7,[K.az,L.i2])
q(E.fu,[Z.fv,A.dH,T.hU])
q(D.P,[D.aj,D.ak,D.v,X.dA])
q(X.dA,[X.c5,X.bs,X.bt,X.cf])
q(O.bi,[D.c3,U.bm,M.bN])
q(D.fw,[U.fy,U.R])
r(U.bP,U.R)
q(A.dH,[A.h7,A.hM])
q(A.i6,[A.e_,A.i9,A.ia,A.ib,A.i7,A.dZ,A.i8,A.e0,A.e1,A.id,A.e4,A.e5,A.e7,A.e8])
r(F.hL,F.fR)
r(F.i5,F.h2)
r(F.it,F.iu)
r(F.hs,F.iv)
q(O.hT,[O.dh,O.dI])
q(O.di,[O.h8,O.h9,O.ao])
q(O.ao,[O.hc,O.hd])
r(T.hV,T.hU)
r(X.fV,X.hR)
s(H.bB,H.ec)
s(H.cq,P.z)
s(H.cr,H.bX)
s(H.cs,P.z)
s(H.ct,H.bX)
s(P.co,P.z)
s(W.eo,W.fA)
s(W.ep,P.z)
s(W.eq,W.C)
s(W.er,P.z)
s(W.es,W.C)
s(W.ex,P.z)
s(W.ey,W.C)
s(W.eB,P.z)
s(W.eC,W.C)
s(W.eF,P.an)
s(W.eG,P.an)
s(W.eH,P.z)
s(W.eI,W.C)
s(W.eJ,P.z)
s(W.eK,W.C)
s(W.eN,P.z)
s(W.eO,W.C)
s(W.eQ,P.an)
s(W.cv,P.z)
s(W.cw,W.C)
s(W.eR,P.z)
s(W.eS,W.C)
s(W.eX,P.an)
s(W.f0,P.z)
s(W.f1,W.C)
s(W.cy,P.z)
s(W.cz,W.C)
s(W.f2,P.z)
s(W.f3,W.C)
s(W.f8,P.z)
s(W.f9,W.C)
s(W.fa,P.z)
s(W.fb,W.C)
s(W.fc,P.z)
s(W.fd,W.C)
s(W.fe,P.z)
s(W.ff,W.C)
s(W.fg,P.z)
s(W.fh,W.C)
s(P.eD,P.z)
s(P.eE,W.C)
s(P.eL,P.z)
s(P.eM,W.C)
s(P.eY,P.z)
s(P.eZ,W.C)
s(P.f4,P.z)
s(P.f5,W.C)
s(P.ek,P.an)
s(P.eU,P.z)
s(P.eV,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",V:"double",O:"num",K:"String",b8:"bool",a7:"Null",am:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([P*])","~(P*)","~(a_*)","~(p*,f<bk*>*)","~(h*)","~(b6*)","~(~())","~()","~(aY*)","~(p*,f<al*>*)","V*()","~(p*,f<R*>*)","~(p*,f<aa*>*)","~(p*,f<bq*>*)","@(@)","a7(@)","a7(G?,G?)","a7(@,@)","~(aH*)","b8*(f<al*>*)","p(@,@)","K(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mi(v.typeUniverse,JSON.parse('{"ad":"aX","dy":"aX","bA":"aX","nJ":"h","nT":"h","nL":"av","nK":"b","o_":"b","o1":"b","nI":"j","nV":"j","nM":"k","nY":"k","nW":"t","nS":"t","op":"ae","nQ":"as","nN":"ac","o2":"ac","o0":"a_","nX":"aU","nZ":"b0","a5":{"i":["1"],"f":["1"]},"da":{"i":["1"],"f":["1"]},"aW":{"V":[],"O":[]},"c1":{"V":[],"p":[],"O":[]},"c0":{"V":[],"O":[]},"ax":{"K":[]},"H":{"i":["p"],"f":["p"]},"i":{"f":["1"]},"aZ":{"f":["2"]},"bU":{"i":["2"],"f":["2"]},"ck":{"f":["1"]},"bB":{"i":["1"],"f":["1"]},"ds":{"E":[]},"db":{"E":[]},"eb":{"E":[]},"dF":{"E":[]},"ay":{"i":["1"],"f":["1"]},"bu":{"q":["1"]},"b0":{"q":["V"],"i":["V"],"f":["V"]},"c8":{"q":["p"],"i":["p"],"f":["p"]},"dl":{"q":["p"],"i":["p"],"f":["p"]},"dm":{"q":["p"],"i":["p"],"f":["p"]},"dn":{"q":["p"],"i":["p"],"f":["p"]},"dp":{"q":["p"],"i":["p"],"f":["p"]},"dq":{"q":["p"],"i":["p"],"f":["p"]},"ca":{"q":["p"],"i":["p"],"f":["p"]},"dr":{"q":["p"],"i":["p"],"f":["p"]},"eu":{"E":[]},"cB":{"E":[]},"cA":{"ce":[]},"cx":{"f":["1"]},"cm":{"i":["1"],"f":["1"]},"c_":{"f":["1"]},"c4":{"i":["1"],"f":["1"]},"cu":{"i":["1"],"f":["1"]},"V":{"O":[]},"cU":{"E":[]},"dt":{"E":[]},"a2":{"E":[]},"by":{"E":[]},"d8":{"E":[]},"ed":{"E":[]},"ea":{"E":[]},"dO":{"E":[]},"cZ":{"E":[]},"dw":{"E":[]},"cd":{"E":[]},"d0":{"E":[]},"p":{"O":[]},"am":{"i":["1"],"f":["1"]},"k":{"I":[],"t":[],"b":[]},"cS":{"I":[],"t":[],"b":[]},"cT":{"I":[],"t":[],"b":[]},"aQ":{"I":[],"t":[],"b":[]},"ac":{"t":[],"b":[]},"bS":{"q":["a8<O>"],"i":["a8<O>"],"f":["a8<O>"]},"bT":{"a8":["O"]},"d2":{"q":["K"],"i":["K"],"f":["K"]},"em":{"i":["I"],"f":["I"]},"I":{"t":[],"b":[]},"d3":{"q":["aS"],"i":["aS"],"f":["aS"]},"d4":{"b":[]},"d6":{"I":[],"t":[],"b":[]},"aU":{"q":["t"],"i":["t"],"f":["t"]},"bn":{"I":[],"t":[],"b":[]},"aY":{"h":[]},"dk":{"q":["b_"],"i":["b_"],"f":["b_"]},"a_":{"h":[]},"el":{"i":["t"],"f":["t"]},"t":{"b":[]},"cb":{"q":["t"],"i":["t"],"f":["t"]},"dz":{"q":["b1"],"i":["b1"],"f":["b1"]},"dG":{"I":[],"t":[],"b":[]},"aD":{"b":[]},"dK":{"q":["aD"],"b":[],"i":["aD"],"f":["aD"]},"dL":{"q":["b2"],"i":["b2"],"f":["b2"]},"aF":{"I":[],"t":[],"b":[]},"aG":{"b":[]},"ae":{"b":[]},"dS":{"q":["ae"],"i":["ae"],"f":["ae"]},"dT":{"q":["aG"],"b":[],"i":["aG"],"f":["aG"]},"b6":{"h":[]},"dX":{"q":["b5"],"i":["b5"],"f":["b5"]},"as":{"h":[]},"ef":{"b":[]},"aH":{"a_":[],"h":[]},"bC":{"b":[]},"en":{"q":["D"],"i":["D"],"f":["D"]},"cl":{"a8":["O"]},"eA":{"q":["aT?"],"i":["aT?"],"f":["aT?"]},"cp":{"q":["t"],"i":["t"],"f":["t"]},"eT":{"q":["b3"],"i":["b3"],"f":["b3"]},"f_":{"q":["aE"],"i":["aE"],"f":["aE"]},"cC":{"aV":[]},"d5":{"i":["I"],"f":["I"]},"a8":{"eP":["1"]},"dd":{"i":["bo"],"f":["bo"]},"du":{"i":["bv"],"f":["bv"]},"dR":{"i":["K"],"f":["K"]},"j":{"I":[],"t":[],"b":[]},"dY":{"i":["bz"],"f":["bz"]},"cV":{"b":[]},"av":{"b":[]},"dv":{"b":[]},"dM":{"i":["df<@,@>"],"f":["df<@,@>"]},"bi":{"f":["1*"]},"aj":{"P":[]},"ak":{"P":[]},"v":{"P":[]},"c5":{"P":[]},"bs":{"P":[]},"bt":{"P":[]},"dA":{"P":[]},"cf":{"P":[]},"bj":{"al":[]},"c3":{"f":["al*"]},"bP":{"R":[]},"bm":{"R":[],"f":["R*"]},"cg":{"R":[]},"ch":{"R":[]},"ci":{"R":[]},"bN":{"aa":[],"f":["aa*"]},"bQ":{"aa":[]},"bV":{"aa":[]}}'))
H.mh(v.typeUniverse,JSON.parse('{"a5":1,"da":1,"T":1,"i":1,"bp":1,"aZ":2,"bU":2,"c6":2,"ck":1,"ei":1,"bX":1,"ec":1,"bB":1,"ay":1,"de":1,"bu":1,"bE":1,"cx":1,"dP":1,"dQ":2,"cn":1,"c_":1,"c4":1,"z":1,"dg":2,"an":2,"cu":1,"co":1,"cY":2,"d_":2,"f":1,"d9":1,"am":1,"ev":1,"C":1,"bY":1,"bi":1,"aj":1,"ak":1,"v":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.no
return{U:s("i<@>"),h:s("I"),C:s("E"),D:s("h"),Z:s("nU"),s:s("aV"),R:s("bn"),b:s("a5<@>"),T:s("c2"),g:s("ad"),p:s("q<@>"),G:s("r<K*,dH*>"),V:s("r<K*,dN*>"),i:s("r<K*,K*>"),w:s("r<K*,dW*>"),u:s("r<p*,am<e2*>*>"),L:s("r<p*,am<e3*>*>"),W:s("r<p*,am<e6*>*>"),M:s("r<p*,am<e9*>*>"),J:s("r<p*,e_*>"),E:s("r<p*,b8*>"),a:s("r<p*,p*>"),P:s("a7"),K:s("G"),I:s("a8<O>"),N:s("K"),k:s("aF"),Y:s("ce"),o:s("bA"),v:s("b8"),d:s("V"),z:s("@"),S:s("p"),B:s("aQ*"),x:s("c5*"),c:s("bs*"),F:s("bt*"),A:s("0&*"),_:s("G*"),f:s("K*"),j:s("dV*"),m:s("cf*"),n:s("dZ*"),r:s("e0*"),y:s("e1*"),O:s("e4*"),q:s("e5*"),t:s("e7*"),Q:s("e8*"),e:s("p*"),l:s("jV<a7>?"),X:s("G?"),H:s("O")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.aQ.prototype
C.F=J.a.prototype
C.a=J.a5.prototype
C.G=J.c0.prototype
C.c=J.c1.prototype
C.h=J.c2.prototype
C.d=J.aW.prototype
C.b=J.ax.prototype
C.H=J.ad.prototype
C.q=J.dy.prototype
C.M=P.dE.prototype
C.j=J.bA.prototype
C.r=W.aH.prototype
C.t=W.bC.prototype
C.u=new E.bg("Browser.chrome")
C.k=new E.bg("Browser.firefox")
C.l=new E.bg("Browser.edge")
C.v=new E.bg("Browser.other")
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.C=new P.dw()
C.o=new P.ig()
C.D=new P.ih()
C.e=new P.iH()
C.i=new P.aR(0)
C.E=new P.aR(5e6)
C.I=s([0,0,65498,45055,65535,34815,65534,18431])
C.J=new E.bw("OperatingSystem.windows")
C.p=new E.bw("OperatingSystem.mac")
C.K=new E.bw("OperatingSystem.linux")
C.L=new E.bw("OperatingSystem.other")
C.N=new P.bD(null,2)})();(function staticFields(){$.kq=null
$.ah=0
$.jP=null
$.jO=null
$.kI=null
$.kG=null
$.kN=null
$.iU=null
$.iY=null
$.jE=null
$.bF=null
$.cJ=null
$.cK=null
$.jz=!1
$.af=C.e
$.Y=[]
$.fL=null
$.k1=null
$.k5=null
$.aq=null
$.kb=null
$.kk=null
$.km=null
$.ii=null
$.ij=null
$.ik=null
$.kl=null
$.k4=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"nR","kU",function(){return H.nr("_$dart_dartClosure")})
s($,"o3","kV",function(){return H.ar(H.i4({
toString:function(){return"$receiver$"}}))})
s($,"o4","kW",function(){return H.ar(H.i4({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"o5","kX",function(){return H.ar(H.i4(null))})
s($,"o6","kY",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o9","l0",function(){return H.ar(H.i4(void 0))})
s($,"oa","l1",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"o8","l_",function(){return H.ar(H.ki(null))})
s($,"o7","kZ",function(){return H.ar(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"oc","l3",function(){return H.ar(H.ki(void 0))})
s($,"ob","l2",function(){return H.ar(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"oq","jJ",function(){return P.lX()})
s($,"os","l7",function(){return P.lL("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oj","l6",function(){return Z.ab(0)})
s($,"od","l4",function(){return Z.ab(511)})
s($,"ol","ag",function(){return Z.ab(1)})
s($,"ok","aP",function(){return Z.ab(2)})
s($,"of","aO",function(){return Z.ab(4)})
s($,"om","bc",function(){return Z.ab(8)})
s($,"on","bd",function(){return Z.ab(16)})
s($,"og","cO",function(){return Z.ab(32)})
s($,"oh","cP",function(){return Z.ab(64)})
s($,"oi","l5",function(){return Z.ab(96)})
s($,"oo","bK",function(){return Z.ab(128)})
s($,"oe","aN",function(){return Z.ab(256)})
s($,"nP","kT",function(){return new V.fM()})
s($,"nO","x",function(){return $.kT()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c9,ArrayBufferView:H.c9,Float32Array:H.b0,Float64Array:H.b0,Int16Array:H.dl,Int32Array:H.dm,Int8Array:H.dn,Uint16Array:H.dp,Uint32Array:H.dq,Uint8ClampedArray:H.ca,CanvasPixelArray:H.ca,Uint8Array:H.dr,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fl,HTMLAnchorElement:W.cS,HTMLAreaElement:W.cT,Blob:W.cW,HTMLCanvasElement:W.aQ,CDATASection:W.ac,CharacterData:W.ac,Comment:W.ac,ProcessingInstruction:W.ac,Text:W.ac,CSSPerspective:W.fz,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bR,MSStyleCSSProperties:W.bR,CSS2Properties:W.bR,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.fB,CSSUnparsedValue:W.fC,DataTransferItemList:W.fD,DOMException:W.fF,ClientRectList:W.bS,DOMRectList:W.bS,DOMRectReadOnly:W.bT,DOMStringList:W.d2,DOMTokenList:W.fG,Element:W.I,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aS,FileList:W.d3,FileWriter:W.d4,HTMLFormElement:W.d6,Gamepad:W.aT,History:W.fW,HTMLCollection:W.aU,HTMLFormControlsCollection:W.aU,HTMLOptionsCollection:W.aU,ImageData:W.aV,HTMLImageElement:W.bn,KeyboardEvent:W.aY,Location:W.h4,MediaList:W.hm,MIDIInputMap:W.hn,MIDIOutputMap:W.hp,MimeType:W.b_,MimeTypeArray:W.dk,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cb,RadioNodeList:W.cb,Plugin:W.b1,PluginArray:W.dz,RTCStatsReport:W.hB,HTMLSelectElement:W.dG,SourceBuffer:W.aD,SourceBufferList:W.dK,SpeechGrammar:W.b2,SpeechGrammarList:W.dL,SpeechRecognitionResult:W.b3,Storage:W.hP,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableCellElement:W.aF,HTMLTableDataCellElement:W.aF,HTMLTableHeaderCellElement:W.aF,TextTrack:W.aG,TextTrackCue:W.ae,VTTCue:W.ae,TextTrackCueList:W.dS,TextTrackList:W.dT,TimeRanges:W.hZ,Touch:W.b5,TouchEvent:W.b6,TouchList:W.dX,TrackDefaultList:W.i1,CompositionEvent:W.as,FocusEvent:W.as,TextEvent:W.as,UIEvent:W.as,URL:W.ie,VideoTrackList:W.ef,WheelEvent:W.aH,Window:W.bC,DOMWindow:W.bC,CSSRuleList:W.en,ClientRect:W.cl,DOMRect:W.cl,GamepadList:W.eA,NamedNodeMap:W.cp,MozNamedAttrMap:W.cp,SpeechRecognitionResultList:W.eT,StyleSheetList:W.f_,SVGLength:P.bo,SVGLengthList:P.dd,SVGNumber:P.bv,SVGNumberList:P.du,SVGPointList:P.hw,SVGStringList:P.dR,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bz,SVGTransformList:P.dY,AudioBuffer:P.fq,AudioParamMap:P.fr,AudioTrackList:P.cV,AudioContext:P.av,webkitAudioContext:P.av,BaseAudioContext:P.av,OfflineAudioContext:P.dv,WebGL2RenderingContext:P.dE,SQLResultSetRowList:P.dM})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.b0.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
W.cv.$nativeSuperclassTag="EventTarget"
W.cw.$nativeSuperclassTag="EventTarget"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(O.kL,[])
else O.kL([])})})()
//# sourceMappingURL=test.dart.js.map
