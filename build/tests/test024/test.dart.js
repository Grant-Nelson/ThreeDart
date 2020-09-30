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
a[c]=function(){a[c]=function(){H.qt(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lp"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lp(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kY:function kY(){},
l_:function(a){return new H.e8(a)},
kq:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
o6:function(a,b,c,d){if(t.F.b(a))return new H.co(a,b,c.I("@<0>").aW(d).I("co<1,2>"))
return new H.aO(a,b,c.I("@<0>").aW(d).I("aO<1,2>"))},
i7:function(){return new P.c_("No element")},
nX:function(){return new P.c_("Too many elements")},
or:function(a,b){var s=J.aI(a)
if(typeof s!=="number")return s.W()
H.eJ(a,0,s-1,b)},
eJ:function(a,b,c,d){if(c-b<=32)H.oq(a,b,c,d)
else H.op(a,b,c,d)},
oq:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aW(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a0()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
op:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a1(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a1(a6+a7,2),d=e-h,c=e+h,b=J.aW(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
if(J.G(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ab()
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
if(typeof j!=="number")return j.ab()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a0()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a0()
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
H.eJ(a5,a6,r-2,a8)
H.eJ(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.G(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.G(a8.$2(b.h(a5,q),a2),0);)--q
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
break}}H.eJ(a5,r,q,a8)}else H.eJ(a5,r,q,a8)},
e8:function e8(a){this.a=a},
p:function p(a){this.a=a},
k:function k(){},
cB:function cB(){},
b8:function b8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
ec:function ec(a,b){this.a=null
this.b=a
this.c=b},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
fn:function fn(a,b){this.a=a
this.b=b},
cr:function cr(){},
ff:function ff(){},
c1:function c1(){},
nP:function(){throw H.c(P.A("Cannot modify unmodifiable Map"))},
nb:function(a){var s,r=H.na(a)
if(r!=null)return r
s="minified:"+a
return s},
n3:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a3(a)
if(typeof s!="string")throw H.c(H.aH(a))
return s},
cM:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m4:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a2(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
eD:function(a){return H.o9(a)},
o9:function(a){var s,r,q
if(a instanceof P.M)return H.al(H.bF(a),null)
if(J.du(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.m3(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.m3(q))return q}}return H.al(H.bF(a),null)},
m3:function(a){var s=a!=="Object"&&a!==""
return s},
oa:function(){if(!!self.location)return self.location.href
return null},
m2:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oi:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.c9(q))throw H.c(H.aH(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aL(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aH(q))}return H.m2(p)},
m5:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.c9(q))throw H.c(H.aH(q))
if(q<0)throw H.c(H.aH(q))
if(q>65535)return H.oi(a)}return H.m2(a)},
oj:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.ia()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ap:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aL(s,10))>>>0,56320|s&1023)}}throw H.c(P.a2(a,0,1114111,null,null))},
bX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oh:function(a){var s=H.bX(a).getFullYear()+0
return s},
of:function(a){var s=H.bX(a).getMonth()+1
return s},
ob:function(a){var s=H.bX(a).getDate()+0
return s},
oc:function(a){var s=H.bX(a).getHours()+0
return s},
oe:function(a){var s=H.bX(a).getMinutes()+0
return s},
og:function(a){var s=H.bX(a).getSeconds()+0
return s},
od:function(a){var s=H.bX(a).getMilliseconds()+0
return s},
y:function(a){throw H.c(H.aH(a))},
b:function(a,b){if(a==null)J.aI(a)
throw H.c(H.cd(a,b))},
cd:function(a,b){var s,r,q="index"
if(!H.c9(b))return new P.ae(!0,b,q,null)
s=J.aI(a)
if(!(b<0)){if(typeof s!=="number")return H.y(s)
r=b>=s}else r=!0
if(r)return P.N(b,a,q,null,s)
return P.eE(b,q)},
qa:function(a,b,c){if(a>c)return P.a2(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a2(b,a,c,"end",null)
return new P.ae(!0,b,"end",null)},
aH:function(a){return new P.ae(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.er()
s=new Error()
s.dartException=a
r=H.qu
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qu:function(){return J.a3(this.dartException)},
q:function(a){throw H.c(a)},
o:function(a){throw H.c(P.b2(a))},
aS:function(a){var s,r,q,p,o,n
a=H.n7(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.j8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
j9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mh:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lZ:function(a,b){return new H.eq(a,b==null?null:b.method)},
kZ:function(a,b){var s=b==null,r=s?null:b.method
return new H.e6(a,r,s?null:b.receiver)},
ac:function(a){if(a==null)return new H.iG(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bG(a,a.dartException)
return H.q3(a)},
bG:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aL(r,16)&8191)===10)switch(q){case 438:return H.bG(a,H.kZ(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bG(a,H.lZ(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.ne()
o=$.nf()
n=$.ng()
m=$.nh()
l=$.nk()
k=$.nl()
j=$.nj()
$.ni()
i=$.nn()
h=$.nm()
g=p.ag(s)
if(g!=null)return H.bG(a,H.kZ(s,g))
else{g=o.ag(s)
if(g!=null){g.method="call"
return H.bG(a,H.kZ(s,g))}else{g=n.ag(s)
if(g==null){g=m.ag(s)
if(g==null){g=l.ag(s)
if(g==null){g=k.ag(s)
if(g==null){g=j.ag(s)
if(g==null){g=m.ag(s)
if(g==null){g=i.ag(s)
if(g==null){g=h.ag(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bG(a,H.lZ(s,g))}}return H.bG(a,new H.fe(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cO()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bG(a,new P.ae(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cO()
return a},
lt:function(a){var s
if(a==null)return new H.h3(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.h3(a)},
qc:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qk:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
cc:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qk)
a.$identity=s
return s},
nO:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eP().constructor.prototype):Object.create(new H.bK(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aJ
if(typeof r!=="number")return r.v()
$.aJ=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lL(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nK(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lL(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nK:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n1,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nI:H.nH
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nL:function(a,b,c,d){var s=H.lJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lL:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nN(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nL(r,!p,s,b)
if(r===0){p=$.aJ
if(typeof p!=="number")return p.v()
$.aJ=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kO())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aJ
if(typeof p!=="number")return p.v()
$.aJ=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kO())+"."+H.f(s)+"("+m+");}")()},
nM:function(a,b,c,d){var s=H.lJ,r=H.nJ
switch(b?-1:a){case 0:throw H.c(new H.eH("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nN:function(a,b){var s,r,q,p,o,n,m=H.kO(),l=$.lH
if(l==null)l=$.lH=H.lG("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nM(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aJ
if(typeof o!=="number")return o.v()
$.aJ=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aJ
if(typeof o!=="number")return o.v()
$.aJ=o+1
return new Function(p+o+"}")()},
lp:function(a,b,c,d,e,f,g){return H.nO(a,b,c,d,!!e,!!f,g)},
nH:function(a,b){return H.hh(v.typeUniverse,H.bF(a.a),b)},
nI:function(a,b){return H.hh(v.typeUniverse,H.bF(a.c),b)},
lJ:function(a){return a.a},
nJ:function(a){return a.c},
kO:function(){var s=$.lI
return s==null?$.lI=H.lG("self"):s},
lG:function(a){var s,r,q,p=new H.bK("self","target","receiver","name"),o=J.kX(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.ch("Field name "+a+" not found."))},
qt:function(a){throw H.c(new P.dO(a))},
qe:function(a){return v.getIsolateTag(a)},
rB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qn:function(a){var s,r,q,p,o,n=$.n0.$1(a),m=$.kp[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kv[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mW.$2(a,n)
if(q!=null){m=$.kp[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kv[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kF(s)
$.kp[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kv[n]=s
return s}if(p==="-"){o=H.kF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n5(a,s)
if(p==="*")throw H.c(P.ji(n))
if(v.leafTags[n]===true){o=H.kF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n5(a,s)},
n5:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lv(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kF:function(a){return J.lv(a,!1,null,!!a.$iz)},
qo:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kF(s)
else return J.lv(s,c,null,null)},
qi:function(){if(!0===$.lu)return
$.lu=!0
H.qj()},
qj:function(){var s,r,q,p,o,n,m,l
$.kp=Object.create(null)
$.kv=Object.create(null)
H.qh()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n6.$1(o)
if(n!=null){m=H.qo(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qh:function(){var s,r,q,p,o,n,m=C.J()
m=H.cb(C.K,H.cb(C.L,H.cb(C.v,H.cb(C.v,H.cb(C.M,H.cb(C.N,H.cb(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n0=new H.kr(p)
$.mW=new H.ks(o)
$.n6=new H.kt(n)},
cb:function(a,b){return a(b)||b},
o0:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a1("Illegal RegExp pattern ("+String(n)+")",a,null))},
n8:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qb:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n7:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lx:function(a,b,c){var s=H.qs(a,b,c)
return s},
qs:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n7(b),'g'),H.qb(c))},
cj:function cj(){},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j8:function j8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eq:function eq(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a){this.a=a},
iG:function iG(a){this.a=a},
h3:function h3(a){this.a=a
this.b=null},
bq:function bq(){},
eW:function eW(){},
eP:function eP(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a){this.a=a},
B:function B(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i9:function i9(a){this.a=a},
ic:function ic(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cy:function cy(a,b){this.a=a
this.$ti=b},
eb:function eb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
e5:function e5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c8:function(a){return a},
aV:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cd(b,a))},
ph:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qa(a,b,c))
return b},
cH:function cH(){},
W:function W(){},
bU:function bU(){},
bw:function bw(){},
cI:function cI(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
cJ:function cJ(){},
bV:function bV(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
on:function(a,b){var s=b.c
return s==null?b.c=H.ld(a,b.z,!0):s},
mb:function(a,b){var s=b.c
return s==null?b.c=H.dj(a,"lQ",[b.z]):s},
mc:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mc(a.z)
return s===11||s===12},
om:function(a){return a.cy},
ls:function(a){return H.le(v.typeUniverse,a,!1)},
bh:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bh(a,s,a0,a1)
if(r===s)return b
return H.mH(a,r,!0)
case 7:s=b.z
r=H.bh(a,s,a0,a1)
if(r===s)return b
return H.ld(a,r,!0)
case 8:s=b.z
r=H.bh(a,s,a0,a1)
if(r===s)return b
return H.mG(a,r,!0)
case 9:q=b.Q
p=H.dt(a,q,a0,a1)
if(p===q)return b
return H.dj(a,b.z,p)
case 10:o=b.z
n=H.bh(a,o,a0,a1)
m=b.Q
l=H.dt(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lb(a,n,l)
case 11:k=b.z
j=H.bh(a,k,a0,a1)
i=b.Q
h=H.q0(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mF(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dt(a,g,a0,a1)
o=b.z
n=H.bh(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lc(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hA("Attempted to substitute unexpected RTI kind "+c))}},
dt:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bh(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q1:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bh(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q0:function(a,b,c,d){var s,r=b.a,q=H.dt(a,r,c,d),p=b.b,o=H.dt(a,p,c,d),n=b.c,m=H.q1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fG()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
q7:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n1(s)
return a.$S()}return null},
n2:function(a,b){var s
if(H.mc(b))if(a instanceof H.bq){s=H.q7(a)
if(s!=null)return s}return H.bF(a)},
bF:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.ll(a)}if(Array.isArray(a))return H.lj(a)
return H.ll(J.du(a))},
lj:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dq:function(a){var s=a.$ti
return s!=null?s:H.ll(a)},
ll:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.po(a,s)},
po:function(a,b){var s=a instanceof H.bq?a.__proto__.__proto__.constructor:b,r=H.p_(v.typeUniverse,s.name)
b.$ccache=r
return r},
n1:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.le(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pn:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dp(q,a,H.ps)
if(!H.aY(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dp(q,a,H.pv)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.c9
else if(s===t.gR||s===t.H)r=H.pr
else if(s===t.N)r=H.pt
else r=s===t.cJ?H.lm:null
if(r!=null)return H.dp(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.ql)){q.r="$i"+p
return H.dp(q,a,H.pu)}}else if(p===7)return H.dp(q,a,H.pl)
return H.dp(q,a,H.pj)},
dp:function(a,b,c){a.b=c
return a.b(b)},
pm:function(a){var s,r,q=this
if(!H.aY(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pg
else if(q===t.K)r=H.pf
else r=H.pk
q.a=r
return q.a(a)},
pU:function(a){var s,r=a.y
if(!H.aY(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pj:function(a){var s=this
if(a==null)return H.pU(s)
return H.X(v.typeUniverse,H.n2(a,s),null,s,null)},
pl:function(a){if(a==null)return!0
return this.z.b(a)},
pu:function(a){var s=this,r=s.r
if(a instanceof P.M)return!!a[r]
return!!J.du(a)[r]},
rz:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mQ(a,s)},
pk:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mQ(a,s)},
mQ:function(a,b){throw H.c(H.oQ(H.mx(a,H.n2(a,b),H.al(b,null))))},
mx:function(a,b,c){var s=P.hX(a),r=H.al(b==null?H.bF(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oQ:function(a){return new H.di("TypeError: "+a)},
a8:function(a,b){return new H.di("TypeError: "+H.mx(a,null,b))},
ps:function(a){return a!=null},
pf:function(a){return a},
pv:function(a){return!0},
pg:function(a){return a},
lm:function(a){return!0===a||!1===a},
rl:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a8(a,"bool"))},
rn:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool"))},
rm:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool?"))},
ro:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"double"))},
rq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double"))},
rp:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double?"))},
c9:function(a){return typeof a=="number"&&Math.floor(a)===a},
rr:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a8(a,"int"))},
rt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int"))},
rs:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int?"))},
pr:function(a){return typeof a=="number"},
ru:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"num"))},
rw:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num"))},
rv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num?"))},
pt:function(a){return typeof a=="string"},
rx:function(a){if(typeof a=="string")return a
throw H.c(H.a8(a,"String"))},
lk:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String"))},
ry:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String?"))},
pX:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.v(r,H.al(a[q],b))
return s},
mR:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.v(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.v(" extends ",H.al(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.al(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.v(a3,H.al(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.v(a3,H.al(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lA(H.al(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
al:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.al(a.z,b)
return s}if(l===7){r=a.z
s=H.al(r,b)
q=r.y
return J.lA(q===11||q===12?C.a.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.al(a.z,b))+">"
if(l===9){p=H.q2(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pX(o,b)+">"):p}if(l===11)return H.mR(a,b,null)
if(l===12)return H.mR(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
q2:function(a){var s,r=H.na(a)
if(r!=null)return r
s="minified:"+a
return s},
mI:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p_:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.le(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dk(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dj(a,b,q)
n[b]=o
return o}else return m},
oY:function(a,b){return H.mP(a.tR,b)},
oX:function(a,b){return H.mP(a.eT,b)},
le:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mD(H.mB(a,null,b,c))
r.set(b,s)
return s},
hh:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mD(H.mB(a,b,c,!0))
q.set(c,r)
return r},
oZ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lb(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bg:function(a,b){b.a=H.pm
b.b=H.pn
return b},
dk:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aq(null,null)
s.y=b
s.cy=c
r=H.bg(a,s)
a.eC.set(c,r)
return r},
mH:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oV(a,b,r,c)
a.eC.set(r,s)
return s},
oV:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aY(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aq(null,null)
q.y=6
q.z=b
q.cy=c
return H.bg(a,q)},
ld:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oU(a,b,r,c)
a.eC.set(r,s)
return s},
oU:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aY(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kw(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kw(q.z))return q
else return H.on(a,b)}}p=new H.aq(null,null)
p.y=7
p.z=b
p.cy=c
return H.bg(a,p)},
mG:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oS(a,b,r,c)
a.eC.set(r,s)
return s},
oS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aY(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dj(a,"lQ",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aq(null,null)
q.y=8
q.z=b
q.cy=c
return H.bg(a,q)},
oW:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bg(a,s)
a.eC.set(q,r)
return r},
hg:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oR:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dj:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hg(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aq(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bg(a,r)
a.eC.set(p,q)
return q},
lb:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hg(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bg(a,o)
a.eC.set(q,n)
return n},
mF:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hg(m)
if(j>0){s=l>0?",":""
r=H.hg(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oR(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bg(a,o)
a.eC.set(q,r)
return r},
lc:function(a,b,c,d){var s,r=b.cy+("<"+H.hg(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oT(a,b,c,r,d)
a.eC.set(r,s)
return s},
oT:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bh(a,b,r,0)
m=H.dt(a,c,r,0)
return H.lc(a,n,m,c!==m)}}l=new H.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bg(a,l)},
mB:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oK(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mC(a,r,g,f,!1)
else if(q===46)r=H.mC(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bf(a.u,a.e,f.pop()))
break
case 94:f.push(H.oW(a.u,f.pop()))
break
case 35:f.push(H.dk(a.u,5,"#"))
break
case 64:f.push(H.dk(a.u,2,"@"))
break
case 126:f.push(H.dk(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.la(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dj(p,n,o))
else{m=H.bf(p,a.e,n)
switch(m.y){case 11:f.push(H.lc(p,m,o,a.n))
break
default:f.push(H.lb(p,m,o))
break}}break
case 38:H.oL(a,f)
break
case 42:l=a.u
f.push(H.mH(l,H.bf(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ld(l,H.bf(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mG(l,H.bf(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fG()
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
H.la(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mF(p,H.bf(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.la(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oN(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bf(a.u,a.e,h)},
oK:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mC:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mI(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.om(o)+'"')
d.push(H.hh(s,o,n))}else d.push(p)
return m},
oL:function(a,b){var s=b.pop()
if(0===s){b.push(H.dk(a.u,1,"0&"))
return}if(1===s){b.push(H.dk(a.u,4,"1&"))
return}throw H.c(P.hA("Unexpected extended operation "+H.f(s)))},
bf:function(a,b,c){if(typeof c=="string")return H.dj(a,c,a.sEA)
else if(typeof c=="number")return H.oM(a,b,c)
else return c},
la:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bf(a,b,c[s])},
oN:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bf(a,b,c[s])},
oM:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hA("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hA("Bad index "+c+" for "+b.i(0)))},
X:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aY(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aY(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.X(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.X(a,b.z,c,d,e)
if(p===6){s=d.z
return H.X(a,b,c,s,e)}if(r===8){if(!H.X(a,b.z,c,d,e))return!1
return H.X(a,H.mb(a,b),c,d,e)}if(r===7){s=H.X(a,b.z,c,d,e)
return s}if(p===8){if(H.X(a,b,c,d.z,e))return!0
return H.X(a,b,c,H.mb(a,d),e)}if(p===7){s=H.X(a,b,c,d.z,e)
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
if(!H.X(a,k,c,j,e)||!H.X(a,j,e,k,c))return!1}return H.mS(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mS(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pq(a,b,c,d,e)}return!1},
mS:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.X(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.X(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.X(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.X(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.X(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pq:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.X(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mI(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.X(a,H.hh(a,b,l[p]),c,r[p],e))return!1
return!0},
kw:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aY(a))if(r!==7)if(!(r===6&&H.kw(a.z)))s=r===8&&H.kw(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ql:function(a){var s
if(!H.aY(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aY:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mP:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fG:function fG(){this.c=this.b=this.a=null},
fB:function fB(){},
di:function di(a){this.a=a},
na:function(a){return v.mangledGlobalNames[a]},
qp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hv:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lu==null){H.qi()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.ji("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lS()]
if(p!=null)return p
p=H.qn(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.lS(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lS:function(){var s=$.mz
return s==null?$.mz=v.getIsolateTag("_$dart_js"):s},
nY:function(a,b){if(!H.c9(a))throw H.c(P.lE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a2(a,0,4294967295,"length",null))
return J.nZ(new Array(a),b)},
kW:function(a,b){if(!H.c9(a)||a<0)throw H.c(P.ch("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.I("v<0>"))},
nZ:function(a,b){return J.kX(H.d(a,b.I("v<0>")))},
kX:function(a){a.fixed$length=Array
return a},
o_:function(a,b){return J.dy(a,b)},
du:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cv.prototype
return J.e4.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.cw.prototype
if(typeof a=="boolean")return J.e3.prototype
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hv(a)},
qd:function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hv(a)},
aW:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hv(a)},
hu:function(a){if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hv(a)},
n_:function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bB.prototype
return a},
dv:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bB.prototype
return a},
aX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hv(a)},
lA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qd(a).v(a,b)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.du(a).p(a,b)},
lB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n_(a).w(a,b)},
cg:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aW(a).h(a,b)},
kK:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n3(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hu(a).l(a,b,c)},
nx:function(a,b){return J.dv(a).C(a,b)},
ny:function(a,b,c){return J.aX(a).fF(a,b,c)},
nz:function(a,b,c,d){return J.aX(a).h_(a,b,c,d)},
nA:function(a,b){return J.dv(a).T(a,b)},
dy:function(a,b){return J.n_(a).aN(a,b)},
kL:function(a,b){return J.aW(a).E(a,b)},
hy:function(a,b){return J.hu(a).H(a,b)},
nB:function(a,b,c,d){return J.aX(a).hs(a,b,c,d)},
kM:function(a,b){return J.hu(a).F(a,b)},
nC:function(a){return J.aX(a).gh9(a)},
kN:function(a){return J.aX(a).gd3(a)},
ad:function(a){return J.du(a).gP(a)},
aZ:function(a){return J.hu(a).gO(a)},
aI:function(a){return J.aW(a).gm(a)},
lC:function(a){return J.hu(a).hW(a)},
nD:function(a,b){return J.aX(a).i_(a,b)},
nE:function(a,b,c){return J.dv(a).q(a,b,c)},
nF:function(a){return J.dv(a).i6(a)},
a3:function(a){return J.du(a).i(a)},
a:function a(){},
e3:function e3(){},
cw:function cw(){},
b7:function b7(){},
ew:function ew(){},
bB:function bB(){},
aA:function aA(){},
v:function v(a){this.$ti=a},
i8:function i8(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bu:function bu(){},
cv:function cv(){},
e4:function e4(){},
aM:function aM(){}},P={
oA:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q4()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cc(new P.jK(q),1)).observe(s,{childList:true})
return new P.jJ(q,s,r)}else if(self.setImmediate!=null)return P.q5()
return P.q6()},
oB:function(a){self.scheduleImmediate(H.cc(new P.jL(a),0))},
oC:function(a){self.setImmediate(H.cc(new P.jM(a),0))},
oD:function(a){P.l5(C.n,a)},
l5:function(a,b){var s=C.c.a1(a.a,1000)
return P.oO(s<0?0:s,b)},
mg:function(a,b){var s=C.c.a1(a.a,1000)
return P.oP(s<0?0:s,b)},
oO:function(a,b){var s=new P.dh()
s.ef(a,b)
return s},
oP:function(a,b){var s=new P.dh()
s.eg(a,b)
return s},
rj:function(a){return new P.c6(a,1)},
oG:function(){return C.a3},
oH:function(a){return new P.c6(a,3)},
px:function(a,b){return new P.de(a,b.I("de<0>"))},
pT:function(){var s,r
for(s=$.ca;s!=null;s=$.ca){$.ds=null
r=s.b
$.ca=r
if(r==null)$.dr=null
s.a.$0()}},
q_:function(){$.ln=!0
try{P.pT()}finally{$.ds=null
$.ln=!1
if($.ca!=null)$.lz().$1(P.mX())}},
pY:function(a){var s=new P.fo(a),r=$.dr
if(r==null){$.ca=$.dr=s
if(!$.ln)$.lz().$1(P.mX())}else $.dr=r.b=s},
pZ:function(a){var s,r,q,p=$.ca
if(p==null){P.pY(a)
$.ds=$.dr
return}s=new P.fo(a)
r=$.ds
if(r==null){s.b=p
$.ca=$.ds=s}else{q=r.b
s.b=q
$.ds=r.b=s
if(q==null)$.dr=s}},
mf:function(a,b){var s=$.aG
if(s===C.f)return P.l5(a,b)
return P.l5(a,s.ha(b))},
ou:function(a,b){var s=$.aG
if(s===C.f)return P.mg(a,b)
return P.mg(a,s.d1(b,t.aF))},
mT:function(a,b,c,d,e){P.pZ(new P.ki(d,e))},
pV:function(a,b,c,d){var s,r=$.aG
if(r===c)return d.$0()
$.aG=c
s=r
try{r=d.$0()
return r}finally{$.aG=s}},
pW:function(a,b,c,d,e){var s,r=$.aG
if(r===c)return d.$1(e)
$.aG=c
s=r
try{r=d.$1(e)
return r}finally{$.aG=s}},
jK:function jK(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
dh:function dh(){this.c=0},
k2:function k2(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b){this.a=a
this.b=b},
bD:function bD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
de:function de(a,b){this.a=a
this.$ti=b},
fo:function fo(a){this.a=a
this.b=null},
cP:function cP(){},
eR:function eR(){},
cR:function cR(){},
k9:function k9(){},
ki:function ki(a,b){this.a=a
this.b=b},
jR:function jR(){},
jS:function jS(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
o2:function(a,b){return new H.B(a.I("@<0>").aW(b).I("B<1,2>"))},
o3:function(a,b,c){return H.qc(a,new H.B(b.I("@<0>").aW(c).I("B<1,2>")))},
l0:function(a,b){return new H.B(a.I("@<0>").aW(b).I("B<1,2>"))},
cz:function(a){return new P.d2(a.I("d2<0>"))},
l9:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oJ:function(a,b){var s=new P.d3(a,b)
s.c=a.e
return s},
nW:function(a,b,c){var s,r
if(P.lo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ab.push(a)
try{P.pw(a,s)}finally{if(0>=$.ab.length)return H.b($.ab,-1)
$.ab.pop()}r=P.md(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kV:function(a,b,c){var s,r
if(P.lo(a))return b+"..."+c
s=new P.S(b)
$.ab.push(a)
try{r=s
r.a=P.md(r.a,a,", ")}finally{if(0>=$.ab.length)return H.b($.ab,-1)
$.ab.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lo:function(a){var s,r
for(s=$.ab.length,r=0;r<s;++r)if(a===$.ab[r])return!0
return!1},
pw:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.f(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.t()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.t();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
o4:function(a,b,c){var s=P.o2(b,c)
a.F(0,new P.id(s,b,c))
return s},
lT:function(a,b){var s,r,q=P.cz(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
l2:function(a){var s,r={}
if(P.lo(a))return"{...}"
s=new P.S("")
try{$.ab.push(a)
s.a+="{"
r.a=!0
J.kM(a,new P.ii(r,s))
s.a+="}"}finally{if(0>=$.ab.length)return H.b($.ab,-1)
$.ab.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d2:function d2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jQ:function jQ(a){this.a=a
this.c=this.b=null},
d3:function d3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cu:function cu(){},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(){},
i:function i(){},
cD:function cD(){},
ii:function ii(a,b){this.a=a
this.b=b},
V:function V(){},
hi:function hi(){},
cE:function cE(){},
c2:function c2(a,b){this.a=a
this.$ti=b},
da:function da(){},
d4:function d4(){},
dl:function dl(){},
ox:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oy(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oy:function(a,b,c,d){var s=a?$.np():$.no()
if(s==null)return null
if(0===c&&d===b.length)return P.mn(s,b)
return P.mn(s,b.subarray(c,P.bb(c,d,b.length)))},
mn:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ac(r)}return null},
lF:function(a,b,c,d,e,f){if(C.c.bc(f,4)!==0)throw H.c(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
pe:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pd:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.W()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aW(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.aa()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
jr:function jr(){},
js:function js(){},
hE:function hE(){},
hF:function hF(){},
dK:function dK(){},
dN:function dN(){},
hU:function hU(){},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
i5:function i5(a){this.a=a},
jp:function jp(){},
jt:function jt(){},
k7:function k7(a){this.b=0
this.c=a},
jq:function jq(a){this.a=a},
k6:function k6(a){this.a=a
this.b=16
this.c=0},
ku:function(a,b){var s=H.m4(a,b)
if(s!=null)return s
throw H.c(P.a1(a,null,null))},
nT:function(a){if(a instanceof H.bq)return a.i(0)
return"Instance of '"+H.f(H.eD(a))+"'"},
ie:function(a,b,c,d){var s,r=c?J.kW(a,d):J.nY(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
l1:function(a,b,c){var s,r=H.d([],c.I("v<0>"))
for(s=J.aZ(a);s.t();)r.push(s.gB(s))
if(b)return r
return J.kX(r)},
o5:function(a,b,c){var s,r,q=J.kW(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
eT:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bb(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ab()
q=c<r}else q=!0
return H.m5(q?s.slice(b,c):s)}if(t.bm.b(a))return H.oj(a,b,P.bb(b,c,a.length))
return P.os(a,b,c)},
os:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a2(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a2(c,b,a.length,o,o))
r=J.aZ(a)
for(q=0;q<b;++q)if(!r.t())throw H.c(P.a2(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.t())throw H.c(P.a2(c,b,q,o,o))
p.push(r.gB(r))}return H.m5(p)},
ok:function(a){return new H.e5(a,H.o0(a,!1,!0,!1,!1,!1))},
md:function(a,b,c){var s=J.aZ(b)
if(!s.t())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.t())}else{a+=H.f(s.gB(s))
for(;s.t();)a=a+c+H.f(s.gB(s))}return a},
mj:function(){var s=H.oa()
if(s!=null)return P.ow(s)
throw H.c(P.A("'Uri.base' is not supported"))},
k5:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nv().b
if(typeof b!="string")H.q(H.aH(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghr().c_(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ap(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nQ:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dQ:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a){return new P.br(1000*a)},
hX:function(a){if(typeof a=="number"||H.lm(a)||null==a)return J.a3(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nT(a)},
hA:function(a){return new P.dB(a)},
ch:function(a){return new P.ae(!1,null,null,a)},
lE:function(a,b,c){return new P.ae(!0,a,b,c)},
nG:function(a,b){if(a==null)throw H.c(new P.ae(!1,null,b,"Must not be null"))
return a},
m6:function(a){var s=null
return new P.bY(s,s,!1,s,s,a)},
eE:function(a,b){return new P.bY(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
bb:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.y(c)
s=a>c}else s=!0
if(s)throw H.c(P.a2(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
s=b>c}else s=!0
if(s)throw H.c(P.a2(b,a,c,"end",null))
return b}return c},
m7:function(a,b){if(a<0)throw H.c(P.a2(a,0,null,b,null))
return a},
N:function(a,b,c,d,e){var s=e==null?J.aI(b):e
return new P.e1(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fg(a)},
ji:function(a){return new P.fd(a)},
l4:function(a){return new P.c_(a)},
b2:function(a){return new P.dL(a)},
u:function(a){return new P.fD(a)},
a1:function(a,b,c){return new P.i2(a,b,c)},
lw:function(a){H.qp(a)},
ow:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.mi(a4<a4?C.a.q(a5,0,a4):a5,5,a3).gdP()
else if(s===32)return P.mi(C.a.q(a5,5,a4),0,a3).gdP()}r=P.ie(8,0,!1,t.S)
q=r.length
if(0>=q)return H.b(r,0)
r[0]=0
if(1>=q)return H.b(r,1)
r[1]=-1
if(2>=q)return H.b(r,2)
r[2]=-1
if(7>=q)return H.b(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mU(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.mU(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
r[7]=p}q=r.length
if(2>=q)return H.b(r,2)
o=r[2]+1
if(3>=q)return H.b(r,3)
n=r[3]
if(4>=q)return H.b(r,4)
m=r[4]
if(5>=q)return H.b(r,5)
l=r[5]
if(6>=q)return H.b(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.b(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a5(a5,"..",m)))h=l>m+2&&C.a.a5(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a5(a5,"file",0)){if(o<=0){if(!C.a.a5(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.q(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aR(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a5(a5,"http",0)){if(q&&n+3===m&&C.a.a5(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aR(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a5(a5,"https",0)){if(q&&n+4===m&&C.a.a5(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aR(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.q(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fY(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.p7(a5,0,p)
else{if(p===0)P.c7(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.p8(a5,d,o-1):""
b=P.p4(a5,o,n,!1)
q=n+1
if(q<m){a=H.m4(C.a.q(a5,q,m),a3)
a0=P.p6(a==null?H.q(P.a1("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p5(a5,m,l,a3,i,b!=null)
a2=l<k?P.lg(a5,l+1,k,a3):a3
return new P.bE(i,c,b,a0,a1,a2,k<a4?P.p3(a5,k+1,a4):a3)},
ml:function(a){var s=t.N
return C.b.hx(H.d(a.split("&"),t.s),P.l0(s,s),new P.jn(C.e))},
ov:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jk(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.T(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.ku(C.a.q(a,q,r),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.ku(C.a.q(a,q,c),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
mk:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jl(a),b=new P.jm(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.T(a,r)
if(n===58){if(r===a0){++r
if(C.a.T(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gau(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.ov(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aL(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
mJ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c7:function(a,b,c){throw H.c(P.a1(c,a,b))},
p6:function(a,b){if(a!=null&&a===P.mJ(b))return null
return a},
p4:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.T(a,b)===91){s=c-1
if(C.a.T(a,s)!==93)P.c7(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p1(a,r,s)
if(q<s){p=q+1
o=P.mO(a,C.a.a5(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mk(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.T(a,n)===58){q=C.a.bo(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mO(a,C.a.a5(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mk(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.pa(a,b,c)},
p1:function(a,b,c){var s=C.a.bo(a,"%",b)
return s>=b&&s<c?s:c},
mO:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.S(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.T(a,s)
if(p===37){o=P.lh(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.S("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.c7(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.S("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.T(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.S("")
n=i}else n=i
n.a+=j
n.a+=P.lf(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pa:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.T(a,s)
if(o===37){n=P.lh(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.S("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.S("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.c7(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.T(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.S("")
m=q}else m=q
m.a+=l
m.a+=P.lf(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p7:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mL(C.a.C(a,b)))P.c7(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.c7(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.p0(r?a.toLowerCase():a)},
p0:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p8:function(a,b,c){return P.dm(a,b,c,C.Y,!1)},
p5:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dm(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a3(s,"/"))s="/"+s
return P.p9(s,e,f)},
p9:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a3(a,"/"))return P.pb(a,!s||c)
return P.pc(a)},
lg:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.ch("Both query and queryParameters specified"))
return P.dm(a,b,c,C.k,!0)}if(d==null)return null
s=new P.S("")
r.a=""
d.F(0,new P.k3(new P.k4(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p3:function(a,b,c){return P.dm(a,b,c,C.k,!0)},
lh:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.T(a,b+1)
r=C.a.T(a,n)
q=H.kq(s)
p=H.kq(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aL(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ap(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
lf:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.C(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.C(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.fQ(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.C(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.C(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.eT(s,0,null)},
dm:function(a,b,c,d,e){var s=P.mN(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
mN:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.T(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lh(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.c7(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.T(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lf(o)}}if(p==null){p=new P.S("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.y(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mM:function(a){if(C.a.a3(a,"."))return!0
return C.a.dj(a,"/.")!==-1},
pc:function(a){var s,r,q,p,o,n,m
if(!P.mM(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pb:function(a,b){var s,r,q,p,o,n
if(!P.mM(a))return!b?P.mK(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gau(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gau(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.mK(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.j(s,"/")},
mK:function(a){var s,r,q,p=a.length
if(p>=2&&P.mL(J.nx(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.a7(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p2:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.ch("Invalid URL encoding"))}}return s},
li:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.p(C.a.q(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.c(P.ch("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.ch("Truncated URI"))
p.push(P.p2(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a2.c_(p)},
mL:function(a){var s=a|32
return 97<=s&&s<=122},
mi:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a1(k,a,r))}}if(q<0&&r>b)throw H.c(P.a1(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gau(j)
if(p!==44||r!==n+7||!C.a.a5(a,"base64",n+1))throw H.c(P.a1("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.hF(0,a,m,s)
else{l=P.mN(a,m,s,C.k,!0)
if(l!=null)a=C.a.aR(a,m,s,l)}return new P.jj(a,j,c)},
pi:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.o5(22,new P.kd(),t.gc),l=new P.kc(m),k=new P.ke(),j=new P.kf(),i=l.$2(0,225)
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
mU:function(a,b,c,d,e){var s,r,q,p,o,n=$.nw()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.C(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
aw:function aw(){},
ag:function ag(a,b){this.a=a
this.b=b},
Y:function Y(){},
br:function br(a){this.a=a},
hQ:function hQ(){},
hR:function hR(){},
K:function K(){},
dB:function dB(a){this.a=a},
er:function er(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e1:function e1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fg:function fg(a){this.a=a},
fd:function fd(a){this.a=a},
c_:function c_(a){this.a=a},
dL:function dL(a){this.a=a},
eu:function eu(){},
cO:function cO(){},
dO:function dO(a){this.a=a},
fD:function fD(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(){},
l:function l(){},
h:function h(){},
e2:function e2(){},
n:function n(){},
H:function H(){},
an:function an(){},
R:function R(){},
M:function M(){},
x:function x(){},
S:function S(a){this.a=a},
jn:function jn(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a,b){this.a=a
this.b=b},
bE:function bE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
k4:function k4(a,b){this.a=a
this.b=b},
k3:function k3(a){this.a=a},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(){},
kc:function kc(a){this.a=a},
ke:function ke(){},
kf:function kf(){},
fY:function fY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fu:function fu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
bi:function(a){var s,r,q,p,o
if(a==null)return null
s=P.l0(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
q8:function(a){var s={}
a.F(0,new P.kj(s))
return s},
jX:function jX(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
jY:function jY(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
i0:function i0(){},
i1:function i1(){},
jP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fW:function fW(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aN:function aN(){},
e9:function e9(){},
aQ:function aQ(){},
es:function es(){},
iH:function iH(){},
bZ:function bZ(){},
eS:function eS(){},
m:function m(){},
aR:function aR(){},
f3:function f3(){},
fK:function fK(){},
fL:function fL(){},
fS:function fS(){},
fT:function fT(){},
h5:function h5(){},
h6:function h6(){},
he:function he(){},
hf:function hf(){},
bd:function bd(){},
hC:function hC(){},
dD:function dD(){},
hD:function hD(a){this.a=a},
dE:function dE(){},
b0:function b0(){},
et:function et(){},
fq:function fq(){},
eN:function eN(){},
h1:function h1(){},
h2:function h2(){}},W={
lD:function(){var s=document.createElement("a")
return s},
lK:function(){var s=document.createElement("canvas")
return s},
nS:function(a,b,c){var s,r=document.body
r.toString
s=C.q.af(r,a,b,c)
s.toString
r=new H.aU(new W.a_(s),new W.hS(),t.ac.I("aU<i.E>"))
return t.h.a(r.gaG(r))},
hT:function(a){return"wheel"},
cp:function(a){var s,r,q="element tag unavailable"
try{s=J.aX(a)
if(typeof s.gdL(a)=="string")q=s.gdL(a)}catch(r){H.ac(r)}return q},
nV:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ac(s)}return q},
jO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a,b,c,d){var s=W.jO(W.jO(W.jO(W.jO(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a0:function(a,b,c,d){var s=new W.fC(a,b,c==null?null:W.mV(new W.jN(c),t.G),!1)
s.fX()
return s},
my:function(a){var s=W.lD(),r=window.location
s=new W.c5(new W.jU(s,r))
s.e7(a)
return s},
oE:function(a,b,c,d){return!0},
oF:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mE:function(){var s=t.N,r=P.lT(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.h9(r,P.cz(s),P.cz(s),P.cz(s),null)
s.ec(null,new H.cF(C.A,new W.k0(),t.eM),q,null)
return s},
mV:function(a,b){var s=$.aG
if(s===C.f)return a
return s.d1(a,b)},
r:function r(){},
hz:function hz(){},
dz:function dz(){},
dA:function dA(){},
bJ:function bJ(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
ax:function ax(){},
hJ:function hJ(){},
J:function J(){},
cl:function cl(){},
hK:function hK(){},
am:function am(){},
aL:function aL(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
b3:function b3(){},
hO:function hO(){},
cm:function cm(){},
cn:function cn(){},
dT:function dT(){},
hP:function hP(){},
fr:function fr(a,b){this.a=a
this.b=b},
D:function D(){},
hS:function hS(){},
j:function j(){},
e:function e(){},
ah:function ah(){},
bN:function bN(){},
dW:function dW(){},
dY:function dY(){},
az:function az(){},
i4:function i4(){},
bt:function bt(){},
ct:function ct(){},
bQ:function bQ(){},
bv:function bv(){},
ig:function ig(){},
iz:function iz(){},
bR:function bR(){},
ei:function ei(){},
iA:function iA(a){this.a=a},
ej:function ej(){},
iB:function iB(a){this.a=a},
aB:function aB(){},
ek:function ek(){},
ai:function ai(){},
a_:function a_(a){this.a=a},
w:function w(){},
cK:function cK(){},
aC:function aC(){},
ey:function ey(){},
eG:function eG(){},
iP:function iP(a){this.a=a},
eI:function eI(){},
ar:function ar(){},
eK:function eK(){},
aD:function aD(){},
eL:function eL(){},
aE:function aE(){},
eQ:function eQ(){},
j_:function j_(a){this.a=a},
as:function as(){},
bc:function bc(){},
cQ:function cQ(){},
eU:function eU(){},
eV:function eV(){},
c0:function c0(){},
at:function at(){},
aa:function aa(){},
eY:function eY(){},
eZ:function eZ(){},
j3:function j3(){},
aF:function aF(){},
bA:function bA(){},
f2:function f2(){},
j7:function j7(){},
aT:function aT(){},
jo:function jo(){},
fl:function fl(){},
be:function be(){},
c3:function c3(){},
c4:function c4(){},
fs:function fs(){},
d0:function d0(){},
fH:function fH(){},
d5:function d5(){},
h0:function h0(){},
h7:function h7(){},
fp:function fp(){},
fz:function fz(a){this.a=a},
kT:function kT(a,b){this.a=a
this.$ti=b},
fC:function fC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jN:function jN(a){this.a=a},
l8:function l8(a){this.$ti=a},
c5:function c5(a){this.a=a},
L:function L(){},
cL:function cL(a){this.a=a},
iE:function iE(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(){},
jV:function jV(){},
jW:function jW(){},
h9:function h9(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k0:function k0(){},
h8:function h8(){},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aj:function aj(){},
jU:function jU(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a
this.b=!1},
k8:function k8(a){this.a=a},
ft:function ft(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fE:function fE(){},
fF:function fF(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fU:function fU(){},
fV:function fV(){},
fX:function fX(){},
dc:function dc(){},
dd:function dd(){},
fZ:function fZ(){},
h_:function h_(){},
h4:function h4(){},
ha:function ha(){},
hb:function hb(){},
df:function df(){},
dg:function dg(){},
hc:function hc(){},
hd:function hd(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){}},K={
O:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.iK(s,r)},
t:function(a){var s=new K.iQ()
s.e4(a)
return s},
b_:function b_(){},
e_:function e_(){},
ij:function ij(){},
a9:function a9(){this.a=null},
iK:function iK(a,b){this.a=a
this.b=b},
iQ:function iQ(){this.a=null}},L={
j5:function(){var s=new L.j4()
s.a=new H.B(t.cn)
s.b=new H.B(t.w)
s.c=P.cz(t.X)
return s},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a){this.b=a
this.c=null},
j4:function j4(){var _=this
_.d=_.c=_.b=_.a=null},
f4:function f4(a){this.b=a
this.a=this.c=null}},O={
kQ:function(a){var s=new O.af(a.I("af<0>"))
s.bA(a)
return s},
af:function af(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cG:function cG(){this.b=this.a=null},
lU:function(){var s,r=new O.ee(),q=O.kQ(t.hc)
r.e=q
q.bd(r.geN(),r.geP())
q=new O.aP(r,"emission")
q.c=new A.a5(!1,!1,!1)
q.f=new V.T(0,0,0)
r.f=q
q=new O.aP(r,"ambient")
q.c=new A.a5(!1,!1,!1)
q.f=new V.T(0,0,0)
r.r=q
q=new O.aP(r,"diffuse")
q.c=new A.a5(!1,!1,!1)
q.f=new V.T(0,0,0)
r.x=q
q=new O.aP(r,"invDiffuse")
q.c=new A.a5(!1,!1,!1)
q.f=new V.T(0,0,0)
r.y=q
q=new O.iq(r,"specular")
q.c=new A.a5(!1,!1,!1)
q.f=new V.T(0,0,0)
q.ch=100
r.z=q
q=new O.il(r,"bump")
q.c=new A.a5(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aP(r,"reflect")
q.c=new A.a5(!1,!1,!1)
q.f=new V.T(0,0,0)
r.cx=q
q=new O.ip(r,"refract")
q.c=new A.a5(!1,!1,!1)
q.f=new V.T(0,0,0)
q.ch=1
r.cy=q
q=new O.ik(r,"alpha")
q.c=new A.a5(!1,!1,!1)
q.f=1
r.db=q
q=new D.cx()
q.bA(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.co(q.geL(),q.gfn(),q.gfs())
r.dx=q
s=new O.io()
s.b=new V.aK(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.Q():s
q.n(0,r.gfH())
q=r.dx
s=q.z
q=s==null?q.z=D.Q():s
q.n(0,r.ged())
r.fr=null
return r},
ee:function ee(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(){},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(){},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(){},
ik:function ik(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ef:function ef(){},
il:function il(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
io:function io(){var _=this
_.e=_.d=_.c=_.b=null},
ip:function ip(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iq:function iq(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eX:function eX(){}},E={
kS:function(){var s,r=new E.bs()
r.a=""
r.b=!0
s=O.kQ(t.l)
r.y=s
s.bd(r.ghG(),r.ghJ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sac(0,null)
r.sbb(null)
r.saP(null)
return r},
mv:function(){if(J.kL(window.navigator.vendor,"Google"))return C.G
if(J.kL(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.aW(s).E(s,"Trident")||C.a.E(s,"Edge"))return C.t
if(J.kL(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mw:function(){var s=window.navigator.appVersion
if(J.aW(s).E(s,"Win"))return C.a_
if(C.a.E(s,"Mac"))return C.B
if(C.a.E(s,"Linux"))return C.a0
return C.a1},
ol:function(a,b){var s=new E.iL(a)
s.e3(a,b)
return s},
ot:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.me(a,!0,!0,!0,!1)
s=W.lK()
r=s.style
r.width="100%"
r.height="100%"
J.kN(a).n(0,s)
return E.me(s,!0,!0,!0,!1)},
me:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f_(),n=t.z,m=C.m.dT(a,"webgl2",P.o3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.ol(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.fi(a)
s=new X.ia()
s.d=P.cz(t.e)
n.b=s
s=new X.iC(n)
s.f=0
s.r=V.bx()
s.x=V.bx()
s.ch=s.Q=1
n.c=s
s=new X.ih(n)
s.r=0
s.x=V.bx()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.j6(n)
s.f=V.bx()
s.r=V.bx()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hV
n.Q=(s==null?$.hV=new E.fA(E.mv(),E.mw()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a0(q,"contextmenu",n.geZ(),!1))
n.z.push(W.a0(a,"focus",n.gf4(),!1))
n.z.push(W.a0(a,"blur",n.geR(),!1))
n.z.push(W.a0(q,"keyup",n.gf8(),!1))
n.z.push(W.a0(q,"keydown",n.gf6(),!1))
n.z.push(W.a0(a,"mousedown",n.gfc(),!1))
n.z.push(W.a0(a,"mouseup",n.gfg(),!1))
n.z.push(W.a0(a,p,n.gfe(),!1))
r=n.z
W.hT(a)
W.hT(a)
r.push(W.a0(a,W.hT(a),n.gfi(),!1))
n.z.push(W.a0(q,p,n.gf0(),!1))
n.z.push(W.a0(q,"mouseup",n.gf2(),!1))
n.z.push(W.a0(q,"pointerlockchange",n.gfk(),!1))
n.z.push(W.a0(a,"touchstart",n.gfA(),!1))
n.z.push(W.a0(a,"touchend",n.gfu(),!1))
n.z.push(W.a0(a,"touchmove",n.gfw(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ag(Date.now(),!1)
o.db=0
o.cO()
return o},
hG:function hG(){},
bs:function bs(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bL:function bL(a){this.b=a},
bW:function bW(a){this.b=a},
fA:function fA(a,b){this.a=a
this.b=b},
iL:function iL(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
f_:function f_(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
j2:function j2(a){this.a=a}},Z={
l7:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.c8(c)),35044)
a.bindBuffer(b,null)
return new Z.fm(b,s)},
av:function(a){return new Z.bC(a)},
fm:function fm(a,b){this.a=a
this.b=b},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jI:function jI(a){this.a=a},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a}},D={
Q:function(){var s=new D.bM()
s.d=0
return s},
hH:function hH(){},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
Z:function Z(){this.b=null},
b5:function b5(){this.b=null},
b6:function b6(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dF:function dF(){},
dR:function dR(){},
U:function U(){},
cx:function cx(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eA:function eA(){},
bz:function bz(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dJ:function dJ(a,b){this.a=a
this.b=b},e7:function e7(a,b){this.a=a
this.b=b},ia:function ia(){this.d=this.b=this.a=null},cC:function cC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ih:function ih(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},bT:function bT(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iC:function iC(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eB:function eB(){},cS:function cS(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j6:function j6(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fi:function fi(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nU:function(a){var s=new X.i3(),r=new V.aK(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.ma
if(r==null){r=V.m9(0,0,1,1)
$.ma=r}s.r=r
return s},
kP:function kP(){},
i3:function i3(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ev:function ev(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(){}},V={
hw:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qv:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bc(a-b,s)
return(a<0?a+s:a)+b},
I:function(a,b,c){if(a==null)return C.a.ah("null",c)
$.F().toString
return C.a.ah(C.d.dN(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ce:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.I(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.b(m,o)
s=C.a.ah(m[o],r)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=s}return m},
eh:function(){var s=$.lY
return s==null?$.lY=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lX:function(a,b,c){return V.ba(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lW:function(a,b,c,d){return V.ba(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lV:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ba(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
bx:function(){var s=$.m0
return s==null?$.m0=new V.ak(0,0):s},
m1:function(){var s=$.ao
return s==null?$.ao=new V.P(0,0,0):s},
m9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eF(a,b,c,d)},
cZ:function(){var s=$.mr
return s==null?$.mr=new V.C(0,0,0):s},
oz:function(){var s=$.ju
return s==null?$.ju=new V.C(-1,0,0):s},
ms:function(){var s=$.jv
return s==null?$.jv=new V.C(0,1,0):s},
mt:function(){var s=$.jw
return s==null?$.jw=new V.C(0,0,1):s},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hW:function hW(){},
eg:function eg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b9:function b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ak:function ak(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qq:function(a){P.ou(C.S,new V.kG(a))},
oo:function(a){var s=new V.iV()
s.e6(a,!0)
return s},
b1:function b1(){},
kG:function kG(a){this.a=a},
dP:function dP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dZ:function dZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e0:function e0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ex:function ex(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iI:function iI(a){this.a=a
this.c=null},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(){this.b=this.a=null},
iX:function iX(a){this.a=a},
iW:function iW(a){this.a=a},
iY:function iY(a){this.a=a}},U={
lM:function(){var s=new U.hI()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
dM:function(a){var s=new U.ci()
s.a=a
return s},
kU:function(){var s=new U.bO()
s.bA(t.ah)
s.bd(s.ge9(),s.gfp())
s.e=null
s.f=V.eh()
s.r=0
return s},
mm:function(a,b){var s,r,q,p=new U.cY(),o=U.lM()
o.sdR(0,!0)
o.sdq(6.283185307179586)
o.sds(0)
o.sa2(0,0)
o.sdr(100)
o.sV(0)
o.sd5(0.5)
p.b=o
s=p.gbf()
o.gA().n(0,s)
o=U.lM()
o.sdR(0,!0)
o.sdq(6.283185307179586)
o.sds(0)
o.sa2(0,0)
o.sdr(100)
o.sV(0)
o.sd5(0.5)
p.c=o
o.gA().n(0,s)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
r=new X.bS(a,!1,!1)
q=p.d
p.d=r
o=new D.E("modifiers",q,r)
o.b=!0
p.U(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.E("invertX",o,!1)
o.b=!0
p.U(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.E("invertY",o,!1)
o.b=!0
p.U(o)}p.h5(b)
return p},
hI:function hI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ci:function ci(){this.b=this.a=null},
bO:function bO(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
cY:function cY(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dU:function dU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o7:function(a,b){var s=a.b2,r=new A.ed(b,s)
r.e5(b,s)
r.e2(a,b)
return r},
o8:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gan(a4)+a5.gan(a5)+a6.gan(a6)+a7.gan(a7)+a8.gan(a8)+a9.gan(a9)+b0.gan(b0)+b1.gan(b1)+b2.gan(b2)+"_"
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
c=$.bm()
if(h){s=$.bl()
c=new Z.bC(c.a|s.a)}if(g){s=$.bk()
c=new Z.bC(c.a|s.a)}if(f){s=$.bj()
c=new Z.bC(c.a|s.a)}return new A.im(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kg:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kh:function(a,b,c){var s
A.kg(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hx(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pC:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kg(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
py:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kh(b,r,"ambient")
b.a+="\n"},
pA:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kh(b,r,"diffuse")
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
pD:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kh(b,r,"invDiffuse")
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
pJ:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kh(b,r,"specular")
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
pF:function(a,b){var s,r,q
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
pH:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kg(b,r,"reflect")
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
pI:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kg(b,r,"refract")
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
pz:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hx(r)
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
pB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hx(r)
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
pG:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hx(r)
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
pK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hx(r)
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
if(m){s=$.hV
if(s==null)s=$.hV=new E.fA(E.mv(),E.mw())
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
pE:function(a,b){var s,r
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
pL:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.S("")
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
A.pC(a,h)
A.py(a,h)
A.pA(a,h)
A.pD(a,h)
A.pJ(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pH(a,h)
A.pI(a,h)}A.pF(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pz(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pB(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pG(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pK(a,o[m],h)
A.pE(a,h)}o=h.a+="// === Main ===\n"
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
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
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
pM:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bm+"];\n"
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
pO:function(a,b){var s
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
pN:function(a,b){var s
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
pQ:function(a,b){var s,r
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
pR:function(a,b){var s,r
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
pP:function(a,b){var s
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
pS:function(a,b){var s
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
hx:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a7(a,1)},
l6:function(a,b,c,d,e){var s=new A.jb(a,c,e)
s.f=d
P.ie(d,0,!1,t.e)
return s},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a,b){var _=this
_.ih=_.ig=_.bn=_.b2=_.bm=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iv=_.iu=_.it=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.is=_.ir=_.dd=_.iq=_.ip=_.dc=_.da=_.io=_.im=_.d9=_.d8=_.il=_.ik=_.d7=_.ij=_.ii=_.d6=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dG:function dG(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
im:function im(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bm=b5
_.b2=b6
_.bn=b7},
cT:function cT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cU:function cU(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cW:function cW(a,b,c,d,e,f,g,h,i,j){var _=this
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
cX:function cX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cN:function cN(){},
f5:function f5(){},
jg:function jg(a){this.a=a},
f7:function f7(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
je:function je(a,b,c){this.a=a
this.c=b
this.d=c},
jf:function jf(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
f6:function f6(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
f8:function f8(a,b,c){this.a=a
this.c=b
this.d=c},
f9:function f9(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
fa:function fa(a,b,c){this.a=a
this.c=b
this.d=c},
cV:function cV(a,b,c){this.a=a
this.c=b
this.d=c},
fb:function fb(a,b,c){this.a=a
this.c=b
this.d=c},
fc:function fc(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lq:function(a,b,c,d){var s=F.l3()
F.dn(s,b,c,d,a,1,0,0,1)
F.dn(s,b,c,d,a,0,1,0,3)
F.dn(s,b,c,d,a,0,0,1,2)
F.dn(s,b,c,d,a,-1,0,0,0)
F.dn(s,b,c,d,a,0,-1,0,0)
F.dn(s,b,c,d,a,0,0,-1,3)
s.as()
return s},
kb:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dn:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.C(f,e+a3,d+a4)
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
h.d=g}k=F.kb(g)
j=F.kb(f)
i=F.ly(a1,a2,new F.ka(h,F.kb(e),F.kb(d),j,k,a0),b)
if(i!=null)a.b7(i)},
mZ:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.l3()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.C(0,0,r).G()
p.push(o.h2(new V.by(a,-1,-1,-1),new V.aK(1,1,1,1),new V.P(0,0,c),new V.C(0,0,r),new V.ak(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.y(i)
n=new V.C(k,j,r).G()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fk(new V.by(a,-1,-1,-1),null,new V.aK(h,f,g,1),new V.P(k*i,j*i,c),new V.C(0,0,r),new V.ak(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.h0(p)
return s},
lr:function(a,b,c,d,e){return F.q9(b,c,1,new F.kk(a,e),d)},
q9:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.ly(c,e,new F.km(d),r)
if(s==null)return r
s.as()
s.bV()
if(b)s.b7(F.mZ(3,!1,1,new F.kn(d),e))
if(a)s.b7(F.mZ(1,!0,-1,new F.ko(d),e))
return s},
qr:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kH()
r=F.lq(a,null,new F.kI(q,1),b)
r.bV()
return r},
n9:function(){return F.mY(15,30,0.5,1,new F.kJ())},
qm:function(){return F.mY(12,120,0.3,1,new F.kx(3,2))},
mY:function(a,b,c,d,e){var s=F.ly(a,b,new F.kl(e,d,b,c),null)
if(s==null)return null
s.as()
s.bV()
return s},
ly:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.l3()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fk(e,e,new V.aK(n,0,0,1),e,e,new V.ak(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.c0(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.fk(e,e,new V.aK(h,g,f,1),e,e,new V.ak(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.c0(d))}}s.d.h1(a+1,b+1,r)
return s},
cq:function(a,b,c){var s=new F.dV(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.bR(a)
s.bS(b)
s.fM(c)
s.a.a.d.b.push(s)
s.a.a.X()
return s},
o1:function(a,b){var s=new F.ea(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.bR(a)
s.bS(b)
s.a.a.c.b.push(s)
s.a.a.X()
return s},
l3:function(){var s=new F.iR(),r=new F.jx(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.iU(s)
r.b=H.d([],t.o)
s.b=r
r=new F.iT(s)
r.b=H.d([],t.L)
s.c=r
r=new F.iS(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
fk:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fj(),p=new F.jF()
p.b=H.d([],t.o)
q.b=p
p=new F.jB()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jy()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.nq()
q.e=0
p=$.bm()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bl().a)!==0?e:r
q.x=(s&$.bk().a)!==0?b:r
q.y=(s&$.bH().a)!==0?f:r
q.z=(s&$.bI().a)!==0?g:r
q.Q=(s&$.nr().a)!==0?c:r
q.ch=(s&$.cf().a)!==0?i:0
q.cx=(s&$.bj().a)!==0?a:r
return q},
ka:function ka(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kk:function kk(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kH:function kH(){},
kI:function kI(a,b){this.a=a
this.b=b},
kJ:function kJ(){},
kx:function kx(a,b){this.a=a
this.b=b},
kl:function kl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dV:function dV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i_:function i_(){},
iZ:function iZ(){},
ea:function ea(){this.b=this.a=null},
ib:function ib(){},
ja:function ja(){},
ez:function ez(){this.a=null},
iR:function iR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iS:function iS(a){this.a=a
this.b=null},
iT:function iT(a){this.a=a
this.b=null},
iU:function iU(a){this.a=a
this.b=null},
fj:function fj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jH:function jH(a){this.a=a},
jG:function jG(a){this.a=a},
jx:function jx(a){this.a=a
this.c=this.b=null},
jy:function jy(){this.d=this.c=this.b=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(){this.c=this.b=null},
jD:function jD(){},
jC:function jC(){},
jE:function jE(){},
iF:function iF(){},
jF:function jF(){this.b=null}},T={j1:function j1(){}},N={
n4:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0=V.oo("Test 024"),a1=W.lK()
a1.className="pageLargeCanvas"
a1.id=b
a0.a.appendChild(a1)
s=t.i
a0.cZ(H.d(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],s))
a0.fZ(H.d(["shapes"],s))
a0.cZ(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.ot(r,!0,!0,!0,!1)
p=U.kU()
p.n(0,U.dM(V.lX(0,0,-2.5)))
p.n(0,U.mm(!0,q.x))
o=new V.T(1,1,1)
n=new D.bz()
n.r=new V.T(1,1,1)
n.ch=1.0471975511965976
n.cx=1
n.dx=n.cy=1.5707963267948966
n.db=!0
n.dy=1
n.fx=n.fr=0
n.fy=!0
n.a=V.m1()
n.b=V.mt()
n.c=V.ms()
n.d=V.oz()
m=n.f
n.f=p
p.gA().n(0,n.geT())
l=new D.E("mover",m,n.f)
l.b=!0
n.Y(l)
if(!n.r.p(0,o)){m=n.r
n.r=o
l=new D.E("color",m,o)
l.b=!0
n.Y(l)}l=n.ch
$.F().toString
if(!(Math.abs(l-1.0471975511965976)<1e-9)){n.ch=1.0471975511965976
k=1/(Math.sqrt(2)*Math.tan(n.ch))
n.z=k
n.Q=k*n.cx
l=new D.E("fov",l,n.ch)
l.b=!0
n.Y(l)}l=n.cx
$.F().toString
if(!(Math.abs(l-1)<1e-9)){n.cx=1
k=n.z
if(typeof k!=="number")return k.w()
n.Q=k
l=new D.E("ratio",l,1)
l.b=!0
n.Y(l)}l=n.cy
$.F().toString
if(!(Math.abs(l-0.6)<1e-9)){n.cy=0.6
l=new D.E("cutoff",l,0.6)
l.b=!0
n.Y(l)}l=n.dx
$.F().toString
if(!(Math.abs(l-0.5)<1e-9)){n.dx=0.5
l=new D.E("coneAngle",l,0.5)
l.b=!0
n.Y(l)}l=$.mu
if(l==null){l=new V.d_(1,0.00390625,0.0000152587890625,0)
$.mu=l
j=l}else j=l
if(!J.G(n.e,j)){m=n.e
n.e=j
l=new D.E("shadowAdjust",m,j)
l.b=!0
n.Y(l)}l=n.dy
$.F().toString
if(!(Math.abs(l-0.5)<1e-9)){n.dy=0.5
l=new D.E("attenuation0",l,0.5)
l.b=!0
n.Y(l)}l=n.fr
$.F().toString
if(!(Math.abs(l-0.05)<1e-9)){n.fr=0.05
l=new D.E("attenuation1",l,0.05)
l.b=!0
n.Y(l)}l=n.fx
$.F().toString
if(!(Math.abs(l-0.05)<1e-9)){n.fx=0.05
l=new D.E("attenuation2",l,0.05)
l.b=!0
n.Y(l)}i=O.lU()
i.dx.n(0,n)
i.f.sat(0,new V.T(0,0,0))
l=i.r
l.sat(0,new V.T(0,0,0))
l=i.x
l.sat(0,new V.T(0.7,0.7,0.7))
l=i.z
l.sat(0,new V.T(0.3,0.3,0.3))
l=i.z
l.cQ(new A.a5(!0,!1,!1))
l.cR(100)
h=E.kS()
h.sac(0,F.n9())
g=E.kS()
g.saP(U.dM(V.lW(3,3,3,1)))
l=F.lq(1,a,a,1)
l.ca()
g.sac(0,l)
f=U.kU()
f.n(0,U.mm(!1,q.x))
f.n(0,U.dM(V.lV(3.141592653589793)))
f.n(0,U.dM(V.lX(0,0,5)))
e=E.kS()
l=U.kU()
l.n(0,U.dM(V.lW(0.1,0.1,0.1,1)))
l.n(0,p)
e.saP(l)
e.sac(0,F.lr(0,!1,!0,40,1))
l=O.lU()
k=l.f
k.sat(0,new V.T(1,1,1))
e.sbb(l)
l=new M.dU()
l.a=!0
k=O.kQ(t.l)
l.e=k
k.bd(l.geV(),l.geX())
l.y=l.x=l.r=l.f=null
d=X.nU(a)
c=new X.ev()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saP(a)
k=c.c
$.F().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
k=new D.E("fov",k,1.0471975511965976)
k.b=!0
c.aI(k)}k=c.d
$.F().toString
if(!(Math.abs(k-0.1)<1e-9)){c.d=0.1
k=new D.E("near",k,0.1)
k.b=!0
c.aI(k)}k=c.e
$.F().toString
if(!(Math.abs(k-2000)<1e-9)){c.e=2000
k=new D.E("far",k,2000)
k.b=!0
c.aI(k)}k=l.b
if(k!==c){if(k!=null)k.gA().K(0,l.gap())
m=l.b
l.b=c
c.gA().n(0,l.gap())
k=new D.E("camera",m,l.b)
k.b=!0
l.ax(k)}k=l.c
if(k!==d){if(k!=null)k.gA().K(0,l.gap())
m=l.c
l.c=d
d.gA().n(0,l.gap())
k=new D.E("target",m,l.c)
k.b=!0
l.ax(k)}l.sbb(a)
l.sbb(i)
l.e.n(0,h)
l.e.n(0,g)
l.e.n(0,e)
l.b.saP(f)
k=q.d
if(k!==l){if(k!=null)k.gA().K(0,q.gcu())
q.d=l
l.gA().n(0,q.gcu())
q.cv()}l=new V.iI("shapes")
s=s.getElementById("shapes")
l.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
l.b_(0,"Cube",new N.ky(h))
l.b_(0,"Cylinder",new N.kz(h))
l.b_(0,"Cone",new N.kA(h))
l.b_(0,"Sphere",new N.kB(h))
l.cX(0,"Toroid",new N.kC(h),!0)
l.b_(0,"Knot",new N.kD(h))
s=q.Q
if(s==null)s=q.Q=D.Q()
l=s.b
s=l==null?s.b=H.d([],t.f):l
s.push(new N.kE(a0,i))
V.qq(q)},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kY.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gP:function(a){return H.cM(a)},
i:function(a){return"Instance of '"+H.f(H.eD(a))+"'"}}
J.e3.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iaw:1}
J.cw.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.b7.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$ilR:1}
J.ew.prototype={}
J.bB.prototype={}
J.aA.prototype={
i:function(a){var s=a[$.nd()]
if(s==null)return this.e_(a)
return"JavaScript function for "+H.f(J.a3(s))},
$iay:1}
J.v.prototype={
ci:function(a,b){if(!!a.fixed$length)H.q(P.A("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eE(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.q(P.A("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
ae:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.A("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b2(a))}},
j:function(a,b){var s,r,q=P.ie(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
hC:function(a){return this.j(a,"")},
hw:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.b2(a))}return s},
hx:function(a,b,c){return this.hw(a,b,c,t.z)},
hv:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.b2(a))}throw H.c(H.i7())},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
ghu:function(a){if(a.length>0)return a[0]
throw H.c(H.i7())},
gau:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.i7())},
d_:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.b2(a))}return!1},
aV:function(a,b){if(!!a.immutable$list)H.q(P.A("sort"))
H.or(a,b==null?J.pp():b)},
dW:function(a){return this.aV(a,null)},
E:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.kV(a,"[","]")},
gO:function(a){return new J.a4(a,a.length)},
gP:function(a){return H.cM(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cd(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cd(a,b))
a[b]=c},
$ik:1,
$ih:1,
$in:1}
J.i8.prototype={}
J.a4.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bu.prototype={
aN:function(a,b){var s
if(typeof b!="number")throw H.c(H.aH(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbq(b)
if(this.gbq(a)===s)return 0
if(this.gbq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbq:function(a){return a===0?1/a<0:a<0},
de:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.A(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.A(""+a+".round()"))},
dN:function(a,b){var s
if(b>20)throw H.c(P.a2(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbq(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
bc:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cT(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cT(a,b)},
cT:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.A("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aL:function(a,b){var s
if(a>0)s=this.cS(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fQ:function(a,b){if(b<0)throw H.c(H.aH(b))
return this.cS(a,b)},
cS:function(a,b){return b>31?0:a>>>b},
$iY:1,
$iR:1}
J.cv.prototype={$il:1}
J.e4.prototype={}
J.aM.prototype={
T:function(a,b){if(b<0)throw H.c(H.cd(a,b))
if(b>=a.length)H.q(H.cd(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.cd(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.lE(b,null,null))
return a+b},
aR:function(a,b,c,d){var s,r,q=P.bb(b,c,a.length)
if(!H.c9(q))H.q(H.aH(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a5:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eE(b,null))
if(b>c)throw H.c(P.eE(b,null))
if(c>a.length)throw H.c(P.eE(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.q(a,b,null)},
i6:function(a){return a.toLowerCase()},
w:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ah:function(a,b){var s=b-a.length
if(s<=0)return a
return this.w(" ",s)+a},
bo:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a2(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dj:function(a,b){return this.bo(a,b,0)},
he:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a2(c,0,s,null,null))
return H.n8(a,b,c)},
E:function(a,b){return this.he(a,b,0)},
aN:function(a,b){var s
if(typeof b!="string")throw H.c(H.aH(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gP:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gm:function(a){return a.length},
$ix:1}
H.e8.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)}}
H.k.prototype={}
H.cB.prototype={
gO:function(a){return new H.b8(this,this.gm(this))},
bx:function(a,b){return this.dZ(0,b)}}
H.b8.prototype={
gB:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.aW(q),o=p.gm(q)
if(r.b!=o)throw H.c(P.b2(q))
s=r.c
if(typeof o!=="number")return H.y(o)
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.aO.prototype={
gO:function(a){return new H.ec(J.aZ(this.a),this.b)},
gm:function(a){return J.aI(this.a)},
H:function(a,b){return this.b.$1(J.hy(this.a,b))}}
H.co.prototype={$ik:1}
H.ec.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cF.prototype={
gm:function(a){return J.aI(this.a)},
H:function(a,b){return this.b.$1(J.hy(this.a,b))}}
H.aU.prototype={
gO:function(a){return new H.fn(J.aZ(this.a),this.b)}}
H.fn.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cr.prototype={}
H.ff.prototype={
l:function(a,b,c){throw H.c(P.A("Cannot modify an unmodifiable list"))}}
H.c1.prototype={}
H.cj.prototype={
i:function(a){return P.l2(this)},
l:function(a,b,c){H.nP()},
$iH:1}
H.ck.prototype={
gm:function(a){return this.a},
bZ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bZ(0,b))return null
return this.cH(b)},
cH:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cH(q))}}}
H.j8.prototype={
ag:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.eq.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.e6.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fe.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iG.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.h3.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bq.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nb(r==null?"unknown":r)+"'"},
$iay:1,
gi9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eW.prototype={}
H.eP.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nb(s)+"'"}}
H.bK.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bK))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cM(this.a)
else s=typeof r!=="object"?J.ad(r):H.cM(r)
return(s^H.cM(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eD(s))+"'")}}
H.eH.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.B.prototype={
gm:function(a){return this.a},
gbp:function(a){return this.a===0},
gZ:function(a){return new H.cy(this,H.dq(this).I("cy<1>"))},
gi8:function(a){var s=this,r=H.dq(s)
return H.o6(s.gZ(s),new H.i9(s),r.c,r.Q[1])},
bZ:function(a,b){var s=this.b
if(s==null)return!1
return this.er(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bg(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bg(p,b)
q=r==null?n:r.b
return q}else return o.hA(b)},
hA:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cI(p,q.dk(a))
r=q.dl(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cA(s==null?q.b=q.bK():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cA(r==null?q.c=q.bK():r,b,c)}else q.hB(b,c)},
hB:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bK()
s=p.dk(a)
r=p.cI(o,s)
if(r==null)p.bP(o,s,[p.bL(a,b)])
else{q=p.dl(r,a)
if(q>=0)r[q].b=b
else r.push(p.bL(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b2(s))
r=r.c}},
cA:function(a,b,c){var s=this.bg(a,b)
if(s==null)this.bP(a,b,this.bL(b,c))
else s.b=c},
eD:function(){this.r=this.r+1&67108863},
bL:function(a,b){var s,r=this,q=new H.ic(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eD()
return q},
dk:function(a){return J.ad(a)&0x3ffffff},
dl:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.l2(this)},
bg:function(a,b){return a[b]},
cI:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
ew:function(a,b){delete a[b]},
er:function(a,b){return this.bg(a,b)!=null},
bK:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bP(r,s,r)
this.ew(r,s)
return r}}
H.i9.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dq(this.a).I("2(1)")}}
H.ic.prototype={}
H.cy.prototype={
gm:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.eb(s,s.r)
r.c=s.e
return r}}
H.eb.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b2(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kr.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.ks.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kt.prototype={
$1:function(a){return this.a(a)}}
H.e5.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im8:1}
H.cH.prototype={$icH:1}
H.W.prototype={$iW:1}
H.bU.prototype={
gm:function(a){return a.length},
$iz:1}
H.bw.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aV(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cI.prototype={
l:function(a,b,c){H.aV(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.el.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.em.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.en.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.eo.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.ep.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.cJ.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.bV.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aV(b,a,a.length)
return a[b]},
$ibV:1,
$ibd:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
H.aq.prototype={
I:function(a){return H.hh(v.typeUniverse,this,a)},
aW:function(a){return H.oZ(v.typeUniverse,this,a)}}
H.fG.prototype={}
H.fB.prototype={
i:function(a){return this.a}}
H.di.prototype={}
P.jK.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jJ.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jL.prototype={
$0:function(){this.a.$0()}}
P.jM.prototype={
$0:function(){this.a.$0()}}
P.dh.prototype={
ef:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cc(new P.k2(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
eg:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cc(new P.k1(this,a,Date.now(),b),0),a)
else throw H.c(P.A("Periodic timer."))},
$icR:1}
P.k2.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k1.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e1(s,o)}q.c=p
r.d.$1(q)}}
P.c6.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bD.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.c6){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aZ(s)
if(o instanceof P.bD){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.de.prototype={
gO:function(a){return new P.bD(this.a())}}
P.fo.prototype={}
P.cP.prototype={}
P.eR.prototype={}
P.cR.prototype={}
P.k9.prototype={}
P.ki.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a3(this.b)
throw s}}
P.jR.prototype={
i1:function(a){var s,r,q,p=null
try{if(C.f===$.aG){a.$0()
return}P.pV(p,p,this,a)}catch(q){s=H.ac(q)
r=H.lt(q)
P.mT(p,p,this,s,r)}},
i2:function(a,b){var s,r,q,p=null
try{if(C.f===$.aG){a.$1(b)
return}P.pW(p,p,this,a,b)}catch(q){s=H.ac(q)
r=H.lt(q)
P.mT(p,p,this,s,r)}},
i3:function(a,b){return this.i2(a,b,t.z)},
ha:function(a){return new P.jS(this,a)},
d1:function(a,b){return new P.jT(this,a,b)}}
P.jS.prototype={
$0:function(){return this.a.i1(this.b)}}
P.jT.prototype={
$1:function(a){return this.a.i3(this.b,a)},
$S:function(){return this.c.I("~(0)")}}
P.d2.prototype={
gO:function(a){var s=new P.d3(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
E:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eq(b)
return r}},
eq:function(a){var s=this.d
if(s==null)return!1
return this.bH(s[this.bD(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cC(s==null?q.b=P.l9():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cC(r==null?q.c=P.l9():r,b)}else return q.ei(0,b)},
ei:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.l9()
s=q.bD(b)
r=p[s]
if(r==null)p[s]=[q.bC(b)]
else{if(q.bH(r,b)>=0)return!1
r.push(q.bC(b))}return!0},
K:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fD(this.c,b)
else return this.fC(0,b)},
fC:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bD(b)
r=n[s]
q=o.bH(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cV(p)
return!0},
cC:function(a,b){if(a[b]!=null)return!1
a[b]=this.bC(b)
return!0},
fD:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cV(s)
delete a[b]
return!0},
cD:function(){this.r=1073741823&this.r+1},
bC:function(a){var s,r=this,q=new P.jQ(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cD()
return q},
cV:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cD()},
bD:function(a){return J.ad(a)&1073741823},
bH:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.jQ.prototype={}
P.d3.prototype={
gB:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b2(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cu.prototype={}
P.id.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cA.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gO:function(a){return new H.b8(a,this.gm(a))},
H:function(a,b){return this.h(a,b)},
gbp:function(a){return this.gm(a)===0},
i5:function(a,b){var s,r,q,p,o=this
if(o.gbp(a)){s=J.kW(0,H.bF(a).I("i.E"))
return s}r=o.h(a,0)
q=P.ie(o.gm(a),r,!0,H.bF(a).I("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.y(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
i4:function(a){return this.i5(a,!0)},
hs:function(a,b,c,d){var s
P.bb(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.kV(a,"[","]")}}
P.cD.prototype={}
P.ii.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:17}
P.V.prototype={
F:function(a,b){var s,r
for(s=J.aZ(this.gZ(a));s.t();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aI(this.gZ(a))},
i:function(a){return P.l2(a)},
$iH:1}
P.hi.prototype={
l:function(a,b,c){throw H.c(P.A("Cannot modify unmodifiable map"))}}
P.cE.prototype={
h:function(a,b){return J.cg(this.a,b)},
l:function(a,b,c){J.kK(this.a,b,c)},
F:function(a,b){J.kM(this.a,b)},
gm:function(a){return J.aI(this.a)},
i:function(a){return J.a3(this.a)},
$iH:1}
P.c2.prototype={}
P.da.prototype={
ae:function(a,b){var s
for(s=J.aZ(b);s.t();)this.n(0,s.gB(s))},
i:function(a){return P.kV(this,"{","}")},
H:function(a,b){var s,r,q,p="index"
P.nG(b,p)
P.m7(b,p)
for(s=P.oJ(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.c(P.N(b,this,p,null,r))},
$ik:1,
$ih:1}
P.d4.prototype={}
P.dl.prototype={}
P.jr.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ac(r)}return null}}
P.js.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ac(r)}return null}}
P.hE.prototype={
hF:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bb(a2,a3,a1.length)
if(a3==null)throw H.c(P.m6("Invalid range"))
s=$.nt()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kq(C.a.C(a1,l))
h=H.kq(C.a.C(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.S("")
e=p}else e=p
d=e.a+=C.a.q(a1,q,r)
e.a=d+H.ap(k)
q=l
continue}}throw H.c(P.a1("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.q(a1,q,a3)
d=e.length
if(o>=0)P.lF(a1,n,a3,o,m,d)
else{c=C.c.bc(d-1,4)+1
if(c===1)throw H.c(P.a1(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aR(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lF(a1,n,a3,o,m,b)
else{c=C.c.bc(b,4)
if(c===1)throw H.c(P.a1(a,a1,a3))
if(c>1)a1=C.a.aR(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hF.prototype={}
P.dK.prototype={}
P.dN.prototype={}
P.hU.prototype={}
P.i6.prototype={
i:function(a){return this.a}}
P.i5.prototype={
es:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.b(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.S("")
if(p>b)o.a+=C.a.q(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nE(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jp.prototype={
ghr:function(){return C.Q}}
P.jt.prototype={
c_:function(a){var s,r,q,p=P.bb(0,null,a.length)
if(p==null)throw H.c(P.m6("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.k7(r)
if(q.ey(a,0,p)!==p){J.nA(a,p-1)
q.bU()}return new Uint8Array(r.subarray(0,H.ph(0,q.b,r.length)))}}
P.k7.prototype={
bU:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
fY:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.b(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.b(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s&63
return!0}else{n.bU()
return!1}},
ey:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fY(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bU()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.b(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.b(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=128|p&63}}}return q}}
P.jq.prototype={
c_:function(a){var s=this.a,r=P.ox(s,a,0,null)
if(r!=null)return r
return new P.k6(s).hf(a,0,null,!0)}}
P.k6.prototype={
hf:function(a,b,c,d){var s,r,q,p,o=this,n=P.bb(b,c,J.aI(a))
if(b===n)return""
s=P.pd(a,b,n)
if(typeof n!=="number")return n.W()
n-=b
r=o.bE(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pe(q)
o.b=0
throw H.c(P.a1(p,a,b+o.c))}return r},
bE:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.W()
if(c-b>1000){s=C.c.a1(b+c,2)
r=q.bE(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bE(a,s,c,d)}return q.hk(a,b,c,d)},
hk:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.S(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ap(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ap(j)
break
case 65:g.a+=H.ap(j);--f
break
default:p=g.a+=H.ap(j)
g.a=p+H.ap(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.b(a,l)
g.a+=H.ap(a[l])}else g.a+=P.eT(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ap(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aw.prototype={}
P.ag.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
aN:function(a,b){return C.c.aN(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aL(s,30))&1073741823},
i:function(a){var s=this,r=P.nQ(H.oh(s)),q=P.dQ(H.of(s)),p=P.dQ(H.ob(s)),o=P.dQ(H.oc(s)),n=P.dQ(H.oe(s)),m=P.dQ(H.og(s)),l=P.nR(H.od(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Y.prototype={}
P.br.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aN:function(a,b){return C.c.aN(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hR(),o=this.a
if(o<0)return"-"+new P.br(0-o).i(0)
s=p.$1(C.c.a1(o,6e7)%60)
r=p.$1(C.c.a1(o,1e6)%60)
q=new P.hQ().$1(o%1e6)
return""+C.c.a1(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.K.prototype={}
P.dB.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hX(s)
return"Assertion failed"}}
P.er.prototype={
i:function(a){return"Throw of null."}}
P.ae.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbG()+o+m
if(!q.a)return l
s=q.gbF()
r=P.hX(q.b)
return l+s+": "+r}}
P.bY.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e1.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var s,r=this.b
if(typeof r!=="number")return r.ab()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fg.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fd.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c_.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dL.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hX(s)+"."}}
P.eu.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cO.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.dO.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fD.prototype={
i:function(a){return"Exception: "+this.a}}
P.i2.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.q(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.T(d,o)
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
i=""}h=C.a.q(d,k,l)
return f+j+h+i+"\n"+C.a.w(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.ay.prototype={}
P.l.prototype={}
P.h.prototype={
bx:function(a,b){return new H.aU(this,b,H.dq(this).I("aU<h.E>"))},
gm:function(a){var s,r=this.gO(this)
for(s=0;r.t();)++s
return s},
gaG:function(a){var s,r=this.gO(this)
if(!r.t())throw H.c(H.i7())
s=r.gB(r)
if(r.t())throw H.c(H.nX())
return s},
H:function(a,b){var s,r,q
P.m7(b,"index")
for(s=this.gO(this),r=0;s.t();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.N(b,this,"index",null,r))},
i:function(a){return P.nW(this,"(",")")}}
P.e2.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.H.prototype={}
P.an.prototype={
gP:function(a){return P.M.prototype.gP.call(C.i,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
p:function(a,b){return this===b},
gP:function(a){return H.cM(this)},
i:function(a){return"Instance of '"+H.f(H.eD(this))+"'"},
toString:function(){return this.i(this)}}
P.x.prototype={}
P.S.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jn.prototype={
$2:function(a,b){var s,r,q,p=J.dv(b).dj(b,"=")
if(p===-1){if(b!=="")J.kK(a,P.li(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.a7(b,p+1)
q=this.a
J.kK(a,P.li(s,0,s.length,q,!0),P.li(r,0,r.length,q,!0))}return a}}
P.jk.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv4 address, "+a,this.a,b))}}
P.jl.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jm.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.ku(C.a.q(this.b,a,b),16)
if(typeof s!=="number")return s.ab()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bE.prototype={
gbT:function(){var s,r,q,p=this,o=p.x
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
else o=H.q(H.l_("Field '_text' has been assigned during initialization."))}return o},
gP:function(a){var s=this,r=s.z
if(r==null){r=C.a.gP(s.gbT())
if(s.z==null)s.z=r
else r=H.q(H.l_("Field 'hashCode' has been assigned during initialization."))}return r},
gcg:function(){var s=this,r=s.Q
if(r==null){r=new P.c2(P.ml(s.gba(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.l_("Field 'queryParameters' has been assigned during initialization."))}return r},
gdQ:function(){return this.b},
gcc:function(a){var s=this.c
if(s==null)return""
if(C.a.a3(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbs:function(a){var s=this.d
return s==null?P.mJ(this.a):s},
gba:function(a){var s=this.f
return s==null?"":s},
gcb:function(){var s=this.r
return s==null?"":s},
dJ:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a3(s,"/"))s="/"+s
q=s
p=P.lg(null,0,0,b)
return new P.bE(n,l,j,k,q,p,o.r)},
gdf:function(){return this.c!=null},
gdi:function(){return this.f!=null},
gdg:function(){return this.r!=null},
i:function(a){return this.gbT()},
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gby()&&s.c!=null===b.gdf()&&s.b===b.gdQ()&&s.gcc(s)===b.gcc(b)&&s.gbs(s)===b.gbs(b)&&s.e===b.gdF(b)&&s.f!=null===b.gdi()&&s.gba(s)===b.gba(b)&&s.r!=null===b.gdg()&&s.gcb()===b.gcb()},
$ifh:1,
gby:function(){return this.a},
gdF:function(a){return this.e}}
P.k4.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.k5(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.k5(C.h,b,C.e,!0))}}}
P.k3.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aZ(b),r=this.a;s.t();)r.$2(a,s.gB(s))}}
P.jj.prototype={
gdP:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bo(s,"?",m)
q=s.length
if(r>=0){p=P.dm(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fu("data","",n,n,P.dm(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kd.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kc.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.nB(s,0,96,b)
return s},
$S:18}
P.ke.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.kf.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.fY.prototype={
gdf:function(){return this.c>0},
gdh:function(){return this.c>0&&this.d+1<this.e},
gdi:function(){return this.f<this.r},
gdg:function(){return this.r<this.a.length},
gcJ:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcK:function(){return this.b===5&&C.a.a3(this.a,"https")},
gby:function(){var s=this.x
return s==null?this.x=this.ep():s},
ep:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcJ())return"http"
if(s.gcK())return"https"
if(r===4&&C.a.a3(s.a,"file"))return"file"
if(r===7&&C.a.a3(s.a,"package"))return"package"
return C.a.q(s.a,0,r)},
gdQ:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcc:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbs:function(a){var s=this
if(s.gdh())return P.ku(C.a.q(s.a,s.d+1,s.e),null)
if(s.gcJ())return 80
if(s.gcK())return 443
return 0},
gdF:function(a){return C.a.q(this.a,this.e,this.f)},
gba:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
gcb:function(){var s=this.r,r=this.a
return s<r.length?C.a.a7(r,s+1):""},
gcg:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.c2(P.ml(s.gba(s)),t.U)},
dJ:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gby(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.gdh()?n.gbs(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a3(r,"/"))r="/"+r
p=P.lg(m,0,0,b)
q=n.r
o=q<j.length?C.a.a7(j,q+1):m
return new P.bE(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifh:1}
P.fu.prototype={}
W.r.prototype={}
W.hz.prototype={
gm:function(a){return a.length}}
W.dz.prototype={
i:function(a){return String(a)}}
W.dA.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.bn.prototype={$ibn:1}
W.bo.prototype={$ibo:1}
W.bp.prototype={
dT:function(a,b,c){var s=a.getContext(b,P.q8(c))
return s},
$ibp:1}
W.ax.prototype={
gm:function(a){return a.length}}
W.hJ.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cl.prototype={
gm:function(a){return a.length}}
W.hK.prototype={}
W.am.prototype={}
W.aL.prototype={}
W.hL.prototype={
gm:function(a){return a.length}}
W.hM.prototype={
gm:function(a){return a.length}}
W.hN.prototype={
gm:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.hO.prototype={
i:function(a){return String(a)}}
W.cm.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.cn.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaF(a))+" x "+H.f(this.gaC(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aX(b)
s=a.left==s.gbr(b)&&a.top==s.gbu(b)&&this.gaF(a)==s.gaF(b)&&this.gaC(a)==s.gaC(b)}else s=!1
return s},
gP:function(a){return W.mA(J.ad(a.left),J.ad(a.top),J.ad(this.gaF(a)),J.ad(this.gaC(a)))},
gd2:function(a){return a.bottom},
gaC:function(a){return a.height},
gbr:function(a){return a.left},
gcl:function(a){return a.right},
gbu:function(a){return a.top},
gaF:function(a){return a.width},
$ia7:1}
W.dT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hP.prototype={
gm:function(a){return a.length}}
W.fr.prototype={
gbp:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.i4(this)
return new J.a4(s,s.length)}}
W.D.prototype={
gh9:function(a){return new W.fz(a)},
gd3:function(a){return new W.fr(a,a.children)},
gd4:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ab()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ab()
if(p<0)p=-p*0
return new P.a7(s,r,q,p,t.q)},
i:function(a){return a.localName},
af:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lP
if(s==null){s=H.d([],t.Q)
r=new W.cL(s)
s.push(W.my(null))
s.push(W.mE())
$.lP=r
d=r}else d=s
s=$.lO
if(s==null){s=new W.hj(d)
$.lO=s
c=s}else{s.a=d
c=s}}if($.b4==null){s=document
r=s.implementation.createHTMLDocument("")
$.b4=r
$.kR=r.createRange()
r=$.b4.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.b4.head.appendChild(r)}s=$.b4
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b4
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b4.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.E(C.X,a.tagName)){$.kR.selectNodeContents(q)
s=$.kR
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b4.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b4.body)J.lC(q)
c.cn(p)
document.adoptNode(p)
return p},
hi:function(a,b,c){return this.af(a,b,c,null)},
dV:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
gdL:function(a){return a.tagName},
$iD:1}
W.hS.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
h_:function(a,b,c,d){if(c!=null)this.ej(a,b,c,!1)},
ej:function(a,b,c,d){return a.addEventListener(b,H.cc(c,1),!1)},
$ie:1}
W.ah.prototype={$iah:1}
W.bN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1,
$ibN:1}
W.dW.prototype={
gm:function(a){return a.length}}
W.dY.prototype={
gm:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.i4.prototype={
gm:function(a){return a.length}}
W.bt.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ct.prototype={$ict:1}
W.bQ.prototype={$ibQ:1}
W.bv.prototype={$ibv:1}
W.ig.prototype={
i:function(a){return String(a)}}
W.iz.prototype={
gm:function(a){return a.length}}
W.bR.prototype={$ibR:1}
W.ei.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iA(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.iA.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ej.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iB(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.iB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aB.prototype={$iaB:1}
W.ek.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ai.prototype={$iai:1}
W.a_.prototype={
gaG:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.l4("No elements"))
if(r>1)throw H.c(P.l4("More than one element"))
s=s.firstChild
s.toString
return s},
ae:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.cs(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.w.prototype={
hW:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
i_:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.ny(s,b,a)}catch(q){H.ac(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dY(a):s},
fF:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cK.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aC.prototype={
gm:function(a){return a.length},
$iaC:1}
W.ey.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.eG.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iP(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.iP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eI.prototype={
gm:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.eK.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aD.prototype={$iaD:1}
W.eL.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aE.prototype={
gm:function(a){return a.length},
$iaE:1}
W.eQ.prototype={
h:function(a,b){return a.getItem(H.lk(b))},
l:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.j_(s))
return s},
gm:function(a){return a.length},
$iH:1}
W.j_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.bc.prototype={$ibc:1}
W.cQ.prototype={
af:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
s=W.nS("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a_(r).ae(0,new W.a_(s))
return r}}
W.eU.prototype={
af:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.af(s.createElement("table"),b,c,d)
s.toString
s=new W.a_(s)
q=s.gaG(s)
q.toString
s=new W.a_(q)
p=s.gaG(s)
r.toString
p.toString
new W.a_(r).ae(0,new W.a_(p))
return r}}
W.eV.prototype={
af:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.af(s.createElement("table"),b,c,d)
s.toString
s=new W.a_(s)
q=s.gaG(s)
r.toString
q.toString
new W.a_(r).ae(0,new W.a_(q))
return r}}
W.c0.prototype={$ic0:1}
W.at.prototype={$iat:1}
W.aa.prototype={$iaa:1}
W.eY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.eZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.j3.prototype={
gm:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bA.prototype={$ibA:1}
W.f2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.j7.prototype={
gm:function(a){return a.length}}
W.aT.prototype={}
W.jo.prototype={
i:function(a){return String(a)}}
W.fl.prototype={
gm:function(a){return a.length}}
W.be.prototype={
ghm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.A("deltaY is not supported"))},
ghl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.A("deltaX is not supported"))},
$ibe:1}
W.c3.prototype={
fG:function(a,b){return a.requestAnimationFrame(H.cc(b,1))},
ex:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c4.prototype={$ic4:1}
W.fs.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d0.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aX(b)
s=a.left==s.gbr(b)&&a.top==s.gbu(b)&&a.width==s.gaF(b)&&a.height==s.gaC(b)}else s=!1
return s},
gP:function(a){return W.mA(J.ad(a.left),J.ad(a.top),J.ad(a.width),J.ad(a.height))},
gaC:function(a){return a.height},
gaF:function(a){return a.width}}
W.fH.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d5.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.h0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.h7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.fp.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gZ(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gZ:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.b(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fz.prototype={
h:function(a,b){return this.a.getAttribute(H.lk(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gZ(this).length}}
W.kT.prototype={}
W.fC.prototype={
fX:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nz(s,this.c,r,!1)}}}
W.jN.prototype={
$1:function(a){return this.a.$1(a)}}
W.l8.prototype={}
W.c5.prototype={
e7:function(a){var s
if($.d1.gbp($.d1)){for(s=0;s<262;++s)$.d1.l(0,C.W[s],W.qf())
for(s=0;s<12;++s)$.d1.l(0,C.o[s],W.qg())}},
aM:function(a){return $.nu().E(0,W.cp(a))},
ar:function(a,b,c){var s=$.d1.h(0,H.f(W.cp(a))+"::"+b)
if(s==null)s=$.d1.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaj:1}
W.L.prototype={
gO:function(a){return new W.cs(a,this.gm(a))}}
W.cL.prototype={
aM:function(a){return C.b.d_(this.a,new W.iE(a))},
ar:function(a,b,c){return C.b.d_(this.a,new W.iD(a,b,c))},
$iaj:1}
W.iE.prototype={
$1:function(a){return a.aM(this.a)}}
W.iD.prototype={
$1:function(a){return a.ar(this.a,this.b,this.c)}}
W.db.prototype={
ec:function(a,b,c,d){var s,r,q
this.a.ae(0,c)
s=b.bx(0,new W.jV())
r=b.bx(0,new W.jW())
this.b.ae(0,s)
q=this.c
q.ae(0,C.w)
q.ae(0,r)},
aM:function(a){return this.a.E(0,W.cp(a))},
ar:function(a,b,c){var s=this,r=W.cp(a),q=s.c
if(q.E(0,H.f(r)+"::"+b))return s.d.h3(c)
else if(q.E(0,"*::"+b))return s.d.h3(c)
else{q=s.b
if(q.E(0,H.f(r)+"::"+b))return!0
else if(q.E(0,"*::"+b))return!0
else if(q.E(0,H.f(r)+"::*"))return!0
else if(q.E(0,"*::*"))return!0}return!1},
$iaj:1}
W.jV.prototype={
$1:function(a){return!C.b.E(C.o,a)}}
W.jW.prototype={
$1:function(a){return C.b.E(C.o,a)}}
W.h9.prototype={
ar:function(a,b,c){if(this.e0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.E(0,b)
return!1}}
W.k0.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.h8.prototype={
aM:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cp(a)==="foreignObject")return!1
if(s)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aM(a)},
$iaj:1}
W.cs.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cg(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.aj.prototype={}
W.jU.prototype={}
W.hj.prototype={
cn:function(a){var s=this,r=new W.k8(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aZ:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lC(a)
else b.removeChild(a)},
fK:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nC(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ac(p)}r="element unprintable"
try{r=J.a3(a)}catch(p){H.ac(p)}try{q=W.cp(a)
this.fJ(a,b,n,r,q,m,l)}catch(p){if(H.ac(p) instanceof P.ae)throw p
else{this.aZ(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fJ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aZ(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aM(a)){m.aZ(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ar(a,"is",g)){m.aZ(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gZ(f)
r=H.d(s.slice(0),H.lj(s).I("v<1>"))
for(q=f.gZ(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.b(r,q)
p=r[q]
o=m.a
n=J.nF(p)
H.lk(p)
if(!o.ar(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cn(a.content)}}
W.k8.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fK(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aZ(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.l4("Corrupt HTML")
throw H.c(q)}}catch(o){H.ac(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.ft.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fX.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h4.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
P.jX.prototype={
c9:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bw:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lm(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ag)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.ji("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.c9(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.kM(a,new P.jZ(n,o))
return n.a}if(t.aH.b(a)){s=o.c9(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.hh(a,s)}if(t.eH.b(a)){s=o.c9(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.hy(a,new P.k_(n,o))
return n.b}throw H.c(P.ji("structured clone of other type"))},
hh:function(a,b){var s,r=J.aW(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.y(q)
s=0
for(;s<q;++s){o=this.bw(r.h(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.jZ.prototype={
$2:function(a,b){this.a.a[a]=this.b.bw(b)},
$S:3}
P.k_.prototype={
$2:function(a,b){this.a.b[a]=this.b.bw(b)},
$S:3}
P.kj.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jY.prototype={
hy:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dX.prototype={
gbh:function(){var s=this.b,r=H.dq(s)
return new H.aO(new H.aU(s,new P.i0(),r.I("aU<i.E>")),new P.i1(),r.I("aO<i.E,D>"))},
l:function(a,b,c){var s=this.gbh()
J.nD(s.b.$1(J.hy(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aI(this.gbh().a)},
h:function(a,b){var s=this.gbh()
return s.b.$1(J.hy(s.a,b))},
gO:function(a){var s=P.l1(this.gbh(),!1,t.h)
return new J.a4(s,s.length)}}
P.i0.prototype={
$1:function(a){return t.h.b(a)}}
P.i1.prototype={
$1:function(a){return t.h.a(a)}}
P.fW.prototype={
gcl:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
gd2:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aX(b)
if(s==r.gbr(b)){q=n.b
if(q==r.gbu(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.y(p)
o=n.$ti.c
if(o.a(s+p)===r.gcl(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.y(s)
r=o.a(q+s)===r.gd2(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.ad(q),o=r.b,n=J.ad(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.y(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.y(q)
q=C.c.gP(s.a(o+q))
return P.oI(P.jP(P.jP(P.jP(P.jP(0,p),n),m),q))}}
P.a7.prototype={
gbr:function(a){return this.a},
gbu:function(a){return this.b},
gaF:function(a){return this.c},
gaC:function(a){return this.d}}
P.aN.prototype={$iaN:1}
P.e9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.aQ.prototype={$iaQ:1}
P.es.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.iH.prototype={
gm:function(a){return a.length}}
P.bZ.prototype={$ibZ:1}
P.eS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gd3:function(a){return new P.dX(a,new W.a_(a))},
af:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.Q)
n.push(W.my(null))
n.push(W.mE())
n.push(new W.h8())
c=new W.hj(new W.cL(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hi(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a_(q)
o=n.gaG(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aR.prototype={$iaR:1}
P.f3.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fK.prototype={}
P.fL.prototype={}
P.fS.prototype={}
P.fT.prototype={}
P.h5.prototype={}
P.h6.prototype={}
P.he.prototype={}
P.hf.prototype={}
P.bd.prototype={$ik:1,$ih:1,$in:1}
P.hC.prototype={
gm:function(a){return a.length}}
P.dD.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new P.hD(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
P.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dE.prototype={
gm:function(a){return a.length}}
P.b0.prototype={}
P.et.prototype={
gm:function(a){return a.length}}
P.fq.prototype={}
P.eN.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
s=P.bi(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.h1.prototype={}
P.h2.prototype={}
K.b_.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"}}
K.e_.prototype={
aD:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aD(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.ij.prototype={}
K.a9.prototype={
aD:function(a,b){return!this.dX(0,b)},
i:function(a){return"!["+this.cr(0)+"]"}}
K.iK.prototype={
aD:function(a,b){if(typeof b!=="number")return H.y(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.ap(this.a),r=H.ap(this.b)
return s+".."+r}}
K.iQ.prototype={
e4:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
s=new H.B(t.E)
for(r=new H.b8(a,a.gm(a));r.t();){q=r.d
s.l(0,q,!0)}p=P.l1(s.gZ(s),!0,t.e)
C.b.dW(p)
this.a=p},
aD:function(a,b){return C.b.E(this.a,b)},
i:function(a){return P.eT(this.a,0,null)}}
L.eO.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.f4(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
ht:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aD(0,a))return p}return null},
i:function(a){return this.b},
cU:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.E(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gZ(l),l=l.gO(l);l.t();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.E(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f0.prototype={
i:function(a){var s=H.lx(this.b,"\n","\\n"),r=H.lx(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f1.prototype={
aE:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.j4.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eO(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
N:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.f1(a)
s.c=new H.B(t.dO)
this.b.l(0,a,s)}return s},
cm:function(a){return this.i7(a)},
i7:function(a){var s=this
return P.px(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cm(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.ci(a1,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.ht(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eT(a0,0,null)
throw H.c(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.A("removeRange"))
P.bb(0,k,a0.length)
a0.splice(0,k-0)
C.b.ae(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.E(0,n.a)?7:8
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
if(d.d!=null){g=P.eT(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f0(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.E(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oG()
case 1:return P.oH(o)}}},t.eB)},
i:function(a){var s,r=new P.S(""),q=this.d
if(q!=null)r.a=q.cU()+"\n"
for(q=this.a,q=q.gi8(q),q=q.gO(q);q.t();){s=q.gB(q)
if(s!=this.d)r.a+=s.cU()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.f4.prototype={
i:function(a){return this.b.b+": "+this.cr(0)}}
O.af.prototype={
bA:function(a){this.a=H.d([],a.I("v<0*>"))
this.c=this.b=null},
co:function(a,b,c){this.b=b
this.c=a},
bd:function(a,b){return this.co(a,null,b)},
fm:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
eK:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a4(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dq(q).I("v<af.T*>")
if(q.fm(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.eK(r,H.d([b],p))}},
$ih:1}
O.cG.prototype={
gm:function(a){return this.a.length},
gA:function(){var s=this.b
return s==null?this.b=D.Q():s},
aH:function(){var s=this.b
if(s!=null)s.J(null)},
ga_:function(a){var s=this.a
if(s.length>0)return C.b.gau(s)
else return V.eh()},
dH:function(a){var s=this.a
if(a==null)s.push(V.eh())
else s.push(a)
this.aH()},
cf:function(){var s=this.a
if(s.length>0){s.pop()
this.aH()}}}
E.hG.prototype={}
E.bs.prototype={
cB:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a4(s,s.length);s.t();){r=s.d
if(r.f==null)r.cB()}},
sac:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gA().K(0,q.gdA())
s=q.c
if(s!=null)s.gA().n(0,q.gdA())
r=new D.E("shape",p,q.c)
r.b=!0
q.ak(r)}},
sbb:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gA().K(0,q.gdC())
s=q.f
q.f=a
if(a!=null)a.gA().n(0,q.gdC())
q.cB()
r=new D.E("technique",s,q.f)
r.b=!0
q.ak(r)}},
saP:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
if(s!=null)s.gA().K(0,q.gdw())
if(a!=null)a.gA().n(0,q.gdw())
q.r=a
r=new D.E("mover",s,a)
r.b=!0
q.ak(r)}},
aw:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aU(0,b,q):null
if(!J.G(o,q.x)){s=q.x
q.x=o
r=new D.E("matrix",s,o)
r.b=!0
q.ak(r)}p=q.f
if(p!=null)p.aw(0,b)
for(p=q.y.a,p=new J.a4(p,p.length);p.t();)p.d.aw(0,b)},
aQ:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga_(q))
else o.push(p.w(0,q.ga_(q)))
q.aH()
a.dI(r.f)
q=a.dy
s=(q&&C.b).gau(q)
if(s!=null&&r.d!=null)s.hZ(a,r)
for(q=r.y.a,q=new J.a4(q,q.length);q.t();)q.d.aQ(a)
a.dG()
a.dx.cf()},
ak:function(a){var s=this.z
if(s!=null)s.J(a)},
X:function(){return this.ak(null)},
dB:function(a){this.e=null
this.ak(a)},
hM:function(){return this.dB(null)},
dD:function(a){this.ak(a)},
hN:function(){return this.dD(null)},
dz:function(a){this.ak(a)},
hL:function(){return this.dz(null)},
dv:function(a){this.ak(a)},
hI:function(){return this.dv(null)},
hH:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdu(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bM()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.X()},
hK:function(a,b){var s,r
for(s=b.gO(b),r=this.gdu();s.t();)s.gB(s).gA().K(0,r)
this.X()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bL.prototype={
i:function(a){return this.b}}
E.bW.prototype={
i:function(a){return this.b}}
E.fA.prototype={}
E.iL.prototype={
e3:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ag(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cG()
r=t.h8
s.a=H.d([],r)
s.gA().n(0,new E.iM(q))
q.cy=s
s=new O.cG()
s.a=H.d([],r)
s.gA().n(0,new E.iN(q))
q.db=s
s=new O.cG()
s.a=H.d([],r)
s.gA().n(0,new E.iO(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.B(t.h9)},
ghV:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga_(q)
s=r.db
s=r.z=q.w(0,s.ga_(s))
q=s}return q},
dI:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gau(s):a)},
dG:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iM.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iN.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iO.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f_.prototype={
cw:function(a){this.dK()},
cv:function(){return this.cw(null)},
ghz:function(){var s,r=this,q=Date.now(),p=C.c.a1(P.lN(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ag(q,!1)
return s/p},
cO:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.w()
if(typeof p!=="number")return H.y(p)
s=C.d.de(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.w()
r=C.d.de(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mf(C.n,q.gi0())}},
dK:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.ex(s)
r=W.mV(new E.j2(this),t.H)
r.toString
C.F.fG(s,r)}},
hY:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cO()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ag(p,!1)
q.y=P.lN(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aH()
p=q.db
C.b.sm(p.a,0)
p.aH()
p=q.dx
C.b.sm(p.a,0)
p.aH()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.aQ(n.e)}q=n.Q
if(q!=null)q.J(null)}catch(o){s=H.ac(o)
r=H.lt(o)
P.lw("Error: "+H.f(s))
P.lw("Stack: "+H.f(r))
throw H.c(s)}}}
E.j2.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hY()}}}
Z.fm.prototype={}
Z.dH.prototype={
bj:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ac(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.jI.prototype={}
Z.dI.prototype={
aO:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bj:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bj(a)},
dO:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aQ:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a3(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bP.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eD(this.c))+"'")+"]"}}
Z.bC.prototype={
gcq:function(a){var s=this.a,r=(s&$.bm().a)!==0?3:0
if((s&$.bl().a)!==0)r+=3
if((s&$.bk().a)!==0)r+=3
if((s&$.bH().a)!==0)r+=2
if((s&$.bI().a)!==0)r+=3
if((s&$.dw().a)!==0)r+=3
if((s&$.dx().a)!==0)r+=4
if((s&$.cf().a)!==0)++r
return(s&$.bj().a)!==0?r+4:r},
h4:function(a){var s,r=$.bm(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bH()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cf()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bj()
if((q&r.a)!==0)if(s===a)return r
return $.ns()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bC))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bm().a)!==0)s.push("Pos")
if((r&$.bl().a)!==0)s.push("Norm")
if((r&$.bk().a)!==0)s.push("Binm")
if((r&$.bH().a)!==0)s.push("Txt2D")
if((r&$.bI().a)!==0)s.push("TxtCube")
if((r&$.dw().a)!==0)s.push("Clr3")
if((r&$.dx().a)!==0)s.push("Clr4")
if((r&$.cf().a)!==0)s.push("Weight")
if((r&$.bj().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hH.prototype={}
D.bM.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
K:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.E(q,b)
if(q===!0){q=r.a
s=(q&&C.b).K(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.E(q,b)
if(q===!0){q=r.b
s=(q&&C.b).K(q,b)||s}return s},
J:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.Z()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.F(P.l1(s,!0,t.dm),new D.hY(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.F(s,new D.hZ(o))}return!0},
al:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.J(s)}}}}
D.hY.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hZ.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Z.prototype={}
D.b5.prototype={}
D.b6.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dJ.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.e7.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e7))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ia.prototype={
hS:function(a){this.d.n(0,a.a)
return!1},
hO:function(a){this.d.K(0,a.a)
return!1}}
X.cC.prototype={}
X.ih.prototype={
aX:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.w()
s=b.b
r=o.ch
if(typeof s!=="number")return s.w()
q=new V.ak(m.a+l*k,m.b+s*r)
r=o.a.gbk()
p=new X.bT(a,V.bx(),o.x,r,q)
p.b=!0
o.z=new P.ag(n,!1)
o.x=q
return p},
ce:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dU()
if(typeof s!=="number")return s.aa()
this.r=(s&~r)>>>0
return!1},
b8:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.aX(a,b))
return!0},
hT:function(a){return!1},
fb:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cC(c,p.a.gbk(),b)
q.b=!0
r.J(q)
p.y=new P.ag(s,!1)
p.x=V.bx()}}
X.bS.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bS))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bT.prototype={}
X.iC.prototype={
bI:function(a,b,c){var s=this,r=new P.ag(Date.now(),!1),q=s.a.gbk(),p=new X.bT(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
ce:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.J(this.bI(a,b,!0))
return!0},
b9:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dU()
if(typeof r!=="number")return r.aa()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.J(s.bI(a,b,!0))
return!0},
b8:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.bI(a,b,!1))
return!0},
hU:function(a,b){return!1}}
X.eB.prototype={}
X.cS.prototype={}
X.j6.prototype={
aX:function(a,b){var s=this,r=new P.ag(Date.now(),!1),q=a.length>0?a[0]:V.bx(),p=s.a.gbk(),o=new X.cS(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hR:function(a){var s=this.b
if(s==null)return!1
s.J(this.aX(a,!0))
return!0},
hP:function(a){var s=this.c
if(s==null)return!1
s.J(this.aX(a,!0))
return!0},
hQ:function(a){var s=this.d
if(s==null)return!1
s.J(this.aX(a,!1))
return!0}}
X.fi.prototype={
gbk:function(){var s=this.a,r=C.m.gd4(s).c
r.toString
s=C.m.gd4(s).d
s.toString
return V.m9(0,0,r,s)},
cF:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.e7(s,new X.bS(r,a.altKey,a.shiftKey))},
aK:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bQ:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aA:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.W()
if(typeof o!=="number")return H.y(o)
s=r.top
if(typeof p!=="number")return p.W()
if(typeof s!=="number")return H.y(s)
return new V.ak(q-o,p-s)},
aY:function(a){return new V.au(a.movementX,a.movementY)},
bM:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.am(p.pageX)
C.d.am(p.pageY)
n=k.left
if(typeof n!=="number")return H.y(n)
C.d.am(p.pageX)
m=C.d.am(p.pageY)
l=k.top
if(typeof l!=="number")return H.y(l)
j.push(new V.ak(o-n,m-l))}return j},
ay:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dJ(s,new X.bS(r,a.altKey,a.shiftKey))},
bJ:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.W()
if(typeof n!=="number")return H.y(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return H.y(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.y(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.y(p)
p=r<p}else p=!1
return p},
f5:function(a){this.f=!0},
eS:function(a){this.f=!1},
f_:function(a){if(this.f&&this.bJ(a))a.preventDefault()},
f9:function(a){var s
if(!this.f)return
s=this.cF(a)
this.b.hS(s)},
f7:function(a){var s
if(!this.f)return
s=this.cF(a)
this.b.hO(s)},
fd:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aK(a)
if(p.x){s=p.ay(a)
r=p.aY(a)
if(p.d.ce(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ay(a)
q=p.aA(a)
if(p.c.ce(s,q))a.preventDefault()},
fh:function(a){var s,r,q,p=this
p.aK(a)
s=p.ay(a)
if(p.x){r=p.aY(a)
if(p.d.b9(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.b9(s,q))a.preventDefault()},
f3:function(a){var s,r,q,p=this
if(!p.bJ(a)){p.aK(a)
s=p.ay(a)
if(p.x){r=p.aY(a)
if(p.d.b9(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.b9(s,q))a.preventDefault()}},
ff:function(a){var s,r,q,p=this
p.aK(a)
s=p.ay(a)
if(p.x){r=p.aY(a)
if(p.d.b8(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.b8(s,q))a.preventDefault()},
f1:function(a){var s,r,q,p=this
if(!p.bJ(a)){p.aK(a)
s=p.ay(a)
if(p.x){r=p.aY(a)
if(p.d.b8(s,r))a.preventDefault()
return}if(p.r)return
q=p.aA(a)
if(p.c.b8(s,q))a.preventDefault()}},
fj:function(a){var s,r,q=this
q.aK(a)
s=new V.au((a&&C.E).ghl(a),C.E.ghm(a)).w(0,q.Q)
if(q.x){if(q.d.hT(s))a.preventDefault()
return}if(q.r)return
r=q.aA(a)
if(q.c.hU(s,r))a.preventDefault()},
fl:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ay(q.y)
r=q.aA(q.y)
q.d.fb(s,r,p)}},
fB:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bQ(a)
s=r.bM(a)
if(r.e.hR(s))a.preventDefault()},
fv:function(a){var s
this.bQ(a)
s=this.bM(a)
if(this.e.hP(s))a.preventDefault()},
fz:function(a){var s
this.bQ(a)
s=this.bM(a)
if(this.e.hQ(s))a.preventDefault()}}
D.dF.prototype={$iU:1}
D.dR.prototype={$iU:1}
D.U.prototype={}
D.cx.prototype={
Y:function(a){var s=this.y
if(s!=null)s.J(a)},
cM:function(a){var s=this.z
if(s!=null)s.J(a)},
fa:function(){return this.cM(null)},
fo:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.e8(q))return!1}return!0},
eM:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcL(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bz)this.x.push(o)
n=o.go
if(n==null){n=new D.bM()
n.d=0
o.go=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.b5()
s.b=!0
this.Y(s)},
ft:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gcL();s.t();){q=s.gB(s)
C.b.K(this.e,q)
q.gA().K(0,r)}s=new D.b6()
s.b=!0
this.Y(s)},
e8:function(a){var s=C.b.E(this.x,a)
return s}}
D.eA.prototype={$iU:1}
D.bz.prototype={
Y:function(a){var s=this.go
if(s!=null)s.J(a)},
eU:function(){return this.Y(null)},
ga6:function(){return 12},
$iU:1}
V.T.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.aK.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aK))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.hW.prototype={}
V.eg.prototype={
a9:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eg))return!1
s=b.a
$.F().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.ce(H.d([o.a,o.d,o.r],n),3,0),l=V.ce(H.d([o.b,o.e,o.x],n),3,0),k=V.ce(H.d([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.b(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.b(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.b(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.b(m,1)
p=" "+m[1]+", "
if(1>=r)return H.b(l,1)
p=p+l[1]+", "
if(1>=q)return H.b(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.b(m,2)
n=" "+m[2]+", "
if(2>=r)return H.b(l,2)
n=n+l[2]+", "
if(2>=q)return H.b(k,2)
return p+(n+k[2]+"]")}}
V.b9.prototype={
a9:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dm:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.eh()
s=1/b3
r=-l
q=-a2
return V.ba((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
w:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ba(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bv:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.C(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aT:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.P(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b9))return!1
s=b.a
$.F().toString
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
i:function(a){return this.M()},
D:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.ce(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.ce(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.ce(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.ce(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.b(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.b(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.b(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.b(l,1)
o=o+l[1]+", "
if(1>=r)return H.b(k,1)
o=o+k[1]+", "
if(1>=q)return H.b(j,1)
o=o+j[1]+", "
if(1>=p)return H.b(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.b(l,2)
s=s+l[2]+", "
if(2>=r)return H.b(k,2)
s=s+k[2]+", "
if(2>=q)return H.b(j,2)
s=s+j[2]+", "
if(2>=p)return H.b(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.b(l,3)
o=o+l[3]+", "
if(3>=r)return H.b(k,3)
o=o+k[3]+", "
if(3>=q)return H.b(j,3)
o=o+j[3]+", "
if(3>=p)return H.b(i,3)
return s+(o+i[3]+"]")},
M:function(){return this.D("")}}
V.ak.prototype={
ai:function(a){return new V.au(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.P.prototype={
v:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a,b){return new V.P(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.P(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.P))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.by.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.by))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.eF.prototype={
gav:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eF))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.au.prototype={
b4:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.y(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.y(r)
return q*p+s*r},
w:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.w()
if(typeof b!=="number")return H.y(b)
s=this.b
if(typeof s!=="number")return s.w()
return new V.au(r*b,s*b)},
a4:function(a,b){var s,r
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.mo
return s==null?$.mo=new V.au(0,0):s}s=this.a
if(typeof s!=="number")return s.a4()
r=this.b
if(typeof r!=="number")return r.a4()
return new V.au(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
s=b.a
r=this.a
$.F().toString
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.y(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.y(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.C.prototype={
b4:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cd:function(a,b){return new V.C(V.hw(this.a,a.a,b),V.hw(this.b,a.b,b),V.hw(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.a8(s))
if(r===1)return s
return s.a4(0,r)},
aB:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.C(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.C(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
a4:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.cZ()
return new V.C(this.a/b,this.b/b,this.c/b)},
dn:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.d_.prototype={
b4:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d_))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
U.hI.prototype={
bB:function(a){var s=V.qv(a,this.c,this.b)
return s},
gA:function(){var s=this.y
return s==null?this.y=D.Q():s},
U:function(a){var s=this.y
if(s!=null)s.J(a)},
sdR:function(a,b){},
sdq:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bB(s)}q=new D.E("maximumLocation",q,r.b)
q.b=!0
r.U(q)}},
sds:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bB(s)}q=new D.E("minimumLocation",q,r.c)
q.b=!0
r.U(q)}},
sa2:function(a,b){var s,r=this
b=r.bB(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.E("location",s,b)
s.b=!0
r.U(s)}},
sdr:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.E("maximumVelocity",p,a)
p.b=!0
q.U(p)}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.E("velocity",r,a)
r.b=!0
s.U(r)}},
sd5:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.E("dampening",s,a)
s.b=!0
this.U(s)}},
aw:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa2(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sV(s)}}}
U.ci.prototype={
gA:function(){var s=this.b
return s==null?this.b=D.Q():s},
aU:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ci))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bO.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.Q():s},
U:function(a){var s=this.e
if(s!=null)s.J(a)},
ao:function(){return this.U(null)},
ea:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbf(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gA()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b5()
s.b=!0
this.U(s)},
fq:function(a,b){var s,r
for(s=b.gO(b),r=this.gbf();s.t();)s.gB(s).gA().K(0,r)
s=new D.b6()
s.b=!0
this.U(s)},
aU:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ab()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a4(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.aU(0,b,c)
if(r!=null)s=s==null?r:r.w(0,s)}}q.f=s==null?V.eh():s
p=q.e
if(p!=null)p.al(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bO))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.G(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$ia6:1}
U.a6.prototype={}
U.cY.prototype={
gA:function(){var s=this.fx
return s==null?this.fx=D.Q():s},
U:function(a){var s=this.fx
if(s!=null)s.J(a)},
ao:function(){return this.U(null)},
h5:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.Q():r
s.n(0,q.geE())
s=q.a.c
r=s.d
s=r==null?s.d=D.Q():r
s.n(0,q.geG())
s=q.a.c
r=s.c
s=r==null?s.c=D.Q():r
s.n(0,q.geI())
s=q.a.d
r=s.f
s=r==null?s.f=D.Q():r
s.n(0,q.gez())
s=q.a.d
r=s.d
s=r==null?s.d=D.Q():r
s.n(0,q.geB())
s=q.a.e
r=s.b
s=r==null?s.b=D.Q():r
s.n(0,q.gfV())
s=q.a.e
r=s.d
s=r==null?s.d=D.Q():r
s.n(0,q.gfT())
s=q.a.e
r=s.c
s=r==null?s.c=D.Q():r
s.n(0,q.gfR())
return!0},
aq:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.R()
s=-s}if(this.r){if(typeof r!=="number")return r.R()
r=-r}return new V.au(s,r)},
eF:function(a){var s=this
t.c.a(a)
if(!J.G(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eH:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ai(a.d)
s=s.a8(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.ai(a.d).w(0,2).a4(0,s.gav()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.y(q)
r.sV(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.y(r)
q.sV(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.ai(q).w(0,2).a4(0,s.gav()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aq(a.z.ai(q).w(0,2).a4(0,s.gav()))}l.ao()},
eJ:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a8(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.y(q)
s.sV(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.y(s)
q.sV(-r*10*s)
p.ao()}},
eA:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eC:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.G(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aq(r.ai(q).w(0,2).a4(0,s.gav()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aq(a.z.ai(q).w(0,2).a4(0,s.gav()))
l.ao()},
fW:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fU:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ai(a.d)
s=s.a8(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.ai(a.d).w(0,2).a4(0,s.gav()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.y(q)
r.sV(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.y(r)
q.sV(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.ai(q).w(0,2).a4(0,s.gav()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aq(a.z.ai(q).w(0,2).a4(0,s.gav()))}l.ao()},
fS:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a8(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.y(q)
s.sV(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.y(s)
q.sV(-r*10*s)
p.ao()}},
aU:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ab()
if(o<n){p.dy=n
s=b.y
p.c.aw(0,s)
p.b.aw(0,s)
o=V.lV(p.b.d)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.w(0,V.ba(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia6:1}
M.dU.prototype={
ax:function(a){var s=this.y
if(s!=null)s.J(a)},
eb:function(){return this.ax(null)},
eW:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gap(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bM()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b5()
s.b=!0
this.ax(s)},
eY:function(a,b){var s,r
for(s=b.gO(b),r=this.gap();s.t();)s.gB(s).gA().K(0,r)
s=new D.b6()
s.b=!0
this.ax(s)},
sbb:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gA().K(0,r.gap())
s=r.d
r.d=a
if(a!=null)a.gA().n(0,r.gap())
q=new D.E("technique",s,r.d)
q.b=!0
r.ax(q)}},
gA:function(){var s=this.y
return s==null?this.y=D.Q():s},
aQ:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.dI(a3.d)
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
if(typeof q!=="number")return H.y(q)
m=C.d.am(n*q)
n=o.b
if(typeof p!=="number")return H.y(p)
l=C.d.am(n*p)
n=C.d.am(o.c*q)
a4.c=n
o=C.d.am(o.d*p)
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
g=V.ba(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.dH(g)
r=$.m_
if(r==null){r=V.m1()
o=V.ms()
n=$.mp
f=(n==null?$.mp=new V.C(0,0,-1):n).G()
e=o.aB(f).G()
d=f.aB(e)
c=new V.C(r.a,r.b,r.c)
b=e.R(0).a8(c)
a=d.R(0).a8(c)
a0=f.R(0).a8(c)
r=V.ba(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.m_=r
a1=r}else a1=r
r=s.b
if(r!=null){a2=r.aU(0,a4,s)
if(a2!=null)a1=a2.w(0,a1)}a4.db.dH(a1)
s=a3.d
if(s!=null)s.aw(0,a4)
for(s=a3.e.a,s=new J.a4(s,s.length);s.t();)s.d.aw(0,a4)
for(s=a3.e.a,s=new J.a4(s,s.length);s.t();)s.d.aQ(a4)
a3.b.toString
a4.cy.cf()
a4.db.cf()
a3.c.toString
a4.dG()}}
A.dC.prototype={}
A.hB.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hp:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
ho:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a5.prototype={
gan:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a5))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.ed.prototype={
e2:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
c4.z=c9
s=new P.S("")
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
A.pM(c9,s)
A.pO(c9,s)
A.pN(c9,s)
A.pQ(c9,s)
A.pR(c9,s)
A.pP(c9,s)
A.pS(c9,s)
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
k=A.pL(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cG(l,35633)
c4.f=c4.cG(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.u("Failed to link shader: "+H.f(j)))}c4.fN()
c4.fP()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.S(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.S(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.S(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.S(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.S(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.S(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.S(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.S(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.bm
if(q>0){c4.k4=c4.y.S(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.u(c6+n+c7))
p.push(r.a(h))}}if(c9.a.a)c4.r2=t.r.a(c4.y.S(0,"emissionClr"))
if(c9.b.a)c4.x1=t.r.a(c4.y.S(0,"ambientClr"))
if(c9.c.a)c4.y2=t.r.a(c4.y.S(0,"diffuseClr"))
if(c9.d.a)c4.bn=t.r.a(c4.y.S(0,"invDiffuseClr"))
r=c9.e.a
if(!r)q=!1
else q=!0
if(q){c4.d7=t.n.a(c4.y.S(0,"shininess"))
if(r)c4.d6=t.r.a(c4.y.S(0,"specularClr"))}if(c9.db){c4.d8=t.p.a(c4.y.S(0,"envSampler"))
if(c9.r.a)c4.d9=t.r.a(c4.y.S(0,"reflectClr"))
r=c9.x.a
if(!r)q=!1
else q=!0
if(q){c4.da=t.n.a(c4.y.S(0,"refraction"))
if(r)c4.dc=t.r.a(c4.y.S(0,"refractClr"))}}if(c9.y.a)c4.dd=t.n.a(c4.y.S(0,"alpha"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.c1=new H.B(t.J)
c4.c2=new H.B(t.en)
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
if(typeof e!=="number")return e.aa()
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
a7=a6}c.push(new A.cT(h,a0,a1,a7,a6,a5))}c4.c2.l(0,e,c)
m=c4.c1
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.c3=new H.B(t.J)
c4.c4=new H.B(t.af)
for(p=t.r,o=t.v,n=t.dv,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.aa()
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
c.push(new A.cU(b1,b0,a9,h,a0,b2))}c4.c4.l(0,e,c)
m=c4.c3
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.c5=new H.B(t.J)
c4.c6=new H.B(t.gr)
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
if(typeof e!=="number")return e.aa()
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
a7=a6}c.push(new A.cW(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.c6.l(0,e,c)
a8=c4.c5
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
a8.l(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.c7=new H.B(t.J)
c4.c8=new H.B(t.bR)
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
if(typeof e!=="number")return e.aa()
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
c.push(new A.cX(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.c8.l(0,e,c)
a=c4.c7
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
a.l(0,e,h)}}}},
fL:function(a,b){}}
A.dG.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dS.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eC.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eM.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.im.prototype={
i:function(a){return this.b2}}
A.cT.prototype={}
A.cU.prototype={}
A.cW.prototype={}
A.cX.prototype={}
A.cN.prototype={
e5:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cG:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
fN:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dC(n,r.name,q))}p.x=new A.hB(o)},
fP:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hj(r.type,r.size,r.name,q))}p.y=new A.jg(o)},
aJ:function(a,b,c){var s=this.a
if(a===1)return new A.f7(s,b,c)
else return A.l6(s,this.r,b,a,c)},
eu:function(a,b,c){var s=this.a
if(a===1)return new A.fb(s,b,c)
else return A.l6(s,this.r,b,a,c)},
ev:function(a,b,c){var s=this.a
if(a===1)return new A.fc(s,b,c)
else return A.l6(s,this.r,b,a,c)},
bi:function(a,b){return new P.fD(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hj:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aJ(b,c,d)
case 5121:return s.aJ(b,c,d)
case 5122:return s.aJ(b,c,d)
case 5123:return s.aJ(b,c,d)
case 5124:return s.aJ(b,c,d)
case 5125:return s.aJ(b,c,d)
case 5126:return new A.f6(s.a,c,d)
case 35664:return new A.jc(s.a,c,d)
case 35665:return new A.f8(s.a,c,d)
case 35666:return new A.f9(s.a,c,d)
case 35667:return new A.jd(s.a,c,d)
case 35668:return new A.je(s.a,c,d)
case 35669:return new A.jf(s.a,c,d)
case 35674:return new A.jh(s.a,c,d)
case 35675:return new A.fa(s.a,c,d)
case 35676:return new A.cV(s.a,c,d)
case 35678:return s.eu(b,c,d)
case 35680:return s.ev(b,c,d)
case 35670:throw H.c(s.bi("BOOL",c))
case 35671:throw H.c(s.bi("BOOL_VEC2",c))
case 35672:throw H.c(s.bi("BOOL_VEC3",c))
case 35673:throw H.c(s.bi("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.f5.prototype={}
A.jg.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
S:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.f7.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.je.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.f6.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.f8.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.f9.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fa.prototype={
aj:function(a){var s=new Float32Array(H.c8(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.cV.prototype={
aj:function(a){var s=new Float32Array(H.c8(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fb.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fc.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ka.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cd(q.b,b).cd(q.d.cd(q.c,b),c)
a.sa2(0,new V.P(p.a,p.b,p.c))
a.sdM(p.G())
q=1-b
s=1-c
a.sd0(new V.by(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kk.prototype={
$2:function(a,b){return V.hw(this.a,this.b,b)}}
F.km.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hw(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.y(n)
q=-q*n
s=p*n
a.sa2(0,new V.P(q,s,o))
a.sdM(new V.C(q,s,o).G())
a.sd0(new V.by(1-c,2+c,-1,-1))}}
F.kn.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.ko.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kH.prototype={
$2:function(a,b){return 0}}
F.kI.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.y(r)
s=a.f
r=new V.C(s.a,s.b,s.c).G().w(0,this.b+r)
a.sa2(0,new V.P(r.a,r.b,r.c))}}
F.kJ.prototype={
$1:function(a){return new V.P(Math.cos(a),Math.sin(a),0)}}
F.kx.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.P(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kl.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lB(l.$1(m),k)
k=J.lB(l.$1(m+3.141592653589793/n.c),k).W(0,j)
s=new V.C(k.a,k.b,k.c).G()
l=$.mq
if(l==null){l=new V.C(1,0,0)
$.mq=l
r=l}else r=l
q=s.aB(!J.G(s,r)?V.mt():r).G()
r=q.aB(s).G()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.w(0,l*k)
k=q.w(0,o*k)
a.sa2(0,j.v(0,new V.P(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.dV.prototype={
b0:function(){var s=this
if(!s.gb1()){C.b.K(s.a.a.d.b,s)
s.a.a.X()}s.bN()
s.bO()
s.fE()},
bR:function(a){this.a=a
a.d.b.push(this)},
bS:function(a){this.b=a
a.d.c.push(this)},
fM:function(a){this.c=a
a.d.d.push(this)},
bN:function(){var s=this.a
if(s!=null){C.b.K(s.d.b,this)
this.a=null}},
bO:function(){var s=this.b
if(s!=null){C.b.K(s.d.c,this)
this.b=null}},
fE:function(){var s=this.c
if(s!=null){C.b.K(s.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
em:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cZ()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dn())return p
return q.G()},
eo:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.W(0,n)
q=new V.C(o.a,o.b,o.c).G()
o=r.W(0,n)
return q.aB(new V.C(o.a,o.b,o.c).G()).G()},
bY:function(){var s,r=this
if(r.d!=null)return!0
s=r.em()
if(s==null){s=r.eo()
if(s==null)return!1}r.d=s
r.a.a.X()
return!0},
el:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cZ()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dn())return p
return q.G()},
en:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.W(0,e)
o=new V.C(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.R(0)}else{n=(j-s.b)/p
j=b.W(0,e).w(0,n).v(0,e).W(0,h)
o=new V.C(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.R(0)}j=l.d
if(j!=null){m=j.G()
o=m.aB(o).G().aB(m).G()}return o},
bW:function(){var s,r=this
if(r.e!=null)return!0
s=r.el()
if(s==null){s=r.en()
if(s==null)return!1}r.e=s
r.a.a.X()
return!0},
ghd:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var s,r,q=this
if(q.gb1())return a+"disposed"
s=a+C.a.ah(J.a3(q.a.e),0)+", "+C.a.ah(J.a3(q.b.e),0)+", "+C.a.ah(J.a3(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
M:function(){return this.D("")}}
F.i_.prototype={}
F.iZ.prototype={
b6:function(a,b,c){var s,r=b.a
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
if(r==s.e){r=b.c
r.a.a.u()
r=r.e
s=c.c
s.a.a.u()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.c
s.a.a.u()
if(r==s.e){r=b.c
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.u()
r=r.e
s=c.c
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
if(r==s.e){r=b.c
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.ea.prototype={
b0:function(){var s=this
if(!s.gb1()){C.b.K(s.a.a.c.b,s)
s.a.a.X()}s.bN()
s.bO()},
bR:function(a){this.a=a
a.c.b.push(this)},
bS:function(a){this.b=a
a.c.c.push(this)},
bN:function(){var s=this.a
if(s!=null){C.b.K(s.c.b,this)
this.a=null}},
bO:function(){var s=this.b
if(s!=null){C.b.K(s.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){if(this.gb1())return a+"disposed"
return a+C.a.ah(J.a3(this.a.e),0)+", "+C.a.ah(J.a3(this.b.e),0)},
M:function(){return this.D("")}}
F.ib.prototype={}
F.ja.prototype={
b6:function(a,b,c){var s,r=b.a
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
return r==s.e}else{r=b.a
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
return r==s.e}else return!1}}}
F.ez.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ah(J.a3(s.e),0)},
M:function(){return this.D("")}}
F.iR.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.Q():s},
b7:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.u()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hg())}f.a.u()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.ez()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.J(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.o1(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cq(j,i,g)}e=f.e
if(e!=null)e.al(0)},
as:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.as()||!1
if(!r.a.as())s=!1
q=r.e
if(q!=null)q.al(0)
return s},
hE:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.lj(m).I("v<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghu(s)
C.b.ci(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(o!=null&&a.b6(0,r,o)){q.push(o)
C.b.ci(s,p)}}if(q.length>1)b.b7(q)}}n.a.u()
n.c.cj()
n.d.cj()
n.b.hX()
n.c.ck(new F.ja())
n.d.ck(new F.iZ())
m=n.e
if(m!=null)m.al(0)},
bV:function(){this.hE(new F.jC(),new F.iF())},
ca:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.ca()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.b(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdt(new V.C(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.C(-o.a,-o.b,-o.c).G()
if(!J.G(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.al(0)},
hb:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bm().a)!==0?1:0
if((s&$.bl().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bH().a)!==0)++r
if((s&$.bI().a)!==0)++r
if((s&$.dw().a)!==0)++r
if((s&$.dx().a)!==0)++r
if((s&$.cf().a)!==0)++r
if((s&$.bj().a)!==0)++r
q=a6.gcq(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.h4(k)
i=j.gcq(j)
if(k>=m)return H.b(n,k)
n[k]=new Z.dH(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.b(g,h)
f=g[h].hD(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.b(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.c8(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dI(new Z.fm(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)}a1=Z.l7(s,34963,a0)
a.b.push(new Z.bP(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.u()
a0.push(m.e)}a1=Z.l7(s,34963,a0)
a.b.push(new Z.bP(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.u()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].c
m.a.a.u()
a0.push(m.e)}a1=Z.l7(s,34963,a0)
a.b.push(new Z.bP(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.D(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.D(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.D(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.D(r))}return C.b.j(q,"\n")},
X:function(){var s=this.e
if(s!=null)s.J(null)}}
F.iS.prototype={
h0:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.b(a,p)
p=a[p]
if(q>=o)return H.b(a,q)
o=a[q]
r.a.n(0,s)
r.a.n(0,p)
r.a.n(0,o)
n.push(F.cq(s,p,o))}}return n},
h1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.b(c,q)
k=c[q];++q
if(q>=l)return H.b(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.b(c,i)
h=c[i]
if(r<0||r>=l)return H.b(c,r)
g=c[r]
l=s.a
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.cq(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cq(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cq(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cq(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
ck:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b6(0,n,l)){n.b0()
break}}}}},
cj:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.ghd(q)
if(r)q.b0()}},
as:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bY())q=!1
return q},
bX:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bW())q=!1
return q},
ca:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.C(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.C(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.J(null)}},
i:function(a){return this.M()},
D:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(a))
return C.b.j(p,"\n")},
M:function(){return this.D("")}}
F.iT.prototype={
gm:function(a){return this.b.length},
ck:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b6(0,n,l)){n.b0()
break}}}}},
cj:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=J.G(q.a,q.b)
if(r)q.b0()}},
i:function(a){return this.M()},
D:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].D(a+(""+s+". ")))}return C.b.j(q,"\n")},
M:function(){return this.D("")}}
F.iU.prototype={
gm:function(a){return this.b.length},
hX:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.K(q.b.b,r)
q=r.a.a.e
if(q!=null)q.J(null)
q=r.a
if(q!=null){C.b.K(q.b.b,r)
r.a=null}}}},
i:function(a){return this.M()},
D:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(a))
return C.b.j(p,"\n")},
M:function(){return this.D("")}}
F.fj.prototype={
c0:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fk(s.cx,p,m,r,q,o,n,a,l)},
hg:function(){return this.c0(null)},
sa2:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.X()}},
sdt:function(a){var s
a=a==null?null:a.G()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.X()}},
sdM:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.X()}},
sd0:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.X()}},
hD:function(a){var s,r,q=this
if(a.p(0,$.bm())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bl())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bk())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bH())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.p(0,$.bI())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dw())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dx())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.p(0,$.cf()))return H.d([q.ch],t.m)
else if(a.p(0,$.bj())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
bY:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cZ()
r.d.F(0,new F.jH(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.X()
q=r.a.e
if(q!=null)q.al(0)}return!0},
bW:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cZ()
r.d.F(0,new F.jG(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.X()
q=r.a.e
if(q!=null)q.al(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ah(J.a3(q.e),0))
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
o.push(V.I(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
M:function(){return this.D("")}}
F.jH.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jG.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jx.prototype={
u:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.X()
return!0},
h2:function(a,b,c,d,e,f){var s=F.fk(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
as:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bY()
return!0},
bX:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bW()
return!0},
hc:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.G(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}return!0},
i:function(a){return this.M()},
D:function(a){var s,r,q,p
this.u()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].D(a))
return C.b.j(s,"\n")},
M:function(){return this.D("")}}
F.jy.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.b(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.b(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.b(r,b)
return r[b]},
F:function(a,b){var s=this
C.b.F(s.b,b)
C.b.F(s.c,new F.jz(s,b))
C.b.F(s.d,new F.jA(s,b))},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.b.j(p,"\n")}}
F.jz.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.jA.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)}}
F.jB.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.b(r,s)
return r[s]}else{if(b<0)return H.b(r,b)
return r[b]}},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.b.j(p,"\n")}}
F.jD.prototype={}
F.jC.prototype={
b6:function(a,b,c){return J.G(b.f,c.f)}}
F.jE.prototype={}
F.iF.prototype={
b7:function(a){var s,r,q,p=V.cZ()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.C(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.G()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdt(p)
return null}}
F.jF.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.b.j(p,"\n")}}
O.ee.prototype={
gA:function(){var s=this.fr
return s==null?this.fr=D.Q():s},
ad:function(a){var s=this.fr
if(s!=null)s.J(a)},
ee:function(){return this.ad(null)},
cN:function(a){this.a=null
this.ad(a)},
fI:function(){return this.cN(null)},
eO:function(a,b){var s=new D.b5()
s.b=!0
this.ad(s)},
eQ:function(a,b){var s=new D.b6()
s.b=!0
this.ad(s)},
cE:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.B(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga6()
n=d.h(0,p.ga6())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.F(0,new O.ir(f,m))
C.b.aV(m,new O.is())
l=new H.B(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga6()
n=l.h(0,p.ga6())
l.l(0,o,n==null?1:n)}k=H.d([],t.M)
l.F(0,new O.it(f,k))
C.b.aV(k,new O.iu())
j=new H.B(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga6()
n=j.h(0,p.ga6())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.F(0,new O.iv(f,i))
C.b.aV(i,new O.iw())
h=new H.B(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.ga6()
o=h.h(0,p.ga6())
h.l(0,r,o==null?1:o)}g=H.d([],t.cz)
h.F(0,new O.ix(f,g))
C.b.aV(g,new O.iy())
e=C.c.a1(f.e.a.length+3,4)
f.dy.toString
return A.o8(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ek:function(a,b){},
aw:function(a,b){var s,r,q,p
for(s=this.dx.a,s=new J.a4(s,s.length);s.t();){r=s.d
r.toString
q=$.ao
r.a=q==null?$.ao=new V.P(0,0,0):q
q=$.jw
r.b=q==null?$.jw=new V.C(0,0,1):q
q=$.jv
r.c=q==null?$.jv=new V.C(0,1,0):q
q=$.ju
r.d=q==null?$.ju=new V.C(-1,0,0):q
q=r.f
if(q!=null){p=q.aU(0,b,r)
if(p!=null){r.a=p.aT(r.a)
r.b=p.bv(r.b).G()
r.c=p.bv(r.c).G()
r.d=p.bv(r.d).G()}}}},
hZ:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cE()
s=b6.fr.h(0,b5.b2)
if(s==null){s=A.o7(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.u("May not cache a shader with no name."))
if(b6.fr.bZ(0,r))H.q(P.u('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.l(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bn
b5=b7.e
if(!(b5 instanceof Z.dI))b5=b7.e=null
if(b5==null||!b5.d.p(0,p)){b5=q.k4
if(b5)b7.d.as()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bX()
n.a.bX()
n=n.e
if(n!=null)n.al(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.hc()
m=m.e
if(m!=null)m.al(0)}k=b7.d.hb(new Z.jI(b6.a),p)
k.aO($.bm()).e=b4.a.Q.c
if(b5)k.aO($.bl()).e=b4.a.cx.c
if(o)k.aO($.bk()).e=b4.a.ch.c
if(q.r2)k.aO($.bH()).e=b4.a.cy.c
if(n)k.aO($.bI()).e=b4.a.db.c
if(q.ry)k.aO($.bj()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.hp()
if(q.fr){b5=b4.a
n=b6.dx
n=n.ga_(n)
b5=b5.dy
b5.toString
b5.aj(n.a9(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.ga_(n)
m=b6.dx
m=b6.cx=n.w(0,m.ga_(m))
n=m}b5=b5.fr
b5.toString
b5.aj(n.a9(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.ghV()
m=b6.dx
m=b6.ch=n.w(0,m.ga_(m))
n=m}b5=b5.fy
b5.toString
b5.aj(n.a9(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.ga_(n)
b5=b5.fx
b5.toString
b5.aj(n.a9(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.aj(C.i.a9(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.aj(C.i.a9(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.aj(C.i.a9(n,!0))}if(q.bm>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.b(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.b(b5,h)
b5=b5[h]
g=new Float32Array(H.c8(n.a9(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}if(q.a.a){b5=b4.a
n=b4.f.f
b5=b5.r2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.k1){if(q.b.a){b5=b4.a
n=b4.r.f
b5=b5.x1
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.c.a){b5=b4.a
n=b4.x.f
b5=b5.y2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.d.a){b5=b4.a
n=b4.y.f
b5=b5.bn
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.e.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.z.ch
n=n.d7
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.z.f
b5=b5.d6
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.z
if(b5.length>0){f=new H.B(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=f.h(0,c)
if(b==null)b=0
f.l(0,c,b+1)
a=J.cg(b4.a.c2.h(0,c),b)
l=d.gic()
a0=$.ao
l=l.aT(a0==null?$.ao=new V.P(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gie()
a0=$.ao
l=l.aT(a0==null?$.ao=new V.P(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gat(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.ghq()){l=d.gh6()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gh7()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gh8()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.c1.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a2=new H.B(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=a2.h(0,c)
if(b==null)b=0
a2.l(0,c,b+1)
a=J.cg(b4.a.c4.h(0,c),b)
l=a1.bv(d.ghn(d)).G()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.gat(d)
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)
d.gaS()
l=d.ghn(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giw()
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcl(d)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaS()
if(!C.b.E(j,l)){l.sb3(0,j.length)
j.push(l)}l=d.gaS()
a0=l.gb5(l)
if(a0){a0=a.r
a0.toString
a3=l.gb5(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gb3(l))}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.c3.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a5=new H.B(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=a5.h(0,c)
if(b==null)b=0
a5.l(0,c,b+1)
a=J.cg(b4.a.c6.h(0,c),b)
a6=a1.w(0,d.ga_(d))
l=d.ga_(d)
a0=$.ao
l=l.aT(a0==null?$.ao=new V.P(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.ao
l=a6.aT(l==null?$.ao=new V.P(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gat(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaS()
l=a6.dm(0)
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
g=new Float32Array(H.c8(new V.eg(a0,a3,a4,a7,a8,a9,b0,b1,l).a9(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gaS()
l=d.gaS()
if(!C.b.E(j,l)){l.sb3(0,j.length)
j.push(l)}l=d.gaS()
a0=l.gb5(l)
if(a0){a0=a.f
a0.toString
a3=l.gb5(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gb3(l))}d.gcp()
l=d.gib()
a0=a.x
a0.a.uniform4f(a0.d,l.a,l.b,l.c,l.d)
l=d.gcp()
if(!C.b.E(j,l)){l.sb3(0,j.length)
j.push(l)}l=d.gcp()
a0=l.gb5(l)
if(a0){a0=a.r
a0.toString
a3=l.gb5(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gb3(l))}if(d.ghq()){l=d.gh6()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gh7()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gh8()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.c5.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.ga_(n)
b3=new H.B(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=b3.h(0,c)
if(b==null)b=0
b3.l(0,c,b+1)
a=J.cg(b4.a.c8.h(0,c),b)
l=d.a
a0=a.b
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.b.G()
a4=a.c
a3=l.a
a0=l.b
l=l.c
a4.a.uniform3f(a4.d,a3,a0,l)
l=a1.aT(d.a)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.r
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.cy
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.dx
a0=a.ch
a0.a.uniform1f(a0.d,l)
l=d.dy
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.fr
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.fx
a0=a.db
a0.a.uniform1f(a0.d,l)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.c7.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.ga_(n).dm(0)}b5=b5.id
b5.toString
b5.aj(n.a9(0,!0))}if(q.db){b4.ek(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fL(b5.d8,n)
if(q.r.a){b5=b4.a
n=b4.cx.f
b5=b5.d9
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.x.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.cy.ch
n=n.da
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.cy.f
b5=b5.dc
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}}b5=q.y.a
n=!b5
if(n)m=!1
else m=!0
if(m){if(b5){b5=b4.a
m=b4.db.f
b5=b5.dd
b5.a.uniform1f(b5.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bj(b6)
b5=b7.e
b5.bj(b6)
b5.aQ(b6)
b5.dO(b6)
if(n)b5=!1
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h)j[h].dO(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.ho()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cE().b2}}
O.ir.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dG(a,C.c.a1(b+3,4)*4))}}
O.is.prototype={
$2:function(a,b){return J.dy(a.a,b.a)}}
O.it.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dS(a,C.c.a1(b+3,4)*4))}}
O.iu.prototype={
$2:function(a,b){return J.dy(a.a,b.a)}}
O.iv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eC(a,C.c.a1(b+3,4)*4))}}
O.iw.prototype={
$2:function(a,b){return J.dy(a.a,b.a)}}
O.ix.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eM(a,C.c.a1(b+3,4)*4))}}
O.iy.prototype={
$2:function(a,b){return J.dy(a.a,b.a)}}
O.ik.prototype={
az:function(){var s,r=this
r.cs()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.E(r.b,s,1)
s.b=!0
r.a.ad(s)}}}
O.ef.prototype={
az:function(){},
cQ:function(a){var s,r,q=this
if(!q.c.p(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.az()
s=q.a
s.a=null
s.ad(null)}}}
O.il.prototype={}
O.aP.prototype={
cP:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.E(q.b+".color",s,a)
r.b=!0
q.a.ad(r)}},
az:function(){this.cs()
this.cP(new V.T(1,1,1))},
sat:function(a,b){this.cQ(new A.a5(!0,!1,!1))
this.cP(b)}}
O.io.prototype={}
O.ip.prototype={
az:function(){var s,r=this
r.ct()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.E(r.b+".refraction",s,1)
s.b=!0
r.a.ad(s)}}}
O.iq.prototype={
cR:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.E(s.b+".shininess",r,a)
r.b=!0
s.a.ad(r)}},
az:function(){this.ct()
this.cR(100)}}
O.eX.prototype={}
T.j1.prototype={}
X.kP.prototype={}
X.i3.prototype={
gA:function(){var s=this.x
return s==null?this.x=D.Q():s}}
X.ev.prototype={
gA:function(){var s=this.f
return s==null?this.f=D.Q():s},
aI:function(a){var s=this.f
if(s!=null)s.J(a)},
eh:function(){return this.aI(null)},
saP:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gA().K(0,q.gcz())
r=q.b
q.b=a
if(a!=null)a.gA().n(0,q.gcz())
s=new D.E("mover",r,q.b)
s.b=!0
q.aI(s)}}}
X.j0.prototype={}
V.b1.prototype={
be:function(a){this.b=new P.i5(C.T)
this.c=null
this.d=H.d([],t.u)},
L:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.d([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.d([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.es(o,0,o.length)
l=m==null?o:m
C.R.dV(n,H.lx(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gau(k.d).push(n)}},
dE:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bl()
r.toString
q=new H.p(s)
q=new P.bD(r.cm(new H.b8(q,q.gm(q))).a())
for(;q.t();)p.bt(q.gB(q))}}
V.kG.prototype={
$1:function(a){var s=C.d.dN(this.a.ghz(),2)
if(s!=="0.00")P.lw(s+" fps")}}
V.dP.prototype={
bt:function(a){var s=this
switch(a.a){case"Class":s.L(a.b,"#551")
break
case"Comment":s.L(a.b,"#777")
break
case"Id":s.L(a.b,"#111")
break
case"Num":s.L(a.b,"#191")
break
case"Reserved":s.L(a.b,"#119")
break
case"String":s.L(a.b,"#171")
break
case"Symbol":s.L(a.b,"#616")
break
case"Type":s.L(a.b,"#B11")
break
case"Whitespace":s.L(a.b,"#111")
break}},
bl:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.j5()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.O("a","z")
s.a.push(r)
r=K.O("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.O("0","9")
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.O("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.O("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.O("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.O("0","9")
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
a3.k(0,i).j(0,i).a.push(new K.b_())
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
a3.k(0,f).j(0,f).a.push(new K.b_())
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
r.d=r.a.N("Num")
r=a3.k(0,l)
r.d=r.a.N("Num")
r=a3.k(0,k)
r.d=r.a.N("Symbol")
r=a3.k(0,h)
r.d=r.a.N("String")
r=a3.k(0,e)
r.d=r.a.N("String")
r=a3.k(0,a)
r.d=r.a.N(b)
r=a3.k(0,a2)
r.d=r.a.N(a2)
r=a3.k(0,o)
r=r.d=r.a.N(o)
s=t.i
r.aE(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aE(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aE(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.dZ.prototype={
bt:function(a){var s=this
switch(a.a){case"Builtin":s.L(a.b,"#411")
break
case"Comment":s.L(a.b,"#777")
break
case"Id":s.L(a.b,"#111")
break
case"Num":s.L(a.b,"#191")
break
case"Preprocess":s.L(a.b,"#737")
break
case"Reserved":s.L(a.b,"#119")
break
case"Symbol":s.L(a.b,"#611")
break
case"Type":s.L(a.b,"#171")
break
case"Whitespace":s.L(a.b,"#111")
break}},
bl:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.j5()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.O("a","z")
s.a.push(r)
r=K.O("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.O("0","9")
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.O("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.O("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.O("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.O("0","9")
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
c.k(0,i).j(0,k).a.push(new K.b_())
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
s.d=s.a.N("Num")
s=c.k(0,l)
s.d=s.a.N("Num")
s=c.k(0,k)
s.d=s.a.N("Symbol")
s=c.k(0,g)
s.d=s.a.N(h)
s=c.k(0,e)
s.d=s.a.N(f)
s=c.k(0,d)
s.d=s.a.N(d)
s=c.k(0,o)
s=s.d=s.a.N(o)
r=t.i
s.aE(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aE(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aE(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e0.prototype={
bt:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.L(a.b,"#911")
s.L("=",r)
break
case"Id":s.L(a.b,r)
break
case"Other":s.L(a.b,r)
break
case"Reserved":s.L(a.b,"#119")
break
case"String":s.L(a.b,"#171")
break
case"Symbol":s.L(a.b,"#616")
break}},
bl:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.j5()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.O("a","z")
s.a.push(r)
r=K.O("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.O("0","9")
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
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
j.k(0,m).j(0,m).a.push(new K.b_())
j.k(0,q).j(0,k).a.push(new K.b_())
s=j.k(0,k).j(0,k)
r=new K.a9()
r.a=H.d([],t.B)
s.a.push(r)
s=K.t(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.N("Symbol")
s=j.k(0,l)
s.d=s.a.N("String")
s=j.k(0,p)
r=s.a.N(p)
s.d=r
r.aE(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.N(o)
r=j.k(0,k)
r.d=r.a.N(k)
return j}}
V.ex.prototype={
dE:function(a,b){this.d=H.d([],t.u)
this.L(C.b.j(b,"\n"),"#111")},
bt:function(a){},
bl:function(){return null}}
V.iI.prototype={
cX:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mj().gcg().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.cW(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.kN(k.c).n(0,o)
m=W.nV("radio")
m.checked=q
m.name=s
W.a0(m,"change",new V.iJ(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.kN(k.c).n(0,p.createElement("br"))},
b_:function(a,b,c){return this.cX(a,b,c,!1)},
cW:function(a){var s,r,q=P.mj(),p=t.X,o=P.o4(q.gcg(),p,p)
o.l(0,this.a,a)
s=q.dJ(0,o)
p=window.history
r=s.gbT()
p.toString
p.replaceState(new P.jY([],[]).bw(""),"",r)}}
V.iJ.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.cW(s.d)}}}
V.iV.prototype={
e6:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a0(o,"scroll",new V.iX(m),!1)},
cZ:function(a){var s,r,q,p,o,n,m,l
this.fO()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hC(a)
q.toString
p=new H.p(p)
p=new P.bD(q.cm(new H.b8(p,p.gm(p))).a())
for(;p.t();){q=p.gB(p)
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
if(H.n8(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.b(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.k5(C.x,q,C.e,!1)
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
dS:function(a){var s,r,q,p=new V.dP("dart")
p.be("dart")
s=new V.dZ("glsl")
s.be("glsl")
r=new V.e0("html")
r.be("html")
q=C.b.hv(H.d([p,s,r],t.b7),new V.iY(a))
if(q!=null)return q
p=new V.ex("plain")
p.be("plain")
return p},
cY:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dv(q).a3(q,"+")){b2[r]=C.a.a7(q,1)
a8.push(1)
s=!0}else if(C.a.a3(q,"-")){b2[r]=C.a.a7(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dS(b0)
p.dE(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.k5(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lD()
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
if(r>=a8.length)return H.b(a8,r)
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
for(a4=C.b.gO(q);a4.t();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
fZ:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
fO:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.j5()
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
s.k(0,o).j(0,g).a.push(new K.b_())
q=s.k(0,g).j(0,g)
r=new K.a9()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.N(n)
q=s.k(0,l)
q.d=q.a.N(m)
q=s.k(0,"CodeEnd")
q.d=q.a.N(k)
q=s.k(0,h)
q.d=q.a.N("Link")
q=s.k(0,g)
q.d=q.a.N(g)
this.b=s}}
V.iX.prototype={
$1:function(a){P.mf(C.n,new V.iW(this.a))}}
V.iW.prototype={
$0:function(){var s=C.d.am(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.iY.prototype={
$1:function(a){return a.a===this.a}}
N.ky.prototype={
$0:function(){this.a.sac(0,F.lq(1,null,null,1))}}
N.kz.prototype={
$0:function(){this.a.sac(0,F.lr(1,!0,!0,40,1))}}
N.kA.prototype={
$0:function(){this.a.sac(0,F.lr(1,!0,!1,40,0))}}
N.kB.prototype={
$0:function(){this.a.sac(0,F.qr(6,6))}}
N.kC.prototype={
$0:function(){this.a.sac(0,F.n9())}}
N.kD.prototype={
$0:function(){this.a.sac(0,F.qm())}}
N.kE.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.cY("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.cY("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.dY=s.i
s=J.b7.prototype
s.e_=s.i
s=P.h.prototype
s.dZ=s.bx
s=W.D.prototype
s.bz=s.af
s=W.db.prototype
s.e0=s.ar
s=K.e_.prototype
s.dX=s.aD
s.cr=s.i
s=O.ef.prototype
s.cs=s.az
s=O.aP.prototype
s.ct=s.az})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pp","o_",21)
r(P,"q4","oB",8)
r(P,"q5","oC",8)
r(P,"q6","oD",8)
q(P,"mX","q_",9)
r(W,"rC","hT",22)
p(W,"qf",4,null,["$4"],["oE"],14,0)
p(W,"qg",4,null,["$4"],["oF"],14,0)
var j
o(j=E.bs.prototype,"gdA",0,0,null,["$1","$0"],["dB","hM"],0,0)
o(j,"gdC",0,0,null,["$1","$0"],["dD","hN"],0,0)
o(j,"gdw",0,0,null,["$1","$0"],["dz","hL"],0,0)
o(j,"gdu",0,0,null,["$1","$0"],["dv","hI"],0,0)
n(j,"ghG","hH",4)
n(j,"ghJ","hK",4)
o(j=E.f_.prototype,"gcu",0,0,null,["$1","$0"],["cw","cv"],0,0)
m(j,"gi0","dK",9)
l(j=X.fi.prototype,"gf4","f5",5)
l(j,"geR","eS",5)
l(j,"geZ","f_",2)
l(j,"gf8","f9",10)
l(j,"gf6","f7",10)
l(j,"gfc","fd",2)
l(j,"gfg","fh",2)
l(j,"gf2","f3",2)
l(j,"gfe","ff",2)
l(j,"gf0","f1",2)
l(j,"gfi","fj",19)
l(j,"gfk","fl",5)
l(j,"gfA","fB",6)
l(j,"gfu","fv",6)
l(j,"gfw","fz",6)
o(j=D.cx.prototype,"gcL",0,0,null,["$1","$0"],["cM","fa"],0,0)
l(j,"gfn","fo",20)
n(j,"geL","eM",11)
n(j,"gfs","ft",11)
o(D.bz.prototype,"geT",0,0,null,["$1","$0"],["Y","eU"],0,0)
k(V.au.prototype,"gm","b4",7)
k(V.C.prototype,"gm","b4",7)
k(V.d_.prototype,"gm","b4",7)
o(j=U.bO.prototype,"gbf",0,0,null,["$1","$0"],["U","ao"],0,0)
n(j,"ge9","ea",12)
n(j,"gfp","fq",12)
o(j=U.cY.prototype,"gbf",0,0,null,["$1","$0"],["U","ao"],0,0)
l(j,"geE","eF",1)
l(j,"geG","eH",1)
l(j,"geI","eJ",1)
l(j,"gez","eA",1)
l(j,"geB","eC",1)
l(j,"gfV","fW",1)
l(j,"gfT","fU",1)
l(j,"gfR","fS",1)
o(j=M.dU.prototype,"gap",0,0,null,["$1","$0"],["ax","eb"],0,0)
n(j,"geV","eW",4)
n(j,"geX","eY",4)
o(j=O.ee.prototype,"ged",0,0,null,["$1","$0"],["ad","ee"],0,0)
o(j,"gfH",0,0,null,["$1","$0"],["cN","fI"],0,0)
n(j,"geN","eO",13)
n(j,"geP","eQ",13)
o(X.ev.prototype,"gcz",0,0,null,["$1","$0"],["aI","eh"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.kY,J.a,J.a4,P.K,P.d4,P.h,H.b8,P.e2,H.cr,H.ff,H.cj,H.j8,H.iG,H.h3,H.bq,P.V,H.ic,H.eb,H.e5,H.aq,H.fG,P.dh,P.c6,P.bD,P.fo,P.cP,P.eR,P.cR,P.k9,P.da,P.jQ,P.d3,P.i,P.hi,P.cE,P.dK,P.i6,P.k7,P.k6,P.aw,P.ag,P.R,P.br,P.eu,P.cO,P.fD,P.i2,P.ay,P.n,P.H,P.an,P.x,P.S,P.bE,P.jj,P.fY,W.hK,W.kT,W.l8,W.c5,W.L,W.cL,W.db,W.h8,W.cs,W.aj,W.jU,W.hj,P.jX,P.fW,P.bd,K.b_,K.e_,K.ij,K.iK,K.iQ,L.eO,L.f0,L.f1,L.j4,O.af,O.cG,E.hG,E.bs,E.bL,E.bW,E.fA,E.iL,E.f_,Z.fm,Z.jI,Z.dI,Z.bP,Z.bC,D.hH,D.bM,D.Z,X.dJ,X.e7,X.ia,X.ih,X.bS,X.iC,X.j6,X.fi,D.dF,D.dR,D.U,D.eA,D.bz,V.T,V.aK,V.hW,V.eg,V.b9,V.ak,V.P,V.by,V.eF,V.au,V.C,V.d_,U.cY,M.dU,A.dC,A.hB,A.a5,A.dG,A.dS,A.eC,A.eM,A.im,A.cT,A.cU,A.cW,A.cX,A.f5,A.jg,F.dV,F.i_,F.ea,F.ib,F.ez,F.iR,F.iS,F.iT,F.iU,F.fj,F.jx,F.jy,F.jB,F.jD,F.jE,F.jF,O.eX,O.ef,O.io,X.kP,X.j0,X.ev,V.b1,V.iI,V.iV])
q(J.a,[J.e3,J.cw,J.b7,J.v,J.bu,J.aM,H.cH,H.W,W.e,W.hz,W.bn,W.aL,W.J,W.ft,W.am,W.hN,W.hO,W.fv,W.cn,W.fx,W.hP,W.j,W.fE,W.az,W.i4,W.fI,W.ct,W.ig,W.iz,W.fM,W.fN,W.aB,W.fO,W.fQ,W.aC,W.fU,W.fX,W.aD,W.fZ,W.aE,W.h4,W.as,W.ha,W.j3,W.aF,W.hc,W.j7,W.jo,W.hk,W.hm,W.ho,W.hq,W.hs,P.aN,P.fK,P.aQ,P.fS,P.iH,P.h5,P.aR,P.he,P.hC,P.fq,P.h1])
q(J.b7,[J.ew,J.bB,J.aA])
r(J.i8,J.v)
q(J.bu,[J.cv,J.e4])
q(P.K,[H.e8,H.eq,H.e6,H.fe,H.eH,H.fB,P.dB,P.er,P.ae,P.fg,P.fd,P.c_,P.dL,P.dO])
r(P.cA,P.d4)
q(P.cA,[H.c1,W.fr,W.a_,P.dX])
r(H.p,H.c1)
q(P.h,[H.k,H.aO,H.aU,P.cu])
q(H.k,[H.cB,H.cy])
r(H.co,H.aO)
q(P.e2,[H.ec,H.fn])
r(H.cF,H.cB)
r(H.ck,H.cj)
q(H.bq,[H.eW,H.i9,H.kr,H.ks,H.kt,P.jK,P.jJ,P.jL,P.jM,P.k2,P.k1,P.ki,P.jS,P.jT,P.id,P.ii,P.jr,P.js,P.hQ,P.hR,P.jn,P.jk,P.jl,P.jm,P.k4,P.k3,P.kd,P.kc,P.ke,P.kf,W.hS,W.iA,W.iB,W.iP,W.j_,W.jN,W.iE,W.iD,W.jV,W.jW,W.k0,W.k8,P.jZ,P.k_,P.kj,P.i0,P.i1,P.hD,E.iM,E.iN,E.iO,E.j2,D.hY,D.hZ,F.ka,F.kk,F.km,F.kn,F.ko,F.kH,F.kI,F.kJ,F.kx,F.kl,F.jH,F.jG,F.jz,F.jA,O.ir,O.is,O.it,O.iu,O.iv,O.iw,O.ix,O.iy,V.kG,V.iJ,V.iX,V.iW,V.iY,N.ky,N.kz,N.kA,N.kB,N.kC,N.kD,N.kE])
q(H.eW,[H.eP,H.bK])
r(P.cD,P.V)
q(P.cD,[H.B,W.fp])
r(H.bU,H.W)
q(H.bU,[H.d6,H.d8])
r(H.d7,H.d6)
r(H.bw,H.d7)
r(H.d9,H.d8)
r(H.cI,H.d9)
q(H.cI,[H.el,H.em,H.en,H.eo,H.ep,H.cJ,H.bV])
r(H.di,H.fB)
r(P.de,P.cu)
r(P.jR,P.k9)
r(P.d2,P.da)
r(P.dl,P.cE)
r(P.c2,P.dl)
q(P.dK,[P.hE,P.hU])
r(P.dN,P.eR)
q(P.dN,[P.hF,P.i5,P.jt,P.jq])
r(P.jp,P.hU)
q(P.R,[P.Y,P.l])
q(P.ae,[P.bY,P.e1])
r(P.fu,P.bE)
q(W.e,[W.w,W.dW,W.bR,W.ar,W.dc,W.at,W.aa,W.df,W.fl,W.c3,P.dE,P.b0])
q(W.w,[W.D,W.ax,W.c4])
q(W.D,[W.r,P.m])
q(W.r,[W.dz,W.dA,W.bJ,W.bo,W.bp,W.b3,W.dY,W.bQ,W.eI,W.bc,W.cQ,W.eU,W.eV,W.c0])
r(W.hJ,W.aL)
r(W.cl,W.ft)
q(W.am,[W.hL,W.hM])
r(W.fw,W.fv)
r(W.cm,W.fw)
r(W.fy,W.fx)
r(W.dT,W.fy)
r(W.ah,W.bn)
r(W.fF,W.fE)
r(W.bN,W.fF)
r(W.fJ,W.fI)
r(W.bt,W.fJ)
r(W.aT,W.j)
q(W.aT,[W.bv,W.ai,W.bA])
r(W.ei,W.fM)
r(W.ej,W.fN)
r(W.fP,W.fO)
r(W.ek,W.fP)
r(W.fR,W.fQ)
r(W.cK,W.fR)
r(W.fV,W.fU)
r(W.ey,W.fV)
r(W.eG,W.fX)
r(W.dd,W.dc)
r(W.eK,W.dd)
r(W.h_,W.fZ)
r(W.eL,W.h_)
r(W.eQ,W.h4)
r(W.hb,W.ha)
r(W.eY,W.hb)
r(W.dg,W.df)
r(W.eZ,W.dg)
r(W.hd,W.hc)
r(W.f2,W.hd)
r(W.be,W.ai)
r(W.hl,W.hk)
r(W.fs,W.hl)
r(W.d0,W.cn)
r(W.hn,W.hm)
r(W.fH,W.hn)
r(W.hp,W.ho)
r(W.d5,W.hp)
r(W.hr,W.hq)
r(W.h0,W.hr)
r(W.ht,W.hs)
r(W.h7,W.ht)
r(W.fz,W.fp)
r(W.fC,P.cP)
r(W.h9,W.db)
r(P.jY,P.jX)
r(P.a7,P.fW)
r(P.fL,P.fK)
r(P.e9,P.fL)
r(P.fT,P.fS)
r(P.es,P.fT)
r(P.bZ,P.m)
r(P.h6,P.h5)
r(P.eS,P.h6)
r(P.hf,P.he)
r(P.f3,P.hf)
r(P.dD,P.fq)
r(P.et,P.b0)
r(P.h2,P.h1)
r(P.eN,P.h2)
q(K.e_,[K.a9,L.f4])
q(E.hG,[Z.dH,A.cN,T.j1])
q(D.Z,[D.b5,D.b6,D.E,X.eB])
q(X.eB,[X.cC,X.bT,X.cS])
q(O.af,[D.cx,U.bO])
q(D.hH,[U.hI,U.a6])
r(U.ci,U.a6)
r(A.ed,A.cN)
q(A.f5,[A.f7,A.jd,A.je,A.jf,A.jb,A.f6,A.jc,A.f8,A.f9,A.jh,A.fa,A.cV,A.fb,A.fc])
r(F.iZ,F.i_)
r(F.ja,F.ib)
r(F.jC,F.jD)
r(F.iF,F.jE)
r(O.ee,O.eX)
q(O.ef,[O.ik,O.il,O.aP])
q(O.aP,[O.ip,O.iq])
r(X.i3,X.j0)
q(V.b1,[V.dP,V.dZ,V.e0,V.ex])
s(H.c1,H.ff)
s(H.d6,P.i)
s(H.d7,H.cr)
s(H.d8,P.i)
s(H.d9,H.cr)
s(P.d4,P.i)
s(P.dl,P.hi)
s(W.ft,W.hK)
s(W.fv,P.i)
s(W.fw,W.L)
s(W.fx,P.i)
s(W.fy,W.L)
s(W.fE,P.i)
s(W.fF,W.L)
s(W.fI,P.i)
s(W.fJ,W.L)
s(W.fM,P.V)
s(W.fN,P.V)
s(W.fO,P.i)
s(W.fP,W.L)
s(W.fQ,P.i)
s(W.fR,W.L)
s(W.fU,P.i)
s(W.fV,W.L)
s(W.fX,P.V)
s(W.dc,P.i)
s(W.dd,W.L)
s(W.fZ,P.i)
s(W.h_,W.L)
s(W.h4,P.V)
s(W.ha,P.i)
s(W.hb,W.L)
s(W.df,P.i)
s(W.dg,W.L)
s(W.hc,P.i)
s(W.hd,W.L)
s(W.hk,P.i)
s(W.hl,W.L)
s(W.hm,P.i)
s(W.hn,W.L)
s(W.ho,P.i)
s(W.hp,W.L)
s(W.hq,P.i)
s(W.hr,W.L)
s(W.hs,P.i)
s(W.ht,W.L)
s(P.fK,P.i)
s(P.fL,W.L)
s(P.fS,P.i)
s(P.fT,W.L)
s(P.h5,P.i)
s(P.h6,W.L)
s(P.he,P.i)
s(P.hf,W.L)
s(P.fq,P.V)
s(P.h1,P.i)
s(P.h2,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Y:"double",R:"num",x:"String",aw:"bool",an:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Z*])","~(Z*)","~(ai*)","an(@,@)","~(l*,h<bs*>*)","~(j*)","~(bA*)","Y*()","~(~())","~()","~(bv*)","~(l*,h<U*>*)","~(l*,h<a6*>*)","~(l*,h<b9*>*)","aw(D,x,x,c5)","@(@)","an(@)","an(M?,M?)","bd(@,@)","~(be*)","aw*(h<U*>*)","l(@,@)","x(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oY(v.typeUniverse,JSON.parse('{"aA":"b7","ew":"b7","bB":"b7","qx":"j","qH":"j","qz":"b0","qy":"e","qO":"e","qQ":"e","qw":"m","qI":"m","qA":"r","qL":"r","qJ":"w","qG":"w","rf":"aa","qE":"aT","qB":"ax","qR":"ax","qP":"ai","qK":"bt","qN":"bw","qM":"W","e3":{"aw":[]},"b7":{"lR":[],"ay":[]},"v":{"n":["1"],"k":["1"],"h":["1"]},"i8":{"v":["1"],"n":["1"],"k":["1"],"h":["1"]},"bu":{"Y":[],"R":[]},"cv":{"Y":[],"l":[],"R":[]},"e4":{"Y":[],"R":[]},"aM":{"x":[]},"e8":{"K":[]},"p":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cB":{"k":["1"],"h":["1"]},"aO":{"h":["2"],"h.E":"2"},"co":{"aO":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cF":{"cB":["2"],"k":["2"],"h":["2"],"h.E":"2"},"aU":{"h":["1"],"h.E":"1"},"c1":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cj":{"H":["1","2"]},"ck":{"H":["1","2"]},"eq":{"K":[]},"e6":{"K":[]},"fe":{"K":[]},"bq":{"ay":[]},"eW":{"ay":[]},"eP":{"ay":[]},"bK":{"ay":[]},"eH":{"K":[]},"B":{"V":["1","2"],"H":["1","2"]},"cy":{"k":["1"],"h":["1"],"h.E":"1"},"e5":{"m8":[]},"bU":{"z":["1"],"W":[]},"bw":{"i":["Y"],"z":["Y"],"n":["Y"],"W":[],"k":["Y"],"h":["Y"],"i.E":"Y"},"cI":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"]},"el":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"em":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"en":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"eo":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"ep":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"cJ":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"bV":{"i":["l"],"bd":[],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"fB":{"K":[]},"di":{"K":[]},"dh":{"cR":[]},"de":{"h":["1"],"h.E":"1"},"d2":{"da":["1"],"k":["1"],"h":["1"]},"cu":{"h":["1"]},"cA":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cD":{"V":["1","2"],"H":["1","2"]},"V":{"H":["1","2"]},"cE":{"H":["1","2"]},"c2":{"H":["1","2"]},"da":{"k":["1"],"h":["1"]},"Y":{"R":[]},"dB":{"K":[]},"er":{"K":[]},"ae":{"K":[]},"bY":{"K":[]},"e1":{"K":[]},"fg":{"K":[]},"fd":{"K":[]},"c_":{"K":[]},"dL":{"K":[]},"eu":{"K":[]},"cO":{"K":[]},"dO":{"K":[]},"l":{"R":[]},"n":{"k":["1"],"h":["1"]},"bE":{"fh":[]},"fY":{"fh":[]},"fu":{"fh":[]},"r":{"D":[],"w":[],"e":[]},"dz":{"D":[],"w":[],"e":[]},"dA":{"D":[],"w":[],"e":[]},"bJ":{"D":[],"w":[],"e":[]},"bo":{"D":[],"w":[],"e":[]},"bp":{"D":[],"w":[],"e":[]},"ax":{"w":[],"e":[]},"b3":{"D":[],"w":[],"e":[]},"cm":{"i":["a7<R>"],"n":["a7<R>"],"z":["a7<R>"],"k":["a7<R>"],"h":["a7<R>"],"i.E":"a7<R>"},"cn":{"a7":["R"]},"dT":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"fr":{"i":["D"],"n":["D"],"k":["D"],"h":["D"],"i.E":"D"},"D":{"w":[],"e":[]},"ah":{"bn":[]},"bN":{"i":["ah"],"n":["ah"],"z":["ah"],"k":["ah"],"h":["ah"],"i.E":"ah"},"dW":{"e":[]},"dY":{"D":[],"w":[],"e":[]},"bt":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"bQ":{"D":[],"w":[],"e":[]},"bv":{"j":[]},"bR":{"e":[]},"ei":{"V":["x","@"],"H":["x","@"]},"ej":{"V":["x","@"],"H":["x","@"]},"ek":{"i":["aB"],"n":["aB"],"z":["aB"],"k":["aB"],"h":["aB"],"i.E":"aB"},"ai":{"j":[]},"a_":{"i":["w"],"n":["w"],"k":["w"],"h":["w"],"i.E":"w"},"w":{"e":[]},"cK":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"ey":{"i":["aC"],"n":["aC"],"z":["aC"],"k":["aC"],"h":["aC"],"i.E":"aC"},"eG":{"V":["x","@"],"H":["x","@"]},"eI":{"D":[],"w":[],"e":[]},"ar":{"e":[]},"eK":{"i":["ar"],"n":["ar"],"z":["ar"],"e":[],"k":["ar"],"h":["ar"],"i.E":"ar"},"eL":{"i":["aD"],"n":["aD"],"z":["aD"],"k":["aD"],"h":["aD"],"i.E":"aD"},"eQ":{"V":["x","x"],"H":["x","x"]},"bc":{"D":[],"w":[],"e":[]},"cQ":{"D":[],"w":[],"e":[]},"eU":{"D":[],"w":[],"e":[]},"eV":{"D":[],"w":[],"e":[]},"c0":{"D":[],"w":[],"e":[]},"at":{"e":[]},"aa":{"e":[]},"eY":{"i":["aa"],"n":["aa"],"z":["aa"],"k":["aa"],"h":["aa"],"i.E":"aa"},"eZ":{"i":["at"],"n":["at"],"z":["at"],"e":[],"k":["at"],"h":["at"],"i.E":"at"},"bA":{"j":[]},"f2":{"i":["aF"],"n":["aF"],"z":["aF"],"k":["aF"],"h":["aF"],"i.E":"aF"},"aT":{"j":[]},"fl":{"e":[]},"be":{"ai":[],"j":[]},"c3":{"e":[]},"c4":{"w":[],"e":[]},"fs":{"i":["J"],"n":["J"],"z":["J"],"k":["J"],"h":["J"],"i.E":"J"},"d0":{"a7":["R"]},"fH":{"i":["az?"],"n":["az?"],"z":["az?"],"k":["az?"],"h":["az?"],"i.E":"az?"},"d5":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"h0":{"i":["aE"],"n":["aE"],"z":["aE"],"k":["aE"],"h":["aE"],"i.E":"aE"},"h7":{"i":["as"],"n":["as"],"z":["as"],"k":["as"],"h":["as"],"i.E":"as"},"fp":{"V":["x","x"],"H":["x","x"]},"fz":{"V":["x","x"],"H":["x","x"]},"c5":{"aj":[]},"cL":{"aj":[]},"db":{"aj":[]},"h9":{"aj":[]},"h8":{"aj":[]},"dX":{"i":["D"],"n":["D"],"k":["D"],"h":["D"],"i.E":"D"},"a7":{"fW":["1"]},"e9":{"i":["aN"],"n":["aN"],"k":["aN"],"h":["aN"],"i.E":"aN"},"es":{"i":["aQ"],"n":["aQ"],"k":["aQ"],"h":["aQ"],"i.E":"aQ"},"bZ":{"m":[],"D":[],"w":[],"e":[]},"eS":{"i":["x"],"n":["x"],"k":["x"],"h":["x"],"i.E":"x"},"m":{"D":[],"w":[],"e":[]},"f3":{"i":["aR"],"n":["aR"],"k":["aR"],"h":["aR"],"i.E":"aR"},"bd":{"n":["l"],"k":["l"],"h":["l"]},"dD":{"V":["x","@"],"H":["x","@"]},"dE":{"e":[]},"b0":{"e":[]},"et":{"e":[]},"eN":{"i":["H<@,@>"],"n":["H<@,@>"],"k":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"af":{"h":["1*"],"af.T":"1"},"b5":{"Z":[]},"b6":{"Z":[]},"E":{"Z":[]},"cC":{"Z":[]},"bT":{"Z":[]},"eB":{"Z":[]},"cS":{"Z":[]},"dF":{"U":[]},"dR":{"U":[]},"cx":{"af":["U*"],"h":["U*"],"af.T":"U*"},"eA":{"U":[]},"bz":{"U":[]},"ci":{"a6":[]},"bO":{"af":["a6*"],"a6":[],"h":["a6*"],"af.T":"a6*"},"cY":{"a6":[]},"ed":{"cN":[]},"dP":{"b1":[]},"dZ":{"b1":[]},"e0":{"b1":[]},"ex":{"b1":[]}}'))
H.oX(v.typeUniverse,JSON.parse('{"a4":1,"k":1,"b8":1,"ec":2,"fn":1,"cr":1,"ff":1,"c1":1,"cj":2,"eb":1,"bU":1,"bD":1,"cP":1,"eR":2,"d3":1,"cu":1,"cA":1,"cD":2,"hi":2,"cE":2,"d4":1,"dl":2,"dK":2,"dN":2,"e2":1,"fC":1,"L":1,"cs":1,"b5":1,"b6":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.ls
return{D:s("bJ"),d:s("bn"),Y:s("bo"),F:s("k<@>"),h:s("D"),C:s("K"),G:s("j"),c8:s("ah"),bX:s("bN"),Z:s("ay"),gb:s("ct"),gk:s("bQ"),Q:s("v<aj>"),s:s("v<x>"),gn:s("v<@>"),t:s("v<l>"),x:s("v<dC*>"),bb:s("v<dF*>"),am:s("v<dG*>"),g0:s("v<dH*>"),b7:s("v<b1*>"),cP:s("v<dR*>"),M:s("v<dS*>"),k:s("v<b3*>"),b:s("v<dV*>"),aZ:s("v<bP*>"),L:s("v<ea*>"),u:s("v<n<b3*>*>"),B:s("v<ij*>"),h8:s("v<b9*>"),eb:s("v<eA*>"),cS:s("v<ak*>"),d1:s("v<eC*>"),o:s("v<ez*>"),du:s("v<bz*>"),cz:s("v<eM*>"),eG:s("v<cP<M*>*>"),i:s("v<x*>"),fG:s("v<eX*>"),bw:s("v<j1*>"),br:s("v<f4*>"),fj:s("v<f5*>"),d6:s("v<cT*>"),dv:s("v<cU*>"),hg:s("v<cV*>"),by:s("v<cW*>"),fF:s("v<cX*>"),j:s("v<fj*>"),m:s("v<Y*>"),V:s("v<l*>"),f:s("v<~(Z*)*>"),T:s("cw"),eH:s("lR"),g:s("aA"),aU:s("z<@>"),h9:s("B<x*,cN*>"),cn:s("B<x*,eO*>"),dO:s("B<x*,x*>"),w:s("B<x*,f1*>"),en:s("B<l*,n<cT*>*>"),af:s("B<l*,n<cU*>*>"),gr:s("B<l*,n<cW*>*>"),bR:s("B<l*,n<cX*>*>"),J:s("B<l*,f7*>"),E:s("B<l*,aw*>"),a:s("B<l*,l*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cF<x*,x>"),bK:s("bR"),bZ:s("cH"),dD:s("W"),bm:s("bV"),P:s("an"),K:s("M"),q:s("a7<R>"),fv:s("m8"),ew:s("bZ"),N:s("x"),g7:s("m"),bY:s("bc"),aW:s("c0"),aF:s("cR"),gc:s("bd"),ak:s("bB"),U:s("c2<x,x>"),R:s("fh"),gH:s("c4"),ac:s("a_"),cJ:s("aw"),gR:s("Y"),z:s("@"),S:s("l"),fr:s("bp*"),l:s("bs*"),gj:s("U*"),dn:s("cC*"),hc:s("b9*"),c:s("bT*"),ah:s("a6*"),A:s("0&*"),_:s("M*"),X:s("x*"),eB:s("f0*"),eP:s("cS*"),n:s("f6*"),r:s("f8*"),y:s("f9*"),O:s("fa*"),I:s("cV*"),v:s("fb*"),p:s("fc*"),e:s("l*"),dm:s("~(Z*)*"),bG:s("lQ<an>?"),W:s("M?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bo.prototype
C.m=W.bp.prototype
C.R=W.b3.prototype
C.U=J.a.prototype
C.b=J.v.prototype
C.c=J.cv.prototype
C.i=J.cw.prototype
C.d=J.bu.prototype
C.a=J.aM.prototype
C.V=J.aA.prototype
C.C=J.ew.prototype
C.D=W.cQ.prototype
C.p=J.bB.prototype
C.E=W.be.prototype
C.F=W.c3.prototype
C.G=new E.bL("Browser.chrome")
C.r=new E.bL("Browser.firefox")
C.t=new E.bL("Browser.edge")
C.H=new E.bL("Browser.other")
C.a4=new P.hF()
C.I=new P.hE()
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

C.P=new P.eu()
C.e=new P.jp()
C.Q=new P.jt()
C.f=new P.jR()
C.n=new P.br(0)
C.S=new P.br(5e6)
C.T=new P.i6("element",!1,!1,!1)
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
C.Z=new H.ck(0,{},C.w,H.ls("ck<x*,x*>"))
C.a_=new E.bW("OperatingSystem.windows")
C.B=new E.bW("OperatingSystem.mac")
C.a0=new E.bW("OperatingSystem.linux")
C.a1=new E.bW("OperatingSystem.other")
C.a2=new P.jq(!1)
C.a3=new P.c6(null,2)})();(function staticFields(){$.mz=null
$.aJ=0
$.lI=null
$.lH=null
$.n0=null
$.mW=null
$.n6=null
$.kp=null
$.kv=null
$.lu=null
$.ca=null
$.dr=null
$.ds=null
$.ln=!1
$.aG=C.f
$.ab=H.d([],H.ls("v<M>"))
$.b4=null
$.kR=null
$.lP=null
$.lO=null
$.d1=P.l0(t.N,t.Z)
$.hV=null
$.lY=null
$.m0=null
$.ao=null
$.ma=null
$.mo=null
$.mr=null
$.mq=null
$.ju=null
$.jv=null
$.jw=null
$.mp=null
$.mu=null
$.m_=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qF","nd",function(){return H.qe("_$dart_dartClosure")})
s($,"qS","ne",function(){return H.aS(H.j9({
toString:function(){return"$receiver$"}}))})
s($,"qT","nf",function(){return H.aS(H.j9({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qU","ng",function(){return H.aS(H.j9(null))})
s($,"qV","nh",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qY","nk",function(){return H.aS(H.j9(void 0))})
s($,"qZ","nl",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qX","nj",function(){return H.aS(H.mh(null))})
s($,"qW","ni",function(){return H.aS(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"r0","nn",function(){return H.aS(H.mh(void 0))})
s($,"r_","nm",function(){return H.aS(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rg","lz",function(){return P.oA()})
s($,"r1","no",function(){return new P.jr().$0()})
s($,"r2","np",function(){return new P.js().$0()})
s($,"rh","nt",function(){return new Int8Array(H.c8(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rk","nv",function(){return P.ok("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rA","nw",function(){return P.pi()})
s($,"ri","nu",function(){return P.lT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"r9","ns",function(){return Z.av(0)})
s($,"r3","nq",function(){return Z.av(511)})
s($,"rb","bm",function(){return Z.av(1)})
s($,"ra","bl",function(){return Z.av(2)})
s($,"r5","bk",function(){return Z.av(4)})
s($,"rc","bH",function(){return Z.av(8)})
s($,"rd","bI",function(){return Z.av(16)})
s($,"r6","dw",function(){return Z.av(32)})
s($,"r7","dx",function(){return Z.av(64)})
s($,"r8","nr",function(){return Z.av(96)})
s($,"re","cf",function(){return Z.av(128)})
s($,"r4","bj",function(){return Z.av(256)})
s($,"qD","nc",function(){return new V.hW()})
s($,"qC","F",function(){return $.nc()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cH,DataView:H.W,ArrayBufferView:H.W,Float32Array:H.bw,Float64Array:H.bw,Int16Array:H.el,Int32Array:H.em,Int8Array:H.en,Uint16Array:H.eo,Uint32Array:H.ep,Uint8ClampedArray:H.cJ,CanvasPixelArray:H.cJ,Uint8Array:H.bV,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hz,HTMLAnchorElement:W.dz,HTMLAreaElement:W.dA,HTMLBaseElement:W.bJ,Blob:W.bn,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bp,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.hJ,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cl,MSStyleCSSProperties:W.cl,CSS2Properties:W.cl,CSSImageValue:W.am,CSSKeywordValue:W.am,CSSNumericValue:W.am,CSSPositionValue:W.am,CSSResourceValue:W.am,CSSUnitValue:W.am,CSSURLImageValue:W.am,CSSStyleValue:W.am,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.hL,CSSUnparsedValue:W.hM,DataTransferItemList:W.hN,HTMLDivElement:W.b3,DOMException:W.hO,ClientRectList:W.cm,DOMRectList:W.cm,DOMRectReadOnly:W.cn,DOMStringList:W.dT,DOMTokenList:W.hP,Element:W.D,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ah,FileList:W.bN,FileWriter:W.dW,HTMLFormElement:W.dY,Gamepad:W.az,History:W.i4,HTMLCollection:W.bt,HTMLFormControlsCollection:W.bt,HTMLOptionsCollection:W.bt,ImageData:W.ct,HTMLInputElement:W.bQ,KeyboardEvent:W.bv,Location:W.ig,MediaList:W.iz,MessagePort:W.bR,MIDIInputMap:W.ei,MIDIOutputMap:W.ej,MimeType:W.aB,MimeTypeArray:W.ek,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cK,RadioNodeList:W.cK,Plugin:W.aC,PluginArray:W.ey,RTCStatsReport:W.eG,HTMLSelectElement:W.eI,SourceBuffer:W.ar,SourceBufferList:W.eK,SpeechGrammar:W.aD,SpeechGrammarList:W.eL,SpeechRecognitionResult:W.aE,Storage:W.eQ,CSSStyleSheet:W.as,StyleSheet:W.as,HTMLTableCellElement:W.bc,HTMLTableDataCellElement:W.bc,HTMLTableHeaderCellElement:W.bc,HTMLTableElement:W.cQ,HTMLTableRowElement:W.eU,HTMLTableSectionElement:W.eV,HTMLTemplateElement:W.c0,TextTrack:W.at,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.eY,TextTrackList:W.eZ,TimeRanges:W.j3,Touch:W.aF,TouchEvent:W.bA,TouchList:W.f2,TrackDefaultList:W.j7,CompositionEvent:W.aT,FocusEvent:W.aT,TextEvent:W.aT,UIEvent:W.aT,URL:W.jo,VideoTrackList:W.fl,WheelEvent:W.be,Window:W.c3,DOMWindow:W.c3,Attr:W.c4,CSSRuleList:W.fs,ClientRect:W.d0,DOMRect:W.d0,GamepadList:W.fH,NamedNodeMap:W.d5,MozNamedAttrMap:W.d5,SpeechRecognitionResultList:W.h0,StyleSheetList:W.h7,SVGLength:P.aN,SVGLengthList:P.e9,SVGNumber:P.aQ,SVGNumberList:P.es,SVGPointList:P.iH,SVGScriptElement:P.bZ,SVGStringList:P.eS,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aR,SVGTransformList:P.f3,AudioBuffer:P.hC,AudioParamMap:P.dD,AudioTrackList:P.dE,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.et,SQLResultSetRowList:P.eN})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.n4,[])
else N.n4([])})})()
//# sourceMappingURL=test.dart.js.map
