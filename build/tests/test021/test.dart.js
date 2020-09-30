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
a[c]=function(){a[c]=function(){H.qw(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lv(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l1:function l1(){},
l3:function(a){return new H.ed(a)},
ks:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oa:function(a,b,c,d){if(t.G.b(a))return new H.cp(a,b,c.J("@<0>").aX(d).J("cp<1,2>"))
return new H.aO(a,b,c.J("@<0>").aX(d).J("aO<1,2>"))},
ia:function(){return new P.c1("No element")},
o0:function(){return new P.c1("Too many elements")},
ow:function(a,b){var s=J.aI(a)
if(typeof s!=="number")return s.W()
H.eL(a,0,s-1,b)},
eL:function(a,b,c,d){if(c-b<=32)H.ov(a,b,c,d)
else H.ou(a,b,c,d)},
ov:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aZ(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a0()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
ou:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a1(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a1(a6+a7,2),d=e-h,c=e+h,b=J.aZ(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
if(typeof n!=="number")return n.a9()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a0()
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
if(typeof j!=="number")return j.a9()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a0()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a0()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a9()
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
H.eL(a5,a6,r-2,a8)
H.eL(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.H(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.H(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a9()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eL(a5,r,q,a8)}else H.eL(a5,r,q,a8)},
ed:function ed(a){this.a=a},
p:function p(a){this.a=a},
k:function k(){},
cC:function cC(){},
bb:function bb(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
eh:function eh(a,b){this.a=null
this.b=a
this.c=b},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b){this.a=a
this.b=b},
cs:function cs(){},
fi:function fi(){},
c3:function c3(){},
nT:function(){throw H.b(P.A("Cannot modify unmodifiable Map"))},
nf:function(a){var s,r=H.ne(a)
if(r!=null)return r
s="minified:"+a
return s},
n6:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a4(a)
if(typeof s!="string")throw H.b(H.aw(a))
return s},
cN:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m7:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a3(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
eF:function(a){return H.oe(a)},
oe:function(a){var s,r,q
if(a instanceof P.N)return H.am(H.bH(a),null)
if(J.dz(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.m6(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.m6(q))return q}}return H.am(H.bH(a),null)},
m6:function(a){var s=a!=="Object"&&a!==""
return s},
of:function(){if(!!self.location)return self.location.href
return null},
m5:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
on:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.ca(q))throw H.b(H.aw(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aO(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.aw(q))}return H.m5(p)},
m8:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.ca(q))throw H.b(H.aw(q))
if(q<0)throw H.b(H.aw(q))
if(q>65535)return H.on(a)}return H.m5(a)},
oo:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.io()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aq:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aO(s,10))>>>0,56320|s&1023)}}throw H.b(P.a3(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
om:function(a){var s=H.bZ(a).getFullYear()+0
return s},
ok:function(a){var s=H.bZ(a).getMonth()+1
return s},
og:function(a){var s=H.bZ(a).getDate()+0
return s},
oh:function(a){var s=H.bZ(a).getHours()+0
return s},
oj:function(a){var s=H.bZ(a).getMinutes()+0
return s},
ol:function(a){var s=H.bZ(a).getSeconds()+0
return s},
oi:function(a){var s=H.bZ(a).getMilliseconds()+0
return s},
v:function(a){throw H.b(H.aw(a))},
c:function(a,b){if(a==null)J.aI(a)
throw H.b(H.ce(a,b))},
ce:function(a,b){var s,r,q="index"
if(!H.ca(b))return new P.af(!0,b,q,null)
s=J.aI(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eG(b,q)},
qe:function(a,b,c){if(a>c)return P.a3(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a3(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
aw:function(a){return new P.af(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.eu()
s=new Error()
s.dartException=a
r=H.qx
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qx:function(){return J.a4(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b5(a))},
aV:function(a){var s,r,q,p,o,n
a=H.na(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jd(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
je:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mk:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m2:function(a,b){return new H.et(a,b==null?null:b.method)},
l2:function(a,b){var s=b==null,r=s?null:b.method
return new H.eb(a,r,s?null:b.receiver)},
ad:function(a){if(a==null)return new H.iL(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bI(a,a.dartException)
return H.q7(a)},
bI:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q7:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aO(r,16)&8191)===10)switch(q){case 438:return H.bI(a,H.l2(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bI(a,H.m2(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.ni()
o=$.nj()
n=$.nk()
m=$.nl()
l=$.no()
k=$.np()
j=$.nn()
$.nm()
i=$.nr()
h=$.nq()
g=p.ai(s)
if(g!=null)return H.bI(a,H.l2(s,g))
else{g=o.ai(s)
if(g!=null){g.method="call"
return H.bI(a,H.l2(s,g))}else{g=n.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=l.ai(s)
if(g==null){g=k.ai(s)
if(g==null){g=j.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=i.ai(s)
if(g==null){g=h.ai(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bI(a,H.m2(s,g))}}return H.bI(a,new H.fh(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cQ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bI(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cQ()
return a},
ly:function(a){var s
if(a==null)return new H.h6(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.h6(a)},
qg:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qo:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
cd:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qo)
a.$identity=s
return s},
nS:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eS().constructor.prototype):Object.create(new H.bM(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aJ
if(typeof r!=="number")return r.w()
$.aJ=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lQ(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nO(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lQ(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nO:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n4,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nM:H.nL
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nP:function(a,b,c,d){var s=H.lO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lQ:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nR(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nP(r,!p,s,b)
if(r===0){p=$.aJ
if(typeof p!=="number")return p.w()
$.aJ=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kR())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aJ
if(typeof p!=="number")return p.w()
$.aJ=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kR())+"."+H.f(s)+"("+m+");}")()},
nQ:function(a,b,c,d){var s=H.lO,r=H.nN
switch(b?-1:a){case 0:throw H.b(new H.eJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nR:function(a,b){var s,r,q,p,o,n,m=H.kR(),l=$.lM
if(l==null)l=$.lM=H.lL("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nQ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aJ
if(typeof o!=="number")return o.w()
$.aJ=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aJ
if(typeof o!=="number")return o.w()
$.aJ=o+1
return new Function(p+o+"}")()},
lv:function(a,b,c,d,e,f,g){return H.nS(a,b,c,d,!!e,!!f,g)},
nL:function(a,b){return H.hk(v.typeUniverse,H.bH(a.a),b)},
nM:function(a,b){return H.hk(v.typeUniverse,H.bH(a.c),b)},
lO:function(a){return a.a},
nN:function(a){return a.c},
kR:function(){var s=$.lN
return s==null?$.lN=H.lL("self"):s},
lL:function(a){var s,r,q,p=new H.bM("self","target","receiver","name"),o=J.l0(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.ci("Field name "+a+" not found."))},
qw:function(a){throw H.b(new P.dT(a))},
qi:function(a){return v.getIsolateTag(a)},
rD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qr:function(a){var s,r,q,p,o,n=$.n3.$1(a),m=$.kr[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kx[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mY.$2(a,n)
if(q!=null){m=$.kr[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kx[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kH(s)
$.kr[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kx[n]=s
return s}if(p==="-"){o=H.kH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n8(a,s)
if(p==="*")throw H.b(P.jn(n))
if(v.leafTags[n]===true){o=H.kH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n8(a,s)},
n8:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lA(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kH:function(a){return J.lA(a,!1,null,!!a.$iz)},
qs:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kH(s)
else return J.lA(s,c,null,null)},
qm:function(){if(!0===$.lz)return
$.lz=!0
H.qn()},
qn:function(){var s,r,q,p,o,n,m,l
$.kr=Object.create(null)
$.kx=Object.create(null)
H.ql()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n9.$1(o)
if(n!=null){m=H.qs(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ql:function(){var s,r,q,p,o,n,m=C.J()
m=H.cc(C.K,H.cc(C.L,H.cc(C.v,H.cc(C.v,H.cc(C.M,H.cc(C.N,H.cc(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n3=new H.kt(p)
$.mY=new H.ku(o)
$.n9=new H.kv(n)},
cc:function(a,b){return a(b)||b},
o4:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a2("Illegal RegExp pattern ("+String(n)+")",a,null))},
nc:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qf:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
na:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lC:function(a,b,c){var s=H.qv(a,b,c)
return s},
qv:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.na(b),'g'),H.qf(c))},
ck:function ck(){},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
et:function et(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a},
iL:function iL(a){this.a=a},
h6:function h6(a){this.a=a
this.b=null},
br:function br(){},
eZ:function eZ(){},
eS:function eS(){},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ic:function ic(a){this.a=a},
ig:function ig(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cz:function cz(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
ea:function ea(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dt:function(a){return a},
aY:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ce(b,a))},
pl:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qe(a,b,c))
return b},
cI:function cI(){},
X:function X(){},
bW:function bW(){},
by:function by(){},
cJ:function cJ(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cK:function cK(){},
bX:function bX(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
os:function(a,b){var s=b.c
return s==null?b.c=H.li(a,b.z,!0):s},
me:function(a,b){var s=b.c
return s==null?b.c=H.dn(a,"lU",[b.z]):s},
mf:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mf(a.z)
return s===11||s===12},
or:function(a){return a.cy},
lx:function(a){return H.lj(v.typeUniverse,a,!1)},
bi:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.mJ(a,r,!0)
case 7:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.li(a,r,!0)
case 8:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.mI(a,r,!0)
case 9:q=b.Q
p=H.dy(a,q,a0,a1)
if(p===q)return b
return H.dn(a,b.z,p)
case 10:o=b.z
n=H.bi(a,o,a0,a1)
m=b.Q
l=H.dy(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lg(a,n,l)
case 11:k=b.z
j=H.bi(a,k,a0,a1)
i=b.Q
h=H.q4(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mH(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dy(a,g,a0,a1)
o=b.z
n=H.bi(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lh(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hD("Attempted to substitute unexpected RTI kind "+c))}},
dy:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bi(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q5:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bi(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q4:function(a,b,c,d){var s,r=b.a,q=H.dy(a,r,c,d),p=b.b,o=H.dy(a,p,c,d),n=b.c,m=H.q5(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fJ()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
qb:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n4(s)
return a.$S()}return null},
n5:function(a,b){var s
if(H.mf(b))if(a instanceof H.br){s=H.qb(a)
if(s!=null)return s}return H.bH(a)},
bH:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lq(a)}if(Array.isArray(a))return H.lo(a)
return H.lq(J.dz(a))},
lo:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dv:function(a){var s=a.$ti
return s!=null?s:H.lq(a)},
lq:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.ps(a,s)},
ps:function(a,b){var s=a instanceof H.br?a.__proto__.__proto__.constructor:b,r=H.p3(v.typeUniverse,s.name)
b.$ccache=r
return r},
n4:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lj(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pr:function(a){var s,r,q=this,p=t.K
if(q===p)return H.du(q,a,H.pw)
if(!H.b0(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.du(q,a,H.pz)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.ca
else if(s===t.gR||s===t.H)r=H.pv
else if(s===t.N)r=H.px
else r=s===t.cJ?H.lr:null
if(r!=null)return H.du(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qp)){q.r="$i"+p
return H.du(q,a,H.py)}}else if(p===7)return H.du(q,a,H.pp)
return H.du(q,a,H.pn)},
du:function(a,b,c){a.b=c
return a.b(b)},
pq:function(a){var s,r,q=this
if(!H.b0(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pk
else if(q===t.K)r=H.pj
else r=H.po
q.a=r
return q.a(a)},
pY:function(a){var s,r=a.y
if(!H.b0(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pn:function(a){var s=this
if(a==null)return H.pY(s)
return H.Y(v.typeUniverse,H.n5(a,s),null,s,null)},
pp:function(a){if(a==null)return!0
return this.z.b(a)},
py:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dz(a)[r]},
rB:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mS(a,s)},
po:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mS(a,s)},
mS:function(a,b){throw H.b(H.oU(H.mz(a,H.n5(a,b),H.am(b,null))))},
mz:function(a,b,c){var s=P.i_(a),r=H.am(b==null?H.bH(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oU:function(a){return new H.dm("TypeError: "+a)},
a8:function(a,b){return new H.dm("TypeError: "+H.mz(a,null,b))},
pw:function(a){return a!=null},
pj:function(a){return a},
pz:function(a){return!0},
pk:function(a){return a},
lr:function(a){return!0===a||!1===a},
rn:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a8(a,"bool"))},
rp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool"))},
ro:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool?"))},
rq:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"double"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double"))},
rr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double?"))},
ca:function(a){return typeof a=="number"&&Math.floor(a)===a},
rt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a8(a,"int"))},
rv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int"))},
ru:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int?"))},
pv:function(a){return typeof a=="number"},
rw:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"num"))},
ry:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num"))},
rx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num?"))},
px:function(a){return typeof a=="string"},
rz:function(a){if(typeof a=="string")return a
throw H.b(H.a8(a,"String"))},
lp:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String"))},
rA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String?"))},
q0:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.w(r,H.am(a[q],b))
return s},
mT:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
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
if(!j)l+=C.a.w(" extends ",H.am(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.am(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.w(a3,H.am(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.w(a3,H.am(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lF(H.am(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
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
return J.lF(q===11||q===12?C.a.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.am(a.z,b))+">"
if(l===9){p=H.q6(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q0(o,b)+">"):p}if(l===11)return H.mT(a,b,null)
if(l===12)return H.mT(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
q6:function(a){var s,r=H.ne(a)
if(r!=null)return r
s="minified:"+a
return s},
mK:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p3:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lj(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dp(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dn(a,b,q)
n[b]=o
return o}else return m},
p1:function(a,b){return H.mR(a.tR,b)},
p0:function(a,b){return H.mR(a.eT,b)},
lj:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mF(H.mD(a,null,b,c))
r.set(b,s)
return s},
hk:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mF(H.mD(a,b,c,!0))
q.set(c,r)
return r},
p2:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lg(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bh:function(a,b){b.a=H.pq
b.b=H.pr
return b},
dp:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ar(null,null)
s.y=b
s.cy=c
r=H.bh(a,s)
a.eC.set(c,r)
return r},
mJ:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oZ(a,b,r,c)
a.eC.set(r,s)
return s},
oZ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b0(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ar(null,null)
q.y=6
q.z=b
q.cy=c
return H.bh(a,q)},
li:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oY(a,b,r,c)
a.eC.set(r,s)
return s},
oY:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b0(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ky(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ky(q.z))return q
else return H.os(a,b)}}p=new H.ar(null,null)
p.y=7
p.z=b
p.cy=c
return H.bh(a,p)},
mI:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oW(a,b,r,c)
a.eC.set(r,s)
return s},
oW:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b0(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dn(a,"lU",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ar(null,null)
q.y=8
q.z=b
q.cy=c
return H.bh(a,q)},
p_:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ar(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bh(a,s)
a.eC.set(q,r)
return r},
hj:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oV:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dn:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ar(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bh(a,r)
a.eC.set(p,q)
return q},
lg:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ar(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bh(a,o)
a.eC.set(q,n)
return n},
mH:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hj(m)
if(j>0){s=l>0?",":""
r=H.hj(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oV(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ar(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bh(a,o)
a.eC.set(q,r)
return r},
lh:function(a,b,c,d){var s,r=b.cy+("<"+H.hj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oX(a,b,c,r,d)
a.eC.set(r,s)
return s},
oX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bi(a,b,r,0)
m=H.dy(a,c,r,0)
return H.lh(a,n,m,c!==m)}}l=new H.ar(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bh(a,l)},
mD:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oO(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mE(a,r,g,f,!1)
else if(q===46)r=H.mE(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bg(a.u,a.e,f.pop()))
break
case 94:f.push(H.p_(a.u,f.pop()))
break
case 35:f.push(H.dp(a.u,5,"#"))
break
case 64:f.push(H.dp(a.u,2,"@"))
break
case 126:f.push(H.dp(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lf(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dn(p,n,o))
else{m=H.bg(p,a.e,n)
switch(m.y){case 11:f.push(H.lh(p,m,o,a.n))
break
default:f.push(H.lg(p,m,o))
break}}break
case 38:H.oP(a,f)
break
case 42:l=a.u
f.push(H.mJ(l,H.bg(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.li(l,H.bg(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mI(l,H.bg(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fJ()
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
H.lf(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mH(p,H.bg(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lf(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oR(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bg(a.u,a.e,h)},
oO:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mE:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mK(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.or(o)+'"')
d.push(H.hk(s,o,n))}else d.push(p)
return m},
oP:function(a,b){var s=b.pop()
if(0===s){b.push(H.dp(a.u,1,"0&"))
return}if(1===s){b.push(H.dp(a.u,4,"1&"))
return}throw H.b(P.hD("Unexpected extended operation "+H.f(s)))},
bg:function(a,b,c){if(typeof c=="string")return H.dn(a,c,a.sEA)
else if(typeof c=="number")return H.oQ(a,b,c)
else return c},
lf:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bg(a,b,c[s])},
oR:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bg(a,b,c[s])},
oQ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hD("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hD("Bad index "+c+" for "+b.i(0)))},
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
return H.Y(a,H.me(a,b),c,d,e)}if(r===7){s=H.Y(a,b.z,c,d,e)
return s}if(p===8){if(H.Y(a,b,c,d.z,e))return!0
return H.Y(a,b,c,H.me(a,d),e)}if(p===7){s=H.Y(a,b,c,d.z,e)
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
if(!H.Y(a,k,c,j,e)||!H.Y(a,j,e,k,c))return!1}return H.mU(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mU(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pu(a,b,c,d,e)}return!1},
mU:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pu:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Y(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mK(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Y(a,H.hk(a,b,l[p]),c,r[p],e))return!1
return!0},
ky:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b0(a))if(r!==7)if(!(r===6&&H.ky(a.z)))s=r===8&&H.ky(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qp:function(a){var s
if(!H.b0(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b0:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mR:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ar:function ar(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fJ:function fJ(){this.c=this.b=this.a=null},
fE:function fE(){},
dm:function dm(a){this.a=a},
ne:function(a){return v.mangledGlobalNames[a]},
qt:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hy:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lz==null){H.qm()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jn("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lW()]
if(p!=null)return p
p=H.qr(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.lW(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lW:function(){var s=$.mB
return s==null?$.mB=v.getIsolateTag("_$dart_js"):s},
o1:function(a,b){if(!H.ca(a))throw H.b(P.lJ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a3(a,0,4294967295,"length",null))
return J.o2(new Array(a),b)},
l_:function(a,b){if(!H.ca(a)||a<0)throw H.b(P.ci("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.J("w<0>"))},
o2:function(a,b){return J.l0(H.d(a,b.J("w<0>")))},
l0:function(a){a.fixed$length=Array
return a},
o3:function(a,b){return J.dD(a,b)},
dz:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.e9.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.cx.prototype
if(typeof a=="boolean")return J.e8.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hy(a)},
qh:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hy(a)},
aZ:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hy(a)},
hx:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hy(a)},
n2:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bD.prototype
return a},
dA:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bD.prototype
return a},
b_:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.N)return a
return J.hy(a)},
lF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qh(a).w(a,b)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dz(a).q(a,b)},
lG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n2(a).p(a,b)},
ch:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n6(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aZ(a).h(a,b)},
kN:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n6(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hx(a).l(a,b,c)},
nB:function(a,b){return J.dA(a).C(a,b)},
nC:function(a,b,c){return J.b_(a).fQ(a,b,c)},
nD:function(a,b,c,d){return J.b_(a).ha(a,b,c,d)},
nE:function(a,b){return J.dA(a).V(a,b)},
dD:function(a,b){return J.n2(a).aR(a,b)},
kO:function(a,b){return J.aZ(a).G(a,b)},
hB:function(a,b){return J.hx(a).I(a,b)},
nF:function(a,b,c,d){return J.b_(a).hB(a,b,c,d)},
kP:function(a,b){return J.hx(a).H(a,b)},
nG:function(a){return J.b_(a).ghj(a)},
kQ:function(a){return J.b_(a).gdg(a)},
ae:function(a){return J.dz(a).gR(a)},
b1:function(a){return J.hx(a).gP(a)},
aI:function(a){return J.aZ(a).gm(a)},
lH:function(a){return J.hx(a).i6(a)},
nH:function(a,b){return J.b_(a).ia(a,b)},
nI:function(a,b,c){return J.dA(a).t(a,b,c)},
nJ:function(a){return J.dA(a).ij(a)},
a4:function(a){return J.dz(a).i(a)},
a:function a(){},
e8:function e8(){},
cx:function cx(){},
ba:function ba(){},
ez:function ez(){},
bD:function bD(){},
aB:function aB(){},
w:function w(a){this.$ti=a},
ib:function ib(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bv:function bv(){},
cw:function cw(){},
e9:function e9(){},
aM:function aM(){}},P={
oE:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cd(new P.jM(q),1)).observe(s,{childList:true})
return new P.jL(q,s,r)}else if(self.setImmediate!=null)return P.q9()
return P.qa()},
oF:function(a){self.scheduleImmediate(H.cd(new P.jN(a),0))},
oG:function(a){self.setImmediate(H.cd(new P.jO(a),0))},
oH:function(a){P.la(C.n,a)},
la:function(a,b){var s=C.c.a1(a.a,1000)
return P.oS(s<0?0:s,b)},
mj:function(a,b){var s=C.c.a1(a.a,1000)
return P.oT(s<0?0:s,b)},
oS:function(a,b){var s=new P.dl()
s.ex(a,b)
return s},
oT:function(a,b){var s=new P.dl()
s.ey(a,b)
return s},
rl:function(a){return new P.c8(a,1)},
oK:function(){return C.a3},
oL:function(a){return new P.c8(a,3)},
pB:function(a,b){return new P.di(a,b.J("di<0>"))},
pX:function(){var s,r
for(s=$.cb;s!=null;s=$.cb){$.dx=null
r=s.b
$.cb=r
if(r==null)$.dw=null
s.a.$0()}},
q3:function(){$.ls=!0
try{P.pX()}finally{$.dx=null
$.ls=!1
if($.cb!=null)$.lE().$1(P.mZ())}},
q1:function(a){var s=new P.fr(a),r=$.dw
if(r==null){$.cb=$.dw=s
if(!$.ls)$.lE().$1(P.mZ())}else $.dw=r.b=s},
q2:function(a){var s,r,q,p=$.cb
if(p==null){P.q1(a)
$.dx=$.dw
return}s=new P.fr(a)
r=$.dx
if(r==null){s.b=p
$.cb=$.dx=s}else{q=r.b
s.b=q
$.dx=r.b=s
if(q==null)$.dw=s}},
mi:function(a,b){var s=$.aH
if(s===C.f)return P.la(a,b)
return P.la(a,s.hk(b))},
oz:function(a,b){var s=$.aH
if(s===C.f)return P.mj(a,b)
return P.mj(a,s.de(b,t.aF))},
mV:function(a,b,c,d,e){P.q2(new P.kk(d,e))},
pZ:function(a,b,c,d){var s,r=$.aH
if(r===c)return d.$0()
$.aH=c
s=r
try{r=d.$0()
return r}finally{$.aH=s}},
q_:function(a,b,c,d,e){var s,r=$.aH
if(r===c)return d.$1(e)
$.aH=c
s=r
try{r=d.$1(e)
return r}finally{$.aH=s}},
jM:function jM(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
dl:function dl(){this.c=0},
k4:function k4(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b){this.a=a
this.b=b},
bF:function bF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
di:function di(a,b){this.a=a
this.$ti=b},
fr:function fr(a){this.a=a
this.b=null},
cR:function cR(){},
eU:function eU(){},
cT:function cT(){},
kb:function kb(){},
kk:function kk(a,b){this.a=a
this.b=b},
jT:function jT(){},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function(a,b){return new H.C(a.J("@<0>").aX(b).J("C<1,2>"))},
o7:function(a,b,c){return H.qg(a,new H.C(b.J("@<0>").aX(c).J("C<1,2>")))},
l4:function(a,b){return new H.C(a.J("@<0>").aX(b).J("C<1,2>"))},
cA:function(a){return new P.d6(a.J("d6<0>"))},
le:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oN:function(a,b){var s=new P.d7(a,b)
s.c=a.e
return s},
o_:function(a,b,c){var s,r
if(P.lt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ac.push(a)
try{P.pA(a,s)}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}r=P.mg(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kZ:function(a,b,c){var s,r
if(P.lt(a))return b+"..."+c
s=new P.T(b)
$.ac.push(a)
try{r=s
r.a=P.mg(r.a,a,", ")}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lt:function(a){var s,r
for(s=$.ac.length,r=0;r<s;++r)if(a===$.ac[r])return!0
return!1},
pA:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
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
o8:function(a,b,c){var s=P.o6(b,c)
a.H(0,new P.ih(s,b,c))
return s},
lX:function(a,b){var s,r,q=P.cA(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
l6:function(a){var s,r={}
if(P.lt(a))return"{...}"
s=new P.T("")
try{$.ac.push(a)
s.a+="{"
r.a=!0
J.kP(a,new P.il(r,s))
s.a+="}"}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d6:function d6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jS:function jS(a){this.a=a
this.c=this.b=null},
d7:function d7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cv:function cv(){},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(){},
i:function i(){},
cE:function cE(){},
il:function il(a,b){this.a=a
this.b=b},
W:function W(){},
hl:function hl(){},
cF:function cF(){},
c4:function c4(a,b){this.a=a
this.$ti=b},
de:function de(){},
d8:function d8(){},
dq:function dq(){},
oC:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oD(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oD:function(a,b,c,d){var s=a?$.nt():$.ns()
if(s==null)return null
if(0===c&&d===b.length)return P.mp(s,b)
return P.mp(s,b.subarray(c,P.bc(c,d,b.length)))},
mp:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ad(r)}return null},
lK:function(a,b,c,d,e,f){if(C.c.bf(f,4)!==0)throw H.b(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
pi:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ph:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.W()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aZ(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.ad()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
jw:function jw(){},
jx:function jx(){},
hH:function hH(){},
hI:function hI(){},
dP:function dP(){},
dS:function dS(){},
hX:function hX(){},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
i8:function i8(a){this.a=a},
ju:function ju(){},
jy:function jy(){},
k9:function k9(a){this.b=0
this.c=a},
jv:function jv(a){this.a=a},
k8:function k8(a){this.a=a
this.b=16
this.c=0},
kw:function(a,b){var s=H.m7(a,b)
if(s!=null)return s
throw H.b(P.a2(a,null,null))},
nX:function(a){if(a instanceof H.br)return a.i(0)
return"Instance of '"+H.f(H.eF(a))+"'"},
ii:function(a,b,c,d){var s,r=c?J.l_(a,d):J.o1(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
l5:function(a,b,c){var s,r=H.d([],c.J("w<0>"))
for(s=J.b1(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.l0(r)},
o9:function(a,b,c){var s,r,q=J.l_(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
eW:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bc(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a9()
q=c<r}else q=!0
return H.m8(q?s.slice(b,c):s)}if(t.bm.b(a))return H.oo(a,b,P.bc(b,c,a.length))
return P.ox(a,b,c)},
ox:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a3(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a3(c,b,a.length,o,o))
r=J.b1(a)
for(q=0;q<b;++q)if(!r.u())throw H.b(P.a3(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.b(P.a3(c,b,q,o,o))
p.push(r.gB(r))}return H.m8(p)},
op:function(a){return new H.ea(a,H.o4(a,!1,!0,!1,!1,!1))},
mg:function(a,b,c){var s=J.b1(b)
if(!s.u())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.u())}else{a+=H.f(s.gB(s))
for(;s.u();)a=a+c+H.f(s.gB(s))}return a},
mm:function(){var s=H.of()
if(s!=null)return P.oB(s)
throw H.b(P.A("'Uri.base' is not supported"))},
k7:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nz().b
if(typeof b!="string")H.q(H.aw(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghA().c7(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aq(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nU:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dV:function(a){if(a>=10)return""+a
return"0"+a},
lR:function(a){return new P.bs(1000*a)},
i_:function(a){if(typeof a=="number"||H.lr(a)||null==a)return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nX(a)},
hD:function(a){return new P.dG(a)},
ci:function(a){return new P.af(!1,null,null,a)},
lJ:function(a,b,c){return new P.af(!0,a,b,c)},
nK:function(a,b){if(a==null)throw H.b(new P.af(!1,null,b,"Must not be null"))
return a},
m9:function(a){var s=null
return new P.c_(s,s,!1,s,s,a)},
eG:function(a,b){return new P.c_(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.c_(b,c,!0,a,d,"Invalid value")},
bc:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.b(P.a3(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.b(P.a3(b,a,c,"end",null))
return b}return c},
ma:function(a,b){if(a<0)throw H.b(P.a3(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aI(b):e
return new P.e6(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fj(a)},
jn:function(a){return new P.fg(a)},
l9:function(a){return new P.c1(a)},
b5:function(a){return new P.dQ(a)},
u:function(a){return new P.fG(a)},
a2:function(a,b,c){return new P.i5(a,b,c)},
lB:function(a){H.qt(a)},
oB:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.ml(a4<a4?C.a.t(a5,0,a4):a5,5,a3).ge3()
else if(s===32)return P.ml(C.a.t(a5,5,a4),0,a3).ge3()}r=P.ii(8,0,!1,t.S)
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
if(P.mW(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.mW(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a6(a5,"..",m)))h=l>m+2&&C.a.a6(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a6(a5,"file",0)){if(o<=0){if(!C.a.a6(a5,"/",m)){g="file:///"
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
a5=C.a.aU(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a6(a5,"http",0)){if(q&&n+3===m&&C.a.a6(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aU(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a6(a5,"https",0)){if(q&&n+4===m&&C.a.a6(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aU(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h0(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pb(a5,0,p)
else{if(p===0)P.c9(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pc(a5,d,o-1):""
b=P.p8(a5,o,n,!1)
q=n+1
if(q<m){a=H.m7(C.a.t(a5,q,m),a3)
a0=P.pa(a==null?H.q(P.a2("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p9(a5,m,l,a3,i,b!=null)
a2=l<k?P.ll(a5,l+1,k,a3):a3
return new P.bG(i,c,b,a0,a1,a2,k<a4?P.p7(a5,k+1,a4):a3)},
mo:function(a){var s=t.N
return C.b.hG(H.d(a.split("&"),t.s),P.l4(s,s),new P.js(C.e))},
oA:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jp(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.V(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kw(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kw(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
mn:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jq(a),b=new P.jr(c,a)
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
l=C.b.gaw(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oA(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.c.aO(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
mL:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c9:function(a,b,c){throw H.b(P.a2(c,a,b))},
pa:function(a,b){if(a!=null&&a===P.mL(b))return null
return a},
p8:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.c9(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p5(a,r,s)
if(q<s){p=q+1
o=P.mQ(a,C.a.a6(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mn(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.bp(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mQ(a,C.a.a6(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mn(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pe(a,b,c)},
p5:function(a,b,c){var s=C.a.bp(a,"%",b)
return s>=b&&s<c?s:c},
mQ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.T(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.lm(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.T("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.c9(a,s,"ZoneID should not contain % anymore")
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
n.a+=P.lk(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pe:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.lm(a,s,!0)
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
if(m>=8)return H.c(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.c9(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.T("")
m=q}else m=q
m.a+=l
m.a+=P.lk(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pb:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mN(C.a.C(a,b)))P.c9(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.c9(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.p4(r?a.toLowerCase():a)},
p4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pc:function(a,b,c){return P.dr(a,b,c,C.Y,!1)},
p9:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dr(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a3(s,"/"))s="/"+s
return P.pd(s,e,f)},
pd:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a3(a,"/"))return P.pf(a,!s||c)
return P.pg(a)},
ll:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.ci("Both query and queryParameters specified"))
return P.dr(a,b,c,C.k,!0)}if(d==null)return null
s=new P.T("")
r.a=""
d.H(0,new P.k5(new P.k6(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p7:function(a,b,c){return P.dr(a,b,c,C.k,!0)},
lm:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.ks(s)
p=H.ks(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aO(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aq(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lk:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.h0(a,6*o)&63|p
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
n+=3}}return P.eW(s,0,null)},
dr:function(a,b,c,d,e){var s=P.mP(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mP:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lm(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.c9(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lk(o)}}if(p==null){p=new P.T("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mO:function(a){if(C.a.a3(a,"."))return!0
return C.a.dD(a,"/.")!==-1},
pg:function(a){var s,r,q,p,o,n,m
if(!P.mO(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.H(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pf:function(a,b){var s,r,q,p,o,n
if(!P.mO(a))return!b?P.mM(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaw(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaw(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.mM(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.j(s,"/")},
mM:function(a){var s,r,q,p=a.length
if(p>=2&&P.mN(J.nB(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.aa(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p6:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.ci("Invalid URL encoding"))}}return s},
ln:function(a,b,c,d,e){var s,r,q,p,o=b
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
if(r>127)throw H.b(P.ci("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.ci("Truncated URI"))
p.push(P.p6(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a2.c7(p)},
mN:function(a){var s=a|32
return 97<=s&&s<=122},
ml:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a2(k,a,r))}}if(q<0&&r>b)throw H.b(P.a2(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaw(j)
if(p!==44||r!==n+7||!C.a.a6(a,"base64",n+1))throw H.b(P.a2("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.hP(0,a,m,s)
else{l=P.mP(a,m,s,C.k,!0)
if(l!=null)a=C.a.aU(a,m,s,l)}return new P.jo(a,j,c)},
pm:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.o9(22,new P.kf(),t.gc),l=new P.ke(m),k=new P.kg(),j=new P.kh(),i=l.$2(0,225)
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
mW:function(a,b,c,d,e){var s,r,q,p,o,n=$.nA()
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
bs:function bs(a){this.a=a},
hT:function hT(){},
hU:function hU(){},
K:function K(){},
dG:function dG(a){this.a=a},
eu:function eu(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e6:function e6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fj:function fj(a){this.a=a},
fg:function fg(a){this.a=a},
c1:function c1(a){this.a=a},
dQ:function dQ(a){this.a=a},
ex:function ex(){},
cQ:function cQ(){},
dT:function dT(a){this.a=a},
fG:function fG(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(){},
l:function l(){},
h:function h(){},
e7:function e7(){},
n:function n(){},
I:function I(){},
ap:function ap(){},
R:function R(){},
N:function N(){},
y:function y(){},
T:function T(a){this.a=a},
js:function js(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
k6:function k6(a,b){this.a=a
this.b=b},
k5:function k5(a){this.a=a},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(){},
ke:function ke(a){this.a=a},
kg:function kg(){},
kh:function kh(){},
h0:function h0(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fx:function fx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
bj:function(a){var s,r,q,p,o
if(a==null)return null
s=P.l4(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qc:function(a){var s={}
a.H(0,new P.kl(s))
return s},
jZ:function jZ(){},
k0:function k0(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
kl:function kl(a){this.a=a},
k_:function k_(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
i3:function i3(){},
i4:function i4(){},
jR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oM:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fZ:function fZ(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aN:function aN(){},
ee:function ee(){},
aS:function aS(){},
ev:function ev(){},
iM:function iM(){},
c0:function c0(){},
eV:function eV(){},
m:function m(){},
aU:function aU(){},
f6:function f6(){},
fN:function fN(){},
fO:function fO(){},
fV:function fV(){},
fW:function fW(){},
h8:function h8(){},
h9:function h9(){},
hh:function hh(){},
hi:function hi(){},
be:function be(){},
hF:function hF(){},
dI:function dI(){},
hG:function hG(a){this.a=a},
dJ:function dJ(){},
b3:function b3(){},
ew:function ew(){},
ft:function ft(){},
eQ:function eQ(){},
h4:function h4(){},
h5:function h5(){}},W={
lI:function(){var s=document.createElement("a")
return s},
lP:function(){var s=document.createElement("canvas")
return s},
nW:function(a,b,c){var s,r=document.body
r.toString
s=C.q.ah(r,a,b,c)
s.toString
r=new H.aX(new W.a0(s),new W.hV(),t.ac.J("aX<i.E>"))
return t.h.a(r.gaI(r))},
hW:function(a){return"wheel"},
cq:function(a){var s,r,q="element tag unavailable"
try{s=J.b_(a)
if(typeof s.ge_(a)=="string")q=s.ge_(a)}catch(r){H.ad(r)}return q},
nZ:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ad(s)}return q},
jQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mC:function(a,b,c,d){var s=W.jQ(W.jQ(W.jQ(W.jQ(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a1:function(a,b,c,d){var s=new W.fF(a,b,c==null?null:W.mX(new W.jP(c),t.aD),!1)
s.h7()
return s},
mA:function(a){var s=W.lI(),r=window.location
s=new W.c7(new W.jW(s,r))
s.em(a)
return s},
oI:function(a,b,c,d){return!0},
oJ:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mG:function(){var s=t.N,r=P.lX(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.hc(r,P.cA(s),P.cA(s),P.cA(s),null)
s.eu(null,new H.cG(C.A,new W.k2(),t.eM),q,null)
return s},
mX:function(a,b){var s=$.aH
if(s===C.f)return a
return s.de(a,b)},
r:function r(){},
hC:function hC(){},
dE:function dE(){},
dF:function dF(){},
bL:function bL(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
ay:function ay(){},
hM:function hM(){},
J:function J(){},
cm:function cm(){},
hN:function hN(){},
an:function an(){},
aL:function aL(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
b6:function b6(){},
hR:function hR(){},
cn:function cn(){},
co:function co(){},
dY:function dY(){},
hS:function hS(){},
fu:function fu(a,b){this.a=a
this.b=b},
E:function E(){},
hV:function hV(){},
j:function j(){},
e:function e(){},
ai:function ai(){},
bP:function bP(){},
e0:function e0(){},
e2:function e2(){},
aA:function aA(){},
i7:function i7(){},
bu:function bu(){},
cu:function cu(){},
bS:function bS(){},
bw:function bw(){},
ij:function ij(){},
iE:function iE(){},
bT:function bT(){},
el:function el(){},
iF:function iF(a){this.a=a},
em:function em(){},
iG:function iG(a){this.a=a},
aC:function aC(){},
en:function en(){},
aj:function aj(){},
a0:function a0(a){this.a=a},
x:function x(){},
cL:function cL(){},
aD:function aD(){},
eB:function eB(){},
eI:function eI(){},
iU:function iU(a){this.a=a},
eK:function eK(){},
as:function as(){},
eM:function eM(){},
aE:function aE(){},
eN:function eN(){},
aF:function aF(){},
eT:function eT(){},
j4:function j4(a){this.a=a},
at:function at(){},
bd:function bd(){},
cS:function cS(){},
eX:function eX(){},
eY:function eY(){},
c2:function c2(){},
au:function au(){},
aa:function aa(){},
f0:function f0(){},
f1:function f1(){},
j8:function j8(){},
aG:function aG(){},
bC:function bC(){},
f5:function f5(){},
jc:function jc(){},
aW:function aW(){},
jt:function jt(){},
fo:function fo(){},
bf:function bf(){},
c5:function c5(){},
c6:function c6(){},
fv:function fv(){},
d4:function d4(){},
fK:function fK(){},
d9:function d9(){},
h3:function h3(){},
ha:function ha(){},
fs:function fs(){},
fC:function fC(a){this.a=a},
kX:function kX(a,b){this.a=a
this.$ti=b},
fF:function fF(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jP:function jP(a){this.a=a},
ld:function ld(a){this.$ti=a},
c7:function c7(a){this.a=a},
M:function M(){},
cM:function cM(a){this.a=a},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(){},
jX:function jX(){},
jY:function jY(){},
hc:function hc(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k2:function k2(){},
hb:function hb(){},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ak:function ak(){},
jW:function jW(a,b){this.a=a
this.b=b},
hm:function hm(a){this.a=a
this.b=!1},
ka:function ka(a){this.a=a},
fw:function fw(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fH:function fH(){},
fI:function fI(){},
fL:function fL(){},
fM:function fM(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fX:function fX(){},
fY:function fY(){},
h_:function h_(){},
dg:function dg(){},
dh:function dh(){},
h1:function h1(){},
h2:function h2(){},
h7:function h7(){},
hd:function hd(){},
he:function he(){},
dj:function dj(){},
dk:function dk(){},
hf:function hf(){},
hg:function hg(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){}},K={
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.iP(s,r)},
t:function(a){var s=new K.iV()
s.ej(a)
return s},
b2:function b2(){},
e4:function e4(){},
im:function im(){},
a9:function a9(){this.a=null},
iP:function iP(a,b){this.a=a
this.b=b},
iV:function iV(){this.a=null}},L={
ja:function(){var s=new L.j9()
s.a=new H.C(t.cn)
s.b=new H.C(t.w)
s.c=P.cA(t.X)
return s},
eR:function eR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.b=a
this.c=null},
j9:function j9(){var _=this
_.d=_.c=_.b=_.a=null},
f7:function f7(a){this.b=a
this.a=this.c=null}},O={
kT:function(a){var s=new O.ag(a.J("ag<0>"))
s.bC(a)
return s},
ag:function ag(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
lY:function(){var s,r=new O.ej(),q=O.kT(t.hc)
r.e=q
q.bg(r.gf_(),r.gf1())
q=new O.aP(r,"emission")
q.c=new A.a6(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.f=q
q=new O.aP(r,"ambient")
q.c=new A.a6(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.r=q
q=new O.aP(r,"diffuse")
q.c=new A.a6(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.x=q
q=new O.aP(r,"invDiffuse")
q.c=new A.a6(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.y=q
q=new O.it(r,"specular")
q.c=new A.a6(!1,!1,!1)
q.f=new V.a_(0,0,0)
q.ch=100
r.z=q
q=new O.ip(r,"bump")
q.c=new A.a6(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aP(r,"reflect")
q.c=new A.a6(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.cx=q
q=new O.is(r,"refract")
q.c=new A.a6(!1,!1,!1)
q.f=new V.a_(0,0,0)
q.ch=1
r.cy=q
q=new O.io(r,"alpha")
q.c=new A.a6(!1,!1,!1)
q.f=1
r.db=q
q=new D.cy()
q.bC(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.cC(q.geY(),q.gfB(),q.gfF())
r.dx=q
s=new O.ir()
s.b=new V.aK(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.L():s
q.n(0,r.gfS())
q=r.dx
s=q.z
q=s==null?q.z=D.L():s
q.n(0,r.gev())
r.fr=null
return r},
ej:function ej(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(){},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(){},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){},
io:function io(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ek:function ek(){},
ip:function ip(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ir:function ir(){var _=this
_.e=_.d=_.c=_.b=null},
is:function is(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
it:function it(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f_:function f_(){}},E={
kW:function(){var s,r=new E.bt()
r.a=""
r.b=!0
s=O.kT(t.l)
r.y=s
s.bg(r.ghQ(),r.ghT())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sae(0,null)
r.sbd(null)
r.saF(null)
return r},
mx:function(){if(J.kO(window.navigator.vendor,"Google"))return C.G
if(J.kO(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.aZ(s).G(s,"Trident")||C.a.G(s,"Edge"))return C.t
if(J.kO(window.navigator.appName,"Microsoft"))return C.t
return C.H},
my:function(){var s=window.navigator.appVersion
if(J.aZ(s).G(s,"Win"))return C.a_
if(C.a.G(s,"Mac"))return C.B
if(C.a.G(s,"Linux"))return C.a0
return C.a1},
oq:function(a,b){var s=new E.iQ(a)
s.ei(a,b)
return s},
oy:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mh(a,!0,!0,!0,!1)
s=W.lP()
r=s.style
r.width="100%"
r.height="100%"
J.kQ(a).n(0,s)
return E.mh(s,!0,!0,!0,!1)},
mh:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f2(),n=t.z,m=C.m.e7(a,"webgl2",P.o7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oq(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.fl(a)
s=new X.id()
s.c=new X.ao(!1,!1,!1)
s.d=P.cA(t.e)
n.b=s
s=new X.iH(n)
s.f=0
s.r=V.bA()
s.x=V.bA()
s.ch=s.Q=1
n.c=s
s=new X.ik(n)
s.r=0
s.x=V.bA()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jb(n)
s.f=V.bA()
s.r=V.bA()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hY
n.Q=(s==null?$.hY=new E.fD(E.mx(),E.my()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a1(q,"contextmenu",n.gf9(),!1))
n.z.push(W.a1(a,"focus",n.gff(),!1))
n.z.push(W.a1(a,"blur",n.gf3(),!1))
n.z.push(W.a1(q,"keyup",n.gfj(),!1))
n.z.push(W.a1(q,"keydown",n.gfh(),!1))
n.z.push(W.a1(a,"mousedown",n.gfn(),!1))
n.z.push(W.a1(a,"mouseup",n.gfs(),!1))
n.z.push(W.a1(a,p,n.gfp(),!1))
r=n.z
W.hW(a)
W.hW(a)
r.push(W.a1(a,W.hW(a),n.gfu(),!1))
n.z.push(W.a1(q,p,n.gfb(),!1))
n.z.push(W.a1(q,"mouseup",n.gfd(),!1))
n.z.push(W.a1(q,"pointerlockchange",n.gfw(),!1))
n.z.push(W.a1(a,"touchstart",n.gfL(),!1))
n.z.push(W.a1(a,"touchend",n.gfH(),!1))
n.z.push(W.a1(a,"touchmove",n.gfJ(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ah(Date.now(),!1)
o.db=0
o.d_()
return o},
hJ:function hJ(){},
bt:function bt(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(a){this.b=a},
bY:function bY(a){this.b=a},
fD:function fD(a,b){this.a=a
this.b=b},
iQ:function iQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
f2:function f2(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
j7:function j7(a){this.a=a}},Z={
lc:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.dt(c)),35044)
a.bindBuffer(b,null)
return new Z.fp(b,s)},
av:function(a){return new Z.bE(a)},
fp:function fp(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jK:function jK(a){this.a=a},
dN:function dN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a){this.a=a}},D={
L:function(){var s=new D.bO()
s.d=0
return s},
hK:function hK(){},
bO:function bO(){var _=this
_.d=_.c=_.b=_.a=null},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
U:function U(){this.b=null},
b8:function b8(){this.b=null},
b9:function b9(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dK:function dK(){},
dW:function dW(){},
V:function V(){},
cy:function cy(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bz:function bz(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eO:function eO(){}},X={dO:function dO(a,b){this.a=a
this.b=b},ec:function ec(a,b){this.a=a
this.b=b},id:function id(){var _=this
_.d=_.c=_.b=_.a=null},cD:function cD(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ik:function ik(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},bU:function bU(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iH:function iH(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bV:function bV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eD:function eD(){},cU:function cU(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jb:function jb(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fl:function fl(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nY:function(a){var s=new X.i6(),r=new V.aK(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.md
if(r==null){r=V.mc(0,0,1,1)
$.md=r}s.r=r
return s},
kS:function kS(){},
i6:function i6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(){}},V={
hz:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
kM:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bf(a-b,s)
return(a<0?a+s:a)+b},
G:function(a,b,c){if(a==null)return C.a.aj("null",c)
$.D().toString
return C.a.aj(C.d.e1(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cf:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.G(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.aj(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
bx:function(){var s=$.iD
return s==null?$.iD=V.aR(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aR:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m1:function(a,b,c){return V.aR(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l7:function(a,b,c,d){return V.aR(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lZ:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aR(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
m_:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aR(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
m0:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aR(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
bA:function(){var s=$.m4
return s==null?$.m4=new V.al(0,0):s},
od:function(){var s=$.aT
return s==null?$.aT=new V.Q(0,0,0):s},
mc:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eH(a,b,c,d)},
d2:function(){var s=$.mv
return s==null?$.mv=new V.F(0,0,0):s},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(){},
iC:function iC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aQ:function aQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qu:function(a){P.oz(C.S,new V.kI(a))},
ot:function(a){var s=new V.j_()
s.el(a,!0)
return s},
b4:function b4(){},
kI:function kI(a){this.a=a},
dU:function dU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e3:function e3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e5:function e5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eA:function eA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iN:function iN(a){this.a=a
this.c=null},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(){this.b=this.a=null},
j1:function j1(a){this.a=a},
j0:function j0(a){this.a=a},
j2:function j2(a){this.a=a}},U={
kU:function(){var s=new U.hL()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
dR:function(a){var s=new U.cj()
if(a==null)a=V.bx()
if(null!=a)s.a=a
return s},
kY:function(){var s=new U.bQ()
s.bC(t.ah)
s.bg(s.geq(),s.gfD())
s.e=null
s.f=V.bx()
s.r=0
return s},
hL:function hL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cj:function cj(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cO:function cO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
lu:function(a,b,c,d,e,f,g,h){var s,r,q,p,o=c>1?1:c,n=d>1?1:d,m=e>1?1:e,l=new V.a_(o,n,m),k=U.kY()
k.n(0,U.dR(V.m1(0,0,2)))
m=new U.cO()
m.r=m.f=m.e=m.d=m.c=m.b=m.a=0
m.se5(0)
m.sdT(0,0)
m.sdZ(0)
o=m.d
$.D().toString
if(!(Math.abs(o-f)<1e-9)){m.d=f
o=new D.B("deltaYaw",o,f)
o.b=!0
m.F(o)}o=m.e
$.D().toString
if(!(Math.abs(o-g)<1e-9)){m.e=g
o=new D.B("deltaPitch",o,g)
o.b=!0
m.F(o)}o=m.f
$.D().toString
if(!(Math.abs(o-h)<1e-9)){m.f=h
o=new D.B("deltaRoll",o,h)
o.b=!0
m.F(o)}k.n(0,m)
s=E.kW()
o=U.kY()
o.n(0,U.dR(V.l7(0.1,0.1,0.1,1)))
o.n(0,k)
s.saF(o)
s.sae(0,F.nb(8,8))
o=O.lY()
o.f.saB(0,l)
s.sbd(o)
r=new D.bz()
r.c=new V.a_(1,1,1)
r.r=1
r.y=r.x=0
r.z=!0
r.a=V.bx()
q=r.b
r.b=k
k.gA().n(0,r.geo())
o=new D.B("mover",q,r.b)
o.b=!0
r.ab(o)
if(!r.c.q(0,l)){q=r.c
r.c=l
o=new D.B("color",q,l)
o.b=!0
r.ab(o)}o=$.mw
if(o==null){o=new V.d3(1,0.00390625,0.0000152587890625,0)
$.mw=o
p=o}else p=o
if(!J.H(r.f,p)){q=r.f
r.f=p
o=new D.B("shadowAdjust",q,p)
o.b=!0
r.ab(o)}o=r.r
$.D().toString
if(!(Math.abs(o-1)<1e-9)){r.r=1
o=new D.B("attenuation0",o,1)
o.b=!0
r.ab(o)}o=r.x
$.D().toString
if(!(Math.abs(o-0.5)<1e-9)){r.x=0.5
o=new D.B("attenuation1",o,0.5)
o.b=!0
r.ab(o)}o=r.y
$.D().toString
if(!(Math.abs(o-0.15)<1e-9)){r.y=0.15
o=new D.B("attenuation2",o,0.15)
o.b=!0
r.ab(o)}a.dx.n(0,r)
b.e.n(0,s)},
n7:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.ot("Test 021"),a1=W.lP()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1)
s=t.i
a0.da(H.d(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],s))
a0.h9(H.d(["shapes"],s))
a0.da(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(c)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.oy(r,!0,!0,!0,!1)
p=E.kW()
p.saF(U.dR(V.bx()))
p.sae(0,F.nd())
o=E.kW()
o.saF(U.dR(V.l7(3,3,3,1)))
n=F.lw(1,b,b,1)
n.ck()
o.sae(0,n)
m=U.kY()
n=q.x
l=new U.d0()
k=U.kU()
k.scA(0,!0)
k.sco(6.283185307179586)
k.scq(0)
k.sX(0,0)
k.scp(100)
k.sT(0)
k.sc9(0.5)
l.b=k
j=l.gaM()
k.gA().n(0,j)
k=U.kU()
k.scA(0,!0)
k.sco(6.283185307179586)
k.scq(0)
k.sX(0,0)
k.scp(100)
k.sT(0)
k.sc9(0.5)
l.c=k
k.gA().n(0,j)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
i=new X.ao(!1,!1,!1)
h=l.d
l.d=i
k=new D.B(a,h,i)
k.b=!0
l.F(k)
k=l.f
if(k!==!1){l.f=!1
k=new D.B("invertX",k,!1)
k.b=!0
l.F(k)}k=l.r
if(k!==!1){l.r=!1
k=new D.B("invertY",k,!1)
k.b=!0
l.F(k)}l.b1(n)
m.n(0,l)
n=q.x
l=new U.d_()
k=U.kU()
k.scA(0,!0)
k.sco(6.283185307179586)
k.scq(0)
k.sX(0,0)
k.scp(100)
k.sT(0)
k.sc9(0.2)
l.b=k
k.gA().n(0,l.gaM())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
i=new X.ao(!0,!1,!1)
h=l.c
l.c=i
k=new D.B(a,h,i)
k.b=!0
l.F(k)
l.b1(n)
m.n(0,l)
n=q.x
l=new U.d1()
l.c=0.01
l.e=l.d=0
i=new X.ao(!1,!1,!1)
l.b=i
k=new D.B(a,b,i)
k.b=!0
l.F(k)
l.b1(n)
m.n(0,l)
m.n(0,U.dR(V.m1(0,0,5)))
g=O.lY()
n=g.r
n.saB(0,new V.a_(0.15,0.15,0.15))
n=g.x
n.saB(0,new V.a_(0.4,0.4,0.4))
n=g.z
n.saB(0,new V.a_(0.3,0.3,0.3))
n=g.z
n.d1(new A.a6(!0,!1,!1))
n.d2(100)
f=new M.dZ()
f.a=!0
n=O.kT(t.l)
f.e=n
n.bg(f.gf5(),f.gf7())
f.y=f.x=f.r=f.f=null
e=X.nY(b)
d=new X.ey()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saF(b)
n=d.c
$.D().toString
if(!(Math.abs(n-1.0471975511965976)<1e-9)){d.c=1.0471975511965976
n=new D.B("fov",n,1.0471975511965976)
n.b=!0
d.aK(n)}n=d.d
$.D().toString
if(!(Math.abs(n-0.1)<1e-9)){d.d=0.1
n=new D.B("near",n,0.1)
n.b=!0
d.aK(n)}n=d.e
$.D().toString
if(!(Math.abs(n-2000)<1e-9)){d.e=2000
n=new D.B("far",n,2000)
n.b=!0
d.aK(n)}n=f.b
if(n!==d){if(n!=null)n.gA().L(0,f.gas())
h=f.b
f.b=d
d.gA().n(0,f.gas())
n=new D.B("camera",h,f.b)
n.b=!0
f.ax(n)}n=f.c
if(n!==e){if(n!=null)n.gA().L(0,f.gas())
h=f.c
f.c=e
e.gA().n(0,f.gas())
n=new D.B("target",h,f.c)
n.b=!0
f.ax(n)}f.sbd(b)
f.sbd(g)
f.e.n(0,o)
f.e.n(0,p)
f.b.saF(m)
n=q.d
if(n!==f){if(n!=null)n.gA().L(0,q.gcI())
q.d=f
f.gA().n(0,q.gcI())
q.cJ()}U.lu(g,f,1,0,0,0.3,0,0)
U.lu(g,f,0,1,0,0,0.4,0)
U.lu(g,f,0,0,1,0.5,0.5,0)
n=new V.iN("shapes")
s=s.getElementById("shapes")
n.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
n.b0(0,"Cube",new U.kA(p))
n.b0(0,"Cylinder",new U.kB(p))
n.b0(0,"Cone",new U.kC(p))
n.b0(0,"Sphere",new U.kD(p))
n.d8(0,"Toroid",new U.kE(p),!0)
n.b0(0,"Knot",new U.kF(p))
s=q.Q
if(s==null)s=q.Q=D.L()
n=s.b
s=n==null?s.b=H.d([],t.f):n
s.push(new U.kG(a0,g))
V.qu(q)},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a,b){this.a=a
this.b=b}},M={dZ:function dZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ob:function(a,b){var s=a.b4,r=new A.ei(b,s)
r.ek(b,s)
r.eh(a,b)
return r},
oc:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gar(a4)+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+b0.gar(b0)+b1.gar(b1)+b2.gar(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.o)(b3),++r)b+="_"+H.f(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)b+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)b+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)b+="_"+H.f(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.bn()
if(h){s=$.bm()
c=new Z.bE(c.a|s.a)}if(g){s=$.bl()
c=new Z.bE(c.a|s.a)}if(f){s=$.bk()
c=new Z.bE(c.a|s.a)}return new A.iq(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
ki:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kj:function(a,b,c){var s
A.ki(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hA(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pG:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ki(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pC:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kj(b,r,"ambient")
b.a+="\n"},
pE:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kj(b,r,"diffuse")
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
pH:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kj(b,r,"invDiffuse")
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
pN:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kj(b,r,"specular")
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
pJ:function(a,b){var s,r,q
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
pL:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ki(b,r,"reflect")
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
pM:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ki(b,r,"refract")
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
pD:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hA(r)
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
if(typeof s!=="number")return s.ad()
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
n=H.d([],p)
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
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
pF:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hA(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ad()
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
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
if(!a.c.a)p=!1
else p=!0
if(p)k.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)k.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
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
pK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hA(r)
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
if(typeof s!=="number")return s.ad()
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
if(!a.b.a)m=!1
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
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
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
pO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hA(r)
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
if(typeof s!=="number")return s.ad()
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
if(m){s=$.hY
if(s==null)s=$.hY=new E.fD(E.mx(),E.my())
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
if(!a.b.a)p=!1
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
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
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
pI:function(a,b){var s,r
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
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pP:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.T("")
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
A.pG(a,h)
A.pC(a,h)
A.pE(a,h)
A.pH(a,h)
A.pN(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pL(a,h)
A.pM(a,h)}A.pJ(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pD(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pF(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pK(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pO(a,o[m],h)
A.pI(a,h)}o=h.a+="// === Main ===\n"
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
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.aa(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.aa(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.aa(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.aa(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pQ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bn+"];\n"
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
pS:function(a,b){var s
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
pR:function(a,b){var s
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
pU:function(a,b){var s,r
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
pV:function(a,b){var s,r
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
pT:function(a,b){var s
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
pW:function(a,b){var s
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
hA:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.aa(a,1)},
lb:function(a,b,c,d,e){var s=new A.jg(a,c,e)
s.f=d
P.ii(d,0,!1,t.e)
return s},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a){this.a=a},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a,b){var _=this
_.iw=_.iv=_.bo=_.b4=_.bn=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iJ=_.iI=_.iH=_.ci=_.cg=_.cf=_.ce=_.cd=_.cc=_.cb=_.ca=_.iG=_.iF=_.dv=_.iE=_.iD=_.du=_.dt=_.iC=_.iB=_.ds=_.dr=_.iA=_.iz=_.dq=_.iy=_.ix=_.dn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dL:function dL(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bn=b5
_.b4=b6
_.bo=b7},
cV:function cV(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cW:function cW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cY:function cY(a,b,c,d,e,f,g,h,i,j){var _=this
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
cZ:function cZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cP:function cP(){},
f8:function f8(){},
jl:function jl(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.c=b
this.d=c},
ji:function ji(a,b,c){this.a=a
this.c=b
this.d=c},
jj:function jj(a,b,c){this.a=a
this.c=b
this.d=c},
jk:function jk(a,b,c){this.a=a
this.c=b
this.d=c},
jg:function jg(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
f9:function f9(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
fb:function fb(a,b,c){this.a=a
this.c=b
this.d=c},
fc:function fc(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){this.a=a
this.c=b
this.d=c},
fd:function fd(a,b,c){this.a=a
this.c=b
this.d=c},
cX:function cX(a,b,c){this.a=a
this.c=b
this.d=c},
fe:function fe(a,b,c){this.a=a
this.c=b
this.d=c},
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lw:function(a,b,c,d){var s=F.l8()
F.ds(s,b,c,d,a,1,0,0,1)
F.ds(s,b,c,d,a,0,1,0,3)
F.ds(s,b,c,d,a,0,0,1,2)
F.ds(s,b,c,d,a,-1,0,0,0)
F.ds(s,b,c,d,a,0,-1,0,0)
F.ds(s,b,c,d,a,0,0,-1,3)
s.av()
return s},
kd:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
ds:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.F(f,e+a3,d+a4)
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
h.d=g}k=F.kd(g)
j=F.kd(f)
i=F.lD(a1,a2,new F.kc(h,F.kd(e),F.kd(d),j,k,a0),b)
if(i!=null)a.b9(i)},
n1:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.l8()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.F(0,0,r).K()
p.push(o.hd(new V.bB(a,-1,-1,-1),new V.aK(1,1,1,1),new V.Q(0,0,c),new V.F(0,0,r),new V.al(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.v(i)
n=new V.F(k,j,r).K()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fn(new V.bB(a,-1,-1,-1),null,new V.aK(h,f,g,1),new V.Q(k*i,j*i,c),new V.F(0,0,r),new V.al(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.hb(p)
return s},
n_:function(a,b,c){return F.qd(!0,a,1,new F.km(1,c),b)},
qd:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.lD(c,e,new F.ko(d),r)
if(s==null)return r
s.av()
s.c2()
if(b)s.b9(F.n1(3,!1,1,new F.kp(d),e))
s.b9(F.n1(1,!0,-1,new F.kq(d),e))
return s},
nb:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kJ()
r=F.lw(a,null,new F.kK(q,1),b)
r.c2()
return r},
nd:function(){return F.n0(15,30,0.5,1,new F.kL())},
qq:function(){return F.n0(12,120,0.3,1,new F.kz(3,2))},
n0:function(a,b,c,d,e){var s=F.lD(a,b,new F.kn(e,d,b,c),null)
if(s==null)return null
s.av()
s.c2()
return s},
lD:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.l8()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fn(e,e,new V.aK(n,0,0,1),e,e,new V.al(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.c8(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.fn(e,e,new V.aK(h,g,f,1),e,e,new V.al(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.c8(d))}}s.d.hc(a+1,b+1,r)
return s},
cr:function(a,b,c){var s=new F.e_(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.bZ(a)
s.c_(b)
s.fX(c)
s.a.a.d.b.push(s)
s.a.a.Y()
return s},
o5:function(a,b){var s=new F.ef(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.bZ(a)
s.c_(b)
s.a.a.c.b.push(s)
s.a.a.Y()
return s},
l8:function(){var s=new F.iW(),r=new F.jz(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.iZ(s)
r.b=H.d([],t.o)
s.b=r
r=new F.iY(s)
r.b=H.d([],t.L)
s.c=r
r=new F.iX(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
fn:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fm(),p=new F.jH()
p.b=H.d([],t.o)
q.b=p
p=new F.jD()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jA()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.nu()
q.e=0
p=$.bn()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bm().a)!==0?e:r
q.x=(s&$.bl().a)!==0?b:r
q.y=(s&$.bJ().a)!==0?f:r
q.z=(s&$.bK().a)!==0?g:r
q.Q=(s&$.nv().a)!==0?c:r
q.ch=(s&$.cg().a)!==0?i:0
q.cx=(s&$.bk().a)!==0?a:r
return q},
kc:function kc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
km:function km(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kJ:function kJ(){},
kK:function kK(a,b){this.a=a
this.b=b},
kL:function kL(){},
kz:function kz(a,b){this.a=a
this.b=b},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(){},
j3:function j3(){},
ef:function ef(){this.b=this.a=null},
ie:function ie(){},
jf:function jf(){},
eC:function eC(){this.a=null},
iW:function iW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iX:function iX(a){this.a=a
this.b=null},
iY:function iY(a){this.a=a
this.b=null},
iZ:function iZ(a){this.a=a
this.b=null},
fm:function fm(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jJ:function jJ(a){this.a=a},
jI:function jI(a){this.a=a},
jz:function jz(a){this.a=a
this.c=this.b=null},
jA:function jA(){this.d=this.c=this.b=null},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(){this.c=this.b=null},
jF:function jF(){},
jE:function jE(){},
jG:function jG(){},
iK:function iK(){},
jH:function jH(){this.b=null}},T={j6:function j6(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l1.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gR:function(a){return H.cN(a)},
i:function(a){return"Instance of '"+H.f(H.eF(a))+"'"}}
J.e8.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$iax:1}
J.cx.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.ba.prototype={
gR:function(a){return 0},
i:function(a){return String(a)},
$ilV:1}
J.ez.prototype={}
J.bD.prototype={}
J.aB.prototype={
i:function(a){var s=a[$.nh()]
if(s==null)return this.ee(a)
return"JavaScript function for "+H.f(J.a4(s))},
$iaz:1}
J.w.prototype={
cu:function(a,b){if(!!a.fixed$length)H.q(P.A("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eG(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var s
if(!!a.fixed$length)H.q(P.A("remove"))
for(s=0;s<a.length;++s)if(J.H(a[s],b)){a.splice(s,1)
return!0}return!1},
ag:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.A("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
H:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b5(a))}},
j:function(a,b){var s,r,q=P.ii(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hM:function(a){return this.j(a,"")},
hF:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b5(a))}return s},
hG:function(a,b,c){return this.hF(a,b,c,t.z)},
hE:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b5(a))}throw H.b(H.ia())},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghD:function(a){if(a.length>0)return a[0]
throw H.b(H.ia())},
gaw:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ia())},
dc:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b5(a))}return!1},
aW:function(a,b){if(!!a.immutable$list)H.q(P.A("sort"))
H.ow(a,b==null?J.pt():b)},
ea:function(a){return this.aW(a,null)},
G:function(a,b){var s
for(s=0;s<a.length;++s)if(J.H(a[s],b))return!0
return!1},
i:function(a){return P.kZ(a,"[","]")},
gP:function(a){return new J.a5(a,a.length)},
gR:function(a){return H.cN(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.ce(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.A("indexed set"))
if(b>=a.length||b<0)throw H.b(H.ce(a,b))
a[b]=c},
$ik:1,
$ih:1,
$in:1}
J.ib.prototype={}
J.a5.prototype={
gB:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bv.prototype={
aR:function(a,b){var s
if(typeof b!="number")throw H.b(H.aw(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbr(b)
if(this.gbr(a)===s)return 0
if(this.gbr(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbr:function(a){return a===0?1/a<0:a<0},
dw:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.A(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.A(""+a+".round()"))},
e1:function(a,b){var s
if(b>20)throw H.b(P.a3(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbr(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
p:function(a,b){if(typeof b!="number")throw H.b(H.aw(b))
return a*b},
bf:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eg:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.A("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var s
if(a>0)s=this.d3(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h0:function(a,b){if(b<0)throw H.b(H.aw(b))
return this.d3(a,b)},
d3:function(a,b){return b>31?0:a>>>b},
$iZ:1,
$iR:1}
J.cw.prototype={$il:1}
J.e9.prototype={}
J.aM.prototype={
V:function(a,b){if(b<0)throw H.b(H.ce(a,b))
if(b>=a.length)H.q(H.ce(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.b(H.ce(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.b(P.lJ(b,null,null))
return a+b},
aU:function(a,b,c,d){var s,r,q=P.bc(b,c,a.length)
if(!H.ca(q))H.q(H.aw(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a6:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a3(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a3:function(a,b){return this.a6(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eG(b,null))
if(b>c)throw H.b(P.eG(b,null))
if(c>a.length)throw H.b(P.eG(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.t(a,b,null)},
ij:function(a){return a.toLowerCase()},
p:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aj:function(a,b){var s=b-a.length
if(s<=0)return a
return this.p(" ",s)+a},
bp:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a3(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dD:function(a,b){return this.bp(a,b,0)},
ho:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a3(c,0,s,null,null))
return H.nc(a,b,c)},
G:function(a,b){return this.ho(a,b,0)},
aR:function(a,b){var s
if(typeof b!="string")throw H.b(H.aw(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gR:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gm:function(a){return a.length},
$iy:1}
H.ed.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.k.prototype={}
H.cC.prototype={
gP:function(a){return new H.bb(this,this.gm(this))},
bz:function(a,b){return this.ed(0,b)}}
H.bb.prototype={
gB:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.aZ(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b5(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aO.prototype={
gP:function(a){return new H.eh(J.b1(this.a),this.b)},
gm:function(a){return J.aI(this.a)},
I:function(a,b){return this.b.$1(J.hB(this.a,b))}}
H.cp.prototype={$ik:1}
H.eh.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cG.prototype={
gm:function(a){return J.aI(this.a)},
I:function(a,b){return this.b.$1(J.hB(this.a,b))}}
H.aX.prototype={
gP:function(a){return new H.fq(J.b1(this.a),this.b)}}
H.fq.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cs.prototype={}
H.fi.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify an unmodifiable list"))}}
H.c3.prototype={}
H.ck.prototype={
i:function(a){return P.l6(this)},
l:function(a,b,c){H.nT()},
$iI:1}
H.cl.prototype={
gm:function(a){return this.a},
c6:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c6(0,b))return null
return this.cT(b)},
cT:function(a){return this.b[a]},
H:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cT(q))}}}
H.jd.prototype={
ai:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.et.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eb.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fh.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iL.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.h6.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.br.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nf(r==null?"unknown":r)+"'"},
$iaz:1,
gim:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eZ.prototype={}
H.eS.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nf(s)+"'"}}
H.bM.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bM))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.cN(this.a)
else s=typeof r!=="object"?J.ae(r):H.cN(r)
return(s^H.cN(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eF(s))+"'")}}
H.eJ.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gm:function(a){return this.a},
gbq:function(a){return this.a===0},
ga_:function(a){return new H.cz(this,H.dv(this).J("cz<1>"))},
gil:function(a){var s=this,r=H.dv(s)
return H.oa(s.ga_(s),new H.ic(s),r.c,r.Q[1])},
c6:function(a,b){var s=this.b
if(s==null)return!1
return this.eJ(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bi(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bi(p,b)
q=r==null?n:r.b
return q}else return o.hJ(b)},
hJ:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cU(p,q.dE(a))
r=q.dF(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cM(s==null?q.b=q.bS():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cM(r==null?q.c=q.bS():r,b,c)}else q.hK(b,c)},
hK:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bS()
s=p.dE(a)
r=p.cU(o,s)
if(r==null)p.bX(o,s,[p.bT(a,b)])
else{q=p.dF(r,a)
if(q>=0)r[q].b=b
else r.push(p.bT(a,b))}},
H:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b5(s))
r=r.c}},
cM:function(a,b,c){var s=this.bi(a,b)
if(s==null)this.bX(a,b,this.bT(b,c))
else s.b=c},
eU:function(){this.r=this.r+1&67108863},
bT:function(a,b){var s,r=this,q=new H.ig(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eU()
return q},
dE:function(a){return J.ae(a)&0x3ffffff},
dF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1},
i:function(a){return P.l6(this)},
bi:function(a,b){return a[b]},
cU:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
eN:function(a,b){delete a[b]},
eJ:function(a,b){return this.bi(a,b)!=null},
bS:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bX(r,s,r)
this.eN(r,s)
return r}}
H.ic.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dv(this.a).J("2(1)")}}
H.ig.prototype={}
H.cz.prototype={
gm:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.eg(s,s.r)
r.c=s.e
return r}}
H.eg.prototype={
gB:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kt.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.ku.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kv.prototype={
$1:function(a){return this.a(a)}}
H.ea.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imb:1}
H.cI.prototype={$icI:1}
H.X.prototype={$iX:1}
H.bW.prototype={
gm:function(a){return a.length},
$iz:1}
H.by.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aY(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cJ.prototype={
l:function(a,b,c){H.aY(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.eo.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.ep.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.eq.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.cK.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aY(b,a,a.length)
return a[b]}}
H.bX.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aY(b,a,a.length)
return a[b]},
$ibX:1,
$ibe:1}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
H.ar.prototype={
J:function(a){return H.hk(v.typeUniverse,this,a)},
aX:function(a){return H.p2(v.typeUniverse,this,a)}}
H.fJ.prototype={}
H.fE.prototype={
i:function(a){return this.a}}
H.dm.prototype={}
P.jM.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jL.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jN.prototype={
$0:function(){this.a.$0()}}
P.jO.prototype={
$0:function(){this.a.$0()}}
P.dl.prototype={
ex:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cd(new P.k4(this,b),0),a)
else throw H.b(P.A("`setTimeout()` not found."))},
ey:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cd(new P.k3(this,a,Date.now(),b),0),a)
else throw H.b(P.A("Periodic timer."))},
$icT:1}
P.k4.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k3.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eg(s,o)}q.c=p
r.d.$1(q)}}
P.c8.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bF.prototype={
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
if(r instanceof P.c8){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b1(s)
if(o instanceof P.bF){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.di.prototype={
gP:function(a){return new P.bF(this.a())}}
P.fr.prototype={}
P.cR.prototype={}
P.eU.prototype={}
P.cT.prototype={}
P.kb.prototype={}
P.kk.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a4(this.b)
throw s}}
P.jT.prototype={
ic:function(a){var s,r,q,p=null
try{if(C.f===$.aH){a.$0()
return}P.pZ(p,p,this,a)}catch(q){s=H.ad(q)
r=H.ly(q)
P.mV(p,p,this,s,r)}},
ie:function(a,b){var s,r,q,p=null
try{if(C.f===$.aH){a.$1(b)
return}P.q_(p,p,this,a,b)}catch(q){s=H.ad(q)
r=H.ly(q)
P.mV(p,p,this,s,r)}},
ig:function(a,b){return this.ie(a,b,t.z)},
hk:function(a){return new P.jU(this,a)},
de:function(a,b){return new P.jV(this,a,b)}}
P.jU.prototype={
$0:function(){return this.a.ic(this.b)}}
P.jV.prototype={
$1:function(a){return this.a.ig(this.b,a)},
$S:function(){return this.c.J("~(0)")}}
P.d6.prototype={
gP:function(a){var s=new P.d7(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
G:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eI(b)
return r}},
eI:function(a){var s=this.d
if(s==null)return!1
return this.bJ(s[this.bF(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cO(s==null?q.b=P.le():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cO(r==null?q.c=P.le():r,b)}else return q.eA(0,b)},
eA:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.le()
s=q.bF(b)
r=p[s]
if(r==null)p[s]=[q.bE(b)]
else{if(q.bJ(r,b)>=0)return!1
r.push(q.bE(b))}return!0},
L:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fO(this.c,b)
else return this.fN(0,b)},
fN:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bF(b)
r=n[s]
q=o.bJ(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d6(p)
return!0},
cO:function(a,b){if(a[b]!=null)return!1
a[b]=this.bE(b)
return!0},
fO:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d6(s)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bE:function(a){var s,r=this,q=new P.jS(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cP()
return q},
d6:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cP()},
bF:function(a){return J.ae(a)&1073741823},
bJ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1}}
P.jS.prototype={}
P.d7.prototype={
gB:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cv.prototype={}
P.ih.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cB.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gP:function(a){return new H.bb(a,this.gm(a))},
I:function(a,b){return this.h(a,b)},
gbq:function(a){return this.gm(a)===0},
ii:function(a,b){var s,r,q,p,o=this
if(o.gbq(a)){s=J.l_(0,H.bH(a).J("i.E"))
return s}r=o.h(a,0)
q=P.ii(o.gm(a),r,!0,H.bH(a).J("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
ih:function(a){return this.ii(a,!0)},
hB:function(a,b,c,d){var s
P.bc(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.kZ(a,"[","]")}}
P.cE.prototype={}
P.il.prototype={
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
for(s=J.b1(this.ga_(a));s.u();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aI(this.ga_(a))},
i:function(a){return P.l6(a)},
$iI:1}
P.hl.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify unmodifiable map"))}}
P.cF.prototype={
h:function(a,b){return J.ch(this.a,b)},
l:function(a,b,c){J.kN(this.a,b,c)},
H:function(a,b){J.kP(this.a,b)},
gm:function(a){return J.aI(this.a)},
i:function(a){return J.a4(this.a)},
$iI:1}
P.c4.prototype={}
P.de.prototype={
ag:function(a,b){var s
for(s=J.b1(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.kZ(this,"{","}")},
I:function(a,b){var s,r,q,p="index"
P.nK(b,p)
P.ma(b,p)
for(s=P.oN(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.b(P.O(b,this,p,null,r))},
$ik:1,
$ih:1}
P.d8.prototype={}
P.dq.prototype={}
P.jw.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ad(r)}return null}}
P.jx.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ad(r)}return null}}
P.hH.prototype={
hP:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bc(a2,a3,a1.length)
if(a3==null)throw H.b(P.m9("Invalid range"))
s=$.nx()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.ks(C.a.C(a1,l))
h=H.ks(C.a.C(a1,l+1))
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
e.a=d+H.aq(k)
q=l
continue}}throw H.b(P.a2("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.lK(a1,n,a3,o,m,d)
else{c=C.c.bf(d-1,4)+1
if(c===1)throw H.b(P.a2(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aU(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lK(a1,n,a3,o,m,b)
else{c=C.c.bf(b,4)
if(c===1)throw H.b(P.a2(a,a1,a3))
if(c>1)a1=C.a.aU(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hI.prototype={}
P.dP.prototype={}
P.dS.prototype={}
P.hX.prototype={}
P.i9.prototype={
i:function(a){return this.a}}
P.i8.prototype={
eK:function(a,b,c){var s,r,q,p,o,n,m=null
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
if(c>b)o.a+=J.nI(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.ju.prototype={
ghA:function(){return C.Q}}
P.jy.prototype={
c7:function(a){var s,r,q,p=P.bc(0,null,a.length)
if(p==null)throw H.b(P.m9("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.k9(r)
if(q.eP(a,0,p)!==p){J.nE(a,p-1)
q.c1()}return new Uint8Array(r.subarray(0,H.pl(0,q.b,r.length)))}}
P.k9.prototype={
c1:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
h8:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c1()
return!1}},
eP:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.h8(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c1()}else if(p<=2047){o=l.b
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
P.jv.prototype={
c7:function(a){var s=this.a,r=P.oC(s,a,0,null)
if(r!=null)return r
return new P.k8(s).hp(a,0,null,!0)}}
P.k8.prototype={
hp:function(a,b,c,d){var s,r,q,p,o=this,n=P.bc(b,c,J.aI(a))
if(b===n)return""
s=P.ph(a,b,n)
if(typeof n!=="number")return n.W()
n-=b
r=o.bG(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pi(q)
o.b=0
throw H.b(P.a2(p,a,b+o.c))}return r},
bG:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.W()
if(c-b>1000){s=C.c.a1(b+c,2)
r=q.bG(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bG(a,s,c,d)}return q.hu(a,b,c,d)},
hu:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.T(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aq(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aq(j)
break
case 65:g.a+=H.aq(j);--f
break
default:p=g.a+=H.aq(j)
g.a=p+H.aq(j)
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
g.a+=H.aq(a[l])}else g.a+=P.eW(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aq(j)
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
aR:function(a,b){return C.c.aR(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.aO(s,30))&1073741823},
i:function(a){var s=this,r=P.nU(H.om(s)),q=P.dV(H.ok(s)),p=P.dV(H.og(s)),o=P.dV(H.oh(s)),n=P.dV(H.oj(s)),m=P.dV(H.ol(s)),l=P.nV(H.oi(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Z.prototype={}
P.bs.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bs&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aR:function(a,b){return C.c.aR(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hU(),o=this.a
if(o<0)return"-"+new P.bs(0-o).i(0)
s=p.$1(C.c.a1(o,6e7)%60)
r=p.$1(C.c.a1(o,1e6)%60)
q=new P.hT().$1(o%1e6)
return""+C.c.a1(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.K.prototype={}
P.dG.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i_(s)
return"Assertion failed"}}
P.eu.prototype={
i:function(a){return"Throw of null."}}
P.af.prototype={
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbI()+o+m
if(!q.a)return l
s=q.gbH()
r=P.i_(q.b)
return l+s+": "+r}}
P.c_.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e6.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var s,r=this.b
if(typeof r!=="number")return r.a9()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fj.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fg.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c1.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dQ.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i_(s)+"."}}
P.ex.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cQ.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.dT.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fG.prototype={
i:function(a){return"Exception: "+this.a}}
P.i5.prototype={
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
bz:function(a,b){return new H.aX(this,b,H.dv(this).J("aX<h.E>"))},
gm:function(a){var s,r=this.gP(this)
for(s=0;r.u();)++s
return s},
gaI:function(a){var s,r=this.gP(this)
if(!r.u())throw H.b(H.ia())
s=r.gB(r)
if(r.u())throw H.b(H.o0())
return s},
I:function(a,b){var s,r,q
P.ma(b,"index")
for(s=this.gP(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.O(b,this,"index",null,r))},
i:function(a){return P.o_(this,"(",")")}}
P.e7.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.I.prototype={}
P.ap.prototype={
gR:function(a){return P.N.prototype.gR.call(C.i,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gR:function(a){return H.cN(this)},
i:function(a){return"Instance of '"+H.f(H.eF(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.T.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.js.prototype={
$2:function(a,b){var s,r,q,p=J.dA(b).dD(b,"=")
if(p===-1){if(b!=="")J.kN(a,P.ln(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.aa(b,p+1)
q=this.a
J.kN(a,P.ln(s,0,s.length,q,!0),P.ln(r,0,r.length,q,!0))}return a}}
P.jp.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv4 address, "+a,this.a,b))}}
P.jq.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jr.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kw(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.a9()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bG.prototype={
gc0:function(){var s,r,q,p=this,o=p.x
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
else o=H.q(H.l3("Field '_text' has been assigned during initialization."))}return o},
gR:function(a){var s=this,r=s.z
if(r==null){r=C.a.gR(s.gc0())
if(s.z==null)s.z=r
else r=H.q(H.l3("Field 'hashCode' has been assigned during initialization."))}return r},
gct:function(){var s=this,r=s.Q
if(r==null){r=new P.c4(P.mo(s.gbc(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.l3("Field 'queryParameters' has been assigned during initialization."))}return r},
ge4:function(){return this.b},
gcm:function(a){var s=this.c
if(s==null)return""
if(C.a.a3(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbt:function(a){var s=this.d
return s==null?P.mL(this.a):s},
gbc:function(a){var s=this.f
return s==null?"":s},
gcl:function(){var s=this.r
return s==null?"":s},
dX:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a3(s,"/"))s="/"+s
q=s
p=P.ll(null,0,0,b)
return new P.bG(n,l,j,k,q,p,o.r)},
gdz:function(){return this.c!=null},
gdC:function(){return this.f!=null},
gdA:function(){return this.r!=null},
i:function(a){return this.gc0()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbA()&&s.c!=null===b.gdz()&&s.b===b.ge4()&&s.gcm(s)===b.gcm(b)&&s.gbt(s)===b.gbt(b)&&s.e===b.gdS(b)&&s.f!=null===b.gdC()&&s.gbc(s)===b.gbc(b)&&s.r!=null===b.gdA()&&s.gcl()===b.gcl()},
$ifk:1,
gbA:function(){return this.a},
gdS:function(a){return this.e}}
P.k6.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.k7(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.k7(C.h,b,C.e,!0))}}}
P.k5.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b1(b),r=this.a;s.u();)r.$2(a,s.gB(s))}}
P.jo.prototype={
ge3:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bp(s,"?",m)
q=s.length
if(r>=0){p=P.dr(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fx("data","",n,n,P.dr(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kf.prototype={
$1:function(a){return new Uint8Array(96)}}
P.ke.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.nF(s,0,96,b)
return s},
$S:18}
P.kg.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.kh.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.h0.prototype={
gdz:function(){return this.c>0},
gdB:function(){return this.c>0&&this.d+1<this.e},
gdC:function(){return this.f<this.r},
gdA:function(){return this.r<this.a.length},
gcV:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcW:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbA:function(){var s=this.x
return s==null?this.x=this.eH():s},
eH:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcV())return"http"
if(s.gcW())return"https"
if(r===4&&C.a.a3(s.a,"file"))return"file"
if(r===7&&C.a.a3(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
ge4:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcm:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbt:function(a){var s=this
if(s.gdB())return P.kw(C.a.t(s.a,s.d+1,s.e),null)
if(s.gcV())return 80
if(s.gcW())return 443
return 0},
gdS:function(a){return C.a.t(this.a,this.e,this.f)},
gbc:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gcl:function(){var s=this.r,r=this.a
return s<r.length?C.a.aa(r,s+1):""},
gct:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.c4(P.mo(s.gbc(s)),t.U)},
dX:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbA(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdB()?n.gbt(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a3(r,"/"))r="/"+r
p=P.ll(m,0,0,b)
q=n.r
o=q<j.length?C.a.aa(j,q+1):m
return new P.bG(l,i,s,h,r,p,o)},
gR:function(a){var s=this.y
return s==null?this.y=C.a.gR(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifk:1}
P.fx.prototype={}
W.r.prototype={}
W.hC.prototype={
gm:function(a){return a.length}}
W.dE.prototype={
i:function(a){return String(a)}}
W.dF.prototype={
i:function(a){return String(a)}}
W.bL.prototype={$ibL:1}
W.bo.prototype={$ibo:1}
W.bp.prototype={$ibp:1}
W.bq.prototype={
e7:function(a,b,c){var s=a.getContext(b,P.qc(c))
return s},
$ibq:1}
W.ay.prototype={
gm:function(a){return a.length}}
W.hM.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cm.prototype={
gm:function(a){return a.length}}
W.hN.prototype={}
W.an.prototype={}
W.aL.prototype={}
W.hO.prototype={
gm:function(a){return a.length}}
W.hP.prototype={
gm:function(a){return a.length}}
W.hQ.prototype={
gm:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.hR.prototype={
i:function(a){return String(a)}}
W.cn.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.co.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaH(a))+" x "+H.f(this.gaD(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b_(b)
s=a.left==s.gbs(b)&&a.top==s.gbw(b)&&this.gaH(a)==s.gaH(b)&&this.gaD(a)==s.gaD(b)}else s=!1
return s},
gR:function(a){return W.mC(J.ae(a.left),J.ae(a.top),J.ae(this.gaH(a)),J.ae(this.gaD(a)))},
gdf:function(a){return a.bottom},
gaD:function(a){return a.height},
gbs:function(a){return a.left},
gbv:function(a){return a.right},
gbw:function(a){return a.top},
gaH:function(a){return a.width},
$ia7:1}
W.dY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hS.prototype={
gm:function(a){return a.length}}
W.fu.prototype={
gbq:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var s=this.ih(this)
return new J.a5(s,s.length)}}
W.E.prototype={
ghj:function(a){return new W.fC(a)},
gdg:function(a){return new W.fu(a,a.children)},
gdh:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a9()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a9()
if(p<0)p=-p*0
return new P.a7(s,r,q,p,t.q)},
i:function(a){return a.localName},
ah:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lT
if(s==null){s=H.d([],t.Q)
r=new W.cM(s)
s.push(W.mA(null))
s.push(W.mG())
$.lT=r
d=r}else d=s
s=$.lS
if(s==null){s=new W.hm(d)
$.lS=s
c=s}else{s.a=d
c=s}}if($.b7==null){s=document
r=s.implementation.createHTMLDocument("")
$.b7=r
$.kV=r.createRange()
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
$.b7.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.G(C.X,a.tagName)){$.kV.selectNodeContents(q)
s=$.kV
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b7.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b7.body)J.lH(q)
c.cB(p)
document.adoptNode(p)
return p},
hs:function(a,b,c){return this.ah(a,b,c,null)},
e9:function(a,b){a.textContent=null
a.appendChild(this.ah(a,b,null,null))},
ge_:function(a){return a.tagName},
$iE:1}
W.hV.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
ha:function(a,b,c,d){if(c!=null)this.eB(a,b,c,!1)},
eB:function(a,b,c,d){return a.addEventListener(b,H.cd(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
W.bP.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1,
$ibP:1}
W.e0.prototype={
gm:function(a){return a.length}}
W.e2.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.i7.prototype={
gm:function(a){return a.length}}
W.bu.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.cu.prototype={$icu:1}
W.bS.prototype={$ibS:1}
W.bw.prototype={$ibw:1}
W.ij.prototype={
i:function(a){return String(a)}}
W.iE.prototype={
gm:function(a){return a.length}}
W.bT.prototype={$ibT:1}
W.el.prototype={
h:function(a,b){return P.bj(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.H(a,new W.iF(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
W.iF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.em.prototype={
h:function(a,b){return P.bj(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.H(a,new W.iG(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
W.iG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aC.prototype={$iaC:1}
W.en.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aj.prototype={$iaj:1}
W.a0.prototype={
gaI:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.l9("No elements"))
if(r>1)throw H.b(P.l9("More than one element"))
s=s.firstChild
s.toString
return s},
ag:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gP:function(a){var s=this.a.childNodes
return new W.ct(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.x.prototype={
i6:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ia:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nC(s,b,a)}catch(q){H.ad(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ec(a):s},
fQ:function(a,b,c){return a.replaceChild(b,c)},
$ix:1}
W.cL.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aD.prototype={
gm:function(a){return a.length},
$iaD:1}
W.eB.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.eI.prototype={
h:function(a,b){return P.bj(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.H(a,new W.iU(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
W.iU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eK.prototype={
gm:function(a){return a.length}}
W.as.prototype={$ias:1}
W.eM.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aE.prototype={$iaE:1}
W.eN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aF.prototype={
gm:function(a){return a.length},
$iaF:1}
W.eT.prototype={
h:function(a,b){return a.getItem(H.lp(b))},
l:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga_:function(a){var s=H.d([],t.s)
this.H(a,new W.j4(s))
return s},
gm:function(a){return a.length},
$iI:1}
W.j4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.bd.prototype={$ibd:1}
W.cS.prototype={
ah:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
s=W.nW("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a0(r).ag(0,new W.a0(s))
return r}}
W.eX.prototype={
ah:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ah(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaI(s)
q.toString
s=new W.a0(q)
p=s.gaI(s)
r.toString
p.toString
new W.a0(r).ag(0,new W.a0(p))
return r}}
W.eY.prototype={
ah:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ah(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaI(s)
r.toString
q.toString
new W.a0(r).ag(0,new W.a0(q))
return r}}
W.c2.prototype={$ic2:1}
W.au.prototype={$iau:1}
W.aa.prototype={$iaa:1}
W.f0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.f1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.j8.prototype={
gm:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bC.prototype={$ibC:1}
W.f5.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.jc.prototype={
gm:function(a){return a.length}}
W.aW.prototype={}
W.jt.prototype={
i:function(a){return String(a)}}
W.fo.prototype={
gm:function(a){return a.length}}
W.bf.prototype={
ghw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.A("deltaY is not supported"))},
ghv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.A("deltaX is not supported"))},
$ibf:1}
W.c5.prototype={
fR:function(a,b){return a.requestAnimationFrame(H.cd(b,1))},
eO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c6.prototype={$ic6:1}
W.fv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d4.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b_(b)
s=a.left==s.gbs(b)&&a.top==s.gbw(b)&&a.width==s.gaH(b)&&a.height==s.gaD(b)}else s=!1
return s},
gR:function(a){return W.mC(J.ae(a.left),J.ae(a.top),J.ae(a.width),J.ae(a.height))},
gaD:function(a){return a.height},
gaH:function(a){return a.width}}
W.fK.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.h3.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ha.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.fs.prototype={
H:function(a,b){var s,r,q,p,o
for(s=this.ga_(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga_:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.c(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fC.prototype={
h:function(a,b){return this.a.getAttribute(H.lp(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga_(this).length}}
W.kX.prototype={}
W.fF.prototype={
h7:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nD(s,this.c,r,!1)}}}
W.jP.prototype={
$1:function(a){return this.a.$1(a)}}
W.ld.prototype={}
W.c7.prototype={
em:function(a){var s
if($.d5.gbq($.d5)){for(s=0;s<262;++s)$.d5.l(0,C.W[s],W.qj())
for(s=0;s<12;++s)$.d5.l(0,C.o[s],W.qk())}},
aP:function(a){return $.ny().G(0,W.cq(a))},
au:function(a,b,c){var s=$.d5.h(0,H.f(W.cq(a))+"::"+b)
if(s==null)s=$.d5.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iak:1}
W.M.prototype={
gP:function(a){return new W.ct(a,this.gm(a))}}
W.cM.prototype={
aP:function(a){return C.b.dc(this.a,new W.iJ(a))},
au:function(a,b,c){return C.b.dc(this.a,new W.iI(a,b,c))},
$iak:1}
W.iJ.prototype={
$1:function(a){return a.aP(this.a)}}
W.iI.prototype={
$1:function(a){return a.au(this.a,this.b,this.c)}}
W.df.prototype={
eu:function(a,b,c,d){var s,r,q
this.a.ag(0,c)
s=b.bz(0,new W.jX())
r=b.bz(0,new W.jY())
this.b.ag(0,s)
q=this.c
q.ag(0,C.w)
q.ag(0,r)},
aP:function(a){return this.a.G(0,W.cq(a))},
au:function(a,b,c){var s=this,r=W.cq(a),q=s.c
if(q.G(0,H.f(r)+"::"+b))return s.d.he(c)
else if(q.G(0,"*::"+b))return s.d.he(c)
else{q=s.b
if(q.G(0,H.f(r)+"::"+b))return!0
else if(q.G(0,"*::"+b))return!0
else if(q.G(0,H.f(r)+"::*"))return!0
else if(q.G(0,"*::*"))return!0}return!1},
$iak:1}
W.jX.prototype={
$1:function(a){return!C.b.G(C.o,a)}}
W.jY.prototype={
$1:function(a){return C.b.G(C.o,a)}}
W.hc.prototype={
au:function(a,b,c){if(this.ef(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.G(0,b)
return!1}}
W.k2.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hb.prototype={
aP:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cq(a)==="foreignObject")return!1
if(s)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aP(a)},
$iak:1}
W.ct.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.ch(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.ak.prototype={}
W.jW.prototype={}
W.hm.prototype={
cB:function(a){var s=this,r=new W.ka(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b_:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lH(a)
else b.removeChild(a)},
fV:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nG(a)
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
try{r=J.a4(a)}catch(p){H.ad(p)}try{q=W.cq(a)
this.fU(a,b,n,r,q,m,l)}catch(p){if(H.ad(p) instanceof P.af)throw p
else{this.b_(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fU:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b_(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aP(a)){m.b_(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.au(a,"is",g)){m.b_(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga_(f)
r=H.d(s.slice(0),H.lo(s).J("w<1>"))
for(q=f.ga_(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.c(r,q)
p=r[q]
o=m.a
n=J.nJ(p)
H.lp(p)
if(!o.au(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cB(a.content)}}
W.ka.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fV(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b_(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.l9("Corrupt HTML")
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
W.fw.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.h_.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h7.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
P.jZ.prototype={
cj:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
by:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lr(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ah)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jn("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cj(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.kP(a,new P.k0(n,o))
return n.a}if(t.aH.b(a)){s=o.cj(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.hr(a,s)}if(t.eH.b(a)){s=o.cj(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hH(a,new P.k1(n,o))
return n.b}throw H.b(P.jn("structured clone of other type"))},
hr:function(a,b){var s,r=J.aZ(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.by(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.k0.prototype={
$2:function(a,b){this.a.a[a]=this.b.by(b)},
$S:3}
P.k1.prototype={
$2:function(a,b){this.a.b[a]=this.b.by(b)},
$S:3}
P.kl.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.k_.prototype={
hH:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e1.prototype={
gbj:function(){var s=this.b,r=H.dv(s)
return new H.aO(new H.aX(s,new P.i3(),r.J("aX<i.E>")),new P.i4(),r.J("aO<i.E,E>"))},
l:function(a,b,c){var s=this.gbj()
J.nH(s.b.$1(J.hB(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aI(this.gbj().a)},
h:function(a,b){var s=this.gbj()
return s.b.$1(J.hB(s.a,b))},
gP:function(a){var s=P.l5(this.gbj(),!1,t.h)
return new J.a5(s,s.length)}}
P.i3.prototype={
$1:function(a){return t.h.b(a)}}
P.i4.prototype={
$1:function(a){return t.h.a(a)}}
P.fZ.prototype={
gbv:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdf:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.b_(b)
if(s==r.gbs(b)){q=n.b
if(q==r.gbw(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gbv(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdf(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.ae(q),o=r.b,n=J.ae(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.v(q)
q=C.c.gR(s.a(o+q))
return P.oM(P.jR(P.jR(P.jR(P.jR(0,p),n),m),q))}}
P.a7.prototype={
gbs:function(a){return this.a},
gbw:function(a){return this.b},
gaH:function(a){return this.c},
gaD:function(a){return this.d}}
P.aN.prototype={$iaN:1}
P.ee.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.aS.prototype={$iaS:1}
P.ev.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.iM.prototype={
gm:function(a){return a.length}}
P.c0.prototype={$ic0:1}
P.eV.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gdg:function(a){return new P.e1(a,new W.a0(a))},
ah:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.Q)
n.push(W.mA(null))
n.push(W.mG())
n.push(new W.hb())
c=new W.hm(new W.cM(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hs(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a0(q)
o=n.gaI(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aU.prototype={$iaU:1}
P.f6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fN.prototype={}
P.fO.prototype={}
P.fV.prototype={}
P.fW.prototype={}
P.h8.prototype={}
P.h9.prototype={}
P.hh.prototype={}
P.hi.prototype={}
P.be.prototype={$ik:1,$ih:1,$in:1}
P.hF.prototype={
gm:function(a){return a.length}}
P.dI.prototype={
h:function(a,b){return P.bj(a.get(b))},
H:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.H(a,new P.hG(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
P.hG.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dJ.prototype={
gm:function(a){return a.length}}
P.b3.prototype={}
P.ew.prototype={
gm:function(a){return a.length}}
P.ft.prototype={}
P.eQ.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
s=P.bj(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.h4.prototype={}
P.h5.prototype={}
K.b2.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"}}
K.e4.prototype={
aE:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aE(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.im.prototype={}
K.a9.prototype={
aE:function(a,b){return!this.eb(0,b)},
i:function(a){return"!["+this.cF(0)+"]"}}
K.iP.prototype={
aE:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.aq(this.a),r=H.aq(this.b)
return s+".."+r}}
K.iV.prototype={
ej:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.bb(a,a.gm(a));r.u();){q=r.d
s.l(0,q,!0)}p=P.l5(s.ga_(s),!0,t.e)
C.b.ea(p)
this.a=p},
aE:function(a,b){return C.b.G(this.a,b)},
i:function(a){return P.eW(this.a,0,null)}}
L.eR.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.f7(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
hC:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aE(0,a))return p}return null},
i:function(a){return this.b},
d5:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.G(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga_(l),l=l.gP(l);l.u();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.G(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f3.prototype={
i:function(a){var s=H.lC(this.b,"\n","\\n"),r=H.lC(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f4.prototype={
aG:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.j9.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eR(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
O:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.f4(a)
s.c=new H.C(t.dO)
this.b.l(0,a,s)}return s},
cz:function(a){return this.ik(a)},
ik:function(a){var s=this
return P.pB(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cz(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cu(a1,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hC(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eW(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.A("removeRange"))
P.bc(0,k,a0.length)
a0.splice(0,k-0)
C.b.ag(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.G(0,n.a)?7:8
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
if(d.d!=null){g=P.eW(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f3(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.G(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oK()
case 1:return P.oL(o)}}},t.eB)},
i:function(a){var s,r=new P.T(""),q=this.d
if(q!=null)r.a=q.d5()+"\n"
for(q=this.a,q=q.gil(q),q=q.gP(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=s.d5()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.f7.prototype={
i:function(a){return this.b.b+": "+this.cF(0)}}
O.ag.prototype={
bC:function(a){this.a=H.d([],a.J("w<0*>"))
this.c=this.b=null},
cC:function(a,b,c){this.b=b
this.c=a},
bg:function(a,b){return this.cC(a,null,b)},
fA:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
eX:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.a5(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dv(q).J("w<ag.T*>")
if(q.fA(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.eX(r,H.d([b],p))}},
$ih:1}
O.cH.prototype={
gm:function(a){return this.a.length},
gA:function(){var s=this.b
return s==null?this.b=D.L():s},
aJ:function(){var s=this.b
if(s!=null)s.D(null)},
ga5:function(a){var s=this.a
if(s.length>0)return C.b.gaw(s)
else return V.bx()},
dV:function(a){var s=this.a
if(a==null)s.push(V.bx())
else s.push(a)
this.aJ()},
cs:function(){var s=this.a
if(s.length>0){s.pop()
this.aJ()}}}
E.hJ.prototype={}
E.bt.prototype={
cN:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a5(s,s.length);s.u();){r=s.d
if(r.f==null)r.cN()}},
sae:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gA().L(0,q.gdN())
s=q.c
if(s!=null)s.gA().n(0,q.gdN())
r=new D.B("shape",p,q.c)
r.b=!0
q.am(r)}},
sbd:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gA().L(0,q.gdP())
s=q.f
q.f=a
if(a!=null)a.gA().n(0,q.gdP())
q.cN()
r=new D.B("technique",s,q.f)
r.b=!0
q.am(r)}},
saF:function(a){var s,r,q=this
if(!J.H(q.r,a)){s=q.r
if(s!=null)s.gA().L(0,q.gdL())
if(a!=null)a.gA().n(0,q.gdL())
q.r=a
r=new D.B("mover",s,a)
r.b=!0
q.am(r)}},
ap:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aq(0,b,q):null
if(!J.H(o,q.x)){s=q.x
q.x=o
r=new D.B("matrix",s,o)
r.b=!0
q.am(r)}p=q.f
if(p!=null)p.ap(0,b)
for(p=q.y.a,p=new J.a5(p,p.length);p.u();)p.d.ap(0,b)},
aT:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga5(q))
else o.push(p.p(0,q.ga5(q)))
q.aJ()
a.dW(r.f)
q=a.dy
s=(q&&C.b).gaw(q)
if(s!=null&&r.d!=null)s.i9(a,r)
for(q=r.y.a,q=new J.a5(q,q.length);q.u();)q.d.aT(a)
a.dU()
a.dx.cs()},
am:function(a){var s=this.z
if(s!=null)s.D(a)},
Y:function(){return this.am(null)},
dO:function(a){this.e=null
this.am(a)},
hW:function(){return this.dO(null)},
dQ:function(a){this.am(a)},
hX:function(){return this.dQ(null)},
dM:function(a){this.am(a)},
hV:function(){return this.dM(null)},
dK:function(a){this.am(a)},
hS:function(){return this.dK(null)},
hR:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdJ(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bO()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.Y()},
hU:function(a,b){var s,r
for(s=b.gP(b),r=this.gdJ();s.u();)s.gB(s).gA().L(0,r)
this.Y()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bN.prototype={
i:function(a){return this.b}}
E.bY.prototype={
i:function(a){return this.b}}
E.fD.prototype={}
E.iQ.prototype={
ei:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ah(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cH()
r=t.h8
s.a=H.d([],r)
s.gA().n(0,new E.iR(q))
q.cy=s
s=new O.cH()
s.a=H.d([],r)
s.gA().n(0,new E.iS(q))
q.db=s
s=new O.cH()
s.a=H.d([],r)
s.gA().n(0,new E.iT(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
gi5:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga5(q)
s=r.db
s=r.z=q.p(0,s.ga5(s))
q=s}return q},
dW:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaw(s):a)},
dU:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iR.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iS.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iT.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f2.prototype={
cK:function(a){this.dY()},
cJ:function(){return this.cK(null)},
ghI:function(){var s,r=this,q=Date.now(),p=C.c.a1(P.lR(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ah(q,!1)
return s/p},
d_:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.p()
if(typeof p!=="number")return H.v(p)
s=C.d.dw(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.p()
r=C.d.dw(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mi(C.n,q.gib())}},
dY:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.eO(s)
r=W.mX(new E.j7(this),t.H)
r.toString
C.F.fR(s,r)}},
i8:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d_()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ah(p,!1)
q.y=P.lR(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aJ()
p=q.db
C.b.sm(p.a,0)
p.aJ()
p=q.dx
C.b.sm(p.a,0)
p.aJ()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.aT(n.e)}q=n.Q
if(q!=null)q.D(null)}catch(o){s=H.ad(o)
r=H.ly(o)
P.lB("Error: "+H.f(s))
P.lB("Stack: "+H.f(r))
throw H.b(s)}}}
E.j7.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i8()}}}
Z.fp.prototype={}
Z.dM.prototype={
bl:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ad(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.jK.prototype={}
Z.dN.prototype={
aS:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bl:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bl(a)},
e2:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aT:function(a){var s,r,q,p,o,n=this.b.length
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
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a4(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bR.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eF(this.c))+"'")+"]"}}
Z.bE.prototype={
gcE:function(a){var s=this.a,r=(s&$.bn().a)!==0?3:0
if((s&$.bm().a)!==0)r+=3
if((s&$.bl().a)!==0)r+=3
if((s&$.bJ().a)!==0)r+=2
if((s&$.bK().a)!==0)r+=3
if((s&$.dB().a)!==0)r+=3
if((s&$.dC().a)!==0)r+=4
if((s&$.cg().a)!==0)++r
return(s&$.bk().a)!==0?r+4:r},
hf:function(a){var s,r=$.bn(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bJ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bK()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0)if(s===a)return r
return $.nw()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bE))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bn().a)!==0)s.push("Pos")
if((r&$.bm().a)!==0)s.push("Norm")
if((r&$.bl().a)!==0)s.push("Binm")
if((r&$.bJ().a)!==0)s.push("Txt2D")
if((r&$.bK().a)!==0)s.push("TxtCube")
if((r&$.dB().a)!==0)s.push("Clr3")
if((r&$.dC().a)!==0)s.push("Clr4")
if((r&$.cg().a)!==0)s.push("Weight")
if((r&$.bk().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hK.prototype={}
D.bO.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
L:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.G(q,b)
if(q===!0){q=r.a
s=(q&&C.b).L(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.G(q,b)
if(q===!0){q=r.b
s=(q&&C.b).L(q,b)||s}return s},
D:function(a){var s,r,q,p=this,o={}
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
return!0}if(!r)C.b.H(P.l5(s,!0,t.dm),new D.i0(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.H(s,new D.i1(o))}return!0},
ak:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.i0.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.i1.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.U.prototype={}
D.b8.prototype={}
D.b9.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dO.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ec.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ec))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.id.prototype={
i1:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hY:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.cD.prototype={}
X.ik.prototype={
aY:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.p()
s=b.b
r=o.ch
if(typeof s!=="number")return s.p()
q=new V.al(m.a+l*k,m.b+s*r)
r=o.a.gaQ()
p=new X.bU(a,V.bA(),o.x,r,q)
p.b=!0
o.z=new P.ah(n,!1)
o.x=q
return p},
cr:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.e8()
if(typeof s!=="number")return s.ad()
this.r=(s&~r)>>>0
return!1},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.aY(a,b))
return!0},
i2:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaQ()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.p()
o=a.b
n=m.cy
if(typeof o!=="number")return o.p()
r=new X.bV(new V.ab(q*p,o*n),s,r)
r.b=!0
l.D(r)
return!0},
fm:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cD(c,p.a.gaQ(),b)
q.b=!0
r.D(q)
p.y=new P.ah(s,!1)
p.x=V.bA()}}
X.ao.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ao))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bU.prototype={}
X.iH.prototype={
bK:function(a,b,c){var s=this,r=new P.ah(Date.now(),!1),q=s.a.gaQ(),p=new X.bU(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cr:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.bK(a,b,!0))
return!0},
bb:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.e8()
if(typeof r!=="number")return r.ad()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.D(s.bK(a,b,!0))
return!0},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bK(a,b,!1))
return!0},
i3:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaQ()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.p()
p=a.b
o=n.ch
if(typeof p!=="number")return p.p()
s=new X.bV(new V.ab(r*q,p*o),s,b)
s.b=!0
m.D(s)
return!0},
gdj:function(){var s=this.b
return s==null?this.b=D.L():s},
gbx:function(){var s=this.c
return s==null?this.c=D.L():s},
gdH:function(){var s=this.d
return s==null?this.d=D.L():s}}
X.bV.prototype={}
X.eD.prototype={}
X.cU.prototype={}
X.jb.prototype={
aY:function(a,b){var s=this,r=new P.ah(Date.now(),!1),q=a.length>0?a[0]:V.bA(),p=s.a.gaQ(),o=new X.cU(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i0:function(a){var s=this.b
if(s==null)return!1
s.D(this.aY(a,!0))
return!0},
hZ:function(a){var s=this.c
if(s==null)return!1
s.D(this.aY(a,!0))
return!0},
i_:function(a){var s=this.d
if(s==null)return!1
s.D(this.aY(a,!1))
return!0}}
X.fl.prototype={
gaQ:function(){var s=this.a,r=C.m.gdh(s).c
r.toString
s=C.m.gdh(s).d
s.toString
return V.mc(0,0,r,s)},
cR:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ec(s,new X.ao(r,a.altKey,a.shiftKey))},
aN:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ao(r,a.altKey,a.shiftKey)},
bY:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ao(r,a.altKey,a.shiftKey)},
aA:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.W()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.W()
if(typeof s!=="number")return H.v(s)
return new V.al(q-o,p-s)},
aZ:function(a){return new V.ab(a.movementX,a.movementY)},
bU:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.an(p.pageX)
C.d.an(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.an(p.pageX)
m=C.d.an(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.al(o-n,m-l))}return j},
ay:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dO(s,new X.ao(r,a.altKey,a.shiftKey))},
bL:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
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
fg:function(a){this.f=!0},
f4:function(a){this.f=!1},
fa:function(a){if(this.f&&this.bL(a))a.preventDefault()},
fk:function(a){var s
if(!this.f)return
s=this.cR(a)
this.b.i1(s)},
fi:function(a){var s
if(!this.f)return
s=this.cR(a)
this.b.hY(s)},
fo:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aN(a)
if(p.x){s=p.ay(a)
r=p.aZ(a)
if(p.d.cr(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ay(a)
q=p.aA(a)
if(p.c.cr(s,q))a.preventDefault()},
ft:function(a){var s,r,q,p=this
p.aN(a)
s=p.ay(a)
if(p.x){r=p.aZ(a)
if(p.d.bb(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.bb(s,q))a.preventDefault()},
fe:function(a){var s,r,q,p=this
if(!p.bL(a)){p.aN(a)
s=p.ay(a)
if(p.x){r=p.aZ(a)
if(p.d.bb(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.bb(s,q))a.preventDefault()}},
fq:function(a){var s,r,q,p=this
p.aN(a)
s=p.ay(a)
if(p.x){r=p.aZ(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.ba(s,q))a.preventDefault()},
fc:function(a){var s,r,q,p=this
if(!p.bL(a)){p.aN(a)
s=p.ay(a)
if(p.x){r=p.aZ(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.ba(s,q))a.preventDefault()}},
fv:function(a){var s,r,q=this
q.aN(a)
s=new V.ab((a&&C.E).ghv(a),C.E.ghw(a)).p(0,q.Q)
if(q.x){if(q.d.i2(s))a.preventDefault()
return}if(q.r)return
r=q.aA(a)
if(q.c.i3(s,r))a.preventDefault()},
fz:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ay(q.y)
r=q.aA(q.y)
q.d.fm(s,r,p)}},
fM:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bY(a)
s=r.bU(a)
if(r.e.i0(s))a.preventDefault()},
fI:function(a){var s
this.bY(a)
s=this.bU(a)
if(this.e.hZ(s))a.preventDefault()},
fK:function(a){var s
this.bY(a)
s=this.bU(a)
if(this.e.i_(s))a.preventDefault()}}
D.dK.prototype={$iV:1}
D.dW.prototype={$iV:1}
D.V.prototype={}
D.cy.prototype={
ab:function(a){var s=this.y
if(s!=null)s.D(a)},
cY:function(a){var s=this.z
if(s!=null)s.D(a)},
fl:function(){return this.cY(null)},
fC:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.en(q))return!1}return!0},
eZ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bz)this.r.push(o)
n=o.Q
if(n==null){n=new D.bO()
n.d=0
o.Q=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.b8()
s.b=!0
this.ab(s)},
fG:function(a,b){var s,r,q
for(s=b.gP(b),r=this.gcX();s.u();){q=s.gB(s)
C.b.L(this.e,q)
q.gA().L(0,r)}s=new D.b9()
s.b=!0
this.ab(s)},
en:function(a){var s=C.b.G(this.r,a)
return s}}
D.bz.prototype={
ab:function(a){var s=this.Q
if(s!=null)s.D(a)},
ep:function(){return this.ab(null)},
ga8:function(){return 4},
$iV:1}
D.eO.prototype={$iV:1}
V.a_.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.aK.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aK))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+", "+V.G(s.d,3,0)+"]"}}
V.hZ.prototype={}
V.iC.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.iC))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cf(H.d([o.a,o.d,o.r],n),3,0),l=V.cf(H.d([o.b,o.e,o.x],n),3,0),k=V.cf(H.d([o.c,o.f,o.y],n),3,0)
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
V.aQ.prototype={
ao:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
hL:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.D().toString
if(Math.abs(b3-0)<1e-9)return V.bx()
s=1/b3
r=-l
q=-a2
return V.aR((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
p:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aR(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
be:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aQ))return!1
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
i:function(a){return this.N()},
E:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cf(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.cf(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.cf(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.cf(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
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
N:function(){return this.E("")}}
V.al.prototype={
a2:function(a){return new V.ab(a.a-this.a,a.b-this.b)},
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
w:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
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
V.bB.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bB))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+", "+V.G(s.d,3,0)+"]"}}
V.eH.prototype={
gac:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eH))return!1
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
b6:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){var s,r,q=this.a,p=a.a
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
if(Math.abs(b-0)<1e-9){s=$.mq
return s==null?$.mq=new V.ab(0,0):s}s=this.a
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
b6:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){return new V.F(V.hz(this.a,a.a,b),V.hz(this.b,a.b,b),V.hz(this.c,a.c,b))},
K:function(){var s=this,r=Math.sqrt(s.a4(s))
if(r===1)return s
return s.Z(0,r)},
aC:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.F(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.F(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
Z:function(a,b){$.D().toString
if(Math.abs(b-0)<1e-9)return V.d2()
return new V.F(this.a/b,this.b/b,this.c/b)},
dG:function(){$.D().toString
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
V.d3.prototype={
b6:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d3))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.G(s.a,3,0)+", "+V.G(s.b,3,0)+", "+V.G(s.c,3,0)+", "+V.G(s.d,3,0)+"]"}}
U.hL.prototype={
bD:function(a){var s=V.kM(a,this.c,this.b)
return s},
gA:function(){var s=this.y
return s==null?this.y=D.L():s},
F:function(a){var s=this.y
if(s!=null)s.D(a)},
scA:function(a,b){},
sco:function(a){var s,r=this,q=r.b
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bD(s)}q=new D.B("maximumLocation",q,r.b)
q.b=!0
r.F(q)}},
scq:function(a){var s,r=this,q=r.c
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bD(s)}q=new D.B("minimumLocation",q,r.c)
q.b=!0
r.F(q)}},
sX:function(a,b){var s,r=this
b=r.bD(b)
s=r.d
$.D().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.B("location",s,b)
s.b=!0
r.F(s)}},
scp:function(a){var s,r,q=this,p=q.e
$.D().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.B("maximumVelocity",p,a)
p.b=!0
q.F(p)}},
sT:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.B("velocity",r,a)
r.b=!0
s.F(r)}},
sc9:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.B("dampening",s,a)
s.b=!0
this.F(s)}},
ap:function(a,b){var s,r,q,p=this,o=p.f
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
s=q}p.sT(s)}}}
U.cj.prototype={
gA:function(){var s=this.b
return s==null?this.b=D.L():s},
aq:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bQ.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.L():s},
F:function(a){var s=this.e
if(s!=null)s.D(a)},
a7:function(){return this.F(null)},
er:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaM(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gA()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b8()
s.b=!0
this.F(s)},
fE:function(a,b){var s,r
for(s=b.gP(b),r=this.gaM();s.u();)s.gB(s).gA().L(0,r)
s=new D.b9()
s.b=!0
this.F(s)},
aq:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a9()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a5(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.aq(0,b,c)
if(r!=null)s=s==null?r:r.p(0,s)}}q.f=s==null?V.bx():s
p=q.e
if(p!=null)p.ak(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
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
U.cO.prototype={
gA:function(){var s=this.y
return s==null?this.y=D.L():s},
F:function(a){var s=this.y
if(s!=null)s.D(a)},
se5:function(a){var s
a=V.kM(a,0,6.283185307179586)
s=this.a
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.B("yaw",s,a)
s.b=!0
this.F(s)}},
sdT:function(a,b){var s
b=V.kM(b,0,6.283185307179586)
s=this.b
$.D().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.B("pitch",s,b)
s.b=!0
this.F(s)}},
sdZ:function(a){var s
a=V.kM(a,0,6.283185307179586)
s=this.c
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.B("roll",s,a)
s.b=!0
this.F(s)}},
aq:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se5(s.a+s.d*b.y)
s.sdT(0,s.b+s.e*b.y)
s.sdZ(s.c+s.f*b.y)
s.x=V.m0(s.c).p(0,V.m_(s.b)).p(0,V.lZ(s.a))
r=s.y
if(r!=null)r.ak(0)}return s.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cO))return!1
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
U.d_.prototype={
gA:function(){var s=this.cy
return s==null?this.cy=D.L():s},
F:function(a){var s=this.cy
if(s!=null)s.D(a)},
a7:function(){return this.F(null)},
b1:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdj().n(0,s.gbM())
s.a.c.gdH().n(0,s.gbO())
s.a.c.gbx().n(0,s.gbQ())
return!0},
bN:function(a){var s=this
if(!J.H(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bP:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a2(a.d)
s=s.a4(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a2(a.d).p(0,2).Z(0,s.gac())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.p()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sT(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a2(q).p(0,2).Z(0,s.gac())
r=l.b
o=p.a
if(typeof o!=="number")return o.S()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
l.b.sT(0)
l.Q=a.z.a2(q).p(0,2).Z(0,s.gac())}l.a7()},
bR:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a4(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.p()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sT(r*10*q)
p.a7()}},
aq:function(a,b,c){var s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a9()
if(q<p){r.ch=p
s=b.y
r.b.ap(0,s)
r.cx=V.m0(r.b.d)}return r.cx},
$iS:1}
U.d0.prototype={
gA:function(){var s=this.fx
return s==null?this.fx=D.L():s},
F:function(a){var s=this.fx
if(s!=null)s.D(a)},
a7:function(){return this.F(null)},
b1:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdj().n(0,q.gbM())
q.a.c.gdH().n(0,q.gbO())
q.a.c.gbx().n(0,q.gbQ())
s=q.a.d
r=s.f
s=r==null?s.f=D.L():r
s.n(0,q.geQ())
s=q.a.d
r=s.d
s=r==null?s.d=D.L():r
s.n(0,q.geS())
s=q.a.e
r=s.b
s=r==null?s.b=D.L():r
s.n(0,q.gh5())
s=q.a.e
r=s.d
s=r==null?s.d=D.L():r
s.n(0,q.gh3())
s=q.a.e
r=s.c
s=r==null?s.c=D.L():r
s.n(0,q.gh1())
return!0},
at:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.S()
s=-s}if(this.r){if(typeof r!=="number")return r.S()
r=-r}return new V.ab(s,r)},
bN:function(a){var s=this
t.c.a(a)
if(!J.H(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bP:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a2(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.at(a.y.a2(a.d).p(0,2).Z(0,s.gac()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.S()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sT(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.S()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sT(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.at(r.a2(q).p(0,2).Z(0,s.gac()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sX(0,-n*o+r)
l.b.sT(0)
l.c.sT(0)
l.dx=l.at(a.z.a2(q).p(0,2).Z(0,s.gac()))}l.a7()},
bR:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.S()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sT(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.S()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sT(-r*10*s)
p.a7()}},
eR:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eT:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.H(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.at(r.a2(q).p(0,2).Z(0,s.gac()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sX(0,-n*o+r)
l.b.sT(0)
l.c.sT(0)
l.dx=l.at(a.z.a2(q).p(0,2).Z(0,s.gac()))
l.a7()},
h6:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
h4:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a2(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.at(a.y.a2(a.d).p(0,2).Z(0,s.gac()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.S()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sT(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.S()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sT(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.at(r.a2(q).p(0,2).Z(0,s.gac()))
r=l.c
o=p.a
if(typeof o!=="number")return o.S()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.S()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sX(0,-n*o+r)
l.b.sT(0)
l.c.sT(0)
l.dx=l.at(a.z.a2(q).p(0,2).Z(0,s.gac()))}l.a7()},
h2:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.S()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sT(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.S()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sT(-r*10*s)
p.a7()}},
aq:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a9()
if(q<p){r.dy=p
s=b.y
r.c.ap(0,s)
r.b.ap(0,s)
r.fr=V.lZ(r.b.d).p(0,V.m_(r.c.d))}return r.fr},
$iS:1}
U.d1.prototype={
gA:function(){var s=this.r
return s==null?this.r=D.L():s},
F:function(a){var s=this.r
if(s!=null)s.D(a)},
b1:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.L():r
r=p.geV()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.L():q).n(0,r)
return!0},
eW:function(a){var s,r,q,p,o=this
if(!J.H(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.p()
p=s+r*q
if(s!==p){o.d=p
s=new D.B("zoom",s,p)
s.b=!0
o.F(s)}},
aq:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.l7(s,s,s,1)}return r.f},
$iS:1}
M.dZ.prototype={
ax:function(a){var s=this.y
if(s!=null)s.D(a)},
es:function(){return this.ax(null)},
f6:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gas(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bO()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b8()
s.b=!0
this.ax(s)},
f8:function(a,b){var s,r
for(s=b.gP(b),r=this.gas();s.u();)s.gB(s).gA().L(0,r)
s=new D.b9()
s.b=!0
this.ax(s)},
sbd:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gA().L(0,r.gas())
s=r.d
r.d=a
if(a!=null)a.gA().n(0,r.gas())
q=new D.B("technique",s,r.d)
q.b=!0
r.ax(q)}},
gA:function(){var s=this.y
return s==null?this.y=D.L():s},
aT:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.dW(a3.d)
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
m=C.d.an(n*q)
n=o.b
if(typeof p!=="number")return H.v(p)
l=C.d.an(n*p)
n=C.d.an(o.c*q)
a4.c=n
o=C.d.an(o.d*p)
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
g=V.aR(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.dV(g)
r=$.m3
if(r==null){r=V.od()
o=$.mt
if(o==null)o=$.mt=new V.F(0,1,0)
n=$.mr
f=(n==null?$.mr=new V.F(0,0,-1):n).K()
e=o.aC(f).K()
d=f.aC(e)
c=new V.F(r.a,r.b,r.c)
b=e.S(0).a4(c)
a=d.S(0).a4(c)
a0=f.S(0).a4(c)
r=V.aR(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.m3=r
a1=r}else a1=r
r=s.b
if(r!=null){a2=r.aq(0,a4,s)
if(a2!=null)a1=a2.p(0,a1)}a4.db.dV(a1)
s=a3.d
if(s!=null)s.ap(0,a4)
for(s=a3.e.a,s=new J.a5(s,s.length);s.u();)s.d.ap(0,a4)
for(s=a3.e.a,s=new J.a5(s,s.length);s.u();)s.d.aT(a4)
a3.b.toString
a4.cy.cs()
a4.db.cs()
a3.c.toString
a4.dU()}}
A.dH.prototype={}
A.hE.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hy:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hx:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a6.prototype={
gar:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a6))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.ei.prototype={
eh:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
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
A.pQ(c9,s)
A.pS(c9,s)
A.pR(c9,s)
A.pU(c9,s)
A.pV(c9,s)
A.pT(c9,s)
A.pW(c9,s)
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
k=A.pP(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cS(l,35633)
c4.f=c4.cS(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.u("Failed to link shader: "+H.f(j)))}c4.fY()
c4.h_()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.U(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.U(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.U(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.U(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.U(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.U(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.U(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.U(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.bn
if(q>0){c4.k4=c4.y.U(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.u(c6+n+c7))
p.push(r.a(h))}}if(c9.a.a)c4.r2=t.r.a(c4.y.U(0,"emissionClr"))
if(c9.b.a)c4.x1=t.r.a(c4.y.U(0,"ambientClr"))
if(c9.c.a)c4.y2=t.r.a(c4.y.U(0,"diffuseClr"))
if(c9.d.a)c4.bo=t.r.a(c4.y.U(0,"invDiffuseClr"))
r=c9.e.a
if(!r)q=!1
else q=!0
if(q){c4.dq=t.n.a(c4.y.U(0,"shininess"))
if(r)c4.dn=t.r.a(c4.y.U(0,"specularClr"))}if(c9.db){c4.dr=t.p.a(c4.y.U(0,"envSampler"))
if(c9.r.a)c4.ds=t.r.a(c4.y.U(0,"reflectClr"))
r=c9.x.a
if(!r)q=!1
else q=!0
if(q){c4.dt=t.n.a(c4.y.U(0,"refraction"))
if(r)c4.du=t.r.a(c4.y.U(0,"refractClr"))}}if(c9.y.a)c4.dv=t.n.a(c4.y.U(0,"alpha"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.ca=new H.C(t.J)
c4.cb=new H.C(t.en)
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
if(typeof e!=="number")return e.ad()
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
a7=a6}c.push(new A.cV(h,a0,a1,a7,a6,a5))}c4.cb.l(0,e,c)
m=c4.ca
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.cc=new H.C(t.J)
c4.cd=new H.C(t.af)
for(p=t.r,o=t.v,n=t.dv,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.ad()
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
c.push(new A.cW(b1,b0,a9,h,a0,b2))}c4.cd.l(0,e,c)
m=c4.cc
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.ce=new H.C(t.J)
c4.cf=new H.C(t.gr)
for(p=t.r,o=t.O,n=t.p,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
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
if(typeof e!=="number")return e.ad()
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
a7=a6}c.push(new A.cY(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.cf.l(0,e,c)
a8=c4.ce
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
a8.l(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.cg=new H.C(t.J)
c4.ci=new H.C(t.bR)
for(p=t.r,o=t.n,n=t.y,m=t.v,b=t.fF,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
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
if(typeof e!=="number")return e.ad()
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
c.push(new A.cZ(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.ci.l(0,e,c)
a=c4.cg
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
a.l(0,e,h)}}}},
fW:function(a,b){}}
A.dL.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dX.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eE.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eP.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iq.prototype={
i:function(a){return this.b4}}
A.cV.prototype={}
A.cW.prototype={}
A.cY.prototype={}
A.cZ.prototype={}
A.cP.prototype={
ek:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cS:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
fY:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dH(n,r.name,q))}p.x=new A.hE(o)},
h_:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.ht(r.type,r.size,r.name,q))}p.y=new A.jl(o)},
aL:function(a,b,c){var s=this.a
if(a===1)return new A.fa(s,b,c)
else return A.lb(s,this.r,b,a,c)},
eL:function(a,b,c){var s=this.a
if(a===1)return new A.fe(s,b,c)
else return A.lb(s,this.r,b,a,c)},
eM:function(a,b,c){var s=this.a
if(a===1)return new A.ff(s,b,c)
else return A.lb(s,this.r,b,a,c)},
bk:function(a,b){return new P.fG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
ht:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aL(b,c,d)
case 5121:return s.aL(b,c,d)
case 5122:return s.aL(b,c,d)
case 5123:return s.aL(b,c,d)
case 5124:return s.aL(b,c,d)
case 5125:return s.aL(b,c,d)
case 5126:return new A.f9(s.a,c,d)
case 35664:return new A.jh(s.a,c,d)
case 35665:return new A.fb(s.a,c,d)
case 35666:return new A.fc(s.a,c,d)
case 35667:return new A.ji(s.a,c,d)
case 35668:return new A.jj(s.a,c,d)
case 35669:return new A.jk(s.a,c,d)
case 35674:return new A.jm(s.a,c,d)
case 35675:return new A.fd(s.a,c,d)
case 35676:return new A.cX(s.a,c,d)
case 35678:return s.eL(b,c,d)
case 35680:return s.eM(b,c,d)
case 35670:throw H.b(s.bk("BOOL",c))
case 35671:throw H.b(s.bk("BOOL_VEC2",c))
case 35672:throw H.b(s.bk("BOOL_VEC3",c))
case 35673:throw H.b(s.bk("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.f8.prototype={}
A.jl.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
U:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.N()},
N:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fa.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.ji.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jj.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jk.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jg.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.f9.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fb.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fc.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jm.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fd.prototype={
al:function(a){var s=new Float32Array(H.dt(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.cX.prototype={
al:function(a){var s=new Float32Array(H.dt(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fe.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.ff.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kc.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cn(q.b,b).cn(q.d.cn(q.c,b),c)
a.sX(0,new V.Q(p.a,p.b,p.c))
a.se0(p.K())
q=1-b
s=1-c
a.sdd(new V.bB(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.km.prototype={
$2:function(a,b){return V.hz(this.a,this.b,b)}}
F.ko.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hz(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.v(n)
q=-q*n
s=p*n
a.sX(0,new V.Q(q,s,o))
a.se0(new V.F(q,s,o).K())
a.sdd(new V.bB(1-c,2+c,-1,-1))}}
F.kp.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kq.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kJ.prototype={
$2:function(a,b){return 0}}
F.kK.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.v(r)
s=a.f
r=new V.F(s.a,s.b,s.c).K().p(0,this.b+r)
a.sX(0,new V.Q(r.a,r.b,r.c))}}
F.kL.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.kz.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.Q(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kn.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lG(l.$1(m),k)
k=J.lG(l.$1(m+3.141592653589793/n.c),k).W(0,j)
s=new V.F(k.a,k.b,k.c).K()
l=$.ms
if(l==null){l=new V.F(1,0,0)
$.ms=l
r=l}else r=l
if(!J.H(s,r)){l=$.mu
if(l==null){l=new V.F(0,0,1)
$.mu=l
r=l}else r=l}q=s.aC(r).K()
r=q.aC(s).K()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.p(0,l*k)
k=q.p(0,o*k)
a.sX(0,j.w(0,new V.Q(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.e_.prototype={
b2:function(){var s=this
if(!s.gb3()){C.b.L(s.a.a.d.b,s)
s.a.a.Y()}s.bV()
s.bW()
s.fP()},
bZ:function(a){this.a=a
a.d.b.push(this)},
c_:function(a){this.b=a
a.d.c.push(this)},
fX:function(a){this.c=a
a.d.d.push(this)},
bV:function(){var s=this.a
if(s!=null){C.b.L(s.d.b,this)
this.a=null}},
bW:function(){var s=this.b
if(s!=null){C.b.L(s.d.c,this)
this.b=null}},
fP:function(){var s=this.c
if(s!=null){C.b.L(s.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
eE:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d2()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dG())return p
return q.K()},
eG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.W(0,n)
q=new V.F(o.a,o.b,o.c).K()
o=r.W(0,n)
return q.aC(new V.F(o.a,o.b,o.c).K()).K()},
c5:function(){var s,r=this
if(r.d!=null)return!0
s=r.eE()
if(s==null){s=r.eG()
if(s==null)return!1}r.d=s
r.a.a.Y()
return!0},
eD:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d2()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dG())return p
return q.K()},
eF:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.D().toString
if(Math.abs(p-0)<1e-9){j=b.W(0,e)
o=new V.F(j.a,j.b,j.c).K()
if(q.a-r.a<0)o=o.S(0)}else{n=(j-s.b)/p
j=b.W(0,e).p(0,n).w(0,e).W(0,h)
o=new V.F(j.a,j.b,j.c).K()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.S(0)}j=l.d
if(j!=null){m=j.K()
o=m.aC(o).K().aC(m).K()}return o},
c3:function(){var s,r=this
if(r.e!=null)return!0
s=r.eD()
if(s==null){s=r.eF()
if(s==null)return!1}r.e=s
r.a.a.Y()
return!0},
ghn:function(a){var s=this
if(J.H(s.a,s.b))return!0
if(J.H(s.b,s.c))return!0
if(J.H(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var s,r,q=this
if(q.gb3())return a+"disposed"
s=a+C.a.aj(J.a4(q.a.e),0)+", "+C.a.aj(J.a4(q.b.e),0)+", "+C.a.aj(J.a4(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
N:function(){return this.E("")}}
F.i2.prototype={}
F.j3.prototype={
b8:function(a,b,c){var s,r=b.a
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.ef.prototype={
b2:function(){var s=this
if(!s.gb3()){C.b.L(s.a.a.c.b,s)
s.a.a.Y()}s.bV()
s.bW()},
bZ:function(a){this.a=a
a.c.b.push(this)},
c_:function(a){this.b=a
a.c.c.push(this)},
bV:function(){var s=this.a
if(s!=null){C.b.L(s.c.b,this)
this.a=null}},
bW:function(){var s=this.b
if(s!=null){C.b.L(s.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){if(this.gb3())return a+"disposed"
return a+C.a.aj(J.a4(this.a.e),0)+", "+C.a.aj(J.a4(this.b.e),0)},
N:function(){return this.E("")}}
F.ie.prototype={}
F.jf.prototype={
b8:function(a,b,c){var s,r=b.a
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
return r==s.e}else{r=b.a
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
return r==s.e}else return!1}}}
F.eC.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.aj(J.a4(s.e),0)},
N:function(){return this.E("")}}
F.iW.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.L():s},
b9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.v()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hq())}f.a.v()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eC()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.D(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.o5(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cr(j,i,g)}e=f.e
if(e!=null)e.ak(0)},
av:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.av()||!1
if(!r.a.av())s=!1
q=r.e
if(q!=null)q.ak(0)
return s},
hO:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.lo(m).J("w<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghD(s)
C.b.cu(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(o!=null&&a.b8(0,r,o)){q.push(o)
C.b.cu(s,p)}}if(q.length>1)b.b9(q)}}n.a.v()
n.c.cv()
n.d.cv()
n.b.i7()
n.c.cw(new F.jf())
n.d.cw(new F.j3())
m=n.e
if(m!=null)m.ak(0)},
c2:function(){this.hO(new F.jE(),new F.iK())},
ck:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.ck()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.c(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdI(new V.F(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.F(-o.a,-o.b,-o.c).K()
if(!J.H(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}}o=p.e
if(o!=null)o.ak(0)},
hl:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bn().a)!==0?1:0
if((s&$.bm().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bJ().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.dB().a)!==0)++r
if((s&$.dC().a)!==0)++r
if((s&$.cg().a)!==0)++r
if((s&$.bk().a)!==0)++r
q=a6.gcE(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hf(k)
i=j.gcE(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dM(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hN(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.dt(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dN(new Z.fp(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)}a1=Z.lc(s,34963,a0)
a.b.push(new Z.bR(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)}a1=Z.lc(s,34963,a0)
a.b.push(new Z.bR(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].c
m.a.a.v()
a0.push(m.e)}a1=Z.lc(s,34963,a0)
a.b.push(new Z.bR(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.b.j(q,"\n")},
Y:function(){var s=this.e
if(s!=null)s.D(null)}}
F.iX.prototype={
hb:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
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
n.push(F.cr(s,p,o))}}return n},
hc:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
f.push(F.cr(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cr(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cr(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cr(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
cw:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b8(0,n,l)){n.b2()
break}}}}},
cv:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.ghn(q)
if(r)q.b2()}},
av:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c5())q=!1
return q},
c4:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c3())q=!1
return q},
ck:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.F(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.F(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.D(null)}},
i:function(a){return this.N()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
N:function(){return this.E("")}}
F.iY.prototype={
gm:function(a){return this.b.length},
cw:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b8(0,n,l)){n.b2()
break}}}}},
cv:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=J.H(q.a,q.b)
if(r)q.b2()}},
i:function(a){return this.N()},
E:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.b.j(q,"\n")},
N:function(){return this.E("")}}
F.iZ.prototype={
gm:function(a){return this.b.length},
i7:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.L(q.b.b,r)
q=r.a.a.e
if(q!=null)q.D(null)
q=r.a
if(q!=null){C.b.L(q.b.b,r)
r.a=null}}}},
i:function(a){return this.N()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
N:function(){return this.E("")}}
F.fm.prototype={
c8:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fn(s.cx,p,m,r,q,o,n,a,l)},
hq:function(){return this.c8(null)},
sX:function(a,b){var s
if(!J.H(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Y()}},
sdI:function(a){var s
a=a==null?null:a.K()
if(!J.H(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Y()}},
se0:function(a){var s
if(!J.H(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Y()}},
sdd:function(a){var s
if(!J.H(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Y()}},
hN:function(a){var s,r,q=this
if(a.q(0,$.bn())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bm())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bl())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bJ())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.q(0,$.bK())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dB())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dC())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.q(0,$.cg()))return H.d([q.ch],t.m)
else if(a.q(0,$.bk())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
c5:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d2()
r.d.H(0,new F.jJ(q))
r.r=q.a.K()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.ak(0)}return!0},
c3:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d2()
r.d.H(0,new F.jI(q))
r.x=q.a.K()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.ak(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.aj(J.a4(q.e),0))
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
N:function(){return this.E("")}}
F.jJ.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jI.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jz.prototype={
v:function(){var s,r,q,p
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
hd:function(a,b,c,d,e,f){var s=F.fn(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
av:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c5()
return!0},
c4:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c3()
return!0},
hm:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.K()
if(!J.H(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}}return!0},
i:function(a){return this.N()},
E:function(a){var s,r,q,p
this.v()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].E(a))
return C.b.j(s,"\n")},
N:function(){return this.E("")}}
F.jA.prototype={
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
C.b.H(s.c,new F.jB(s,b))
C.b.H(s.d,new F.jC(s,b))},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jB.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.jC.prototype={
$1:function(a){var s=this.a
if(!J.H(a.a,s)&&!J.H(a.b,s))this.b.$1(a)}}
F.jD.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jF.prototype={}
F.jE.prototype={
b8:function(a,b,c){return J.H(b.f,c.f)}}
F.jG.prototype={}
F.iK.prototype={
b9:function(a){var s,r,q,p=V.d2()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.F(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.K()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdI(p)
return null}}
F.jH.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
O.ej.prototype={
gA:function(){var s=this.fr
return s==null?this.fr=D.L():s},
af:function(a){var s=this.fr
if(s!=null)s.D(a)},
ew:function(){return this.af(null)},
cZ:function(a){this.a=null
this.af(a)},
fT:function(){return this.cZ(null)},
f0:function(a,b){var s=new D.b8()
s.b=!0
this.af(s)},
f2:function(a,b){var s=new D.b9()
s.b=!0
this.af(s)},
cQ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga8()
n=d.h(0,p.ga8())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.H(0,new O.iu(f,m))
C.b.aW(m,new O.iv())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga8()
n=l.h(0,p.ga8())
l.l(0,o,n==null?1:n)}k=H.d([],t.M)
l.H(0,new O.iw(f,k))
C.b.aW(k,new O.ix())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga8()
n=j.h(0,p.ga8())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.H(0,new O.iy(f,i))
C.b.aW(i,new O.iz())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.ga8()
o=h.h(0,p.ga8())
h.l(0,r,o==null?1:o)}g=H.d([],t.cz)
h.H(0,new O.iA(f,g))
C.b.aW(g,new O.iB())
e=C.c.a1(f.e.a.length+3,4)
f.dy.toString
return A.oc(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
eC:function(a,b){},
ap:function(a,b){var s,r,q
for(s=this.dx.a,s=new J.a5(s,s.length);s.u();){r=s.d
r.toString
q=$.iD
r.a=q==null?$.iD=new V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q
q=r.b
if(q!=null)r.a=q.aq(0,b,r)}},
i9:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=a8.a
if(a9==null){a9=a8.cQ()
s=b0.fr.h(0,a9.b4)
if(s==null){s=A.ob(a9,b0.a)
r=s.b
if(r.length===0)H.q(P.u("May not cache a shader with no name."))
if(b0.fr.c6(0,r))H.q(P.u('Shader cache already contains a shader by the name "'+r+'".'))
b0.fr.l(0,r,s)}a9=a8.a=s
b1.e=null}q=a9.z
p=q.bo
a9=b1.e
if(!(a9 instanceof Z.dN))a9=b1.e=null
if(a9==null||!a9.d.q(0,p)){a9=q.k4
if(a9)b1.d.av()
o=q.r1
if(o){n=b1.d
m=n.e
if(m!=null)++m.d
n.d.c4()
n.a.c4()
n=n.e
if(n!=null)n.ak(0)}n=q.rx
if(n){m=b1.d
l=m.e
if(l!=null)++l.d
m.a.hm()
m=m.e
if(m!=null)m.ak(0)}k=b1.d.hl(new Z.jK(b0.a),p)
k.aS($.bn()).e=a8.a.Q.c
if(a9)k.aS($.bm()).e=a8.a.cx.c
if(o)k.aS($.bl()).e=a8.a.ch.c
if(q.r2)k.aS($.bJ()).e=a8.a.cy.c
if(n)k.aS($.bK()).e=a8.a.db.c
if(q.ry)k.aS($.bk()).e=a8.a.dx.c
b1.e=k}j=H.d([],t.bw)
a9=a8.a
o=b0.a
o.useProgram(a9.r)
a9.x.hy()
if(q.fr){a9=a8.a
n=b0.dx
n=n.ga5(n)
a9=a9.dy
a9.toString
a9.al(n.ao(0,!0))}if(q.fx){a9=a8.a
n=b0.cx
if(n==null){n=b0.db
n=n.ga5(n)
m=b0.dx
m=b0.cx=n.p(0,m.ga5(m))
n=m}a9=a9.fr
a9.toString
a9.al(n.ao(0,!0))}a9=a8.a
n=b0.ch
if(n==null){n=b0.gi5()
m=b0.dx
m=b0.ch=n.p(0,m.ga5(m))
n=m}a9=a9.fy
a9.toString
a9.al(n.ao(0,!0))
if(q.go){a9=a8.a
n=b0.db
n=n.ga5(n)
a9=a9.fx
a9.toString
a9.al(n.ao(0,!0))}if(q.x1){a9=a8.a
n=a8.b
a9=a9.k1
a9.toString
a9.al(C.i.ao(n,!0))}if(q.x2){a9=a8.a
n=a8.c
a9=a9.k2
a9.toString
a9.al(C.i.ao(n,!0))}if(q.y1){a9=a8.a
n=a8.d
a9=a9.k3
a9.toString
a9.al(C.i.ao(n,!0))}if(q.bn>0){i=a8.e.a.length
a9=a8.a.k4
a9.a.uniform1i(a9.d,i)
for(h=0;h<i;++h){a9=a8.a
n=a8.e.a
if(h>=n.length)return H.c(n,h)
n=n[h]
a9=a9.r1
if(h>=a9.length)return H.c(a9,h)
a9=a9[h]
g=new Float32Array(H.dt(n.ao(0,!0)))
a9.a.uniformMatrix4fv(a9.d,!1,g)}}if(q.a.a){a9=a8.a
n=a8.f.f
a9=a9.r2
a9.a.uniform3f(a9.d,n.a,n.b,n.c)}if(q.k1){if(q.b.a){a9=a8.a
n=a8.r.f
a9=a9.x1
a9.a.uniform3f(a9.d,n.a,n.b,n.c)}if(q.c.a){a9=a8.a
n=a8.x.f
a9=a9.y2
a9.a.uniform3f(a9.d,n.a,n.b,n.c)}if(q.d.a){a9=a8.a
n=a8.y.f
a9=a9.bo
a9.a.uniform3f(a9.d,n.a,n.b,n.c)}a9=q.e.a
if(!a9)n=!1
else n=!0
if(n){n=a8.a
m=a8.z.ch
n=n.dq
n.a.uniform1f(n.d,m)}if(a9){a9=a8.a
n=a8.z.f
a9=a9.dn
a9.a.uniform3f(a9.d,n.a,n.b,n.c)}a9=q.z
if(a9.length>0){f=new H.C(t.a)
for(n=a8.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga8()
b=f.h(0,c)
if(b==null)b=0
f.l(0,c,b+1)
a=J.ch(a8.a.cb.h(0,c),b)
l=d.giq()
a0=$.aT
l=l.be(a0==null?$.aT=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giu()
a0=$.aT
l=l.be(a0==null?$.aT=new V.Q(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaB(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.ghz()){l=d.ghg()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.ghh()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.ghi()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=a9.length,e=0;e<a9.length;a9.length===n||(0,H.o)(a9),++e){m=a9[e].a
i=f.h(0,m)
if(i==null)i=0
m=a8.a.ca.h(0,m)
m.a.uniform1i(m.d,i)}}a9=q.Q
if(a9.length>0){n=b0.db
a1=n.ga5(n)
a2=new H.C(t.a)
for(n=a8.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga8()
b=a2.h(0,c)
if(b==null)b=0
a2.l(0,c,b+1)
a=J.ch(a8.a.cd.h(0,c),b)
l=d.gdi(d)
l=new V.F(C.d.p(a1.a,l.gdk(l))+C.d.p(a1.b,l.gdl(l))+C.d.p(a1.c,l.gdm()),C.d.p(a1.e,l.gdk(l))+C.d.p(a1.f,l.gdl(l))+C.d.p(a1.r,l.gdm()),C.d.p(a1.y,l.gdk(l))+C.d.p(a1.z,l.gdl(l))+C.d.p(a1.Q,l.gdm())).K()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.gaB(d)
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)
d.gaV()
l=d.gdi(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gbx()
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gbv(d)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaV()
if(!C.b.G(j,l)){l.sb5(0,j.length)
j.push(l)}l=d.gaV()
a0=l.gb7(l)
if(a0){a0=a.r
a0.toString
a3=l.gb7(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gb5(l))}}for(n=a9.length,e=0;e<a9.length;a9.length===n||(0,H.o)(a9),++e){m=a9[e].a
i=a2.h(0,m)
if(i==null)i=0
m=a8.a.cc.h(0,m)
m.a.uniform1i(m.d,i)}}a9=q.ch
if(a9.length>0){n=b0.db
a1=n.ga5(n)
a5=new H.C(t.a)
for(n=a8.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga8()
b=a5.h(0,c)
if(b==null)b=0
a5.l(0,c,b+1)
a=J.ch(a8.a.cf.h(0,c),b)
a6=a1.p(0,d.a)
l=d.a
a0=$.aT
l=l.be(a0==null?$.aT=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aT
l=a6.be(l==null?$.aT=new V.Q(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.c
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.r
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.x
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.y
a0=a.Q
a0.a.uniform1f(a0.d,l)}for(n=a9.length,e=0;e<a9.length;a9.length===n||(0,H.o)(a9),++e){m=a9[e].a
i=a5.h(0,m)
if(i==null)i=0
m=a8.a.ce.h(0,m)
m.a.uniform1i(m.d,i)}}a9=q.cx
if(a9.length>0){n=b0.db
a1=n.ga5(n)
a7=new H.C(t.a)
for(n=a8.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga8()
b=a7.h(0,c)
if(b==null)b=0
a7.l(0,c,b+1)
a=J.ch(a8.a.ci.h(0,c),b)
l=d.gi4(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gdi(d).K()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.be(d.gi4(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaB(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaV()
l=d.gbx()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gbv(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giK()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.giL()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gaV()
l=d.gaV()
if(!C.b.G(j,l)){l.sb5(0,j.length)
j.push(l)}l=d.gaV()
a0=l.gb7(l)
if(a0){a0=a.dx
a0.toString
a3=l.gb7(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gb5(l))}d.gcD()
l=d.gip()
a0=a.z
a0.a.uniform4f(a0.d,l.a,l.b,l.c,l.d)
l=d.gcD()
if(!C.b.G(j,l)){l.sb5(0,j.length)
j.push(l)}l=d.gcD()
a0=l.gb7(l)
if(a0){a0=a.dy
a0.toString
a3=l.gb7(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gb5(l))}if(d.git()){l=d.gis()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.gir()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.ghz()){l=d.ghg()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.ghh()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.ghi()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=a9.length,e=0;e<a9.length;a9.length===n||(0,H.o)(a9),++e){m=a9[e].a
i=a7.h(0,m)
if(i==null)i=0
m=a8.a.cg.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){a9=a8.a
n=b0.Q
if(n==null){n=b0.db
n=b0.Q=n.ga5(n).hL(0)}a9=a9.id
a9.toString
a9.al(n.ao(0,!0))}if(q.db){a8.eC(j,a8.ch)
a9=a8.a
n=a8.ch
a9.fW(a9.dr,n)
if(q.r.a){a9=a8.a
n=a8.cx.f
a9=a9.ds
a9.a.uniform3f(a9.d,n.a,n.b,n.c)}a9=q.x.a
if(!a9)n=!1
else n=!0
if(n){n=a8.a
m=a8.cy.ch
n=n.dt
n.a.uniform1f(n.d,m)}if(a9){a9=a8.a
n=a8.cy.f
a9=a9.du
a9.a.uniform3f(a9.d,n.a,n.b,n.c)}}a9=q.y.a
n=!a9
if(n)m=!1
else m=!0
if(m){if(a9){a9=a8.a
m=a8.db.f
a9=a9.dv
a9.a.uniform1f(a9.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bl(b0)
a9=b1.e
a9.bl(b0)
a9.aT(b0)
a9.e2(b0)
if(n)a9=!1
else a9=!0
if(a9)o.disable(3042)
for(h=0;h<j.length;++h)j[h].e2(b0)
a9=a8.a
a9.toString
o.useProgram(null)
a9.x.hx()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cQ().b4}}
O.iu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dL(a,C.c.a1(b+3,4)*4))}}
O.iv.prototype={
$2:function(a,b){return J.dD(a.a,b.a)}}
O.iw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dX(a,C.c.a1(b+3,4)*4))}}
O.ix.prototype={
$2:function(a,b){return J.dD(a.a,b.a)}}
O.iy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eE(a,C.c.a1(b+3,4)*4))}}
O.iz.prototype={
$2:function(a,b){return J.dD(a.a,b.a)}}
O.iA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eP(a,C.c.a1(b+3,4)*4))}}
O.iB.prototype={
$2:function(a,b){return J.dD(a.a,b.a)}}
O.io.prototype={
az:function(){var s,r=this
r.cG()
s=r.f
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.B(r.b,s,1)
s.b=!0
r.a.af(s)}}}
O.ek.prototype={
az:function(){},
d1:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.az()
s=q.a
s.a=null
s.af(null)}}}
O.ip.prototype={}
O.aP.prototype={
d0:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.B(q.b+".color",s,a)
r.b=!0
q.a.af(r)}},
az:function(){this.cG()
this.d0(new V.a_(1,1,1))},
saB:function(a,b){this.d1(new A.a6(!0,!1,!1))
this.d0(b)}}
O.ir.prototype={}
O.is.prototype={
az:function(){var s,r=this
r.cH()
s=r.ch
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.B(r.b+".refraction",s,1)
s.b=!0
r.a.af(s)}}}
O.it.prototype={
d2:function(a){var s=this,r=s.ch
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.B(s.b+".shininess",r,a)
r.b=!0
s.a.af(r)}},
az:function(){this.cH()
this.d2(100)}}
O.f_.prototype={}
T.j6.prototype={}
X.kS.prototype={}
X.i6.prototype={
gA:function(){var s=this.x
return s==null?this.x=D.L():s}}
X.ey.prototype={
gA:function(){var s=this.f
return s==null?this.f=D.L():s},
aK:function(a){var s=this.f
if(s!=null)s.D(a)},
ez:function(){return this.aK(null)},
saF:function(a){var s,r,q=this
if(!J.H(q.b,a)){s=q.b
if(s!=null)s.gA().L(0,q.gcL())
r=q.b
q.b=a
if(a!=null)a.gA().n(0,q.gcL())
s=new D.B("mover",r,q.b)
s.b=!0
q.aK(s)}}}
X.j5.prototype={}
V.b4.prototype={
bh:function(a){this.b=new P.i8(C.T)
this.c=null
this.d=H.d([],t.u)},
M:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.d([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.d([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eK(o,0,o.length)
l=m==null?o:m
C.R.e9(n,H.lC(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gaw(k.d).push(n)}},
dR:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bm()
r.toString
q=new H.p(s)
q=new P.bF(r.cz(new H.bb(q,q.gm(q))).a())
for(;q.u();)p.bu(q.gB(q))}}
V.kI.prototype={
$1:function(a){var s=C.d.e1(this.a.ghI(),2)
if(s!=="0.00")P.lB(s+" fps")}}
V.dU.prototype={
bu:function(a){var s=this
switch(a.a){case"Class":s.M(a.b,"#551")
break
case"Comment":s.M(a.b,"#777")
break
case"Id":s.M(a.b,"#111")
break
case"Num":s.M(a.b,"#191")
break
case"Reserved":s.M(a.b,"#119")
break
case"String":s.M(a.b,"#171")
break
case"Symbol":s.M(a.b,"#616")
break
case"Type":s.M(a.b,"#B11")
break
case"Whitespace":s.M(a.b,"#111")
break}},
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.ja()
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
r.d=r.a.O("Num")
r=a3.k(0,l)
r.d=r.a.O("Num")
r=a3.k(0,k)
r.d=r.a.O("Symbol")
r=a3.k(0,h)
r.d=r.a.O("String")
r=a3.k(0,e)
r.d=r.a.O("String")
r=a3.k(0,a)
r.d=r.a.O(b)
r=a3.k(0,a2)
r.d=r.a.O(a2)
r=a3.k(0,o)
r=r.d=r.a.O(o)
s=t.i
r.aG(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aG(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aG(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e3.prototype={
bu:function(a){var s=this
switch(a.a){case"Builtin":s.M(a.b,"#411")
break
case"Comment":s.M(a.b,"#777")
break
case"Id":s.M(a.b,"#111")
break
case"Num":s.M(a.b,"#191")
break
case"Preprocess":s.M(a.b,"#737")
break
case"Reserved":s.M(a.b,"#119")
break
case"Symbol":s.M(a.b,"#611")
break
case"Type":s.M(a.b,"#171")
break
case"Whitespace":s.M(a.b,"#111")
break}},
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.ja()
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
s.d=s.a.O("Num")
s=c.k(0,l)
s.d=s.a.O("Num")
s=c.k(0,k)
s.d=s.a.O("Symbol")
s=c.k(0,g)
s.d=s.a.O(h)
s=c.k(0,e)
s.d=s.a.O(f)
s=c.k(0,d)
s.d=s.a.O(d)
s=c.k(0,o)
s=s.d=s.a.O(o)
r=t.i
s.aG(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aG(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aG(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e5.prototype={
bu:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.M(a.b,"#911")
s.M("=",r)
break
case"Id":s.M(a.b,r)
break
case"Other":s.M(a.b,r)
break
case"Reserved":s.M(a.b,"#119")
break
case"String":s.M(a.b,"#171")
break
case"Symbol":s.M(a.b,"#616")
break}},
bm:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.ja()
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
s.d=s.a.O("Symbol")
s=j.k(0,l)
s.d=s.a.O("String")
s=j.k(0,p)
r=s.a.O(p)
s.d=r
r.aG(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.O(o)
r=j.k(0,k)
r.d=r.a.O(k)
return j}}
V.eA.prototype={
dR:function(a,b){this.d=H.d([],t.u)
this.M(C.b.j(b,"\n"),"#111")},
bu:function(a){},
bm:function(){return null}}
V.iN.prototype={
d8:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mm().gct().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.d7(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.kQ(k.c).n(0,o)
m=W.nZ("radio")
m.checked=q
m.name=s
W.a1(m,"change",new V.iO(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.kQ(k.c).n(0,p.createElement("br"))},
b0:function(a,b,c){return this.d8(a,b,c,!1)},
d7:function(a){var s,r,q=P.mm(),p=t.X,o=P.o8(q.gct(),p,p)
o.l(0,this.a,a)
s=q.dX(0,o)
p=window.history
r=s.gc0()
p.toString
p.replaceState(new P.k_([],[]).by(""),"",r)}}
V.iO.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.d7(s.d)}}}
V.j_.prototype={
el:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a1(o,"scroll",new V.j1(m),!1)},
da:function(a){var s,r,q,p,o,n,m,l
this.fZ()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hM(a)
q.toString
p=new H.p(p)
p=new P.bF(q.cz(new H.bb(p,p.gm(p))).a())
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
if(H.nc(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.k7(C.x,q,C.e,!1)
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
e6:function(a){var s,r,q,p=new V.dU("dart")
p.bh("dart")
s=new V.e3("glsl")
s.bh("glsl")
r=new V.e5("html")
r.bh("html")
q=C.b.hE(H.d([p,s,r],t.b7),new V.j2(a))
if(q!=null)return q
p=new V.eA("plain")
p.bh("plain")
return p},
d9:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dA(q).a3(q,"+")){b2[r]=C.a.aa(q,1)
a8.push(1)
s=!0}else if(C.a.a3(q,"-")){b2[r]=C.a.aa(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.e6(b0)
p.dR(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.k7(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lI()
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
for(a4=C.b.gP(q);a4.u();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
h9:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
fZ:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.ja()
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
q.d=q.a.O(n)
q=s.k(0,l)
q.d=q.a.O(m)
q=s.k(0,"CodeEnd")
q.d=q.a.O(k)
q=s.k(0,h)
q.d=q.a.O("Link")
q=s.k(0,g)
q.d=q.a.O(g)
this.b=s}}
V.j1.prototype={
$1:function(a){P.mi(C.n,new V.j0(this.a))}}
V.j0.prototype={
$0:function(){var s=C.d.an(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j2.prototype={
$1:function(a){return a.a===this.a}}
U.kA.prototype={
$0:function(){this.a.sae(0,F.lw(1,null,null,1))}}
U.kB.prototype={
$0:function(){this.a.sae(0,F.n_(!0,40,1))}}
U.kC.prototype={
$0:function(){this.a.sae(0,F.n_(!1,40,0))}}
U.kD.prototype={
$0:function(){this.a.sae(0,F.nb(6,6))}}
U.kE.prototype={
$0:function(){this.a.sae(0,F.nd())}}
U.kF.prototype={
$0:function(){this.a.sae(0,F.qq())}}
U.kG.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.d9("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.d9("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.ec=s.i
s=J.ba.prototype
s.ee=s.i
s=P.h.prototype
s.ed=s.bz
s=W.E.prototype
s.bB=s.ah
s=W.df.prototype
s.ef=s.au
s=K.e4.prototype
s.eb=s.aE
s.cF=s.i
s=O.ek.prototype
s.cG=s.az
s=O.aP.prototype
s.cH=s.az})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pt","o3",21)
r(P,"q8","oF",8)
r(P,"q9","oG",8)
r(P,"qa","oH",8)
q(P,"mZ","q3",9)
r(W,"rE","hW",22)
p(W,"qj",4,null,["$4"],["oI"],14,0)
p(W,"qk",4,null,["$4"],["oJ"],14,0)
var j
o(j=E.bt.prototype,"gdN",0,0,null,["$1","$0"],["dO","hW"],0,0)
o(j,"gdP",0,0,null,["$1","$0"],["dQ","hX"],0,0)
o(j,"gdL",0,0,null,["$1","$0"],["dM","hV"],0,0)
o(j,"gdJ",0,0,null,["$1","$0"],["dK","hS"],0,0)
n(j,"ghQ","hR",4)
n(j,"ghT","hU",4)
o(j=E.f2.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],0,0)
m(j,"gib","dY",9)
l(j=X.fl.prototype,"gff","fg",5)
l(j,"gf3","f4",5)
l(j,"gf9","fa",2)
l(j,"gfj","fk",10)
l(j,"gfh","fi",10)
l(j,"gfn","fo",2)
l(j,"gfs","ft",2)
l(j,"gfd","fe",2)
l(j,"gfp","fq",2)
l(j,"gfb","fc",2)
l(j,"gfu","fv",19)
l(j,"gfw","fz",5)
l(j,"gfL","fM",6)
l(j,"gfH","fI",6)
l(j,"gfJ","fK",6)
o(j=D.cy.prototype,"gcX",0,0,null,["$1","$0"],["cY","fl"],0,0)
l(j,"gfB","fC",20)
n(j,"geY","eZ",11)
n(j,"gfF","fG",11)
o(D.bz.prototype,"geo",0,0,null,["$1","$0"],["ab","ep"],0,0)
k(V.ab.prototype,"gm","b6",7)
k(V.F.prototype,"gm","b6",7)
k(V.d3.prototype,"gm","b6",7)
o(j=U.bQ.prototype,"gaM",0,0,null,["$1","$0"],["F","a7"],0,0)
n(j,"geq","er",12)
n(j,"gfD","fE",12)
o(j=U.d_.prototype,"gaM",0,0,null,["$1","$0"],["F","a7"],0,0)
l(j,"gbM","bN",1)
l(j,"gbO","bP",1)
l(j,"gbQ","bR",1)
o(j=U.d0.prototype,"gaM",0,0,null,["$1","$0"],["F","a7"],0,0)
l(j,"gbM","bN",1)
l(j,"gbO","bP",1)
l(j,"gbQ","bR",1)
l(j,"geQ","eR",1)
l(j,"geS","eT",1)
l(j,"gh5","h6",1)
l(j,"gh3","h4",1)
l(j,"gh1","h2",1)
l(U.d1.prototype,"geV","eW",1)
o(j=M.dZ.prototype,"gas",0,0,null,["$1","$0"],["ax","es"],0,0)
n(j,"gf5","f6",4)
n(j,"gf7","f8",4)
o(j=O.ej.prototype,"gev",0,0,null,["$1","$0"],["af","ew"],0,0)
o(j,"gfS",0,0,null,["$1","$0"],["cZ","fT"],0,0)
n(j,"gf_","f0",13)
n(j,"gf1","f2",13)
o(X.ey.prototype,"gcL",0,0,null,["$1","$0"],["aK","ez"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.l1,J.a,J.a5,P.K,P.d8,P.h,H.bb,P.e7,H.cs,H.fi,H.ck,H.jd,H.iL,H.h6,H.br,P.W,H.ig,H.eg,H.ea,H.ar,H.fJ,P.dl,P.c8,P.bF,P.fr,P.cR,P.eU,P.cT,P.kb,P.de,P.jS,P.d7,P.i,P.hl,P.cF,P.dP,P.i9,P.k9,P.k8,P.ax,P.ah,P.R,P.bs,P.ex,P.cQ,P.fG,P.i5,P.az,P.n,P.I,P.ap,P.y,P.T,P.bG,P.jo,P.h0,W.hN,W.kX,W.ld,W.c7,W.M,W.cM,W.df,W.hb,W.ct,W.ak,W.jW,W.hm,P.jZ,P.fZ,P.be,K.b2,K.e4,K.im,K.iP,K.iV,L.eR,L.f3,L.f4,L.j9,O.ag,O.cH,E.hJ,E.bt,E.bN,E.bY,E.fD,E.iQ,E.f2,Z.fp,Z.jK,Z.dN,Z.bR,Z.bE,D.hK,D.bO,D.U,X.dO,X.ec,X.id,X.ik,X.ao,X.iH,X.jb,X.fl,D.dK,D.dW,D.V,D.bz,D.eO,V.a_,V.aK,V.hZ,V.iC,V.aQ,V.al,V.Q,V.bB,V.eH,V.ab,V.F,V.d3,U.d_,U.d0,U.d1,M.dZ,A.dH,A.hE,A.a6,A.dL,A.dX,A.eE,A.eP,A.iq,A.cV,A.cW,A.cY,A.cZ,A.f8,A.jl,F.e_,F.i2,F.ef,F.ie,F.eC,F.iW,F.iX,F.iY,F.iZ,F.fm,F.jz,F.jA,F.jD,F.jF,F.jG,F.jH,O.f_,O.ek,O.ir,X.kS,X.j5,X.ey,V.b4,V.iN,V.j_])
q(J.a,[J.e8,J.cx,J.ba,J.w,J.bv,J.aM,H.cI,H.X,W.e,W.hC,W.bo,W.aL,W.J,W.fw,W.an,W.hQ,W.hR,W.fy,W.co,W.fA,W.hS,W.j,W.fH,W.aA,W.i7,W.fL,W.cu,W.ij,W.iE,W.fP,W.fQ,W.aC,W.fR,W.fT,W.aD,W.fX,W.h_,W.aE,W.h1,W.aF,W.h7,W.at,W.hd,W.j8,W.aG,W.hf,W.jc,W.jt,W.hn,W.hp,W.hr,W.ht,W.hv,P.aN,P.fN,P.aS,P.fV,P.iM,P.h8,P.aU,P.hh,P.hF,P.ft,P.h4])
q(J.ba,[J.ez,J.bD,J.aB])
r(J.ib,J.w)
q(J.bv,[J.cw,J.e9])
q(P.K,[H.ed,H.et,H.eb,H.fh,H.eJ,H.fE,P.dG,P.eu,P.af,P.fj,P.fg,P.c1,P.dQ,P.dT])
r(P.cB,P.d8)
q(P.cB,[H.c3,W.fu,W.a0,P.e1])
r(H.p,H.c3)
q(P.h,[H.k,H.aO,H.aX,P.cv])
q(H.k,[H.cC,H.cz])
r(H.cp,H.aO)
q(P.e7,[H.eh,H.fq])
r(H.cG,H.cC)
r(H.cl,H.ck)
q(H.br,[H.eZ,H.ic,H.kt,H.ku,H.kv,P.jM,P.jL,P.jN,P.jO,P.k4,P.k3,P.kk,P.jU,P.jV,P.ih,P.il,P.jw,P.jx,P.hT,P.hU,P.js,P.jp,P.jq,P.jr,P.k6,P.k5,P.kf,P.ke,P.kg,P.kh,W.hV,W.iF,W.iG,W.iU,W.j4,W.jP,W.iJ,W.iI,W.jX,W.jY,W.k2,W.ka,P.k0,P.k1,P.kl,P.i3,P.i4,P.hG,E.iR,E.iS,E.iT,E.j7,D.i0,D.i1,F.kc,F.km,F.ko,F.kp,F.kq,F.kJ,F.kK,F.kL,F.kz,F.kn,F.jJ,F.jI,F.jB,F.jC,O.iu,O.iv,O.iw,O.ix,O.iy,O.iz,O.iA,O.iB,V.kI,V.iO,V.j1,V.j0,V.j2,U.kA,U.kB,U.kC,U.kD,U.kE,U.kF,U.kG])
q(H.eZ,[H.eS,H.bM])
r(P.cE,P.W)
q(P.cE,[H.C,W.fs])
r(H.bW,H.X)
q(H.bW,[H.da,H.dc])
r(H.db,H.da)
r(H.by,H.db)
r(H.dd,H.dc)
r(H.cJ,H.dd)
q(H.cJ,[H.eo,H.ep,H.eq,H.er,H.es,H.cK,H.bX])
r(H.dm,H.fE)
r(P.di,P.cv)
r(P.jT,P.kb)
r(P.d6,P.de)
r(P.dq,P.cF)
r(P.c4,P.dq)
q(P.dP,[P.hH,P.hX])
r(P.dS,P.eU)
q(P.dS,[P.hI,P.i8,P.jy,P.jv])
r(P.ju,P.hX)
q(P.R,[P.Z,P.l])
q(P.af,[P.c_,P.e6])
r(P.fx,P.bG)
q(W.e,[W.x,W.e0,W.bT,W.as,W.dg,W.au,W.aa,W.dj,W.fo,W.c5,P.dJ,P.b3])
q(W.x,[W.E,W.ay,W.c6])
q(W.E,[W.r,P.m])
q(W.r,[W.dE,W.dF,W.bL,W.bp,W.bq,W.b6,W.e2,W.bS,W.eK,W.bd,W.cS,W.eX,W.eY,W.c2])
r(W.hM,W.aL)
r(W.cm,W.fw)
q(W.an,[W.hO,W.hP])
r(W.fz,W.fy)
r(W.cn,W.fz)
r(W.fB,W.fA)
r(W.dY,W.fB)
r(W.ai,W.bo)
r(W.fI,W.fH)
r(W.bP,W.fI)
r(W.fM,W.fL)
r(W.bu,W.fM)
r(W.aW,W.j)
q(W.aW,[W.bw,W.aj,W.bC])
r(W.el,W.fP)
r(W.em,W.fQ)
r(W.fS,W.fR)
r(W.en,W.fS)
r(W.fU,W.fT)
r(W.cL,W.fU)
r(W.fY,W.fX)
r(W.eB,W.fY)
r(W.eI,W.h_)
r(W.dh,W.dg)
r(W.eM,W.dh)
r(W.h2,W.h1)
r(W.eN,W.h2)
r(W.eT,W.h7)
r(W.he,W.hd)
r(W.f0,W.he)
r(W.dk,W.dj)
r(W.f1,W.dk)
r(W.hg,W.hf)
r(W.f5,W.hg)
r(W.bf,W.aj)
r(W.ho,W.hn)
r(W.fv,W.ho)
r(W.d4,W.co)
r(W.hq,W.hp)
r(W.fK,W.hq)
r(W.hs,W.hr)
r(W.d9,W.hs)
r(W.hu,W.ht)
r(W.h3,W.hu)
r(W.hw,W.hv)
r(W.ha,W.hw)
r(W.fC,W.fs)
r(W.fF,P.cR)
r(W.hc,W.df)
r(P.k_,P.jZ)
r(P.a7,P.fZ)
r(P.fO,P.fN)
r(P.ee,P.fO)
r(P.fW,P.fV)
r(P.ev,P.fW)
r(P.c0,P.m)
r(P.h9,P.h8)
r(P.eV,P.h9)
r(P.hi,P.hh)
r(P.f6,P.hi)
r(P.dI,P.ft)
r(P.ew,P.b3)
r(P.h5,P.h4)
r(P.eQ,P.h5)
q(K.e4,[K.a9,L.f7])
q(E.hJ,[Z.dM,A.cP,T.j6])
q(D.U,[D.b8,D.b9,D.B,X.eD])
q(X.eD,[X.cD,X.bU,X.bV,X.cU])
q(O.ag,[D.cy,U.bQ])
q(D.hK,[U.hL,U.S])
q(U.S,[U.cj,U.cO])
r(A.ei,A.cP)
q(A.f8,[A.fa,A.ji,A.jj,A.jk,A.jg,A.f9,A.jh,A.fb,A.fc,A.jm,A.fd,A.cX,A.fe,A.ff])
r(F.j3,F.i2)
r(F.jf,F.ie)
r(F.jE,F.jF)
r(F.iK,F.jG)
r(O.ej,O.f_)
q(O.ek,[O.io,O.ip,O.aP])
q(O.aP,[O.is,O.it])
r(X.i6,X.j5)
q(V.b4,[V.dU,V.e3,V.e5,V.eA])
s(H.c3,H.fi)
s(H.da,P.i)
s(H.db,H.cs)
s(H.dc,P.i)
s(H.dd,H.cs)
s(P.d8,P.i)
s(P.dq,P.hl)
s(W.fw,W.hN)
s(W.fy,P.i)
s(W.fz,W.M)
s(W.fA,P.i)
s(W.fB,W.M)
s(W.fH,P.i)
s(W.fI,W.M)
s(W.fL,P.i)
s(W.fM,W.M)
s(W.fP,P.W)
s(W.fQ,P.W)
s(W.fR,P.i)
s(W.fS,W.M)
s(W.fT,P.i)
s(W.fU,W.M)
s(W.fX,P.i)
s(W.fY,W.M)
s(W.h_,P.W)
s(W.dg,P.i)
s(W.dh,W.M)
s(W.h1,P.i)
s(W.h2,W.M)
s(W.h7,P.W)
s(W.hd,P.i)
s(W.he,W.M)
s(W.dj,P.i)
s(W.dk,W.M)
s(W.hf,P.i)
s(W.hg,W.M)
s(W.hn,P.i)
s(W.ho,W.M)
s(W.hp,P.i)
s(W.hq,W.M)
s(W.hr,P.i)
s(W.hs,W.M)
s(W.ht,P.i)
s(W.hu,W.M)
s(W.hv,P.i)
s(W.hw,W.M)
s(P.fN,P.i)
s(P.fO,W.M)
s(P.fV,P.i)
s(P.fW,W.M)
s(P.h8,P.i)
s(P.h9,W.M)
s(P.hh,P.i)
s(P.hi,W.M)
s(P.ft,P.W)
s(P.h4,P.i)
s(P.h5,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Z:"double",R:"num",y:"String",ax:"bool",ap:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U*])","~(U*)","~(aj*)","ap(@,@)","~(l*,h<bt*>*)","~(j*)","~(bC*)","Z*()","~(~())","~()","~(bw*)","~(l*,h<V*>*)","~(l*,h<S*>*)","~(l*,h<aQ*>*)","ax(E,y,y,c7)","@(@)","ap(@)","ap(N?,N?)","be(@,@)","~(bf*)","ax*(h<V*>*)","l(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p1(v.typeUniverse,JSON.parse('{"aB":"ba","ez":"ba","bD":"ba","qz":"j","qJ":"j","qB":"b3","qA":"e","qQ":"e","qS":"e","qy":"m","qK":"m","qC":"r","qN":"r","qL":"x","qI":"x","rh":"aa","qG":"aW","qD":"ay","qT":"ay","qR":"aj","qM":"bu","qP":"by","qO":"X","e8":{"ax":[]},"ba":{"lV":[],"az":[]},"w":{"n":["1"],"k":["1"],"h":["1"]},"ib":{"w":["1"],"n":["1"],"k":["1"],"h":["1"]},"bv":{"Z":[],"R":[]},"cw":{"Z":[],"l":[],"R":[]},"e9":{"Z":[],"R":[]},"aM":{"y":[]},"ed":{"K":[]},"p":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cC":{"k":["1"],"h":["1"]},"aO":{"h":["2"],"h.E":"2"},"cp":{"aO":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cG":{"cC":["2"],"k":["2"],"h":["2"],"h.E":"2"},"aX":{"h":["1"],"h.E":"1"},"c3":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"ck":{"I":["1","2"]},"cl":{"I":["1","2"]},"et":{"K":[]},"eb":{"K":[]},"fh":{"K":[]},"br":{"az":[]},"eZ":{"az":[]},"eS":{"az":[]},"bM":{"az":[]},"eJ":{"K":[]},"C":{"W":["1","2"],"I":["1","2"]},"cz":{"k":["1"],"h":["1"],"h.E":"1"},"ea":{"mb":[]},"bW":{"z":["1"],"X":[]},"by":{"i":["Z"],"z":["Z"],"n":["Z"],"X":[],"k":["Z"],"h":["Z"],"i.E":"Z"},"cJ":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"]},"eo":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"ep":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"eq":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"er":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"es":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"cK":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"bX":{"i":["l"],"be":[],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"fE":{"K":[]},"dm":{"K":[]},"dl":{"cT":[]},"di":{"h":["1"],"h.E":"1"},"d6":{"de":["1"],"k":["1"],"h":["1"]},"cv":{"h":["1"]},"cB":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cE":{"W":["1","2"],"I":["1","2"]},"W":{"I":["1","2"]},"cF":{"I":["1","2"]},"c4":{"I":["1","2"]},"de":{"k":["1"],"h":["1"]},"Z":{"R":[]},"dG":{"K":[]},"eu":{"K":[]},"af":{"K":[]},"c_":{"K":[]},"e6":{"K":[]},"fj":{"K":[]},"fg":{"K":[]},"c1":{"K":[]},"dQ":{"K":[]},"ex":{"K":[]},"cQ":{"K":[]},"dT":{"K":[]},"l":{"R":[]},"n":{"k":["1"],"h":["1"]},"bG":{"fk":[]},"h0":{"fk":[]},"fx":{"fk":[]},"r":{"E":[],"x":[],"e":[]},"dE":{"E":[],"x":[],"e":[]},"dF":{"E":[],"x":[],"e":[]},"bL":{"E":[],"x":[],"e":[]},"bp":{"E":[],"x":[],"e":[]},"bq":{"E":[],"x":[],"e":[]},"ay":{"x":[],"e":[]},"b6":{"E":[],"x":[],"e":[]},"cn":{"i":["a7<R>"],"n":["a7<R>"],"z":["a7<R>"],"k":["a7<R>"],"h":["a7<R>"],"i.E":"a7<R>"},"co":{"a7":["R"]},"dY":{"i":["y"],"n":["y"],"z":["y"],"k":["y"],"h":["y"],"i.E":"y"},"fu":{"i":["E"],"n":["E"],"k":["E"],"h":["E"],"i.E":"E"},"E":{"x":[],"e":[]},"ai":{"bo":[]},"bP":{"i":["ai"],"n":["ai"],"z":["ai"],"k":["ai"],"h":["ai"],"i.E":"ai"},"e0":{"e":[]},"e2":{"E":[],"x":[],"e":[]},"bu":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"bS":{"E":[],"x":[],"e":[]},"bw":{"j":[]},"bT":{"e":[]},"el":{"W":["y","@"],"I":["y","@"]},"em":{"W":["y","@"],"I":["y","@"]},"en":{"i":["aC"],"n":["aC"],"z":["aC"],"k":["aC"],"h":["aC"],"i.E":"aC"},"aj":{"j":[]},"a0":{"i":["x"],"n":["x"],"k":["x"],"h":["x"],"i.E":"x"},"x":{"e":[]},"cL":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"eB":{"i":["aD"],"n":["aD"],"z":["aD"],"k":["aD"],"h":["aD"],"i.E":"aD"},"eI":{"W":["y","@"],"I":["y","@"]},"eK":{"E":[],"x":[],"e":[]},"as":{"e":[]},"eM":{"i":["as"],"n":["as"],"z":["as"],"e":[],"k":["as"],"h":["as"],"i.E":"as"},"eN":{"i":["aE"],"n":["aE"],"z":["aE"],"k":["aE"],"h":["aE"],"i.E":"aE"},"eT":{"W":["y","y"],"I":["y","y"]},"bd":{"E":[],"x":[],"e":[]},"cS":{"E":[],"x":[],"e":[]},"eX":{"E":[],"x":[],"e":[]},"eY":{"E":[],"x":[],"e":[]},"c2":{"E":[],"x":[],"e":[]},"au":{"e":[]},"aa":{"e":[]},"f0":{"i":["aa"],"n":["aa"],"z":["aa"],"k":["aa"],"h":["aa"],"i.E":"aa"},"f1":{"i":["au"],"n":["au"],"z":["au"],"e":[],"k":["au"],"h":["au"],"i.E":"au"},"bC":{"j":[]},"f5":{"i":["aG"],"n":["aG"],"z":["aG"],"k":["aG"],"h":["aG"],"i.E":"aG"},"aW":{"j":[]},"fo":{"e":[]},"bf":{"aj":[],"j":[]},"c5":{"e":[]},"c6":{"x":[],"e":[]},"fv":{"i":["J"],"n":["J"],"z":["J"],"k":["J"],"h":["J"],"i.E":"J"},"d4":{"a7":["R"]},"fK":{"i":["aA?"],"n":["aA?"],"z":["aA?"],"k":["aA?"],"h":["aA?"],"i.E":"aA?"},"d9":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"h3":{"i":["aF"],"n":["aF"],"z":["aF"],"k":["aF"],"h":["aF"],"i.E":"aF"},"ha":{"i":["at"],"n":["at"],"z":["at"],"k":["at"],"h":["at"],"i.E":"at"},"fs":{"W":["y","y"],"I":["y","y"]},"fC":{"W":["y","y"],"I":["y","y"]},"c7":{"ak":[]},"cM":{"ak":[]},"df":{"ak":[]},"hc":{"ak":[]},"hb":{"ak":[]},"e1":{"i":["E"],"n":["E"],"k":["E"],"h":["E"],"i.E":"E"},"a7":{"fZ":["1"]},"ee":{"i":["aN"],"n":["aN"],"k":["aN"],"h":["aN"],"i.E":"aN"},"ev":{"i":["aS"],"n":["aS"],"k":["aS"],"h":["aS"],"i.E":"aS"},"c0":{"m":[],"E":[],"x":[],"e":[]},"eV":{"i":["y"],"n":["y"],"k":["y"],"h":["y"],"i.E":"y"},"m":{"E":[],"x":[],"e":[]},"f6":{"i":["aU"],"n":["aU"],"k":["aU"],"h":["aU"],"i.E":"aU"},"be":{"n":["l"],"k":["l"],"h":["l"]},"dI":{"W":["y","@"],"I":["y","@"]},"dJ":{"e":[]},"b3":{"e":[]},"ew":{"e":[]},"eQ":{"i":["I<@,@>"],"n":["I<@,@>"],"k":["I<@,@>"],"h":["I<@,@>"],"i.E":"I<@,@>"},"ag":{"h":["1*"],"ag.T":"1"},"b8":{"U":[]},"b9":{"U":[]},"B":{"U":[]},"cD":{"U":[]},"bU":{"U":[]},"bV":{"U":[]},"eD":{"U":[]},"cU":{"U":[]},"dK":{"V":[]},"dW":{"V":[]},"cy":{"ag":["V*"],"h":["V*"],"ag.T":"V*"},"bz":{"V":[]},"eO":{"V":[]},"cj":{"S":[]},"bQ":{"ag":["S*"],"S":[],"h":["S*"],"ag.T":"S*"},"cO":{"S":[]},"d_":{"S":[]},"d0":{"S":[]},"d1":{"S":[]},"ei":{"cP":[]},"dU":{"b4":[]},"e3":{"b4":[]},"e5":{"b4":[]},"eA":{"b4":[]}}'))
H.p0(v.typeUniverse,JSON.parse('{"a5":1,"k":1,"bb":1,"eh":2,"fq":1,"cs":1,"fi":1,"c3":1,"ck":2,"eg":1,"bW":1,"bF":1,"cR":1,"eU":2,"d7":1,"cv":1,"cB":1,"cE":2,"hl":2,"cF":2,"d8":1,"dq":2,"dP":2,"dS":2,"e7":1,"fF":1,"M":1,"ct":1,"b8":1,"b9":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lx
return{D:s("bL"),d:s("bo"),Y:s("bp"),G:s("k<@>"),h:s("E"),C:s("K"),aD:s("j"),c8:s("ai"),bX:s("bP"),Z:s("az"),gb:s("cu"),gk:s("bS"),Q:s("w<ak>"),s:s("w<y>"),gn:s("w<@>"),t:s("w<l>"),x:s("w<dH*>"),bb:s("w<dK*>"),am:s("w<dL*>"),g0:s("w<dM*>"),b7:s("w<b4*>"),cP:s("w<dW*>"),M:s("w<dX*>"),k:s("w<b6*>"),b:s("w<e_*>"),aZ:s("w<bR*>"),L:s("w<ef*>"),u:s("w<n<b6*>*>"),B:s("w<im*>"),h8:s("w<aQ*>"),eb:s("w<bz*>"),cS:s("w<al*>"),d1:s("w<eE*>"),o:s("w<eC*>"),du:s("w<eO*>"),cz:s("w<eP*>"),eG:s("w<cR<N*>*>"),i:s("w<y*>"),fG:s("w<f_*>"),bw:s("w<j6*>"),br:s("w<f7*>"),fj:s("w<f8*>"),d6:s("w<cV*>"),dv:s("w<cW*>"),hg:s("w<cX*>"),by:s("w<cY*>"),fF:s("w<cZ*>"),j:s("w<fm*>"),m:s("w<Z*>"),V:s("w<l*>"),f:s("w<~(U*)*>"),T:s("cx"),eH:s("lV"),g:s("aB"),aU:s("z<@>"),h9:s("C<y*,cP*>"),cn:s("C<y*,eR*>"),dO:s("C<y*,y*>"),w:s("C<y*,f4*>"),en:s("C<l*,n<cV*>*>"),af:s("C<l*,n<cW*>*>"),gr:s("C<l*,n<cY*>*>"),bR:s("C<l*,n<cZ*>*>"),J:s("C<l*,fa*>"),E:s("C<l*,ax*>"),a:s("C<l*,l*>"),aH:s("n<@>"),eO:s("I<@,@>"),eM:s("cG<y*,y>"),bK:s("bT"),bZ:s("cI"),dD:s("X"),bm:s("bX"),P:s("ap"),K:s("N"),q:s("a7<R>"),fv:s("mb"),ew:s("c0"),N:s("y"),g7:s("m"),bY:s("bd"),aW:s("c2"),aF:s("cT"),gc:s("be"),ak:s("bD"),U:s("c4<y,y>"),R:s("fk"),gH:s("c6"),ac:s("a0"),cJ:s("ax"),gR:s("Z"),z:s("@"),S:s("l"),fr:s("bq*"),l:s("bt*"),gj:s("V*"),dn:s("cD*"),hc:s("aQ*"),c:s("bU*"),F:s("bV*"),ah:s("S*"),A:s("0&*"),_:s("N*"),X:s("y*"),eB:s("f3*"),eP:s("cU*"),n:s("f9*"),r:s("fb*"),y:s("fc*"),O:s("fd*"),I:s("cX*"),v:s("fe*"),p:s("ff*"),e:s("l*"),dm:s("~(U*)*"),bG:s("lU<ap>?"),W:s("N?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bp.prototype
C.m=W.bq.prototype
C.R=W.b6.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.c=J.cw.prototype
C.i=J.cx.prototype
C.d=J.bv.prototype
C.a=J.aM.prototype
C.V=J.aB.prototype
C.C=J.ez.prototype
C.D=W.cS.prototype
C.p=J.bD.prototype
C.E=W.bf.prototype
C.F=W.c5.prototype
C.G=new E.bN("Browser.chrome")
C.r=new E.bN("Browser.firefox")
C.t=new E.bN("Browser.edge")
C.H=new E.bN("Browser.other")
C.a4=new P.hI()
C.I=new P.hH()
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

C.P=new P.ex()
C.e=new P.ju()
C.Q=new P.jy()
C.f=new P.jT()
C.n=new P.bs(0)
C.S=new P.bs(5e6)
C.T=new P.i9("element",!1,!1,!1)
C.j=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.W=H.d(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.k=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.l=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.X=H.d(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.d(s([]),t.i)
C.Y=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.d(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.d(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.Z=new H.cl(0,{},C.w,H.lx("cl<y*,y*>"))
C.a_=new E.bY("OperatingSystem.windows")
C.B=new E.bY("OperatingSystem.mac")
C.a0=new E.bY("OperatingSystem.linux")
C.a1=new E.bY("OperatingSystem.other")
C.a2=new P.jv(!1)
C.a3=new P.c8(null,2)})();(function staticFields(){$.mB=null
$.aJ=0
$.lN=null
$.lM=null
$.n3=null
$.mY=null
$.n9=null
$.kr=null
$.kx=null
$.lz=null
$.cb=null
$.dw=null
$.dx=null
$.ls=!1
$.aH=C.f
$.ac=H.d([],H.lx("w<N>"))
$.b7=null
$.kV=null
$.lT=null
$.lS=null
$.d5=P.l4(t.N,t.Z)
$.hY=null
$.iD=null
$.m4=null
$.aT=null
$.md=null
$.mq=null
$.mv=null
$.ms=null
$.mt=null
$.mu=null
$.mr=null
$.mw=null
$.m3=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qH","nh",function(){return H.qi("_$dart_dartClosure")})
s($,"qU","ni",function(){return H.aV(H.je({
toString:function(){return"$receiver$"}}))})
s($,"qV","nj",function(){return H.aV(H.je({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qW","nk",function(){return H.aV(H.je(null))})
s($,"qX","nl",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r_","no",function(){return H.aV(H.je(void 0))})
s($,"r0","np",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qZ","nn",function(){return H.aV(H.mk(null))})
s($,"qY","nm",function(){return H.aV(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"r2","nr",function(){return H.aV(H.mk(void 0))})
s($,"r1","nq",function(){return H.aV(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"ri","lE",function(){return P.oE()})
s($,"r3","ns",function(){return new P.jw().$0()})
s($,"r4","nt",function(){return new P.jx().$0()})
s($,"rj","nx",function(){return new Int8Array(H.dt(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rm","nz",function(){return P.op("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rC","nA",function(){return P.pm()})
s($,"rk","ny",function(){return P.lX(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rb","nw",function(){return Z.av(0)})
s($,"r5","nu",function(){return Z.av(511)})
s($,"rd","bn",function(){return Z.av(1)})
s($,"rc","bm",function(){return Z.av(2)})
s($,"r7","bl",function(){return Z.av(4)})
s($,"re","bJ",function(){return Z.av(8)})
s($,"rf","bK",function(){return Z.av(16)})
s($,"r8","dB",function(){return Z.av(32)})
s($,"r9","dC",function(){return Z.av(64)})
s($,"ra","nv",function(){return Z.av(96)})
s($,"rg","cg",function(){return Z.av(128)})
s($,"r6","bk",function(){return Z.av(256)})
s($,"qF","ng",function(){return new V.hZ()})
s($,"qE","D",function(){return $.ng()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cI,DataView:H.X,ArrayBufferView:H.X,Float32Array:H.by,Float64Array:H.by,Int16Array:H.eo,Int32Array:H.ep,Int8Array:H.eq,Uint16Array:H.er,Uint32Array:H.es,Uint8ClampedArray:H.cK,CanvasPixelArray:H.cK,Uint8Array:H.bX,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hC,HTMLAnchorElement:W.dE,HTMLAreaElement:W.dF,HTMLBaseElement:W.bL,Blob:W.bo,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bq,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.hM,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cm,MSStyleCSSProperties:W.cm,CSS2Properties:W.cm,CSSImageValue:W.an,CSSKeywordValue:W.an,CSSNumericValue:W.an,CSSPositionValue:W.an,CSSResourceValue:W.an,CSSUnitValue:W.an,CSSURLImageValue:W.an,CSSStyleValue:W.an,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.hO,CSSUnparsedValue:W.hP,DataTransferItemList:W.hQ,HTMLDivElement:W.b6,DOMException:W.hR,ClientRectList:W.cn,DOMRectList:W.cn,DOMRectReadOnly:W.co,DOMStringList:W.dY,DOMTokenList:W.hS,Element:W.E,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.bP,FileWriter:W.e0,HTMLFormElement:W.e2,Gamepad:W.aA,History:W.i7,HTMLCollection:W.bu,HTMLFormControlsCollection:W.bu,HTMLOptionsCollection:W.bu,ImageData:W.cu,HTMLInputElement:W.bS,KeyboardEvent:W.bw,Location:W.ij,MediaList:W.iE,MessagePort:W.bT,MIDIInputMap:W.el,MIDIOutputMap:W.em,MimeType:W.aC,MimeTypeArray:W.en,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.cL,RadioNodeList:W.cL,Plugin:W.aD,PluginArray:W.eB,RTCStatsReport:W.eI,HTMLSelectElement:W.eK,SourceBuffer:W.as,SourceBufferList:W.eM,SpeechGrammar:W.aE,SpeechGrammarList:W.eN,SpeechRecognitionResult:W.aF,Storage:W.eT,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.cS,HTMLTableRowElement:W.eX,HTMLTableSectionElement:W.eY,HTMLTemplateElement:W.c2,TextTrack:W.au,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.f0,TextTrackList:W.f1,TimeRanges:W.j8,Touch:W.aG,TouchEvent:W.bC,TouchList:W.f5,TrackDefaultList:W.jc,CompositionEvent:W.aW,FocusEvent:W.aW,TextEvent:W.aW,UIEvent:W.aW,URL:W.jt,VideoTrackList:W.fo,WheelEvent:W.bf,Window:W.c5,DOMWindow:W.c5,Attr:W.c6,CSSRuleList:W.fv,ClientRect:W.d4,DOMRect:W.d4,GamepadList:W.fK,NamedNodeMap:W.d9,MozNamedAttrMap:W.d9,SpeechRecognitionResultList:W.h3,StyleSheetList:W.ha,SVGLength:P.aN,SVGLengthList:P.ee,SVGNumber:P.aS,SVGNumberList:P.ev,SVGPointList:P.iM,SVGScriptElement:P.c0,SVGStringList:P.eV,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aU,SVGTransformList:P.f6,AudioBuffer:P.hF,AudioParamMap:P.dI,AudioTrackList:P.dJ,AudioContext:P.b3,webkitAudioContext:P.b3,BaseAudioContext:P.b3,OfflineAudioContext:P.ew,SQLResultSetRowList:P.eQ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.n7,[])
else U.n7([])})})()
//# sourceMappingURL=test.dart.js.map
