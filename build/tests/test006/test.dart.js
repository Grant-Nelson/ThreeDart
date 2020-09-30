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
a[c]=function(){a[c]=function(){H.qk(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lm(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kW:function kW(){},
kY:function(a){return new H.eh(a)},
kx:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
nU:function(a,b,c,d){if(t.gw.b(a))return new H.cu(a,b,c.I("@<0>").b2(d).I("cu<1,2>"))
return new H.aU(a,b,c.I("@<0>").b2(d).I("aU<1,2>"))},
kT:function(){return new P.c8("No element")},
nK:function(){return new P.c8("Too many elements")},
of:function(a,b){var s=J.aO(a)
if(typeof s!=="number")return s.a_()
H.eS(a,0,s-1,b)},
eS:function(a,b,c,d){if(c-b<=32)H.oe(a,b,c,d)
else H.od(a,b,c,d)},
oe:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b5(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a1()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
od:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a2(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a2(a6+a7,2),d=e-h,c=e+h,b=J.b5(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
if(J.I(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
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
H.eS(a5,a6,r-2,a8)
H.eS(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.I(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.I(a8.$2(b.h(a5,q),a2),0);)--q
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
break}}H.eS(a5,r,q,a8)}else H.eS(a5,r,q,a8)},
eh:function eh(a){this.a=a},
p:function p(a){this.a=a},
k:function k(){},
cH:function cH(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b){this.a=null
this.b=a
this.c=b},
cL:function cL(a,b,c){this.a=a
this.b=b
this.$ti=c},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
fy:function fy(a,b){this.a=a
this.b=b},
cw:function cw(){},
fq:function fq(){},
ca:function ca(){},
nD:function(){throw H.b(P.A("Cannot modify unmodifiable Map"))},
mZ:function(a){var s,r=H.mY(a)
if(r!=null)return r
s="minified:"+a
return s},
mS:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a5(a)
if(typeof s!="string")throw H.b(H.ax(a))
return s},
cT:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lX:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
eL:function(a){return H.nY(a)},
nY:function(a){var s,r,q
if(a instanceof P.N)return H.al(H.bM(a),null)
if(J.dC(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.lW(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.lW(q))return q}}return H.al(H.bM(a),null)},
lW:function(a){var s=a!=="Object"&&a!==""
return s},
nZ:function(){if(!!self.location)return self.location.href
return null},
lV:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
o6:function(a){var s,r,q,p=H.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.bK(q))throw H.b(H.ax(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aS(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.ax(q))}return H.lV(p)},
lY:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bK(q))throw H.b(H.ax(q))
if(q<0)throw H.b(H.ax(q))
if(q>65535)return H.o6(a)}return H.lV(a)},
o7:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iF()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aq:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aS(s,10))>>>0,56320|s&1023)}}throw H.b(P.a4(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o5:function(a){var s=H.c4(a).getFullYear()+0
return s},
o3:function(a){var s=H.c4(a).getMonth()+1
return s},
o_:function(a){var s=H.c4(a).getDate()+0
return s},
o0:function(a){var s=H.c4(a).getHours()+0
return s},
o2:function(a){var s=H.c4(a).getMinutes()+0
return s},
o4:function(a){var s=H.c4(a).getSeconds()+0
return s},
o1:function(a){var s=H.c4(a).getMilliseconds()+0
return s},
v:function(a){throw H.b(H.ax(a))},
d:function(a,b){if(a==null)J.aO(a)
throw H.b(H.bL(a,b))},
bL:function(a,b){var s,r,q="index"
if(!H.bK(b))return new P.af(!0,b,q,null)
s=J.aO(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eM(b,q)},
q1:function(a,b,c){if(a>c)return P.a4(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a4(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
ax:function(a){return new P.af(!0,a,null,null)},
pX:function(a){if(typeof a!="number")throw H.b(H.ax(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ey()
s=new Error()
s.dartException=a
r=H.ql
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ql:function(){return J.a5(this.dartException)},
o:function(a){throw H.b(a)},
q:function(a){throw H.b(P.aQ(a))},
b_:function(a){var s,r,q,p,o,n
a=H.mW(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
m9:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lR:function(a,b){return new H.ex(a,b==null?null:b.method)},
kX:function(a,b){var s=b==null,r=s?null:b.method
return new H.ef(a,r,s?null:b.receiver)},
am:function(a){if(a==null)return new H.iV(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bN(a,a.dartException)
return H.pT(a)},
bN:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aS(r,16)&8191)===10)switch(q){case 438:return H.bN(a,H.kX(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bN(a,H.lR(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.n1()
o=$.n2()
n=$.n3()
m=$.n4()
l=$.n7()
k=$.n8()
j=$.n6()
$.n5()
i=$.na()
h=$.n9()
g=p.ak(s)
if(g!=null)return H.bN(a,H.kX(s,g))
else{g=o.ak(s)
if(g!=null){g.method="call"
return H.bN(a,H.kX(s,g))}else{g=n.ak(s)
if(g==null){g=m.ak(s)
if(g==null){g=l.ak(s)
if(g==null){g=k.ak(s)
if(g==null){g=j.ak(s)
if(g==null){g=m.ak(s)
if(g==null){g=i.ak(s)
if(g==null){g=h.ak(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bN(a,H.lR(s,g))}}return H.bN(a,new H.fp(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cV()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bN(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cV()
return a},
lo:function(a){var s
if(a==null)return new H.he(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.he(a)},
q3:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qc:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.r("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qc)
a.$identity=s
return s},
nC:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eZ().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aP
if(typeof r!=="number")return r.w()
$.aP=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lF(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.ny(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lF(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ny:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mQ,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nw:H.nv
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nz:function(a,b,c,d){var s=H.lE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lF:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nB(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nz(r,!p,s,b)
if(r===0){p=$.aP
if(typeof p!=="number")return p.w()
$.aP=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kK())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aP
if(typeof p!=="number")return p.w()
$.aP=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kK())+"."+H.f(s)+"("+m+");}")()},
nA:function(a,b,c,d){var s=H.lE,r=H.nx
switch(b?-1:a){case 0:throw H.b(new H.eQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nB:function(a,b){var s,r,q,p,o,n,m=H.kK(),l=$.lC
if(l==null)l=$.lC=H.lB("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nA(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aP
if(typeof o!=="number")return o.w()
$.aP=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aP
if(typeof o!=="number")return o.w()
$.aP=o+1
return new Function(p+o+"}")()},
lm:function(a,b,c,d,e,f,g){return H.nC(a,b,c,d,!!e,!!f,g)},
nv:function(a,b){return H.hs(v.typeUniverse,H.bM(a.a),b)},
nw:function(a,b){return H.hs(v.typeUniverse,H.bM(a.c),b)},
lE:function(a){return a.a},
nx:function(a){return a.c},
kK:function(){var s=$.lD
return s==null?$.lD=H.lB("self"):s},
lB:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.kV(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bQ("Field name "+a+" not found."))},
qk:function(a){throw H.b(new P.dW(a))},
q6:function(a){return v.getIsolateTag(a)},
rs:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qe:function(a){var s,r,q,p,o,n=$.mP.$1(a),m=$.kw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mN.$2(a,n)
if(q!=null){m=$.kw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kF(s)
$.kw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kB[n]=s
return s}if(p==="-"){o=H.kF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mU(a,s)
if(p==="*")throw H.b(P.jy(n))
if(v.leafTags[n]===true){o=H.kF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mU(a,s)},
mU:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lr(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kF:function(a){return J.lr(a,!1,null,!!a.$iz)},
qf:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kF(s)
else return J.lr(s,c,null,null)},
qa:function(){if(!0===$.lp)return
$.lp=!0
H.qb()},
qb:function(){var s,r,q,p,o,n,m,l
$.kw=Object.create(null)
$.kB=Object.create(null)
H.q9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mV.$1(o)
if(n!=null){m=H.qf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
q9:function(){var s,r,q,p,o,n,m=C.J()
m=H.cj(C.K,H.cj(C.L,H.cj(C.v,H.cj(C.v,H.cj(C.M,H.cj(C.N,H.cj(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mP=new H.ky(p)
$.mN=new H.kz(o)
$.mV=new H.kA(n)},
cj:function(a,b){return a(b)||b},
nO:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
mX:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q2:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mW:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lu:function(a,b,c){var s=H.qi(a,b,c)
return s},
qi:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mW(b),'g'),H.q2(c))},
cp:function cp(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jp:function jp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ex:function ex(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
iV:function iV(a){this.a=a},
he:function he(a){this.a=a
this.b=null},
bv:function bv(){},
f5:function f5(){},
eZ:function eZ(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a){this.a=a},
B:function B(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ir:function ir(a){this.a=a},
it:function it(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function cE(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){return a},
b4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bL(b,a))},
p6:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.q1(a,b,c))
return b},
cO:function cO(){},
W:function W(){},
c1:function c1(){},
bE:function bE(){},
cP:function cP(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cQ:function cQ(){},
c2:function c2(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
ob:function(a,b){var s=b.c
return s==null?b.c=H.lb(a,b.z,!0):s},
m3:function(a,b){var s=b.c
return s==null?b.c=H.ds(a,"lK",[b.z]):s},
m4:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m4(a.z)
return s===11||s===12},
oa:function(a){return a.cy},
ln:function(a){return H.lc(v.typeUniverse,a,!1)},
bo:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.mx(a,r,!0)
case 7:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.lb(a,r,!0)
case 8:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.mw(a,r,!0)
case 9:q=b.Q
p=H.dB(a,q,a0,a1)
if(p===q)return b
return H.ds(a,b.z,p)
case 10:o=b.z
n=H.bo(a,o,a0,a1)
m=b.Q
l=H.dB(a,m,a0,a1)
if(n===o&&l===m)return b
return H.l9(a,n,l)
case 11:k=b.z
j=H.bo(a,k,a0,a1)
i=b.Q
h=H.pQ(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mv(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dB(a,g,a0,a1)
o=b.z
n=H.bo(a,o,a0,a1)
if(f===g&&n===o)return b
return H.la(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hL("Attempted to substitute unexpected RTI kind "+c))}},
dB:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bo(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pR:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bo(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pQ:function(a,b,c,d){var s,r=b.a,q=H.dB(a,r,c,d),p=b.b,o=H.dB(a,p,c,d),n=b.c,m=H.pR(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fR()
s.a=q
s.b=o
s.c=m
return s},
c:function(a,b){a[v.arrayRti]=b
return a},
pY:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mQ(s)
return a.$S()}return null},
mR:function(a,b){var s
if(H.m4(b))if(a instanceof H.bv){s=H.pY(a)
if(s!=null)return s}return H.bM(a)},
bM:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.li(a)}if(Array.isArray(a))return H.mG(a)
return H.li(J.dC(a))},
mG:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dy:function(a){var s=a.$ti
return s!=null?s:H.li(a)},
li:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pd(a,s)},
pd:function(a,b){var s=a instanceof H.bv?a.__proto__.__proto__.constructor:b,r=H.oP(v.typeUniverse,s.name)
b.$ccache=r
return r},
mQ:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lc(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pc:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dx(q,a,H.ph)
if(!H.b6(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dx(q,a,H.pk)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bK
else if(s===t.gR||s===t.p)r=H.pg
else if(s===t.N)r=H.pi
else r=s===t.cJ?H.lj:null
if(r!=null)return H.dx(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qd)){q.r="$i"+p
return H.dx(q,a,H.pj)}}else if(p===7)return H.dx(q,a,H.pa)
return H.dx(q,a,H.p8)},
dx:function(a,b,c){a.b=c
return a.b(b)},
pb:function(a){var s,r,q=this
if(!H.b6(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.p5
else if(q===t.K)r=H.p4
else r=H.p9
q.a=r
return q.a(a)},
pJ:function(a){var s,r=a.y
if(!H.b6(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
p8:function(a){var s=this
if(a==null)return H.pJ(s)
return H.X(v.typeUniverse,H.mR(a,s),null,s,null)},
pa:function(a){if(a==null)return!0
return this.z.b(a)},
pj:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dC(a)[r]},
rq:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mH(a,s)},
p9:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mH(a,s)},
mH:function(a,b){throw H.b(H.oF(H.mn(a,H.mR(a,b),H.al(b,null))))},
mn:function(a,b,c){var s=P.i7(a),r=H.al(b==null?H.bM(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oF:function(a){return new H.dq("TypeError: "+a)},
a9:function(a,b){return new H.dq("TypeError: "+H.mn(a,null,b))},
ph:function(a){return a!=null},
p4:function(a){return a},
pk:function(a){return!0},
p5:function(a){return a},
lj:function(a){return!0===a||!1===a},
rc:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a9(a,"bool"))},
re:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a9(a,"bool"))},
rd:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a9(a,"bool?"))},
rf:function(a){if(typeof a=="number")return a
throw H.b(H.a9(a,"double"))},
rh:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"double"))},
rg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"double?"))},
bK:function(a){return typeof a=="number"&&Math.floor(a)===a},
ri:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a9(a,"int"))},
rk:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a9(a,"int"))},
rj:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a9(a,"int?"))},
pg:function(a){return typeof a=="number"},
rl:function(a){if(typeof a=="number")return a
throw H.b(H.a9(a,"num"))},
rn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"num"))},
rm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"num?"))},
pi:function(a){return typeof a=="string"},
ro:function(a){if(typeof a=="string")return a
throw H.b(H.a9(a,"String"))},
lh:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a9(a,"String"))},
rp:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a9(a,"String?"))},
pM:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.w(r,H.al(a[q],b))
return s},
mI:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.c([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.a.w(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.w(" extends ",H.al(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.al(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.w(a3,H.al(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.w(a3,H.al(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lw(H.al(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
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
return J.lw(q===11||q===12?C.a.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.al(a.z,b))+">"
if(l===9){p=H.pS(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pM(o,b)+">"):p}if(l===11)return H.mI(a,b,null)
if(l===12)return H.mI(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
pS:function(a){var s,r=H.mY(a)
if(r!=null)return r
s="minified:"+a
return s},
my:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oP:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lc(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dt(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.ds(a,b,q)
n[b]=o
return o}else return m},
oN:function(a,b){return H.mF(a.tR,b)},
oM:function(a,b){return H.mF(a.eT,b)},
lc:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mt(H.mr(a,null,b,c))
r.set(b,s)
return s},
hs:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mt(H.mr(a,b,c,!0))
q.set(c,r)
return r},
oO:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.l9(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bn:function(a,b){b.a=H.pb
b.b=H.pc
return b},
dt:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ar(null,null)
s.y=b
s.cy=c
r=H.bn(a,s)
a.eC.set(c,r)
return r},
mx:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oK(a,b,r,c)
a.eC.set(r,s)
return s},
oK:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b6(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ar(null,null)
q.y=6
q.z=b
q.cy=c
return H.bn(a,q)},
lb:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oJ(a,b,r,c)
a.eC.set(r,s)
return s},
oJ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b6(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kC(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kC(q.z))return q
else return H.ob(a,b)}}p=new H.ar(null,null)
p.y=7
p.z=b
p.cy=c
return H.bn(a,p)},
mw:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oH(a,b,r,c)
a.eC.set(r,s)
return s},
oH:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b6(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.ds(a,"lK",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ar(null,null)
q.y=8
q.z=b
q.cy=c
return H.bn(a,q)},
oL:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ar(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bn(a,s)
a.eC.set(q,r)
return r},
hr:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oG:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
ds:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hr(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ar(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bn(a,r)
a.eC.set(p,q)
return q},
l9:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hr(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ar(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bn(a,o)
a.eC.set(q,n)
return n},
mv:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hr(m)
if(j>0){s=l>0?",":""
r=H.hr(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oG(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ar(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bn(a,o)
a.eC.set(q,r)
return r},
la:function(a,b,c,d){var s,r=b.cy+("<"+H.hr(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oI(a,b,c,r,d)
a.eC.set(r,s)
return s},
oI:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bo(a,b,r,0)
m=H.dB(a,c,r,0)
return H.la(a,n,m,c!==m)}}l=new H.ar(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bn(a,l)},
mr:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mt:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oz(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.ms(a,r,g,f,!1)
else if(q===46)r=H.ms(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bm(a.u,a.e,f.pop()))
break
case 94:f.push(H.oL(a.u,f.pop()))
break
case 35:f.push(H.dt(a.u,5,"#"))
break
case 64:f.push(H.dt(a.u,2,"@"))
break
case 126:f.push(H.dt(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.l8(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.ds(p,n,o))
else{m=H.bm(p,a.e,n)
switch(m.y){case 11:f.push(H.la(p,m,o,a.n))
break
default:f.push(H.l9(p,m,o))
break}}break
case 38:H.oA(a,f)
break
case 42:l=a.u
f.push(H.mx(l,H.bm(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lb(l,H.bm(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mw(l,H.bm(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fR()
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
H.l8(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mv(p,H.bm(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.l8(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oC(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bm(a.u,a.e,h)},
oz:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ms:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.my(s,o.z)[p]
if(n==null)H.o('No "'+p+'" in "'+H.oa(o)+'"')
d.push(H.hs(s,o,n))}else d.push(p)
return m},
oA:function(a,b){var s=b.pop()
if(0===s){b.push(H.dt(a.u,1,"0&"))
return}if(1===s){b.push(H.dt(a.u,4,"1&"))
return}throw H.b(P.hL("Unexpected extended operation "+H.f(s)))},
bm:function(a,b,c){if(typeof c=="string")return H.ds(a,c,a.sEA)
else if(typeof c=="number")return H.oB(a,b,c)
else return c},
l8:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bm(a,b,c[s])},
oC:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bm(a,b,c[s])},
oB:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hL("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hL("Bad index "+c+" for "+b.i(0)))},
X:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b6(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b6(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.X(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.X(a,b.z,c,d,e)
if(p===6){s=d.z
return H.X(a,b,c,s,e)}if(r===8){if(!H.X(a,b.z,c,d,e))return!1
return H.X(a,H.m3(a,b),c,d,e)}if(r===7){s=H.X(a,b.z,c,d,e)
return s}if(p===8){if(H.X(a,b,c,d.z,e))return!0
return H.X(a,b,c,H.m3(a,d),e)}if(p===7){s=H.X(a,b,c,d.z,e)
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
if(!H.X(a,k,c,j,e)||!H.X(a,j,e,k,c))return!1}return H.mJ(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mJ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pf(a,b,c,d,e)}return!1},
mJ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pf:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.X(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.my(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.X(a,H.hs(a,b,l[p]),c,r[p],e))return!1
return!0},
kC:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b6(a))if(r!==7)if(!(r===6&&H.kC(a.z)))s=r===8&&H.kC(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qd:function(a){var s
if(!H.b6(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b6:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mF:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ar:function ar(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fR:function fR(){this.c=this.b=this.a=null},
fM:function fM(){},
dq:function dq(a){this.a=a},
mY:function(a){return v.mangledGlobalNames[a]},
qg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lr:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hG:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lp==null){H.qa()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jy("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lN()]
if(p!=null)return p
p=H.qe(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.lN(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lN:function(){var s=$.mp
return s==null?$.mp=v.getIsolateTag("_$dart_js"):s},
nL:function(a,b){if(!H.bK(a))throw H.b(P.lz(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a4(a,0,4294967295,"length",null))
return J.nM(new Array(a),b)},
kU:function(a,b){if(!H.bK(a)||a<0)throw H.b(P.bQ("Length must be a non-negative integer: "+H.f(a)))
return H.c(new Array(a),b.I("y<0>"))},
nM:function(a,b){return J.kV(H.c(a,b.I("y<0>")))},
kV:function(a){a.fixed$length=Array
return a},
nN:function(a,b){return J.dF(a,b)},
dC:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.cz.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.ed.prototype
if(a.constructor==Array)return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hG(a)},
q4:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hG(a)},
b5:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hG(a)},
hF:function(a){if(a==null)return a
if(a.constructor==Array)return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hG(a)},
q5:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bH.prototype
return a},
dD:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bH.prototype
return a},
aK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.N)return a
return J.hG(a)},
lw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.q4(a).w(a,b)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dC(a).q(a,b)},
cn:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b5(a).h(a,b)},
kH:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mS(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hF(a).l(a,b,c)},
nk:function(a,b){return J.dD(a).C(a,b)},
nl:function(a,b,c){return J.aK(a).h7(a,b,c)},
nm:function(a,b,c,d){return J.aK(a).hu(a,b,c,d)},
nn:function(a,b){return J.dD(a).V(a,b)},
dF:function(a,b){return J.q5(a).aW(a,b)},
kI:function(a,b){return J.b5(a).D(a,b)},
hJ:function(a,b){return J.hF(a).F(a,b)},
no:function(a,b,c,d){return J.aK(a).hP(a,b,c,d)},
kJ:function(a,b){return J.hF(a).v(a,b)},
np:function(a){return J.aK(a).ghy(a)},
dG:function(a){return J.aK(a).gdn(a)},
nq:function(a){return J.aK(a).gdr(a)},
ae:function(a){return J.dC(a).gO(a)},
b7:function(a){return J.hF(a).gN(a)},
aO:function(a){return J.b5(a).gm(a)},
lx:function(a){return J.hF(a).io(a)},
nr:function(a,b){return J.aK(a).ir(a,b)},
ns:function(a,b,c){return J.dD(a).p(a,b,c)},
nt:function(a){return J.dD(a).iB(a)},
a5:function(a){return J.dC(a).i(a)},
a:function a(){},
ed:function ed(){},
cB:function cB(){},
bf:function bf(){},
eD:function eD(){},
bH:function bH(){},
aC:function aC(){},
y:function y(a){this.$ti=a},
iq:function iq(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bC:function bC(){},
cA:function cA(){},
cz:function cz(){},
aS:function aS(){}},P={
op:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pU()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ck(new P.jW(q),1)).observe(s,{childList:true})
return new P.jV(q,s,r)}else if(self.setImmediate!=null)return P.pV()
return P.pW()},
oq:function(a){self.scheduleImmediate(H.ck(new P.jX(a),0))},
or:function(a){self.setImmediate(H.ck(new P.jY(a),0))},
os:function(a){P.l1(C.n,a)},
l1:function(a,b){var s=C.c.a2(a.a,1000)
return P.oD(s<0?0:s,b)},
m8:function(a,b){var s=C.c.a2(a.a,1000)
return P.oE(s<0?0:s,b)},
oD:function(a,b){var s=new P.dp()
s.eI(a,b)
return s},
oE:function(a,b){var s=new P.dp()
s.eJ(a,b)
return s},
ra:function(a){return new P.cf(a,1)},
ov:function(){return C.a5},
ow:function(a){return new P.cf(a,3)},
pm:function(a,b){return new P.dl(a,b.I("dl<0>"))},
pI:function(){var s,r
for(s=$.ci;s!=null;s=$.ci){$.dA=null
r=s.b
$.ci=r
if(r==null)$.dz=null
s.a.$0()}},
pP:function(){$.lk=!0
try{P.pI()}finally{$.dA=null
$.lk=!1
if($.ci!=null)$.lv().$1(P.mO())}},
pN:function(a){var s=new P.fz(a),r=$.dz
if(r==null){$.ci=$.dz=s
if(!$.lk)$.lv().$1(P.mO())}else $.dz=r.b=s},
pO:function(a){var s,r,q,p=$.ci
if(p==null){P.pN(a)
$.dA=$.dz
return}s=new P.fz(a)
r=$.dA
if(r==null){s.b=p
$.ci=$.dA=s}else{q=r.b
s.b=q
$.dA=r.b=s
if(q==null)$.dz=s}},
m7:function(a,b){var s=$.aJ
if(s===C.f)return P.l1(a,b)
return P.l1(a,s.hz(b))},
oi:function(a,b){var s=$.aJ
if(s===C.f)return P.m8(a,b)
return P.m8(a,s.dk(b,t.aF))},
mK:function(a,b,c,d,e){P.pO(new P.ku(d,e))},
pK:function(a,b,c,d){var s,r=$.aJ
if(r===c)return d.$0()
$.aJ=c
s=r
try{r=d.$0()
return r}finally{$.aJ=s}},
pL:function(a,b,c,d,e){var s,r=$.aJ
if(r===c)return d.$1(e)
$.aJ=c
s=r
try{r=d.$1(e)
return r}finally{$.aJ=s}},
jW:function jW(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
dp:function dp(){this.c=0},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dl:function dl(a,b){this.a=a
this.$ti=b},
fz:function fz(a){this.a=a
this.b=null},
cW:function cW(){},
f0:function f0(){},
cY:function cY(){},
kl:function kl(){},
ku:function ku(a,b){this.a=a
this.b=b},
k2:function k2(){},
k3:function k3(a,b){this.a=a
this.b=b},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
nQ:function(a,b){return new H.B(a.I("@<0>").b2(b).I("B<1,2>"))},
nR:function(a,b,c){return H.q3(a,new H.B(b.I("@<0>").b2(c).I("B<1,2>")))},
kZ:function(a,b){return new H.B(a.I("@<0>").b2(b).I("B<1,2>"))},
cF:function(a){return new P.d9(a.I("d9<0>"))},
l7:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oy:function(a,b){var s=new P.da(a,b)
s.c=a.e
return s},
nJ:function(a,b,c){var s,r
if(P.ll(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.c([],t.s)
$.ad.push(a)
try{P.pl(a,s)}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}r=P.m5(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kS:function(a,b,c){var s,r
if(P.ll(a))return b+"..."+c
s=new P.R(b)
$.ad.push(a)
try{r=s
r.a=P.m5(r.a,a,", ")}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ll:function(a){var s,r
for(s=$.ad.length,r=0;r<s;++r)if(a===$.ad[r])return!0
return!1},
pl:function(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.f(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.t()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.t();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
nS:function(a,b,c){var s=P.nQ(b,c)
a.v(0,new P.iu(s,b,c))
return s},
lO:function(a,b){var s,r,q=P.cF(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
l_:function(a){var s,r={}
if(P.ll(a))return"{...}"
s=new P.R("")
try{$.ad.push(a)
s.a+="{"
r.a=!0
J.kJ(a,new P.iz(r,s))
s.a+="}"}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d9:function d9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k1:function k1(a){this.a=a
this.c=this.b=null},
da:function da(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cy:function cy(){},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(){},
i:function i(){},
cJ:function cJ(){},
iz:function iz(a,b){this.a=a
this.b=b},
U:function U(){},
ht:function ht(){},
cK:function cK(){},
cb:function cb(a,b){this.a=a
this.$ti=b},
dh:function dh(){},
db:function db(){},
du:function du(){},
ol:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.om(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
om:function(a,b,c,d){var s=a?$.nc():$.nb()
if(s==null)return null
if(0===c&&d===b.length)return P.me(s,b)
return P.me(s,b.subarray(c,P.bi(c,d,b.length)))},
me:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.am(r)}return null},
lA:function(a,b,c,d,e,f){if(C.c.bg(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
p3:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p2:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.a_()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b5(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.af()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.d(r,o)
r[o]=n}return r},
jH:function jH(){},
jI:function jI(){},
hP:function hP(){},
hQ:function hQ(){},
dS:function dS(){},
dV:function dV(){},
i4:function i4(){},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ig:function ig(a){this.a=a},
jF:function jF(){},
jJ:function jJ(){},
kj:function kj(a){this.b=0
this.c=a},
jG:function jG(a){this.a=a},
ki:function ki(a){this.a=a
this.b=16
this.c=0},
hH:function(a,b){var s=H.lX(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
nH:function(a){if(a instanceof H.bv)return a.i(0)
return"Instance of '"+H.f(H.eL(a))+"'"},
iv:function(a,b,c,d){var s,r=c?J.kU(a,d):J.nL(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iw:function(a,b,c){var s,r=H.c([],c.I("y<0>"))
for(s=J.b7(a);s.t();)r.push(s.gB(s))
if(b)return r
return J.kV(r)},
nT:function(a,b,c){var s,r,q=J.kU(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
f2:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bi(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ab()
q=c<r}else q=!0
return H.lY(q?s.slice(b,c):s)}if(t.bm.b(a))return H.o7(a,b,P.bi(b,c,a.length))
return P.og(a,b,c)},
og:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a4(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a4(c,b,a.length,o,o))
r=J.b7(a)
for(q=0;q<b;++q)if(!r.t())throw H.b(P.a4(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.t())throw H.b(P.a4(c,b,q,o,o))
p.push(r.gB(r))}return H.lY(p)},
o8:function(a){return new H.ee(a,H.nO(a,!1,!0,!1,!1,!1))},
m5:function(a,b,c){var s=J.b7(b)
if(!s.t())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.t())}else{a+=H.f(s.gB(s))
for(;s.t();)a=a+c+H.f(s.gB(s))}return a},
mb:function(){var s=H.nZ()
if(s!=null)return P.ok(s)
throw H.b(P.A("'Uri.base' is not supported"))},
kh:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.ni().b
if(typeof b!="string")H.o(H.ax(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghO().c5(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aq(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nE:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dY:function(a){if(a>=10)return""+a
return"0"+a},
lH:function(a){return new P.bx(1000*a)},
i7:function(a){if(typeof a=="number"||H.lj(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nH(a)},
hL:function(a){return new P.dJ(a)},
bQ:function(a){return new P.af(!1,null,null,a)},
lz:function(a,b,c){return new P.af(!0,a,b,c)},
nu:function(a,b){if(a==null)throw H.b(new P.af(!1,null,b,"Must not be null"))
return a},
lZ:function(a){var s=null
return new P.c5(s,s,!1,s,s,a)},
eM:function(a,b){return new P.c5(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
bi:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.b(P.a4(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.b(P.a4(b,a,c,"end",null))
return b}return c},
m_:function(a,b){if(a<0)throw H.b(P.a4(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aO(b):e
return new P.e9(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fr(a)},
jy:function(a){return new P.fo(a)},
l0:function(a){return new P.c8(a)},
aQ:function(a){return new P.dU(a)},
r:function(a){return new P.fO(a)},
a3:function(a,b,c){return new P.ic(a,b,c)},
lt:function(a){H.qg(a)},
ok:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.ma(a4<a4?C.a.p(a5,0,a4):a5,5,a3).geh()
else if(s===32)return P.ma(C.a.p(a5,5,a4),0,a3).geh()}r=P.iv(8,0,!1,t.S)
q=r.length
if(0>=q)return H.d(r,0)
r[0]=0
if(1>=q)return H.d(r,1)
r[1]=-1
if(2>=q)return H.d(r,2)
r[2]=-1
if(7>=q)return H.d(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mL(a5,0,a4,0,r)>=14){if(7>=r.length)return H.d(r,7)
r[7]=a4}if(1>=r.length)return H.d(r,1)
p=r[1]
if(p>=0)if(P.mL(a5,0,p,20,r)===20){if(7>=r.length)return H.d(r,7)
r[7]=p}q=r.length
if(2>=q)return H.d(r,2)
o=r[2]+1
if(3>=q)return H.d(r,3)
n=r[3]
if(4>=q)return H.d(r,4)
m=r[4]
if(5>=q)return H.d(r,5)
l=r[5]
if(6>=q)return H.d(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.d(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a8(a5,"..",m)))h=l>m+2&&C.a.a8(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a8(a5,"file",0)){if(o<=0){if(!C.a.a8(a5,"/",m)){g="file:///"
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
a5=C.a.aZ(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a8(a5,"http",0)){if(q&&n+3===m&&C.a.a8(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aZ(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a8(a5,"https",0)){if(q&&n+4===m&&C.a.a8(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aZ(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.p(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h8(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.oX(a5,0,p)
else{if(p===0)P.cg(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.oY(a5,d,o-1):""
b=P.oU(a5,o,n,!1)
q=n+1
if(q<m){a=H.lX(C.a.p(a5,q,m),a3)
a0=P.oW(a==null?H.o(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oV(a5,m,l,a3,i,b!=null)
a2=l<k?P.le(a5,l+1,k,a3):a3
return new P.bJ(i,c,b,a0,a1,a2,k<a4?P.oT(a5,k+1,a4):a3)},
md:function(a){var s=t.N
return C.b.hU(H.c(a.split("&"),t.s),P.kZ(s,s),new P.jD(C.e))},
oj:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jA(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.V(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.hH(C.a.p(a,q,r),null)
if(typeof n!=="number")return n.a1()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.d(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.hH(C.a.p(a,q,c),null)
if(typeof n!=="number")return n.a1()
if(n>255)j.$2(k,q)
if(p>=s)return H.d(i,p)
i[p]=n
return i},
mc:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jB(a),b=new P.jC(c,a)
if(a.length<2)c.$1("address is too short")
s=H.c([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.V(a,r)
if(n===58){if(r===a0){++r
if(C.a.V(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gau(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oj(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.c.aS(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
mz:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cg:function(a,b,c){throw H.b(P.a3(c,a,b))},
oW:function(a,b){if(a!=null&&a===P.mz(b))return null
return a},
oU:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cg(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oR(a,r,s)
if(q<s){p=q+1
o=P.mE(a,C.a.a8(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mc(a,r,q)
return C.a.p(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.br(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mE(a,C.a.a8(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mc(a,b,q)
return"["+C.a.p(a,b,q)+o+"]"}return P.p_(a,b,c)},
oR:function(a,b,c){var s=C.a.br(a,"%",b)
return s>=b&&s<c?s:c},
mE:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.R(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.lf(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.R("")
m=i.a+=C.a.p(a,r,s)
if(n)o=C.a.p(a,s,s+3)
else if(o==="%")P.cg(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.R("")
if(r<s){i.a+=C.a.p(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.p(a,r,s)
if(i==null){i=new P.R("")
n=i}else n=i
n.a+=j
n.a+=P.ld(p)
s+=k
r=s}}}if(i==null)return C.a.p(a,b,c)
if(r<c)i.a+=C.a.p(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p_:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.lf(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.R("")
l=C.a.p(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.p(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.R("")
if(r<s){q.a+=C.a.p(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cg(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.p(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.R("")
m=q}else m=q
m.a+=l
m.a+=P.ld(o)
s+=j
r=s}}}}if(q==null)return C.a.p(a,b,c)
if(r<c){l=C.a.p(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oX:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mB(C.a.C(a,b)))P.cg(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cg(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.p(a,b,c)
return P.oQ(r?a.toLowerCase():a)},
oQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oY:function(a,b,c){return P.dv(a,b,c,C.Z,!1)},
oV:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dv(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a5(s,"/"))s="/"+s
return P.oZ(s,e,f)},
oZ:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a5(a,"/"))return P.p0(a,!s||c)
return P.p1(a)},
le:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bQ("Both query and queryParameters specified"))
return P.dv(a,b,c,C.l,!0)}if(d==null)return null
s=new P.R("")
r.a=""
d.v(0,new P.kf(new P.kg(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oT:function(a,b,c){return P.dv(a,b,c,C.l,!0)},
lf:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kx(s)
p=H.kx(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aS(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aq(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.p(a,b,b+3).toUpperCase()
return null},
ld:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.d(s,0)
s[0]=37
q=C.a.C(k,a>>>4)
if(1>=r)return H.d(s,1)
s[1]=q
q=C.a.C(k,a&15)
if(2>=r)return H.d(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hi(a,6*o)&63|p
if(n>=r)return H.d(s,n)
s[n]=37
q=n+1
l=C.a.C(k,m>>>4)
if(q>=r)return H.d(s,q)
s[q]=l
l=n+2
q=C.a.C(k,m&15)
if(l>=r)return H.d(s,l)
s[l]=q
n+=3}}return P.f2(s,0,null)},
dv:function(a,b,c,d,e){var s=P.mD(a,b,c,d,e)
return s==null?C.a.p(a,b,c):s},
mD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lf(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cg(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.ld(o)}}if(p==null){p=new P.R("")
n=p}else n=p
n.a+=C.a.p(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.p(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mC:function(a){if(C.a.a5(a,"."))return!0
return C.a.dP(a,"/.")!==-1},
p1:function(a){var s,r,q,p,o,n,m
if(!P.mC(a))return a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.I(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p0:function(a,b){var s,r,q,p,o,n
if(!P.mC(a))return!b?P.mA(a):a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gau(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gau(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mA(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mA:function(a){var s,r,q,p=a.length
if(p>=2&&P.mB(J.nk(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.p(a,0,s)+"%3A"+C.a.ac(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oS:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bQ("Invalid URL encoding"))}}return s},
lg:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.p(a,b,c)
else p=new H.p(C.a.p(a,b,c))}else{p=H.c([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.b(P.bQ("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bQ("Truncated URI"))
p.push(P.oS(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.c5(p)},
mB:function(a){var s=a|32
return 97<=s&&s<=122},
ma:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gau(j)
if(p!==44||r!==n+7||!C.a.a8(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.i3(0,a,m,s)
else{l=P.mD(a,m,s,C.l,!0)
if(l!=null)a=C.a.aZ(a,m,s,l)}return new P.jz(a,j,c)},
p7:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.nT(22,new P.kp(),t.gc),l=new P.ko(m),k=new P.kq(),j=new P.kr(),i=l.$2(0,225)
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
mL:function(a,b,c,d,e){var s,r,q,p,o,n=$.nj()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.d(n,d)
r=n[d]
q=C.a.C(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.d(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.d(e,o)
e[o]=s}return d},
ay:function ay(){},
ah:function ah(a,b){this.a=a
this.b=b},
Y:function Y(){},
bx:function bx(a){this.a=a},
i0:function i0(){},
i1:function i1(){},
L:function L(){},
dJ:function dJ(a){this.a=a},
ey:function ey(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f){var _=this
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
fr:function fr(a){this.a=a},
fo:function fo(a){this.a=a},
c8:function c8(a){this.a=a},
dU:function dU(a){this.a=a},
eB:function eB(){},
cV:function cV(){},
dW:function dW(a){this.a=a},
fO:function fO(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(){},
l:function l(){},
h:function h(){},
ec:function ec(){},
n:function n(){},
F:function F(){},
ap:function ap(){},
Q:function Q(){},
N:function N(){},
w:function w(){},
R:function R(a){this.a=a},
jD:function jD(a){this.a=a},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(){},
ko:function ko(a){this.a=a},
kq:function kq(){},
kr:function kr(){},
h8:function h8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fF:function fF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
q0:function(a){var s
if(t.v.b(a)){s=J.nq(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dr(a.data,a.height,a.width)},
q_:function(a){if(a instanceof P.dr)return{data:a.a,height:a.b,width:a.c}
return a},
bp:function(a){var s,r,q,p,o
if(a==null)return null
s=P.kZ(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
pZ:function(a){var s={}
a.v(0,new P.kv(s))
return s},
k8:function k8(){},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(a,b){this.a=a
this.b=b},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
ia:function ia(){},
ib:function ib(){},
k0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ox:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h6:function h6(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
ei:function ei(){},
aX:function aX(){},
ez:function ez(){},
iW:function iW(){},
c6:function c6(){},
f1:function f1(){},
m:function m(){},
aZ:function aZ(){},
fe:function fe(){},
fV:function fV(){},
fW:function fW(){},
h2:function h2(){},
h3:function h3(){},
hg:function hg(){},
hh:function hh(){},
hp:function hp(){},
hq:function hq(){},
bk:function bk(){},
hN:function hN(){},
dL:function dL(){},
hO:function hO(a){this.a=a},
dM:function dM(){},
b9:function b9(){},
eA:function eA(){},
fB:function fB(){},
eO:function eO(){},
eX:function eX(){},
hc:function hc(){},
hd:function hd(){}},W={
ly:function(){var s=document.createElement("a")
return s},
kM:function(){var s=document.createElement("canvas")
return s},
nG:function(a,b,c){var s,r=document.body
r.toString
s=C.q.ai(r,a,b,c)
s.toString
r=new H.b3(new W.a1(s),new W.i2(),t.ac.I("b3<i.E>"))
return t.h.a(r.gaK(r))},
i3:function(a){return"wheel"},
cv:function(a){var s,r,q="element tag unavailable"
try{s=J.aK(a)
if(typeof s.gee(a)=="string")q=s.gee(a)}catch(r){H.am(r)}return q},
lL:function(a){var s=document.createElement("img")
if(a!=null)s.src=a
return s},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mq:function(a,b,c,d){var s=W.k_(W.k_(W.k_(W.k_(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a_:function(a,b,c,d){var s=new W.fN(a,b,c==null?null:W.mM(new W.jZ(c),t.aD),!1)
s.hp()
return s},
mo:function(a){var s=W.ly(),r=window.location
s=new W.ce(new W.k5(s,r))
s.eD(a)
return s},
ot:function(a,b,c,d){return!0},
ou:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mu:function(){var s=t.N,r=P.lO(C.A,s),q=H.c(["TEMPLATE"],t.s)
s=new W.hk(r,P.cF(s),P.cF(s),P.cF(s),null)
s.eH(null,new H.cL(C.A,new W.kc(),t.eM),q,null)
return s},
mM:function(a,b){var s=$.aJ
if(s===C.f)return a
return s.dk(a,b)},
t:function t(){},
hK:function hK(){},
dH:function dH(){},
dI:function dI(){},
bR:function bR(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
az:function az(){},
hU:function hU(){},
H:function H(){},
cr:function cr(){},
hV:function hV(){},
an:function an(){},
aR:function aR(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
bb:function bb(){},
hZ:function hZ(){},
cs:function cs(){},
ct:function ct(){},
e_:function e_(){},
i_:function i_(){},
fC:function fC(a,b){this.a=a
this.b=b},
C:function C(){},
i2:function i2(){},
j:function j(){},
e:function e(){},
ai:function ai(){},
bW:function bW(){},
e3:function e3(){},
e5:function e5(){},
aB:function aB(){},
ie:function ie(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bD:function bD(){},
ix:function ix(){},
iP:function iP(){},
bZ:function bZ(){},
ep:function ep(){},
iQ:function iQ(a){this.a=a},
eq:function eq(){},
iR:function iR(a){this.a=a},
aD:function aD(){},
er:function er(){},
aj:function aj(){},
a1:function a1(a){this.a=a},
x:function x(){},
cR:function cR(){},
aE:function aE(){},
eF:function eF(){},
eP:function eP(){},
j1:function j1(a){this.a=a},
eR:function eR(){},
at:function at(){},
eT:function eT(){},
aG:function aG(){},
eU:function eU(){},
aH:function aH(){},
f_:function f_(){},
ja:function ja(a){this.a=a},
au:function au(){},
bj:function bj(){},
cX:function cX(){},
f3:function f3(){},
f4:function f4(){},
c9:function c9(){},
av:function av(){},
ab:function ab(){},
f7:function f7(){},
f8:function f8(){},
jk:function jk(){},
aI:function aI(){},
bG:function bG(){},
fd:function fd(){},
jo:function jo(){},
b0:function b0(){},
jE:function jE(){},
fv:function fv(){},
bl:function bl(){},
cc:function cc(){},
cd:function cd(){},
fD:function fD(){},
d7:function d7(){},
fS:function fS(){},
dc:function dc(){},
hb:function hb(){},
hi:function hi(){},
fA:function fA(){},
fK:function fK(a){this.a=a},
kR:function kR(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jZ:function jZ(a){this.a=a},
l6:function l6(a){this.$ti=a},
ce:function ce(a){this.a=a},
M:function M(){},
cS:function cS(a){this.a=a},
iU:function iU(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(){},
k6:function k6(){},
k7:function k7(){},
hk:function hk(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kc:function kc(){},
hj:function hj(){},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ak:function ak(){},
k5:function k5(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a
this.b=!1},
kk:function kk(a){this.a=a},
fE:function fE(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fP:function fP(){},
fQ:function fQ(){},
fT:function fT(){},
fU:function fU(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h4:function h4(){},
h5:function h5(){},
h7:function h7(){},
dj:function dj(){},
dk:function dk(){},
h9:function h9(){},
ha:function ha(){},
hf:function hf(){},
hl:function hl(){},
hm:function hm(){},
dm:function dm(){},
dn:function dn(){},
hn:function hn(){},
ho:function ho(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){}},K={
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.r("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.iX(s,r)},
u:function(a){var s=new K.j2()
s.eA(a)
return s},
b8:function b8(){},
e7:function e7(){},
iA:function iA(){},
aa:function aa(){this.a=null},
iX:function iX(a,b){this.a=a
this.b=b},
j2:function j2(){this.a=null}},L={
jm:function(){var s=new L.jl()
s.a=new H.B(t.cn)
s.b=new H.B(t.w)
s.c=P.cF(t.X)
return s},
eY:function eY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a){this.b=a
this.c=null},
jl:function jl(){var _=this
_.d=_.c=_.b=_.a=null},
ff:function ff(a){this.b=a
this.a=this.c=null}},O={
kN:function(a){var s=new O.ag(a.I("ag<0>"))
s.bE(a)
return s},
ag:function ag(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cN:function cN(){this.b=this.a=null},
ea:function ea(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
im:function im(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
ii:function ii(a){this.a=a},
el:function el(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iB:function iB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cM:function cM(){},
iC:function iC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iE:function iE(){var _=this
_.e=_.d=_.c=_.b=null},
iF:function iF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iG:function iG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f6:function f6(){}},E={
kQ:function(){var s,r=new E.by()
r.a=""
r.b=!0
s=O.kN(t.l)
r.y=s
s.bi(r.gi4(),r.gi7())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbC(0,null)
r.scu(null)
r.sbb(null)
return r},
ml:function(){if(J.kI(window.navigator.vendor,"Google"))return C.G
if(J.kI(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b5(s).D(s,"Trident")||C.a.D(s,"Edge"))return C.t
if(J.kI(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mm:function(){var s=window.navigator.appVersion
if(J.b5(s).D(s,"Win"))return C.a0
if(C.a.D(s,"Mac"))return C.B
if(C.a.D(s,"Linux"))return C.a1
return C.a2},
o9:function(a,b){var s=new E.iY(a)
s.ez(a,b)
return s},
oh:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.m6(a,!0,!0,!0,!1)
s=W.kM()
r=s.style
r.width="100%"
r.height="100%"
J.dG(a).n(0,s)
return E.m6(s,!0,!0,!0,!1)},
m6:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.fa(),n=t.z,m=C.i.cA(a,"webgl2",P.nR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.o(P.r("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.o9(m,a)
n=new T.jh(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.ft(a)
s=new X.is()
s.c=new X.ao(!1,!1,!1)
s.d=P.cF(t.e)
n.b=s
s=new X.iS(n)
s.f=0
s.r=V.bF()
s.x=V.bF()
s.ch=s.Q=1
n.c=s
s=new X.iy(n)
s.r=0
s.x=V.bF()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jn(n)
s.f=V.bF()
s.r=V.bF()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.c([],t.eG)
s=$.i5
n.Q=(s==null?$.i5=new E.fL(E.ml(),E.mm()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a_(q,"contextmenu",n.gfs(),!1))
n.z.push(W.a_(a,"focus",n.gfA(),!1))
n.z.push(W.a_(a,"blur",n.gfl(),!1))
n.z.push(W.a_(q,"keyup",n.gfE(),!1))
n.z.push(W.a_(q,"keydown",n.gfC(),!1))
n.z.push(W.a_(a,"mousedown",n.gfI(),!1))
n.z.push(W.a_(a,"mouseup",n.gfM(),!1))
n.z.push(W.a_(a,p,n.gfK(),!1))
r=n.z
W.i3(a)
W.i3(a)
r.push(W.a_(a,W.i3(a),n.gfO(),!1))
n.z.push(W.a_(q,p,n.gfu(),!1))
n.z.push(W.a_(q,"mouseup",n.gfw(),!1))
n.z.push(W.a_(q,"pointerlockchange",n.gfQ(),!1))
n.z.push(W.a_(a,"touchstart",n.gh2(),!1))
n.z.push(W.a_(a,"touchend",n.gfZ(),!1))
n.z.push(W.a_(a,"touchmove",n.gh0(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ah(Date.now(),!1)
o.db=0
o.d1()
return o},
hR:function hR(){},
by:function by(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bT:function bT(a){this.b=a},
c3:function c3(a){this.b=a},
fL:function fL(a,b){this.a=a
this.b=b},
iY:function iY(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
fa:function fa(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jj:function jj(a){this.a=a}},Z={
l5:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,s)},
aw:function(a){return new Z.b2(a)},
fw:function fw(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fx:function fx(a){this.a=a},
bU:function bU(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dQ:function dQ(){this.a=null},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
J:function(){var s=new D.bV()
s.d=0
return s},
hS:function hS(){},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
S:function S(){this.b=null},
bd:function bd(){this.b=null},
be:function be(){this.b=null},
D:function D(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dN:function dN(){},
bw:function bw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
T:function T(){},
cC:function cC(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eH:function eH(){},
eV:function eV(){}},X={dR:function dR(a,b){this.a=a
this.b=b},eg:function eg(a,b){this.a=a
this.b=b},is:function is(){var _=this
_.d=_.c=_.b=_.a=null},cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iy:function iy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},c_:function c_(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iS:function iS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c0:function c0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eJ:function eJ(){},cZ:function cZ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jn:function jn(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ft:function ft(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nI:function(a){var s=new X.id(),r=new V.Z(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.m2
if(r==null){r=V.m1(0,0,1,1)
$.m2=r}s.r=r
return s},
kL:function kL(){},
id:function id(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eC:function eC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
jb:function jb(){}},V={
dT:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.Z(a,a,a,1)},
lq:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qm:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bg(a-b,s)
return(a<0?a+s:a)+b},
K:function(a,b,c){if(a==null)return C.a.al("null",c)
$.E().toString
return C.a.al(C.d.ef(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cl:function(a,b,c){var s,r,q,p,o,n,m=H.c([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.q)(a),++q){p=V.K(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.a.al(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
ls:function(a){return C.d.iy(Math.pow(2,C.V.ci(Math.log(H.pX(a))/Math.log(2))))},
eo:function(){var s=$.lQ
return s==null?$.lQ=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lP:function(a,b,c){var s=c.P(),r=b.b8(s).P(),q=s.b8(r),p=new V.G(a.a,a.b,a.c),o=r.R(0).a6(p),n=q.R(0).a6(p),m=s.R(0).a6(p)
return V.aW(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bF:function(){var s=$.lT
return s==null?$.lT=new V.aF(0,0):s},
lU:function(){var s=$.aY
return s==null?$.aY=new V.a7(0,0,0):s},
m1:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eN(a,b,c,d)},
b1:function(){var s=$.mi
return s==null?$.mi=new V.G(0,0,0):s},
mk:function(){var s=$.mh
return s==null?$.mh=new V.G(1,0,0):s},
on:function(){var s=$.jK
return s==null?$.jK=new V.G(-1,0,0):s},
l3:function(){var s=$.jL
return s==null?$.jL=new V.G(0,1,0):s},
oo:function(){var s=$.jM
return s==null?$.jM=new V.G(0,0,1):s},
mj:function(){var s=$.mg
return s==null?$.mg=new V.G(0,0,-1):s},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(){},
en:function en(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aF:function aF(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function(a){P.oi(C.S,new V.kG(a))},
oc:function(a){var s=new V.j6()
s.eB(a,!0)
return s},
ba:function ba(){},
kG:function kG(a){this.a=a},
dX:function dX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e6:function e6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e8:function e8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eE:function eE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j6:function j6(){this.b=this.a=null},
j8:function j8(a){this.a=a},
j7:function j7(a){this.a=a},
j9:function j9(a){this.a=a},
jd:function jd(a,b){this.a=a
this.c=null
this.d=b},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(){}},U={
kO:function(){var s=new U.hT()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
lG:function(a){var s=new U.co()
s.a=a
return s},
hT:function hT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
co:function co(){this.b=this.a=null},
bX:function bX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
V:function V(){},
d4:function d4(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={e0:function e0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nV:function(a,b){var s=a.b9,r=new A.em(b,s)
r.cH(b,s)
r.ey(a,b)
return r},
nW:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gaq(a5)+a6.gaq(a6)+a7.gaq(a7)+a8.gaq(a8)+a9.gaq(a9)+b0.gaq(b0)+b1.gaq(b1)+b2.gaq(b2)+b3.gaq(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.q)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.aN()
if(h){s=$.aM()
b=new Z.b2(b.a|s.a)}if(g){s=$.aL()
b=new Z.b2(b.a|s.a)}if(f){s=$.br()
b=new Z.b2(b.a|s.a)}if(e){s=$.bq()
b=new Z.b2(b.a|s.a)}return new A.iD(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
ks:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kt:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.ks(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hI(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pr:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ks(b,r,"emission")
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
pn:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kt(b,r,"ambient")
b.a+="\n"},
pp:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kt(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.q
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
ps:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kt(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.q
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
py:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kt(b,r,"specular")
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
r+=u.q
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pu:function(a,b){var s,r,q
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
pw:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ks(b,r,"reflect")
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
px:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ks(b,r,"refract")
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
po:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hI(r)
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
p+=u.M
c.a=p
p+=u.b
c.a=p
c.a=p+"\n"}p=t.i
o=H.c([],p)
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
o=H.c([],p)
s=a.b
if(s.a||s.b||!1)o.push("ambientColor")
if(a.dx){c.a+=u.h
o.push("highLight")
s=c.a+="   vec3 litPnt  = "+r+"ClosestPoint(lit);\n"
s+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=s
s+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=s
s+="   vec3 intensity = "+r+"Intensity(normDir, litPnt, lit);\n"
c.a=s
c.a=s+"   if(length(intensity) > 0.0001) {\n"
n=H.c([],p)
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
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
c.a=s+u.N
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
pq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hI(r)
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
m=H.c([],p)
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.h
k=H.c([],p)
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
p+=u.N
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
pv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hI(r)
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
if(m){p+=u.M
c.a=p
p+=u.b
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.S
c.a=p
p+=u.U
c.a=p
c.a=p+"\n"}p=t.i
j=H.c([],p)
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
j=H.c([],p)
m=a.b
if(m.a||m.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.h
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.c([],p)
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
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
p+=u.N
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
pz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hI(r)
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
if(l){s+=u.M
c.a=s
s+=u.b
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.i5
if(s==null)s=$.i5=new E.fL(E.ml(),E.mm())
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
s+=u.S
c.a=s
s+=u.U
c.a=s
c.a=s+"\n"}s=t.i
h=H.c([],s)
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
h=H.c([],s)
p=a.b
if(p.a||p.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.h
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.c([],s)
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
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
s+=u.N
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
pt:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.c([],t.i)
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pA:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.R("")
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
A.pr(a,h)
A.pn(a,h)
A.pp(a,h)
A.ps(a,h)
A.py(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pw(a,h)
A.px(a,h)}A.pu(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.po(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pq(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pv(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pz(a,o[m],h)
A.pt(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.c([],t.i)
if(p){h.a+=u.N
l.push("lightAccum")
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ac(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pB:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aY+"];\n"
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
pD:function(a,b){var s
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
pC:function(a,b){var s
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
pF:function(a,b){var s,r
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
pG:function(a,b){var s,r
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
pE:function(a,b){var s
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
pH:function(a,b){var s
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
hI:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ac(a,1)},
l2:function(a,b,c,d,e){var s=new A.jr(a,c,e)
s.f=d
P.iv(d,0,!1,t.e)
return s},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
em:function em(a,b){var _=this
_.iM=_.dv=_.bq=_.b9=_.aY=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iU=_.iT=_.iS=_.cf=_.ce=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.iR=_.dJ=_.dI=_.iQ=_.dH=_.dG=_.dF=_.iP=_.dE=_.dD=_.dC=_.iO=_.dB=_.dA=_.iN=_.dz=_.dw=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dO:function dO(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aY=b5
_.b9=b6
_.bq=b7},
d_:function d_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d0:function d0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d2:function d2(a,b,c,d,e,f,g,h,i,j){var _=this
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
d3:function d3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
c7:function c7(){},
fg:function fg(){},
jw:function jw(a){this.a=a},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
jt:function jt(a,b,c){this.a=a
this.c=b
this.d=c},
ju:function ju(a,b,c){this.a=a
this.c=b
this.d=c},
jv:function jv(a,b,c){this.a=a
this.c=b
this.d=c},
jr:function jr(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
js:function js(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c},
jx:function jx(a,b,c){this.a=a
this.c=b
this.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c},
d1:function d1(a,b,c){this.a=a
this.c=b
this.d=c},
fm:function fm(a,b,c){this.a=a
this.c=b
this.d=c},
fn:function fn(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kn:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dw:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.G(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.G(s+a5,r+a3,q+a4)
o=new V.G(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.G(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.kn(g)
j=F.kn(f)
i=F.qj(a1,a2,new F.km(h,F.kn(e),F.kn(d),j,k,a0),b)
if(i!=null)a.i2(i)},
qj:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)return null
if(b<1)return null
s=F.cU()
r=H.c([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
m=o.dc(new V.Z(n,0,0,1),new V.aF(p,1))
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
m=i.dc(new V.Z(h,g,f,1),new V.aF(p,k))
c.$3(m,p,l)
r.push(m.c6(d))}}s.d.hv(a+1,b+1,r)
return s},
e2:function(a,b,c){var s=new F.e1(),r=a.a
if(r==null)H.o(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.o(P.r("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.W()
return s},
nP:function(a,b){var s,r=new F.cD()
if(a==null)H.o(P.r(u.e))
if(b==null)H.o(P.r(u.k))
s=a.a
if(s==null)H.o(P.r(u.E))
if(s!=b.a)H.o(P.r(u.T))
r.a=a
a.c.b.push(r)
r.b=b
b.c.c.push(r)
r.a.a.c.b.push(r)
r.a.a.W()
return r},
nX:function(a){var s=new F.eG()
if(a.a==null)H.o(P.r("May not create a point with a vertex which is not attached to a shape."))
s.a=a
a.b.b.push(s)
s.a.a.b.b.push(s)
s.a.a.W()
return s},
cU:function(){var s=new F.as(),r=new F.jN(s)
r.b=!1
r.c=H.c([],t.j)
s.a=r
r=new F.j5(s)
r.b=H.c([],t.H)
s.b=r
r=new F.j4(s)
r.b=H.c([],t.L)
s.c=r
r=new F.j3(s)
r.b=H.c([],t.b)
s.d=r
s.e=null
return s},
l4:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fu(),p=new F.jS()
p.b=H.c([],t.H)
q.b=p
p=new F.jR()
s=t.L
p.b=H.c([],s)
p.c=H.c([],s)
q.c=p
p=new F.jO()
s=t.b
p.b=H.c([],s)
p.c=H.c([],s)
p.d=H.c([],s)
q.d=p
h=$.nd()
q.e=0
p=$.aN()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aM().a)!==0?e:r
q.x=(s&$.aL().a)!==0?b:r
q.y=(s&$.br().a)!==0?f:r
q.z=(s&$.bP().a)!==0?g:r
q.Q=(s&$.ne().a)!==0?c:r
q.ch=(s&$.cm().a)!==0?i:0
q.cx=(s&$.bq().a)!==0?a:r
return q},
km:function km(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e1:function e1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cD:function cD(){this.b=this.a=null},
eG:function eG(){this.a=null},
as:function as(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j3:function j3(a){this.a=a
this.b=null},
j4:function j4(a){this.a=a
this.b=null},
j5:function j5(a){this.a=a
this.b=null},
fu:function fu(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jU:function jU(a){this.a=a},
jT:function jT(a){this.a=a},
jN:function jN(a){this.a=a
this.c=this.b=null},
jO:function jO(){this.d=this.c=this.b=null},
jP:function jP(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
jR:function jR(){this.c=this.b=null},
jS:function jS(){this.b=null}},T={f9:function f9(){},jc:function jc(){},jg:function jg(){var _=this
_.y=_.d=_.c=_.b=_.a=null},jh:function jh(a){var _=this
_.a=a
_.e=_.d=_.b=null},ji:function ji(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
mT:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2="bumpMaps",a3="modifiers",a4=V.oc("Test 006"),a5=W.kM()
a5.className="pageLargeCanvas"
a5.id=a0
a4.a.appendChild(a5)
s=t.i
a4.de(H.c(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],s))
a4.ht(H.c(["bumpMaps"],s))
a4.de(H.c(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a0)
if(r==null)H.o(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.oh(r,!0,!0,!0,!1)
p=F.cU()
F.dw(p,a1,a1,1,1,1,0,0,1)
F.dw(p,a1,a1,1,1,0,1,0,3)
F.dw(p,a1,a1,1,1,0,0,1,2)
F.dw(p,a1,a1,1,1,-1,0,0,0)
F.dw(p,a1,a1,1,1,0,-1,0,0)
F.dw(p,a1,a1,1,1,0,0,-1,3)
p.aC()
o=new O.el()
n=O.kN(t.hc)
o.e=n
n.bi(o.gfh(),o.gfj())
n=new O.aV(o,"emission")
n.c=new A.a2(!1,!1,!1)
n.f=new V.a0(0,0,0)
o.f=n
n=new O.aV(o,"ambient")
n.c=new A.a2(!1,!1,!1)
n.f=new V.a0(0,0,0)
o.r=n
n=new O.aV(o,"diffuse")
n.c=new A.a2(!1,!1,!1)
n.f=new V.a0(0,0,0)
o.x=n
n=new O.aV(o,"invDiffuse")
n.c=new A.a2(!1,!1,!1)
n.f=new V.a0(0,0,0)
o.y=n
n=new O.iG(o,"specular")
n.c=new A.a2(!1,!1,!1)
n.f=new V.a0(0,0,0)
n.ch=100
o.z=n
n=new O.iC(o,"bump")
n.c=new A.a2(!1,!1,!1)
o.Q=n
o.ch=null
n=new O.aV(o,"reflect")
n.c=new A.a2(!1,!1,!1)
n.f=new V.a0(0,0,0)
o.cx=n
n=new O.iF(o,"refract")
n.c=new A.a2(!1,!1,!1)
n.f=new V.a0(0,0,0)
n.ch=1
o.cy=n
n=new O.iB(o,"alpha")
n.c=new A.a2(!1,!1,!1)
n.f=1
o.db=n
n=new D.cC()
n.bE(t.gj)
n.e=H.c([],t.bb)
n.f=H.c([],t.cP)
n.r=H.c([],t.af)
n.x=H.c([],t.du)
n.z=n.y=null
n.cC(n.gff(),n.gfT(),n.gfX())
o.dx=n
m=new O.iE()
m.b=new V.Z(0,0,0,0)
m.c=1
m.d=10
m.e=!1
o.dy=m
m=n.y
n=m==null?n.y=D.J():m
n.n(0,o.gh9())
n=o.dx
m=n.z
n=m==null?n.z=D.J():m
n.n(0,o.gbl())
o.fr=null
n=o.dx
l=V.l3()
m=U.lG(V.lP(V.lU(),l,new V.G(0,0,-1)))
k=new V.a0(1,1,1)
j=new D.bw()
j.c=new V.a0(1,1,1)
j.a=V.oo()
j.d=V.l3()
j.e=V.on()
i=j.b
j.b=m
m.gu().n(0,j.geE())
m=new D.D("mover",i,j.b)
m.b=!0
j.av(m)
if(!j.c.q(0,k)){i=j.c
j.c=k
m=new D.D("color",i,k)
m.b=!0
j.av(m)}n.n(0,j)
n=o.r
n.saa(0,new V.a0(0,0,1))
n=o.x
n.saa(0,new V.a0(0,1,0))
n=o.z
n.saa(0,new V.a0(1,0,0))
n=o.z
n.bY(new A.a2(!0,n.c.b,!1))
n.d3(10)
h=E.kQ()
h.sbC(0,p)
h.scu(o)
g=E.kQ()
g.sbC(0,p)
n=new O.ea()
n.b=V.mj()
n.c=new V.Z(0.2,0.3,0.4,1)
n.d=new V.Z(0.1,0.2,0.3,1)
n.e=V.dT(0.7)
n.f=V.dT(0.3)
n.r=V.dT(0.5)
n.x=V.dT(0.5)
n.y=new V.Z(1,1,1,1)
n.z=V.dT(0.8)
n.r1=n.k4=n.k3=n.k2=n.k1=n.id=n.go=n.fy=n.fx=n.fr=n.dy=n.dx=n.db=n.cy=n.cx=n.ch=n.Q=!1
n.r2=1
$.E().toString
if(!(Math.abs(0.6)<1e-9)){n.r2=0.4
m=new D.D("vectorScale",1,0.4)
m.b=!0
n.T(m)}if(!n.ch){n.ch=!0
m=new D.D("showWireFrame",!1,!0)
m.b=!0
n.T(m)}if(!n.k3){n.k3=!0
m=new D.D("showAxis",!1,!0)
m.b=!0
n.T(m)}if(!n.cy){n.cy=!0
m=new D.D("showNormals",!1,!0)
m.b=!0
n.T(m)}if(!n.db){n.db=!0
m=new D.D("showBinormals",!1,!0)
m.b=!0
n.T(m)}g.scu(n)
f=E.kQ()
f.y.n(0,g)
f.y.n(0,h)
n=new U.bX()
n.bE(t.ah)
n.bi(n.gfd(),n.gfV())
n.e=null
n.f=V.eo()
n.r=0
m=q.x
j=new U.d5()
e=U.kO()
e.scz(0,!0)
e.scn(6.283185307179586)
e.scp(0)
e.sad(0,0)
e.sco(100)
e.sU(0)
e.sc7(0.5)
j.b=e
d=j.gaM()
e.gu().n(0,d)
e=U.kO()
e.scz(0,!0)
e.scn(6.283185307179586)
e.scp(0)
e.sad(0,0)
e.sco(100)
e.sU(0)
e.sc7(0.5)
j.c=e
e.gu().n(0,d)
j.d=null
j.r=j.f=j.e=!1
j.y=j.x=2.5
j.Q=4
j.ch=j.cx=!1
j.db=j.cy=0
j.dx=null
j.dy=0
j.fx=j.fr=null
c=new X.ao(!1,!1,!1)
i=j.d
j.d=c
e=new D.D(a3,i,c)
e.b=!0
j.M(e)
e=j.f
if(e!==!1){j.f=!1
e=new D.D("invertX",e,!1)
e.b=!0
j.M(e)}e=j.r
if(e!==!0){j.r=!0
e=new D.D("invertY",e,!0)
e.b=!0
j.M(e)}j.b7(m)
n.n(0,j)
m=q.x
j=new U.d4()
e=U.kO()
e.scz(0,!0)
e.scn(6.283185307179586)
e.scp(0)
e.sad(0,0)
e.sco(100)
e.sU(0)
e.sc7(0.2)
j.b=e
e.gu().n(0,j.gaM())
j.c=null
j.d=!1
j.e=2.5
j.r=4
j.x=j.y=!1
j.z=0
j.Q=null
j.ch=0
j.cy=j.cx=null
c=new X.ao(!0,!1,!1)
i=j.c
j.c=c
e=new D.D(a3,i,c)
e.b=!0
j.M(e)
j.b7(m)
n.n(0,j)
m=q.x
j=new U.d6()
j.c=0.01
j.e=j.d=0
c=new X.ao(!1,!1,!1)
j.b=c
e=new D.D(a3,a1,c)
e.b=!0
j.M(e)
j.b7(m)
n.n(0,j)
f.sbb(n)
n=new M.e0()
n.a=!0
m=O.kN(t.l)
n.e=m
m.bi(n.gfn(),n.gfp())
n.y=n.x=n.r=n.f=null
b=X.nI(a1)
a=new X.eC()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.sbb(a1)
m=a.c
$.E().toString
if(!(Math.abs(m-1.0471975511965976)<1e-9)){a.c=1.0471975511965976
m=new D.D("fov",m,1.0471975511965976)
m.b=!0
a.aP(m)}m=a.d
$.E().toString
if(!(Math.abs(m-0.1)<1e-9)){a.d=0.1
m=new D.D("near",m,0.1)
m.b=!0
a.aP(m)}m=a.e
$.E().toString
if(!(Math.abs(m-2000)<1e-9)){a.e=2000
m=new D.D("far",m,2000)
m.b=!0
a.aP(m)}m=n.b
if(m!==a){if(m!=null)m.gu().X(0,n.gaN())
i=n.b
n.b=a
a.gu().n(0,n.gaN())
m=new D.D("camera",i,n.b)
m.b=!0
n.aO(m)}m=n.c
if(m!==b){if(m!=null)m.gu().X(0,n.gaN())
i=n.c
n.c=b
b.gu().n(0,n.gaN())
m=new D.D("target",i,n.c)
m.b=!0
n.aO(m)}n.e.n(0,f)
n.b.sbb(U.lG(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=q.d
if(m!==n){if(m!=null)m.gu().X(0,q.gcI())
q.d=n
n.gu().n(0,q.gcI())
q.cJ()}n=new V.jd(a2,new N.kD(o,q))
s=s.getElementById(a2)
n.c=s
if(s==null)H.o("Failed to find bumpMaps for Texture2DGroup")
n.az(0,"../resources/BumpMap1.png",!0)
n.n(0,"../resources/BumpMap2.png")
n.n(0,"../resources/BumpMap3.png")
n.n(0,"../resources/BumpMap4.png")
n.n(0,"../resources/BumpMap5.png")
n.n(0,"../resources/ScrewBumpMap.png")
n.n(0,"../resources/CtrlPnlBumpMap.png")
s=q.Q
if(s==null)s=q.Q=D.J()
n=s.b
s=n==null?s.b=H.c([],t.f):n
s.push(new N.kE(a4,o))
V.qh(q)},
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kW.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gO:function(a){return H.cT(a)},
i:function(a){return"Instance of '"+H.f(H.eL(a))+"'"}}
J.ed.prototype={
i:function(a){return String(a)},
gO:function(a){return a?519018:218159},
$iay:1}
J.cB.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0}}
J.bf.prototype={
gO:function(a){return 0},
i:function(a){return String(a)},
$ilM:1}
J.eD.prototype={}
J.bH.prototype={}
J.aC.prototype={
i:function(a){var s=a[$.n0()]
if(s==null)return this.ev(a)
return"JavaScript function for "+H.f(J.a5(s))},
$iaA:1}
J.y.prototype={
ip:function(a,b){var s
if(!!a.fixed$length)H.o(P.A("removeAt"))
s=a.length
if(b>=s)throw H.b(P.eM(b,null))
return a.splice(b,1)[0]},
X:function(a,b){var s
if(!!a.fixed$length)H.o(P.A("remove"))
for(s=0;s<a.length;++s)if(J.I(a[s],b)){a.splice(s,1)
return!0}return!1},
ah:function(a,b){var s,r
if(!!a.fixed$length)H.o(P.A("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.q)(b),++r)a.push(b[r])},
v:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.aQ(a))}},
j:function(a,b){var s,r,q=P.iv(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
i_:function(a){return this.j(a,"")},
hT:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.aQ(a))}return s},
hU:function(a,b,c){return this.hT(a,b,c,t.z)},
hS:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.aQ(a))}throw H.b(H.kT())},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gau:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.kT())},
dg:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.aQ(a))}return!1},
b1:function(a,b){if(!!a.immutable$list)H.o(P.A("sort"))
H.of(a,b==null?J.pe():b)},
eq:function(a){return this.b1(a,null)},
D:function(a,b){var s
for(s=0;s<a.length;++s)if(J.I(a[s],b))return!0
return!1},
i:function(a){return P.kS(a,"[","]")},
gN:function(a){return new J.a6(a,a.length)},
gO:function(a){return H.cT(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.o(P.A("set length"))
a.length=b},
h:function(a,b){if(!H.bK(b))throw H.b(H.bL(a,b))
if(b>=a.length||b<0)throw H.b(H.bL(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.o(P.A("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bL(a,b))
a[b]=c},
$ik:1,
$ih:1,
$in:1}
J.iq.prototype={}
J.a6.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bC.prototype={
aW:function(a,b){var s
if(typeof b!="number")throw H.b(H.ax(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbt(b)
if(this.gbt(a)===s)return 0
if(this.gbt(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbt:function(a){return a===0?1/a<0:a<0},
iy:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.A(""+a+".toInt()"))},
ci:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.A(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.A(""+a+".round()"))},
ef:function(a,b){var s
if(b>20)throw H.b(P.a4(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbt(a))return"-"+s
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
bg:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.A("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aS:function(a,b){var s
if(a>0)s=this.d4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hi:function(a,b){if(b<0)throw H.b(H.ax(b))
return this.d4(a,b)},
d4:function(a,b){return b>31?0:a>>>b},
$iY:1,
$iQ:1}
J.cA.prototype={$il:1}
J.cz.prototype={}
J.aS.prototype={
V:function(a,b){if(b<0)throw H.b(H.bL(a,b))
if(b>=a.length)H.o(H.bL(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.b(H.bL(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.b(P.lz(b,null,null))
return a+b},
aZ:function(a,b,c,d){var s,r,q=P.bi(b,c,a.length)
if(!H.bK(q))H.o(H.ax(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a8:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a5:function(a,b){return this.a8(a,b,0)},
p:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eM(b,null))
if(b>c)throw H.b(P.eM(b,null))
if(c>a.length)throw H.b(P.eM(c,null))
return a.substring(b,c)},
ac:function(a,b){return this.p(a,b,null)},
iB:function(a){return a.toLowerCase()},
A:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
al:function(a,b){var s=b-a.length
if(s<=0)return a
return this.A(" ",s)+a},
br:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dP:function(a,b){return this.br(a,b,0)},
hA:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a4(c,0,s,null,null))
return H.mX(a,b,c)},
D:function(a,b){return this.hA(a,b,0)},
aW:function(a,b){var s
if(typeof b!="string")throw H.b(H.ax(b))
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
gm:function(a){return a.length},
$iw:1}
H.eh.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.k.prototype={}
H.cH.prototype={
gN:function(a){return new H.bg(this,this.gm(this))},
bA:function(a,b){return this.eu(0,b)}}
H.bg.prototype={
gB:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.b5(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.aQ(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.aU.prototype={
gN:function(a){return new H.ek(J.b7(this.a),this.b)},
gm:function(a){return J.aO(this.a)},
F:function(a,b){return this.b.$1(J.hJ(this.a,b))}}
H.cu.prototype={$ik:1}
H.ek.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cL.prototype={
gm:function(a){return J.aO(this.a)},
F:function(a,b){return this.b.$1(J.hJ(this.a,b))}}
H.b3.prototype={
gN:function(a){return new H.fy(J.b7(this.a),this.b)}}
H.fy.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cw.prototype={}
H.fq.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify an unmodifiable list"))}}
H.ca.prototype={}
H.cp.prototype={
i:function(a){return P.l_(this)},
l:function(a,b,c){H.nD()},
$iF:1}
H.cq.prototype={
gm:function(a){return this.a},
c4:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c4(0,b))return null
return this.cV(b)},
cV:function(a){return this.b[a]},
v:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cV(q))}}}
H.jp.prototype={
ak:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ex.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ef.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fp.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iV.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.he.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bv.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mZ(r==null?"unknown":r)+"'"},
$iaA:1,
giE:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f5.prototype={}
H.eZ.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mZ(s)+"'"}}
H.bS.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gO:function(a){var s,r=this.c
if(r==null)s=H.cT(this.a)
else s=typeof r!=="object"?J.ae(r):H.cT(r)
return(s^H.cT(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eL(s))+"'")}}
H.eQ.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.B.prototype={
gm:function(a){return this.a},
gbs:function(a){return this.a===0},
ga0:function(a){return new H.cE(this,H.dy(this).I("cE<1>"))},
giD:function(a){var s=this,r=H.dy(s)
return H.nU(s.ga0(s),new H.ir(s),r.c,r.Q[1])},
c4:function(a,b){var s=this.b
if(s==null)return!1
return this.eY(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bk(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bk(p,b)
q=r==null?n:r.b
return q}else return o.hY(b)},
hY:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cW(p,q.dR(a))
r=q.dS(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cM(s==null?q.b=q.bU():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cM(r==null?q.c=q.bU():r,b,c)}else q.hZ(b,c)},
hZ:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bU()
s=p.dR(a)
r=p.cW(o,s)
if(r==null)p.bZ(o,s,[p.bV(a,b)])
else{q=p.dS(r,a)
if(q>=0)r[q].b=b
else r.push(p.bV(a,b))}},
v:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.aQ(s))
r=r.c}},
cM:function(a,b,c){var s=this.bk(a,b)
if(s==null)this.bZ(a,b,this.bV(b,c))
else s.b=c},
f8:function(){this.r=this.r+1&67108863},
bV:function(a,b){var s,r=this,q=new H.it(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f8()
return q},
dR:function(a){return J.ae(a)&0x3ffffff},
dS:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.I(a[r].a,b))return r
return-1},
i:function(a){return P.l_(this)},
bk:function(a,b){return a[b]},
cW:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
eY:function(a,b){return this.bk(a,b)!=null},
bU:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bZ(r,s,r)
this.f1(r,s)
return r}}
H.ir.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dy(this.a).I("2(1)")}}
H.it.prototype={}
H.cE.prototype={
gm:function(a){return this.a.a},
gN:function(a){var s=this.a,r=new H.ej(s,s.r)
r.c=s.e
return r}}
H.ej.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.aQ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.ky.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kz.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kA.prototype={
$1:function(a){return this.a(a)}}
H.ee.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im0:1}
H.cO.prototype={$icO:1}
H.W.prototype={$iW:1}
H.c1.prototype={
gm:function(a){return a.length},
$iz:1}
H.bE.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b4(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cP.prototype={
l:function(a,b,c){H.b4(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.es.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.ew.prototype={
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.cQ.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b4(b,a,a.length)
return a[b]}}
H.c2.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b4(b,a,a.length)
return a[b]},
$ic2:1,
$ibk:1}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
H.ar.prototype={
I:function(a){return H.hs(v.typeUniverse,this,a)},
b2:function(a){return H.oO(v.typeUniverse,this,a)}}
H.fR.prototype={}
H.fM.prototype={
i:function(a){return this.a}}
H.dq.prototype={}
P.jW.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.jV.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jX.prototype={
$0:function(){this.a.$0()}}
P.jY.prototype={
$0:function(){this.a.$0()}}
P.dp.prototype={
eI:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.ke(this,b),0),a)
else throw H.b(P.A("`setTimeout()` not found."))},
eJ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.kd(this,a,Date.now(),b),0),a)
else throw H.b(P.A("Periodic timer."))},
$icY:1}
P.ke.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kd.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ex(s,o)}q.c=p
r.d.$1(q)}}
P.cf.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bI.prototype={
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
if(r instanceof P.cf){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b7(s)
if(o instanceof P.bI){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dl.prototype={
gN:function(a){return new P.bI(this.a())}}
P.fz.prototype={}
P.cW.prototype={}
P.f0.prototype={}
P.cY.prototype={}
P.kl.prototype={}
P.ku.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a5(this.b)
throw s}}
P.k2.prototype={
it:function(a){var s,r,q,p=null
try{if(C.f===$.aJ){a.$0()
return}P.pK(p,p,this,a)}catch(q){s=H.am(q)
r=H.lo(q)
P.mK(p,p,this,s,r)}},
iu:function(a,b){var s,r,q,p=null
try{if(C.f===$.aJ){a.$1(b)
return}P.pL(p,p,this,a,b)}catch(q){s=H.am(q)
r=H.lo(q)
P.mK(p,p,this,s,r)}},
iv:function(a,b){return this.iu(a,b,t.z)},
hz:function(a){return new P.k3(this,a)},
dk:function(a,b){return new P.k4(this,a,b)}}
P.k3.prototype={
$0:function(){return this.a.it(this.b)}}
P.k4.prototype={
$1:function(a){return this.a.iv(this.b,a)},
$S:function(){return this.c.I("~(0)")}}
P.d9.prototype={
gN:function(a){var s=new P.da(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
D:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eV(b)
return r}},
eV:function(a){var s=this.d
if(s==null)return!1
return this.bL(s[this.bH(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cQ(s==null?q.b=P.l7():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cQ(r==null?q.c=P.l7():r,b)}else return q.eL(0,b)},
eL:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.l7()
s=q.bH(b)
r=p[s]
if(r==null)p[s]=[q.bG(b)]
else{if(q.bL(r,b)>=0)return!1
r.push(q.bG(b))}return!0},
X:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.h5(this.c,b)
else return this.h4(0,b)},
h4:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bH(b)
r=n[s]
q=o.bL(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d7(p)
return!0},
cQ:function(a,b){if(a[b]!=null)return!1
a[b]=this.bG(b)
return!0},
h5:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d7(s)
delete a[b]
return!0},
cR:function(){this.r=1073741823&this.r+1},
bG:function(a){var s,r=this,q=new P.k1(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cR()
return q},
d7:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cR()},
bH:function(a){return J.ae(a)&1073741823},
bL:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.I(a[r].a,b))return r
return-1}}
P.k1.prototype={}
P.da.prototype={
gB:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.aQ(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cy.prototype={}
P.iu.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cG.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gN:function(a){return new H.bg(a,this.gm(a))},
F:function(a,b){return this.h(a,b)},
v:function(a,b){var s,r=this.gm(a)
if(typeof r!=="number")return H.v(r)
s=0
for(;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gm(a))throw H.b(P.aQ(a))}},
gbs:function(a){return this.gm(a)===0},
iA:function(a,b){var s,r,q,p,o=this
if(o.gbs(a)){s=J.kU(0,H.bM(a).I("i.E"))
return s}r=o.h(a,0)
q=P.iv(o.gm(a),r,!0,H.bM(a).I("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
iz:function(a){return this.iA(a,!0)},
hP:function(a,b,c,d){var s
P.bi(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.kS(a,"[","]")}}
P.cJ.prototype={}
P.iz.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.U.prototype={
v:function(a,b){var s,r
for(s=J.b7(this.ga0(a));s.t();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aO(this.ga0(a))},
i:function(a){return P.l_(a)},
$iF:1}
P.ht.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify unmodifiable map"))}}
P.cK.prototype={
h:function(a,b){return J.cn(this.a,b)},
l:function(a,b,c){J.kH(this.a,b,c)},
v:function(a,b){J.kJ(this.a,b)},
gm:function(a){return J.aO(this.a)},
i:function(a){return J.a5(this.a)},
$iF:1}
P.cb.prototype={}
P.dh.prototype={
ah:function(a,b){var s
for(s=J.b7(b);s.t();)this.n(0,s.gB(s))},
i:function(a){return P.kS(this,"{","}")},
F:function(a,b){var s,r,q,p="index"
P.nu(b,p)
P.m_(b,p)
for(s=P.oy(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.b(P.O(b,this,p,null,r))},
$ik:1,
$ih:1}
P.db.prototype={}
P.du.prototype={}
P.jH.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.am(r)}return null}}
P.jI.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.am(r)}return null}}
P.hP.prototype={
i3:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bi(a2,a3,a1.length)
if(a3==null)throw H.b(P.lZ("Invalid range"))
s=$.ng()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kx(C.a.C(a1,l))
h=H.kx(C.a.C(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.d(s,g)
f=s[g]
if(f>=0){g=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.R("")
e=p}else e=p
d=e.a+=C.a.p(a1,q,r)
e.a=d+H.aq(k)
q=l
continue}}throw H.b(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.p(a1,q,a3)
d=e.length
if(o>=0)P.lA(a1,n,a3,o,m,d)
else{c=C.c.bg(d-1,4)+1
if(c===1)throw H.b(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aZ(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lA(a1,n,a3,o,m,b)
else{c=C.c.bg(b,4)
if(c===1)throw H.b(P.a3(a,a1,a3))
if(c>1)a1=C.a.aZ(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hQ.prototype={}
P.dS.prototype={}
P.dV.prototype={}
P.i4.prototype={}
P.ih.prototype={
i:function(a){return this.a}}
P.ig.prototype={
eZ:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.d(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.R("")
if(p>b)o.a+=C.a.p(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.ns(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jF.prototype={
ghO:function(){return C.Q}}
P.jJ.prototype={
c5:function(a){var s,r,q,p=P.bi(0,null,a.length)
if(p==null)throw H.b(P.lZ("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kj(r)
if(q.f3(a,0,p)!==p){J.nn(a,p-1)
q.c1()}return new Uint8Array(r.subarray(0,H.p6(0,q.b,r.length)))}}
P.kj.prototype={
c1:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hs:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c1()
return!1}},
f3:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hs(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c1()}else if(p<=2047){o=l.b
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
P.jG.prototype={
c5:function(a){var s=this.a,r=P.ol(s,a,0,null)
if(r!=null)return r
return new P.ki(s).hB(a,0,null,!0)}}
P.ki.prototype={
hB:function(a,b,c,d){var s,r,q,p,o=this,n=P.bi(b,c,J.aO(a))
if(b===n)return""
s=P.p2(a,b,n)
if(typeof n!=="number")return n.a_()
n-=b
r=o.bI(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.p3(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bI:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.a_()
if(c-b>1000){s=C.c.a2(b+c,2)
r=q.bI(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bI(a,s,c,d)}return q.hF(a,b,c,d)},
hF:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.R(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
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
if(f<0||f>=e)return H.d(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.d(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.d(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.d(a,l)
g.a+=H.aq(a[l])}else g.a+=P.f2(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aq(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.ay.prototype={}
P.ah.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
aW:function(a,b){return C.c.aW(this.a,b.a)},
gO:function(a){var s=this.a
return(s^C.c.aS(s,30))&1073741823},
i:function(a){var s=this,r=P.nE(H.o5(s)),q=P.dY(H.o3(s)),p=P.dY(H.o_(s)),o=P.dY(H.o0(s)),n=P.dY(H.o2(s)),m=P.dY(H.o4(s)),l=P.nF(H.o1(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Y.prototype={}
P.bx.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gO:function(a){return C.c.gO(this.a)},
aW:function(a,b){return C.c.aW(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i1(),o=this.a
if(o<0)return"-"+new P.bx(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.i0().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.L.prototype={}
P.dJ.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i7(s)
return"Assertion failed"}}
P.ey.prototype={
i:function(a){return"Throw of null."}}
P.af.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbK()+o+m
if(!q.a)return l
s=q.gbJ()
r=P.i7(q.b)
return l+s+": "+r}}
P.c5.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e9.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var s,r=this.b
if(typeof r!=="number")return r.ab()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fr.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fo.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dU.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i7(s)+"."}}
P.eB.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.cV.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.dW.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fO.prototype={
i:function(a){return"Exception: "+this.a}}
P.ic.prototype={
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
i=""}h=C.a.p(d,k,l)
return f+j+h+i+"\n"+C.a.A(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aA.prototype={}
P.l.prototype={}
P.h.prototype={
bA:function(a,b){return new H.b3(this,b,H.dy(this).I("b3<h.E>"))},
gm:function(a){var s,r=this.gN(this)
for(s=0;r.t();)++s
return s},
gaK:function(a){var s,r=this.gN(this)
if(!r.t())throw H.b(H.kT())
s=r.gB(r)
if(r.t())throw H.b(H.nK())
return s},
F:function(a,b){var s,r,q
P.m_(b,"index")
for(s=this.gN(this),r=0;s.t();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.O(b,this,"index",null,r))},
i:function(a){return P.nJ(this,"(",")")}}
P.ec.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.F.prototype={}
P.ap.prototype={
gO:function(a){return P.N.prototype.gO.call(C.j,this)},
i:function(a){return"null"}}
P.Q.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gO:function(a){return H.cT(this)},
i:function(a){return"Instance of '"+H.f(H.eL(this))+"'"},
toString:function(){return this.i(this)}}
P.w.prototype={}
P.R.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jD.prototype={
$2:function(a,b){var s,r,q,p=J.dD(b).dP(b,"=")
if(p===-1){if(b!=="")J.kH(a,P.lg(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.p(b,0,p)
r=C.a.ac(b,p+1)
q=this.a
J.kH(a,P.lg(s,0,s.length,q,!0),P.lg(r,0,r.length,q,!0))}return a}}
P.jA.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jB.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jC.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.hH(C.a.p(this.b,a,b),16)
if(typeof s!=="number")return s.ab()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bJ.prototype={
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
else o=H.o(H.kY("Field '_text' has been assigned during initialization."))}return o},
gO:function(a){var s=this,r=s.z
if(r==null){r=C.a.gO(s.gc0())
if(s.z==null)s.z=r
else r=H.o(H.kY("Field 'hashCode' has been assigned during initialization."))}return r},
gcs:function(){var s=this,r=s.Q
if(r==null){r=new P.cb(P.md(s.gbe(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.o(H.kY("Field 'queryParameters' has been assigned during initialization."))}return r},
gei:function(){return this.b},
gck:function(a){var s=this.c
if(s==null)return""
if(C.a.a5(s,"["))return C.a.p(s,1,s.length-1)
return s},
gbv:function(a){var s=this.d
return s==null?P.mz(this.a):s},
gbe:function(a){var s=this.f
return s==null?"":s},
gcj:function(){var s=this.r
return s==null?"":s},
ec:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a5(s,"/"))s="/"+s
q=s
p=P.le(null,0,0,b)
return new P.bJ(n,l,j,k,q,p,o.r)},
gdL:function(){return this.c!=null},
gdO:function(){return this.f!=null},
gdM:function(){return this.r!=null},
i:function(a){return this.gc0()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbB()&&s.c!=null===b.gdL()&&s.b===b.gei()&&s.gck(s)===b.gck(b)&&s.gbv(s)===b.gbv(b)&&s.e===b.ge6(b)&&s.f!=null===b.gdO()&&s.gbe(s)===b.gbe(b)&&s.r!=null===b.gdM()&&s.gcj()===b.gcj()},
$ifs:1,
gbB:function(){return this.a},
ge6:function(a){return this.e}}
P.kg.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kh(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kh(C.h,b,C.e,!0))}}}
P.kf.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b7(b),r=this.a;s.t();)r.$2(a,s.gB(s))}}
P.jz.prototype={
geh:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.br(s,"?",m)
q=s.length
if(r>=0){p=P.dv(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fF("data","",n,n,P.dv(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kp.prototype={
$1:function(a){return new Uint8Array(96)}}
P.ko.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
J.no(s,0,96,b)
return s},
$S:19}
P.kq.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.d(a,p)
a[p]=c}}}
P.kr.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.d(a,p)
a[p]=c}}}
P.h8.prototype={
gdL:function(){return this.c>0},
gdN:function(){return this.c>0&&this.d+1<this.e},
gdO:function(){return this.f<this.r},
gdM:function(){return this.r<this.a.length},
gcX:function(){return this.b===4&&C.a.a5(this.a,"http")},
gcY:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbB:function(){var s=this.x
return s==null?this.x=this.eW():s},
eW:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcX())return"http"
if(s.gcY())return"https"
if(r===4&&C.a.a5(s.a,"file"))return"file"
if(r===7&&C.a.a5(s.a,"package"))return"package"
return C.a.p(s.a,0,r)},
gei:function(){var s=this.c,r=this.b+3
return s>r?C.a.p(this.a,r,s-1):""},
gck:function(a){var s=this.c
return s>0?C.a.p(this.a,s,this.d):""},
gbv:function(a){var s=this
if(s.gdN())return P.hH(C.a.p(s.a,s.d+1,s.e),null)
if(s.gcX())return 80
if(s.gcY())return 443
return 0},
ge6:function(a){return C.a.p(this.a,this.e,this.f)},
gbe:function(a){var s=this.f,r=this.r
return s<r?C.a.p(this.a,s+1,r):""},
gcj:function(){var s=this.r,r=this.a
return s<r.length?C.a.ac(r,s+1):""},
gcs:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.cb(P.md(s.gbe(s)),t.U)},
ec:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbB(),k=l==="file",j=n.c,i=j>0?C.a.p(n.a,n.b+3,j):"",h=n.gdN()?n.gbv(n):m
j=n.c
if(j>0)s=C.a.p(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.p(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a5(r,"/"))r="/"+r
p=P.le(m,0,0,b)
q=n.r
o=q<j.length?C.a.ac(j,q+1):m
return new P.bJ(l,i,s,h,r,p,o)},
gO:function(a){var s=this.y
return s==null?this.y=C.a.gO(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifs:1}
P.fF.prototype={}
W.t.prototype={}
W.hK.prototype={
gm:function(a){return a.length}}
W.dH.prototype={
i:function(a){return String(a)}}
W.dI.prototype={
i:function(a){return String(a)}}
W.bR.prototype={$ibR:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={
cA:function(a,b,c){if(c!=null)return a.getContext(b,P.pZ(c))
return a.getContext(b)},
el:function(a,b){return this.cA(a,b,null)},
$ibu:1}
W.az.prototype={
gm:function(a){return a.length}}
W.hU.prototype={
gm:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cr.prototype={
gm:function(a){return a.length}}
W.hV.prototype={}
W.an.prototype={}
W.aR.prototype={}
W.hW.prototype={
gm:function(a){return a.length}}
W.hX.prototype={
gm:function(a){return a.length}}
W.hY.prototype={
gm:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.hZ.prototype={
i:function(a){return String(a)}}
W.cs.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ct.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaJ(a))+" x "+H.f(this.gaD(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aK(b)
s=a.left==s.gbu(b)&&a.top==s.gbx(b)&&this.gaJ(a)==s.gaJ(b)&&this.gaD(a)==s.gaD(b)}else s=!1
return s},
gO:function(a){return W.mq(J.ae(a.left),J.ae(a.top),J.ae(this.gaJ(a)),J.ae(this.gaD(a)))},
gdl:function(a){return a.bottom},
gaD:function(a){return a.height},
gbu:function(a){return a.left},
gct:function(a){return a.right},
gbx:function(a){return a.top},
gaJ:function(a){return a.width},
$ia8:1}
W.e_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.i_.prototype={
gm:function(a){return a.length}}
W.fC.prototype={
gbs:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var s=this.iz(this)
return new J.a6(s,s.length)}}
W.C.prototype={
ghy:function(a){return new W.fK(a)},
gdn:function(a){return new W.fC(a,a.children)},
gdq:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ab()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ab()
if(p<0)p=-p*0
return new P.a8(s,r,q,p,t.I)},
i:function(a){return a.localName},
ai:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lJ
if(s==null){s=H.c([],t.Q)
r=new W.cS(s)
s.push(W.mo(null))
s.push(W.mu())
$.lJ=r
d=r}else d=s
s=$.lI
if(s==null){s=new W.hu(d)
$.lI=s
c=s}else{s.a=d
c=s}}if($.bc==null){s=document
r=s.implementation.createHTMLDocument("")
$.bc=r
$.kP=r.createRange()
r=$.bc.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.bc.head.appendChild(r)}s=$.bc
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bc
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bc.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Y,a.tagName)){$.kP.selectNodeContents(q)
s=$.kP
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.bc.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bc.body)J.lx(q)
c.cB(p)
document.adoptNode(p)
return p},
hD:function(a,b,c){return this.ai(a,b,c,null)},
en:function(a,b){a.textContent=null
a.appendChild(this.ai(a,b,null,null))},
gee:function(a){return a.tagName},
$iC:1}
W.i2.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hu:function(a,b,c,d){if(c!=null)this.eM(a,b,c,!1)},
eM:function(a,b,c,d){return a.addEventListener(b,H.ck(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
W.bW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1,
$ibW:1}
W.e3.prototype={
gm:function(a){return a.length}}
W.e5.prototype={
gm:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.ie.prototype={
gm:function(a){return a.length}}
W.bz.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.bA.prototype={
gdr:function(a){return a.data},
$ibA:1}
W.bB.prototype={$ibB:1}
W.bD.prototype={$ibD:1}
W.ix.prototype={
i:function(a){return String(a)}}
W.iP.prototype={
gm:function(a){return a.length}}
W.bZ.prototype={$ibZ:1}
W.ep.prototype={
h:function(a,b){return P.bp(a.get(b))},
v:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga0:function(a){var s=H.c([],t.s)
this.v(a,new W.iQ(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iF:1}
W.iQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eq.prototype={
h:function(a,b){return P.bp(a.get(b))},
v:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga0:function(a){var s=H.c([],t.s)
this.v(a,new W.iR(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iF:1}
W.iR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.er.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aj.prototype={$iaj:1}
W.a1.prototype={
gaK:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.l0("No elements"))
if(r>1)throw H.b(P.l0("More than one element"))
s=s.firstChild
s.toString
return s},
ah:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gN:function(a){var s=this.a.childNodes
return new W.cx(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.x.prototype={
io:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ir:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nl(s,b,a)}catch(q){H.am(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.es(a):s},
h7:function(a,b,c){return a.replaceChild(b,c)},
$ix:1}
W.cR.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aE.prototype={
gm:function(a){return a.length},
$iaE:1}
W.eF.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.eP.prototype={
h:function(a,b){return P.bp(a.get(b))},
v:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga0:function(a){var s=H.c([],t.s)
this.v(a,new W.j1(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iF:1}
W.j1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eR.prototype={
gm:function(a){return a.length}}
W.at.prototype={$iat:1}
W.eT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aG.prototype={$iaG:1}
W.eU.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aH.prototype={
gm:function(a){return a.length},
$iaH:1}
W.f_.prototype={
h:function(a,b){return a.getItem(H.lh(b))},
l:function(a,b,c){a.setItem(b,c)},
v:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga0:function(a){var s=H.c([],t.s)
this.v(a,new W.ja(s))
return s},
gm:function(a){return a.length},
$iF:1}
W.ja.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.bj.prototype={$ibj:1}
W.cX.prototype={
ai:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=W.nG("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a1(r).ah(0,new W.a1(s))
return r}}
W.f3.prototype={
ai:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ai(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaK(s)
q.toString
s=new W.a1(q)
p=s.gaK(s)
r.toString
p.toString
new W.a1(r).ah(0,new W.a1(p))
return r}}
W.f4.prototype={
ai:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ai(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaK(s)
r.toString
q.toString
new W.a1(r).ah(0,new W.a1(q))
return r}}
W.c9.prototype={$ic9:1}
W.av.prototype={$iav:1}
W.ab.prototype={$iab:1}
W.f7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.f8.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.jk.prototype={
gm:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bG.prototype={$ibG:1}
W.fd.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.jo.prototype={
gm:function(a){return a.length}}
W.b0.prototype={}
W.jE.prototype={
i:function(a){return String(a)}}
W.fv.prototype={
gm:function(a){return a.length}}
W.bl.prototype={
ghH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.A("deltaY is not supported"))},
ghG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.A("deltaX is not supported"))},
$ibl:1}
W.cc.prototype={
h8:function(a,b){return a.requestAnimationFrame(H.ck(b,1))},
f2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cd.prototype={$icd:1}
W.fD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d7.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aK(b)
s=a.left==s.gbu(b)&&a.top==s.gbx(b)&&a.width==s.gaJ(b)&&a.height==s.gaD(b)}else s=!1
return s},
gO:function(a){return W.mq(J.ae(a.left),J.ae(a.top),J.ae(a.width),J.ae(a.height))},
gaD:function(a){return a.height},
gaJ:function(a){return a.width}}
W.fS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.dc.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hi.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.fA.prototype={
v:function(a,b){var s,r,q,p,o
for(s=this.ga0(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga0:function(a){var s,r,q,p,o=this.a.attributes,n=H.c([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.d(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fK.prototype={
h:function(a,b){return this.a.getAttribute(H.lh(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga0(this).length}}
W.kR.prototype={}
W.fN.prototype={
hp:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nm(s,this.c,r,!1)}}}
W.jZ.prototype={
$1:function(a){return this.a.$1(a)}}
W.l6.prototype={}
W.ce.prototype={
eD:function(a){var s
if($.d8.gbs($.d8)){for(s=0;s<262;++s)$.d8.l(0,C.X[s],W.q7())
for(s=0;s<12;++s)$.d8.l(0,C.o[s],W.q8())}},
aT:function(a){return $.nh().D(0,W.cv(a))},
as:function(a,b,c){var s=$.d8.h(0,H.f(W.cv(a))+"::"+b)
if(s==null)s=$.d8.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iak:1}
W.M.prototype={
gN:function(a){return new W.cx(a,this.gm(a))}}
W.cS.prototype={
aT:function(a){return C.b.dg(this.a,new W.iU(a))},
as:function(a,b,c){return C.b.dg(this.a,new W.iT(a,b,c))},
$iak:1}
W.iU.prototype={
$1:function(a){return a.aT(this.a)}}
W.iT.prototype={
$1:function(a){return a.as(this.a,this.b,this.c)}}
W.di.prototype={
eH:function(a,b,c,d){var s,r,q
this.a.ah(0,c)
s=b.bA(0,new W.k6())
r=b.bA(0,new W.k7())
this.b.ah(0,s)
q=this.c
q.ah(0,C.w)
q.ah(0,r)},
aT:function(a){return this.a.D(0,W.cv(a))},
as:function(a,b,c){var s=this,r=W.cv(a),q=s.c
if(q.D(0,H.f(r)+"::"+b))return s.d.hw(c)
else if(q.D(0,"*::"+b))return s.d.hw(c)
else{q=s.b
if(q.D(0,H.f(r)+"::"+b))return!0
else if(q.D(0,"*::"+b))return!0
else if(q.D(0,H.f(r)+"::*"))return!0
else if(q.D(0,"*::*"))return!0}return!1},
$iak:1}
W.k6.prototype={
$1:function(a){return!C.b.D(C.o,a)}}
W.k7.prototype={
$1:function(a){return C.b.D(C.o,a)}}
W.hk.prototype={
as:function(a,b,c){if(this.ew(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.kc.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hj.prototype={
aT:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cv(a)==="foreignObject")return!1
if(s)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.a.a5(b,"on"))return!1
return this.aT(a)},
$iak:1}
W.cx.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cn(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.ak.prototype={}
W.k5.prototype={}
W.hu.prototype={
cB:function(a){var s=this,r=new W.kk(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b6:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lx(a)
else b.removeChild(a)},
hd:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.np(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.am(p)}r="element unprintable"
try{r=J.a5(a)}catch(p){H.am(p)}try{q=W.cv(a)
this.hc(a,b,n,r,q,m,l)}catch(p){if(H.am(p) instanceof P.af)throw p
else{this.b6(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
hc:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b6(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aT(a)){m.b6(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.as(a,"is",g)){m.b6(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga0(f)
r=H.c(s.slice(0),H.mG(s).I("y<1>"))
for(q=f.ga0(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
o=m.a
n=J.nt(p)
H.lh(p)
if(!o.as(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cB(a.content)}}
W.kk.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.hd(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b6(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.l0("Corrupt HTML")
throw H.b(q)}}catch(o){H.am(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fE.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h7.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hf.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
P.k8.prototype={
cg:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bz:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lj(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ah)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jy("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.G.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cg(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.kJ(a,new P.ka(n,o))
return n.a}if(t.aH.b(a)){s=o.cg(a)
n=o.b
if(s>=n.length)return H.d(n,s)
p=n[s]
if(p!=null)return p
return o.hC(a,s)}if(t.eH.b(a)){s=o.cg(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.d(r,s)
r[s]=p
o.hV(a,new P.kb(n,o))
return n.b}throw H.b(P.jy("structured clone of other type"))},
hC:function(a,b){var s,r=J.b5(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.d(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.bz(r.h(a,s))
if(s>=p.length)return H.d(p,s)
p[s]=o}return p}}
P.ka.prototype={
$2:function(a,b){this.a.a[a]=this.b.bz(b)},
$S:3}
P.kb.prototype={
$2:function(a,b){this.a.b[a]=this.b.bz(b)},
$S:3}
P.dr.prototype={$ibA:1,
gdr:function(a){return this.a}}
P.kv.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.k9.prototype={
hV:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e4.prototype={
gb4:function(){var s=this.b,r=H.dy(s)
return new H.aU(new H.b3(s,new P.ia(),r.I("b3<i.E>")),new P.ib(),r.I("aU<i.E,C>"))},
v:function(a,b){C.b.v(P.iw(this.gb4(),!1,t.h),b)},
l:function(a,b,c){var s=this.gb4()
J.nr(s.b.$1(J.hJ(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aO(this.gb4().a)},
h:function(a,b){var s=this.gb4()
return s.b.$1(J.hJ(s.a,b))},
gN:function(a){var s=P.iw(this.gb4(),!1,t.h)
return new J.a6(s,s.length)}}
P.ia.prototype={
$1:function(a){return t.h.b(a)}}
P.ib.prototype={
$1:function(a){return t.h.a(a)}}
P.h6.prototype={
gct:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdl:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aK(b)
if(s==r.gbu(b)){q=n.b
if(q==r.gbx(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gct(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdl(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gO:function(a){var s,r=this,q=r.a,p=J.ae(q),o=r.b,n=J.ae(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gO(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.v(q)
q=C.c.gO(s.a(o+q))
return P.ox(P.k0(P.k0(P.k0(P.k0(0,p),n),m),q))}}
P.a8.prototype={
gbu:function(a){return this.a},
gbx:function(a){return this.b},
gaJ:function(a){return this.c},
gaD:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.ei.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.aX.prototype={$iaX:1}
P.ez.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.iW.prototype={
gm:function(a){return a.length}}
P.c6.prototype={$ic6:1}
P.f1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gdn:function(a){return new P.e4(a,new W.a1(a))},
ai:function(a,b,c,d){var s,r,q,p,o,n=H.c([],t.Q)
n.push(W.mo(null))
n.push(W.mu())
n.push(new W.hj())
c=new W.hu(new W.cS(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hD(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a1(q)
o=n.gaK(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aZ.prototype={$iaZ:1}
P.fe.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fV.prototype={}
P.fW.prototype={}
P.h2.prototype={}
P.h3.prototype={}
P.hg.prototype={}
P.hh.prototype={}
P.hp.prototype={}
P.hq.prototype={}
P.bk.prototype={$ik:1,$ih:1,$in:1}
P.hN.prototype={
gm:function(a){return a.length}}
P.dL.prototype={
h:function(a,b){return P.bp(a.get(b))},
v:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bp(s.value[1]))}},
ga0:function(a){var s=H.c([],t.s)
this.v(a,new P.hO(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iF:1}
P.hO.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dM.prototype={
gm:function(a){return a.length}}
P.b9.prototype={}
P.eA.prototype={
gm:function(a){return a.length}}
P.fB.prototype={}
P.eO.prototype={
iw:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.q_(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bQ("Incorrect number or type of arguments"))}}
P.eX.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
s=P.bp(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.hc.prototype={}
P.hd.prototype={}
K.b8.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"}}
K.e7.prototype={
aE:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aE(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.iA.prototype={}
K.aa.prototype={
aE:function(a,b){return!this.er(0,b)},
i:function(a){return"!["+this.cE(0)+"]"}}
K.iX.prototype={
aE:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.aq(this.a),r=H.aq(this.b)
return s+".."+r}}
K.j2.prototype={
eA:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.r("May not create a Set with zero characters."))
s=new H.B(t.E)
for(r=new H.bg(a,a.gm(a));r.t();){q=r.d
s.l(0,q,!0)}p=P.iw(s.ga0(s),!0,t.e)
C.b.eq(p)
this.a=p},
aE:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.f2(this.a,0,null)}}
L.eY.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ff(this.a.k(0,b))
p.a=H.c([],t.B)
p.c=!1
this.c.push(p)
return p},
hQ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aE(0,a))return p}return null},
i:function(a){return this.b},
d6:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.D(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga0(l),l=l.gN(l);l.t();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.D(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.q)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.fb.prototype={
i:function(a){var s=H.lu(this.b,"\n","\\n"),r=H.lu(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fc.prototype={
aG:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.q)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jl.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eY(this,b)
s.c=H.c([],t.br)
this.a.l(0,b,s)}return s},
L:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fc(a)
s.c=new H.B(t.dO)
this.b.l(0,a,s)}return s},
cv:function(a){return this.iC(a)},
iC:function(a){var s=this
return P.pm(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cv(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.c([],c)
a0=H.c([],c)
a1=H.c([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.ip(a1,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hQ(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f2(a0,0,null)
throw H.b(P.r("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.o(P.A("removeRange"))
P.bi(0,k,a0.length)
a0.splice(0,k-0)
C.b.ah(a1,a0)
a0=H.c([],c)
b=H.c([],c)
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
if(d.d!=null){g=P.f2(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.fb(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.D(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.ov()
case 1:return P.ow(o)}}},t.eB)},
i:function(a){var s,r=new P.R(""),q=this.d
if(q!=null)r.a=q.d6()+"\n"
for(q=this.a,q=q.giD(q),q=q.gN(q);q.t();){s=q.gB(q)
if(s!=this.d)r.a+=s.d6()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.ff.prototype={
i:function(a){return this.b.b+": "+this.cE(0)}}
O.ag.prototype={
bE:function(a){this.a=H.c([],a.I("y<0*>"))
this.c=this.b=null},
cC:function(a,b,c){this.b=b
this.c=a},
bi:function(a,b){return this.cC(a,null,b)},
fS:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
eC:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gN:function(a){var s=this.a
return new J.a6(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dy(q).I("y<ag.T*>")
if(q.fS(H.c([b],p))){s=q.a
r=s.length
s.push(b)
q.eC(r,H.c([b],p))}},
$ih:1}
O.cN.prototype={
gm:function(a){return this.a.length},
gu:function(){var s=this.b
return s==null?this.b=D.J():s},
aL:function(){var s=this.b
if(s!=null)s.G(null)},
gY:function(a){var s=this.a
if(s.length>0)return C.b.gau(s)
else return V.eo()},
e9:function(a){var s=this.a
if(a==null)s.push(V.eo())
else s.push(a)
this.aL()},
cr:function(){var s=this.a
if(s.length>0){s.pop()
this.aL()}}}
E.hR.prototype={}
E.by.prototype={
cP:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a6(s,s.length);s.t();){r=s.d
if(r.f==null)r.cP()}},
sbC:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gu().X(0,q.ge0())
s=q.c
if(s!=null)s.gu().n(0,q.ge0())
r=new D.D("shape",p,q.c)
r.b=!0
q.an(r)}},
scu:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gu().X(0,q.ge2())
s=q.f
q.f=a
if(a!=null)a.gu().n(0,q.ge2())
q.cP()
r=new D.D("technique",s,q.f)
r.b=!0
q.an(r)}},
sbb:function(a){var s,r,q=this
if(!J.I(q.r,a)){s=q.r
if(s!=null)s.gu().X(0,q.gdZ())
if(a!=null)a.gu().n(0,q.gdZ())
q.r=a
r=new D.D("mover",s,a)
r.b=!0
q.an(r)}},
ap:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.b_(0,b,q):null
if(!J.I(o,q.x)){s=q.x
q.x=o
r=new D.D("matrix",s,o)
r.b=!0
q.an(r)}p=q.f
if(p!=null)p.ap(0,b)
for(p=q.y.a,p=new J.a6(p,p.length);p.t();)p.d.ap(0,b)},
aF:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gY(q))
else o.push(p.A(0,q.gY(q)))
q.aL()
a.ea(r.f)
q=a.dy
s=(q&&C.b).gau(q)
if(s!=null&&r.d!=null)s.eb(a,r)
for(q=r.y.a,q=new J.a6(q,q.length);q.t();)q.d.aF(a)
a.e7()
a.dx.cr()},
an:function(a){var s=this.z
if(s!=null)s.G(a)},
W:function(){return this.an(null)},
e1:function(a){this.e=null
this.an(a)},
ia:function(){return this.e1(null)},
e3:function(a){this.an(a)},
ib:function(){return this.e3(null)},
e_:function(a){this.an(a)},
i9:function(){return this.e_(null)},
dY:function(a){this.an(a)},
i6:function(){return this.dY(null)},
i5:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bV()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}this.W()},
i8:function(a,b){var s,r
for(s=b.gN(b),r=this.gdX();s.t();)s.gB(s).gu().X(0,r)
this.W()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bT.prototype={
i:function(a){return this.b}}
E.c3.prototype={
i:function(a){return this.b}}
E.fL.prototype={}
E.iY.prototype={
ez:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ah(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cN()
r=t.h8
s.a=H.c([],r)
s.gu().n(0,new E.iZ(q))
q.cy=s
s=new O.cN()
s.a=H.c([],r)
s.gu().n(0,new E.j_(q))
q.db=s
s=new O.cN()
s.a=H.c([],r)
s.gu().n(0,new E.j0(q))
q.dx=s
s=H.c([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.B(t.h9)},
gim:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gY(q)
s=r.db
s=r.z=q.A(0,s.gY(s))
q=s}return q},
ge8:function(){var s,r=this,q=r.ch
if(q==null){q=r.gim()
s=r.dx
s=r.ch=q.A(0,s.gY(s))
q=s}return q},
gej:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
q=q.gY(q)
s=r.dx
s=r.cx=q.A(0,s.gY(s))
q=s}return q},
ea:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gau(s):a)},
e7:function(){var s=this.dy
if(s.length>1)s.pop()},
df:function(a){var s=a.b
if(s.length===0)throw H.b(P.r("May not cache a shader with no name."))
if(this.fr.c4(0,s))throw H.b(P.r('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.iZ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.j_.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.j0.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.fa.prototype={
cK:function(a){this.ed()},
cJ:function(){return this.cK(null)},
ghW:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.lH(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ah(q,!1)
return s/p},
d1:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.A()
if(typeof p!=="number")return H.v(p)
s=C.d.ci(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.A()
r=C.d.ci(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.m7(C.n,q.gis())}},
ed:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.f2(s)
r=W.mM(new E.jj(this),t.p)
r.toString
C.F.h8(s,r)}},
iq:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d1()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ah(p,!1)
q.y=P.lH(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aL()
p=q.db
C.b.sm(p.a,0)
p.aL()
p=q.dx
C.b.sm(p.a,0)
p.aL()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.aF(n.e)}q=n.Q
if(q!=null)q.G(null)}catch(o){s=H.am(o)
r=H.lo(o)
P.lt("Error: "+H.f(s))
P.lt("Stack: "+H.f(r))
throw H.b(s)}}}
E.jj.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.iq()}}}
Z.fw.prototype={}
Z.dP.prototype={
aA:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.am(q)
r=P.r('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.fx.prototype={}
Z.bU.prototype={
aj:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
aA:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].aA(a)},
eg:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aF:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
e4:function(a){this.aA(a)
this.aF(a)
this.eg(a)},
i:function(a){var s,r,q,p,o=t.i,n=H.c([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)n.push(s[q].i(0))
p=H.c([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a5(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.dQ.prototype={}
Z.bY.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eL(this.c))+"'")+"]"}}
Z.b2.prototype={
gcD:function(a){var s=this.a,r=(s&$.aN().a)!==0?3:0
if((s&$.aM().a)!==0)r+=3
if((s&$.aL().a)!==0)r+=3
if((s&$.br().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.bO().a)!==0)r+=3
if((s&$.dE().a)!==0)r+=4
if((s&$.cm().a)!==0)++r
return(s&$.bq().a)!==0?r+4:r},
hx:function(a){var s,r=$.aN(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dE()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0)if(s===a)return r
return $.nf()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var s=H.c([],t.i),r=this.a
if((r&$.aN().a)!==0)s.push("Pos")
if((r&$.aM().a)!==0)s.push("Norm")
if((r&$.aL().a)!==0)s.push("Binm")
if((r&$.br().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.bO().a)!==0)s.push("Clr3")
if((r&$.dE().a)!==0)s.push("Clr4")
if((r&$.cm().a)!==0)s.push("Weight")
if((r&$.bq().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hS.prototype={}
D.bV.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.c([],t.f):s).push(b)},
X:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.a
s=(q&&C.b).X(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.b
s=(q&&C.b).X(q,b)||s}return s},
G:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.S()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.v(P.iw(s,!0,t.dm),new D.i8(o))
s=p.b
if(s!=null){p.b=H.c([],t.f)
C.b.v(s,new D.i9(o))}return!0},
hM:function(){return this.G(null)},
aH:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.i8.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.i9.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.S.prototype={}
D.bd.prototype={}
D.be.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dR.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dR))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.eg.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.is.prototype={
ii:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
ic:function(a){this.c=a.b
this.d.X(0,a.a)
return!1}}
X.cI.prototype={}
X.iy.prototype={
b3:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.A()
s=b.b
r=o.ch
if(typeof s!=="number")return s.A()
q=new V.aF(m.a+l*k,m.b+s*r)
r=o.a.gaV()
p=new X.c_(a,V.bF(),o.x,r,q)
p.b=!0
o.z=new P.ah(n,!1)
o.x=q
return p},
cq:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.em()
if(typeof s!=="number")return s.af()
this.r=(s&~r)>>>0
return!1},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.b3(a,b))
return!0},
ij:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaV()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.A()
o=a.b
n=m.cy
if(typeof o!=="number")return o.A()
r=new X.c0(new V.ac(q*p,o*n),s,r)
r.b=!0
l.G(r)
return!0},
fH:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cI(c,p.a.gaV(),b)
q.b=!0
r.G(q)
p.y=new P.ah(s,!1)
p.x=V.bF()}}
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
X.c_.prototype={}
X.iS.prototype={
bM:function(a,b,c){var s=this,r=new P.ah(Date.now(),!1),q=s.a.gaV(),p=new X.c_(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cq:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.bM(a,b,!0))
return!0},
bd:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.em()
if(typeof r!=="number")return r.af()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.G(s.bM(a,b,!0))
return!0},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bM(a,b,!1))
return!0},
ik:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaV()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.A()
p=a.b
o=n.ch
if(typeof p!=="number")return p.A()
s=new X.c0(new V.ac(r*q,p*o),s,b)
s.b=!0
m.G(s)
return!0},
gdt:function(){var s=this.b
return s==null?this.b=D.J():s},
gcw:function(){var s=this.c
return s==null?this.c=D.J():s},
gdV:function(){var s=this.d
return s==null?this.d=D.J():s}}
X.c0.prototype={}
X.eJ.prototype={}
X.cZ.prototype={}
X.jn.prototype={
b3:function(a,b){var s=this,r=new P.ah(Date.now(),!1),q=a.length>0?a[0]:V.bF(),p=s.a.gaV(),o=new X.cZ(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
ih:function(a){var s=this.b
if(s==null)return!1
s.G(this.b3(a,!0))
return!0},
ie:function(a){var s=this.c
if(s==null)return!1
s.G(this.b3(a,!0))
return!0},
ig:function(a){var s=this.d
if(s==null)return!1
s.G(this.b3(a,!1))
return!0}}
X.ft.prototype={
gaV:function(){var s=this.a,r=C.i.gdq(s).c
r.toString
s=C.i.gdq(s).d
s.toString
return V.m1(0,0,r,s)},
cT:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.eg(s,new X.ao(r,a.altKey,a.shiftKey))},
aR:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ao(r,a.altKey,a.shiftKey)},
c_:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ao(r,a.altKey,a.shiftKey)},
ay:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a_()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.a_()
if(typeof s!=="number")return H.v(s)
return new V.aF(q-o,p-s)},
b5:function(a){return new V.ac(a.movementX,a.movementY)},
bX:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.c([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=C.d.ao(p.pageX)
C.d.ao(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.ao(p.pageX)
m=C.d.ao(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.aF(o-n,m-l))}return j},
aw:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dR(s,new X.ao(r,a.altKey,a.shiftKey))},
bN:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a_()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a_()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
fB:function(a){this.f=!0},
fm:function(a){this.f=!1},
ft:function(a){if(this.f&&this.bN(a))a.preventDefault()},
fF:function(a){var s
if(!this.f)return
s=this.cT(a)
this.b.ii(s)},
fD:function(a){var s
if(!this.f)return
s=this.cT(a)
this.b.ic(s)},
fJ:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aR(a)
if(p.x){s=p.aw(a)
r=p.b5(a)
if(p.d.cq(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aw(a)
q=p.ay(a)
if(p.c.cq(s,q))a.preventDefault()},
fN:function(a){var s,r,q,p=this
p.aR(a)
s=p.aw(a)
if(p.x){r=p.b5(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.bd(s,q))a.preventDefault()},
fz:function(a){var s,r,q,p=this
if(!p.bN(a)){p.aR(a)
s=p.aw(a)
if(p.x){r=p.b5(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.bd(s,q))a.preventDefault()}},
fL:function(a){var s,r,q,p=this
p.aR(a)
s=p.aw(a)
if(p.x){r=p.b5(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.bc(s,q))a.preventDefault()},
fv:function(a){var s,r,q,p=this
if(!p.bN(a)){p.aR(a)
s=p.aw(a)
if(p.x){r=p.b5(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.c.bc(s,q))a.preventDefault()}},
fP:function(a){var s,r,q=this
q.aR(a)
s=new V.ac((a&&C.E).ghG(a),C.E.ghH(a)).A(0,q.Q)
if(q.x){if(q.d.ij(s))a.preventDefault()
return}if(q.r)return
r=q.ay(a)
if(q.c.ik(s,r))a.preventDefault()},
fR:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aw(q.y)
r=q.ay(q.y)
q.d.fH(s,r,p)}},
h3:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c_(a)
s=r.bX(a)
if(r.e.ih(s))a.preventDefault()},
h_:function(a){var s
this.c_(a)
s=this.bX(a)
if(this.e.ie(s))a.preventDefault()},
h1:function(a){var s
this.c_(a)
s=this.bX(a)
if(this.e.ig(s))a.preventDefault()}}
D.dN.prototype={$iT:1}
D.bw.prototype={
av:function(a){var s=this.r
if(s!=null)s.G(a)},
eF:function(){return this.av(null)},
$iT:1}
D.T.prototype={}
D.cC.prototype={
av:function(a){var s=this.y
if(s!=null)s.G(a)},
d_:function(a){var s=this.z
if(s!=null)s.G(a)},
fG:function(){return this.d_(null)},
fU:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(q==null||this.eX(q))return!1}return!0},
fg:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcZ(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o instanceof D.bw)this.f.push(o)
n=o.r
if(n==null){n=new D.bV()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}s=new D.bd()
s.b=!0
this.av(s)},
fY:function(a,b){var s,r,q
for(s=b.gN(b),r=this.gcZ();s.t();){q=s.gB(s)
C.b.X(this.e,q)
q.gu().X(0,r)}s=new D.be()
s.b=!0
this.av(s)},
eX:function(a){var s=C.b.D(this.f,a)
return s}}
D.eH.prototype={$iT:1}
D.eV.prototype={$iT:1}
V.a0.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.Z.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Z))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.i6.prototype={}
V.en.prototype={
a3:function(a,b){var s=this,r=H.c([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.en))return!1
s=b.a
$.E().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cl(H.c([o.a,o.d,o.r],n),3,0),l=V.cl(H.c([o.b,o.e,o.x],n),3,0),k=V.cl(H.c([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.d(m,1)
p=" "+m[1]+", "
if(1>=r)return H.d(l,1)
p=p+l[1]+", "
if(1>=q)return H.d(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.d(m,2)
n=" "+m[2]+", "
if(2>=r)return H.d(l,2)
n=n+l[2]+", "
if(2>=q)return H.d(k,2)
return p+(n+k[2]+"]")}}
V.bh.prototype={
a3:function(a,b){var s=this,r=H.c([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dT:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.E().toString
if(Math.abs(b3-0)<1e-9)return V.eo()
s=1/b3
r=-l
q=-a2
return V.aW((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
A:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aW(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
by:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.G(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bf:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a7(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bh))return!1
s=b.a
$.E().toString
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
i:function(a){return this.K()},
E:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cl(H.c([n.a,n.e,n.y,n.cx],m),3,0),k=V.cl(H.c([n.b,n.f,n.z,n.cy],m),3,0),j=V.cl(H.c([n.c,n.r,n.Q,n.db],m),3,0),i=V.cl(H.c([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.d(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.d(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.d(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.d(l,1)
o=o+l[1]+", "
if(1>=r)return H.d(k,1)
o=o+k[1]+", "
if(1>=q)return H.d(j,1)
o=o+j[1]+", "
if(1>=p)return H.d(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.d(l,2)
s=s+l[2]+", "
if(2>=r)return H.d(k,2)
s=s+k[2]+", "
if(2>=q)return H.d(j,2)
s=s+j[2]+", "
if(2>=p)return H.d(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.d(l,3)
o=o+l[3]+", "
if(3>=r)return H.d(k,3)
o=o+k[3]+", "
if(3>=q)return H.d(j,3)
o=o+j[3]+", "
if(3>=p)return H.d(i,3)
return s+(o+i[3]+"]")},
K:function(){return this.E("")}}
V.aF.prototype={
a4:function(a){return new V.ac(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.a7.prototype={
w:function(a,b){return new V.a7(this.a+b.a,this.b+b.b,this.c+b.c)},
a_:function(a,b){return new V.a7(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a7))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.eI.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eI))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.eN.prototype={
gae:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eN))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.K(s.a,3,0)+", "+V.K(s.b,3,0)+", "+V.K(s.c,3,0)+", "+V.K(s.d,3,0)+"]"}}
V.ac.prototype={
cl:function(a){return Math.sqrt(this.a6(this))},
a6:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.A()
if(typeof p!=="number")return H.v(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
return q*p+s*r},
A:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.A()
if(typeof b!=="number")return H.v(b)
s=this.b
if(typeof s!=="number")return s.A()
return new V.ac(r*b,s*b)},
Z:function(a,b){var s,r
$.E().toString
if(Math.abs(b-0)<1e-9){s=$.mf
return s==null?$.mf=new V.ac(0,0):s}s=this.a
if(typeof s!=="number")return s.Z()
r=this.b
if(typeof r!=="number")return r.Z()
return new V.ac(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
s=b.a
r=this.a
$.E().toString
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.G.prototype={
cl:function(a){return Math.sqrt(this.a6(this))},
a6:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cm:function(a,b){return new V.G(V.lq(this.a,a.a,b),V.lq(this.b,a.b,b),V.lq(this.c,a.c,b))},
P:function(){var s=this,r=Math.sqrt(s.a6(s))
if(r===1)return s
return s.Z(0,r)},
b8:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.G(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.G(-this.a,-this.b,-this.c)},
Z:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.b1()
return new V.G(this.a/b,this.b/b,this.c/b)},
dU:function(){$.E().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.G))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.hT.prototype={
bF:function(a){var s=V.qm(a,this.c,this.b)
return s},
gu:function(){var s=this.y
return s==null?this.y=D.J():s},
M:function(a){var s=this.y
if(s!=null)s.G(a)},
scz:function(a,b){},
scn:function(a){var s,r=this,q=r.b
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bF(s)}q=new D.D("maximumLocation",q,r.b)
q.b=!0
r.M(q)}},
scp:function(a){var s,r=this,q=r.c
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bF(s)}q=new D.D("minimumLocation",q,r.c)
q.b=!0
r.M(q)}},
sad:function(a,b){var s,r=this
b=r.bF(b)
s=r.d
$.E().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.D("location",s,b)
s.b=!0
r.M(s)}},
sco:function(a){var s,r,q=this,p=q.e
$.E().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.D("maximumVelocity",p,a)
p.b=!0
q.M(p)}},
sU:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.D("velocity",r,a)
r.b=!0
s.M(r)}},
sc7:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.D("dampening",s,a)
s.b=!0
this.M(s)}},
ap:function(a,b){var s,r,q,p=this,o=p.f
$.E().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sad(0,p.d+s*b)
o=p.x
$.E().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sU(s)}}}
U.co.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.J():s},
b_:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bX.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.J():s},
M:function(a){var s=this.e
if(s!=null)s.G(a)},
a9:function(){return this.M(null)},
fe:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaM(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gu()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.bd()
s.b=!0
this.M(s)},
fW:function(a,b){var s,r
for(s=b.gN(b),r=this.gaM();s.t();)s.gB(s).gu().X(0,r)
s=new D.be()
s.b=!0
this.M(s)},
b_:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ab()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a6(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.b_(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}q.f=s==null?V.eo():s
p=q.e
if(p!=null)p.aH(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.I(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iV:1}
U.V.prototype={}
U.d4.prototype={
gu:function(){var s=this.cy
return s==null?this.cy=D.J():s},
M:function(a){var s=this.cy
if(s!=null)s.G(a)},
a9:function(){return this.M(null)},
b7:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdt().n(0,s.gbO())
s.a.c.gdV().n(0,s.gbQ())
s.a.c.gcw().n(0,s.gbS())
return!0},
bP:function(a){var s=this
if(!J.I(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bR:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a4(a.d)
s=s.a6(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a4(a.d).A(0,2).Z(0,s.gae())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.A()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sU(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a4(q).A(0,2).Z(0,s.gae())
r=l.b
o=p.a
if(typeof o!=="number")return o.R()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sad(0,-o*n+m)
l.b.sU(0)
l.Q=a.z.a4(q).A(0,2).Z(0,s.gae())}l.a9()},
bT:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a6(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.A()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sU(r*10*q)
p.a9()}},
b_:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.ab()
if(o<n){p.ch=n
s=b.y
p.b.ap(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aW(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iV:1}
U.d5.prototype={
gu:function(){var s=this.fx
return s==null?this.fx=D.J():s},
M:function(a){var s=this.fx
if(s!=null)s.G(a)},
a9:function(){return this.M(null)},
b7:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdt().n(0,q.gbO())
q.a.c.gdV().n(0,q.gbQ())
q.a.c.gcw().n(0,q.gbS())
s=q.a.d
r=s.f
s=r==null?s.f=D.J():r
s.n(0,q.gf4())
s=q.a.d
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.gf6())
s=q.a.e
r=s.b
s=r==null?s.b=D.J():r
s.n(0,q.ghn())
s=q.a.e
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.ghl())
s=q.a.e
r=s.c
s=r==null?s.c=D.J():r
s.n(0,q.ghj())
return!0},
ar:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.R()
s=-s}if(this.r){if(typeof r!=="number")return r.R()
r=-r}return new V.ac(s,r)},
bP:function(a){var s=this
t.d.a(a)
if(!J.I(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bR:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.a6(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ar(a.y.a4(a.d).A(0,2).Z(0,s.gae()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ar(r.a4(q).A(0,2).Z(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sad(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sad(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.ar(a.z.a4(q).A(0,2).Z(0,s.gae()))}l.a9()},
bT:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a6(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.a9()}},
f5:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f7:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.I(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ar(r.a4(q).A(0,2).Z(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sad(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sad(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.ar(a.z.a4(q).A(0,2).Z(0,s.gae()))
l.a9()},
ho:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hm:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.a6(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ar(a.y.a4(a.d).A(0,2).Z(0,s.gae()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ar(r.a4(q).A(0,2).Z(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sad(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sad(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.ar(a.z.a4(q).A(0,2).Z(0,s.gae()))}l.a9()},
hk:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a6(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.a9()}},
b_:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ab()
if(o<n){p.dy=n
s=b.y
p.c.ap(0,s)
p.b.ap(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aW(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.A(0,V.aW(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iV:1}
U.d6.prototype={
gu:function(){var s=this.r
return s==null?this.r=D.J():s},
M:function(a){var s=this.r
if(s!=null)s.G(a)},
b7:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.J():r
r=p.gf9()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.J():q).n(0,r)
return!0},
fa:function(a){var s,r,q,p,o=this
if(!J.I(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.A()
p=s+r*q
if(s!==p){o.d=p
s=new D.D("zoom",s,p)
s.b=!0
o.M(s)}},
b_:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aW(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iV:1}
M.e0.prototype={
aO:function(a){var s=this.y
if(s!=null)s.G(a)},
eG:function(){return this.aO(null)},
fo:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaN(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bV()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.bd()
s.b=!0
this.aO(s)},
fq:function(a,b){var s,r
for(s=b.gN(b),r=this.gaN();s.t();)s.gB(s).gu().X(0,r)
s=new D.be()
s.b=!0
this.aO(s)},
gu:function(){var s=this.y
return s==null?this.y=D.J():s},
aF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.ea(d.d)
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
if(typeof q!=="number")return H.v(q)
m=C.d.ao(n*q)
n=o.b
if(typeof p!=="number")return H.v(p)
l=C.d.ao(n*p)
n=C.d.ao(o.c*q)
a.c=n
o=C.d.ao(o.d*p)
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
g=V.aW(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.e9(g)
r=$.lS
if(r==null){r=V.lP(V.lU(),V.l3(),V.mj())
$.lS=r
f=r}else f=r
s=s.b
if(s!=null){e=s.a
if(e!=null)f=e.A(0,f)}a.db.e9(f)
for(s=d.e.a,s=new J.a6(s,s.length);s.t();)s.d.ap(0,a)
for(s=d.e.a,s=new J.a6(s,s.length);s.t();)s.d.aF(a)
d.b.toString
a.cy.cr()
a.db.cr()
d.c.toString
a.e7()}}
A.dK.prototype={}
A.hM.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hN:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
ds:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a2.prototype={
gaq:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.a2))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.eb.prototype={}
A.em.prototype={
ey:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.R("")
r=c6.fr
if(r){s.a=c5
q=c5}else q=""
p=c6.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c6.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c6.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.pB(c6,s)
A.pD(c6,s)
A.pC(c6,s)
A.pF(c6,s)
A.pG(c6,s)
A.pE(c6,s)
A.pH(c6,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c6.ry
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
s.a=q}if(c6.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c6.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c6.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c6.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c1.dQ(0,q.charCodeAt(0)==0?q:q,A.pA(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.H(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.H(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.H(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.H(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.H(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.H(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.H(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.H(0,"colorMat"))
c1.r1=H.c([],t.hg)
q=c6.aY
if(q>0){c1.k4=c1.y.H(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.o(P.r(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.H(0,"emissionClr"))
if(r.b)c1.rx=t.c.a(c1.y.H(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.H(0,"ambientClr"))
if(r.b)c1.x2=t.c.a(c1.y.H(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.H(0,"diffuseClr"))
if(r.b)c1.aY=t.c.a(c1.y.H(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.bq=t.r.a(c1.y.H(0,"invDiffuseClr"))
if(r.b)c1.dv=t.c.a(c1.y.H(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(q||r.b||!1){c1.dA=t.n.a(c1.y.H(0,"shininess"))
if(q)c1.dw=t.r.a(c1.y.H(0,"specularClr"))
if(r.b)c1.dz=t.c.a(c1.y.H(0,"specularTxt"))}if(c6.f.b)c1.dB=t.c.a(c1.y.H(0,"bumpTxt"))
if(c6.db){c1.dC=t.o.a(c1.y.H(0,"envSampler"))
r=c6.r
if(r.a)c1.dD=t.r.a(c1.y.H(0,"reflectClr"))
if(r.b)c1.dE=t.c.a(c1.y.H(0,"reflectTxt"))
r=c6.x
q=r.a
if(q||r.b||!1){c1.dF=t.n.a(c1.y.H(0,"refraction"))
if(q)c1.dG=t.r.a(c1.y.H(0,"refractClr"))
if(r.b)c1.dH=t.c.a(c1.y.H(0,"refractTxt"))}}r=c6.y
if(r.a)c1.dI=t.n.a(c1.y.H(0,"alpha"))
if(r.b)c1.dJ=t.c.a(c1.y.H(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.c8=new H.B(t.J)
c1.c9=new H.B(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.o(P.r(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.o(P.r(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.o(P.r(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.af()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.o(P.r(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.o(P.r(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.o(P.r(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d_(k,c,b,a4,a3,a2))}c1.c9.l(0,h,f)
m=c1.c8
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.o(P.r(c3+d+c4))
m.l(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.ca=new H.B(t.J)
c1.cb=new H.B(t.bj)
for(p=t.r,o=t.c,n=t.dv,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.af()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.o(P.r(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.o(P.r(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.o(P.r(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.o(P.r(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.o(P.r(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.o(P.r(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d0(a8,a7,a6,k,c,a9))}c1.cb.l(0,h,f)
m=c1.ca
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.o(P.r(c3+d+c4))
m.l(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.cc=new H.B(t.J)
c1.cd=new H.B(t.gr)
for(p=t.r,o=t.O,n=t.o,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.c([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.o(P.r(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.o(P.r(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.o(P.r(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.af()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.o(P.r(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.o(P.r(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.o(P.r(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.o(P.r(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.o(P.r(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.o(P.r(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.o(P.r(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d2(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cd.l(0,h,f)
a5=c1.cc
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.o(P.r(c3+b1+c4))
a5.l(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.ce=new H.B(t.J)
c1.cf=new H.B(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,e=t.fF,j=0;j<r.length;r.length===q||(0,H.q)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.c([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.o(P.r(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.o(P.r(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.o(P.r(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.o(P.r(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.af()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.o(P.r(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.o(P.r(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.o(P.r(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.o(P.r(c3+b0+c4))
o.a(b6)
b7=b6
b8=b5
a7=a1
a8=a0}else{b7=c2
b8=b7
a7=b8
a8=a7}a5=(h&2)!==0
if(a5){b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.o(P.r(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.o(P.r(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.o(P.r(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.o(P.r(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.o(P.r(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.o(P.r(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.o(P.r(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.o(P.r(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.d3(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cf.l(0,h,f)
d=c1.ce
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.o(P.r(c3+b0+c4))
d.l(0,h,k)}}}},
am:function(a,b){if(b!=null&&b.d)a.eo(b)},
he:function(a,b){}}
A.dO.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dZ.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eK.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eW.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iD.prototype={
i:function(a){return this.b9}}
A.d_.prototype={}
A.d0.prototype={}
A.d2.prototype={}
A.d3.prototype={}
A.c7.prototype={
cH:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dQ:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cU(b,35633)
p.f=p.cU(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.o(P.r("Failed to link shader: "+H.f(q)))}p.hf()
p.hh()},
aA:function(a){a.a.useProgram(this.r)
this.x.hN()},
cU:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.r("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
hf:function(){var s,r,q,p=this,o=H.c([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dK(n,r.name,q))}p.x=new A.hM(o)},
hh:function(){var s,r,q,p=this,o=H.c([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hE(r.type,r.size,r.name,q))}p.y=new A.jw(o)},
aQ:function(a,b,c){var s=this.a
if(a===1)return new A.fi(s,b,c)
else return A.l2(s,this.r,b,a,c)},
f_:function(a,b,c){var s=this.a
if(a===1)return new A.fm(s,b,c)
else return A.l2(s,this.r,b,a,c)},
f0:function(a,b,c){var s=this.a
if(a===1)return new A.fn(s,b,c)
else return A.l2(s,this.r,b,a,c)},
bn:function(a,b){return new P.fO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hE:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aQ(b,c,d)
case 5121:return s.aQ(b,c,d)
case 5122:return s.aQ(b,c,d)
case 5123:return s.aQ(b,c,d)
case 5124:return s.aQ(b,c,d)
case 5125:return s.aQ(b,c,d)
case 5126:return new A.fh(s.a,c,d)
case 35664:return new A.js(s.a,c,d)
case 35665:return new A.fj(s.a,c,d)
case 35666:return new A.fk(s.a,c,d)
case 35667:return new A.jt(s.a,c,d)
case 35668:return new A.ju(s.a,c,d)
case 35669:return new A.jv(s.a,c,d)
case 35674:return new A.jx(s.a,c,d)
case 35675:return new A.fl(s.a,c,d)
case 35676:return new A.d1(s.a,c,d)
case 35678:return s.f_(b,c,d)
case 35680:return s.f0(b,c,d)
case 35670:throw H.b(s.bn("BOOL",c))
case 35671:throw H.b(s.bn("BOOL_VEC2",c))
case 35672:throw H.b(s.bn("BOOL_VEC3",c))
case 35673:throw H.b(s.bn("BOOL_VEC4",c))
default:throw H.b(P.r("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.fg.prototype={}
A.jw.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
H:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.K()},
K:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fi.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jt.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.ju.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jv.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jr.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fh.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.js.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fk.prototype={
bh:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jx.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fl.prototype={
a7:function(a){var s=new Float32Array(H.ch(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d1.prototype={
a7:function(a){var s=new Float32Array(H.ch(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fm.prototype={
eo:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fn.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.km.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cm(q.b,b).cm(q.d.cm(q.c,b),c)
q=new V.a7(p.a,p.b,p.c)
if(!J.I(a.f,q)){a.f=q
q=a.a
if(q!=null)q.W()}a.six(p.P())
q=1-b
s=1-c
s=new V.eI(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.I(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.W()}}}
F.e1.prototype={
eO:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.b1()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dU())return p
return q.P()},
eU:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a_(0,n)
q=new V.G(o.a,o.b,o.c).P()
o=r.a_(0,n)
return q.b8(new V.G(o.a,o.b,o.c).P()).P()},
c3:function(){var s,r=this
if(r.d!=null)return!0
s=r.eO()
if(s==null){s=r.eU()
if(s==null)return!1}r.d=s
r.a.a.W()
return!0},
eN:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.b1()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dU())return p
return q.P()},
eT:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.E().toString
if(Math.abs(p-0)<1e-9){j=b.a_(0,e)
o=new V.G(j.a,j.b,j.c).P()
if(q.a-r.a<0)o=o.R(0)}else{n=(j-s.b)/p
j=b.a_(0,e)
j=new V.a7(j.a*n,j.b*n,j.c*n).w(0,e).a_(0,h)
o=new V.G(j.a,j.b,j.c).P()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.R(0)}j=l.d
if(j!=null){m=j.P()
o=m.b8(o).P().b8(m).P()}return o},
c2:function(){var s,r=this
if(r.e!=null)return!0
s=r.eN()
if(s==null){s=r.eT()
if(s==null)return!1}r.e=s
r.a.a.W()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
E:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.a.al(J.a5(q.e),0)+", "+C.a.al(J.a5(r.b.e),0)+", "+C.a.al(J.a5(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
K:function(){return this.E("")}}
F.cD.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
E:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.a.al(J.a5(s.e),0)+", "+C.a.al(J.a5(this.b.e),0)},
K:function(){return this.E("")}}
F.eG.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.al(J.a5(s.e),0)},
K:function(){return this.E("")}}
F.as.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.J():s},
i2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.S()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){p=e[q]
f.a.n(0,p.aX())}f.a.S()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.S()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.n(0,l)
F.nX(l)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.S()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.S()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.nP(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.S()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.S()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.S()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.e2(j,i,g)}e=f.e
if(e!=null)e.aH(0)},
aC:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aC()||!1
if(!r.a.aC())s=!1
q=r.e
if(q!=null)q.aH(0)
return s},
aU:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aU()||!1
if(!r.a.aU())s=!1
q=r.e
if(q!=null)q.aH(0)
return s},
bo:function(){var s=this.e
if(s!=null)++s.d
this.a.bo()
s=this.e
if(s!=null)s.aH(0)
return!0},
dm:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aN().a)!==0?1:0
if((s&$.aM().a)!==0)++r
if((s&$.aL().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.bP().a)!==0)++r
if((s&$.bO().a)!==0)++r
if((s&$.dE().a)!==0)++r
if((s&$.cm().a)!==0)++r
if((s&$.bq().a)!==0)++r
q=a6.gcD(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.c(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.c(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hx(k)
i=j.gcD(j)
if(k>=m)return H.d(n,k)
n[k]=new Z.dP(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.d(g,h)
f=g[h].i0(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.d(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.ch(o)),35044)
s.bindBuffer(a3,null)
a=new Z.bU(new Z.fw(a3,b),n,a6)
a.b=H.c([],t.aZ)
if(a2.b.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.S()
a0.push(m.e)}a1=Z.l5(s,34963,a0)
a.b.push(new Z.bY(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.S()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.S()
a0.push(m.e)}a1=Z.l5(s,34963,a0)
a.b.push(new Z.bY(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.S()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.S()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].c
m.a.a.S()
a0.push(m.e)}a1=Z.l5(s,34963,a0)
a.b.push(new Z.bY(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.c([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.b.j(q,"\n")},
W:function(){var s=this.e
if(s!=null)s.G(null)}}
F.j3.prototype={
hv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.c([],t.b)
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
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.e2(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.e2(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.e2(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.e2(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
aC:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c3())q=!1
return q},
aU:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c2())q=!1
return q},
i:function(a){return this.K()},
E:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
K:function(){return this.E("")}}
F.j4.prototype={
az:function(a,b,c){var s,r=this.a
r.a.n(0,b)
r.a.n(0,c)
r=new F.cD()
if(b==null)H.o(P.r(u.e))
if(c==null)H.o(P.r(u.k))
s=b.a
if(s==null)H.o(P.r(u.E))
if(s!=c.a)H.o(P.r(u.T))
r.a=b
b.c.b.push(r)
r.b=c
c.c.c.push(r)
r.a.a.c.b.push(r)
r.a.a.W()
return r},
gm:function(a){return this.b.length},
i:function(a){return this.K()},
E:function(a){var s,r,q=H.c([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.b.j(q,"\n")},
K:function(){return this.E("")}}
F.j5.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
E:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
K:function(){return this.E("")}}
F.fu.prototype={
c6:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.l4(s.cx,p,m,r,q,o,n,a,l)},
aX:function(){return this.c6(null)},
sdW:function(a){var s
a=a==null?null:a.P()
if(!J.I(this.r,a)){this.r=a
s=this.a
if(s!=null)s.W()}},
saB:function(a){var s
a=a==null?null:a.P()
if(!J.I(this.x,a)){this.x=a
s=this.a
if(s!=null)s.W()}},
six:function(a){var s
if(!J.I(this.z,a)){this.z=a
s=this.a
if(s!=null)s.W()}},
saa:function(a,b){var s
if(!J.I(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.W()}},
i0:function(a){var s,r,q=this
if(a.q(0,$.aN())){s=q.f
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.aM())){s=q.r
r=t.m
if(s==null)return H.c([0,1,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.aL())){s=q.x
r=t.m
if(s==null)return H.c([0,0,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.br())){s=q.y
r=t.m
if(s==null)return H.c([0,0],r)
else return H.c([s.a,s.b],r)}else if(a.q(0,$.bP())){s=q.z
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.bO())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.dE())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1,1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else if(a.q(0,$.cm()))return H.c([q.ch],t.m)
else if(a.q(0,$.bq())){s=q.cx
r=t.m
if(s==null)return H.c([-1,-1,-1,-1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else return H.c([],t.m)},
c3:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.b1()
r.d.v(0,new F.jU(q))
r.r=q.a.P()
q=r.a
if(q!=null){q.W()
q=r.a.e
if(q!=null)q.aH(0)}return!0},
c2:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.b1()
r.d.v(0,new F.jT(q))
r.x=q.a.P()
q=r.a
if(q!=null){q.W()
q=r.a.e
if(q!=null)q.aH(0)}return!0},
dK:function(a){var s,r,q,p=this.c.b.length
for(s=0;s<p;++s){r=this.c.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.b
r.a.a.S()
r=r.e
a.a.a.S()
if(r==a.e)return q}return null},
hR:function(a){var s=this.dK(a)
if(s!=null)return s
return a.dK(this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
E:function(a){var s,r,q=this,p="-",o=H.c([],t.i)
o.push(C.a.al(J.a5(q.e),0))
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
o.push(V.K(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
K:function(){return this.E("")}}
F.jU.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jT.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jN.prototype={
S:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.r("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.W()
return!0},
dc:function(a,b){var s=null,r=F.l4(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
dd:function(a,b,c){var s=null,r=F.l4(s,s,s,new V.a7(a,b,c),s,s,s,s,0)
this.n(0,r)
return r},
gm:function(a){return this.c.length},
aC:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c3()
return!0},
aU:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c2()
return!0},
bo:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r.P()
if(!J.I(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}}return!0},
i:function(a){return this.K()},
E:function(a){var s,r,q,p
this.S()
s=H.c([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].E(a))
return C.b.j(s,"\n")},
K:function(){return this.E("")}}
F.jO.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
v:function(a,b){var s=this
C.b.v(s.b,b)
C.b.v(s.c,new F.jP(s,b))
C.b.v(s.d,new F.jQ(s,b))},
i:function(a){return this.K()},
K:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jP.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)}}
F.jQ.prototype={
$1:function(a){var s=this.a
if(!J.I(a.a,s)&&!J.I(a.b,s))this.b.$1(a)}}
F.jR.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jS.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
O.ea.prototype={
gu:function(){var s=this.rx
return s==null?this.rx=D.J():s},
T:function(a){var s=this.rx
if(s!=null)s.G(a)},
ap:function(a,b){},
eb:function(a,b){var s,r,q,p,o,n,m=this,l="Inspection",k=2929
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.eb(r,l)
s.cH(r,l)
s.dQ(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
s.z=s.x.h(0,"posAttr")
s.Q=s.x.h(0,"normAttr")
s.ch=s.x.h(0,"clrAttr")
s.cx=s.x.h(0,"binmAttr")
s.cy=t.r.a(s.y.h(0,"lightVec"))
r=t.y
s.db=r.a(s.y.h(0,"ambientClr"))
s.dx=r.a(s.y.h(0,"diffuseClr"))
s.dy=t.n.a(s.y.h(0,"weightScalar"))
r=t.q
s.fr=r.a(s.y.h(0,"viewMat"))
s.fx=r.a(s.y.h(0,"viewObjMatrix"))
s.fy=r.a(s.y.h(0,"projViewObjMatrix"))
a.df(s)}m.a=s}if(b.e==null){b.d.aC()
b.d.aU()
b.d.bo()
r=new Z.dQ()
r.a=new H.B(t.f5)
b.e=r}r=m.a
r.aA(a)
q=m.r2
p=r.dy
p.a.uniform1f(p.d,q)
q=m.b
p=r.cy
p.toString
o=q.a
n=q.b
q=q.c
p.a.uniform3f(p.d,o,n,q)
q=a.db
q=q.gY(q)
n=r.fr
n.toString
n.a7(q.a3(0,!0))
q=a.gej()
n=r.fx
n.toString
n.a7(q.a3(0,!0))
q=a.ge8()
r=r.fy
r.toString
r.a7(q.a3(0,!0))
r=b.e
if(r instanceof Z.dQ){q=a.a
q.blendFunc(1,1)
if(b.c==null){q.disable(k)
q.enable(3042)
q.blendFunc(1,1)
if(m.k3)m.h6(a,r,b.d,"Axis",m.gcN(),m.z,m.y)
q.enable(k)
q.blendFunc(770,771)}else{q.enable(k)
q.enable(3042)
q.blendFunc(770,771)
q.disable(k)
q.blendFunc(1,1)
if(m.ch)m.bm(a,r,b.c,"wireFrame",m.ghq(),m.f,m.e)
if(m.cy)m.bm(a,r,b.c,"normals",m.gfb(),m.f,m.e)
if(m.db)m.bm(a,r,b.c,"binormals",m.geR(),m.f,m.e)
if(m.k3)m.bm(a,r,b.c,"Axis",m.gcN(),m.z,m.y)
q.enable(k)
q.blendFunc(770,771)}}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.ds()},
bm:function(a,b,c,d,e,f,g){var s,r=b.a.h(0,d)
if(r==null){r=this.cO(a,e.$1(c))
b.a.l(0,d,r)}s=this.a
s.db.bh(f)
s.dx.bh(g)
r.e4(a)},
h6:function(a,b,c,d,e,f,g){var s,r=b.a.h(0,d)
if(r==null){r=this.cO(a,e.$1(c))
b.a.l(0,d,r)}s=this.a
s.db.bh(f)
s.dx.bh(g)
r.e4(a)},
cO:function(a,b){var s=this,r=$.aN(),q=$.aM(),p=b.dm(new Z.fx(a.a),new Z.b2(r.a|q.a|$.aL().a|$.bO().a))
p.aj($.aN()).e=s.a.z.c
p.aj($.aM()).e=s.a.Q.c
p.aj($.bO()).e=s.a.ch.c
p.aj($.aL()).e=s.a.cx.c
return p},
d9:function(a,b){var s,r={}
r.a=b
s=F.cU()
r.a=new V.Z(0,0.7,1,1)
C.b.v(a.a.c,new O.im(r,s))
r=new O.il(s)
C.b.v(a.c.b,new O.io(s,r))
C.b.v(a.d.b,new O.ip(s,r))
return s},
hr:function(a){return this.d9(a,null)},
fc:function(a){var s=F.cU()
C.b.v(a.a.c,new O.ik(new V.Z(1,1,0.3,1),s))
return s},
eS:function(a){var s=F.cU()
C.b.v(a.a.c,new O.ij(new V.Z(1,0.3,0.3,1),s))
return s},
eP:function(a){return this.eQ(a)},
eQ:function(a){var s=F.cU(),r=new O.ii(s)
r.$3(1,0,0)
r.$3(0,1,0)
r.$3(0,0,1)
return s}}
O.im.prototype={
$1:function(a){var s=this.b.a,r=a.aX()
r.saa(0,this.a.a)
r.saB(V.b1())
s.n(0,r)}}
O.il.prototype={
$2:function(a,b){if(a.hR(b)==null)this.a.c.az(0,a,b)}}
O.io.prototype={
$1:function(a){var s,r=this.a,q=r.a,p=a.a
p.a.a.S()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.d(q,p)
s=q[p]
r=r.a
p=a.b
p.a.a.S()
p=p.e
r=r.c
if(p>>>0!==p||p>=r.length)return H.d(r,p)
this.b.$2(s,r[p])}}
O.ip.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.S()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.d(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.S()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.d(n,o)
r=n[o]
p=p.a
o=a.c
o.a.a.S()
o=o.e
p=p.c
if(o>>>0!==o||o>=p.length)return H.d(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)}}
O.ik.prototype={
$1:function(a){var s,r,q=a.aX()
q.saa(0,this.a)
q.saB(V.b1())
s=q.aX()
s.saB(q.r)
r=this.b
r.a.n(0,q)
r.a.n(0,s)
r.c.az(0,q,s)}}
O.ij.prototype={
$1:function(a){var s,r,q=a.aX()
q.saa(0,this.a)
q.saB(V.b1())
s=q.aX()
s.saB(a.x)
r=this.b
r.a.n(0,q)
r.a.n(0,s)
r.c.az(0,q,s)}}
O.ii.prototype={
$3:function(a,b,c){var s,r,q=a>1?1:a,p=b>1?1:b,o=c>1?1:c,n=new V.Z(q,p,o,1)
q=this.a
s=q.a.dd(0,0,0)
s.saB(V.b1())
s.sdW(V.mk())
s.saa(0,n)
r=q.a.dd(a,b,c)
r.saB(V.b1())
r.sdW(V.mk())
r.saa(0,n)
q.c.az(0,s,r)}}
O.el.prototype={
gu:function(){var s=this.fr
return s==null?this.fr=D.J():s},
T:function(a){var s=this.fr
if(s!=null)s.G(a)},
bW:function(){return this.T(null)},
d0:function(a){this.a=null
this.T(a)},
ha:function(){return this.d0(null)},
fi:function(a,b){var s=new D.bd()
s.b=!0
this.T(s)},
fk:function(a,b){var s=new D.be()
s.b=!0
this.T(s)},
cS:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.B(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gat()
n=d.h(0,p.gat())
d.l(0,o,n==null?1:n)}m=H.c([],t.am)
d.v(0,new O.iH(f,m))
C.b.b1(m,new O.iI())
l=new H.B(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.c([],t.M)
l.v(0,new O.iJ(f,k))
C.b.b1(k,new O.iK())
j=new H.B(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gat()
n=j.h(0,p.gat())
j.l(0,o,n==null?1:n)}i=H.c([],t.d1)
j.v(0,new O.iL(f,i))
C.b.b1(i,new O.iM())
h=new H.B(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.q)(e),++q){p=e[q]
r=p.gat()
o=h.h(0,p.gat())
h.l(0,r,o==null?1:o)}g=H.c([],t.gk)
h.v(0,new O.iN(f,g))
C.b.b1(g,new O.iO())
e=C.c.a2(f.e.a.length+3,4)
f.dy.toString
return A.nW(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ag:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
ap:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a6(s,s.length);s.t();){r=s.d
r.toString
q=$.jM
if(q==null)q=$.jM=new V.G(0,0,1)
r.a=q
p=$.jL
r.d=p==null?$.jL=new V.G(0,1,0):p
p=$.jK
r.e=p==null?$.jK=new V.G(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.by(q).P()
r.d=o.by(r.d).P()
r.e=o.by(r.e).P()}}}},
eb:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cS()
s=b4.fr.h(0,b3.b9)
if(s==null){s=A.nV(b3,b4.a)
b4.df(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bq
b3=b5.e
if(!(b3 instanceof Z.bU))b3=b5.e=null
if(b3==null||!b3.d.q(0,q)){b3=r.k4
if(b3)b5.d.aC()
p=r.r1
if(p)b5.d.aU()
o=r.rx
if(o)b5.d.bo()
n=b5.d.dm(new Z.fx(b4.a),q)
n.aj($.aN()).e=b2.a.Q.c
if(b3)n.aj($.aM()).e=b2.a.cx.c
if(p)n.aj($.aL()).e=b2.a.ch.c
if(r.r2)n.aj($.br()).e=b2.a.cy.c
if(o)n.aj($.bP()).e=b2.a.db.c
if(r.ry)n.aj($.bq()).e=b2.a.dx.c
b5.e=n}m=H.c([],t.bw)
b2.a.aA(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gY(p)
b3=b3.dy
b3.toString
b3.a7(p.a3(0,!0))}if(r.fx){b3=b2.a
p=b4.gej()
b3=b3.fr
b3.toString
b3.a7(p.a3(0,!0))}b3=b2.a
p=b4.ge8()
b3=b3.fy
b3.toString
b3.a7(p.a3(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gY(p)
b3=b3.fx
b3.toString
b3.a7(p.a3(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a7(C.j.a3(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a7(C.j.a3(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a7(C.j.a3(p,!0))}if(r.aY>0){l=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,l)
for(k=0;k<l;++k){b3=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
b3=b3.r1
if(k>=b3.length)return H.d(b3,k)
b3=b3[k]
j=new Float32Array(H.ch(p.a3(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,j)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ag(m,b2.f.d)
b3=b2.a
p=b2.f.d
b3.am(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ag(m,b2.r.d)
b3=b2.a
p=b2.r.d
b3.am(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ag(m,b2.x.d)
b3=b2.a
p=b2.x.d
b3.am(b3.aY,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bq
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ag(m,b2.y.d)
b3=b2.a
p=b2.y.d
b3.am(b3.dv,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
i=b2.z.ch
o=o.dA
o.a.uniform1f(o.d,i)}if(p){p=b2.a
o=b2.z.f
p=p.dw
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ag(m,b2.z.d)
b3=b2.a
p=b2.z.d
b3.am(b3.dz,p)}b3=r.z
if(b3.length>0){h=new H.B(t.a)
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gat()
d=h.h(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.cn(b2.a.c9.h(0,e),d)
i=f.giG()
b=$.aY
i=i.bf(b==null?$.aY=new V.a7(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.giL()
b=$.aY
i=i.bf(b==null?$.aY=new V.a7(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gaa(f)
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
if(f.gdu()){i=f.gdh()
b=c.e
b.a.uniform1f(b.d,i)
i=f.gdi()
b=c.f
b.a.uniform1f(b.d,i)
i=f.gdj()
b=c.r
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
l=h.h(0,o)
if(l==null)l=0
o=b2.a.c8.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gY(p)
a0=new H.B(t.a)
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.l(0,0,d+1)
c=J.cn(b2.a.cb.h(0,0),d)
i=a.by(f.a).P()
b=c.e
a1=i.a
a2=i.b
i=i.c
b.a.uniform3f(b.d,a1,a2,i)
i=f.c
a2=c.f
a2.a.uniform3f(a2.d,i.a,i.b,i.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
l=a0.h(0,o)
if(l==null)l=0
o=b2.a.ca.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gY(p)
a3=new H.B(t.a)
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gat()
d=a3.h(0,e)
if(d==null)d=0
a3.l(0,e,d+1)
c=J.cn(b2.a.cd.h(0,e),d)
a4=a.A(0,f.gY(f))
i=f.gY(f)
b=$.aY
i=i.bf(b==null?$.aY=new V.a7(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=$.aY
i=a4.bf(i==null?$.aY=new V.a7(0,0,0):i)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gaa(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gaI()
i=a4.dT(0)
b=i.a
a1=i.b
a2=i.c
a5=i.e
a6=i.f
a7=i.r
a8=i.y
a9=i.z
i=i.Q
b0=c.d
b0.toString
j=new Float32Array(H.ch(new V.en(b,a1,a2,a5,a6,a7,a8,a9,i).a3(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,j)
f.gaI()
i=f.gaI()
if(!C.b.D(m,i)){i.a=m.length
m.push(i)}i=f.gaI()
b=i.gba(i)
if(b){b=c.f
b.toString
a1=i.gba(i)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.ghX(i))}f.gb0()
i=f.gep()
b=c.x
b.toString
a1=i.ghJ(i)
a2=i.ghK(i)
a5=i.ghL()
i=i.ghI()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gb0()
if(!C.b.D(m,i)){i.a=m.length
m.push(i)}i=f.gb0()
b=i.gba(i)
if(b){b=c.r
b.toString
a1=i.gba(i)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.ghX(i))}if(f.gdu()){i=f.gdh()
b=c.y
b.a.uniform1f(b.d,i)
i=f.gdi()
b=c.z
b.a.uniform1f(b.d,i)
i=f.gdj()
b=c.Q
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
l=a3.h(0,o)
if(l==null)l=0
o=b2.a.cc.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gY(p)
b1=new H.B(t.a)
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gat()
d=b1.h(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.cn(b2.a.cf.h(0,e),d)
i=f.gil(f)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.giJ(f).P()
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=a.bf(f.gil(f))
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gaa(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gaI()
i=f.gcw()
b=c.f
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gct(f)
b=c.r
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.giV()
b=c.x
b.a.uniform1f(b.d,i)
i=f.giW()
b=c.y
b.a.uniform1f(b.d,i)
f.gaI()
i=f.gaI()
if(!C.b.D(m,i)){i.a=m.length
m.push(i)}i=f.gaI()
b=i.gba(i)
if(b){b=c.dx
a1=i.d
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}f.gb0()
i=f.gep()
b=c.z
b.toString
a1=i.ghJ(i)
a2=i.ghK(i)
a5=i.ghL()
i=i.ghI()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gb0()
if(!C.b.D(m,i)){i.a=m.length
m.push(i)}i=f.gb0()
b=i.gba(i)
if(b){b=c.dy
a1=i.d
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}if(f.giK()){i=f.giI()
b=c.Q
b.a.uniform1f(b.d,i)
i=f.giH()
b=c.ch
b.a.uniform1f(b.d,i)}if(f.gdu()){i=f.gdh()
b=c.cx
b.a.uniform1f(b.d,i)
i=f.gdi()
b=c.cy
b.a.uniform1f(b.d,i)
i=f.gdj()
b=c.db
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
l=b1.h(0,o)
if(l==null)l=0
o=b2.a.ce.h(0,o)
o.a.uniform1i(o.d,l)}}}if(r.f.b){b2.ag(m,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.am(b3.dB,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gY(p).dT(0)}b3=b3.id
b3.toString
b3.a7(p.a3(0,!0))}if(r.db){b2.ag(m,b2.ch)
b3=b2.a
p=b2.ch
b3.he(b3.dC,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dD
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ag(m,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.am(b3.dE,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
i=b2.cy.ch
o=o.dF
o.a.uniform1f(o.d,i)}if(p){p=b2.a
o=b2.cy.f
p=p.dG
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.ag(m,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.am(b3.dH,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
i=b2.db.f
p=p.dI
p.a.uniform1f(p.d,i)}if(b3.b){b2.ag(m,b2.db.d)
p=b2.a
i=b2.db.d
p.am(p.dJ,i)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(p=b4.a,k=0;k<m.length;++k){i=m[k]
if(!i.c&&i.d){i.c=!0
p.activeTexture(33984+i.a)
p.bindTexture(3553,i.b)}}i=t.aP.a(b5.e)
i.aA(b4)
i.aF(b4)
i.eg(b4)
if(!o||b3.b||!1)p.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
p.activeTexture(33984+b3.a)
p.bindTexture(3553,null)}}b3=b2.a
b3.toString
p.useProgram(null)
b3.x.ds()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cS().b9}}
O.iH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dO(a,C.c.a2(b+3,4)*4))}}
O.iI.prototype={
$2:function(a,b){return J.dF(a.a,b.a)}}
O.iJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dZ(a,C.c.a2(b+3,4)*4))}}
O.iK.prototype={
$2:function(a,b){return J.dF(a.a,b.a)}}
O.iL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eK(a,C.c.a2(b+3,4)*4))}}
O.iM.prototype={
$2:function(a,b){return J.dF(a.a,b.a)}}
O.iN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eW(a,C.c.a2(b+3,4)*4))}}
O.iO.prototype={
$2:function(a,b){return J.dF(a.a,b.a)}}
O.iB.prototype={
ax:function(){var s,r=this
r.cF()
s=r.f
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.D(r.b,s,1)
s.b=!0
r.a.T(s)}}}
O.cM.prototype={
T:function(a){return this.a.T(a)},
bW:function(){return this.T(null)},
ax:function(){},
bY:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.ax()
s=q.a
s.a=null
s.T(null)}}}
O.iC.prototype={}
O.aV.prototype={
d2:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.D(q.b+".color",s,a)
r.b=!0
q.a.T(r)}},
ax:function(){this.cF()
this.d2(new V.a0(1,1,1))},
saa:function(a,b){this.bY(new A.a2(!0,this.c.b,!1))
this.d2(b)}}
O.iE.prototype={}
O.iF.prototype={
ax:function(){var s,r=this
r.cG()
s=r.ch
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.D(r.b+".refraction",s,1)
s.b=!0
r.a.T(s)}}}
O.iG.prototype={
d3:function(a){var s=this,r=s.ch
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.D(s.b+".shininess",r,a)
r.b=!0
s.a.T(r)}},
ax:function(){this.cG()
this.d3(100)}}
O.f6.prototype={}
T.f9.prototype={}
T.jc.prototype={}
T.jg.prototype={
gu:function(){var s=this.y
return s==null?this.y=D.J():s}}
T.jh.prototype={
i1:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.lL(a)
r=new T.jg()
r.a=0
r.b=o
r.d=r.c=!1
W.a_(s,"load",new T.ji(this,r,s,!1,o,!1,!1),!1)
return r},
hb:function(a,b,c){var s,r,q,p
b=V.ls(b)
s=V.ls(a.width)
r=V.ls(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kM()
q.width=s
q.height=r
p=C.i.el(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.q0(p.getImageData(0,0,q.width,q.height))}}}
T.ji.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.hb(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.a3.iw(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.hM()}++s.e}}
X.kL.prototype={}
X.id.prototype={
gu:function(){var s=this.x
return s==null?this.x=D.J():s}}
X.eC.prototype={
gu:function(){var s=this.f
return s==null?this.f=D.J():s},
aP:function(a){var s=this.f
if(s!=null)s.G(a)},
eK:function(){return this.aP(null)},
sbb:function(a){var s,r,q=this
if(!J.I(q.b,a)){s=q.b
if(s!=null)s.gu().X(0,q.gcL())
r=q.b
q.b=a
if(a!=null)a.gu().n(0,q.gcL())
s=new D.D("mover",r,q.b)
s.b=!0
q.aP(s)}}}
X.jb.prototype={}
V.ba.prototype={
bj:function(a){this.b=new P.ig(C.T)
this.c=null
this.d=H.c([],t.u)},
J:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.c([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.c([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eZ(o,0,o.length)
l=m==null?o:m
C.R.en(n,H.lu(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gau(k.d).push(n)}},
e5:function(a,b){var s,r,q,p=this
p.d=H.c([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bp()
r.toString
q=new H.p(s)
q=new P.bI(r.cv(new H.bg(q,q.gm(q))).a())
for(;q.t();)p.bw(q.gB(q))}}
V.kG.prototype={
$1:function(a){var s=C.d.ef(this.a.ghW(),2)
if(s!=="0.00")P.lt(s+" fps")}}
V.dX.prototype={
bw:function(a){var s=this
switch(a.a){case"Class":s.J(a.b,"#551")
break
case"Comment":s.J(a.b,"#777")
break
case"Id":s.J(a.b,"#111")
break
case"Num":s.J(a.b,"#191")
break
case"Reserved":s.J(a.b,"#119")
break
case"String":s.J(a.b,"#171")
break
case"Symbol":s.J(a.b,"#616")
break
case"Type":s.J(a.b,"#B11")
break
case"Whitespace":s.J(a.b,"#111")
break}},
bp:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jm()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.u(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.u(new H.p("_"))
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
r=K.u(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.u(new H.p(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.u(new H.p(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.u(new H.p('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.u(new H.p('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.u(new H.p("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.u(new H.p('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b8())
r=a3.k(0,p).j(0,f)
s=K.u(new H.p("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.u(new H.p("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.u(new H.p("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.u(new H.p("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b8())
r=a3.k(0,p).j(0,c)
s=K.u(new H.p("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.u(new H.p("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.u(new H.p("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.aa()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.p("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.u(new H.p("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.u(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.aa()
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.u(new H.p("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.u(new H.p(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.u(new H.p(" \n\t"))
s.a.push(r)
r=a3.k(0,n)
r.d=r.a.L("Num")
r=a3.k(0,l)
r.d=r.a.L("Num")
r=a3.k(0,k)
r.d=r.a.L("Symbol")
r=a3.k(0,h)
r.d=r.a.L("String")
r=a3.k(0,e)
r.d=r.a.L("String")
r=a3.k(0,a)
r.d=r.a.L(b)
r=a3.k(0,a2)
r.d=r.a.L(a2)
r=a3.k(0,o)
r=r.d=r.a.L(o)
s=t.i
r.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e6.prototype={
bw:function(a){var s=this
switch(a.a){case"Builtin":s.J(a.b,"#411")
break
case"Comment":s.J(a.b,"#777")
break
case"Id":s.J(a.b,"#111")
break
case"Num":s.J(a.b,"#191")
break
case"Preprocess":s.J(a.b,"#737")
break
case"Reserved":s.J(a.b,"#119")
break
case"Symbol":s.J(a.b,"#611")
break
case"Type":s.J(a.b,"#171")
break
case"Whitespace":s.J(a.b,"#111")
break}},
bp:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jm()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.u(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.u(new H.p("_"))
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
r=K.u(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.u(new H.p(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.u(new H.p(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.u(new H.p("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.u(new H.p("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b8())
r=c.k(0,h).j(0,g)
s=K.u(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.aa()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.u(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.aa()
s.a=H.c([],q)
r.a.push(s)
r=K.u(new H.p("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.u(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.u(new H.p(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.u(new H.p(" \n\t"))
r.a.push(s)
s=c.k(0,n)
s.d=s.a.L("Num")
s=c.k(0,l)
s.d=s.a.L("Num")
s=c.k(0,k)
s.d=s.a.L("Symbol")
s=c.k(0,g)
s.d=s.a.L(h)
s=c.k(0,e)
s.d=s.a.L(f)
s=c.k(0,d)
s.d=s.a.L(d)
s=c.k(0,o)
s=s.d=s.a.L(o)
r=t.i
s.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],r))
return c}}
V.e8.prototype={
bw:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.J(a.b,"#911")
s.J("=",r)
break
case"Id":s.J(a.b,r)
break
case"Other":s.J(a.b,r)
break
case"Reserved":s.J(a.b,"#119")
break
case"String":s.J(a.b,"#171")
break
case"Symbol":s.J(a.b,"#616")
break}},
bp:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jm()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.u(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.u(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.u(new H.p("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.u(new H.p("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.u(new H.p("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.u(new H.p('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.u(new H.p('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.u(new H.p("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.u(new H.p('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b8())
j.k(0,q).j(0,k).a.push(new K.b8())
s=j.k(0,k).j(0,k)
r=new K.aa()
r.a=H.c([],t.B)
s.a.push(r)
s=K.u(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.L("Symbol")
s=j.k(0,l)
s.d=s.a.L("String")
s=j.k(0,p)
r=s.a.L(p)
s.d=r
r.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.L(o)
r=j.k(0,k)
r.d=r.a.L(k)
return j}}
V.eE.prototype={
e5:function(a,b){this.d=H.c([],t.u)
this.J(C.b.j(b,"\n"),"#111")},
bw:function(a){},
bp:function(){return null}}
V.j6.prototype={
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
W.a_(o,"scroll",new V.j8(m),!1)},
de:function(a){var s,r,q,p,o,n,m,l
this.hg()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.i_(a)
q.toString
p=new H.p(p)
p=new P.bI(q.cv(new H.bg(p,p.gm(p))).a())
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
if(H.mX(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kh(C.x,q,C.e,!1)
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
q=C.b.hS(H.c([p,s,r],t.b7),new V.j9(a))
if(q!=null)return q
p=new V.eE("plain")
p.bj("plain")
return p},
da:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.c([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dD(q).a5(q,"+")){b2[r]=C.a.ac(q,1)
a8.push(1)
s=!0}else if(C.a.a5(q,"-")){b2[r]=C.a.ac(q,1)
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
l=P.kh(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.ly()
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
if(r>=a8.length)return H.d(a8,r)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.q)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.q)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gN(q);a4.t();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
ht:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hg:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jm()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.u(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.aa()
p=t.B
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.p("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.u(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.u(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.aa()
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.p("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.u(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.u(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.aa()
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.p("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.u(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.u(new H.p("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.u(new H.p("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.u(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.aa()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.u(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.aa()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b8())
q=s.k(0,g).j(0,g)
r=new K.aa()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.p("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.L(n)
q=s.k(0,l)
q.d=q.a.L(m)
q=s.k(0,"CodeEnd")
q.d=q.a.L(k)
q=s.k(0,h)
q.d=q.a.L("Link")
q=s.k(0,g)
q.d=q.a.L(g)
this.b=s}}
V.j8.prototype={
$1:function(a){P.m7(C.n,new V.j7(this.a))}}
V.j7.prototype={
$0:function(){var s=C.d.ao(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j9.prototype={
$1:function(a){return a.a===this.a}}
V.jd.prototype={
az:function(a,b,c){var s,r,q,p,o=this,n=W.lL(null)
n.src=b
n.width=64
n.height=64
s=n.style
s.border="solid 2px white"
s=J.dG(o.c)
r=s.gm(s)
W.a_(n,"click",new V.jf(o,n,b,r),!1)
J.dG(o.c).n(0,n)
J.dG(o.c).n(0,document.createElement("br"))
q=P.mb().gcs().h(0,H.f(o.a))
if(q==null){o.d8(r)
p=c}else p=P.hH(q,null)==r
if(p)n.click()},
n:function(a,b){return this.az(a,b,!1)},
d8:function(a){var s,r,q=P.mb(),p=t.X,o=P.nS(q.gcs(),p,p)
o.l(0,this.a,H.f(a))
s=q.ec(0,o)
p=window.history
r=s.gc0()
p.toString
p.replaceState(new P.k9([],[]).bz(""),"",r)}}
V.jf.prototype={
$1:function(a){var s=this,r=s.a,q=J.dG(r.c)
q.v(q,new V.je())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.d8(s.d)}}
V.je.prototype={
$1:function(a){var s
if(t.eN.b(a)){s=a.style
s.border="solid 2px white"}}}
N.kD.prototype={
$1:function(a){var s,r=this.a.Q,q=this.b.f.i1(a),p=r.c
if(!p.b)r.bY(new A.a2(p.a,!0,!1))
p=r.d
if(p!==q){if(p!=null)p.gu().X(0,r.gbl())
s=r.d
r.d=q
q.gu().n(0,r.gbl())
q=new D.D(r.b+".texture2D",s,r.d)
q.b=!0
r.a.T(q)}}}
N.kE.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.da("Vertex Shader","glsl",0,H.c((q==null?null:q.c).split("\n"),p))
r=r.a
s.da("Fragment Shader","glsl",0,H.c((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.es=s.i
s=J.bf.prototype
s.ev=s.i
s=P.h.prototype
s.eu=s.bA
s=W.C.prototype
s.bD=s.ai
s=W.di.prototype
s.ew=s.as
s=K.e7.prototype
s.er=s.aE
s.cE=s.i
s=O.cM.prototype
s.cF=s.ax
s=O.aV.prototype
s.cG=s.ax})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pe","nN",23)
r(P,"pU","oq",8)
r(P,"pV","or",8)
r(P,"pW","os",8)
q(P,"mO","pP",9)
r(W,"rt","i3",24)
p(W,"q7",4,null,["$4"],["ot"],15,0)
p(W,"q8",4,null,["$4"],["ou"],15,0)
var j
o(j=E.by.prototype,"ge0",0,0,null,["$1","$0"],["e1","ia"],0,0)
o(j,"ge2",0,0,null,["$1","$0"],["e3","ib"],0,0)
o(j,"gdZ",0,0,null,["$1","$0"],["e_","i9"],0,0)
o(j,"gdX",0,0,null,["$1","$0"],["dY","i6"],0,0)
n(j,"gi4","i5",4)
n(j,"gi7","i8",4)
o(j=E.fa.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],0,0)
m(j,"gis","ed",9)
l(j=X.ft.prototype,"gfA","fB",5)
l(j,"gfl","fm",5)
l(j,"gfs","ft",2)
l(j,"gfE","fF",10)
l(j,"gfC","fD",10)
l(j,"gfI","fJ",2)
l(j,"gfM","fN",2)
l(j,"gfw","fz",2)
l(j,"gfK","fL",2)
l(j,"gfu","fv",2)
l(j,"gfO","fP",20)
l(j,"gfQ","fR",5)
l(j,"gh2","h3",6)
l(j,"gfZ","h_",6)
l(j,"gh0","h1",6)
o(D.bw.prototype,"geE",0,0,null,["$1","$0"],["av","eF"],0,0)
o(j=D.cC.prototype,"gcZ",0,0,null,["$1","$0"],["d_","fG"],0,0)
l(j,"gfT","fU",21)
n(j,"gff","fg",11)
n(j,"gfX","fY",11)
k(V.ac.prototype,"gm","cl",12)
k(V.G.prototype,"gm","cl",12)
o(j=U.bX.prototype,"gaM",0,0,null,["$1","$0"],["M","a9"],0,0)
n(j,"gfd","fe",13)
n(j,"gfV","fW",13)
o(j=U.d4.prototype,"gaM",0,0,null,["$1","$0"],["M","a9"],0,0)
l(j,"gbO","bP",1)
l(j,"gbQ","bR",1)
l(j,"gbS","bT",1)
o(j=U.d5.prototype,"gaM",0,0,null,["$1","$0"],["M","a9"],0,0)
l(j,"gbO","bP",1)
l(j,"gbQ","bR",1)
l(j,"gbS","bT",1)
l(j,"gf4","f5",1)
l(j,"gf6","f7",1)
l(j,"ghn","ho",1)
l(j,"ghl","hm",1)
l(j,"ghj","hk",1)
l(U.d6.prototype,"gf9","fa",1)
o(j=M.e0.prototype,"gaN",0,0,null,["$1","$0"],["aO","eG"],0,0)
n(j,"gfn","fo",4)
n(j,"gfp","fq",4)
o(j=O.ea.prototype,"ghq",0,1,null,["$2$color","$1"],["d9","hr"],22,0)
l(j,"gfb","fc",7)
l(j,"geR","eS",7)
l(j,"gcN","eP",7)
o(j=O.el.prototype,"gbl",0,0,null,["$1","$0"],["T","bW"],0,0)
o(j,"gh9",0,0,null,["$1","$0"],["d0","ha"],0,0)
n(j,"gfh","fi",14)
n(j,"gfj","fk",14)
o(O.cM.prototype,"gbl",0,0,null,["$1","$0"],["T","bW"],0,0)
o(X.eC.prototype,"gcL",0,0,null,["$1","$0"],["aP","eK"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.kW,J.a,J.a6,P.L,P.db,P.h,H.bg,P.ec,H.cw,H.fq,H.cp,H.jp,H.iV,H.he,H.bv,P.U,H.it,H.ej,H.ee,H.ar,H.fR,P.dp,P.cf,P.bI,P.fz,P.cW,P.f0,P.cY,P.kl,P.dh,P.k1,P.da,P.i,P.ht,P.cK,P.dS,P.ih,P.kj,P.ki,P.ay,P.ah,P.Q,P.bx,P.eB,P.cV,P.fO,P.ic,P.aA,P.n,P.F,P.ap,P.w,P.R,P.bJ,P.jz,P.h8,W.hV,W.kR,W.l6,W.ce,W.M,W.cS,W.di,W.hj,W.cx,W.ak,W.k5,W.hu,P.k8,P.dr,P.h6,P.bk,K.b8,K.e7,K.iA,K.iX,K.j2,L.eY,L.fb,L.fc,L.jl,O.ag,O.cN,E.hR,E.by,E.bT,E.c3,E.fL,E.iY,E.fa,Z.fw,Z.fx,Z.bU,Z.dQ,Z.bY,Z.b2,D.hS,D.bV,D.S,X.dR,X.eg,X.is,X.iy,X.ao,X.iS,X.jn,X.ft,D.dN,D.bw,D.T,D.eH,D.eV,V.a0,V.Z,V.i6,V.en,V.bh,V.aF,V.a7,V.eI,V.eN,V.ac,V.G,U.d4,U.d5,U.d6,M.e0,A.dK,A.hM,A.a2,A.dO,A.dZ,A.eK,A.eW,A.iD,A.d_,A.d0,A.d2,A.d3,A.fg,A.jw,F.e1,F.cD,F.eG,F.as,F.j3,F.j4,F.j5,F.fu,F.jN,F.jO,F.jR,F.jS,O.f6,O.cM,O.iE,T.jh,X.kL,X.jb,X.eC,V.ba,V.j6,V.jd])
q(J.a,[J.ed,J.cB,J.bf,J.y,J.bC,J.aS,H.cO,H.W,W.e,W.hK,W.bs,W.aR,W.H,W.fE,W.an,W.hY,W.hZ,W.fG,W.ct,W.fI,W.i_,W.j,W.fP,W.aB,W.ie,W.fT,W.bA,W.ix,W.iP,W.fX,W.fY,W.aD,W.fZ,W.h0,W.aE,W.h4,W.h7,W.aG,W.h9,W.aH,W.hf,W.au,W.hl,W.jk,W.aI,W.hn,W.jo,W.jE,W.hv,W.hx,W.hz,W.hB,W.hD,P.aT,P.fV,P.aX,P.h2,P.iW,P.hg,P.aZ,P.hp,P.hN,P.fB,P.eO,P.hc])
q(J.bf,[J.eD,J.bH,J.aC])
r(J.iq,J.y)
q(J.bC,[J.cA,J.cz])
q(P.L,[H.eh,H.ex,H.ef,H.fp,H.eQ,H.fM,P.dJ,P.ey,P.af,P.fr,P.fo,P.c8,P.dU,P.dW])
r(P.cG,P.db)
q(P.cG,[H.ca,W.fC,W.a1,P.e4])
r(H.p,H.ca)
q(P.h,[H.k,H.aU,H.b3,P.cy])
q(H.k,[H.cH,H.cE])
r(H.cu,H.aU)
q(P.ec,[H.ek,H.fy])
r(H.cL,H.cH)
r(H.cq,H.cp)
q(H.bv,[H.f5,H.ir,H.ky,H.kz,H.kA,P.jW,P.jV,P.jX,P.jY,P.ke,P.kd,P.ku,P.k3,P.k4,P.iu,P.iz,P.jH,P.jI,P.i0,P.i1,P.jD,P.jA,P.jB,P.jC,P.kg,P.kf,P.kp,P.ko,P.kq,P.kr,W.i2,W.iQ,W.iR,W.j1,W.ja,W.jZ,W.iU,W.iT,W.k6,W.k7,W.kc,W.kk,P.ka,P.kb,P.kv,P.ia,P.ib,P.hO,E.iZ,E.j_,E.j0,E.jj,D.i8,D.i9,F.km,F.jU,F.jT,F.jP,F.jQ,O.im,O.il,O.io,O.ip,O.ik,O.ij,O.ii,O.iH,O.iI,O.iJ,O.iK,O.iL,O.iM,O.iN,O.iO,T.ji,V.kG,V.j8,V.j7,V.j9,V.jf,V.je,N.kD,N.kE])
q(H.f5,[H.eZ,H.bS])
r(P.cJ,P.U)
q(P.cJ,[H.B,W.fA])
r(H.c1,H.W)
q(H.c1,[H.dd,H.df])
r(H.de,H.dd)
r(H.bE,H.de)
r(H.dg,H.df)
r(H.cP,H.dg)
q(H.cP,[H.es,H.et,H.eu,H.ev,H.ew,H.cQ,H.c2])
r(H.dq,H.fM)
r(P.dl,P.cy)
r(P.k2,P.kl)
r(P.d9,P.dh)
r(P.du,P.cK)
r(P.cb,P.du)
q(P.dS,[P.hP,P.i4])
r(P.dV,P.f0)
q(P.dV,[P.hQ,P.ig,P.jJ,P.jG])
r(P.jF,P.i4)
q(P.Q,[P.Y,P.l])
q(P.af,[P.c5,P.e9])
r(P.fF,P.bJ)
q(W.e,[W.x,W.e3,W.bZ,W.at,W.dj,W.av,W.ab,W.dm,W.fv,W.cc,P.dM,P.b9])
q(W.x,[W.C,W.az,W.cd])
q(W.C,[W.t,P.m])
q(W.t,[W.dH,W.dI,W.bR,W.bt,W.bu,W.bb,W.e5,W.bB,W.eR,W.bj,W.cX,W.f3,W.f4,W.c9])
r(W.hU,W.aR)
r(W.cr,W.fE)
q(W.an,[W.hW,W.hX])
r(W.fH,W.fG)
r(W.cs,W.fH)
r(W.fJ,W.fI)
r(W.e_,W.fJ)
r(W.ai,W.bs)
r(W.fQ,W.fP)
r(W.bW,W.fQ)
r(W.fU,W.fT)
r(W.bz,W.fU)
r(W.b0,W.j)
q(W.b0,[W.bD,W.aj,W.bG])
r(W.ep,W.fX)
r(W.eq,W.fY)
r(W.h_,W.fZ)
r(W.er,W.h_)
r(W.h1,W.h0)
r(W.cR,W.h1)
r(W.h5,W.h4)
r(W.eF,W.h5)
r(W.eP,W.h7)
r(W.dk,W.dj)
r(W.eT,W.dk)
r(W.ha,W.h9)
r(W.eU,W.ha)
r(W.f_,W.hf)
r(W.hm,W.hl)
r(W.f7,W.hm)
r(W.dn,W.dm)
r(W.f8,W.dn)
r(W.ho,W.hn)
r(W.fd,W.ho)
r(W.bl,W.aj)
r(W.hw,W.hv)
r(W.fD,W.hw)
r(W.d7,W.ct)
r(W.hy,W.hx)
r(W.fS,W.hy)
r(W.hA,W.hz)
r(W.dc,W.hA)
r(W.hC,W.hB)
r(W.hb,W.hC)
r(W.hE,W.hD)
r(W.hi,W.hE)
r(W.fK,W.fA)
r(W.fN,P.cW)
r(W.hk,W.di)
r(P.k9,P.k8)
r(P.a8,P.h6)
r(P.fW,P.fV)
r(P.ei,P.fW)
r(P.h3,P.h2)
r(P.ez,P.h3)
r(P.c6,P.m)
r(P.hh,P.hg)
r(P.f1,P.hh)
r(P.hq,P.hp)
r(P.fe,P.hq)
r(P.dL,P.fB)
r(P.eA,P.b9)
r(P.hd,P.hc)
r(P.eX,P.hd)
q(K.e7,[K.aa,L.ff])
q(E.hR,[Z.dP,A.c7,T.f9])
q(D.S,[D.bd,D.be,D.D,X.eJ])
q(X.eJ,[X.cI,X.c_,X.c0,X.cZ])
q(O.ag,[D.cC,U.bX])
q(D.hS,[U.hT,U.V])
r(U.co,U.V)
q(A.c7,[A.eb,A.em])
q(A.fg,[A.fi,A.jt,A.ju,A.jv,A.jr,A.fh,A.js,A.fj,A.fk,A.jx,A.fl,A.d1,A.fm,A.fn])
q(O.f6,[O.ea,O.el])
q(O.cM,[O.iB,O.iC,O.aV])
q(O.aV,[O.iF,O.iG])
r(T.jc,T.f9)
r(T.jg,T.jc)
r(X.id,X.jb)
q(V.ba,[V.dX,V.e6,V.e8,V.eE])
s(H.ca,H.fq)
s(H.dd,P.i)
s(H.de,H.cw)
s(H.df,P.i)
s(H.dg,H.cw)
s(P.db,P.i)
s(P.du,P.ht)
s(W.fE,W.hV)
s(W.fG,P.i)
s(W.fH,W.M)
s(W.fI,P.i)
s(W.fJ,W.M)
s(W.fP,P.i)
s(W.fQ,W.M)
s(W.fT,P.i)
s(W.fU,W.M)
s(W.fX,P.U)
s(W.fY,P.U)
s(W.fZ,P.i)
s(W.h_,W.M)
s(W.h0,P.i)
s(W.h1,W.M)
s(W.h4,P.i)
s(W.h5,W.M)
s(W.h7,P.U)
s(W.dj,P.i)
s(W.dk,W.M)
s(W.h9,P.i)
s(W.ha,W.M)
s(W.hf,P.U)
s(W.hl,P.i)
s(W.hm,W.M)
s(W.dm,P.i)
s(W.dn,W.M)
s(W.hn,P.i)
s(W.ho,W.M)
s(W.hv,P.i)
s(W.hw,W.M)
s(W.hx,P.i)
s(W.hy,W.M)
s(W.hz,P.i)
s(W.hA,W.M)
s(W.hB,P.i)
s(W.hC,W.M)
s(W.hD,P.i)
s(W.hE,W.M)
s(P.fV,P.i)
s(P.fW,W.M)
s(P.h2,P.i)
s(P.h3,W.M)
s(P.hg,P.i)
s(P.hh,W.M)
s(P.hp,P.i)
s(P.hq,W.M)
s(P.fB,P.U)
s(P.hc,P.i)
s(P.hd,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Y:"double",Q:"num",w:"String",ay:"bool",ap:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([S*])","~(S*)","~(aj*)","ap(@,@)","~(l*,h<by*>*)","~(j*)","~(bG*)","as*(as*)","~(~())","~()","~(bD*)","~(l*,h<T*>*)","Y*()","~(l*,h<V*>*)","~(l*,h<bh*>*)","ay(C,w,w,ce)","@(@)","ap(@)","ap(N?,N?)","bk(@,@)","~(bl*)","ay*(h<T*>*)","as*(as*{color:Z*})","l(@,@)","w(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oN(v.typeUniverse,JSON.parse('{"aC":"bf","eD":"bf","bH":"bf","qo":"j","qy":"j","qq":"b9","qp":"e","qF":"e","qH":"e","qn":"m","qz":"m","qr":"t","qC":"t","qA":"x","qx":"x","r6":"ab","qv":"b0","qs":"az","qI":"az","qG":"aj","qB":"bz","qE":"bE","qD":"W","ed":{"ay":[]},"bf":{"lM":[],"aA":[]},"y":{"n":["1"],"k":["1"],"h":["1"]},"iq":{"y":["1"],"n":["1"],"k":["1"],"h":["1"]},"bC":{"Y":[],"Q":[]},"cA":{"Y":[],"l":[],"Q":[]},"cz":{"Y":[],"Q":[]},"aS":{"w":[]},"eh":{"L":[]},"p":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cH":{"k":["1"],"h":["1"]},"aU":{"h":["2"],"h.E":"2"},"cu":{"aU":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cL":{"cH":["2"],"k":["2"],"h":["2"],"h.E":"2"},"b3":{"h":["1"],"h.E":"1"},"ca":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cp":{"F":["1","2"]},"cq":{"F":["1","2"]},"ex":{"L":[]},"ef":{"L":[]},"fp":{"L":[]},"bv":{"aA":[]},"f5":{"aA":[]},"eZ":{"aA":[]},"bS":{"aA":[]},"eQ":{"L":[]},"B":{"U":["1","2"],"F":["1","2"]},"cE":{"k":["1"],"h":["1"],"h.E":"1"},"ee":{"m0":[]},"c1":{"z":["1"],"W":[]},"bE":{"i":["Y"],"z":["Y"],"n":["Y"],"W":[],"k":["Y"],"h":["Y"],"i.E":"Y"},"cP":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"]},"es":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"et":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"eu":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"ev":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"ew":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"cQ":{"i":["l"],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"c2":{"i":["l"],"bk":[],"z":["l"],"n":["l"],"W":[],"k":["l"],"h":["l"],"i.E":"l"},"fM":{"L":[]},"dq":{"L":[]},"dp":{"cY":[]},"dl":{"h":["1"],"h.E":"1"},"d9":{"dh":["1"],"k":["1"],"h":["1"]},"cy":{"h":["1"]},"cG":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cJ":{"U":["1","2"],"F":["1","2"]},"U":{"F":["1","2"]},"cK":{"F":["1","2"]},"cb":{"F":["1","2"]},"dh":{"k":["1"],"h":["1"]},"Y":{"Q":[]},"dJ":{"L":[]},"ey":{"L":[]},"af":{"L":[]},"c5":{"L":[]},"e9":{"L":[]},"fr":{"L":[]},"fo":{"L":[]},"c8":{"L":[]},"dU":{"L":[]},"eB":{"L":[]},"cV":{"L":[]},"dW":{"L":[]},"l":{"Q":[]},"n":{"k":["1"],"h":["1"]},"bJ":{"fs":[]},"h8":{"fs":[]},"fF":{"fs":[]},"t":{"C":[],"x":[],"e":[]},"dH":{"C":[],"x":[],"e":[]},"dI":{"C":[],"x":[],"e":[]},"bR":{"C":[],"x":[],"e":[]},"bt":{"C":[],"x":[],"e":[]},"bu":{"C":[],"x":[],"e":[]},"az":{"x":[],"e":[]},"bb":{"C":[],"x":[],"e":[]},"cs":{"i":["a8<Q>"],"n":["a8<Q>"],"z":["a8<Q>"],"k":["a8<Q>"],"h":["a8<Q>"],"i.E":"a8<Q>"},"ct":{"a8":["Q"]},"e_":{"i":["w"],"n":["w"],"z":["w"],"k":["w"],"h":["w"],"i.E":"w"},"fC":{"i":["C"],"n":["C"],"k":["C"],"h":["C"],"i.E":"C"},"C":{"x":[],"e":[]},"ai":{"bs":[]},"bW":{"i":["ai"],"n":["ai"],"z":["ai"],"k":["ai"],"h":["ai"],"i.E":"ai"},"e3":{"e":[]},"e5":{"C":[],"x":[],"e":[]},"bz":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"bB":{"C":[],"x":[],"e":[]},"bD":{"j":[]},"bZ":{"e":[]},"ep":{"U":["w","@"],"F":["w","@"]},"eq":{"U":["w","@"],"F":["w","@"]},"er":{"i":["aD"],"n":["aD"],"z":["aD"],"k":["aD"],"h":["aD"],"i.E":"aD"},"aj":{"j":[]},"a1":{"i":["x"],"n":["x"],"k":["x"],"h":["x"],"i.E":"x"},"x":{"e":[]},"cR":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"eF":{"i":["aE"],"n":["aE"],"z":["aE"],"k":["aE"],"h":["aE"],"i.E":"aE"},"eP":{"U":["w","@"],"F":["w","@"]},"eR":{"C":[],"x":[],"e":[]},"at":{"e":[]},"eT":{"i":["at"],"n":["at"],"z":["at"],"e":[],"k":["at"],"h":["at"],"i.E":"at"},"eU":{"i":["aG"],"n":["aG"],"z":["aG"],"k":["aG"],"h":["aG"],"i.E":"aG"},"f_":{"U":["w","w"],"F":["w","w"]},"bj":{"C":[],"x":[],"e":[]},"cX":{"C":[],"x":[],"e":[]},"f3":{"C":[],"x":[],"e":[]},"f4":{"C":[],"x":[],"e":[]},"c9":{"C":[],"x":[],"e":[]},"av":{"e":[]},"ab":{"e":[]},"f7":{"i":["ab"],"n":["ab"],"z":["ab"],"k":["ab"],"h":["ab"],"i.E":"ab"},"f8":{"i":["av"],"n":["av"],"z":["av"],"e":[],"k":["av"],"h":["av"],"i.E":"av"},"bG":{"j":[]},"fd":{"i":["aI"],"n":["aI"],"z":["aI"],"k":["aI"],"h":["aI"],"i.E":"aI"},"b0":{"j":[]},"fv":{"e":[]},"bl":{"aj":[],"j":[]},"cc":{"e":[]},"cd":{"x":[],"e":[]},"fD":{"i":["H"],"n":["H"],"z":["H"],"k":["H"],"h":["H"],"i.E":"H"},"d7":{"a8":["Q"]},"fS":{"i":["aB?"],"n":["aB?"],"z":["aB?"],"k":["aB?"],"h":["aB?"],"i.E":"aB?"},"dc":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"hb":{"i":["aH"],"n":["aH"],"z":["aH"],"k":["aH"],"h":["aH"],"i.E":"aH"},"hi":{"i":["au"],"n":["au"],"z":["au"],"k":["au"],"h":["au"],"i.E":"au"},"fA":{"U":["w","w"],"F":["w","w"]},"fK":{"U":["w","w"],"F":["w","w"]},"ce":{"ak":[]},"cS":{"ak":[]},"di":{"ak":[]},"hk":{"ak":[]},"hj":{"ak":[]},"dr":{"bA":[]},"e4":{"i":["C"],"n":["C"],"k":["C"],"h":["C"],"i.E":"C"},"a8":{"h6":["1"]},"ei":{"i":["aT"],"n":["aT"],"k":["aT"],"h":["aT"],"i.E":"aT"},"ez":{"i":["aX"],"n":["aX"],"k":["aX"],"h":["aX"],"i.E":"aX"},"c6":{"m":[],"C":[],"x":[],"e":[]},"f1":{"i":["w"],"n":["w"],"k":["w"],"h":["w"],"i.E":"w"},"m":{"C":[],"x":[],"e":[]},"fe":{"i":["aZ"],"n":["aZ"],"k":["aZ"],"h":["aZ"],"i.E":"aZ"},"bk":{"n":["l"],"k":["l"],"h":["l"]},"dL":{"U":["w","@"],"F":["w","@"]},"dM":{"e":[]},"b9":{"e":[]},"eA":{"e":[]},"eX":{"i":["F<@,@>"],"n":["F<@,@>"],"k":["F<@,@>"],"h":["F<@,@>"],"i.E":"F<@,@>"},"ag":{"h":["1*"],"ag.T":"1"},"bd":{"S":[]},"be":{"S":[]},"D":{"S":[]},"cI":{"S":[]},"c_":{"S":[]},"c0":{"S":[]},"eJ":{"S":[]},"cZ":{"S":[]},"dN":{"T":[]},"bw":{"T":[]},"cC":{"ag":["T*"],"h":["T*"],"ag.T":"T*"},"eH":{"T":[]},"eV":{"T":[]},"co":{"V":[]},"bX":{"ag":["V*"],"V":[],"h":["V*"],"ag.T":"V*"},"d4":{"V":[]},"d5":{"V":[]},"d6":{"V":[]},"eb":{"c7":[]},"em":{"c7":[]},"dX":{"ba":[]},"e6":{"ba":[]},"e8":{"ba":[]},"eE":{"ba":[]}}'))
H.oM(v.typeUniverse,JSON.parse('{"a6":1,"k":1,"bg":1,"ek":2,"fy":1,"cw":1,"fq":1,"ca":1,"cp":2,"ej":1,"c1":1,"bI":1,"cW":1,"f0":2,"da":1,"cy":1,"cG":1,"cJ":2,"ht":2,"cK":2,"db":1,"du":2,"dS":2,"dV":2,"ec":1,"fN":1,"M":1,"cx":1,"bd":1,"be":1,"D":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",k:"May not create a line with a null end vertex.",e:"May not create a line with a null start vertex.",E:"May not create a line with a start vertex which is not attached to a shape.",T:"May not create a line with vertices attached to different shapes."}
var t=(function rtii(){var s=H.ln
return{D:s("bR"),G:s("bs"),Y:s("bt"),gw:s("k<@>"),h:s("C"),C:s("L"),aD:s("j"),c8:s("ai"),bX:s("bW"),Z:s("aA"),v:s("bA"),fS:s("bB"),Q:s("y<ak>"),s:s("y<w>"),gn:s("y<@>"),t:s("y<l>"),x:s("y<dK*>"),bb:s("y<dN*>"),am:s("y<dO*>"),g0:s("y<dP*>"),b7:s("y<ba*>"),cP:s("y<bw*>"),M:s("y<dZ*>"),k:s("y<bb*>"),b:s("y<e1*>"),aZ:s("y<bY*>"),L:s("y<cD*>"),u:s("y<n<bb*>*>"),B:s("y<iA*>"),h8:s("y<bh*>"),H:s("y<eG*>"),cS:s("y<aF*>"),d1:s("y<eK*>"),af:s("y<eH*>"),du:s("y<eV*>"),gk:s("y<eW*>"),eG:s("y<cW<N*>*>"),i:s("y<w*>"),fG:s("y<f6*>"),bw:s("y<f9*>"),br:s("y<ff*>"),fj:s("y<fg*>"),d6:s("y<d_*>"),dv:s("y<d0*>"),hg:s("y<d1*>"),by:s("y<d2*>"),fF:s("y<d3*>"),j:s("y<fu*>"),m:s("y<Y*>"),V:s("y<l*>"),f:s("y<~(S*)*>"),T:s("cB"),eH:s("lM"),g:s("aC"),aU:s("z<@>"),f5:s("B<w*,bU*>"),h9:s("B<w*,c7*>"),cn:s("B<w*,eY*>"),dO:s("B<w*,w*>"),w:s("B<w*,fc*>"),en:s("B<l*,n<d_*>*>"),bj:s("B<l*,n<d0*>*>"),gr:s("B<l*,n<d2*>*>"),gb:s("B<l*,n<d3*>*>"),J:s("B<l*,fi*>"),E:s("B<l*,ay*>"),a:s("B<l*,l*>"),aH:s("n<@>"),eO:s("F<@,@>"),eM:s("cL<w*,w>"),bK:s("bZ"),bZ:s("cO"),dD:s("W"),bm:s("c2"),P:s("ap"),K:s("N"),I:s("a8<Q>"),fv:s("m0"),ew:s("c6"),N:s("w"),g7:s("m"),bY:s("bj"),aW:s("c9"),aF:s("cY"),gc:s("bk"),ak:s("bH"),U:s("cb<w,w>"),R:s("fs"),gH:s("cd"),ac:s("a1"),cJ:s("ay"),gR:s("Y"),z:s("@"),S:s("l"),aP:s("bU*"),fr:s("bu*"),l:s("by*"),eN:s("bB*"),gj:s("T*"),dn:s("cI*"),hc:s("bh*"),d:s("c_*"),F:s("c0*"),ah:s("V*"),A:s("0&*"),_:s("N*"),X:s("w*"),eB:s("fb*"),eP:s("cZ*"),n:s("fh*"),r:s("fj*"),y:s("fk*"),O:s("fl*"),q:s("d1*"),c:s("fm*"),o:s("fn*"),e:s("l*"),dm:s("~(S*)*"),bG:s("lK<ap>?"),W:s("N?"),p:s("Q")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bt.prototype
C.i=W.bu.prototype
C.R=W.bb.prototype
C.U=J.a.prototype
C.b=J.y.prototype
C.V=J.cz.prototype
C.c=J.cA.prototype
C.j=J.cB.prototype
C.d=J.bC.prototype
C.a=J.aS.prototype
C.W=J.aC.prototype
C.C=J.eD.prototype
C.a3=P.eO.prototype
C.D=W.cX.prototype
C.p=J.bH.prototype
C.E=W.bl.prototype
C.F=W.cc.prototype
C.G=new E.bT("Browser.chrome")
C.r=new E.bT("Browser.firefox")
C.t=new E.bT("Browser.edge")
C.H=new E.bT("Browser.other")
C.a6=new P.hQ()
C.I=new P.hP()
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

C.P=new P.eB()
C.e=new P.jF()
C.Q=new P.jJ()
C.f=new P.k2()
C.n=new P.bx(0)
C.S=new P.bx(5e6)
C.T=new P.ih("element",!1,!1,!1)
C.k=H.c(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.X=H.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.c(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.c(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Y=H.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.c(s([]),t.i)
C.Z=H.c(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.c(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.c(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.c(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.c(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.c(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a_=new H.cq(0,{},C.w,H.ln("cq<w*,w*>"))
C.a0=new E.c3("OperatingSystem.windows")
C.B=new E.c3("OperatingSystem.mac")
C.a1=new E.c3("OperatingSystem.linux")
C.a2=new E.c3("OperatingSystem.other")
C.a4=new P.jG(!1)
C.a5=new P.cf(null,2)})();(function staticFields(){$.mp=null
$.aP=0
$.lD=null
$.lC=null
$.mP=null
$.mN=null
$.mV=null
$.kw=null
$.kB=null
$.lp=null
$.ci=null
$.dz=null
$.dA=null
$.lk=!1
$.aJ=C.f
$.ad=H.c([],H.ln("y<N>"))
$.bc=null
$.kP=null
$.lJ=null
$.lI=null
$.d8=P.kZ(t.N,t.Z)
$.i5=null
$.lQ=null
$.lT=null
$.aY=null
$.m2=null
$.mf=null
$.mi=null
$.mh=null
$.jK=null
$.jL=null
$.jM=null
$.mg=null
$.lS=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qw","n0",function(){return H.q6("_$dart_dartClosure")})
s($,"qJ","n1",function(){return H.b_(H.jq({
toString:function(){return"$receiver$"}}))})
s($,"qK","n2",function(){return H.b_(H.jq({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qL","n3",function(){return H.b_(H.jq(null))})
s($,"qM","n4",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qP","n7",function(){return H.b_(H.jq(void 0))})
s($,"qQ","n8",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qO","n6",function(){return H.b_(H.m9(null))})
s($,"qN","n5",function(){return H.b_(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"qS","na",function(){return H.b_(H.m9(void 0))})
s($,"qR","n9",function(){return H.b_(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"r7","lv",function(){return P.op()})
s($,"qT","nb",function(){return new P.jH().$0()})
s($,"qU","nc",function(){return new P.jI().$0()})
s($,"r8","ng",function(){return new Int8Array(H.ch(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rb","ni",function(){return P.o8("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rr","nj",function(){return P.p7()})
s($,"r9","nh",function(){return P.lO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"r0","nf",function(){return Z.aw(0)})
s($,"qV","nd",function(){return Z.aw(511)})
s($,"r2","aN",function(){return Z.aw(1)})
s($,"r1","aM",function(){return Z.aw(2)})
s($,"qX","aL",function(){return Z.aw(4)})
s($,"r3","br",function(){return Z.aw(8)})
s($,"r4","bP",function(){return Z.aw(16)})
s($,"qY","bO",function(){return Z.aw(32)})
s($,"qZ","dE",function(){return Z.aw(64)})
s($,"r_","ne",function(){return Z.aw(96)})
s($,"r5","cm",function(){return Z.aw(128)})
s($,"qW","bq",function(){return Z.aw(256)})
s($,"qu","n_",function(){return new V.i6()})
s($,"qt","E",function(){return $.n_()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cO,DataView:H.W,ArrayBufferView:H.W,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.es,Int32Array:H.et,Int8Array:H.eu,Uint16Array:H.ev,Uint32Array:H.ew,Uint8ClampedArray:H.cQ,CanvasPixelArray:H.cQ,Uint8Array:H.c2,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.hK,HTMLAnchorElement:W.dH,HTMLAreaElement:W.dI,HTMLBaseElement:W.bR,Blob:W.bs,HTMLBodyElement:W.bt,HTMLCanvasElement:W.bu,CDATASection:W.az,CharacterData:W.az,Comment:W.az,ProcessingInstruction:W.az,Text:W.az,CSSPerspective:W.hU,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.an,CSSKeywordValue:W.an,CSSNumericValue:W.an,CSSPositionValue:W.an,CSSResourceValue:W.an,CSSUnitValue:W.an,CSSURLImageValue:W.an,CSSStyleValue:W.an,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.hW,CSSUnparsedValue:W.hX,DataTransferItemList:W.hY,HTMLDivElement:W.bb,DOMException:W.hZ,ClientRectList:W.cs,DOMRectList:W.cs,DOMRectReadOnly:W.ct,DOMStringList:W.e_,DOMTokenList:W.i_,Element:W.C,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.bW,FileWriter:W.e3,HTMLFormElement:W.e5,Gamepad:W.aB,History:W.ie,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,ImageData:W.bA,HTMLImageElement:W.bB,KeyboardEvent:W.bD,Location:W.ix,MediaList:W.iP,MessagePort:W.bZ,MIDIInputMap:W.ep,MIDIOutputMap:W.eq,MimeType:W.aD,MimeTypeArray:W.er,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.aE,PluginArray:W.eF,RTCStatsReport:W.eP,HTMLSelectElement:W.eR,SourceBuffer:W.at,SourceBufferList:W.eT,SpeechGrammar:W.aG,SpeechGrammarList:W.eU,SpeechRecognitionResult:W.aH,Storage:W.f_,CSSStyleSheet:W.au,StyleSheet:W.au,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,HTMLTableElement:W.cX,HTMLTableRowElement:W.f3,HTMLTableSectionElement:W.f4,HTMLTemplateElement:W.c9,TextTrack:W.av,TextTrackCue:W.ab,VTTCue:W.ab,TextTrackCueList:W.f7,TextTrackList:W.f8,TimeRanges:W.jk,Touch:W.aI,TouchEvent:W.bG,TouchList:W.fd,TrackDefaultList:W.jo,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.jE,VideoTrackList:W.fv,WheelEvent:W.bl,Window:W.cc,DOMWindow:W.cc,Attr:W.cd,CSSRuleList:W.fD,ClientRect:W.d7,DOMRect:W.d7,GamepadList:W.fS,NamedNodeMap:W.dc,MozNamedAttrMap:W.dc,SpeechRecognitionResultList:W.hb,StyleSheetList:W.hi,SVGLength:P.aT,SVGLengthList:P.ei,SVGNumber:P.aX,SVGNumberList:P.ez,SVGPointList:P.iW,SVGScriptElement:P.c6,SVGStringList:P.f1,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aZ,SVGTransformList:P.fe,AudioBuffer:P.hN,AudioParamMap:P.dL,AudioTrackList:P.dM,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.eA,WebGL2RenderingContext:P.eO,SQLResultSetRowList:P.eX})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mT,[])
else N.mT([])})})()
//# sourceMappingURL=test.dart.js.map
