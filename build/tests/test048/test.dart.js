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
a[c]=function(){a[c]=function(){H.qq(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lr(this,a,b,c,true,false,e).prototype
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
l_:function(a){return new H.ec(a)},
kr:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
o3:function(a,b,c,d){if(t.G.b(a))return new H.cq(a,b,c.I("@<0>").aZ(d).I("cq<1,2>"))
return new H.aP(a,b,c.I("@<0>").aZ(d).I("aP<1,2>"))},
ib:function(){return new P.c1("No element")},
nU:function(){return new P.c1("Too many elements")},
op:function(a,b){var s=J.aJ(a)
if(typeof s!=="number")return s.W()
H.eM(a,0,s-1,b)},
eM:function(a,b,c,d){if(c-b<=32)H.oo(a,b,c,d)
else H.on(a,b,c,d)},
oo:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aY(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a_()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
on:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a0(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a0(a6+a7,2),d=e-h,c=e+h,b=J.aY(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a_()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a_()
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
if(typeof n!=="number")return n.aa()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a_()
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
if(typeof j!=="number")return j.aa()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a_()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a_()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aa()
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
H.eM(a5,a6,r-2,a8)
H.eM(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.G(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.G(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aa()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eM(a5,r,q,a8)}else H.eM(a5,r,q,a8)},
ec:function ec(a){this.a=a},
p:function p(a){this.a=a},
k:function k(){},
cD:function cD(){},
ba:function ba(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b){this.a=null
this.b=a
this.c=b},
cH:function cH(a,b,c){this.a=a
this.b=b
this.$ti=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b){this.a=a
this.b=b},
ct:function ct(){},
fj:function fj(){},
c3:function c3(){},
nM:function(){throw H.b(P.A("Cannot modify unmodifiable Map"))},
n8:function(a){var s,r=H.n7(a)
if(r!=null)return r
s="minified:"+a
return s},
n0:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a4(a)
if(typeof s!="string")throw H.b(H.av(a))
return s},
cP:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m1:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
eG:function(a){return H.o7(a)},
o7:function(a){var s,r,q
if(a instanceof P.M)return H.am(H.bG(a),null)
if(J.dy(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.m0(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.m0(q))return q}}return H.am(H.bG(a),null)},
m0:function(a){var s=a!=="Object"&&a!==""
return s},
o8:function(){if(!!self.location)return self.location.href
return null},
m_:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
og:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.cb(q))throw H.b(H.av(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aQ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.av(q))}return H.m_(p)},
m2:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cb(q))throw H.b(H.av(q))
if(q<0)throw H.b(H.av(q))
if(q>65535)return H.og(a)}return H.m_(a)},
oh:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.ik()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ap:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aQ(s,10))>>>0,56320|s&1023)}}throw H.b(P.a3(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
of:function(a){var s=H.bZ(a).getFullYear()+0
return s},
od:function(a){var s=H.bZ(a).getMonth()+1
return s},
o9:function(a){var s=H.bZ(a).getDate()+0
return s},
oa:function(a){var s=H.bZ(a).getHours()+0
return s},
oc:function(a){var s=H.bZ(a).getMinutes()+0
return s},
oe:function(a){var s=H.bZ(a).getSeconds()+0
return s},
ob:function(a){var s=H.bZ(a).getMilliseconds()+0
return s},
y:function(a){throw H.b(H.av(a))},
c:function(a,b){if(a==null)J.aJ(a)
throw H.b(H.cf(a,b))},
cf:function(a,b){var s,r,q="index"
if(!H.cb(b))return new P.af(!0,b,q,null)
s=J.aJ(a)
if(!(b<0)){if(typeof s!=="number")return H.y(s)
r=b>=s}else r=!0
if(r)return P.N(b,a,q,null,s)
return P.eH(b,q)},
q7:function(a,b,c){if(a>c)return P.a3(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a3(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
av:function(a){return new P.af(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.eu()
s=new Error()
s.dartException=a
r=H.qr
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qr:function(){return J.a4(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b4(a))},
aU:function(a){var s,r,q,p,o,n
a=H.n4(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
me:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lX:function(a,b){return new H.et(a,b==null?null:b.method)},
kZ:function(a,b){var s=b==null,r=s?null:b.method
return new H.ea(a,r,s?null:b.receiver)},
ad:function(a){if(a==null)return new H.iK(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bH(a,a.dartException)
return H.q0(a)},
bH:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q0:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aQ(r,16)&8191)===10)switch(q){case 438:return H.bH(a,H.kZ(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bH(a,H.lX(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nb()
o=$.nc()
n=$.nd()
m=$.ne()
l=$.nh()
k=$.ni()
j=$.ng()
$.nf()
i=$.nk()
h=$.nj()
g=p.af(s)
if(g!=null)return H.bH(a,H.kZ(s,g))
else{g=o.af(s)
if(g!=null){g.method="call"
return H.bH(a,H.kZ(s,g))}else{g=n.af(s)
if(g==null){g=m.af(s)
if(g==null){g=l.af(s)
if(g==null){g=k.af(s)
if(g==null){g=j.af(s)
if(g==null){g=m.af(s)
if(g==null){g=i.af(s)
if(g==null){g=h.af(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bH(a,H.lX(s,g))}}return H.bH(a,new H.fi(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cR()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bH(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cR()
return a},
lv:function(a){var s
if(a==null)return new H.h7(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.h7(a)},
q9:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qh:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
ce:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qh)
a.$identity=s
return s},
nL:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eT().constructor.prototype):Object.create(new H.bL(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aK
if(typeof r!=="number")return r.w()
$.aK=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lN(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nH(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lN(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nH:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mZ,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nF:H.nE
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nI:function(a,b,c,d){var s=H.lL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lN:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nK(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nI(r,!p,s,b)
if(r===0){p=$.aK
if(typeof p!=="number")return p.w()
$.aK=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kP())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aK
if(typeof p!=="number")return p.w()
$.aK=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kP())+"."+H.f(s)+"("+m+");}")()},
nJ:function(a,b,c,d){var s=H.lL,r=H.nG
switch(b?-1:a){case 0:throw H.b(new H.eK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nK:function(a,b){var s,r,q,p,o,n,m=H.kP(),l=$.lJ
if(l==null)l=$.lJ=H.lI("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nJ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aK
if(typeof o!=="number")return o.w()
$.aK=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aK
if(typeof o!=="number")return o.w()
$.aK=o+1
return new Function(p+o+"}")()},
lr:function(a,b,c,d,e,f,g){return H.nL(a,b,c,d,!!e,!!f,g)},
nE:function(a,b){return H.hl(v.typeUniverse,H.bG(a.a),b)},
nF:function(a,b){return H.hl(v.typeUniverse,H.bG(a.c),b)},
lL:function(a){return a.a},
nG:function(a){return a.c},
kP:function(){var s=$.lK
return s==null?$.lK=H.lI("self"):s},
lI:function(a){var s,r,q,p=new H.bL("self","target","receiver","name"),o=J.kX(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.cj("Field name "+a+" not found."))},
qq:function(a){throw H.b(new P.dR(a))},
qb:function(a){return v.getIsolateTag(a)},
ry:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qk:function(a){var s,r,q,p,o,n=$.mY.$1(a),m=$.kq[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mT.$2(a,n)
if(q!=null){m=$.kq[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kG(s)
$.kq[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kw[n]=s
return s}if(p==="-"){o=H.kG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n2(a,s)
if(p==="*")throw H.b(P.jm(n))
if(v.leafTags[n]===true){o=H.kG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n2(a,s)},
n2:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lx(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kG:function(a){return J.lx(a,!1,null,!!a.$iz)},
ql:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kG(s)
else return J.lx(s,c,null,null)},
qf:function(){if(!0===$.lw)return
$.lw=!0
H.qg()},
qg:function(){var s,r,q,p,o,n,m,l
$.kq=Object.create(null)
$.kw=Object.create(null)
H.qe()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n3.$1(o)
if(n!=null){m=H.ql(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qe:function(){var s,r,q,p,o,n,m=C.J()
m=H.cd(C.K,H.cd(C.L,H.cd(C.v,H.cd(C.v,H.cd(C.M,H.cd(C.N,H.cd(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mY=new H.ks(p)
$.mT=new H.kt(o)
$.n3=new H.ku(n)},
cd:function(a,b){return a(b)||b},
nY:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a2("Illegal RegExp pattern ("+String(n)+")",a,null))},
n5:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q8:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lz:function(a,b,c){var s=H.qp(a,b,c)
return s},
qp:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n4(b),'g'),H.q8(c))},
cl:function cl(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jc:function jc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
et:function et(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a){this.a=a},
iK:function iK(a){this.a=a},
h7:function h7(a){this.a=a
this.b=null},
bs:function bs(){},
f_:function f_(){},
eT:function eT(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
B:function B(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
id:function id(a){this.a=a},
ih:function ih(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cA:function cA(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
e9:function e9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function(a){return a},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cf(b,a))},
pe:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.q7(a,b,c))
return b},
cK:function cK(){},
W:function W(){},
bW:function bW(){},
by:function by(){},
cL:function cL(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cM:function cM(){},
bX:function bX(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
ol:function(a,b){var s=b.c
return s==null?b.c=H.lf(a,b.z,!0):s},
m8:function(a,b){var s=b.c
return s==null?b.c=H.dn(a,"lS",[b.z]):s},
m9:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m9(a.z)
return s===11||s===12},
ok:function(a){return a.cy},
lu:function(a){return H.lg(v.typeUniverse,a,!1)},
bi:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.mE(a,r,!0)
case 7:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.lf(a,r,!0)
case 8:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.mD(a,r,!0)
case 9:q=b.Q
p=H.dx(a,q,a0,a1)
if(p===q)return b
return H.dn(a,b.z,p)
case 10:o=b.z
n=H.bi(a,o,a0,a1)
m=b.Q
l=H.dx(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ld(a,n,l)
case 11:k=b.z
j=H.bi(a,k,a0,a1)
i=b.Q
h=H.pY(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mC(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dx(a,g,a0,a1)
o=b.z
n=H.bi(a,o,a0,a1)
if(f===g&&n===o)return b
return H.le(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hE("Attempted to substitute unexpected RTI kind "+c))}},
dx:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bi(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pZ:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bi(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pY:function(a,b,c,d){var s,r=b.a,q=H.dx(a,r,c,d),p=b.b,o=H.dx(a,p,c,d),n=b.c,m=H.pZ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fK()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
q4:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mZ(s)
return a.$S()}return null},
n_:function(a,b){var s
if(H.m9(b))if(a instanceof H.bs){s=H.q4(a)
if(s!=null)return s}return H.bG(a)},
bG:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.ln(a)}if(Array.isArray(a))return H.ll(a)
return H.ln(J.dy(a))},
ll:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
du:function(a){var s=a.$ti
return s!=null?s:H.ln(a)},
ln:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pl(a,s)},
pl:function(a,b){var s=a instanceof H.bs?a.__proto__.__proto__.constructor:b,r=H.oX(v.typeUniverse,s.name)
b.$ccache=r
return r},
mZ:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lg(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pk:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dt(q,a,H.pp)
if(!H.b_(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dt(q,a,H.ps)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cb
else if(s===t.gR||s===t.H)r=H.po
else if(s===t.N)r=H.pq
else r=s===t.cJ?H.lo:null
if(r!=null)return H.dt(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qi)){q.r="$i"+p
return H.dt(q,a,H.pr)}}else if(p===7)return H.dt(q,a,H.pi)
return H.dt(q,a,H.pg)},
dt:function(a,b,c){a.b=c
return a.b(b)},
pj:function(a){var s,r,q=this
if(!H.b_(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pd
else if(q===t.K)r=H.pc
else r=H.ph
q.a=r
return q.a(a)},
pR:function(a){var s,r=a.y
if(!H.b_(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pg:function(a){var s=this
if(a==null)return H.pR(s)
return H.X(v.typeUniverse,H.n_(a,s),null,s,null)},
pi:function(a){if(a==null)return!0
return this.z.b(a)},
pr:function(a){var s=this,r=s.r
if(a instanceof P.M)return!!a[r]
return!!J.dy(a)[r]},
rw:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mN(a,s)},
ph:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mN(a,s)},
mN:function(a,b){throw H.b(H.oN(H.mu(a,H.n_(a,b),H.am(b,null))))},
mu:function(a,b,c){var s=P.i0(a),r=H.am(b==null?H.bG(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oN:function(a){return new H.dm("TypeError: "+a)},
a8:function(a,b){return new H.dm("TypeError: "+H.mu(a,null,b))},
pp:function(a){return a!=null},
pc:function(a){return a},
ps:function(a){return!0},
pd:function(a){return a},
lo:function(a){return!0===a||!1===a},
ri:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a8(a,"bool"))},
rk:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool"))},
rj:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool?"))},
rl:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"double"))},
rn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double"))},
rm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double?"))},
cb:function(a){return typeof a=="number"&&Math.floor(a)===a},
ro:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a8(a,"int"))},
rq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int"))},
rp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int?"))},
po:function(a){return typeof a=="number"},
rr:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"num"))},
rt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num?"))},
pq:function(a){return typeof a=="string"},
ru:function(a){if(typeof a=="string")return a
throw H.b(H.a8(a,"String"))},
lm:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String"))},
rv:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String?"))},
pU:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.w(r,H.am(a[q],b))
return s},
mO:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
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
a2+=J.lC(H.am(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
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
return J.lC(q===11||q===12?C.a.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.am(a.z,b))+">"
if(l===9){p=H.q_(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pU(o,b)+">"):p}if(l===11)return H.mO(a,b,null)
if(l===12)return H.mO(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
q_:function(a){var s,r=H.n7(a)
if(r!=null)return r
s="minified:"+a
return s},
mF:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oX:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lg(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dp(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dn(a,b,q)
n[b]=o
return o}else return m},
oV:function(a,b){return H.mM(a.tR,b)},
oU:function(a,b){return H.mM(a.eT,b)},
lg:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mA(H.my(a,null,b,c))
r.set(b,s)
return s},
hl:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mA(H.my(a,b,c,!0))
q.set(c,r)
return r},
oW:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ld(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bh:function(a,b){b.a=H.pj
b.b=H.pk
return b},
dp:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aq(null,null)
s.y=b
s.cy=c
r=H.bh(a,s)
a.eC.set(c,r)
return r},
mE:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oS(a,b,r,c)
a.eC.set(r,s)
return s},
oS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b_(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aq(null,null)
q.y=6
q.z=b
q.cy=c
return H.bh(a,q)},
lf:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oR(a,b,r,c)
a.eC.set(r,s)
return s},
oR:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b_(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kx(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kx(q.z))return q
else return H.ol(a,b)}}p=new H.aq(null,null)
p.y=7
p.z=b
p.cy=c
return H.bh(a,p)},
mD:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oP(a,b,r,c)
a.eC.set(r,s)
return s},
oP:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b_(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dn(a,"lS",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aq(null,null)
q.y=8
q.z=b
q.cy=c
return H.bh(a,q)},
oT:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bh(a,s)
a.eC.set(q,r)
return r},
hk:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oO:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dn:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hk(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aq(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bh(a,r)
a.eC.set(p,q)
return q},
ld:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hk(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bh(a,o)
a.eC.set(q,n)
return n},
mC:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hk(m)
if(j>0){s=l>0?",":""
r=H.hk(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oO(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bh(a,o)
a.eC.set(q,r)
return r},
le:function(a,b,c,d){var s,r=b.cy+("<"+H.hk(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
oQ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bi(a,b,r,0)
m=H.dx(a,c,r,0)
return H.le(a,n,m,c!==m)}}l=new H.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bh(a,l)},
my:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oH(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mz(a,r,g,f,!1)
else if(q===46)r=H.mz(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bg(a.u,a.e,f.pop()))
break
case 94:f.push(H.oT(a.u,f.pop()))
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
H.lc(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dn(p,n,o))
else{m=H.bg(p,a.e,n)
switch(m.y){case 11:f.push(H.le(p,m,o,a.n))
break
default:f.push(H.ld(p,m,o))
break}}break
case 38:H.oI(a,f)
break
case 42:l=a.u
f.push(H.mE(l,H.bg(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lf(l,H.bg(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mD(l,H.bg(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fK()
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
H.lc(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mC(p,H.bg(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lc(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oK(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bg(a.u,a.e,h)},
oH:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mz:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mF(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.ok(o)+'"')
d.push(H.hl(s,o,n))}else d.push(p)
return m},
oI:function(a,b){var s=b.pop()
if(0===s){b.push(H.dp(a.u,1,"0&"))
return}if(1===s){b.push(H.dp(a.u,4,"1&"))
return}throw H.b(P.hE("Unexpected extended operation "+H.f(s)))},
bg:function(a,b,c){if(typeof c=="string")return H.dn(a,c,a.sEA)
else if(typeof c=="number")return H.oJ(a,b,c)
else return c},
lc:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bg(a,b,c[s])},
oK:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bg(a,b,c[s])},
oJ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hE("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hE("Bad index "+c+" for "+b.i(0)))},
X:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b_(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b_(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.X(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.X(a,b.z,c,d,e)
if(p===6){s=d.z
return H.X(a,b,c,s,e)}if(r===8){if(!H.X(a,b.z,c,d,e))return!1
return H.X(a,H.m8(a,b),c,d,e)}if(r===7){s=H.X(a,b.z,c,d,e)
return s}if(p===8){if(H.X(a,b,c,d.z,e))return!0
return H.X(a,b,c,H.m8(a,d),e)}if(p===7){s=H.X(a,b,c,d.z,e)
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
if(!H.X(a,k,c,j,e)||!H.X(a,j,e,k,c))return!1}return H.mP(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mP(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pn(a,b,c,d,e)}return!1},
mP:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pn:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.X(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mF(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.X(a,H.hl(a,b,l[p]),c,r[p],e))return!1
return!0},
kx:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b_(a))if(r!==7)if(!(r===6&&H.kx(a.z)))s=r===8&&H.kx(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qi:function(a){var s
if(!H.b_(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b_:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mM:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fK:function fK(){this.c=this.b=this.a=null},
fF:function fF(){},
dm:function dm(a){this.a=a},
n7:function(a){return v.mangledGlobalNames[a]},
qm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hz:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lw==null){H.qf()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jm("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lU()]
if(p!=null)return p
p=H.qk(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.lU(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lU:function(){var s=$.mw
return s==null?$.mw=v.getIsolateTag("_$dart_js"):s},
nV:function(a,b){if(!H.cb(a))throw H.b(P.lG(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a3(a,0,4294967295,"length",null))
return J.nW(new Array(a),b)},
kW:function(a,b){if(!H.cb(a)||a<0)throw H.b(P.cj("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.I("v<0>"))},
nW:function(a,b){return J.kX(H.d(a,b.I("v<0>")))},
kX:function(a){a.fixed$length=Array
return a},
nX:function(a,b){return J.dC(a,b)},
dy:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cx.prototype
return J.e8.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.cy.prototype
if(typeof a=="boolean")return J.e7.prototype
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
qa:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
aY:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
hy:function(a){if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
mX:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bC.prototype
return a},
dz:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bC.prototype
return a},
aZ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
lC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qa(a).w(a,b)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dy(a).q(a,b)},
lD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mX(a).p(a,b)},
ci:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aY(a).h(a,b)},
kL:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n0(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hy(a).l(a,b,c)},
nu:function(a,b){return J.dz(a).C(a,b)},
nv:function(a,b,c){return J.aZ(a).fM(a,b,c)},
nw:function(a,b,c,d){return J.aZ(a).h6(a,b,c,d)},
nx:function(a,b){return J.dz(a).U(a,b)},
dC:function(a,b){return J.mX(a).aT(a,b)},
kM:function(a,b){return J.aY(a).D(a,b)},
hC:function(a,b){return J.hy(a).G(a,b)},
ny:function(a,b,c,d){return J.aZ(a).hy(a,b,c,d)},
kN:function(a,b){return J.hy(a).F(a,b)},
nz:function(a){return J.aZ(a).ghf(a)},
kO:function(a){return J.aZ(a).gd7(a)},
ae:function(a){return J.dy(a).gP(a)},
b0:function(a){return J.hy(a).gO(a)},
aJ:function(a){return J.aY(a).gm(a)},
lE:function(a){return J.hy(a).i2(a)},
nA:function(a,b){return J.aZ(a).i6(a,b)},
nB:function(a,b,c){return J.dz(a).t(a,b,c)},
nC:function(a){return J.dz(a).ie(a)},
a4:function(a){return J.dy(a).i(a)},
a:function a(){},
e7:function e7(){},
cy:function cy(){},
b9:function b9(){},
ez:function ez(){},
bC:function bC(){},
aA:function aA(){},
v:function v(a){this.$ti=a},
ic:function ic(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bw:function bw(){},
cx:function cx(){},
e8:function e8(){},
aN:function aN(){}},P={
ox:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ce(new P.jL(q),1)).observe(s,{childList:true})
return new P.jK(q,s,r)}else if(self.setImmediate!=null)return P.q2()
return P.q3()},
oy:function(a){self.scheduleImmediate(H.ce(new P.jM(a),0))},
oz:function(a){self.setImmediate(H.ce(new P.jN(a),0))},
oA:function(a){P.l7(C.n,a)},
l7:function(a,b){var s=C.c.a0(a.a,1000)
return P.oL(s<0?0:s,b)},
md:function(a,b){var s=C.c.a0(a.a,1000)
return P.oM(s<0?0:s,b)},
oL:function(a,b){var s=new P.dl()
s.em(a,b)
return s},
oM:function(a,b){var s=new P.dl()
s.en(a,b)
return s},
rg:function(a){return new P.c8(a,1)},
oD:function(){return C.a3},
oE:function(a){return new P.c8(a,3)},
pu:function(a,b){return new P.di(a,b.I("di<0>"))},
pQ:function(){var s,r
for(s=$.cc;s!=null;s=$.cc){$.dw=null
r=s.b
$.cc=r
if(r==null)$.dv=null
s.a.$0()}},
pX:function(){$.lp=!0
try{P.pQ()}finally{$.dw=null
$.lp=!1
if($.cc!=null)$.lB().$1(P.mU())}},
pV:function(a){var s=new P.fs(a),r=$.dv
if(r==null){$.cc=$.dv=s
if(!$.lp)$.lB().$1(P.mU())}else $.dv=r.b=s},
pW:function(a){var s,r,q,p=$.cc
if(p==null){P.pV(a)
$.dw=$.dv
return}s=new P.fs(a)
r=$.dw
if(r==null){s.b=p
$.cc=$.dw=s}else{q=r.b
s.b=q
$.dw=r.b=s
if(q==null)$.dv=s}},
mc:function(a,b){var s=$.aI
if(s===C.f)return P.l7(a,b)
return P.l7(a,s.hg(b))},
os:function(a,b){var s=$.aI
if(s===C.f)return P.md(a,b)
return P.md(a,s.d5(b,t.aF))},
mQ:function(a,b,c,d,e){P.pW(new P.kj(d,e))},
pS:function(a,b,c,d){var s,r=$.aI
if(r===c)return d.$0()
$.aI=c
s=r
try{r=d.$0()
return r}finally{$.aI=s}},
pT:function(a,b,c,d,e){var s,r=$.aI
if(r===c)return d.$1(e)
$.aI=c
s=r
try{r=d.$1(e)
return r}finally{$.aI=s}},
jL:function jL(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
dl:function dl(){this.c=0},
k3:function k3(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b){this.a=a
this.b=b},
bE:function bE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
di:function di(a,b){this.a=a
this.$ti=b},
fs:function fs(a){this.a=a
this.b=null},
cS:function cS(){},
eV:function eV(){},
cU:function cU(){},
ka:function ka(){},
kj:function kj(a,b){this.a=a
this.b=b},
jS:function jS(){},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function(a,b){return new H.B(a.I("@<0>").aZ(b).I("B<1,2>"))},
o0:function(a,b,c){return H.q9(a,new H.B(b.I("@<0>").aZ(c).I("B<1,2>")))},
l0:function(a,b){return new H.B(a.I("@<0>").aZ(b).I("B<1,2>"))},
cB:function(a){return new P.d6(a.I("d6<0>"))},
lb:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oG:function(a,b){var s=new P.d7(a,b)
s.c=a.e
return s},
nT:function(a,b,c){var s,r
if(P.lq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ac.push(a)
try{P.pt(a,s)}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}r=P.ma(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kV:function(a,b,c){var s,r
if(P.lq(a))return b+"..."+c
s=new P.S(b)
$.ac.push(a)
try{r=s
r.a=P.ma(r.a,a,", ")}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lq:function(a){var s,r
for(s=$.ac.length,r=0;r<s;++r)if(a===$.ac[r])return!0
return!1},
pt:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
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
o1:function(a,b,c){var s=P.o_(b,c)
a.F(0,new P.ii(s,b,c))
return s},
lV:function(a,b){var s,r,q=P.cB(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
l2:function(a){var s,r={}
if(P.lq(a))return"{...}"
s=new P.S("")
try{$.ac.push(a)
s.a+="{"
r.a=!0
J.kN(a,new P.im(r,s))
s.a+="}"}finally{if(0>=$.ac.length)return H.c($.ac,-1)
$.ac.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d6:function d6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jR:function jR(a){this.a=a
this.c=this.b=null},
d7:function d7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cw:function cw(){},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(){},
i:function i(){},
cF:function cF(){},
im:function im(a,b){this.a=a
this.b=b},
V:function V(){},
hm:function hm(){},
cG:function cG(){},
c4:function c4(a,b){this.a=a
this.$ti=b},
de:function de(){},
d8:function d8(){},
dq:function dq(){},
ov:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.ow(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
ow:function(a,b,c,d){var s=a?$.nm():$.nl()
if(s==null)return null
if(0===c&&d===b.length)return P.mk(s,b)
return P.mk(s,b.subarray(c,P.bc(c,d,b.length)))},
mk:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ad(r)}return null},
lH:function(a,b,c,d,e,f){if(C.c.be(f,4)!==0)throw H.b(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
pb:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pa:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.W()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aY(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.a9()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
jv:function jv(){},
jw:function jw(){},
hI:function hI(){},
hJ:function hJ(){},
dN:function dN(){},
dQ:function dQ(){},
hY:function hY(){},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
i9:function i9(a){this.a=a},
jt:function jt(){},
jx:function jx(){},
k8:function k8(a){this.b=0
this.c=a},
ju:function ju(a){this.a=a},
k7:function k7(a){this.a=a
this.b=16
this.c=0},
kv:function(a,b){var s=H.m1(a,b)
if(s!=null)return s
throw H.b(P.a2(a,null,null))},
nQ:function(a){if(a instanceof H.bs)return a.i(0)
return"Instance of '"+H.f(H.eG(a))+"'"},
ij:function(a,b,c,d){var s,r=c?J.kW(a,d):J.nV(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
l1:function(a,b,c){var s,r=H.d([],c.I("v<0>"))
for(s=J.b0(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.kX(r)},
o2:function(a,b,c){var s,r,q=J.kW(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
eX:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bc(b,c,r)
if(b<=0){if(typeof c!=="number")return c.aa()
q=c<r}else q=!0
return H.m2(q?s.slice(b,c):s)}if(t.bm.b(a))return H.oh(a,b,P.bc(b,c,a.length))
return P.oq(a,b,c)},
oq:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a3(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a3(c,b,a.length,o,o))
r=J.b0(a)
for(q=0;q<b;++q)if(!r.u())throw H.b(P.a3(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.u())throw H.b(P.a3(c,b,q,o,o))
p.push(r.gB(r))}return H.m2(p)},
oi:function(a){return new H.e9(a,H.nY(a,!1,!0,!1,!1,!1))},
ma:function(a,b,c){var s=J.b0(b)
if(!s.u())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.u())}else{a+=H.f(s.gB(s))
for(;s.u();)a=a+c+H.f(s.gB(s))}return a},
mg:function(){var s=H.o8()
if(s!=null)return P.ou(s)
throw H.b(P.A("'Uri.base' is not supported"))},
k6:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.ns().b
if(typeof b!="string")H.q(H.av(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghx().c5(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ap(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nN:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dT:function(a){if(a>=10)return""+a
return"0"+a},
lP:function(a){return new P.bt(1000*a)},
i0:function(a){if(typeof a=="number"||H.lo(a)||null==a)return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nQ(a)},
hE:function(a){return new P.dF(a)},
cj:function(a){return new P.af(!1,null,null,a)},
lG:function(a,b,c){return new P.af(!0,a,b,c)},
nD:function(a,b){if(a==null)throw H.b(new P.af(!1,null,b,"Must not be null"))
return a},
m3:function(a){var s=null
return new P.c_(s,s,!1,s,s,a)},
eH:function(a,b){return new P.c_(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.c_(b,c,!0,a,d,"Invalid value")},
bc:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.y(c)
s=a>c}else s=!0
if(s)throw H.b(P.a3(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
s=b>c}else s=!0
if(s)throw H.b(P.a3(b,a,c,"end",null))
return b}return c},
m4:function(a,b){if(a<0)throw H.b(P.a3(a,0,null,b,null))
return a},
N:function(a,b,c,d,e){var s=e==null?J.aJ(b):e
return new P.e5(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fk(a)},
jm:function(a){return new P.fh(a)},
l6:function(a){return new P.c1(a)},
b4:function(a){return new P.dO(a)},
u:function(a){return new P.fH(a)},
a2:function(a,b,c){return new P.i6(a,b,c)},
ly:function(a){H.qm(a)},
ou:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.mf(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gdU()
else if(s===32)return P.mf(C.a.t(a5,5,a4),0,a3).gdU()}r=P.ij(8,0,!1,t.S)
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
if(P.mR(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.mR(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a4(a5,"..",m)))h=l>m+2&&C.a.a4(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a4(a5,"file",0)){if(o<=0){if(!C.a.a4(a5,"/",m)){g="file:///"
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
a5=C.a.aW(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a4(a5,"http",0)){if(q&&n+3===m&&C.a.a4(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a4(a5,"https",0)){if(q&&n+4===m&&C.a.a4(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h1(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.p4(a5,0,p)
else{if(p===0)P.c9(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.p5(a5,d,o-1):""
b=P.p1(a5,o,n,!1)
q=n+1
if(q<m){a=H.m1(C.a.t(a5,q,m),a3)
a0=P.p3(a==null?H.q(P.a2("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p2(a5,m,l,a3,i,b!=null)
a2=l<k?P.li(a5,l+1,k,a3):a3
return new P.bF(i,c,b,a0,a1,a2,k<a4?P.p0(a5,k+1,a4):a3)},
mi:function(a){var s=t.N
return C.b.hD(H.d(a.split("&"),t.s),P.l0(s,s),new P.jr(C.e))},
ot:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jo(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.U(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kv(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.a_()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kv(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.a_()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
mh:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jp(a),b=new P.jq(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.U(a,r)
if(n===58){if(r===a0){++r
if(C.a.U(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaw(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.ot(a,q,a1)
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
mG:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c9:function(a,b,c){throw H.b(P.a2(c,a,b))},
p3:function(a,b){if(a!=null&&a===P.mG(b))return null
return a},
p1:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.c9(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oZ(a,r,s)
if(q<s){p=q+1
o=P.mL(a,C.a.a4(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mh(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bs(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mL(a,C.a.a4(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mh(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.p7(a,b,c)},
oZ:function(a,b,c){var s=C.a.bs(a,"%",b)
return s>=b&&s<c?s:c},
mL:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.S(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.lj(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.S("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.c9(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.S("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.S("")
n=i}else n=i
n.a+=j
n.a+=P.lh(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.lj(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.S("")
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
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.S("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.c9(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.S("")
m=q}else m=q
m.a+=l
m.a+=P.lh(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p4:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mI(C.a.C(a,b)))P.c9(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.c9(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.oY(r?a.toLowerCase():a)},
oY:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p5:function(a,b,c){return P.dr(a,b,c,C.Y,!1)},
p2:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dr(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a2(s,"/"))s="/"+s
return P.p6(s,e,f)},
p6:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a2(a,"/"))return P.p8(a,!s||c)
return P.p9(a)},
li:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.cj("Both query and queryParameters specified"))
return P.dr(a,b,c,C.k,!0)}if(d==null)return null
s=new P.S("")
r.a=""
d.F(0,new P.k4(new P.k5(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p0:function(a,b,c){return P.dr(a,b,c,C.k,!0)},
lj:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.kr(s)
p=H.kr(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aQ(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ap(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lh:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.fX(a,6*o)&63|p
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
n+=3}}return P.eX(s,0,null)},
dr:function(a,b,c,d,e){var s=P.mK(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lj(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.c9(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lh(o)}}if(p==null){p=new P.S("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.y(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mJ:function(a){if(C.a.a2(a,"."))return!0
return C.a.dq(a,"/.")!==-1},
p9:function(a){var s,r,q,p,o,n,m
if(!P.mJ(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p8:function(a,b){var s,r,q,p,o,n
if(!P.mJ(a))return!b?P.mH(a):a
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
r=P.mH(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.j(s,"/")},
mH:function(a){var s,r,q,p=a.length
if(p>=2&&P.mI(J.nu(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.a6(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p_:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.cj("Invalid URL encoding"))}}return s},
lk:function(a,b,c,d,e){var s,r,q,p,o=b
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
if(r>127)throw H.b(P.cj("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.cj("Truncated URI"))
p.push(P.p_(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a2.c5(p)},
mI:function(a){var s=a|32
return 97<=s&&s<=122},
mf:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a2(k,a,r))}}if(q<0&&r>b)throw H.b(P.a2(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaw(j)
if(p!==44||r!==n+7||!C.a.a4(a,"base64",n+1))throw H.b(P.a2("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.hL(0,a,m,s)
else{l=P.mK(a,m,s,C.k,!0)
if(l!=null)a=C.a.aW(a,m,s,l)}return new P.jn(a,j,c)},
pf:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.o2(22,new P.ke(),t.gc),l=new P.kd(m),k=new P.kf(),j=new P.kg(),i=l.$2(0,225)
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
mR:function(a,b,c,d,e){var s,r,q,p,o,n=$.nt()
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
aw:function aw(){},
ah:function ah(a,b){this.a=a
this.b=b},
Y:function Y(){},
bt:function bt(a){this.a=a},
hU:function hU(){},
hV:function hV(){},
K:function K(){},
dF:function dF(a){this.a=a},
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
e5:function e5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fk:function fk(a){this.a=a},
fh:function fh(a){this.a=a},
c1:function c1(a){this.a=a},
dO:function dO(a){this.a=a},
ex:function ex(){},
cR:function cR(){},
dR:function dR(a){this.a=a},
fH:function fH(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(){},
l:function l(){},
h:function h(){},
e6:function e6(){},
n:function n(){},
H:function H(){},
ao:function ao(){},
R:function R(){},
M:function M(){},
x:function x(){},
S:function S(a){this.a=a},
jr:function jr(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
k5:function k5(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(){},
kd:function kd(a){this.a=a},
kf:function kf(){},
kg:function kg(){},
h1:function h1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fy:function fy(a,b,c,d,e,f,g){var _=this
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
s=P.l0(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
q5:function(a){var s={}
a.F(0,new P.kk(s))
return s},
jY:function jY(){},
k_:function k_(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
jZ:function jZ(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
i4:function i4(){},
i5:function i5(){},
jQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h_:function h_(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
ed:function ed(){},
aR:function aR(){},
ev:function ev(){},
iL:function iL(){},
c0:function c0(){},
eW:function eW(){},
m:function m(){},
aT:function aT(){},
f7:function f7(){},
fO:function fO(){},
fP:function fP(){},
fW:function fW(){},
fX:function fX(){},
h9:function h9(){},
ha:function ha(){},
hi:function hi(){},
hj:function hj(){},
be:function be(){},
hG:function hG(){},
dH:function dH(){},
hH:function hH(a){this.a=a},
dI:function dI(){},
b2:function b2(){},
ew:function ew(){},
fu:function fu(){},
eR:function eR(){},
h5:function h5(){},
h6:function h6(){}},W={
lF:function(){var s=document.createElement("a")
return s},
lM:function(){var s=document.createElement("canvas")
return s},
nP:function(a,b,c){var s,r=document.body
r.toString
s=C.q.ae(r,a,b,c)
s.toString
r=new H.aW(new W.a0(s),new W.hW(),t.ac.I("aW<i.E>"))
return t.h.a(r.gaL(r))},
hX:function(a){return"wheel"},
cr:function(a){var s,r,q="element tag unavailable"
try{s=J.aZ(a)
if(typeof s.gdQ(a)=="string")q=s.gdQ(a)}catch(r){H.ad(r)}return q},
nS:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ad(s)}return q},
jP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mx:function(a,b,c,d){var s=W.jP(W.jP(W.jP(W.jP(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a1:function(a,b,c,d){var s=new W.fG(a,b,c==null?null:W.mS(new W.jO(c),t.aD),!1)
s.h3()
return s},
mv:function(a){var s=W.lF(),r=window.location
s=new W.c7(new W.jV(s,r))
s.ed(a)
return s},
oB:function(a,b,c,d){return!0},
oC:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mB:function(){var s=t.N,r=P.lV(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.hd(r,P.cB(s),P.cB(s),P.cB(s),null)
s.ej(null,new H.cH(C.A,new W.k1(),t.eM),q,null)
return s},
mS:function(a,b){var s=$.aI
if(s===C.f)return a
return s.d5(a,b)},
r:function r(){},
hD:function hD(){},
dD:function dD(){},
dE:function dE(){},
bK:function bK(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
ax:function ax(){},
hN:function hN(){},
J:function J(){},
cn:function cn(){},
hO:function hO(){},
an:function an(){},
aM:function aM(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
b5:function b5(){},
hS:function hS(){},
co:function co(){},
cp:function cp(){},
dW:function dW(){},
hT:function hT(){},
fv:function fv(a,b){this.a=a
this.b=b},
C:function C(){},
hW:function hW(){},
j:function j(){},
e:function e(){},
ai:function ai(){},
bO:function bO(){},
dZ:function dZ(){},
e0:function e0(){},
az:function az(){},
i8:function i8(){},
bv:function bv(){},
cv:function cv(){},
bR:function bR(){},
bx:function bx(){},
ik:function ik(){},
iD:function iD(){},
bT:function bT(){},
el:function el(){},
iE:function iE(a){this.a=a},
em:function em(){},
iF:function iF(a){this.a=a},
aC:function aC(){},
en:function en(){},
aj:function aj(){},
a0:function a0(a){this.a=a},
w:function w(){},
cN:function cN(){},
aE:function aE(){},
eB:function eB(){},
eJ:function eJ(){},
iT:function iT(a){this.a=a},
eL:function eL(){},
ar:function ar(){},
eN:function eN(){},
aF:function aF(){},
eO:function eO(){},
aG:function aG(){},
eU:function eU(){},
j3:function j3(a){this.a=a},
as:function as(){},
bd:function bd(){},
cT:function cT(){},
eY:function eY(){},
eZ:function eZ(){},
c2:function c2(){},
at:function at(){},
aa:function aa(){},
f1:function f1(){},
f2:function f2(){},
j7:function j7(){},
aH:function aH(){},
bB:function bB(){},
f6:function f6(){},
jb:function jb(){},
aV:function aV(){},
js:function js(){},
fp:function fp(){},
bf:function bf(){},
c5:function c5(){},
c6:function c6(){},
fw:function fw(){},
d4:function d4(){},
fL:function fL(){},
d9:function d9(){},
h4:function h4(){},
hb:function hb(){},
ft:function ft(){},
fD:function fD(a){this.a=a},
kU:function kU(a,b){this.a=a
this.$ti=b},
fG:function fG(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jO:function jO(a){this.a=a},
la:function la(a){this.$ti=a},
c7:function c7(a){this.a=a},
L:function L(){},
cO:function cO(a){this.a=a},
iI:function iI(a){this.a=a},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(){},
jW:function jW(){},
jX:function jX(){},
hd:function hd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k1:function k1(){},
hc:function hc(){},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ak:function ak(){},
jV:function jV(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a
this.b=!1},
k9:function k9(a){this.a=a},
fx:function fx(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fY:function fY(){},
fZ:function fZ(){},
h0:function h0(){},
dg:function dg(){},
dh:function dh(){},
h2:function h2(){},
h3:function h3(){},
h8:function h8(){},
he:function he(){},
hf:function hf(){},
dj:function dj(){},
dk:function dk(){},
hg:function hg(){},
hh:function hh(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){}},K={
O:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.iO(s,r)},
t:function(a){var s=new K.iU()
s.ea(a)
return s},
b1:function b1(){},
e3:function e3(){},
io:function io(){},
a9:function a9(){this.a=null},
iO:function iO(a,b){this.a=a
this.b=b},
iU:function iU(){this.a=null}},L={
j9:function(){var s=new L.j8()
s.a=new H.B(t.cn)
s.b=new H.B(t.w)
s.c=P.cB(t.X)
return s},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.b=a
this.c=null},
j8:function j8(){var _=this
_.d=_.c=_.b=_.a=null},
f8:function f8(a){this.b=a
this.a=this.c=null}},O={
kR:function(a){var s=new O.ag(a.I("ag<0>"))
s.bE(a)
return s},
ag:function ag(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cI:function cI(){this.b=this.a=null},
lW:function(){var s,r=new O.ei(),q=O.kR(t.hc)
r.e=q
q.bf(r.geW(),r.geY())
q=new O.aQ(r,"emission")
q.c=new A.a6(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.f=q
q=new O.aQ(r,"ambient")
q.c=new A.a6(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.r=q
q=new O.aQ(r,"diffuse")
q.c=new A.a6(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.x=q
q=new O.aQ(r,"invDiffuse")
q.c=new A.a6(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.y=q
q=new O.iu(r,"specular")
q.c=new A.a6(!1,!1,!1)
q.f=new V.Z(0,0,0)
q.ch=100
r.z=q
q=new O.iq(r,"bump")
q.c=new A.a6(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aQ(r,"reflect")
q.c=new A.a6(!1,!1,!1)
q.f=new V.Z(0,0,0)
r.cx=q
q=new O.it(r,"refract")
q.c=new A.a6(!1,!1,!1)
q.f=new V.Z(0,0,0)
q.ch=1
r.cy=q
q=new O.ip(r,"alpha")
q.c=new A.a6(!1,!1,!1)
q.f=1
r.db=q
q=new D.cz()
q.bE(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.ct(q.geU(),q.gfv(),q.gfB())
r.dx=q
s=new O.is()
s.b=new V.aL(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.P():s
q.n(0,r.gfO())
q=r.dx
s=q.z
q=s==null?q.z=D.P():s
q.n(0,r.gek())
r.fr=null
return r},
ei:function ei(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){},
ip:function ip(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ej:function ej(){},
iq:function iq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aQ:function aQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
is:function is(){var _=this
_.e=_.d=_.c=_.b=null},
it:function it(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iu:function iu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f0:function f0(){}},E={
kT:function(){var s,r=new E.bu()
r.a=""
r.b=!0
s=O.kR(t.l)
r.y=s
s.bf(r.ghM(),r.ghP())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sab(0,null)
r.sbc(null)
r.saI(null)
return r},
ms:function(){if(J.kM(window.navigator.vendor,"Google"))return C.G
if(J.kM(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.aY(s).D(s,"Trident")||C.a.D(s,"Edge"))return C.t
if(J.kM(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mt:function(){var s=window.navigator.appVersion
if(J.aY(s).D(s,"Win"))return C.a_
if(C.a.D(s,"Mac"))return C.B
if(C.a.D(s,"Linux"))return C.a0
return C.a1},
oj:function(a,b){var s=new E.iP(a)
s.e9(a,b)
return s},
or:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mb(a,!0,!0,!0,!1)
s=W.lM()
r=s.style
r.width="100%"
r.height="100%"
J.kO(a).n(0,s)
return E.mb(s,!0,!0,!0,!1)},
mb:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f3(),n=t.z,m=C.m.dY(a,"webgl2",P.o0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oj(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.fm(a)
s=new X.ie()
s.c=new X.aD(!1,!1,!1)
s.d=P.cB(t.e)
n.b=s
s=new X.iG(n)
s.f=0
s.r=V.bz()
s.x=V.bz()
s.ch=s.Q=1
n.c=s
s=new X.il(n)
s.r=0
s.x=V.bz()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.ja(n)
s.f=V.bz()
s.r=V.bz()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hZ
n.Q=(s==null?$.hZ=new E.fE(E.ms(),E.mt()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a1(q,"contextmenu",n.gf5(),!1))
n.z.push(W.a1(a,"focus",n.gfb(),!1))
n.z.push(W.a1(a,"blur",n.gf_(),!1))
n.z.push(W.a1(q,"keyup",n.gff(),!1))
n.z.push(W.a1(q,"keydown",n.gfd(),!1))
n.z.push(W.a1(a,"mousedown",n.gfj(),!1))
n.z.push(W.a1(a,"mouseup",n.gfn(),!1))
n.z.push(W.a1(a,p,n.gfl(),!1))
r=n.z
W.hX(a)
W.hX(a)
r.push(W.a1(a,W.hX(a),n.gfp(),!1))
n.z.push(W.a1(q,p,n.gf7(),!1))
n.z.push(W.a1(q,"mouseup",n.gf9(),!1))
n.z.push(W.a1(q,"pointerlockchange",n.gfs(),!1))
n.z.push(W.a1(a,"touchstart",n.gfH(),!1))
n.z.push(W.a1(a,"touchend",n.gfD(),!1))
n.z.push(W.a1(a,"touchmove",n.gfF(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ah(Date.now(),!1)
o.db=0
o.cS()
return o},
hK:function hK(){},
bu:function bu(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bM:function bM(a){this.b=a},
bY:function bY(a){this.b=a},
fE:function fE(a,b){this.a=a
this.b=b},
iP:function iP(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
f3:function f3(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
j6:function j6(a){this.a=a}},Z={
l9:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.ca(c)),35044)
a.bindBuffer(b,null)
return new Z.fq(b,s)},
au:function(a){return new Z.bD(a)},
fq:function fq(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jJ:function jJ(a){this.a=a},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a){this.a=a}},D={
P:function(){var s=new D.bN()
s.d=0
return s},
hL:function hL(){},
bN:function bN(){var _=this
_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
T:function T(){this.b=null},
b7:function b7(){this.b=null},
b8:function b8(){this.b=null},
D:function D(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bo:function bo(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){},
U:function U(){},
cz:function cz(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eD:function eD(){},
eP:function eP(){}},X={dM:function dM(a,b){this.a=a
this.b=b},eb:function eb(a,b){this.a=a
this.b=b},ie:function ie(){var _=this
_.d=_.c=_.b=_.a=null},cE:function cE(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},il:function il(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},bU:function bU(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iG:function iG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bV:function bV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eE:function eE(){},cV:function cV(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ja:function ja(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fm:function fm(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nR:function(a){var s=new X.i7(),r=new V.aL(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.m7
if(r==null){r=V.m6(0,0,1,1)
$.m7=r}s.r=r
return s},
kQ:function kQ(){},
i7:function i7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
j4:function j4(){}},V={
hA:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qs:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.be(a-b,s)
return(a<0?a+s:a)+b},
I:function(a,b,c){if(a==null)return C.a.ag("null",c)
$.F().toString
return C.a.ag(C.d.dS(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cg:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.I(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.ag(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
bS:function(){var s=$.cJ
return s==null?$.cJ=V.bb(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
bb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l4:function(a,b,c){return V.bb(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l3:function(a,b,c,d){return V.bb(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bz:function(){var s=$.lZ
return s==null?$.lZ=new V.al(0,0):s},
o6:function(){var s=$.aS
return s==null?$.aS=new V.Q(0,0,0):s},
m6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eI(a,b,c,d)},
d2:function(){var s=$.mq
return s==null?$.mq=new V.E(0,0,0):s},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(){},
ek:function ek(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aB:function aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qn:function(a){P.os(C.S,new V.kH(a))},
om:function(a){var s=new V.iZ()
s.ec(a,!0)
return s},
b3:function b3(){},
kH:function kH(a){this.a=a},
dS:function dS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e1:function e1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e4:function e4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eA:function eA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iM:function iM(a){this.a=a
this.c=null},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(){this.b=this.a=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
j1:function j1(a){this.a=a}},U={
lO:function(){var s=new U.hM()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
dP:function(a){var s=new U.ck()
s.a=a
return s},
e2:function(){var s=new U.bP()
s.bE(t.ah)
s.bf(s.geg(),s.gfz())
s.e=null
s.f=V.bS()
s.r=0
return s},
mj:function(a,b){var s,r,q,p=new U.d0(),o=U.lO()
o.sdW(0,!0)
o.sdv(6.283185307179586)
o.sdz(0)
o.sa1(0,0)
o.sdw(100)
o.sV(0)
o.sd9(0.5)
p.b=o
s=p.gbj()
o.gA().n(0,s)
o=U.lO()
o.sdW(0,!0)
o.sdv(6.283185307179586)
o.sdz(0)
o.sa1(0,0)
o.sdw(100)
o.sV(0)
o.sd9(0.5)
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
r=new X.aD(a,!1,!1)
q=p.d
p.d=r
o=new D.D("modifiers",q,r)
o.b=!0
p.S(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.D("invertX",o,!1)
o.b=!0
p.S(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.D("invertY",o,!1)
o.b=!0
p.S(o)}p.c0(b)
return p},
hM:function hM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ck:function ck(){this.b=this.a=null},
bP:function bP(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a_:function a_(){},
d0:function d0(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dX:function dX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o4:function(a,b){var s=a.b5,r=new A.eh(b,s)
r.eb(b,s)
r.e8(a,b)
return r},
o5:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gap(a4)+a5.gap(a5)+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+a9.gap(a9)+b0.gap(b0)+b1.gap(b1)+b2.gap(b2)+"_"
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
c=new Z.bD(c.a|s.a)}if(g){s=$.bl()
c=new Z.bD(c.a|s.a)}if(f){s=$.bk()
c=new Z.bD(c.a|s.a)}return new A.ir(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kh:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ki:function(a,b,c){var s
A.kh(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hB(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pz:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kh(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pv:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ki(b,r,"ambient")
b.a+="\n"},
px:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ki(b,r,"diffuse")
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
pA:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ki(b,r,"invDiffuse")
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
pG:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ki(b,r,"specular")
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
pC:function(a,b){var s,r,q
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
pE:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kh(b,r,"reflect")
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
pF:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kh(b,r,"refract")
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
pw:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hB(r)
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
if(typeof s!=="number")return s.a9()
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
py:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hB(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.a9()
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
pD:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hB(r)
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
if(typeof s!=="number")return s.a9()
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
pH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hB(r)
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
if(typeof s!=="number")return s.a9()
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
if(m){s=$.hZ
if(s==null)s=$.hZ=new E.fE(E.ms(),E.mt())
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
pB:function(a,b){var s,r
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
pI:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.S("")
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
A.pz(a,h)
A.pv(a,h)
A.px(a,h)
A.pA(a,h)
A.pG(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pE(a,h)
A.pF(a,h)}A.pC(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pw(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.py(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pD(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pH(a,o[m],h)
A.pB(a,h)}o=h.a+="// === Main ===\n"
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
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
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
pJ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bq+"];\n"
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
pL:function(a,b){var s
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
pK:function(a,b){var s
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
pN:function(a,b){var s,r
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
pO:function(a,b){var s,r
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
pM:function(a,b){var s
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
pP:function(a,b){var s
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
hB:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
l8:function(a,b,c,d,e){var s=new A.jf(a,c,e)
s.f=d
P.ij(d,0,!1,t.e)
return s},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a){this.a=a},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a,b){var _=this
_.iq=_.ip=_.br=_.b5=_.bq=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iD=_.iC=_.iB=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.iA=_.iz=_.di=_.iy=_.ix=_.dh=_.dg=_.iw=_.iv=_.df=_.de=_.iu=_.it=_.dd=_.is=_.ir=_.dc=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dJ:function dJ(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bq=b5
_.b5=b6
_.br=b7},
cW:function cW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cX:function cX(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cZ:function cZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
d_:function d_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cQ:function cQ(){},
f9:function f9(){},
jk:function jk(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
ji:function ji(a,b,c){this.a=a
this.c=b
this.d=c},
jj:function jj(a,b,c){this.a=a
this.c=b
this.d=c},
jf:function jf(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fa:function fa(a,b,c){this.a=a
this.c=b
this.d=c},
jg:function jg(a,b,c){this.a=a
this.c=b
this.d=c},
fc:function fc(a,b,c){this.a=a
this.c=b
this.d=c},
fd:function fd(a,b,c){this.a=a
this.c=b
this.d=c},
jl:function jl(a,b,c){this.a=a
this.c=b
this.d=c},
fe:function fe(a,b,c){this.a=a
this.c=b
this.d=c},
cY:function cY(a,b,c){this.a=a
this.c=b
this.d=c},
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ls:function(a,b,c,d){var s=F.l5()
F.ds(s,b,c,d,a,1,0,0,1)
F.ds(s,b,c,d,a,0,1,0,3)
F.ds(s,b,c,d,a,0,0,1,2)
F.ds(s,b,c,d,a,-1,0,0,0)
F.ds(s,b,c,d,a,0,-1,0,0)
F.ds(s,b,c,d,a,0,0,-1,3)
s.au()
return s},
kc:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
ds:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.E(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.E(s+a5,r+a3,q+a4)
o=new V.E(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.E(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.kc(g)
j=F.kc(f)
i=F.lA(a1,a2,new F.kb(h,F.kc(e),F.kc(d),j,k,a0),b)
if(i!=null)a.b8(i)},
mW:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.l5()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.E(0,0,r).J()
p.push(o.h9(new V.bA(a,-1,-1,-1),new V.aL(1,1,1,1),new V.Q(0,0,c),new V.E(0,0,r),new V.al(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.y(i)
n=new V.E(k,j,r).J()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fo(new V.bA(a,-1,-1,-1),null,new V.aL(h,f,g,1),new V.Q(k*i,j*i,c),new V.E(0,0,r),new V.al(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.h7(p)
return s},
lt:function(a,b,c){return F.q6(!0,a,1,new F.kl(1,c),b)},
q6:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.lA(c,e,new F.kn(d),r)
if(s==null)return r
s.au()
s.c_()
if(b)s.b8(F.mW(3,!1,1,new F.ko(d),e))
s.b8(F.mW(1,!0,-1,new F.kp(d),e))
return s},
qo:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kI()
r=F.ls(a,null,new F.kJ(q,1),b)
r.c_()
return r},
n6:function(){return F.mV(15,30,0.5,1,new F.kK())},
qj:function(){return F.mV(12,120,0.3,1,new F.ky(3,2))},
mV:function(a,b,c,d,e){var s=F.lA(a,b,new F.km(e,d,b,c),null)
if(s==null)return null
s.au()
s.c_()
return s},
lA:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.l5()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fo(e,e,new V.aL(n,0,0,1),e,e,new V.al(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.c6(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.fo(e,e,new V.aL(h,g,f,1),e,e,new V.al(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.c6(d))}}s.d.h8(a+1,b+1,r)
return s},
cs:function(a,b,c){var s=new F.dY(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.bW(a)
s.bX(b)
s.fT(c)
s.a.a.d.b.push(s)
s.a.a.X()
return s},
nZ:function(a,b){var s=new F.ee(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.bW(a)
s.bX(b)
s.a.a.c.b.push(s)
s.a.a.X()
return s},
l5:function(){var s=new F.iV(),r=new F.jy(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.iY(s)
r.b=H.d([],t.o)
s.b=r
r=new F.iX(s)
r.b=H.d([],t.L)
s.c=r
r=new F.iW(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
fo:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fn(),p=new F.jG()
p.b=H.d([],t.o)
q.b=p
p=new F.jC()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jz()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.nn()
q.e=0
p=$.bn()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bm().a)!==0?e:r
q.x=(s&$.bl().a)!==0?b:r
q.y=(s&$.bI().a)!==0?f:r
q.z=(s&$.bJ().a)!==0?g:r
q.Q=(s&$.no().a)!==0?c:r
q.ch=(s&$.ch().a)!==0?i:0
q.cx=(s&$.bk().a)!==0?a:r
return q},
kb:function kb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kl:function kl(a,b){this.a=a
this.b=b},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kI:function kI(){},
kJ:function kJ(a,b){this.a=a
this.b=b},
kK:function kK(){},
ky:function ky(a,b){this.a=a
this.b=b},
km:function km(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(){},
j2:function j2(){},
ee:function ee(){this.b=this.a=null},
ig:function ig(){},
je:function je(){},
eC:function eC(){this.a=null},
iV:function iV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){this.a=a
this.b=null},
iX:function iX(a){this.a=a
this.b=null},
iY:function iY(a){this.a=a
this.b=null},
fn:function fn(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jI:function jI(a){this.a=a},
jH:function jH(a){this.a=a},
jy:function jy(a){this.a=a
this.c=this.b=null},
jz:function jz(){this.d=this.c=this.b=null},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(){this.c=this.b=null},
jE:function jE(){},
jD:function jD(){},
jF:function jF(){},
iJ:function iJ(){},
jG:function jG(){this.b=null}},T={j5:function j5(){}},Q={
n1:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=V.om("Test 048"),a5=W.lM()
a5.className="pageLargeCanvas"
a5.id=a2
a4.a.appendChild(a5)
s=t.i
a4.d2(H.d(["WIP ([Issue #120|https://github.com/Grant-Nelson/ThreeDart/issues/120]) ","Test of the Material Lighting shader with a bar light. ","The bar light hasn't been finished yet so this test is more of a ","testbed for it's development."],s))
a4.h5(H.d(["shapes"],s))
a4.d2(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a2)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.or(r,!0,!0,!0,!1)
p=E.kT()
o=U.e2()
o.n(0,U.mj(!0,q.x))
p.saI(o)
p.sab(0,F.n6())
n=E.kT()
n.saI(U.dP(V.l3(3,3,3,1)))
o=F.ls(1,a3,a3,1)
o.cg()
n.sab(0,o)
m=U.e2()
m.n(0,U.mj(!1,q.x))
o=q.x
l=new U.d1()
l.c=0.01
l.e=l.d=0
k=new X.aD(!1,!1,!1)
l.b=k
j=new D.D("modifiers",a3,k)
j.b=!0
l.S(j)
l.c0(o)
m.n(0,l)
m.n(0,U.dP(V.l4(0,0,5)))
i=O.lW()
o=i.r
o.saE(0,new V.Z(0.15,0.15,0.15))
o=i.x
o.saE(0,new V.Z(0.4,0.4,0.4))
o=i.z
o.saE(0,new V.Z(0.3,0.3,0.3))
o=i.z
o.cU(new A.a6(!0,!1,!1))
o.cV(100)
h=new M.dX()
h.a=!0
o=O.kR(t.l)
h.e=o
o.bf(h.gf1(),h.gf3())
h.y=h.x=h.r=h.f=null
g=X.nR(a3)
f=new X.ey()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saI(a3)
o=f.c
$.F().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){f.c=1.0471975511965976
o=new D.D("fov",o,1.0471975511965976)
o.b=!0
f.aN(o)}o=f.d
$.F().toString
if(!(Math.abs(o-0.1)<1e-9)){f.d=0.1
o=new D.D("near",o,0.1)
o.b=!0
f.aN(o)}o=f.e
$.F().toString
if(!(Math.abs(o-2000)<1e-9)){f.e=2000
o=new D.D("far",o,2000)
o.b=!0
f.aN(o)}o=h.b
if(o!==f){if(o!=null)o.gA().K(0,h.gaq())
e=h.b
h.b=f
f.gA().n(0,h.gaq())
o=new D.D("camera",e,h.b)
o.b=!0
h.aA(o)}o=h.c
if(o!==g){if(o!=null)o.gA().K(0,h.gaq())
e=h.c
h.c=g
g.gA().n(0,h.gaq())
o=new D.D("target",e,h.c)
o.b=!0
h.aA(o)}h.sbc(a3)
h.sbc(i)
h.e.n(0,n)
h.e.n(0,p)
h.b.saI(m)
o=q.d
if(o!==h){if(o!=null)o.gA().K(0,q.gcA())
q.d=h
h.gA().n(0,q.gcA())
q.cB()}d=new V.Z(1,0,0)
c=E.kT()
o=U.e2()
o.n(0,U.dP(V.l3(0.01,0.01,3,1)))
c.saI(o)
c.sab(0,F.lt(!0,8,1))
o=O.lW()
o.f.saE(0,d)
c.sbc(o)
b=U.e2()
b.n(0,U.dP(V.l4(0,0,2.5)))
a=U.e2()
a.n(0,U.dP(V.l4(0,0,-2.5)))
a0=new D.bo()
a0.e=new V.Z(1,1,1)
a0.r=1
a0.y=a0.x=0
a0.z=!0
a0.a=V.bS()
a0.b=V.bS()
e=a0.c
a0.c=b
b.gA().n(0,a0.gbF())
o=new D.D("startMover",e,a0.c)
o.b=!0
a0.a5(o)
if(!J.G(a0.d,a)){o=a0.d
if(o!=null)o.gA().K(0,a0.gbF())
e=a0.d
a0.d=a
a.gA().n(0,a0.gbF())
o=new D.D("endMover",e,a0.d)
o.b=!0
a0.a5(o)}if(!a0.e.q(0,d)){e=a0.e
a0.e=d
o=new D.D("color",e,d)
o.b=!0
a0.a5(o)}o=$.mr
if(o==null){o=new V.d3(1,0.00390625,0.0000152587890625,0)
$.mr=o
a1=o}else a1=o
if(!J.G(a0.f,a1)){e=a0.f
a0.f=a1
o=new D.D("shadowAdjust",e,a1)
o.b=!0
a0.a5(o)}o=a0.r
$.F().toString
if(!(Math.abs(o-1)<1e-9)){a0.r=1
o=new D.D("attenuation0",o,1)
o.b=!0
a0.a5(o)}o=a0.x
$.F().toString
if(!(Math.abs(o-0.5)<1e-9)){a0.x=0.5
o=new D.D("attenuation1",o,0.5)
o.b=!0
a0.a5(o)}o=a0.y
$.F().toString
if(!(Math.abs(o-0.15)<1e-9)){a0.y=0.15
o=new D.D("attenuation2",o,0.15)
o.b=!0
a0.a5(o)}i.dx.n(0,a0)
h.e.n(0,c)
o=new V.iM("shapes")
s=s.getElementById("shapes")
o.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
o.b2(0,"Cube",new Q.kz(p))
o.b2(0,"Cylinder",new Q.kA(p))
o.b2(0,"Cone",new Q.kB(p))
o.b2(0,"Sphere",new Q.kC(p))
o.d0(0,"Toroid",new Q.kD(p),!0)
o.b2(0,"Knot",new Q.kE(p))
s=q.Q
if(s==null)s=q.Q=D.P()
o=s.b
s=o==null?s.b=H.d([],t.f):o
s.push(new Q.kF(a4,i))
V.qn(q)},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kY.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gP:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.f(H.eG(a))+"'"}}
J.e7.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iaw:1}
J.cy.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.b9.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$ilT:1}
J.ez.prototype={}
J.bC.prototype={}
J.aA.prototype={
i:function(a){var s=a[$.na()]
if(s==null)return this.e5(a)
return"JavaScript function for "+H.f(J.a4(s))},
$iay:1}
J.v.prototype={
co:function(a,b){if(!!a.fixed$length)H.q(P.A("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eH(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.q(P.A("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
ad:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.A("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b4(a))}},
j:function(a,b){var s,r,q=P.ij(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hI:function(a){return this.j(a,"")},
hC:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b4(a))}return s},
hD:function(a,b,c){return this.hC(a,b,c,t.z)},
hB:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b4(a))}throw H.b(H.ib())},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghA:function(a){if(a.length>0)return a[0]
throw H.b(H.ib())},
gaw:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ib())},
d3:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b4(a))}return!1},
aY:function(a,b){if(!!a.immutable$list)H.q(P.A("sort"))
H.op(a,b==null?J.pm():b)},
e1:function(a){return this.aY(a,null)},
D:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.kV(a,"[","]")},
gO:function(a){return new J.a5(a,a.length)},
gP:function(a){return H.cP(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.cf(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.A("indexed set"))
if(b>=a.length||b<0)throw H.b(H.cf(a,b))
a[b]=c},
$ik:1,
$ih:1,
$in:1}
J.ic.prototype={}
J.a5.prototype={
gB:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bw.prototype={
aT:function(a,b){var s
if(typeof b!="number")throw H.b(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbu(b)
if(this.gbu(a)===s)return 0
if(this.gbu(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbu:function(a){return a===0?1/a<0:a<0},
dj:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.A(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.A(""+a+".round()"))},
dS:function(a,b){var s
if(b>20)throw H.b(P.a3(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbu(a))return"-"+s
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
p:function(a,b){if(typeof b!="number")throw H.b(H.av(b))
return a*b},
be:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.A("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aQ:function(a,b){var s
if(a>0)s=this.cW(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fX:function(a,b){if(b<0)throw H.b(H.av(b))
return this.cW(a,b)},
cW:function(a,b){return b>31?0:a>>>b},
$iY:1,
$iR:1}
J.cx.prototype={$il:1}
J.e8.prototype={}
J.aN.prototype={
U:function(a,b){if(b<0)throw H.b(H.cf(a,b))
if(b>=a.length)H.q(H.cf(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.b(H.cf(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.b(P.lG(b,null,null))
return a+b},
aW:function(a,b,c,d){var s,r,q=P.bc(b,c,a.length)
if(!H.cb(q))H.q(H.av(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a4:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a3(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a2:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eH(b,null))
if(b>c)throw H.b(P.eH(b,null))
if(c>a.length)throw H.b(P.eH(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.t(a,b,null)},
ie:function(a){return a.toLowerCase()},
p:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ag:function(a,b){var s=b-a.length
if(s<=0)return a
return this.p(" ",s)+a},
bs:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a3(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dq:function(a,b){return this.bs(a,b,0)},
hk:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a3(c,0,s,null,null))
return H.n5(a,b,c)},
D:function(a,b){return this.hk(a,b,0)},
aT:function(a,b){var s
if(typeof b!="string")throw H.b(H.av(b))
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
H.ec.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.k.prototype={}
H.cD.prototype={
gO:function(a){return new H.ba(this,this.gm(this))},
bB:function(a,b){return this.e4(0,b)}}
H.ba.prototype={
gB:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.aY(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b4(q))
s=r.c
if(typeof o!=="number")return H.y(o)
if(s>=o){r.d=null
return!1}r.d=p.G(q,s);++r.c
return!0}}
H.aP.prototype={
gO:function(a){return new H.eg(J.b0(this.a),this.b)},
gm:function(a){return J.aJ(this.a)},
G:function(a,b){return this.b.$1(J.hC(this.a,b))}}
H.cq.prototype={$ik:1}
H.eg.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cH.prototype={
gm:function(a){return J.aJ(this.a)},
G:function(a,b){return this.b.$1(J.hC(this.a,b))}}
H.aW.prototype={
gO:function(a){return new H.fr(J.b0(this.a),this.b)}}
H.fr.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.ct.prototype={}
H.fj.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify an unmodifiable list"))}}
H.c3.prototype={}
H.cl.prototype={
i:function(a){return P.l2(this)},
l:function(a,b,c){H.nM()},
$iH:1}
H.cm.prototype={
gm:function(a){return this.a},
c4:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c4(0,b))return null
return this.cL(b)},
cL:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cL(q))}}}
H.jc.prototype={
af:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ea.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fi.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iK.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.h7.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bs.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n8(r==null?"unknown":r)+"'"},
$iay:1,
gij:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f_.prototype={}
H.eT.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n8(s)+"'"}}
H.bL.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bL))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cP(this.a)
else s=typeof r!=="object"?J.ae(r):H.cP(r)
return(s^H.cP(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eG(s))+"'")}}
H.eK.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.B.prototype={
gm:function(a){return this.a},
gbt:function(a){return this.a===0},
gY:function(a){return new H.cA(this,H.du(this).I("cA<1>"))},
gii:function(a){var s=this,r=H.du(s)
return H.o3(s.gY(s),new H.id(s),r.c,r.Q[1])},
c4:function(a,b){var s=this.b
if(s==null)return!1
return this.ez(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bh(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bh(p,b)
q=r==null?n:r.b
return q}else return o.hG(b)},
hG:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cM(p,q.dr(a))
r=q.ds(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cE(s==null?q.b=q.bP():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cE(r==null?q.c=q.bP():r,b,c)}else q.hH(b,c)},
hH:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bP()
s=p.dr(a)
r=p.cM(o,s)
if(r==null)p.bU(o,s,[p.bQ(a,b)])
else{q=p.ds(r,a)
if(q>=0)r[q].b=b
else r.push(p.bQ(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b4(s))
r=r.c}},
cE:function(a,b,c){var s=this.bh(a,b)
if(s==null)this.bU(a,b,this.bQ(b,c))
else s.b=c},
eK:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var s,r=this,q=new H.ih(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eK()
return q},
dr:function(a){return J.ae(a)&0x3ffffff},
ds:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.l2(this)},
bh:function(a,b){return a[b]},
cM:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
eD:function(a,b){delete a[b]},
ez:function(a,b){return this.bh(a,b)!=null},
bP:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bU(r,s,r)
this.eD(r,s)
return r}}
H.id.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.du(this.a).I("2(1)")}}
H.ih.prototype={}
H.cA.prototype={
gm:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.ef(s,s.r)
r.c=s.e
return r}}
H.ef.prototype={
gB:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.ks.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.kt.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ku.prototype={
$1:function(a){return this.a(a)}}
H.e9.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im5:1}
H.cK.prototype={$icK:1}
H.W.prototype={$iW:1}
H.bW.prototype={
gm:function(a){return a.length},
$iz:1}
H.by.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aX(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cL.prototype={
l:function(a,b,c){H.aX(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.eo.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.ep.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.eq.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.cM.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.bX.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aX(b,a,a.length)
return a[b]},
$ibX:1,
$ibe:1}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
H.aq.prototype={
I:function(a){return H.hl(v.typeUniverse,this,a)},
aZ:function(a){return H.oW(v.typeUniverse,this,a)}}
H.fK.prototype={}
H.fF.prototype={
i:function(a){return this.a}}
H.dm.prototype={}
P.jL.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jK.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jM.prototype={
$0:function(){this.a.$0()}}
P.jN.prototype={
$0:function(){this.a.$0()}}
P.dl.prototype={
em:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ce(new P.k3(this,b),0),a)
else throw H.b(P.A("`setTimeout()` not found."))},
en:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ce(new P.k2(this,a,Date.now(),b),0),a)
else throw H.b(P.A("Periodic timer."))},
$icU:1}
P.k3.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k2.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e7(s,o)}q.c=p
r.d.$1(q)}}
P.c8.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bE.prototype={
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
else{o=J.b0(s)
if(o instanceof P.bE){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.di.prototype={
gO:function(a){return new P.bE(this.a())}}
P.fs.prototype={}
P.cS.prototype={}
P.eV.prototype={}
P.cU.prototype={}
P.ka.prototype={}
P.kj.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a4(this.b)
throw s}}
P.jS.prototype={
i8:function(a){var s,r,q,p=null
try{if(C.f===$.aI){a.$0()
return}P.pS(p,p,this,a)}catch(q){s=H.ad(q)
r=H.lv(q)
P.mQ(p,p,this,s,r)}},
i9:function(a,b){var s,r,q,p=null
try{if(C.f===$.aI){a.$1(b)
return}P.pT(p,p,this,a,b)}catch(q){s=H.ad(q)
r=H.lv(q)
P.mQ(p,p,this,s,r)}},
ia:function(a,b){return this.i9(a,b,t.z)},
hg:function(a){return new P.jT(this,a)},
d5:function(a,b){return new P.jU(this,a,b)}}
P.jT.prototype={
$0:function(){return this.a.i8(this.b)}}
P.jU.prototype={
$1:function(a){return this.a.ia(this.b,a)},
$S:function(){return this.c.I("~(0)")}}
P.d6.prototype={
gO:function(a){var s=new P.d7(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
D:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ey(b)
return r}},
ey:function(a){var s=this.d
if(s==null)return!1
return this.bM(s[this.bI(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cG(s==null?q.b=P.lb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cG(r==null?q.c=P.lb():r,b)}else return q.ep(0,b)},
ep:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lb()
s=q.bI(b)
r=p[s]
if(r==null)p[s]=[q.bH(b)]
else{if(q.bM(r,b)>=0)return!1
r.push(q.bH(b))}return!0},
K:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fK(this.c,b)
else return this.fJ(0,b)},
fJ:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bI(b)
r=n[s]
q=o.bM(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cZ(p)
return!0},
cG:function(a,b){if(a[b]!=null)return!1
a[b]=this.bH(b)
return!0},
fK:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cZ(s)
delete a[b]
return!0},
cH:function(){this.r=1073741823&this.r+1},
bH:function(a){var s,r=this,q=new P.jR(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cH()
return q},
cZ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cH()},
bI:function(a){return J.ae(a)&1073741823},
bM:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.jR.prototype={}
P.d7.prototype={
gB:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cw.prototype={}
P.ii.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cC.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gO:function(a){return new H.ba(a,this.gm(a))},
G:function(a,b){return this.h(a,b)},
gbt:function(a){return this.gm(a)===0},
ic:function(a,b){var s,r,q,p,o=this
if(o.gbt(a)){s=J.kW(0,H.bG(a).I("i.E"))
return s}r=o.h(a,0)
q=P.ij(o.gm(a),r,!0,H.bG(a).I("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.y(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
ib:function(a){return this.ic(a,!0)},
hy:function(a,b,c,d){var s
P.bc(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.kV(a,"[","]")}}
P.cF.prototype={}
P.im.prototype={
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
for(s=J.b0(this.gY(a));s.u();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aJ(this.gY(a))},
i:function(a){return P.l2(a)},
$iH:1}
P.hm.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify unmodifiable map"))}}
P.cG.prototype={
h:function(a,b){return J.ci(this.a,b)},
l:function(a,b,c){J.kL(this.a,b,c)},
F:function(a,b){J.kN(this.a,b)},
gm:function(a){return J.aJ(this.a)},
i:function(a){return J.a4(this.a)},
$iH:1}
P.c4.prototype={}
P.de.prototype={
ad:function(a,b){var s
for(s=J.b0(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.kV(this,"{","}")},
G:function(a,b){var s,r,q,p="index"
P.nD(b,p)
P.m4(b,p)
for(s=P.oG(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.b(P.N(b,this,p,null,r))},
$ik:1,
$ih:1}
P.d8.prototype={}
P.dq.prototype={}
P.jv.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ad(r)}return null}}
P.jw.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ad(r)}return null}}
P.hI.prototype={
hL:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bc(a2,a3,a1.length)
if(a3==null)throw H.b(P.m3("Invalid range"))
s=$.nq()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kr(C.a.C(a1,l))
h=H.kr(C.a.C(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.c(s,g)
f=s[g]
if(f>=0){g=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.S("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.ap(k)
q=l
continue}}throw H.b(P.a2("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.lH(a1,n,a3,o,m,d)
else{c=C.c.be(d-1,4)+1
if(c===1)throw H.b(P.a2(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aW(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lH(a1,n,a3,o,m,b)
else{c=C.c.be(b,4)
if(c===1)throw H.b(P.a2(a,a1,a3))
if(c>1)a1=C.a.aW(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hJ.prototype={}
P.dN.prototype={}
P.dQ.prototype={}
P.hY.prototype={}
P.ia.prototype={
i:function(a){return this.a}}
P.i9.prototype={
eA:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.S("")
if(p>b)o.a+=C.a.t(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nB(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jt.prototype={
ghx:function(){return C.Q}}
P.jx.prototype={
c5:function(a){var s,r,q,p=P.bc(0,null,a.length)
if(p==null)throw H.b(P.m3("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.k8(r)
if(q.eF(a,0,p)!==p){J.nx(a,p-1)
q.bZ()}return new Uint8Array(r.subarray(0,H.pe(0,q.b,r.length)))}}
P.k8.prototype={
bZ:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
h4:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bZ()
return!1}},
eF:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.h4(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bZ()}else if(p<=2047){o=l.b
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
P.ju.prototype={
c5:function(a){var s=this.a,r=P.ov(s,a,0,null)
if(r!=null)return r
return new P.k7(s).hl(a,0,null,!0)}}
P.k7.prototype={
hl:function(a,b,c,d){var s,r,q,p,o=this,n=P.bc(b,c,J.aJ(a))
if(b===n)return""
s=P.pa(a,b,n)
if(typeof n!=="number")return n.W()
n-=b
r=o.bJ(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pb(q)
o.b=0
throw H.b(P.a2(p,a,b+o.c))}return r},
bJ:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.W()
if(c-b>1000){s=C.c.a0(b+c,2)
r=q.bJ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bJ(a,s,c,d)}return q.hq(a,b,c,d)},
hq:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.S(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
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
g.a+=H.ap(a[l])}else g.a+=P.eX(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ap(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aw.prototype={}
P.ah.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
aT:function(a,b){return C.c.aT(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aQ(s,30))&1073741823},
i:function(a){var s=this,r=P.nN(H.of(s)),q=P.dT(H.od(s)),p=P.dT(H.o9(s)),o=P.dT(H.oa(s)),n=P.dT(H.oc(s)),m=P.dT(H.oe(s)),l=P.nO(H.ob(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Y.prototype={}
P.bt.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bt&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aT:function(a,b){return C.c.aT(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hV(),o=this.a
if(o<0)return"-"+new P.bt(0-o).i(0)
s=p.$1(C.c.a0(o,6e7)%60)
r=p.$1(C.c.a0(o,1e6)%60)
q=new P.hU().$1(o%1e6)
return""+C.c.a0(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.K.prototype={}
P.dF.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i0(s)
return"Assertion failed"}}
P.eu.prototype={
i:function(a){return"Throw of null."}}
P.af.prototype={
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbL()+o+m
if(!q.a)return l
s=q.gbK()
r=P.i0(q.b)
return l+s+": "+r}}
P.c_.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e5.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var s,r=this.b
if(typeof r!=="number")return r.aa()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fk.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fh.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c1.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dO.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i0(s)+"."}}
P.ex.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cR.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.dR.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fH.prototype={
i:function(a){return"Exception: "+this.a}}
P.i6.prototype={
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
for(o=e;o<m;++o){n=C.a.U(d,o)
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
P.ay.prototype={}
P.l.prototype={}
P.h.prototype={
bB:function(a,b){return new H.aW(this,b,H.du(this).I("aW<h.E>"))},
gm:function(a){var s,r=this.gO(this)
for(s=0;r.u();)++s
return s},
gaL:function(a){var s,r=this.gO(this)
if(!r.u())throw H.b(H.ib())
s=r.gB(r)
if(r.u())throw H.b(H.nU())
return s},
G:function(a,b){var s,r,q
P.m4(b,"index")
for(s=this.gO(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.N(b,this,"index",null,r))},
i:function(a){return P.nT(this,"(",")")}}
P.e6.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.H.prototype={}
P.ao.prototype={
gP:function(a){return P.M.prototype.gP.call(C.i,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
q:function(a,b){return this===b},
gP:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.f(H.eG(this))+"'"},
toString:function(){return this.i(this)}}
P.x.prototype={}
P.S.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jr.prototype={
$2:function(a,b){var s,r,q,p=J.dz(b).dq(b,"=")
if(p===-1){if(b!=="")J.kL(a,P.lk(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.a6(b,p+1)
q=this.a
J.kL(a,P.lk(s,0,s.length,q,!0),P.lk(r,0,r.length,q,!0))}return a}}
P.jo.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv4 address, "+a,this.a,b))}}
P.jp.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jq.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kv(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.aa()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bF.prototype={
gbY:function(){var s,r,q,p=this,o=p.x
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
if(r==null){r=C.a.gP(s.gbY())
if(s.z==null)s.z=r
else r=H.q(H.l_("Field 'hashCode' has been assigned during initialization."))}return r},
gcn:function(){var s=this,r=s.Q
if(r==null){r=new P.c4(P.mi(s.gbb(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.l_("Field 'queryParameters' has been assigned during initialization."))}return r},
gdV:function(){return this.b},
gcj:function(a){var s=this.c
if(s==null)return""
if(C.a.a2(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbw:function(a){var s=this.d
return s==null?P.mG(this.a):s},
gbb:function(a){var s=this.f
return s==null?"":s},
gci:function(){var s=this.r
return s==null?"":s},
dO:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a2(s,"/"))s="/"+s
q=s
p=P.li(null,0,0,b)
return new P.bF(n,l,j,k,q,p,o.r)},
gdk:function(){return this.c!=null},
gdn:function(){return this.f!=null},
gdl:function(){return this.r!=null},
i:function(a){return this.gbY()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbC()&&s.c!=null===b.gdk()&&s.b===b.gdV()&&s.gcj(s)===b.gcj(b)&&s.gbw(s)===b.gbw(b)&&s.e===b.gdK(b)&&s.f!=null===b.gdn()&&s.gbb(s)===b.gbb(b)&&s.r!=null===b.gdl()&&s.gci()===b.gci()},
$ifl:1,
gbC:function(){return this.a},
gdK:function(a){return this.e}}
P.k5.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.k6(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.k6(C.h,b,C.e,!0))}}}
P.k4.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b0(b),r=this.a;s.u();)r.$2(a,s.gB(s))}}
P.jn.prototype={
gdU:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bs(s,"?",m)
q=s.length
if(r>=0){p=P.dr(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fy("data","",n,n,P.dr(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ke.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kd.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.ny(s,0,96,b)
return s},
$S:18}
P.kf.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.kg.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.h1.prototype={
gdk:function(){return this.c>0},
gdm:function(){return this.c>0&&this.d+1<this.e},
gdn:function(){return this.f<this.r},
gdl:function(){return this.r<this.a.length},
gcN:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcO:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbC:function(){var s=this.x
return s==null?this.x=this.ex():s},
ex:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcN())return"http"
if(s.gcO())return"https"
if(r===4&&C.a.a2(s.a,"file"))return"file"
if(r===7&&C.a.a2(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
gdV:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcj:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbw:function(a){var s=this
if(s.gdm())return P.kv(C.a.t(s.a,s.d+1,s.e),null)
if(s.gcN())return 80
if(s.gcO())return 443
return 0},
gdK:function(a){return C.a.t(this.a,this.e,this.f)},
gbb:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gci:function(){var s=this.r,r=this.a
return s<r.length?C.a.a6(r,s+1):""},
gcn:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.c4(P.mi(s.gbb(s)),t.U)},
dO:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbC(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdm()?n.gbw(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a2(r,"/"))r="/"+r
p=P.li(m,0,0,b)
q=n.r
o=q<j.length?C.a.a6(j,q+1):m
return new P.bF(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifl:1}
P.fy.prototype={}
W.r.prototype={}
W.hD.prototype={
gm:function(a){return a.length}}
W.dD.prototype={
i:function(a){return String(a)}}
W.dE.prototype={
i:function(a){return String(a)}}
W.bK.prototype={$ibK:1}
W.bp.prototype={$ibp:1}
W.bq.prototype={$ibq:1}
W.br.prototype={
dY:function(a,b,c){var s=a.getContext(b,P.q5(c))
return s},
$ibr:1}
W.ax.prototype={
gm:function(a){return a.length}}
W.hN.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cn.prototype={
gm:function(a){return a.length}}
W.hO.prototype={}
W.an.prototype={}
W.aM.prototype={}
W.hP.prototype={
gm:function(a){return a.length}}
W.hQ.prototype={
gm:function(a){return a.length}}
W.hR.prototype={
gm:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.hS.prototype={
i:function(a){return String(a)}}
W.co.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.cp.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaK(a))+" x "+H.f(this.gaG(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aZ(b)
s=a.left==s.gbv(b)&&a.top==s.gbz(b)&&this.gaK(a)==s.gaK(b)&&this.gaG(a)==s.gaG(b)}else s=!1
return s},
gP:function(a){return W.mx(J.ae(a.left),J.ae(a.top),J.ae(this.gaK(a)),J.ae(this.gaG(a)))},
gd6:function(a){return a.bottom},
gaG:function(a){return a.height},
gbv:function(a){return a.left},
gby:function(a){return a.right},
gbz:function(a){return a.top},
gaK:function(a){return a.width},
$ia7:1}
W.dW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hT.prototype={
gm:function(a){return a.length}}
W.fv.prototype={
gbt:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.ib(this)
return new J.a5(s,s.length)}}
W.C.prototype={
ghf:function(a){return new W.fD(a)},
gd7:function(a){return new W.fv(a,a.children)},
gd8:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.aa()
if(q<0)q=-q*0
if(typeof p!=="number")return p.aa()
if(p<0)p=-p*0
return new P.a7(s,r,q,p,t.q)},
i:function(a){return a.localName},
ae:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lR
if(s==null){s=H.d([],t.Q)
r=new W.cO(s)
s.push(W.mv(null))
s.push(W.mB())
$.lR=r
d=r}else d=s
s=$.lQ
if(s==null){s=new W.hn(d)
$.lQ=s
c=s}else{s.a=d
c=s}}if($.b6==null){s=document
r=s.implementation.createHTMLDocument("")
$.b6=r
$.kS=r.createRange()
r=$.b6.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.b6.head.appendChild(r)}s=$.b6
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b6
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b6.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.X,a.tagName)){$.kS.selectNodeContents(q)
s=$.kS
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b6.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b6.body)J.lE(q)
c.cs(p)
document.adoptNode(p)
return p},
ho:function(a,b,c){return this.ae(a,b,c,null)},
e_:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
gdQ:function(a){return a.tagName},
$iC:1}
W.hW.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
h6:function(a,b,c,d){if(c!=null)this.eq(a,b,c,!1)},
eq:function(a,b,c,d){return a.addEventListener(b,H.ce(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
W.bO.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1,
$ibO:1}
W.dZ.prototype={
gm:function(a){return a.length}}
W.e0.prototype={
gm:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.i8.prototype={
gm:function(a){return a.length}}
W.bv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.cv.prototype={$icv:1}
W.bR.prototype={$ibR:1}
W.bx.prototype={$ibx:1}
W.ik.prototype={
i:function(a){return String(a)}}
W.iD.prototype={
gm:function(a){return a.length}}
W.bT.prototype={$ibT:1}
W.el.prototype={
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gY:function(a){var s=H.d([],t.s)
this.F(a,new W.iE(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.em.prototype={
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gY:function(a){var s=H.d([],t.s)
this.F(a,new W.iF(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aC.prototype={$iaC:1}
W.en.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aj.prototype={$iaj:1}
W.a0.prototype={
gaL:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.l6("No elements"))
if(r>1)throw H.b(P.l6("More than one element"))
s=s.firstChild
s.toString
return s},
ad:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.cu(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.w.prototype={
i2:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
i6:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nv(s,b,a)}catch(q){H.ad(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e3(a):s},
fM:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aE.prototype={
gm:function(a){return a.length},
$iaE:1}
W.eB.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.eJ.prototype={
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gY:function(a){var s=H.d([],t.s)
this.F(a,new W.iT(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eL.prototype={
gm:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.eN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aF.prototype={$iaF:1}
W.eO.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aG.prototype={
gm:function(a){return a.length},
$iaG:1}
W.eU.prototype={
h:function(a,b){return a.getItem(H.lm(b))},
l:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gY:function(a){var s=H.d([],t.s)
this.F(a,new W.j3(s))
return s},
gm:function(a){return a.length},
$iH:1}
W.j3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.bd.prototype={$ibd:1}
W.cT.prototype={
ae:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=W.nP("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a0(r).ad(0,new W.a0(s))
return r}}
W.eY.prototype={
ae:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ae(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaL(s)
q.toString
s=new W.a0(q)
p=s.gaL(s)
r.toString
p.toString
new W.a0(r).ad(0,new W.a0(p))
return r}}
W.eZ.prototype={
ae:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ae(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaL(s)
r.toString
q.toString
new W.a0(r).ad(0,new W.a0(q))
return r}}
W.c2.prototype={$ic2:1}
W.at.prototype={$iat:1}
W.aa.prototype={$iaa:1}
W.f1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.f2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.j7.prototype={
gm:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bB.prototype={$ibB:1}
W.f6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.jb.prototype={
gm:function(a){return a.length}}
W.aV.prototype={}
W.js.prototype={
i:function(a){return String(a)}}
W.fp.prototype={
gm:function(a){return a.length}}
W.bf.prototype={
ghs:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.A("deltaY is not supported"))},
ghr:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.A("deltaX is not supported"))},
$ibf:1}
W.c5.prototype={
fN:function(a,b){return a.requestAnimationFrame(H.ce(b,1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c6.prototype={$ic6:1}
W.fw.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d4.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aZ(b)
s=a.left==s.gbv(b)&&a.top==s.gbz(b)&&a.width==s.gaK(b)&&a.height==s.gaG(b)}else s=!1
return s},
gP:function(a){return W.mx(J.ae(a.left),J.ae(a.top),J.ae(a.width),J.ae(a.height))},
gaG:function(a){return a.height},
gaK:function(a){return a.width}}
W.fL.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.h4.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ft.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gY(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gY:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.c(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fD.prototype={
h:function(a,b){return this.a.getAttribute(H.lm(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gY(this).length}}
W.kU.prototype={}
W.fG.prototype={
h3:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nw(s,this.c,r,!1)}}}
W.jO.prototype={
$1:function(a){return this.a.$1(a)}}
W.la.prototype={}
W.c7.prototype={
ed:function(a){var s
if($.d5.gbt($.d5)){for(s=0;s<262;++s)$.d5.l(0,C.W[s],W.qc())
for(s=0;s<12;++s)$.d5.l(0,C.o[s],W.qd())}},
aR:function(a){return $.nr().D(0,W.cr(a))},
at:function(a,b,c){var s=$.d5.h(0,H.f(W.cr(a))+"::"+b)
if(s==null)s=$.d5.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iak:1}
W.L.prototype={
gO:function(a){return new W.cu(a,this.gm(a))}}
W.cO.prototype={
aR:function(a){return C.b.d3(this.a,new W.iI(a))},
at:function(a,b,c){return C.b.d3(this.a,new W.iH(a,b,c))},
$iak:1}
W.iI.prototype={
$1:function(a){return a.aR(this.a)}}
W.iH.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.df.prototype={
ej:function(a,b,c,d){var s,r,q
this.a.ad(0,c)
s=b.bB(0,new W.jW())
r=b.bB(0,new W.jX())
this.b.ad(0,s)
q=this.c
q.ad(0,C.w)
q.ad(0,r)},
aR:function(a){return this.a.D(0,W.cr(a))},
at:function(a,b,c){var s=this,r=W.cr(a),q=s.c
if(q.D(0,H.f(r)+"::"+b))return s.d.ha(c)
else if(q.D(0,"*::"+b))return s.d.ha(c)
else{q=s.b
if(q.D(0,H.f(r)+"::"+b))return!0
else if(q.D(0,"*::"+b))return!0
else if(q.D(0,H.f(r)+"::*"))return!0
else if(q.D(0,"*::*"))return!0}return!1},
$iak:1}
W.jW.prototype={
$1:function(a){return!C.b.D(C.o,a)}}
W.jX.prototype={
$1:function(a){return C.b.D(C.o,a)}}
W.hd.prototype={
at:function(a,b,c){if(this.e6(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.k1.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hc.prototype={
aR:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cr(a)==="foreignObject")return!1
if(s)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aR(a)},
$iak:1}
W.cu.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.ci(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.ak.prototype={}
W.jV.prototype={}
W.hn.prototype={
cs:function(a){var s=this,r=new W.k9(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b1:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lE(a)
else b.removeChild(a)},
fR:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nz(a)
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
try{r=J.a4(a)}catch(p){H.ad(p)}try{q=W.cr(a)
this.fQ(a,b,n,r,q,m,l)}catch(p){if(H.ad(p) instanceof P.af)throw p
else{this.b1(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fQ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b1(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aR(a)){m.b1(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.at(a,"is",g)){m.b1(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gY(f)
r=H.d(s.slice(0),H.ll(s).I("v<1>"))
for(q=f.gY(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.c(r,q)
p=r[q]
o=m.a
n=J.nC(p)
H.lm(p)
if(!o.at(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cs(a.content)}}
W.k9.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fR(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b1(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.l6("Corrupt HTML")
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
W.fx.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h0.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h8.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
P.jY.prototype={
cf:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bA:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lo(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ah)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jm("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cf(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.kN(a,new P.k_(n,o))
return n.a}if(t.aH.b(a)){s=o.cf(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.hn(a,s)}if(t.eH.b(a)){s=o.cf(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hE(a,new P.k0(n,o))
return n.b}throw H.b(P.jm("structured clone of other type"))},
hn:function(a,b){var s,r=J.aY(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.y(q)
s=0
for(;s<q;++s){o=this.bA(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.k_.prototype={
$2:function(a,b){this.a.a[a]=this.b.bA(b)},
$S:3}
P.k0.prototype={
$2:function(a,b){this.a.b[a]=this.b.bA(b)},
$S:3}
P.kk.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jZ.prototype={
hE:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e_.prototype={
gbi:function(){var s=this.b,r=H.du(s)
return new H.aP(new H.aW(s,new P.i4(),r.I("aW<i.E>")),new P.i5(),r.I("aP<i.E,C>"))},
l:function(a,b,c){var s=this.gbi()
J.nA(s.b.$1(J.hC(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aJ(this.gbi().a)},
h:function(a,b){var s=this.gbi()
return s.b.$1(J.hC(s.a,b))},
gO:function(a){var s=P.l1(this.gbi(),!1,t.h)
return new J.a5(s,s.length)}}
P.i4.prototype={
$1:function(a){return t.h.b(a)}}
P.i5.prototype={
$1:function(a){return t.h.a(a)}}
P.h_.prototype={
gby:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
gd6:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aZ(b)
if(s==r.gbv(b)){q=n.b
if(q==r.gbz(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.y(p)
o=n.$ti.c
if(o.a(s+p)===r.gby(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.y(s)
r=o.a(q+s)===r.gd6(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.ae(q),o=r.b,n=J.ae(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.y(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.y(q)
q=C.c.gP(s.a(o+q))
return P.oF(P.jQ(P.jQ(P.jQ(P.jQ(0,p),n),m),q))}}
P.a7.prototype={
gbv:function(a){return this.a},
gbz:function(a){return this.b},
gaK:function(a){return this.c},
gaG:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.ed.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.aR.prototype={$iaR:1}
P.ev.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.iL.prototype={
gm:function(a){return a.length}}
P.c0.prototype={$ic0:1}
P.eW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gd7:function(a){return new P.e_(a,new W.a0(a))},
ae:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.Q)
n.push(W.mv(null))
n.push(W.mB())
n.push(new W.hc())
c=new W.hn(new W.cO(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.ho(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a0(q)
o=n.gaL(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aT.prototype={$iaT:1}
P.f7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fO.prototype={}
P.fP.prototype={}
P.fW.prototype={}
P.fX.prototype={}
P.h9.prototype={}
P.ha.prototype={}
P.hi.prototype={}
P.hj.prototype={}
P.be.prototype={$ik:1,$ih:1,$in:1}
P.hG.prototype={
gm:function(a){return a.length}}
P.dH.prototype={
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gY:function(a){var s=H.d([],t.s)
this.F(a,new P.hH(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
P.hH.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dI.prototype={
gm:function(a){return a.length}}
P.b2.prototype={}
P.ew.prototype={
gm:function(a){return a.length}}
P.fu.prototype={}
P.eR.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
s=P.bj(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.h5.prototype={}
P.h6.prototype={}
K.b1.prototype={
aH:function(a,b){return!0},
i:function(a){return"all"}}
K.e3.prototype={
aH:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aH(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.io.prototype={}
K.a9.prototype={
aH:function(a,b){return!this.e2(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}}
K.iO.prototype={
aH:function(a,b){if(typeof b!=="number")return H.y(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.ap(this.a),r=H.ap(this.b)
return s+".."+r}}
K.iU.prototype={
ea:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.B(t.E)
for(r=new H.ba(a,a.gm(a));r.u();){q=r.d
s.l(0,q,!0)}p=P.l1(s.gY(s),!0,t.e)
C.b.e1(p)
this.a=p},
aH:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.eX(this.a,0,null)}}
L.eS.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.f8(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
hz:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aH(0,a))return p}return null},
i:function(a){return this.b},
cY:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.D(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gY(l),l=l.gO(l);l.u();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.D(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f4.prototype={
i:function(a){var s=H.lz(this.b,"\n","\\n"),r=H.lz(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f5.prototype={
aJ:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.j8.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eS(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
N:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.f5(a)
s.c=new H.B(t.dO)
this.b.l(0,a,s)}return s},
cr:function(a){return this.ig(a)},
ig:function(a){var s=this
return P.pu(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cr(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.co(a1,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hz(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eX(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.A("removeRange"))
P.bc(0,k,a0.length)
a0.splice(0,k-0)
C.b.ad(a1,a0)
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
if(d.d!=null){g=P.eX(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f4(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.D(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oD()
case 1:return P.oE(o)}}},t.eB)},
i:function(a){var s,r=new P.S(""),q=this.d
if(q!=null)r.a=q.cY()+"\n"
for(q=this.a,q=q.gii(q),q=q.gO(q);q.u();){s=q.gB(q)
if(s!=this.d)r.a+=s.cY()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.f8.prototype={
i:function(a){return this.b.b+": "+this.cv(0)}}
O.ag.prototype={
bE:function(a){this.a=H.d([],a.I("v<0*>"))
this.c=this.b=null},
ct:function(a,b,c){this.b=b
this.c=a},
bf:function(a,b){return this.ct(a,null,b)},
fu:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
eT:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a5(s,s.length)},
G:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.du(q).I("v<ag.T*>")
if(q.fu(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.eT(r,H.d([b],p))}},
$ih:1}
O.cI.prototype={
gm:function(a){return this.a.length},
gA:function(){var s=this.b
return s==null?this.b=D.P():s},
aM:function(){var s=this.b
if(s!=null)s.H(null)},
gZ:function(a){var s=this.a
if(s.length>0)return C.b.gaw(s)
else return V.bS()},
dM:function(a){var s=this.a
if(a==null)s.push(V.bS())
else s.push(a)
this.aM()},
cm:function(){var s=this.a
if(s.length>0){s.pop()
this.aM()}}}
E.hK.prototype={}
E.bu.prototype={
cF:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a5(s,s.length);s.u();){r=s.d
if(r.f==null)r.cF()}},
sab:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gA().K(0,q.gdF())
s=q.c
if(s!=null)s.gA().n(0,q.gdF())
r=new D.D("shape",p,q.c)
r.b=!0
q.am(r)}},
sbc:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gA().K(0,q.gdH())
s=q.f
q.f=a
if(a!=null)a.gA().n(0,q.gdH())
q.cF()
r=new D.D("technique",s,q.f)
r.b=!0
q.am(r)}},
saI:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
if(s!=null)s.gA().K(0,q.gdD())
if(a!=null)a.gA().n(0,q.gdD())
q.r=a
r=new D.D("mover",s,a)
r.b=!0
q.am(r)}},
ay:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.az(0,b,q):null
if(!J.G(o,q.x)){s=q.x
q.x=o
r=new D.D("matrix",s,o)
r.b=!0
q.am(r)}p=q.f
if(p!=null)p.ay(0,b)
for(p=q.y.a,p=new J.a5(p,p.length);p.u();)p.d.ay(0,b)},
aV:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gZ(q))
else o.push(p.p(0,q.gZ(q)))
q.aM()
a.dN(r.f)
q=a.dy
s=(q&&C.b).gaw(q)
if(s!=null&&r.d!=null)s.i5(a,r)
for(q=r.y.a,q=new J.a5(q,q.length);q.u();)q.d.aV(a)
a.dL()
a.dx.cm()},
am:function(a){var s=this.z
if(s!=null)s.H(a)},
X:function(){return this.am(null)},
dG:function(a){this.e=null
this.am(a)},
hS:function(){return this.dG(null)},
dI:function(a){this.am(a)},
hT:function(){return this.dI(null)},
dE:function(a){this.am(a)},
hR:function(){return this.dE(null)},
dC:function(a){this.am(a)},
hO:function(){return this.dC(null)},
hN:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdB(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bN()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.X()},
hQ:function(a,b){var s,r
for(s=b.gO(b),r=this.gdB();s.u();)s.gB(s).gA().K(0,r)
this.X()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bM.prototype={
i:function(a){return this.b}}
E.bY.prototype={
i:function(a){return this.b}}
E.fE.prototype={}
E.iP.prototype={
e9:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ah(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cI()
r=t.h8
s.a=H.d([],r)
s.gA().n(0,new E.iQ(q))
q.cy=s
s=new O.cI()
s.a=H.d([],r)
s.gA().n(0,new E.iR(q))
q.db=s
s=new O.cI()
s.a=H.d([],r)
s.gA().n(0,new E.iS(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.B(t.h9)},
gi1:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gZ(q)
s=r.db
s=r.z=q.p(0,s.gZ(s))
q=s}return q},
dN:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaw(s):a)},
dL:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iQ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iR.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iS.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f3.prototype={
cC:function(a){this.dP()},
cB:function(){return this.cC(null)},
ghF:function(){var s,r=this,q=Date.now(),p=C.c.a0(P.lP(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ah(q,!1)
return s/p},
cS:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.p()
if(typeof p!=="number")return H.y(p)
s=C.d.dj(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.p()
r=C.d.dj(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mc(C.n,q.gi7())}},
dP:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.eE(s)
r=W.mS(new E.j6(this),t.H)
r.toString
C.F.fN(s,r)}},
i4:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cS()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ah(p,!1)
q.y=P.lP(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aM()
p=q.db
C.b.sm(p.a,0)
p.aM()
p=q.dx
C.b.sm(p.a,0)
p.aM()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.aV(n.e)}q=n.Q
if(q!=null)q.H(null)}catch(o){s=H.ad(o)
r=H.lv(o)
P.ly("Error: "+H.f(s))
P.ly("Stack: "+H.f(r))
throw H.b(s)}}}
E.j6.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i4()}}}
Z.fq.prototype={}
Z.dK.prototype={
bl:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ad(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.jJ.prototype={}
Z.dL.prototype={
aU:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bl:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bl(a)},
dT:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aV:function(a){var s,r,q,p,o,n=this.b.length
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
Z.bQ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eG(this.c))+"'")+"]"}}
Z.bD.prototype={
gcu:function(a){var s=this.a,r=(s&$.bn().a)!==0?3:0
if((s&$.bm().a)!==0)r+=3
if((s&$.bl().a)!==0)r+=3
if((s&$.bI().a)!==0)r+=2
if((s&$.bJ().a)!==0)r+=3
if((s&$.dA().a)!==0)r+=3
if((s&$.dB().a)!==0)r+=4
if((s&$.ch().a)!==0)++r
return(s&$.bk().a)!==0?r+4:r},
hb:function(a){var s,r=$.bn(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bJ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ch()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0)if(s===a)return r
return $.np()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bD))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bn().a)!==0)s.push("Pos")
if((r&$.bm().a)!==0)s.push("Norm")
if((r&$.bl().a)!==0)s.push("Binm")
if((r&$.bI().a)!==0)s.push("Txt2D")
if((r&$.bJ().a)!==0)s.push("TxtCube")
if((r&$.dA().a)!==0)s.push("Clr3")
if((r&$.dB().a)!==0)s.push("Clr4")
if((r&$.ch().a)!==0)s.push("Weight")
if((r&$.bk().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hL.prototype={}
D.bN.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
K:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.a
s=(q&&C.b).K(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.b
s=(q&&C.b).K(q,b)||s}return s},
H:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.T()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.F(P.l1(s,!0,t.dm),new D.i1(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.F(s,new D.i2(o))}return!0},
an:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.H(s)}}}}
D.i1.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.i2.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.T.prototype={}
D.b7.prototype={}
D.b8.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dM.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.eb.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ie.prototype={
hY:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hU:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}}
X.cE.prototype={}
X.il.prototype={
b_:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.p()
s=b.b
r=o.ch
if(typeof s!=="number")return s.p()
q=new V.al(m.a+l*k,m.b+s*r)
r=o.a.gaS()
p=new X.bU(a,V.bz(),o.x,r,q)
p.b=!0
o.z=new P.ah(n,!1)
o.x=q
return p},
cl:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dZ()
if(typeof s!=="number")return s.a9()
this.r=(s&~r)>>>0
return!1},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.H(this.b_(a,b))
return!0},
hZ:function(a){var s,r,q,p,o,n,m=this,l=m.e
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
r=new X.bV(new V.ab(q*p,o*n),s,r)
r.b=!0
l.H(r)
return!0},
fi:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cE(c,p.a.gaS(),b)
q.b=!0
r.H(q)
p.y=new P.ah(s,!1)
p.x=V.bz()}}
X.aD.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aD))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bU.prototype={}
X.iG.prototype={
bN:function(a,b,c){var s=this,r=new P.ah(Date.now(),!1),q=s.a.gaS(),p=new X.bU(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cl:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.H(this.bN(a,b,!0))
return!0},
ba:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dZ()
if(typeof r!=="number")return r.a9()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.H(s.bN(a,b,!0))
return!0},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.H(this.bN(a,b,!1))
return!0},
i_:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaS()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.p()
p=a.b
o=n.ch
if(typeof p!=="number")return p.p()
s=new X.bV(new V.ab(r*q,p*o),s,b)
s.b=!0
m.H(s)
return!0}}
X.bV.prototype={}
X.eE.prototype={}
X.cV.prototype={}
X.ja.prototype={
b_:function(a,b){var s=this,r=new P.ah(Date.now(),!1),q=a.length>0?a[0]:V.bz(),p=s.a.gaS(),o=new X.cV(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hX:function(a){var s=this.b
if(s==null)return!1
s.H(this.b_(a,!0))
return!0},
hV:function(a){var s=this.c
if(s==null)return!1
s.H(this.b_(a,!0))
return!0},
hW:function(a){var s=this.d
if(s==null)return!1
s.H(this.b_(a,!1))
return!0}}
X.fm.prototype={
gaS:function(){var s=this.a,r=C.m.gd8(s).c
r.toString
s=C.m.gd8(s).d
s.toString
return V.m6(0,0,r,s)},
cJ:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.eb(s,new X.aD(r,a.altKey,a.shiftKey))},
aP:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aD(r,a.altKey,a.shiftKey)},
bV:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aD(r,a.altKey,a.shiftKey)},
aD:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.W()
if(typeof o!=="number")return H.y(o)
s=r.top
if(typeof p!=="number")return p.W()
if(typeof s!=="number")return H.y(s)
return new V.al(q-o,p-s)},
b0:function(a){return new V.ab(a.movementX,a.movementY)},
bR:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.ao(p.pageX)
C.d.ao(p.pageY)
n=k.left
if(typeof n!=="number")return H.y(n)
C.d.ao(p.pageX)
m=C.d.ao(p.pageY)
l=k.top
if(typeof l!=="number")return H.y(l)
j.push(new V.al(o-n,m-l))}return j},
aB:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dM(s,new X.aD(r,a.altKey,a.shiftKey))},
bO:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
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
fc:function(a){this.f=!0},
f0:function(a){this.f=!1},
f6:function(a){if(this.f&&this.bO(a))a.preventDefault()},
fg:function(a){var s
if(!this.f)return
s=this.cJ(a)
this.b.hY(s)},
fe:function(a){var s
if(!this.f)return
s=this.cJ(a)
this.b.hU(s)},
fk:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.aB(a)
r=p.b0(a)
if(p.d.cl(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aB(a)
q=p.aD(a)
if(p.c.cl(s,q))a.preventDefault()},
fo:function(a){var s,r,q,p=this
p.aP(a)
s=p.aB(a)
if(p.x){r=p.b0(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.ba(s,q))a.preventDefault()},
fa:function(a){var s,r,q,p=this
if(!p.bO(a)){p.aP(a)
s=p.aB(a)
if(p.x){r=p.b0(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.ba(s,q))a.preventDefault()}},
fm:function(a){var s,r,q,p=this
p.aP(a)
s=p.aB(a)
if(p.x){r=p.b0(a)
if(p.d.b9(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.b9(s,q))a.preventDefault()},
f8:function(a){var s,r,q,p=this
if(!p.bO(a)){p.aP(a)
s=p.aB(a)
if(p.x){r=p.b0(a)
if(p.d.b9(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.b9(s,q))a.preventDefault()}},
fq:function(a){var s,r,q=this
q.aP(a)
s=new V.ab((a&&C.E).ghr(a),C.E.ghs(a)).p(0,q.Q)
if(q.x){if(q.d.hZ(s))a.preventDefault()
return}if(q.r)return
r=q.aD(a)
if(q.c.i_(s,r))a.preventDefault()},
ft:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aB(q.y)
r=q.aD(q.y)
q.d.fi(s,r,p)}},
fI:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bV(a)
s=r.bR(a)
if(r.e.hX(s))a.preventDefault()},
fE:function(a){var s
this.bV(a)
s=this.bR(a)
if(this.e.hV(s))a.preventDefault()},
fG:function(a){var s
this.bV(a)
s=this.bR(a)
if(this.e.hW(s))a.preventDefault()}}
D.bo.prototype={
a5:function(a){var s=this.Q
if(s!=null)s.H(a)},
ef:function(){return this.a5(null)},
$iU:1}
D.dU.prototype={$iU:1}
D.U.prototype={}
D.cz.prototype={
a5:function(a){var s=this.y
if(s!=null)s.H(a)},
cQ:function(a){var s=this.z
if(s!=null)s.H(a)},
fh:function(){return this.cQ(null)},
fw:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.ee(q))return!1}return!0},
eV:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcP(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bo)this.e.push(o)
n=o.Q
if(n==null){n=new D.bN()
n.d=0
o.Q=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.b7()
s.b=!0
this.a5(s)},
fC:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gcP();s.u();){q=s.gB(s)
C.b.K(this.e,q)
q.gA().K(0,r)}s=new D.b8()
s.b=!0
this.a5(s)},
ee:function(a){var s=C.b.D(this.e,a)
return s}}
D.eD.prototype={$iU:1}
D.eP.prototype={$iU:1}
V.Z.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Z))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.aL.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.i_.prototype={}
V.ek.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ek))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cg(H.d([o.a,o.d,o.r],n),3,0),l=V.cg(H.d([o.b,o.e,o.x],n),3,0),k=V.cg(H.d([o.c,o.f,o.y],n),3,0)
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
V.aB.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dt:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.bS()
s=1/b3
r=-l
q=-a2
return V.bb((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
p:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.bb(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bd:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aB))return!1
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
E:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cg(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.cg(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.cg(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.cg(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
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
M:function(){return this.E("")}}
V.al.prototype={
ai:function(a){return new V.ab(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.Q.prototype={
w:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bA.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bA))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.eI.prototype={
gax:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eI))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.ab.prototype={
b6:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.y(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.y(r)
return q*p+s*r},
p:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.p()
if(typeof b!=="number")return H.y(b)
s=this.b
if(typeof s!=="number")return s.p()
return new V.ab(r*b,s*b)},
a3:function(a,b){var s,r
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.ml
return s==null?$.ml=new V.ab(0,0):s}s=this.a
if(typeof s!=="number")return s.a3()
r=this.b
if(typeof r!=="number")return r.a3()
return new V.ab(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
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
V.E.prototype={
b6:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ck:function(a,b){return new V.E(V.hA(this.a,a.a,b),V.hA(this.b,a.b,b),V.hA(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.a7(s))
if(r===1)return s
return s.a3(0,r)},
aF:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.E(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
a3:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.d2()
return new V.E(this.a/b,this.b/b,this.c/b)},
du:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.d3.prototype={
b6:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d3))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
U.hM.prototype={
bG:function(a){var s=V.qs(a,this.c,this.b)
return s},
gA:function(){var s=this.y
return s==null?this.y=D.P():s},
S:function(a){var s=this.y
if(s!=null)s.H(a)},
sdW:function(a,b){},
sdv:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bG(s)}q=new D.D("maximumLocation",q,r.b)
q.b=!0
r.S(q)}},
sdz:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bG(s)}q=new D.D("minimumLocation",q,r.c)
q.b=!0
r.S(q)}},
sa1:function(a,b){var s,r=this
b=r.bG(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.D("location",s,b)
s.b=!0
r.S(s)}},
sdw:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.D("maximumVelocity",p,a)
p.b=!0
q.S(p)}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.D("velocity",r,a)
r.b=!0
s.S(r)}},
sd9:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.D("dampening",s,a)
s.b=!0
this.S(s)}},
ay:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa1(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sV(s)}}}
U.ck.prototype={
gA:function(){var s=this.b
return s==null?this.b=D.P():s},
az:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bP.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.P():s},
S:function(a){var s=this.e
if(s!=null)s.H(a)},
as:function(){return this.S(null)},
eh:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbj(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gA()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b7()
s.b=!0
this.S(s)},
fA:function(a,b){var s,r
for(s=b.gO(b),r=this.gbj();s.u();)s.gB(s).gA().K(0,r)
s=new D.b8()
s.b=!0
this.S(s)},
az:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.aa()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a5(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.az(0,b,c)
if(r!=null)s=s==null?r:r.p(0,s)}}q.f=s==null?V.bS():s
p=q.e
if(p!=null)p.an(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bP))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.c(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.c(p,r)
if(!J.G(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$ia_:1}
U.a_.prototype={}
U.d0.prototype={
gA:function(){var s=this.fx
return s==null?this.fx=D.P():s},
S:function(a){var s=this.fx
if(s!=null)s.H(a)},
as:function(){return this.S(null)},
c0:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.P():r
s.n(0,q.geL())
s=q.a.c
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.geN())
s=q.a.c
r=s.c
s=r==null?s.c=D.P():r
s.n(0,q.geP())
s=q.a.d
r=s.f
s=r==null?s.f=D.P():r
s.n(0,q.geG())
s=q.a.d
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.geI())
s=q.a.e
r=s.b
s=r==null?s.b=D.P():r
s.n(0,q.gh1())
s=q.a.e
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.gh_())
s=q.a.e
r=s.c
s=r==null?s.c=D.P():r
s.n(0,q.gfY())
return!0},
ar:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.R()
s=-s}if(this.r){if(typeof r!=="number")return r.R()
r=-r}return new V.ab(s,r)},
eM:function(a){var s=this
t.c.a(a)
if(!J.G(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eO:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ai(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ar(a.y.ai(a.d).p(0,2).a3(0,s.gax()))
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
p=l.ar(r.ai(q).p(0,2).a3(0,s.gax()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa1(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa1(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.ar(a.z.ai(q).p(0,2).a3(0,s.gax()))}l.as()},
eQ:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
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
p.as()}},
eH:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eJ:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.G(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ar(r.ai(q).p(0,2).a3(0,s.gax()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa1(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa1(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.ar(a.z.ai(q).p(0,2).a3(0,s.gax()))
l.as()},
h2:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
h0:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ai(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ar(a.y.ai(a.d).p(0,2).a3(0,s.gax()))
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
p=l.ar(r.ai(q).p(0,2).a3(0,s.gax()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa1(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa1(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.ar(a.z.ai(q).p(0,2).a3(0,s.gax()))}l.as()},
fZ:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
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
p.as()}},
az:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.aa()
if(o<n){p.dy=n
s=b.y
p.c.ay(0,s)
p.b.ay(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.bb(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.p(0,V.bb(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia_:1}
U.d1.prototype={
gA:function(){var s=this.r
return s==null?this.r=D.P():s},
S:function(a){var s=this.r
if(s!=null)s.H(a)},
c0:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.P():r
r=p.geR()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.P():q).n(0,r)
return!0},
eS:function(a){var s,r,q,p,o=this
if(!J.G(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.p()
p=s+r*q
if(s!==p){o.d=p
s=new D.D("zoom",s,p)
s.b=!0
o.S(s)}},
az:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.l3(s,s,s,1)}return r.f},
$ia_:1}
M.dX.prototype={
aA:function(a){var s=this.y
if(s!=null)s.H(a)},
ei:function(){return this.aA(null)},
f2:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaq(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bN()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b7()
s.b=!0
this.aA(s)},
f4:function(a,b){var s,r
for(s=b.gO(b),r=this.gaq();s.u();)s.gB(s).gA().K(0,r)
s=new D.b8()
s.b=!0
this.aA(s)},
sbc:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gA().K(0,r.gaq())
s=r.d
r.d=a
if(a!=null)a.gA().n(0,r.gaq())
q=new D.D("technique",s,r.d)
q.b=!0
r.aA(q)}},
gA:function(){var s=this.y
return s==null?this.y=D.P():s},
aV:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.dN(a3.d)
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
m=C.d.ao(n*q)
n=o.b
if(typeof p!=="number")return H.y(p)
l=C.d.ao(n*p)
n=C.d.ao(o.c*q)
a4.c=n
o=C.d.ao(o.d*p)
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
g=V.bb(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.dM(g)
r=$.lY
if(r==null){r=V.o6()
o=$.mo
if(o==null)o=$.mo=new V.E(0,1,0)
n=$.mm
f=(n==null?$.mm=new V.E(0,0,-1):n).J()
e=o.aF(f).J()
d=f.aF(e)
c=new V.E(r.a,r.b,r.c)
b=e.R(0).a7(c)
a=d.R(0).a7(c)
a0=f.R(0).a7(c)
r=V.bb(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.lY=r
a1=r}else a1=r
r=s.b
if(r!=null){a2=r.az(0,a4,s)
if(a2!=null)a1=a2.p(0,a1)}a4.db.dM(a1)
s=a3.d
if(s!=null)s.ay(0,a4)
for(s=a3.e.a,s=new J.a5(s,s.length);s.u();)s.d.ay(0,a4)
for(s=a3.e.a,s=new J.a5(s,s.length);s.u();)s.d.aV(a4)
a3.b.toString
a4.cy.cm()
a4.db.cm()
a3.c.toString
a4.dL()}}
A.dG.prototype={}
A.hF.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hv:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
ht:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a6.prototype={
gap:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a6))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.eh.prototype={
e8:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
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
A.pJ(c9,s)
A.pL(c9,s)
A.pK(c9,s)
A.pN(c9,s)
A.pO(c9,s)
A.pM(c9,s)
A.pP(c9,s)
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
k=A.pI(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cK(l,35633)
c4.f=c4.cK(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.u("Failed to link shader: "+H.f(j)))}c4.fU()
c4.fW()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.T(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.T(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.T(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.T(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.T(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.T(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.T(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.T(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.bq
if(q>0){c4.k4=c4.y.T(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.u(c6+n+c7))
p.push(r.a(h))}}if(c9.a.a)c4.r2=t.r.a(c4.y.T(0,"emissionClr"))
if(c9.b.a)c4.x1=t.r.a(c4.y.T(0,"ambientClr"))
if(c9.c.a)c4.y2=t.r.a(c4.y.T(0,"diffuseClr"))
if(c9.d.a)c4.br=t.r.a(c4.y.T(0,"invDiffuseClr"))
r=c9.e.a
if(!r)q=!1
else q=!0
if(q){c4.dd=t.n.a(c4.y.T(0,"shininess"))
if(r)c4.dc=t.r.a(c4.y.T(0,"specularClr"))}if(c9.db){c4.de=t.p.a(c4.y.T(0,"envSampler"))
if(c9.r.a)c4.df=t.r.a(c4.y.T(0,"reflectClr"))
r=c9.x.a
if(!r)q=!1
else q=!0
if(q){c4.dg=t.n.a(c4.y.T(0,"refraction"))
if(r)c4.dh=t.r.a(c4.y.T(0,"refractClr"))}}if(c9.y.a)c4.di=t.n.a(c4.y.T(0,"alpha"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.c7=new H.B(t.J)
c4.c8=new H.B(t.en)
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
if(typeof e!=="number")return e.a9()
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
a7=a6}c.push(new A.cW(h,a0,a1,a7,a6,a5))}c4.c8.l(0,e,c)
m=c4.c7
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.c9=new H.B(t.J)
c4.ca=new H.B(t.af)
for(p=t.r,o=t.v,n=t.dv,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.a9()
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
c.push(new A.cX(b1,b0,a9,h,a0,b2))}c4.ca.l(0,e,c)
m=c4.c9
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.cb=new H.B(t.J)
c4.cc=new H.B(t.gr)
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
if(typeof e!=="number")return e.a9()
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
a7=a6}c.push(new A.cZ(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.cc.l(0,e,c)
a8=c4.cb
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
a8.l(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.cd=new H.B(t.J)
c4.ce=new H.B(t.bR)
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
if(typeof e!=="number")return e.a9()
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
c.push(new A.d_(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.ce.l(0,e,c)
a=c4.cd
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
a.l(0,e,h)}}}},
fS:function(a,b){}}
A.dJ.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dV.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eF.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eQ.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.ir.prototype={
i:function(a){return this.b5}}
A.cW.prototype={}
A.cX.prototype={}
A.cZ.prototype={}
A.d_.prototype={}
A.cQ.prototype={
eb:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cK:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
fU:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dG(n,r.name,q))}p.x=new A.hF(o)},
fW:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hp(r.type,r.size,r.name,q))}p.y=new A.jk(o)},
aO:function(a,b,c){var s=this.a
if(a===1)return new A.fb(s,b,c)
else return A.l8(s,this.r,b,a,c)},
eB:function(a,b,c){var s=this.a
if(a===1)return new A.ff(s,b,c)
else return A.l8(s,this.r,b,a,c)},
eC:function(a,b,c){var s=this.a
if(a===1)return new A.fg(s,b,c)
else return A.l8(s,this.r,b,a,c)},
bk:function(a,b){return new P.fH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hp:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aO(b,c,d)
case 5121:return s.aO(b,c,d)
case 5122:return s.aO(b,c,d)
case 5123:return s.aO(b,c,d)
case 5124:return s.aO(b,c,d)
case 5125:return s.aO(b,c,d)
case 5126:return new A.fa(s.a,c,d)
case 35664:return new A.jg(s.a,c,d)
case 35665:return new A.fc(s.a,c,d)
case 35666:return new A.fd(s.a,c,d)
case 35667:return new A.jh(s.a,c,d)
case 35668:return new A.ji(s.a,c,d)
case 35669:return new A.jj(s.a,c,d)
case 35674:return new A.jl(s.a,c,d)
case 35675:return new A.fe(s.a,c,d)
case 35676:return new A.cY(s.a,c,d)
case 35678:return s.eB(b,c,d)
case 35680:return s.eC(b,c,d)
case 35670:throw H.b(s.bk("BOOL",c))
case 35671:throw H.b(s.bk("BOOL_VEC2",c))
case 35672:throw H.b(s.bk("BOOL_VEC3",c))
case 35673:throw H.b(s.bk("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.f9.prototype={}
A.jk.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
T:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fb.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.ji.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jj.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fa.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jg.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fc.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fd.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jl.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fe.prototype={
aj:function(a){var s=new Float32Array(H.ca(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.cY.prototype={
aj:function(a){var s=new Float32Array(H.ca(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.ff.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kb.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ck(q.b,b).ck(q.d.ck(q.c,b),c)
a.sa1(0,new V.Q(p.a,p.b,p.c))
a.sdR(p.J())
q=1-b
s=1-c
a.sd4(new V.bA(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kl.prototype={
$2:function(a,b){return V.hA(this.a,this.b,b)}}
F.kn.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hA(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.y(n)
q=-q*n
s=p*n
a.sa1(0,new V.Q(q,s,o))
a.sdR(new V.E(q,s,o).J())
a.sd4(new V.bA(1-c,2+c,-1,-1))}}
F.ko.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kp.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kI.prototype={
$2:function(a,b){return 0}}
F.kJ.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.y(r)
s=a.f
r=new V.E(s.a,s.b,s.c).J().p(0,this.b+r)
a.sa1(0,new V.Q(r.a,r.b,r.c))}}
F.kK.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.ky.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.Q(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.km.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lD(l.$1(m),k)
k=J.lD(l.$1(m+3.141592653589793/n.c),k).W(0,j)
s=new V.E(k.a,k.b,k.c).J()
l=$.mn
if(l==null){l=new V.E(1,0,0)
$.mn=l
r=l}else r=l
if(!J.G(s,r)){l=$.mp
if(l==null){l=new V.E(0,0,1)
$.mp=l
r=l}else r=l}q=s.aF(r).J()
r=q.aF(s).J()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.p(0,l*k)
k=q.p(0,o*k)
a.sa1(0,j.w(0,new V.Q(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.dY.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.K(s.a.a.d.b,s)
s.a.a.X()}s.bS()
s.bT()
s.fL()},
bW:function(a){this.a=a
a.d.b.push(this)},
bX:function(a){this.b=a
a.d.c.push(this)},
fT:function(a){this.c=a
a.d.d.push(this)},
bS:function(){var s=this.a
if(s!=null){C.b.K(s.d.b,this)
this.a=null}},
bT:function(){var s=this.b
if(s!=null){C.b.K(s.d.c,this)
this.b=null}},
fL:function(){var s=this.c
if(s!=null){C.b.K(s.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
eu:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d2()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.du())return p
return q.J()},
ew:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.W(0,n)
q=new V.E(o.a,o.b,o.c).J()
o=r.W(0,n)
return q.aF(new V.E(o.a,o.b,o.c).J()).J()},
c3:function(){var s,r=this
if(r.d!=null)return!0
s=r.eu()
if(s==null){s=r.ew()
if(s==null)return!1}r.d=s
r.a.a.X()
return!0},
es:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d2()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.du())return p
return q.J()},
ev:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.W(0,e)
o=new V.E(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.R(0)}else{n=(j-s.b)/p
j=b.W(0,e).p(0,n).w(0,e).W(0,h)
o=new V.E(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.R(0)}j=l.d
if(j!=null){m=j.J()
o=m.aF(o).J().aF(m).J()}return o},
c1:function(){var s,r=this
if(r.e!=null)return!0
s=r.es()
if(s==null){s=r.ev()
if(s==null)return!1}r.e=s
r.a.a.X()
return!0},
ghj:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var s,r,q=this
if(q.gb4())return a+"disposed"
s=a+C.a.ag(J.a4(q.a.e),0)+", "+C.a.ag(J.a4(q.b.e),0)+", "+C.a.ag(J.a4(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
M:function(){return this.E("")}}
F.i3.prototype={}
F.j2.prototype={
b7:function(a,b,c){var s,r=b.a
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
F.ee.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.K(s.a.a.c.b,s)
s.a.a.X()}s.bS()
s.bT()},
bW:function(a){this.a=a
a.c.b.push(this)},
bX:function(a){this.b=a
a.c.c.push(this)},
bS:function(){var s=this.a
if(s!=null){C.b.K(s.c.b,this)
this.a=null}},
bT:function(){var s=this.b
if(s!=null){C.b.K(s.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb4())return a+"disposed"
return a+C.a.ag(J.a4(this.a.e),0)+", "+C.a.ag(J.a4(this.b.e),0)},
M:function(){return this.E("")}}
F.ig.prototype={}
F.je.prototype={
b7:function(a,b,c){var s,r=b.a
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
i:function(a){return this.M()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ag(J.a4(s.e),0)},
M:function(){return this.E("")}}
F.iV.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.P():s},
b8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.v()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hm())}f.a.v()
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
if(n!=null)n.H(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
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
F.nZ(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
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
F.cs(j,i,g)}e=f.e
if(e!=null)e.an(0)},
au:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.au()||!1
if(!r.a.au())s=!1
q=r.e
if(q!=null)q.an(0)
return s},
hK:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.ll(m).I("v<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghA(s)
C.b.co(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(o!=null&&a.b7(0,r,o)){q.push(o)
C.b.co(s,p)}}if(q.length>1)b.b8(q)}}n.a.v()
n.c.cp()
n.d.cp()
n.b.i3()
n.c.cq(new F.je())
n.d.cq(new F.j2())
m=n.e
if(m!=null)m.an(0)},
c_:function(){this.hK(new F.jD(),new F.iJ())},
cg:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cg()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.c(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdA(new V.E(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.E(-o.a,-o.b,-o.c).J()
if(!J.G(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.H(null)}}}}o=p.e
if(o!=null)o.an(0)},
hh:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bn().a)!==0?1:0
if((s&$.bm().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bI().a)!==0)++r
if((s&$.bJ().a)!==0)++r
if((s&$.dA().a)!==0)++r
if((s&$.dB().a)!==0)++r
if((s&$.ch().a)!==0)++r
if((s&$.bk().a)!==0)++r
q=a6.gcu(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hb(k)
i=j.gcu(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dK(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hJ(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.ca(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dL(new Z.fq(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)}a1=Z.l9(s,34963,a0)
a.b.push(new Z.bQ(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)}a1=Z.l9(s,34963,a0)
a.b.push(new Z.bQ(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
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
a0.push(m.e)}a1=Z.l9(s,34963,a0)
a.b.push(new Z.bQ(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.b.j(q,"\n")},
X:function(){var s=this.e
if(s!=null)s.H(null)}}
F.iW.prototype={
h7:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
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
n.push(F.cs(s,p,o))}}return n},
h8:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
f.push(F.cs(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cs(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cs(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cs(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
cq:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b7(0,n,l)){n.b3()
break}}}}},
cp:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.ghj(q)
if(r)q.b3()}},
au:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c3())q=!1
return q},
c2:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c1())q=!1
return q},
cg:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.E(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.E(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.H(null)}},
i:function(a){return this.M()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
M:function(){return this.E("")}}
F.iX.prototype={
gm:function(a){return this.b.length},
cq:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b7(0,n,l)){n.b3()
break}}}}},
cp:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=J.G(q.a,q.b)
if(r)q.b3()}},
i:function(a){return this.M()},
E:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.b.j(q,"\n")},
M:function(){return this.E("")}}
F.iY.prototype={
gm:function(a){return this.b.length},
i3:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.K(q.b.b,r)
q=r.a.a.e
if(q!=null)q.H(null)
q=r.a
if(q!=null){C.b.K(q.b.b,r)
r.a=null}}}},
i:function(a){return this.M()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
M:function(){return this.E("")}}
F.fn.prototype={
c6:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fo(s.cx,p,m,r,q,o,n,a,l)},
hm:function(){return this.c6(null)},
sa1:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.X()}},
sdA:function(a){var s
a=a==null?null:a.J()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.X()}},
sdR:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.X()}},
sd4:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.X()}},
hJ:function(a){var s,r,q=this
if(a.q(0,$.bn())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bm())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bl())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bI())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.q(0,$.bJ())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dA())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dB())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.q(0,$.ch()))return H.d([q.ch],t.m)
else if(a.q(0,$.bk())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
c3:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d2()
r.d.F(0,new F.jI(q))
r.r=q.a.J()
q=r.a
if(q!=null){q.X()
q=r.a.e
if(q!=null)q.an(0)}return!0},
c1:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d2()
r.d.F(0,new F.jH(q))
r.x=q.a.J()
q=r.a
if(q!=null){q.X()
q=r.a.e
if(q!=null)q.an(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ag(J.a4(q.e),0))
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
M:function(){return this.E("")}}
F.jI.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jH.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jy.prototype={
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
s.X()
return!0},
h9:function(a,b,c,d,e,f){var s=F.fo(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
au:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c3()
return!0},
c2:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c1()
return!0},
hi:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.J()
if(!J.G(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.H(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var s,r,q,p
this.v()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].E(a))
return C.b.j(s,"\n")},
M:function(){return this.E("")}}
F.jz.prototype={
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
F:function(a,b){var s=this
C.b.F(s.b,b)
C.b.F(s.c,new F.jA(s,b))
C.b.F(s.d,new F.jB(s,b))},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jA.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.jB.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)}}
F.jC.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jE.prototype={}
F.jD.prototype={
b7:function(a,b,c){return J.G(b.f,c.f)}}
F.jF.prototype={}
F.iJ.prototype={
b8:function(a){var s,r,q,p=V.d2()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.E(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.J()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdA(p)
return null}}
F.jG.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
O.ei.prototype={
gA:function(){var s=this.fr
return s==null?this.fr=D.P():s},
ac:function(a){var s=this.fr
if(s!=null)s.H(a)},
el:function(){return this.ac(null)},
cR:function(a){this.a=null
this.ac(a)},
fP:function(){return this.cR(null)},
eX:function(a,b){var s=new D.b7()
s.b=!0
this.ac(s)},
eZ:function(a,b){var s=new D.b8()
s.b=!0
this.ac(s)},
cI:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.B(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=d.h(0,4)
d.l(0,4,p==null?1:p)}o=H.d([],t.am)
d.F(0,new O.iv(f,o))
C.b.aY(o,new O.iw())
n=new H.B(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){m=s[q]
p=m.gav()
l=n.h(0,m.gav())
n.l(0,p,l==null?1:l)}k=H.d([],t.M)
n.F(0,new O.ix(f,k))
C.b.aY(k,new O.iy())
j=new H.B(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){m=s[q]
p=m.gav()
l=j.h(0,m.gav())
j.l(0,p,l==null?1:l)}i=H.d([],t.d1)
j.F(0,new O.iz(f,i))
C.b.aY(i,new O.iA())
h=new H.B(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){m=e[q]
r=m.gav()
p=h.h(0,m.gav())
h.l(0,r,p==null?1:p)}g=H.d([],t.cz)
h.F(0,new O.iB(f,g))
C.b.aY(g,new O.iC())
e=C.c.a0(f.e.a.length+3,4)
f.dy.toString
return A.o5(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,o,k,i,g)},
er:function(a,b){},
ay:function(a,b){var s,r,q
for(s=this.dx.a,s=new J.a5(s,s.length);s.u();){r=s.d
r.toString
q=$.cJ
r.a=q==null?$.cJ=new V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q
q=r.c
if(q!=null)r.a=q.az(0,b,r)
q=$.cJ
r.b=q==null?$.cJ=new V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q
q=r.d
if(q!=null)r.b=q.az(0,b,r)}},
i5:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cI()
s=b6.fr.h(0,b5.b5)
if(s==null){s=A.o4(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.u("May not cache a shader with no name."))
if(b6.fr.c4(0,r))H.q(P.u('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.l(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.br
b5=b7.e
if(!(b5 instanceof Z.dL))b5=b7.e=null
if(b5==null||!b5.d.q(0,p)){b5=q.k4
if(b5)b7.d.au()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.c2()
n.a.c2()
n=n.e
if(n!=null)n.an(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.hi()
m=m.e
if(m!=null)m.an(0)}k=b7.d.hh(new Z.jJ(b6.a),p)
k.aU($.bn()).e=b4.a.Q.c
if(b5)k.aU($.bm()).e=b4.a.cx.c
if(o)k.aU($.bl()).e=b4.a.ch.c
if(q.r2)k.aU($.bI()).e=b4.a.cy.c
if(n)k.aU($.bJ()).e=b4.a.db.c
if(q.ry)k.aU($.bk()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.hv()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gZ(n)
b5=b5.dy
b5.toString
b5.aj(n.a8(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gZ(n)
m=b6.dx
m=b6.cx=n.p(0,m.gZ(m))
n=m}b5=b5.fr
b5.toString
b5.aj(n.a8(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gi1()
m=b6.dx
m=b6.ch=n.p(0,m.gZ(m))
n=m}b5=b5.fy
b5.toString
b5.aj(n.a8(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gZ(n)
b5=b5.fx
b5.toString
b5.aj(n.a8(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.aj(C.i.a8(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.aj(C.i.a8(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.aj(C.i.a8(n,!0))}if(q.bq>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.c(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.c(b5,h)
b5=b5[h]
g=new Float32Array(H.ca(n.a8(0,!0)))
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
b5=b5.br
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.e.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.z.ch
n=n.dd
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.z.f
b5=b5.dc
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.z
if(b5.length>0){f=new H.B(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=f.h(0,4)
if(c==null)c=0
f.l(0,4,c+1)
b=J.ci(b4.a.c8.h(0,4),c)
l=d.a
a=$.aS
l=l.bd(a==null?$.aS=new V.Q(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.b
a=$.aS
l=l.bd(a==null?$.aS=new V.Q(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.e
a=b.d
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.r
a=b.e
a.a.uniform1f(a.d,l)
l=d.x
a=b.f
a.a.uniform1f(a.d,l)
l=d.y
a=b.r
a.a.uniform1f(a.d,l)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.c7.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a0=n.gZ(n)
a1=new H.B(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
a2=d.gav()
c=a1.h(0,a2)
if(c==null)c=0
a1.l(0,a2,c+1)
b=J.ci(b4.a.ca.h(0,a2),c)
l=d.gda(d)
l=new V.E(C.d.p(a0.a,l.gbn(l))+C.d.p(a0.b,l.gbo(l))+C.d.p(a0.c,l.gbp()),C.d.p(a0.e,l.gbn(l))+C.d.p(a0.f,l.gbo(l))+C.d.p(a0.r,l.gbp()),C.d.p(a0.y,l.gbn(l))+C.d.p(a0.z,l.gbo(l))+C.d.p(a0.Q,l.gbp())).J()
a=b.e
a3=l.a
a4=l.b
l=l.c
a.a.uniform3f(a.d,a3,a4,l)
l=d.gaE(d)
a4=b.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)
d.gah()
l=d.gda(d)
a=b.d
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.gih()
a=b.b
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.gby(d)
a=b.c
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.gah()
if(!C.b.D(j,l)){l.sak(0,j.length)
j.push(l)}l=d.gah()
a=l.gal(l)
if(a){a=b.r
a.toString
a3=l.gal(l)
a4=a.a
a=a.d
if(!a3)a4.uniform1i(a,0)
else a4.uniform1i(a,l.gak(l))}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a1.h(0,m)
if(i==null)i=0
m=b4.a.c9.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a0=n.gZ(n)
a5=new H.B(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
a2=d.gav()
c=a5.h(0,a2)
if(c==null)c=0
a5.l(0,a2,c+1)
b=J.ci(b4.a.cc.h(0,a2),c)
a6=a0.p(0,d.gZ(d))
l=d.gZ(d)
a=$.aS
l=l.bd(a==null?$.aS=new V.Q(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=$.aS
l=a6.bd(l==null?$.aS=new V.Q(0,0,0):l)
a=b.c
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.gaE(d)
a=b.e
a.a.uniform3f(a.d,l.a,l.b,l.c)
d.gah()
l=a6.dt(0)
a=l.a
a3=l.b
a4=l.c
a7=l.e
a8=l.f
a9=l.r
b0=l.y
b1=l.z
l=l.Q
b2=b.d
b2.toString
g=new Float32Array(H.ca(new V.ek(a,a3,a4,a7,a8,a9,b0,b1,l).a8(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gah()
l=d.gah()
if(!C.b.D(j,l)){l.sak(0,j.length)
j.push(l)}l=d.gah()
a=l.gal(l)
if(a){a=b.f
a.toString
a3=l.gal(l)
a4=a.a
a=a.d
if(!a3)a4.uniform1i(a,0)
else a4.uniform1i(a,l.gak(l))}d.gaX()
l=d.ge0()
a=b.x
a.toString
a3=l.gbn(l)
a4=l.gbo(l)
a7=l.gbp()
l=l.ghu()
a.a.uniform4f(a.d,a3,a4,a7,l)
l=d.gaX()
if(!C.b.D(j,l)){l.sak(0,j.length)
j.push(l)}l=d.gaX()
a=l.gal(l)
if(a){a=b.r
a.toString
a3=l.gal(l)
a4=a.a
a=a.d
if(!a3)a4.uniform1i(a,0)
else a4.uniform1i(a,l.gak(l))}if(d.ghw()){l=d.ghc()
a=b.y
a.a.uniform1f(a.d,l)
l=d.ghd()
a=b.z
a.a.uniform1f(a.d,l)
l=d.ghe()
a=b.Q
a.a.uniform1f(a.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.cb.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a0=n.gZ(n)
b3=new H.B(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
a2=d.gav()
c=b3.h(0,a2)
if(c==null)c=0
b3.l(0,a2,c+1)
b=J.ci(b4.a.ce.h(0,a2),c)
l=d.gi0(d)
a=b.b
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.gda(d).J()
a=b.c
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=a0.bd(d.gi0(d))
a=b.d
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.gaE(d)
a=b.e
a.a.uniform3f(a.d,l.a,l.b,l.c)
d.gah()
l=d.gih()
a=b.f
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.gby(d)
a=b.r
a.a.uniform3f(a.d,l.a,l.b,l.c)
l=d.giE()
a=b.x
a.a.uniform1f(a.d,l)
l=d.giF()
a=b.y
a.a.uniform1f(a.d,l)
d.gah()
l=d.gah()
if(!C.b.D(j,l)){l.sak(0,j.length)
j.push(l)}l=d.gah()
a=l.gal(l)
if(a){a=b.dx
a.toString
a3=l.gal(l)
a4=a.a
a=a.d
if(!a3)a4.uniform1i(a,0)
else a4.uniform1i(a,l.gak(l))}d.gaX()
l=d.ge0()
a=b.z
a.toString
a3=l.gbn(l)
a4=l.gbo(l)
a7=l.gbp()
l=l.ghu()
a.a.uniform4f(a.d,a3,a4,a7,l)
l=d.gaX()
if(!C.b.D(j,l)){l.sak(0,j.length)
j.push(l)}l=d.gaX()
a=l.gal(l)
if(a){a=b.dy
a.toString
a3=l.gal(l)
a4=a.a
a=a.d
if(!a3)a4.uniform1i(a,0)
else a4.uniform1i(a,l.gak(l))}if(d.gio()){l=d.gim()
a=b.Q
a.a.uniform1f(a.d,l)
l=d.gil()
a=b.ch
a.a.uniform1f(a.d,l)}if(d.ghw()){l=d.ghc()
a=b.cx
a.a.uniform1f(a.d,l)
l=d.ghd()
a=b.cy
a.a.uniform1f(a.d,l)
l=d.ghe()
a=b.db
a.a.uniform1f(a.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.cd.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gZ(n).dt(0)}b5=b5.id
b5.toString
b5.aj(n.a8(0,!0))}if(q.db){b4.er(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fS(b5.de,n)
if(q.r.a){b5=b4.a
n=b4.cx.f
b5=b5.df
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.x.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.cy.ch
n=n.dg
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.cy.f
b5=b5.dh
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}}b5=q.y.a
n=!b5
if(n)m=!1
else m=!0
if(m){if(b5){b5=b4.a
m=b4.db.f
b5=b5.di
b5.a.uniform1f(b5.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bl(b6)
b5=b7.e
b5.bl(b6)
b5.aV(b6)
b5.dT(b6)
if(n)b5=!1
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h)j[h].dT(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.ht()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cI().b5}}
O.iv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dJ(a,C.c.a0(b+3,4)*4))}}
O.iw.prototype={
$2:function(a,b){return J.dC(a.a,b.a)}}
O.ix.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dV(a,C.c.a0(b+3,4)*4))}}
O.iy.prototype={
$2:function(a,b){return J.dC(a.a,b.a)}}
O.iz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eF(a,C.c.a0(b+3,4)*4))}}
O.iA.prototype={
$2:function(a,b){return J.dC(a.a,b.a)}}
O.iB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eQ(a,C.c.a0(b+3,4)*4))}}
O.iC.prototype={
$2:function(a,b){return J.dC(a.a,b.a)}}
O.ip.prototype={
aC:function(){var s,r=this
r.cw()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.D(r.b,s,1)
s.b=!0
r.a.ac(s)}}}
O.ej.prototype={
aC:function(){},
cU:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aC()
s=q.a
s.a=null
s.ac(null)}}}
O.iq.prototype={}
O.aQ.prototype={
cT:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.D(q.b+".color",s,a)
r.b=!0
q.a.ac(r)}},
aC:function(){this.cw()
this.cT(new V.Z(1,1,1))},
saE:function(a,b){this.cU(new A.a6(!0,!1,!1))
this.cT(b)}}
O.is.prototype={}
O.it.prototype={
aC:function(){var s,r=this
r.cz()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.D(r.b+".refraction",s,1)
s.b=!0
r.a.ac(s)}}}
O.iu.prototype={
cV:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.D(s.b+".shininess",r,a)
r.b=!0
s.a.ac(r)}},
aC:function(){this.cz()
this.cV(100)}}
O.f0.prototype={}
T.j5.prototype={}
X.kQ.prototype={}
X.i7.prototype={
gA:function(){var s=this.x
return s==null?this.x=D.P():s}}
X.ey.prototype={
gA:function(){var s=this.f
return s==null?this.f=D.P():s},
aN:function(a){var s=this.f
if(s!=null)s.H(a)},
eo:function(){return this.aN(null)},
saI:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gA().K(0,q.gcD())
r=q.b
q.b=a
if(a!=null)a.gA().n(0,q.gcD())
s=new D.D("mover",r,q.b)
s.b=!0
q.aN(s)}}}
X.j4.prototype={}
V.b3.prototype={
bg:function(a){this.b=new P.i9(C.T)
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
m=k.b.eA(o,0,o.length)
l=m==null?o:m
C.R.e_(n,H.lz(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gaw(k.d).push(n)}},
dJ:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bm()
r.toString
q=new H.p(s)
q=new P.bE(r.cr(new H.ba(q,q.gm(q))).a())
for(;q.u();)p.bx(q.gB(q))}}
V.kH.prototype={
$1:function(a){var s=C.d.dS(this.a.ghF(),2)
if(s!=="0.00")P.ly(s+" fps")}}
V.dS.prototype={
bx:function(a){var s=this
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
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.j9()
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
a3.k(0,i).j(0,i).a.push(new K.b1())
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
a3.k(0,f).j(0,f).a.push(new K.b1())
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
r.aJ(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aJ(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aJ(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e1.prototype={
bx:function(a){var s=this
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
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.j9()
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
c.k(0,i).j(0,k).a.push(new K.b1())
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
s.aJ(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aJ(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aJ(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e4.prototype={
bx:function(a){var s=this,r="#111"
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
bm:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.j9()
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
j.k(0,m).j(0,m).a.push(new K.b1())
j.k(0,q).j(0,k).a.push(new K.b1())
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
r.aJ(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.N(o)
r=j.k(0,k)
r.d=r.a.N(k)
return j}}
V.eA.prototype={
dJ:function(a,b){this.d=H.d([],t.u)
this.L(C.b.j(b,"\n"),"#111")},
bx:function(a){},
bm:function(){return null}}
V.iM.prototype={
d0:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mg().gcn().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.d_(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.kO(k.c).n(0,o)
m=W.nS("radio")
m.checked=q
m.name=s
W.a1(m,"change",new V.iN(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.kO(k.c).n(0,p.createElement("br"))},
b2:function(a,b,c){return this.d0(a,b,c,!1)},
d_:function(a){var s,r,q=P.mg(),p=t.X,o=P.o1(q.gcn(),p,p)
o.l(0,this.a,a)
s=q.dO(0,o)
p=window.history
r=s.gbY()
p.toString
p.replaceState(new P.jZ([],[]).bA(""),"",r)}}
V.iN.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.d_(s.d)}}}
V.iZ.prototype={
ec:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a1(o,"scroll",new V.j0(m),!1)},
d2:function(a){var s,r,q,p,o,n,m,l
this.fV()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hI(a)
q.toString
p=new H.p(p)
p=new P.bE(q.cr(new H.ba(p,p.gm(p))).a())
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
if(H.n5(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.k6(C.x,q,C.e,!1)
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
dX:function(a){var s,r,q,p=new V.dS("dart")
p.bg("dart")
s=new V.e1("glsl")
s.bg("glsl")
r=new V.e4("html")
r.bg("html")
q=C.b.hB(H.d([p,s,r],t.b7),new V.j1(a))
if(q!=null)return q
p=new V.eA("plain")
p.bg("plain")
return p},
d1:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dz(q).a2(q,"+")){b2[r]=C.a.a6(q,1)
a8.push(1)
s=!0}else if(C.a.a2(q,"-")){b2[r]=C.a.a6(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dX(b0)
p.dJ(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.k6(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lF()
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
for(a4=C.b.gO(q);a4.u();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
h5:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
fV:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.j9()
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
s.k(0,o).j(0,g).a.push(new K.b1())
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
V.j0.prototype={
$1:function(a){P.mc(C.n,new V.j_(this.a))}}
V.j_.prototype={
$0:function(){var s=C.d.ao(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j1.prototype={
$1:function(a){return a.a===this.a}}
Q.kz.prototype={
$0:function(){this.a.sab(0,F.ls(1,null,null,1))}}
Q.kA.prototype={
$0:function(){this.a.sab(0,F.lt(!0,40,1))}}
Q.kB.prototype={
$0:function(){this.a.sab(0,F.lt(!1,40,0))}}
Q.kC.prototype={
$0:function(){this.a.sab(0,F.qo(6,6))}}
Q.kD.prototype={
$0:function(){this.a.sab(0,F.n6())}}
Q.kE.prototype={
$0:function(){this.a.sab(0,F.qj())}}
Q.kF.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.d1("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.d1("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.e3=s.i
s=J.b9.prototype
s.e5=s.i
s=P.h.prototype
s.e4=s.bB
s=W.C.prototype
s.bD=s.ae
s=W.df.prototype
s.e6=s.at
s=K.e3.prototype
s.e2=s.aH
s.cv=s.i
s=O.ej.prototype
s.cw=s.aC
s=O.aQ.prototype
s.cz=s.aC})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pm","nX",21)
r(P,"q1","oy",8)
r(P,"q2","oz",8)
r(P,"q3","oA",8)
q(P,"mU","pX",9)
r(W,"rz","hX",22)
p(W,"qc",4,null,["$4"],["oB"],14,0)
p(W,"qd",4,null,["$4"],["oC"],14,0)
var j
o(j=E.bu.prototype,"gdF",0,0,null,["$1","$0"],["dG","hS"],0,0)
o(j,"gdH",0,0,null,["$1","$0"],["dI","hT"],0,0)
o(j,"gdD",0,0,null,["$1","$0"],["dE","hR"],0,0)
o(j,"gdB",0,0,null,["$1","$0"],["dC","hO"],0,0)
n(j,"ghM","hN",4)
n(j,"ghP","hQ",4)
o(j=E.f3.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],0,0)
m(j,"gi7","dP",9)
l(j=X.fm.prototype,"gfb","fc",5)
l(j,"gf_","f0",5)
l(j,"gf5","f6",2)
l(j,"gff","fg",10)
l(j,"gfd","fe",10)
l(j,"gfj","fk",2)
l(j,"gfn","fo",2)
l(j,"gf9","fa",2)
l(j,"gfl","fm",2)
l(j,"gf7","f8",2)
l(j,"gfp","fq",19)
l(j,"gfs","ft",5)
l(j,"gfH","fI",6)
l(j,"gfD","fE",6)
l(j,"gfF","fG",6)
o(D.bo.prototype,"gbF",0,0,null,["$1","$0"],["a5","ef"],0,0)
o(j=D.cz.prototype,"gcP",0,0,null,["$1","$0"],["cQ","fh"],0,0)
l(j,"gfv","fw",20)
n(j,"geU","eV",11)
n(j,"gfB","fC",11)
k(V.ab.prototype,"gm","b6",7)
k(V.E.prototype,"gm","b6",7)
k(V.d3.prototype,"gm","b6",7)
o(j=U.bP.prototype,"gbj",0,0,null,["$1","$0"],["S","as"],0,0)
n(j,"geg","eh",12)
n(j,"gfz","fA",12)
o(j=U.d0.prototype,"gbj",0,0,null,["$1","$0"],["S","as"],0,0)
l(j,"geL","eM",1)
l(j,"geN","eO",1)
l(j,"geP","eQ",1)
l(j,"geG","eH",1)
l(j,"geI","eJ",1)
l(j,"gh1","h2",1)
l(j,"gh_","h0",1)
l(j,"gfY","fZ",1)
l(U.d1.prototype,"geR","eS",1)
o(j=M.dX.prototype,"gaq",0,0,null,["$1","$0"],["aA","ei"],0,0)
n(j,"gf1","f2",4)
n(j,"gf3","f4",4)
o(j=O.ei.prototype,"gek",0,0,null,["$1","$0"],["ac","el"],0,0)
o(j,"gfO",0,0,null,["$1","$0"],["cR","fP"],0,0)
n(j,"geW","eX",13)
n(j,"geY","eZ",13)
o(X.ey.prototype,"gcD",0,0,null,["$1","$0"],["aN","eo"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.kY,J.a,J.a5,P.K,P.d8,P.h,H.ba,P.e6,H.ct,H.fj,H.cl,H.jc,H.iK,H.h7,H.bs,P.V,H.ih,H.ef,H.e9,H.aq,H.fK,P.dl,P.c8,P.bE,P.fs,P.cS,P.eV,P.cU,P.ka,P.de,P.jR,P.d7,P.i,P.hm,P.cG,P.dN,P.ia,P.k8,P.k7,P.aw,P.ah,P.R,P.bt,P.ex,P.cR,P.fH,P.i6,P.ay,P.n,P.H,P.ao,P.x,P.S,P.bF,P.jn,P.h1,W.hO,W.kU,W.la,W.c7,W.L,W.cO,W.df,W.hc,W.cu,W.ak,W.jV,W.hn,P.jY,P.h_,P.be,K.b1,K.e3,K.io,K.iO,K.iU,L.eS,L.f4,L.f5,L.j8,O.ag,O.cI,E.hK,E.bu,E.bM,E.bY,E.fE,E.iP,E.f3,Z.fq,Z.jJ,Z.dL,Z.bQ,Z.bD,D.hL,D.bN,D.T,X.dM,X.eb,X.ie,X.il,X.aD,X.iG,X.ja,X.fm,D.bo,D.dU,D.U,D.eD,D.eP,V.Z,V.aL,V.i_,V.ek,V.aB,V.al,V.Q,V.bA,V.eI,V.ab,V.E,V.d3,U.d0,U.d1,M.dX,A.dG,A.hF,A.a6,A.dJ,A.dV,A.eF,A.eQ,A.ir,A.cW,A.cX,A.cZ,A.d_,A.f9,A.jk,F.dY,F.i3,F.ee,F.ig,F.eC,F.iV,F.iW,F.iX,F.iY,F.fn,F.jy,F.jz,F.jC,F.jE,F.jF,F.jG,O.f0,O.ej,O.is,X.kQ,X.j4,X.ey,V.b3,V.iM,V.iZ])
q(J.a,[J.e7,J.cy,J.b9,J.v,J.bw,J.aN,H.cK,H.W,W.e,W.hD,W.bp,W.aM,W.J,W.fx,W.an,W.hR,W.hS,W.fz,W.cp,W.fB,W.hT,W.j,W.fI,W.az,W.i8,W.fM,W.cv,W.ik,W.iD,W.fQ,W.fR,W.aC,W.fS,W.fU,W.aE,W.fY,W.h0,W.aF,W.h2,W.aG,W.h8,W.as,W.he,W.j7,W.aH,W.hg,W.jb,W.js,W.ho,W.hq,W.hs,W.hu,W.hw,P.aO,P.fO,P.aR,P.fW,P.iL,P.h9,P.aT,P.hi,P.hG,P.fu,P.h5])
q(J.b9,[J.ez,J.bC,J.aA])
r(J.ic,J.v)
q(J.bw,[J.cx,J.e8])
q(P.K,[H.ec,H.et,H.ea,H.fi,H.eK,H.fF,P.dF,P.eu,P.af,P.fk,P.fh,P.c1,P.dO,P.dR])
r(P.cC,P.d8)
q(P.cC,[H.c3,W.fv,W.a0,P.e_])
r(H.p,H.c3)
q(P.h,[H.k,H.aP,H.aW,P.cw])
q(H.k,[H.cD,H.cA])
r(H.cq,H.aP)
q(P.e6,[H.eg,H.fr])
r(H.cH,H.cD)
r(H.cm,H.cl)
q(H.bs,[H.f_,H.id,H.ks,H.kt,H.ku,P.jL,P.jK,P.jM,P.jN,P.k3,P.k2,P.kj,P.jT,P.jU,P.ii,P.im,P.jv,P.jw,P.hU,P.hV,P.jr,P.jo,P.jp,P.jq,P.k5,P.k4,P.ke,P.kd,P.kf,P.kg,W.hW,W.iE,W.iF,W.iT,W.j3,W.jO,W.iI,W.iH,W.jW,W.jX,W.k1,W.k9,P.k_,P.k0,P.kk,P.i4,P.i5,P.hH,E.iQ,E.iR,E.iS,E.j6,D.i1,D.i2,F.kb,F.kl,F.kn,F.ko,F.kp,F.kI,F.kJ,F.kK,F.ky,F.km,F.jI,F.jH,F.jA,F.jB,O.iv,O.iw,O.ix,O.iy,O.iz,O.iA,O.iB,O.iC,V.kH,V.iN,V.j0,V.j_,V.j1,Q.kz,Q.kA,Q.kB,Q.kC,Q.kD,Q.kE,Q.kF])
q(H.f_,[H.eT,H.bL])
r(P.cF,P.V)
q(P.cF,[H.B,W.ft])
r(H.bW,H.W)
q(H.bW,[H.da,H.dc])
r(H.db,H.da)
r(H.by,H.db)
r(H.dd,H.dc)
r(H.cL,H.dd)
q(H.cL,[H.eo,H.ep,H.eq,H.er,H.es,H.cM,H.bX])
r(H.dm,H.fF)
r(P.di,P.cw)
r(P.jS,P.ka)
r(P.d6,P.de)
r(P.dq,P.cG)
r(P.c4,P.dq)
q(P.dN,[P.hI,P.hY])
r(P.dQ,P.eV)
q(P.dQ,[P.hJ,P.i9,P.jx,P.ju])
r(P.jt,P.hY)
q(P.R,[P.Y,P.l])
q(P.af,[P.c_,P.e5])
r(P.fy,P.bF)
q(W.e,[W.w,W.dZ,W.bT,W.ar,W.dg,W.at,W.aa,W.dj,W.fp,W.c5,P.dI,P.b2])
q(W.w,[W.C,W.ax,W.c6])
q(W.C,[W.r,P.m])
q(W.r,[W.dD,W.dE,W.bK,W.bq,W.br,W.b5,W.e0,W.bR,W.eL,W.bd,W.cT,W.eY,W.eZ,W.c2])
r(W.hN,W.aM)
r(W.cn,W.fx)
q(W.an,[W.hP,W.hQ])
r(W.fA,W.fz)
r(W.co,W.fA)
r(W.fC,W.fB)
r(W.dW,W.fC)
r(W.ai,W.bp)
r(W.fJ,W.fI)
r(W.bO,W.fJ)
r(W.fN,W.fM)
r(W.bv,W.fN)
r(W.aV,W.j)
q(W.aV,[W.bx,W.aj,W.bB])
r(W.el,W.fQ)
r(W.em,W.fR)
r(W.fT,W.fS)
r(W.en,W.fT)
r(W.fV,W.fU)
r(W.cN,W.fV)
r(W.fZ,W.fY)
r(W.eB,W.fZ)
r(W.eJ,W.h0)
r(W.dh,W.dg)
r(W.eN,W.dh)
r(W.h3,W.h2)
r(W.eO,W.h3)
r(W.eU,W.h8)
r(W.hf,W.he)
r(W.f1,W.hf)
r(W.dk,W.dj)
r(W.f2,W.dk)
r(W.hh,W.hg)
r(W.f6,W.hh)
r(W.bf,W.aj)
r(W.hp,W.ho)
r(W.fw,W.hp)
r(W.d4,W.cp)
r(W.hr,W.hq)
r(W.fL,W.hr)
r(W.ht,W.hs)
r(W.d9,W.ht)
r(W.hv,W.hu)
r(W.h4,W.hv)
r(W.hx,W.hw)
r(W.hb,W.hx)
r(W.fD,W.ft)
r(W.fG,P.cS)
r(W.hd,W.df)
r(P.jZ,P.jY)
r(P.a7,P.h_)
r(P.fP,P.fO)
r(P.ed,P.fP)
r(P.fX,P.fW)
r(P.ev,P.fX)
r(P.c0,P.m)
r(P.ha,P.h9)
r(P.eW,P.ha)
r(P.hj,P.hi)
r(P.f7,P.hj)
r(P.dH,P.fu)
r(P.ew,P.b2)
r(P.h6,P.h5)
r(P.eR,P.h6)
q(K.e3,[K.a9,L.f8])
q(E.hK,[Z.dK,A.cQ,T.j5])
q(D.T,[D.b7,D.b8,D.D,X.eE])
q(X.eE,[X.cE,X.bU,X.bV,X.cV])
q(O.ag,[D.cz,U.bP])
q(D.hL,[U.hM,U.a_])
r(U.ck,U.a_)
r(A.eh,A.cQ)
q(A.f9,[A.fb,A.jh,A.ji,A.jj,A.jf,A.fa,A.jg,A.fc,A.fd,A.jl,A.fe,A.cY,A.ff,A.fg])
r(F.j2,F.i3)
r(F.je,F.ig)
r(F.jD,F.jE)
r(F.iJ,F.jF)
r(O.ei,O.f0)
q(O.ej,[O.ip,O.iq,O.aQ])
q(O.aQ,[O.it,O.iu])
r(X.i7,X.j4)
q(V.b3,[V.dS,V.e1,V.e4,V.eA])
s(H.c3,H.fj)
s(H.da,P.i)
s(H.db,H.ct)
s(H.dc,P.i)
s(H.dd,H.ct)
s(P.d8,P.i)
s(P.dq,P.hm)
s(W.fx,W.hO)
s(W.fz,P.i)
s(W.fA,W.L)
s(W.fB,P.i)
s(W.fC,W.L)
s(W.fI,P.i)
s(W.fJ,W.L)
s(W.fM,P.i)
s(W.fN,W.L)
s(W.fQ,P.V)
s(W.fR,P.V)
s(W.fS,P.i)
s(W.fT,W.L)
s(W.fU,P.i)
s(W.fV,W.L)
s(W.fY,P.i)
s(W.fZ,W.L)
s(W.h0,P.V)
s(W.dg,P.i)
s(W.dh,W.L)
s(W.h2,P.i)
s(W.h3,W.L)
s(W.h8,P.V)
s(W.he,P.i)
s(W.hf,W.L)
s(W.dj,P.i)
s(W.dk,W.L)
s(W.hg,P.i)
s(W.hh,W.L)
s(W.ho,P.i)
s(W.hp,W.L)
s(W.hq,P.i)
s(W.hr,W.L)
s(W.hs,P.i)
s(W.ht,W.L)
s(W.hu,P.i)
s(W.hv,W.L)
s(W.hw,P.i)
s(W.hx,W.L)
s(P.fO,P.i)
s(P.fP,W.L)
s(P.fW,P.i)
s(P.fX,W.L)
s(P.h9,P.i)
s(P.ha,W.L)
s(P.hi,P.i)
s(P.hj,W.L)
s(P.fu,P.V)
s(P.h5,P.i)
s(P.h6,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Y:"double",R:"num",x:"String",aw:"bool",ao:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([T*])","~(T*)","~(aj*)","ao(@,@)","~(l*,h<bu*>*)","~(j*)","~(bB*)","Y*()","~(~())","~()","~(bx*)","~(l*,h<U*>*)","~(l*,h<a_*>*)","~(l*,h<aB*>*)","aw(C,x,x,c7)","@(@)","ao(@)","ao(M?,M?)","be(@,@)","~(bf*)","aw*(h<U*>*)","l(@,@)","x(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oV(v.typeUniverse,JSON.parse('{"aA":"b9","ez":"b9","bC":"b9","qu":"j","qE":"j","qw":"b2","qv":"e","qL":"e","qN":"e","qt":"m","qF":"m","qx":"r","qI":"r","qG":"w","qD":"w","rc":"aa","qB":"aV","qy":"ax","qO":"ax","qM":"aj","qH":"bv","qK":"by","qJ":"W","e7":{"aw":[]},"b9":{"lT":[],"ay":[]},"v":{"n":["1"],"k":["1"],"h":["1"]},"ic":{"v":["1"],"n":["1"],"k":["1"],"h":["1"]},"bw":{"Y":[],"R":[]},"cx":{"Y":[],"l":[],"R":[]},"e8":{"Y":[],"R":[]},"aN":{"x":[]},"ec":{"K":[]},"p":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cD":{"k":["1"],"h":["1"]},"aP":{"h":["2"],"h.E":"2"},"cq":{"aP":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cH":{"cD":["2"],"k":["2"],"h":["2"],"h.E":"2"},"aW":{"h":["1"],"h.E":"1"},"c3":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cl":{"H":["1","2"]},"cm":{"H":["1","2"]},"et":{"K":[]},"ea":{"K":[]},"fi":{"K":[]},"bs":{"ay":[]},"f_":{"ay":[]},"eT":{"ay":[]},"bL":{"ay":[]},"eK":{"K":[]},"B":{"V":["1","2"],"H":["1","2"]},"cA":{"k":["1"],"h":["1"],"h.E":"1"},"e9":{"m5":[]},"bW":{"z":["1"],"W":[]},"by":{"i":["Y"],"z":["Y"],"n":["Y"],"W":[],"k":["Y"],"h":["Y"],"i.E":"Y"},"cL":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"]},"eo":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"ep":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"eq":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"er":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"es":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"cM":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"bX":{"i":["l"],"be":[],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"fF":{"K":[]},"dm":{"K":[]},"dl":{"cU":[]},"di":{"h":["1"],"h.E":"1"},"d6":{"de":["1"],"k":["1"],"h":["1"]},"cw":{"h":["1"]},"cC":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cF":{"V":["1","2"],"H":["1","2"]},"V":{"H":["1","2"]},"cG":{"H":["1","2"]},"c4":{"H":["1","2"]},"de":{"k":["1"],"h":["1"]},"Y":{"R":[]},"dF":{"K":[]},"eu":{"K":[]},"af":{"K":[]},"c_":{"K":[]},"e5":{"K":[]},"fk":{"K":[]},"fh":{"K":[]},"c1":{"K":[]},"dO":{"K":[]},"ex":{"K":[]},"cR":{"K":[]},"dR":{"K":[]},"l":{"R":[]},"n":{"k":["1"],"h":["1"]},"bF":{"fl":[]},"h1":{"fl":[]},"fy":{"fl":[]},"r":{"C":[],"w":[],"e":[]},"dD":{"C":[],"w":[],"e":[]},"dE":{"C":[],"w":[],"e":[]},"bK":{"C":[],"w":[],"e":[]},"bq":{"C":[],"w":[],"e":[]},"br":{"C":[],"w":[],"e":[]},"ax":{"w":[],"e":[]},"b5":{"C":[],"w":[],"e":[]},"co":{"i":["a7<R>"],"n":["a7<R>"],"z":["a7<R>"],"k":["a7<R>"],"h":["a7<R>"],"i.E":"a7<R>"},"cp":{"a7":["R"]},"dW":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"fv":{"i":["C"],"n":["C"],"k":["C"],"h":["C"],"i.E":"C"},"C":{"w":[],"e":[]},"ai":{"bp":[]},"bO":{"i":["ai"],"n":["ai"],"z":["ai"],"k":["ai"],"h":["ai"],"i.E":"ai"},"dZ":{"e":[]},"e0":{"C":[],"w":[],"e":[]},"bv":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"bR":{"C":[],"w":[],"e":[]},"bx":{"j":[]},"bT":{"e":[]},"el":{"V":["x","@"],"H":["x","@"]},"em":{"V":["x","@"],"H":["x","@"]},"en":{"i":["aC"],"n":["aC"],"z":["aC"],"k":["aC"],"h":["aC"],"i.E":"aC"},"aj":{"j":[]},"a0":{"i":["w"],"n":["w"],"k":["w"],"h":["w"],"i.E":"w"},"w":{"e":[]},"cN":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"eB":{"i":["aE"],"n":["aE"],"z":["aE"],"k":["aE"],"h":["aE"],"i.E":"aE"},"eJ":{"V":["x","@"],"H":["x","@"]},"eL":{"C":[],"w":[],"e":[]},"ar":{"e":[]},"eN":{"i":["ar"],"n":["ar"],"z":["ar"],"e":[],"k":["ar"],"h":["ar"],"i.E":"ar"},"eO":{"i":["aF"],"n":["aF"],"z":["aF"],"k":["aF"],"h":["aF"],"i.E":"aF"},"eU":{"V":["x","x"],"H":["x","x"]},"bd":{"C":[],"w":[],"e":[]},"cT":{"C":[],"w":[],"e":[]},"eY":{"C":[],"w":[],"e":[]},"eZ":{"C":[],"w":[],"e":[]},"c2":{"C":[],"w":[],"e":[]},"at":{"e":[]},"aa":{"e":[]},"f1":{"i":["aa"],"n":["aa"],"z":["aa"],"k":["aa"],"h":["aa"],"i.E":"aa"},"f2":{"i":["at"],"n":["at"],"z":["at"],"e":[],"k":["at"],"h":["at"],"i.E":"at"},"bB":{"j":[]},"f6":{"i":["aH"],"n":["aH"],"z":["aH"],"k":["aH"],"h":["aH"],"i.E":"aH"},"aV":{"j":[]},"fp":{"e":[]},"bf":{"aj":[],"j":[]},"c5":{"e":[]},"c6":{"w":[],"e":[]},"fw":{"i":["J"],"n":["J"],"z":["J"],"k":["J"],"h":["J"],"i.E":"J"},"d4":{"a7":["R"]},"fL":{"i":["az?"],"n":["az?"],"z":["az?"],"k":["az?"],"h":["az?"],"i.E":"az?"},"d9":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"h4":{"i":["aG"],"n":["aG"],"z":["aG"],"k":["aG"],"h":["aG"],"i.E":"aG"},"hb":{"i":["as"],"n":["as"],"z":["as"],"k":["as"],"h":["as"],"i.E":"as"},"ft":{"V":["x","x"],"H":["x","x"]},"fD":{"V":["x","x"],"H":["x","x"]},"c7":{"ak":[]},"cO":{"ak":[]},"df":{"ak":[]},"hd":{"ak":[]},"hc":{"ak":[]},"e_":{"i":["C"],"n":["C"],"k":["C"],"h":["C"],"i.E":"C"},"a7":{"h_":["1"]},"ed":{"i":["aO"],"n":["aO"],"k":["aO"],"h":["aO"],"i.E":"aO"},"ev":{"i":["aR"],"n":["aR"],"k":["aR"],"h":["aR"],"i.E":"aR"},"c0":{"m":[],"C":[],"w":[],"e":[]},"eW":{"i":["x"],"n":["x"],"k":["x"],"h":["x"],"i.E":"x"},"m":{"C":[],"w":[],"e":[]},"f7":{"i":["aT"],"n":["aT"],"k":["aT"],"h":["aT"],"i.E":"aT"},"be":{"n":["l"],"k":["l"],"h":["l"]},"dH":{"V":["x","@"],"H":["x","@"]},"dI":{"e":[]},"b2":{"e":[]},"ew":{"e":[]},"eR":{"i":["H<@,@>"],"n":["H<@,@>"],"k":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"ag":{"h":["1*"],"ag.T":"1"},"b7":{"T":[]},"b8":{"T":[]},"D":{"T":[]},"cE":{"T":[]},"bU":{"T":[]},"bV":{"T":[]},"eE":{"T":[]},"cV":{"T":[]},"bo":{"U":[]},"dU":{"U":[]},"cz":{"ag":["U*"],"h":["U*"],"ag.T":"U*"},"eD":{"U":[]},"eP":{"U":[]},"ck":{"a_":[]},"bP":{"ag":["a_*"],"a_":[],"h":["a_*"],"ag.T":"a_*"},"d0":{"a_":[]},"d1":{"a_":[]},"eh":{"cQ":[]},"dS":{"b3":[]},"e1":{"b3":[]},"e4":{"b3":[]},"eA":{"b3":[]}}'))
H.oU(v.typeUniverse,JSON.parse('{"a5":1,"k":1,"ba":1,"eg":2,"fr":1,"ct":1,"fj":1,"c3":1,"cl":2,"ef":1,"bW":1,"bE":1,"cS":1,"eV":2,"d7":1,"cw":1,"cC":1,"cF":2,"hm":2,"cG":2,"d8":1,"dq":2,"dN":2,"dQ":2,"e6":1,"fG":1,"L":1,"cu":1,"b7":1,"b8":1,"D":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lu
return{D:s("bK"),d:s("bp"),Y:s("bq"),G:s("k<@>"),h:s("C"),C:s("K"),aD:s("j"),c8:s("ai"),bX:s("bO"),Z:s("ay"),gb:s("cv"),gk:s("bR"),Q:s("v<ak>"),s:s("v<x>"),gn:s("v<@>"),t:s("v<l>"),x:s("v<dG*>"),bb:s("v<bo*>"),am:s("v<dJ*>"),g0:s("v<dK*>"),b7:s("v<b3*>"),cP:s("v<dU*>"),M:s("v<dV*>"),k:s("v<b5*>"),b:s("v<dY*>"),aZ:s("v<bQ*>"),L:s("v<ee*>"),u:s("v<n<b5*>*>"),B:s("v<io*>"),h8:s("v<aB*>"),eb:s("v<eD*>"),cS:s("v<al*>"),d1:s("v<eF*>"),o:s("v<eC*>"),du:s("v<eP*>"),cz:s("v<eQ*>"),eG:s("v<cS<M*>*>"),i:s("v<x*>"),fG:s("v<f0*>"),bw:s("v<j5*>"),br:s("v<f8*>"),fj:s("v<f9*>"),d6:s("v<cW*>"),dv:s("v<cX*>"),hg:s("v<cY*>"),by:s("v<cZ*>"),fF:s("v<d_*>"),j:s("v<fn*>"),m:s("v<Y*>"),V:s("v<l*>"),f:s("v<~(T*)*>"),T:s("cy"),eH:s("lT"),g:s("aA"),aU:s("z<@>"),h9:s("B<x*,cQ*>"),cn:s("B<x*,eS*>"),dO:s("B<x*,x*>"),w:s("B<x*,f5*>"),en:s("B<l*,n<cW*>*>"),af:s("B<l*,n<cX*>*>"),gr:s("B<l*,n<cZ*>*>"),bR:s("B<l*,n<d_*>*>"),J:s("B<l*,fb*>"),E:s("B<l*,aw*>"),a:s("B<l*,l*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cH<x*,x>"),bK:s("bT"),bZ:s("cK"),dD:s("W"),bm:s("bX"),P:s("ao"),K:s("M"),q:s("a7<R>"),fv:s("m5"),ew:s("c0"),N:s("x"),g7:s("m"),bY:s("bd"),aW:s("c2"),aF:s("cU"),gc:s("be"),ak:s("bC"),U:s("c4<x,x>"),R:s("fl"),gH:s("c6"),ac:s("a0"),cJ:s("aw"),gR:s("Y"),z:s("@"),S:s("l"),fr:s("br*"),l:s("bu*"),gj:s("U*"),dn:s("cE*"),hc:s("aB*"),c:s("bU*"),F:s("bV*"),ah:s("a_*"),A:s("0&*"),_:s("M*"),X:s("x*"),eB:s("f4*"),eP:s("cV*"),n:s("fa*"),r:s("fc*"),y:s("fd*"),O:s("fe*"),I:s("cY*"),v:s("ff*"),p:s("fg*"),e:s("l*"),dm:s("~(T*)*"),bG:s("lS<ao>?"),W:s("M?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bq.prototype
C.m=W.br.prototype
C.R=W.b5.prototype
C.U=J.a.prototype
C.b=J.v.prototype
C.c=J.cx.prototype
C.i=J.cy.prototype
C.d=J.bw.prototype
C.a=J.aN.prototype
C.V=J.aA.prototype
C.C=J.ez.prototype
C.D=W.cT.prototype
C.p=J.bC.prototype
C.E=W.bf.prototype
C.F=W.c5.prototype
C.G=new E.bM("Browser.chrome")
C.r=new E.bM("Browser.firefox")
C.t=new E.bM("Browser.edge")
C.H=new E.bM("Browser.other")
C.a4=new P.hJ()
C.I=new P.hI()
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
C.e=new P.jt()
C.Q=new P.jx()
C.f=new P.jS()
C.n=new P.bt(0)
C.S=new P.bt(5e6)
C.T=new P.ia("element",!1,!1,!1)
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
C.Z=new H.cm(0,{},C.w,H.lu("cm<x*,x*>"))
C.a_=new E.bY("OperatingSystem.windows")
C.B=new E.bY("OperatingSystem.mac")
C.a0=new E.bY("OperatingSystem.linux")
C.a1=new E.bY("OperatingSystem.other")
C.a2=new P.ju(!1)
C.a3=new P.c8(null,2)})();(function staticFields(){$.mw=null
$.aK=0
$.lK=null
$.lJ=null
$.mY=null
$.mT=null
$.n3=null
$.kq=null
$.kw=null
$.lw=null
$.cc=null
$.dv=null
$.dw=null
$.lp=!1
$.aI=C.f
$.ac=H.d([],H.lu("v<M>"))
$.b6=null
$.kS=null
$.lR=null
$.lQ=null
$.d5=P.l0(t.N,t.Z)
$.hZ=null
$.cJ=null
$.lZ=null
$.aS=null
$.m7=null
$.ml=null
$.mq=null
$.mn=null
$.mo=null
$.mp=null
$.mm=null
$.mr=null
$.lY=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qC","na",function(){return H.qb("_$dart_dartClosure")})
s($,"qP","nb",function(){return H.aU(H.jd({
toString:function(){return"$receiver$"}}))})
s($,"qQ","nc",function(){return H.aU(H.jd({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qR","nd",function(){return H.aU(H.jd(null))})
s($,"qS","ne",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qV","nh",function(){return H.aU(H.jd(void 0))})
s($,"qW","ni",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qU","ng",function(){return H.aU(H.me(null))})
s($,"qT","nf",function(){return H.aU(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"qY","nk",function(){return H.aU(H.me(void 0))})
s($,"qX","nj",function(){return H.aU(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rd","lB",function(){return P.ox()})
s($,"qZ","nl",function(){return new P.jv().$0()})
s($,"r_","nm",function(){return new P.jw().$0()})
s($,"re","nq",function(){return new Int8Array(H.ca(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rh","ns",function(){return P.oi("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rx","nt",function(){return P.pf()})
s($,"rf","nr",function(){return P.lV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"r6","np",function(){return Z.au(0)})
s($,"r0","nn",function(){return Z.au(511)})
s($,"r8","bn",function(){return Z.au(1)})
s($,"r7","bm",function(){return Z.au(2)})
s($,"r2","bl",function(){return Z.au(4)})
s($,"r9","bI",function(){return Z.au(8)})
s($,"ra","bJ",function(){return Z.au(16)})
s($,"r3","dA",function(){return Z.au(32)})
s($,"r4","dB",function(){return Z.au(64)})
s($,"r5","no",function(){return Z.au(96)})
s($,"rb","ch",function(){return Z.au(128)})
s($,"r1","bk",function(){return Z.au(256)})
s($,"qA","n9",function(){return new V.i_()})
s($,"qz","F",function(){return $.n9()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.W,ArrayBufferView:H.W,Float32Array:H.by,Float64Array:H.by,Int16Array:H.eo,Int32Array:H.ep,Int8Array:H.eq,Uint16Array:H.er,Uint32Array:H.es,Uint8ClampedArray:H.cM,CanvasPixelArray:H.cM,Uint8Array:H.bX,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hD,HTMLAnchorElement:W.dD,HTMLAreaElement:W.dE,HTMLBaseElement:W.bK,Blob:W.bp,HTMLBodyElement:W.bq,HTMLCanvasElement:W.br,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.hN,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cn,MSStyleCSSProperties:W.cn,CSS2Properties:W.cn,CSSImageValue:W.an,CSSKeywordValue:W.an,CSSNumericValue:W.an,CSSPositionValue:W.an,CSSResourceValue:W.an,CSSUnitValue:W.an,CSSURLImageValue:W.an,CSSStyleValue:W.an,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.hP,CSSUnparsedValue:W.hQ,DataTransferItemList:W.hR,HTMLDivElement:W.b5,DOMException:W.hS,ClientRectList:W.co,DOMRectList:W.co,DOMRectReadOnly:W.cp,DOMStringList:W.dW,DOMTokenList:W.hT,Element:W.C,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.bO,FileWriter:W.dZ,HTMLFormElement:W.e0,Gamepad:W.az,History:W.i8,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,ImageData:W.cv,HTMLInputElement:W.bR,KeyboardEvent:W.bx,Location:W.ik,MediaList:W.iD,MessagePort:W.bT,MIDIInputMap:W.el,MIDIOutputMap:W.em,MimeType:W.aC,MimeTypeArray:W.en,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aE,PluginArray:W.eB,RTCStatsReport:W.eJ,HTMLSelectElement:W.eL,SourceBuffer:W.ar,SourceBufferList:W.eN,SpeechGrammar:W.aF,SpeechGrammarList:W.eO,SpeechRecognitionResult:W.aG,Storage:W.eU,CSSStyleSheet:W.as,StyleSheet:W.as,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.cT,HTMLTableRowElement:W.eY,HTMLTableSectionElement:W.eZ,HTMLTemplateElement:W.c2,TextTrack:W.at,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.f1,TextTrackList:W.f2,TimeRanges:W.j7,Touch:W.aH,TouchEvent:W.bB,TouchList:W.f6,TrackDefaultList:W.jb,CompositionEvent:W.aV,FocusEvent:W.aV,TextEvent:W.aV,UIEvent:W.aV,URL:W.js,VideoTrackList:W.fp,WheelEvent:W.bf,Window:W.c5,DOMWindow:W.c5,Attr:W.c6,CSSRuleList:W.fw,ClientRect:W.d4,DOMRect:W.d4,GamepadList:W.fL,NamedNodeMap:W.d9,MozNamedAttrMap:W.d9,SpeechRecognitionResultList:W.h4,StyleSheetList:W.hb,SVGLength:P.aO,SVGLengthList:P.ed,SVGNumber:P.aR,SVGNumberList:P.ev,SVGPointList:P.iL,SVGScriptElement:P.c0,SVGStringList:P.eW,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aT,SVGTransformList:P.f7,AudioBuffer:P.hG,AudioParamMap:P.dH,AudioTrackList:P.dI,AudioContext:P.b2,webkitAudioContext:P.b2,BaseAudioContext:P.b2,OfflineAudioContext:P.ew,SQLResultSetRowList:P.eR})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.n1,[])
else Q.n1([])})})()
//# sourceMappingURL=test.dart.js.map
