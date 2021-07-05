(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
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
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.ow(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.ox(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ko"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ko"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ko(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=="string")q=a[q]
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={k1:function k1(){},
iz:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mM:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
lu:function(a,b,c){return a},
mp:function(a,b){if(t.e.b(a))return new H.cn(a,b)
return new H.bh(a,b)},
kH:function(){return new P.cW("No element")},
mK:function(a,b){H.ew(a,0,J.b1(a)-1,b)},
ew:function(a,b,c,d){if(c-b<=32)H.mJ(a,b,c,d)
else H.mI(a,b,c,d)},
mJ:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.ha(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.af()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
mI:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.a0(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.a0(a4+a5,2),f=g-j,e=g+j,d=J.ha(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.N(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
q=m
r=l
break}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=q+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
H.ew(a3,a4,r-2,a6)
H.ew(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.N(a6.$2(d.h(a3,r),b),0);)++r
for(;J.N(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}H.ew(a3,r,q,a6)}else H.ew(a3,r,q,a6)},
e1:function e1(a){this.a=a},
O:function O(a){this.a=a},
j:function j(){},
cC:function cC(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bh:function bh(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=null
this.b=a
this.c=b},
bi:function bi(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
cp:function cp(){},
f1:function f1(){},
bV:function bV(){},
bT:function bT(a){this.a=a},
lI:function(a){var s,r=H.lH(a)
if(r!=null)return r
s="minified:"+a
return s},
ok:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
p:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.hd(a)
return s},
cP:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cQ:function(a){return H.ms(a)},
ms:function(a){var s,r,q,p
if(a instanceof P.C)return H.a8(H.c5(a),null)
if(J.bw(a)===C.H||t.o.b(a)){s=C.l(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a8(H.c5(a),null)},
kQ:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mD:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.h8(q))throw H.b(H.h9(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.be(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.h9(q))}return H.kQ(p)},
mC:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.h8(q))throw H.b(H.h9(q))
if(q<0)throw H.b(H.h9(q))
if(q>65535)return H.mD(a)}return H.kQ(a)},
mB:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.be(s,10)|55296)>>>0,s&1023|56320)}throw H.b(P.ay(a,0,1114111,null,null))},
bn:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mA:function(a){var s=H.bn(a).getFullYear()+0
return s},
my:function(a){var s=H.bn(a).getMonth()+1
return s},
mu:function(a){var s=H.bn(a).getDate()+0
return s},
mv:function(a){var s=H.bn(a).getHours()+0
return s},
mx:function(a){var s=H.bn(a).getMinutes()+0
return s},
mz:function(a){var s=H.bn(a).getSeconds()+0
return s},
mw:function(a){var s=H.bn(a).getMilliseconds()+0
return s},
aN:function(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
C.a.au(s,b)
q.b=""
if(c!=null&&c.a!==0)c.w(0,new H.il(q,r,s))
""+q.a
return J.m4(a,new H.hM(C.Q,0,s,r,0))},
mt:function(a,b,c){var s,r,q,p
if(b instanceof Array)s=c==null||c.a===0
else s=!1
if(s){r=b
q=r.length
if(q===0){if(!!a.$0)return a.$0()}else if(q===1){if(!!a.$1)return a.$1(r[0])}else if(q===2){if(!!a.$2)return a.$2(r[0],r[1])}else if(q===3){if(!!a.$3)return a.$3(r[0],r[1],r[2])}else if(q===4){if(!!a.$4)return a.$4(r[0],r[1],r[2],r[3])}else if(q===5)if(!!a.$5)return a.$5(r[0],r[1],r[2],r[3],r[4])
p=a[""+"$"+q]
if(p!=null)return p.apply(a,r)}return H.mr(a,b,c)},
mr:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b instanceof Array?b:P.bL(b,!0),h=i.length,g=a.$R
if(h<g)return H.aN(a,i,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.bw(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return H.aN(a,i,c)
if(h===g)return o.apply(a,i)
return H.aN(a,i,c)}if(q instanceof Array){if(c!=null&&c.a!==0)return H.aN(a,i,c)
if(h>g+q.length)return H.aN(a,i,null)
C.a.au(i,q.slice(h-g))
return o.apply(a,i)}else{if(h>g)return H.aN(a,i,c)
n=Object.keys(q)
if(c==null)for(r=n.length,m=0;m<n.length;n.length===r||(0,H.o)(n),++m){l=q[n[m]]
if(C.o===l)return H.aN(a,i,c)
C.a.l(i,l)}else{for(r=n.length,k=0,m=0;m<n.length;n.length===r||(0,H.o)(n),++m){j=n[m]
if(c.dd(0,j)){++k
C.a.l(i,c.h(0,j))}else{l=q[j]
if(C.o===l)return H.aN(a,i,c)
C.a.l(i,l)}}if(k!==c.a)return H.aN(a,i,c)}return o.apply(a,i)}},
of:function(a){throw H.b(H.h9(a))},
d:function(a,b){if(a==null)J.b1(a)
throw H.b(H.c3(a,b))},
c3:function(a,b){var s,r="index"
if(!H.h8(b))return new P.ao(!0,b,r,null)
s=J.b1(a)
if(b<0||b>=s)return P.H(b,a,r,null,s)
return P.ep(b,r)},
ob:function(a,b,c){if(a>c)return P.ay(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ay(b,a,c,"end",null)
return new P.ao(!0,b,"end",null)},
h9:function(a){return new P.ao(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.eh()
s=new Error()
s.dartException=a
r=H.oy
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oy:function(){return J.hd(this.dartException)},
f:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b6(a))},
aB:function(a){var s,r,q,p,o,n
a=H.lE(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iN(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iO:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
l0:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
k2:function(a,b){var s=b==null,r=s?null:b.method
return new H.e_(a,r,s?null:b.receiver)},
c6:function(a){if(a==null)return new H.ii(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.by(a,a.dartException)
return H.o4(a)},
by:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
o4:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.be(r,16)&8191)===10)switch(q){case 438:return H.by(a,H.k2(H.p(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.p(s)+" (Error "+q+")"
return H.by(a,new H.cO(p,e))}}if(a instanceof TypeError){o=$.lL()
n=$.lM()
m=$.lN()
l=$.lO()
k=$.lR()
j=$.lS()
i=$.lQ()
$.lP()
h=$.lU()
g=$.lT()
f=o.ad(s)
if(f!=null)return H.by(a,H.k2(s,f))
else{f=n.ad(s)
if(f!=null){f.method="call"
return H.by(a,H.k2(s,f))}else{f=m.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=k.ad(s)
if(f==null){f=j.ad(s)
if(f==null){f=i.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=h.ad(s)
if(f==null){f=g.ad(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.by(a,new H.cO(s,f==null?e:f.method))}}return H.by(a,new H.f0(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cV()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.by(a,new P.ao(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cV()
return a},
kp:function(a){var s
if(a==null)return new H.fL(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fL(a)},
od:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
oj:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.e("Unsupported number of arguments for wrapped closure"))},
c2:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oj)
a.$identity=s
return s},
md:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eB().constructor.prototype):Object.create(new H.bB(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ap
if(typeof r!=="number")return r.W()
$.ap=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kB(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.m9(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kB(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
m9:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lz,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.m7:H.m6
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
ma:function(a,b,c,d){var s=H.kA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kB:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mc(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ma(r,!p,s,b)
if(r===0){p=$.ap
if(typeof p!=="number")return p.W()
$.ap=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c9
return new Function(p+(o==null?$.c9=H.hm("self"):o)+";return "+n+"."+H.p(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ap
if(typeof p!=="number")return p.W()
$.ap=p+1
m+=p
p="return function("+m+"){return this."
o=$.c9
return new Function(p+(o==null?$.c9=H.hm("self"):o)+"."+H.p(s)+"("+m+");}")()},
mb:function(a,b,c,d){var s=H.kA,r=H.m8
switch(b?-1:a){case 0:throw H.b(new H.es("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mc:function(a,b){var s,r,q,p,o,n,m,l=$.c9
if(l==null)l=$.c9=H.hm("self")
s=$.kz
if(s==null)s=$.kz=H.hm("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.mb(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.p(r)+"(this."+s+");"
n=$.ap
if(typeof n!=="number")return n.W()
$.ap=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.p(r)+"(this."+s+", "+m+");"
n=$.ap
if(typeof n!=="number")return n.W()
$.ap=n+1
return new Function(o+n+"}")()},
ko:function(a,b,c,d,e,f,g){return H.md(a,b,c,d,!!e,!!f,g)},
m6:function(a,b){return H.fX(v.typeUniverse,H.c5(a.a),b)},
m7:function(a,b){return H.fX(v.typeUniverse,H.c5(a.c),b)},
kA:function(a){return a.a},
m8:function(a){return a.c},
hm:function(a){var s,r,q,p=new H.bB("self","target","receiver","name"),o=J.k0(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.c8("Field name "+a+" not found."))},
ow:function(a){throw H.b(new P.dM(a))},
lx:function(a){return v.getIsolateTag(a)},
ox:function(a){return H.f(new H.e1(a))},
pD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oo:function(a){var s,r,q,p,o,n=$.ly.$1(a),m=$.jG[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jM[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ls.$2(a,n)
if(q!=null){m=$.jG[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jM[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jP(s)
$.jG[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jM[n]=s
return s}if(p==="-"){o=H.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lC(a,s)
if(p==="*")throw H.b(P.l1(n))
if(v.leafTags[n]===true){o=H.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lC(a,s)},
lC:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ks(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jP:function(a){return J.ks(a,!1,null,!!a.$it)},
oq:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jP(s)
else return J.ks(s,c,null,null)},
oh:function(){if(!0===$.kq)return
$.kq=!0
H.oi()},
oi:function(){var s,r,q,p,o,n,m,l
$.jG=Object.create(null)
$.jM=Object.create(null)
H.og()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lD.$1(o)
if(n!=null){m=H.oq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
og:function(){var s,r,q,p,o,n,m=C.y()
m=H.c1(C.z,H.c1(C.A,H.c1(C.m,H.c1(C.m,H.c1(C.B,H.c1(C.C,H.c1(C.D(C.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ly=new H.jJ(p)
$.ls=new H.jK(o)
$.lD=new H.jL(n)},
c1:function(a,b){return a(b)||b},
mm:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(new P.hJ("Illegal RegExp pattern ("+String(n)+")",a))},
lF:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
oc:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lE:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lG:function(a,b,c){var s=H.ou(a,b,c)
return s},
ou:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lE(b),'g'),H.oc(c))},
cg:function cg(a,b){this.a=a
this.$ti=b},
cf:function cf(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hM:function hM(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cO:function cO(a,b){this.a=a
this.b=b},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a){this.a=a},
ii:function ii(a){this.a=a},
fL:function fL(a){this.a=a
this.b=null},
b5:function b5(){},
eG:function eG(){},
eB:function eB(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a){this.a=a},
jj:function jj(){},
Q:function Q(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hO:function hO(a){this.a=a},
hS:function hS(a,b){this.a=a
this.b=b
this.c=null},
aI:function aI(a){this.a=a},
e3:function e3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
hN:function hN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dv:function(a){return a},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.c3(b,a))},
nj:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.ob(a,b,c))
return b},
bk:function bk(){},
bP:function bP(){},
bj:function bj(){},
cL:function cL(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
cM:function cM(){},
ef:function ef(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
kV:function(a,b){var s=b.c
return s==null?b.c=H.kf(a,b.z,!0):s},
kU:function(a,b){var s=b.c
return s==null?b.c=H.dq(a,"kG",[b.z]):s},
kW:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kW(a.z)
return s===11||s===12},
mG:function(a){return a.cy},
lw:function(a){return H.kg(v.typeUniverse,a,!1)},
aX:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.le(a,r,!0)
case 7:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.kf(a,r,!0)
case 8:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.ld(a,r,!0)
case 9:q=b.Q
p=H.dz(a,q,a0,a1)
if(p===q)return b
return H.dq(a,b.z,p)
case 10:o=b.z
n=H.aX(a,o,a0,a1)
m=b.Q
l=H.dz(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kd(a,n,l)
case 11:k=b.z
j=H.aX(a,k,a0,a1)
i=b.Q
h=H.o1(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lc(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dz(a,g,a0,a1)
o=b.z
n=H.aX(a,o,a0,a1)
if(f===g&&n===o)return b
return H.ke(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hg("Attempted to substitute unexpected RTI kind "+c))}},
dz:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aX(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
o2:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aX(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
o1:function(a,b,c,d){var s,r=b.a,q=H.dz(a,r,c,d),p=b.b,o=H.dz(a,p,c,d),n=b.c,m=H.o2(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fo()
s.a=q
s.b=o
s.c=m
return s},
pF:function(a,b){a[v.arrayRti]=b
return a},
o8:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lz(s)
return a.$S()}return null},
lA:function(a,b){var s
if(H.kW(b))if(a instanceof H.b5){s=H.o8(a)
if(s!=null)return s}return H.c5(a)},
c5:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.kk(a)}if(Array.isArray(a))return H.lh(a)
return H.kk(J.bw(a))},
lh:function(a){var s=a[v.arrayRti],r=t.r
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U:function(a){var s=a.$ti
return s!=null?s:H.kk(a)},
kk:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.nq(a,s)},
nq:function(a,b){var s=a instanceof H.b5?a.__proto__.__proto__.constructor:b,r=H.nd(v.typeUniverse,s.name)
b.$ccache=r
return r},
lz:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kg(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
np:function(a){var s,r,q,p=this
if(p===t.K)return H.dw(p,a,H.nu)
if(!H.aE(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dw(p,a,H.nx)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.h8
else if(r===t.i||r===t.H)q=H.nt
else if(r===t.N)q=H.nv
else q=r===t.w?H.jy:null
if(q!=null)return H.dw(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.ol)){p.r="$i"+s
return H.dw(p,a,H.nw)}}else if(s===7)return H.dw(p,a,H.nn)
return H.dw(p,a,H.nl)},
dw:function(a,b,c){a.b=c
return a.b(b)},
no:function(a){var s,r=this,q=H.nk
if(!H.aE(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.nh
else if(r===t.K)q=H.nf
else{s=H.dA(r)
if(s)q=H.nm}r.a=q
return r.a(a)},
kn:function(a){var s,r=a.y
if(!H.aE(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kn(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nl:function(a){var s=this
if(a==null)return H.kn(s)
return H.J(v.typeUniverse,H.lA(a,s),null,s,null)},
nn:function(a){if(a==null)return!0
return this.z.b(a)},
nw:function(a){var s,r=this
if(a==null)return H.kn(r)
s=r.r
if(a instanceof P.C)return!!a[s]
return!!J.bw(a)[s]},
nk:function(a){var s,r=this
if(a==null){s=H.dA(r)
if(s)return a}else if(r.b(a))return a
H.lk(a,r)},
nm:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lk(a,s)},
lk:function(a,b){throw H.b(H.n3(H.l7(a,H.lA(a,b),H.a8(b,null))))},
l7:function(a,b,c){var s=P.bG(a),r=H.a8(b==null?H.c5(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
n3:function(a){return new H.dn("TypeError: "+a)},
a1:function(a,b){return new H.dn("TypeError: "+H.l7(a,null,b))},
nu:function(a){return a!=null},
nf:function(a){if(a!=null)return a
throw H.b(H.a1(a,"Object"))},
nx:function(a){return!0},
nh:function(a){return a},
jy:function(a){return!0===a||!1===a},
li:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a1(a,"bool"))},
pr:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a1(a,"bool"))},
pq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a1(a,"bool?"))},
ps:function(a){if(typeof a=="number")return a
throw H.b(H.a1(a,"double"))},
pu:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a1(a,"double"))},
pt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a1(a,"double?"))},
h8:function(a){return typeof a=="number"&&Math.floor(a)===a},
js:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a1(a,"int"))},
pw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a1(a,"int"))},
pv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a1(a,"int?"))},
nt:function(a){return typeof a=="number"},
px:function(a){if(typeof a=="number")return a
throw H.b(H.a1(a,"num"))},
pz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a1(a,"num"))},
py:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a1(a,"num?"))},
nv:function(a){return typeof a=="string"},
ng:function(a){if(typeof a=="string")return a
throw H.b(H.a1(a,"String"))},
pB:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a1(a,"String"))},
pA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a1(a,"String?"))},
nY:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a8(a[q],b)
return s},
ll:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.c.W(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a8(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a8(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a8(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a8(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a8(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a8:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a8(a.z,b)
return s}if(l===7){r=a.z
s=H.a8(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a8(a.z,b)+">"
if(l===9){p=H.o3(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nY(o,b)+">"):p}if(l===11)return H.ll(a,b,null)
if(l===12)return H.ll(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
o3:function(a){var s,r=H.lH(a)
if(r!=null)return r
s="minified:"+a
return s},
lf:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nd:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kg(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dr(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dq(a,b,q)
n[b]=o
return o}else return m},
nb:function(a,b){return H.lg(a.tR,b)},
na:function(a,b){return H.lg(a.eT,b)},
kg:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lb(H.l9(a,null,b,c))
r.set(b,s)
return s},
fX:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lb(H.l9(a,b,c,!0))
q.set(c,r)
return r},
nc:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kd(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aW:function(a,b){b.a=H.no
b.b=H.np
return b},
dr:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aW(a,s)
a.eC.set(c,r)
return r},
le:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.n8(a,b,r,c)
a.eC.set(r,s)
return s},
n8:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aW(a,q)},
kf:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.n7(a,b,r,c)
a.eC.set(r,s)
return s},
n7:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aE(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dA(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dA(q.z))return q
else return H.kV(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aW(a,p)},
ld:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.n5(a,b,r,c)
a.eC.set(r,s)
return s},
n5:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dq(a,"kG",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aW(a,q)},
n9:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aW(a,s)
a.eC.set(q,r)
return r},
fW:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
n4:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dq:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aW(a,r)
a.eC.set(p,q)
return q},
kd:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aW(a,o)
a.eC.set(q,n)
return n},
lc:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fW(m)
if(j>0){s=l>0?",":""
r=H.fW(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.n4(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aW(a,o)
a.eC.set(q,r)
return r},
ke:function(a,b,c,d){var s,r=b.cy+("<"+H.fW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.n6(a,b,c,r,d)
a.eC.set(r,s)
return s},
n6:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aX(a,b,r,0)
m=H.dz(a,c,r,0)
return H.ke(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aW(a,l)},
l9:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lb:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mY(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.la(a,r,h,g,!1)
else if(q===46)r=H.la(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aV(a.u,a.e,g.pop()))
break
case 94:g.push(H.n9(a.u,g.pop()))
break
case 35:g.push(H.dr(a.u,5,"#"))
break
case 64:g.push(H.dr(a.u,2,"@"))
break
case 126:g.push(H.dr(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kc(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dq(p,n,o))
else{m=H.aV(p,a.e,n)
switch(m.y){case 11:g.push(H.ke(p,m,o,a.n))
break
default:g.push(H.kd(p,m,o))
break}}break
case 38:H.mZ(a,g)
break
case 42:p=a.u
g.push(H.le(p,H.aV(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kf(p,H.aV(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.ld(p,H.aV(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fo()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.kc(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.lc(p,H.aV(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kc(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.n0(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aV(a.u,a.e,i)},
mY:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
la:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lf(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mG(o)+'"')
d.push(H.fX(s,o,n))}else d.push(p)
return m},
mZ:function(a,b){var s=b.pop()
if(0===s){b.push(H.dr(a.u,1,"0&"))
return}if(1===s){b.push(H.dr(a.u,4,"1&"))
return}throw H.b(P.hg("Unexpected extended operation "+H.p(s)))},
aV:function(a,b,c){if(typeof c=="string")return H.dq(a,c,a.sEA)
else if(typeof c=="number")return H.n_(a,b,c)
else return c},
kc:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aV(a,b,c[s])},
n0:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aV(a,b,c[s])},
n_:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hg("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hg("Bad index "+c+" for "+b.i(0)))},
J:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aE(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aE(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.J(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.J(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.J(a,b.z,c,d,e)
if(r===6)return H.J(a,b.z,c,d,e)
return r!==7}if(r===6)return H.J(a,b.z,c,d,e)
if(p===6){s=H.kV(a,d)
return H.J(a,b,c,s,e)}if(r===8){if(!H.J(a,b.z,c,d,e))return!1
return H.J(a,H.kU(a,b),c,d,e)}if(r===7){s=H.J(a,t.P,c,d,e)
return s&&H.J(a,b.z,c,d,e)}if(p===8){if(H.J(a,b,c,d.z,e))return!0
return H.J(a,b,c,H.kU(a,d),e)}if(p===7){s=H.J(a,b,c,t.P,e)
return s||H.J(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.M)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.J(a,k,c,j,e)||!H.J(a,j,e,k,c))return!1}return H.lo(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.lo(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.ns(a,b,c,d,e)}return!1},
lo:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.J(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.J(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.J(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.J(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.J(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ns:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.J(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lf(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.J(a,H.fX(a,b,l[p]),c,r[p],e))return!1
return!0},
dA:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aE(a))if(r!==7)if(!(r===6&&H.dA(a.z)))s=r===8&&H.dA(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ol:function(a){var s
if(!H.aE(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aE:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lg:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fo:function fo(){this.c=this.b=this.a=null},
fj:function fj(){},
dn:function dn(a){this.a=a},
lB:function(a){return t.d.b(a)||t.B.b(a)||t.u.b(a)||t.I.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
lH:function(a){return v.mangledGlobalNames[a]},
or:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ks:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jI:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kq==null){H.oh()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.l1("Return interceptor for "+H.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jg
if(o==null)o=$.jg=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.oo(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){o=$.jg
if(o==null)o=$.jg=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
mj:function(a){if(a<0||a>4294967295)throw H.b(P.ay(a,0,4294967295,"length",null))
return J.mk(new Array(a))},
k_:function(a){if(a<0)throw H.b(P.c8("Length must be a non-negative integer: "+a))
return new Array(a)},
mk:function(a){return J.k0(a)},
k0:function(a){a.fixed$length=Array
return a},
ml:function(a,b){return J.m1(a,b)},
bw:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cu.prototype
return J.dY.prototype}if(typeof a=="string")return J.bb.prototype
if(a==null)return J.cv.prototype
if(typeof a=="boolean")return J.dX.prototype
if(a.constructor==Array)return J.ai.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.C)return a
return J.jI(a)},
ha:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(a.constructor==Array)return J.ai.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.C)return a
return J.jI(a)},
jH:function(a){if(a==null)return a
if(a.constructor==Array)return J.ai.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.C)return a
return J.jI(a)},
oe:function(a){if(typeof a=="number")return J.bK.prototype
if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bU.prototype
return a},
bx:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.C)return a
return J.jI(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bw(a).m(a,b)},
lZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ok(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ha(a).h(a,b)},
m_:function(a,b,c){return J.bx(a).ft(a,b,c)},
m0:function(a,b,c,d){return J.bx(a).fN(a,b,c,d)},
m1:function(a,b){return J.oe(a).ab(a,b)},
hc:function(a,b){return J.jH(a).C(a,b)},
jU:function(a,b){return J.jH(a).w(a,b)},
ky:function(a){return J.bx(a).gd9(a)},
m2:function(a){return J.bx(a).gde(a)},
dD:function(a){return J.bw(a).gB(a)},
an:function(a){return J.jH(a).gL(a)},
b1:function(a){return J.ha(a).gj(a)},
m3:function(a,b){return J.jH(a).dC(a,b)},
m4:function(a,b){return J.bw(a).dG(a,b)},
m5:function(a,b){return J.bx(a).ho(a,b)},
hd:function(a){return J.bw(a).i(a)},
a:function a(){},
dX:function dX(){},
cv:function cv(){},
bc:function bc(){},
em:function em(){},
bU:function bU(){},
au:function au(){},
ai:function ai(){},
dZ:function dZ(){},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bK:function bK(){},
cu:function cu(){},
dY:function dY(){},
bb:function bb(){}},P={
mR:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.o5()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c2(new P.jc(q),1)).observe(s,{childList:true})
return new P.jb(q,s,r)}else if(self.setImmediate!=null)return P.o6()
return P.o7()},
mS:function(a){self.scheduleImmediate(H.c2(new P.jd(a),0))},
mT:function(a){self.setImmediate(H.c2(new P.je(a),0))},
mU:function(a){P.k6(C.h,a)},
k6:function(a,b){var s=C.b.a0(a.a,1000)
return P.n1(s<0?0:s,b)},
l_:function(a,b){var s=C.b.a0(a.a,1000)
return P.n2(s<0?0:s,b)},
n1:function(a,b){var s=new P.dm()
s.e6(a,b)
return s},
n2:function(a,b){var s=new P.dm()
s.e7(a,b)
return s},
po:function(a){return new P.bY(a,1)},
mV:function(){return C.R},
mW:function(a){return new P.bY(a,3)},
nz:function(a){return new P.dj(a)},
nV:function(){var s,r
for(s=$.c0;s!=null;s=$.c0){$.dy=null
r=s.b
$.c0=r
if(r==null)$.dx=null
s.a.$0()}},
o0:function(){$.kl=!0
try{P.nV()}finally{$.dy=null
$.kl=!1
if($.c0!=null)$.kv().$1(P.lt())}},
nZ:function(a){var s=new P.f8(a),r=$.dx
if(r==null){$.c0=$.dx=s
if(!$.kl)$.kv().$1(P.lt())}else $.dx=r.b=s},
o_:function(a){var s,r,q,p=$.c0
if(p==null){P.nZ(a)
$.dy=$.dx
return}s=new P.f8(a)
r=$.dy
if(r==null){s.b=p
$.c0=$.dy=s}else{q=r.b
s.b=q
$.dy=r.b=s
if(q==null)$.dx=s}},
kZ:function(a,b){var s=$.al
if(s===C.e)return P.k6(a,b)
return P.k6(a,s.fR(b))},
mO:function(a,b){var s=$.al
if(s===C.e)return P.l_(a,b)
return P.l_(a,s.d6(b,t.ae))},
lp:function(a,b,c,d,e){P.o_(new P.jB(d,e))},
nW:function(a,b,c,d){var s,r=$.al
if(r===c)return d.$0()
$.al=c
s=r
try{r=d.$0()
return r}finally{$.al=s}},
nX:function(a,b,c,d,e){var s,r=$.al
if(r===c)return d.$1(e)
$.al=c
s=r
try{r=d.$1(e)
return r}finally{$.al=s}},
jc:function jc(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
dm:function dm(){this.c=0},
jo:function jo(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b){this.a=a
this.b=b},
c_:function c_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dj:function dj(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
eD:function eD(){},
eE:function eE(){},
jq:function jq(){},
jB:function jB(a,b){this.a=a
this.b=b},
jk:function jk(){},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
mn:function(a,b,c){return H.od(a,new H.Q(b.ag("@<0>").cE(c).ag("Q<1,2>")))},
R:function(a,b){return new H.Q(a.ag("@<0>").cE(b).ag("Q<1,2>"))},
kJ:function(a){return new P.d8(a.ag("d8<0>"))},
kb:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mX:function(a,b){var s=new P.d9(a,b)
s.c=a.e
return s},
mi:function(a,b,c){var s,r
if(P.km(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a4.push(a)
try{P.ny(a,s)}finally{if(0>=$.a4.length)return H.d($.a4,-1)
$.a4.pop()}r=P.kX(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jZ:function(a,b,c){var s,r
if(P.km(a))return b+"..."+c
s=new P.aQ(b)
$.a4.push(a)
try{r=s
r.a=P.kX(r.a,a,", ")}finally{if(0>=$.a4.length)return H.d($.a4,-1)
$.a4.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
km:function(a){var s,r
for(s=$.a4.length,r=0;r<s;++r)if(a===$.a4[r])return!0
return!1},
ny:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.p(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.q()){if(j<=4){b.push(H.p(p))
return}r=H.p(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.q();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.p(p)
r=H.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
hW:function(a){var s,r={}
if(P.km(a))return"{...}"
s=new P.aQ("")
try{$.a4.push(a)
s.a+="{"
r.a=!0
J.jU(a,new P.hX(r,s))
s.a+="}"}finally{if(0>=$.a4.length)return H.d($.a4,-1)
$.a4.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d8:function d8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
d9:function d9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ct:function ct(){},
cB:function cB(){},
B:function B(){},
cE:function cE(){},
hX:function hX(a,b){this.a=a
this.b=b},
V:function V(){},
fY:function fY(){},
cF:function cF(){},
d_:function d_(){},
eu:function eu(){},
dg:function dg(){},
da:function da(){},
ds:function ds(){},
dt:function dt(){},
dJ:function dJ(){},
dL:function dL(){},
hB:function hB(){},
iZ:function iZ(){},
j_:function j_(){},
jp:function jp(a){this.b=0
this.c=a},
mh:function(a){if(a instanceof H.b5)return a.i(0)
return"Instance of '"+H.cQ(a)+"'"},
hT:function(a,b,c){var s,r=c?J.k_(a):J.mj(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bL:function(a,b){var s,r=[]
for(s=J.an(a);s.q();)r.push(s.gD(s))
if(b)return r
return J.k0(r)},
mo:function(a,b){var s,r,q=J.k_(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
k5:function(a){var s=a,r=s.length,q=P.k3(0,null,r)
return H.mC(q<r?s.slice(0,q):s)},
mE:function(a){return new H.hN(a,H.mm(a,!1,!0,!1,!1,!1))},
kX:function(a,b,c){var s=J.an(b)
if(!s.q())return a
if(c.length===0){do a+=H.p(s.gD(s))
while(s.q())}else{a+=H.p(s.gD(s))
for(;s.q();)a=a+c+H.p(s.gD(s))}return a},
kN:function(a,b,c,d){return new P.eg(a,b,c,d)},
ne:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.n){s=$.lY().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.fW(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.mB(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
me:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dN:function(a){if(a>=10)return""+a
return"0"+a},
kD:function(a){return new P.b8(1000*a)},
bG:function(a){if(typeof a=="number"||H.jy(a)||null==a)return J.hd(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mh(a)},
hg:function(a){return new P.dG(a)},
c8:function(a){return new P.ao(!1,null,null,a)},
ep:function(a,b){return new P.cR(null,null,!0,a,b,"Value not in range")},
ay:function(a,b,c,d,e){return new P.cR(b,c,!0,a,d,"Invalid value")},
k3:function(a,b,c){if(a>c)throw H.b(P.ay(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.ay(b,a,c,"end",null))
return b}return c},
kR:function(a,b){if(a<0)throw H.b(P.ay(a,0,null,b,null))
return a},
H:function(a,b,c,d,e){var s=e==null?J.b1(b):e
return new P.dV(s,!0,a,c,"Index out of range")},
v:function(a){return new P.f2(a)},
l1:function(a){return new P.f_(a)},
mL:function(a){return new P.cW(a)},
b6:function(a){return new P.dK(a)},
e:function(a){return new P.fl(a)},
ku:function(a){H.or(a)},
ig:function ig(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a},
hy:function hy(){},
hz:function hz(){},
D:function D(){},
dG:function dG(a){this.a=a},
eO:function eO(){},
eh:function eh(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cR:function cR(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dV:function dV(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a){this.a=a},
f_:function f_(a){this.a=a},
cW:function cW(a){this.a=a},
dK:function dK(a){this.a=a},
ek:function ek(){},
cV:function cV(){},
dM:function dM(a){this.a=a},
fl:function fl(a){this.a=a},
hJ:function hJ(a,b){this.a=a
this.b=b},
h:function h(){},
dW:function dW(){},
ab:function ab(){},
C:function C(){},
aQ:function aQ(a){this.a=a},
oa:function(a){var s,r,q,p
if(t.I.b(a)){s=J.m2(a)
r=s.constructor===Array
r.toString
if(r){r=typeof CanvasPixelArray!=="undefined"
r.toString
if(r){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}}return a}r=a.data
r.toString
q=a.height
q.toString
p=a.width
p.toString
return new P.dp(r,q,p)},
o9:function(a){if(a instanceof P.dp)return{data:a.a,height:a.b,width:a.c}
return a},
aY:function(a){var s,r,q,p,o
if(a==null)return null
s=P.R(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
lj:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jy(a))return a
if(t.f.b(a))return P.lv(a)
if(t.cK.b(a)){s=[]
J.jU(a,new P.jt(s))
a=s}return a},
lv:function(a){var s={}
J.jU(a,new P.jF(s))
return s},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a){this.a=a},
jF:function jF(a){this.a=a},
dR:function dR(a,b){this.a=a
this.b=b},
hH:function hH(){},
hI:function hI(){},
cy:function cy(){},
ni:function(a,b,c,d){var s,r
if(b){s=[c]
C.a.au(s,d)
d=s}r=P.bL(J.m3(d,P.om()),!0)
return P.ju(H.mt(a,r,null))},
kI:function(a){return P.lq(P.ju(a))},
ki:function(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){H.c6(s)}return!1},
ln:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
ju:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.jy(a))return a
if(a instanceof P.av)return a.a
if(H.lB(a))return a
if(t.Q.b(a))return a
if(a instanceof P.P)return H.bn(a)
if(t.Y.b(a))return P.lm(a,"$dart_jsFunction",new P.jv())
return P.lm(a,"_$dart_jsObject",new P.jw($.kx()))},
lm:function(a,b,c){var s=P.ln(a,b)
if(s==null){s=c.$1(a)
P.ki(a,b,s)}return s},
kh:function(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.lB(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)H.f(P.c8("DateTime is outside valid range: "+H.p(s)))
H.lu(!1,"isUtc",t.w)
return new P.P(s,!1)}else if(a.constructor===$.kx())return a.o
else return P.lq(a)},
lq:function(a){if(typeof a=="function")return P.kj(a,$.jT(),new P.jC())
if(a instanceof Array)return P.kj(a,$.kw(),new P.jD())
return P.kj(a,$.kw(),new P.jE())},
kj:function(a,b,c){var s=P.ln(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
P.ki(a,b,s)}return s},
jv:function jv(){},
jw:function jw(a){this.a=a},
jC:function jC(){},
jD:function jD(){},
jE:function jE(){},
av:function av(a){this.a=a},
cw:function cw(a){this.a=a},
bd:function bd(a){this.a=a},
bZ:function bZ(){},
fE:function fE(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
e2:function e2(){},
bl:function bl(){},
ei:function ei(){},
ik:function ik(){},
eF:function eF(){},
k:function k(){},
bs:function bs(){},
eN:function eN(){},
fs:function fs(){},
ft:function ft(){},
fA:function fA(){},
fB:function fB(){},
fN:function fN(){},
fO:function fO(){},
fU:function fU(){},
fV:function fV(){},
hj:function hj(){},
dH:function dH(){},
hk:function hk(a){this.a=a},
dI:function dI(){},
aF:function aF(){},
ej:function ej(){},
f9:function f9(){},
bR:function bR(){},
ez:function ez(){},
fJ:function fJ(){},
fK:function fK(){}},W={
jV:function(){var s=document.createElement("canvas")
s.toString
return s},
hA:function(a){return"wheel"},
jh:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l8:function(a,b,c,d){var s=W.jh(W.jh(W.jh(W.jh(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
X:function(a,b,c,d){var s=W.lr(new W.jf(c),t.B)
if(s!=null&&!0)J.m0(a,b,s,!1)
return new W.fk(a,b,s,!1)},
lr:function(a,b){var s=$.al
if(s===C.e)return a
return s.d6(a,b)},
m:function m(){},
he:function he(){},
dE:function dE(){},
dF:function dF(){},
b3:function b3(){},
b4:function b4(){},
cc:function cc(){},
ag:function ag(){},
hr:function hr(){},
E:function E(){},
cj:function cj(){},
hs:function hs(){},
aa:function aa(){},
aq:function aq(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
cl:function cl(){},
cm:function cm(){},
dO:function dO(){},
hx:function hx(){},
fb:function fb(a,b){this.a=a
this.b=b},
G:function G(){},
i:function i(){},
c:function c(){},
ar:function ar(){},
dP:function dP(){},
dQ:function dQ(){},
dS:function dS(){},
aH:function aH(){},
hK:function hK(){},
b9:function b9(){},
ba:function ba(){},
bJ:function bJ(){},
be:function be(){},
hU:function hU(){},
ib:function ib(){},
e7:function e7(){},
ic:function ic(a){this.a=a},
e8:function e8(){},
id:function id(a){this.a=a},
aJ:function aJ(){},
e9:function e9(){},
a6:function a6(){},
fa:function fa(a){this.a=a},
r:function r(){},
cN:function cN(){},
aL:function aL(){},
en:function en(){},
er:function er(){},
ir:function ir(a){this.a=a},
et:function et(){},
az:function az(){},
ex:function ex(){},
aO:function aO(){},
ey:function ey(){},
aP:function aP(){},
eC:function eC(){},
iy:function iy(a){this.a=a},
aj:function aj(){},
aR:function aR(){},
aA:function aA(){},
ad:function ad(){},
eH:function eH(){},
eI:function eI(){},
iH:function iH(){},
aS:function aS(){},
br:function br(){},
eM:function eM(){},
iL:function iL(){},
aC:function aC(){},
iY:function iY(){},
f4:function f4(){},
aT:function aT(){},
aU:function aU(){},
ak:function ak(){},
fc:function fc(){},
d7:function d7(){},
fp:function fp(){},
db:function db(){},
fI:function fI(){},
fP:function fP(){},
jX:function jX(a,b){this.a=a
this.$ti=b},
fk:function fk(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jf:function jf(a){this.a=a},
ka:function ka(a){this.$ti=a},
F:function F(){},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fm:function fm(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fC:function fC(){},
fD:function fD(){},
fF:function fF(){},
dh:function dh(){},
di:function di(){},
fG:function fG(){},
fH:function fH(){},
fM:function fM(){},
fQ:function fQ(){},
fR:function fR(){},
dk:function dk(){},
dl:function dl(){},
fS:function fS(){},
fT:function fT(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){}},K={hf:function hf(){},dU:function dU(){},aK:function aK(a){this.a=a},T:function T(a){this.a=a}},L={eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},eL:function eL(a,b){this.b=a
this.c=b},iJ:function iJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},iM:function iM(a,b){this.b=a
this.c=!1
this.a=b}},O={
jW:function(){return new O.bE([])},
bE:function bE(a){this.a=a
this.c=this.b=null},
cK:function cK(a){this.a=a
this.b=null},
e6:function(a,b){return new O.cI(new V.K(0,0,0),a,b,new A.a9(!1,!1,!1))},
e4:function e4(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=null},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(){},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(){},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(){},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(){},
hY:function hY(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
e5:function e5(){},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
i0:function i0(a){this.b=a},
i1:function i1(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
i2:function i2(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
ev:function ev(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
iB:function iB(){},
op:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.mH("Test 046"),b0=W.jV()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0).toString
a9.fM(["buttons"])
a9.d0(["Test of the fullscreen function of the ThreeDart. ","Use the above button and press escape to exit ","or use the spacebar to toggle fullscreen."])
a9.d0(["\xab[Back to Tests|../]"])
a9=document
s=a9.getElementById(a5)
if(s==null)H.f(P.e("Failed to find an element with the identifier, testCanvas."))
r=E.mN(s,!0,!0,!0,!1)
q=X.jY(a6)
q.sda(0,!1)
p=E.kE()
p.sbo(0,F.ot())
o=r.f
n=o.a
m=n.createTexture()
m.toString
n.bindTexture(a7,m)
n.texParameteri(a7,10242,10497)
n.texParameteri(a7,10243,10497)
n.texParameteri(a7,10241,9729)
n.texParameteri(a7,10240,9729)
n.bindTexture(a7,a6)
l=new T.iD(m)
o.aJ(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aJ(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aJ(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aJ(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aJ(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aJ(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=O.jW()
k=new O.e4(m)
m.aR(k.geC(),k.geE())
m=k.gdB()
m.gn().l(0,k.gcR())
o=k.gbd()
m.gdA().l(0,o)
m=k.gdB()
j=V.k8()
n=U.kC(V.kL(V.kP(),j,new V.x(-1,-1,-1)))
i=new V.K(1,1,1)
h=new D.ck(new V.K(1,1,1),V.l4(),V.k8(),V.mQ())
g=h.a
h.a=n
n.gn().l(0,h.ge4())
h.ap(new D.w("mover",g,h.a))
if(!h.b.m(0,i)){g=h.b
h.b=i
h.ap(new D.w("color",g,i))}m.l(0,h)
n=k.gd2()
n.sal(0,new V.K(0.1,0.1,0.1))
n=k.gdf()
n.sal(0,new V.K(0.1,0.1,0.1))
n=k.gbp()
n.sal(0,new V.K(1,1,1))
n=k.gbp()
n.bL(new A.a9(!0,!1,!1))
n.cW(10)
n=k.ch
if(n!==l){if(n!=null)n.gn().E(0,o)
g=k.ch
k.ch=l
l.gn().l(0,o)
k.X(new D.w("environment",g,k.ch))}o=k.gci()
o.bL(new A.a9(!0,!1,!1))
o.cV(0.6)
o=k.gci()
o.sal(0,new V.K(1,1,1))
o=k.gdM()
o.sal(0,new V.K(0.6,0.6,0.6))
f=new U.bI(V.a5(),[])
f.aR(f.gey(),f.gfb())
o=r.x
n=U.hq()
m=U.hq()
i=$.bt
if(i==null)i=$.bt=new V.Y(0,0)
i=new U.d1(n,m,new X.Z(!1,!1,!1),i,V.a5())
n.scp(0,!0)
n.sca(6.283185307179586)
n.scd(0)
n.sa_(0,0)
n.scb(100)
n.sV(0)
n.sbW(0.5)
h=i.gaG()
n.gn().l(0,h)
m.scp(0,!0)
m.sca(6.283185307179586)
m.scd(0)
m.sa_(0,0)
m.scb(100)
m.sV(0)
m.sbW(0.5)
m.gn().l(0,h)
n=new X.Z(!1,!1,!1)
if(!i.d.m(0,n)){g=i.d
i.d=n
i.J(new D.w(a8,g,n))}i.b_(o)
f.l(0,i)
U.hq()
if($.bt==null)$.bt=new V.Y(0,0)
V.a5()
n=U.hq()
m=$.bt
if(m==null)m=$.bt=new V.Y(0,0)
m=new U.d0(n,new X.Z(!1,!1,!1),m,V.a5())
n.scp(0,!0)
n.sca(6.283185307179586)
n.scd(0)
n.sa_(0,0)
n.scb(100)
n.sV(0)
n.sbW(0.2)
n.gn().l(0,m.gaG())
n=new X.Z(!0,!1,!1)
if(!m.c.m(0,n)){g=m.c
m.c=n
m.J(new D.w(a8,g,n))}m.b_(o)
f.l(0,m)
n=new X.Z(!1,!1,!1)
m=new U.d2(n,V.a5())
i=new X.Z(!1,!1,!1)
if(!n.m(0,i)){m.b=i
m.J(new D.w(a8,n,i))}m.b_(o)
f.l(0,m)
f.l(0,U.kC(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.kO(f)
n=E.kE()
d=new M.ci(n)
c=F.k4()
m=c.gO()
i=new V.x(-1,-1,1).F()
b=m.bg(new V.aM(1,2,4,6),V.ho(255,0,0),new V.W(-1,-1,0),new V.S(0,1),i,a6)
i=c.gO()
m=new V.x(1,-1,1).F()
a=i.bg(new V.aM(0,3,4,6),V.ho(0,0,255),new V.W(1,-1,0),new V.S(1,1),m,a6)
m=c.gO()
i=new V.x(1,1,1).F()
a0=m.bg(new V.aM(0,2,5,6),V.ho(0,128,0),new V.W(1,1,0),new V.S(1,0),i,a6)
i=c.gO()
m=$.a0
if(m==null)m=$.a0=new V.S(0,0)
h=new V.x(-1,1,1).F()
a1=i.bg(new V.aM(0,2,4,7),V.ho(255,255,0),new V.W(-1,1,0),m,h,a6)
c.gK().fO([b,a,a0,a1])
c.av()
n.sbo(0,c)
d.sb0(a6)
d.sb8(0,a6)
d.sb9(a6)
n=new O.ev(new V.K(1,1,1))
g=n.c
n.c=l
l.gn().l(0,n.gbd())
n.X(new D.w("boxTexture",g,n.c))
d.sb9(n)
d.sb8(0,q)
d.sb0(e)
n=O.jW()
a2=new M.co(n)
n.aR(a2.geI(),a2.geK())
a3=X.jY(a6)
a2.sb0(a6)
a2.sb8(0,a3)
a2.sb9(a6)
a2.sb0(e)
a2.sb9(k)
a2.sb8(0,q)
n.l(0,p)
t.l.a(a2.c).sda(0,!1)
n=new M.cd([])
n.aR(n.gff(),n.gfh())
n.au(0,[d,a2])
m=r.d
if(m!==n){if(m!=null)m.gn().E(0,r.gcA())
r.d=n
n.gn().l(0,r.gcA())
r.cB()}s=a9.getElementById("buttons")
a4=a9.createElement("button")
a4.textContent="Fullscreen"
W.X(a4,"click",new O.jN(r),!1)
if(s!=null)J.ky(s).l(0,a4)
a9=o.gay(o)
o=a9.a
a9=o==null?a9.a=D.A():o
a9.l(0,new O.jO(r))
V.os(r)},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a}},E={
kE:function(){var s=O.jW(),r=new E.bF(s)
s.aR(r.gh9(),r.ghc())
r.sbo(0,null)
return r},
kF:function(a,b){var s,r,q,p=P.kI(a)
for(s=p.a,r=0;r<5;++r){q=b[r]
if(q in s){p.fT(q,null)
return!0}}return!1},
mg:function(a,b,c){var s,r,q,p=P.kI(a)
for(s=p.a,r=0;r<5;++r){q=b[r]
if(q in s)return c.ag("0?").a(p.h(0,q))}return null},
l5:function(){var s=window.navigator.vendor
s.toString
if(C.c.I(s,"Google"))return C.w
s=window.navigator.userAgent
s.toString
if(C.c.I(s,"Firefox"))return C.j
s=window.navigator.appVersion
s.toString
if(C.c.I(s,"Trident")||C.c.I(s,"Edge"))return C.k
s=window.navigator.appName
s.toString
if(C.c.I(s,"Microsoft"))return C.k
return C.x},
l6:function(){var s=window.navigator.appVersion
s.toString
if(C.c.I(s,"Win"))return C.M
if(C.c.I(s,"Mac"))return C.r
if(C.c.I(s,"Linux"))return C.N
return C.O},
mF:function(a,b){var s
Date.now()
s=new E.im(a,new P.P(Date.now(),!1),new P.P(Date.now(),!1),new O.cK([]),new O.cK([]),new O.cK([]),[null],P.R(t.N,t.k))
s.e3(a,b)
return s},
mN:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kY(a,!0,!0,!0,!1)
s=W.jV()
r=s.style
r.width="100%"
r.height="100%"
J.ky(a).l(0,s)
return E.kY(s,!0,!0,!0,!1)},
kY:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.f.cq(a,"webgl2",P.mn(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.b(P.e("Failed to get the rendering context for WebGL."))
s=E.mF(l,a)
H.js(l.getParameter(3379))
m=H.js(l.getParameter(34076))
r=[]
q=$.hC
p=new X.f3(a,r,(q==null?$.hC=new E.fi(E.l5(),E.l6()):q).a===C.j?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.X(o,"contextmenu",p.geM(),!1))
r.push(W.X(a,"focus",p.geS(),!1))
r.push(W.X(a,"blur",p.geG(),!1))
r.push(W.X(o,"keyup",p.geW(),!1))
r.push(W.X(o,"keydown",p.geU(),!1))
r.push(W.X(a,"mousedown",p.gf_(),!1))
r.push(W.X(a,"mouseup",p.gf3(),!1))
r.push(W.X(a,n,p.gf1(),!1))
W.hA(a)
W.hA(a)
r.push(W.X(a,W.hA(a),p.gf5(),!1))
r.push(W.X(o,n,p.geO(),!1))
r.push(W.X(o,"mouseup",p.geQ(),!1))
r.push(W.X(o,"pointerlockchange",p.gf7(),!1))
r.push(W.X(a,"touchstart",p.gfn(),!1))
r.push(W.X(a,"touchend",p.gfj(),!1))
r.push(W.X(a,"touchmove",p.gfl(),!1))
m=new E.eJ(a,s,new T.iE(l,m),p,new P.P(Date.now(),!1))
m.cT()
return m},
hl:function hl(){},
bF:function bF(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bC:function bC(a){this.b=a},
bQ:function bQ(a){this.b=a},
fi:function fi(a,b){this.a=a
this.b=b},
im:function im(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.y=0
_.cx=_.ch=_.Q=_.z=null
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
eJ:function eJ(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
iG:function iG(a){this.a=a}},Z={
k9:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.dv(c)),35044)
a.bindBuffer(b,null)
return new Z.f5(b,s)},
af:function(a){return new Z.bu(a)},
f5:function f5(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
f6:function f6(a){this.a=a},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a){this.a=a}},D={
A:function(){return new D.bH()},
hn:function hn(){},
bH:function bH(){var _=this
_.c=_.b=_.a=null
_.d=0},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
L:function L(){},
as:function as(){},
at:function at(){},
w:function w(a,b,c){this.c=a
this.d=b
this.e=c},
ck:function ck(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cA:function cA(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cb:function cb(a,b){this.a=a
this.b=b},e0:function e0(a,b){this.a=a
this.b=b},cx:function cx(a){this.c=a},hP:function hP(a,b){this.a=null
this.c=a
this.d=b},cD:function cD(a,b,c){this.x=a
this.c=b
this.d=c},hV:function hV(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},bN:function bN(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},ie:function ie(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bO:function bO(a,b,c){this.x=a
this.c=b
this.d=c},eo:function eo(){},cY:function cY(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},f3:function f3(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
jY:function(a){var s=new V.aG(0,0,0,1),r=$.kT
if(r==null){r=V.kS(0,0,1,1)
$.kT=r}return new X.dT(s,r)},
kO:function(a){var s,r,q=new X.el(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gn().l(0,q.ge8())
q.ak(new D.w("mover",s,q.b))}r=q.c
$.y().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.ak(new D.w("fov",r,1.0471975511965976))}r=q.d
$.y().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.ak(new D.w("near",r,0.1))}r=q.e
$.y().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.ak(new D.w("far",r,2000))}return q},
dT:function dT(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
hL:function hL(){this.b=null},
el:function el(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iA:function iA(){}},V={
ho:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aG(s,r,q,1)},
kr:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
oz:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dR(a-b,s)
return(a<0?a+s:a)+b},
u:function(a,b,c){$.y().toString
return C.c.ae(C.d.cn(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c4:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.y().toString
n=C.c.ae(C.d.cn(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.c.ae(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
kt:function(a){return C.d.hv(Math.pow(2,C.d.c4(Math.log(a)/Math.log(2))))},
a5:function(){var s=$.kM
return s==null?$.kM=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kL:function(a,b,c){var s=c.F(),r=b.b1(s).F(),q=s.b1(r),p=new V.x(a.a,a.b,a.c)
return V.aw(r.a,q.a,s.a,r.aQ(0).a1(p),r.b,q.b,s.b,q.aQ(0).a1(p),r.c,q.c,s.c,s.aQ(0).a1(p),0,0,0,1)},
kP:function(){var s=$.ax
return s==null?$.ax=new V.W(0,0,0):s},
kS:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eq(a,b,c,d)},
d3:function(){var s=$.l3
return s==null?$.l3=new V.x(0,0,0):s},
mQ:function(){var s=$.j0
return s==null?$.j0=new V.x(-1,0,0):s},
k8:function(){var s=$.j1
return s==null?$.j1=new V.x(0,1,0):s},
l4:function(){var s=$.j2
return s==null?$.j2=new V.x(0,0,1):s},
mP:function(a,b,c){return new V.x(a,b,c)},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(){},
cJ:function cJ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bM:function bM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
os:function(a){P.mO(C.G,new V.jQ(a))},
mH:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.b(P.e("The html document body was null."))
s=n.createElement("div")
s.className="scrollTop"
m.appendChild(s).toString
r=n.createElement("div")
r.className="scrollPage"
m.appendChild(r).toString
q=n.createElement("div")
q.className="pageCenter"
r.appendChild(q).toString
if(a.length!==0){n.title=a
p=n.createElement("div")
p.className="pageTitle"
p.textContent=a
q.appendChild(p).toString}o=n.createElement("div")
o.toString
q.appendChild(o).toString
W.X(n,"scroll",new V.iw(s),!1)
return new V.iu(o)},
jQ:function jQ(a){this.a=a},
iu:function iu(a){this.a=a
this.b=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a}},U={
hq:function(){return new U.hp()},
kC:function(a){var s=V.a5(),r=new U.ce(s)
if(!s.m(0,a))r.a=a
return r},
hp:function hp(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
ce:function ce(a){this.a=a
this.b=null},
bI:function bI(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a_:function a_(){},
d0:function d0(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
d1:function d1(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null},
d2:function d2(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={cd:function cd(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},ci:function ci(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},co:function co(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mq:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+a9.gaj(a9)+b0.gaj(b0)+b1.gaj(b1)+b2.gaj(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.o)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.am()
if(h){s=$.b0()
c=new Z.bu(c.a|s.a)}if(g)c=new Z.bu(c.a|$.b_().a)
if(f)c=new Z.bu(c.a|$.aZ().a)
return new A.i_(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jz:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jA:function(a,b,c){var s
A.jz(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hb(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
nE:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jz(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
nA:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jA(b,r,"ambient")
b.a+="\n"},
nC:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jA(b,r,"diffuse")
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
nF:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jA(b,r,"invDiffuse")
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
nL:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jA(b,r,"specular")
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
nH:function(a,b){var s,r,q
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
nJ:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jz(b,r,"reflect")
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
nK:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jz(b,r,"refract")
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
nB:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hb(r)
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
nD:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.hb(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
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
nI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hb(r)
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
nM:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hb(r)
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
if(m){s=$.hC
if(s==null)s=$.hC=new E.fi(E.l5(),E.l6())
p=c.a
if(s.b===C.r){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
nG:function(a,b){var s,r
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
nN:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.aQ(""),j=""+"precision mediump float;\n"
k.a=j
j=k.a=j+"\n"
s=a.k4
if(s){j+="varying vec3 normalVec;\n"
k.a=j}if(a.r1){j+="varying vec3 binormalVec;\n"
k.a=j}if(a.r2){j+="varying vec2 txt2D;\n"
k.a=j}if(a.rx){j+="varying vec3 txtCube;\n"
k.a=j}if(a.k2){j+="varying vec3 objPos;\n"
k.a=j}j=k.a=(a.k3?k.a=j+"varying vec3 viewPos;\n":j)+"\n"
r=a.y1
if(r){j+="uniform mat4 colorMat;\n"
k.a=j}if(a.go){j+="uniform mat4 viewMat;\n"
k.a=j}if(a.dy)j=k.a=j+"uniform mat4 invViewMat;\n"
k.a=j+"\n"
A.nE(a,k)
A.nA(a,k)
A.nC(a,k)
A.nF(a,k)
A.nL(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.nJ(a,k)
A.nK(a,k)}A.nH(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y.a
if(p)q=k.a=q+"uniform float alpha;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
if(!p)o=!1
else o=!0
if(!o)q=k.a=q+"   return 1.0;\n"
else if(p){q+="   return alpha;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.nB(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.nD(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.nI(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.nM(a,p[n],k)
A.nG(a,k)}p=k.a+="// === Main ===\n"
p+="\n"
k.a=p
p+="void main()\n"
k.a=p
p+="{\n"
k.a=p
p=k.a=p+"   float alpha = alphaValue();\n"
if(s){s=p+"   vec3 norm = normal();\n"
k.a=s}else s=p
j=j?k.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n":s
m=[]
if(q){k.a=j+u.o
m.push("lightAccum")
if(!a.b.a)j=!1
else j=!0
if(j)k.a+="   setAmbientColor();\n"
if(!a.c.a)j=!1
else j=!0
if(j)k.a+="   setDiffuseColor();\n"
if(!a.d.a)j=!1
else j=!0
if(j)k.a+="   setInvDiffuseColor();\n"
if(!a.e.a)j=!1
else j=!0
if(j)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aV(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aV(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aV(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aV(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.p(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
nO:function(a,b){var s,r,q
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
nQ:function(a,b){var s
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
nP:function(a,b){var s
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
nS:function(a,b){var s,r
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
nT:function(a,b){var s,r
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
nR:function(a,b){var s
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
nU:function(a,b){var s
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
hb:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aV(a,1)},
k7:function(a,b,c,d,e){var s=new A.iR([],a,c,e)
s.f=d
s.e=P.hT(d,0,!1)
return s},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a){this.a=a},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.hQ=_.hP=_.ds=_.hO=_.hN=_.dr=_.dq=_.hM=_.hL=_.dn=_.dm=_.hK=_.hJ=_.dl=_.hI=_.hH=_.dk=_.dj=_.bh=_.aM=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.bX=c
_.bY=d
_.bZ=e
_.c_=f
_.c0=g
_.c1=h
_.c2=i
_.c3=j
_.hT=_.hS=_.hR=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b2:function b2(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bh=b6
_.dj=b7},
eS:function eS(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eT:function eT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eW:function eW(a,b,c,d,e,f,g,h,i,j){var _=this
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
eZ:function eZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bS:function bS(){},
cU:function cU(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
iQ:function iQ(){},
iW:function iW(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eP:function eP(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
eQ:function eQ(a,b,c){this.a=a
this.c=b
this.d=c},
eR:function eR(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
eU:function eU(a,b,c){this.a=a
this.c=b
this.d=c},
eV:function eV(a,b,c){this.a=a
this.c=b
this.d=c},
eX:function eX(a,b,c){this.a=a
this.c=b
this.d=c},
eY:function eY(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jx:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
du:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.x(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.x(s+a4,r+a2,q+a3)
o=new V.x(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.x(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jx(h)
j=F.jx(g)
a.cc(F.ov(a0,a1,new F.jr(i,F.jx(f),F.jx(e),j,k,c),b))},
ot:function(){var s=null,r=new F.jR(1,new F.jS()),q=F.k4()
F.du(q,s,r,8,8,1,0,0,1)
F.du(q,s,r,8,8,0,1,0,3)
F.du(q,s,r,8,8,0,0,1,2)
F.du(q,s,r,8,8,-1,0,0,0)
F.du(q,s,r,8,8,0,-1,0,0)
F.du(q,s,r,8,8,0,0,-1,3)
q.av()
q.h8(new F.j6(),new F.ih())
return q},
ov:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.b(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.b(P.e("Must have 1 or more divisions of the height for a surface."))
s=F.k4()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.q(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.j3(e,e,new V.aG(n,0,0,1),e,e,new V.S(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bV(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.q(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.j3(e,e,new V.aG(h,g,f,1),e,e,new V.S(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bV(d))}}s.gK().fP(a+1,b+1,r)
return s},
k4:function(){return new F.is()},
j3:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.d4()
h=$.lV()
s=$.am()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b0().a)!==0)q.r=e
if((r&$.b_().a)!==0)q.x=b
if((r&$.bz().a)!==0)q.y=f
if((r&$.bA().a)!==0)q.z=g
if((r&$.lW().a)!==0)q.Q=c
if((r&$.c7().a)!==0)q.ch=i
if((r&$.aZ().a)!==0)q.cx=a
return q},
jr:function jr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jS:function jS(){},
jR:function jR(a,b){this.a=a
this.b=b},
ah:function ah(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(){},
ix:function ix(){},
hQ:function hQ(){this.b=this.a=null},
hR:function hR(){},
iP:function iP(){},
ij:function ij(){this.a=null},
is:function is(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
it:function it(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cS:function cS(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
d4:function d4(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
ja:function ja(a){this.a=a},
j9:function j9(a){this.a=a},
q:function q(a,b){this.a=a
this.b=!1
this.c=b},
bW:function bW(a,b,c){this.b=a
this.c=b
this.d=c},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.b=a
this.c=b},
j7:function j7(){},
j6:function j6(){},
j8:function j8(){},
ih:function ih(){},
d5:function d5(a){this.b=a}},T={iC:function iC(){},iD:function iD(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},iE:function iE(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},iF:function iF(a,b,c,d,e,f,g){var _=this
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
H.k1.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gB:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.cQ(a)+"'"},
dG:function(a,b){throw H.b(P.kN(a,b.gdD(),b.gdL(),b.gdF()))}}
J.dX.prototype={
i:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$ibv:1}
J.cv.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gB:function(a){return 0}}
J.bc.prototype={
gB:function(a){return 0},
i:function(a){return String(a)}}
J.em.prototype={}
J.bU.prototype={}
J.au.prototype={
i:function(a){var s=a[$.jT()]
if(s==null)return this.dW(a)
return"JavaScript function for "+H.p(J.hd(s))},
$icr:1}
J.ai.prototype={
l:function(a,b){if(!!a.fixed$length)H.f(P.v("add"))
a.push(b)},
cj:function(a,b){if(!!a.fixed$length)H.f(P.v("removeAt"))
if(b<0||b>=a.length)throw H.b(P.ep(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var s
if(!!a.fixed$length)H.f(P.v("remove"))
for(s=0;s<a.length;++s)if(J.N(a[s],b)){a.splice(s,1)
return!0}return!1},
au:function(a,b){var s
if(!!a.fixed$length)H.f(P.v("addAll"))
if(Array.isArray(b)){this.eb(a,b)
return}for(s=J.an(b);s.q();)a.push(s.gD(s))},
eb:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.b6(a))
for(s=0;s<r;++s)a.push(b[s])},
w:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b6(a))}},
c9:function(a,b){return new H.bi(a,b)},
dC:function(a,b){return this.c9(a,b,t.z)},
p:function(a,b){var s,r,q=a.length,p=P.hT(q,"",!1)
for(s=0;s<a.length;++s){r=H.p(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
h6:function(a){return this.p(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gh3:function(a){if(a.length>0)return a[0]
throw H.b(H.kH())},
gc6:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.kH())},
aT:function(a,b){if(!!a.immutable$list)H.f(P.v("sort"))
H.mK(a,b==null?J.nr():b)},
dT:function(a){return this.aT(a,null)},
I:function(a,b){var s
for(s=0;s<a.length;++s)if(J.N(a[s],b))return!0
return!1},
i:function(a){return P.jZ(a,"[","]")},
gL:function(a){return new J.a3(a,a.length)},
gB:function(a){return H.cP(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.v("set length"))
if(b>a.length)H.lh(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.c3(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.f(P.v("indexed set"))
if(b>=a.length||b<0)throw H.b(H.c3(a,b))
a[b]=c},
$ij:1,
$ih:1,
$il:1}
J.dZ.prototype={}
J.a3.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bK.prototype={
ab:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbi(b)
if(this.gbi(a)===s)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
hv:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.v(""+a+".toInt()"))},
c4:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.v(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.v(""+a+".round()"))},
cn:function(a,b){var s
if(b>20)throw H.b(P.ay(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dR:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.v("Result of truncating division is "+H.p(s)+": "+H.p(a)+" ~/ "+b))},
be:function(a,b){var s
if(a>0)s=this.fE(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fE:function(a,b){return b>31?0:a>>>b},
$iM:1,
$ia2:1}
J.cu.prototype={$in:1}
J.dY.prototype={}
J.bb.prototype={
bU:function(a,b){if(b<0)throw H.b(H.c3(a,b))
if(b>=a.length)H.f(H.c3(a,b))
return a.charCodeAt(b)},
cG:function(a,b){if(b>=a.length)throw H.b(H.c3(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
cu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.ep(b,null))
if(b>c)throw H.b(P.ep(b,null))
if(c>a.length)throw H.b(P.ep(c,null))
return a.substring(b,c)},
aV:function(a,b){return this.cu(a,b,null)},
N:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ae:function(a,b){var s=b-a.length
if(s<=0)return a
return this.N(" ",s)+a},
fV:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.ay(c,0,s,null,null))
return H.lF(a,b,c)},
I:function(a,b){return this.fV(a,b,0)},
ab:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gB:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$iz:1}
H.e1.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.O.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.c.bU(this.a,b)}}
H.j.prototype={}
H.cC.prototype={
gL:function(a){return new H.bg(this,this.gj(this))}}
H.bg.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=J.ha(q),o=p.gj(q)
if(r.b!==o)throw H.b(P.b6(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
H.bh.prototype={
gL:function(a){return new H.cG(J.an(this.a),this.b)},
gj:function(a){return J.b1(this.a)},
C:function(a,b){return this.b.$1(J.hc(this.a,b))}}
H.cn.prototype={$ij:1}
H.cG.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){return H.U(this).Q[1].a(this.a)}}
H.bi.prototype={
gj:function(a){return J.b1(this.a)},
C:function(a,b){return this.b.$1(J.hc(this.a,b))}}
H.d6.prototype={
gL:function(a){return new H.f7(J.an(this.a),this.b)}}
H.f7.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.cp.prototype={}
H.f1.prototype={
k:function(a,b,c){throw H.b(P.v("Cannot modify an unmodifiable list"))}}
H.bV.prototype={}
H.bT.prototype={
gB:function(a){var s=this._hashCode
if(s!=null)return s
s=664597*J.dD(this.a)&536870911
this._hashCode=s
return s},
i:function(a){return'Symbol("'+H.p(this.a)+'")'},
m:function(a,b){if(b==null)return!1
return b instanceof H.bT&&this.a==b.a},
$icX:1}
H.cg.prototype={}
H.cf.prototype={
i:function(a){return P.hW(this)},
$iI:1}
H.ch.prototype={
gj:function(a){return this.a},
ep:function(a){return this.b[a]},
w:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.ep(q))}}}
H.hM.prototype={
gdD:function(){var s=this.a
return s},
gdL:function(){var s,r,q,p,o=this
if(o.c===1)return C.p
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return C.p
q=[]
for(p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdF:function(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return C.q
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return C.q
o=new H.Q(t.s)
for(n=0;n<r;++n){if(n>=s.length)return H.d(s,n)
m=s[n]
l=p+n
if(l<0||l>=q.length)return H.d(q,l)
o.k(0,new H.bT(m),q[l])}return new H.cg(o,t.c)}}
H.il.prototype={
$2:function(a,b){var s=this.a
s.b=s.b+"$"+a
this.b.push(a)
this.c.push(b);++s.a},
$S:5}
H.iN.prototype={
ad:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cO.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.e_.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.f0.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ii.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fL.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.b5.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lI(r==null?"unknown":r)+"'"},
$icr:1,
ghA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eG.prototype={}
H.eB.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lI(s)+"'"}}
H.bB.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bB))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gB:function(a){var s,r=this.c
if(r==null)s=H.cP(this.a)
else s=typeof r!=="object"?J.dD(r):H.cP(r)
return(s^H.cP(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.p(this.d)+"' of "+("Instance of '"+H.cQ(s)+"'")}}
H.es.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.jj.prototype={}
H.Q.prototype={
gj:function(a){return this.a},
gaz:function(a){return new H.aI(this)},
ghz:function(a){return H.mp(new H.aI(this),new H.hO(this))},
dd:function(a,b){var s=this.b
if(s==null)return!1
return this.ek(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bc(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bc(p,b)
q=r==null?n:r.b
return q}else return o.h5(b)},
h5:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cL(q,J.dD(a)&0x3ffffff)
r=this.dv(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cD(s==null?m.b=m.bF():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cD(r==null?m.c=m.bF():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bF()
p=J.dD(b)&0x3ffffff
o=m.cL(q,p)
if(o==null)m.bM(q,p,[m.bG(b,c)])
else{n=m.dv(o,b)
if(n>=0)o[n].b=c
else o.push(m.bG(b,c))}}},
w:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b6(s))
r=r.c}},
cD:function(a,b,c){var s=this.bc(a,b)
if(s==null)this.bM(a,b,this.bG(b,c))
else s.b=c},
bG:function(a,b){var s=this,r=new H.hS(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dv:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1},
i:function(a){return P.hW(this)},
bc:function(a,b){return a[b]},
cL:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
en:function(a,b){delete a[b]},
ek:function(a,b){return this.bc(a,b)!=null},
bF:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bM(r,s,r)
this.en(r,s)
return r}}
H.hO.prototype={
$1:function(a){var s=this.a
return H.U(s).Q[1].a(s.h(0,a))},
$S:function(){return H.U(this.a).ag("2(1)")}}
H.hS.prototype={}
H.aI.prototype={
gj:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.e3(s,s.r)
r.c=s.e
return r}}
H.e3.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jJ.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.jK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.jL.prototype={
$1:function(a){return this.a(a)},
$S:34}
H.hN.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bk.prototype={$iae:1}
H.bP.prototype={
gj:function(a){return a.length},
$it:1}
H.bj.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.cL.prototype={
k:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.ea.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.eb.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.ec.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.ed.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.ee.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.cM.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.ef.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.ac.prototype={
ag:function(a){return H.fX(v.typeUniverse,this,a)},
cE:function(a){return H.nc(v.typeUniverse,this,a)}}
H.fo.prototype={}
H.fj.prototype={
i:function(a){return this.a}}
H.dn.prototype={}
P.jc.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:28}
P.jb.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:32}
P.jd.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:11}
P.je.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:11}
P.dm.prototype={
e6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c2(new P.jo(this,b),0),a)
else throw H.b(P.v("`setTimeout()` not found."))},
e7:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c2(new P.jn(this,a,Date.now(),b),0),a)
else throw H.b(P.v("Periodic timer."))},
$iiI:1}
P.jo.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$C:"$0",
$R:0,
$S:3}
P.jn.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.e0(s,o)}q.c=p
r.d.$1(q)},
$C:"$0",
$R:0,
$S:11}
P.bY.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.p(this.a)+")"}}
P.c_.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bY){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.an(s)
if(o instanceof P.c_){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dj.prototype={
gL:function(a){return new P.c_(this.a())}}
P.f8.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.jq.prototype={}
P.jB.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.i(0)
throw s},
$S:3}
P.jk.prototype={
hq:function(a){var s,r,q,p=null
try{if(C.e===$.al){a.$0()
return}P.nW(p,p,this,a)}catch(q){s=H.c6(q)
r=H.kp(q)
P.lp(p,p,this,s,r)}},
hr:function(a,b){var s,r,q,p=null
try{if(C.e===$.al){a.$1(b)
return}P.nX(p,p,this,a,b)}catch(q){s=H.c6(q)
r=H.kp(q)
P.lp(p,p,this,s,r)}},
hs:function(a,b){return this.hr(a,b,t.z)},
fR:function(a){return new P.jl(this,a)},
d6:function(a,b){return new P.jm(this,a,b)}}
P.jl.prototype={
$0:function(){return this.a.hq(this.b)},
$S:3}
P.jm.prototype={
$1:function(a){return this.a.hs(this.b,a)},
$S:function(){return this.c.ag("~(0)")}}
P.d8.prototype={
gL:function(a){var s=new P.d9(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
I:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ei(b)
return r}},
ei:function(a){var s=this.d
if(s==null)return!1
return this.bw(s[this.bt(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cH(s==null?q.b=P.kb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cH(r==null?q.c=P.kb():r,b)}else return q.ea(0,b)},
ea:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kb()
s=q.bt(b)
r=p[s]
if(r==null)p[s]=[q.bs(b)]
else{if(q.bw(r,b)>=0)return!1
r.push(q.bs(b))}return!0},
E:function(a,b){if((b&1073741823)===b)return this.fq(this.c,b)
else return this.fp(0,b)},
fp:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bt(b)
r=n[s]
q=o.bw(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cZ(p)
return!0},
cH:function(a,b){if(a[b]!=null)return!1
a[b]=this.bs(b)
return!0},
fq:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cZ(s)
delete a[b]
return!0},
cN:function(){this.r=this.r+1&1073741823},
bs:function(a){var s,r=this,q=new P.ji(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cN()
return q},
cZ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cN()},
bt:function(a){return J.dD(a)&1073741823},
bw:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1}}
P.ji.prototype={}
P.d9.prototype={
gD:function(a){return H.U(this).c.a(this.d)},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b6(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.ct.prototype={}
P.cB.prototype={$ij:1,$ih:1,$il:1}
P.B.prototype={
gL:function(a){return new H.bg(a,this.gj(a))},
C:function(a,b){return this.h(a,b)},
w:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.b(P.b6(a))}},
gdw:function(a){return this.gj(a)===0},
c9:function(a,b){return new H.bi(a,b)},
dC:function(a,b){return this.c9(a,b,t.z)},
hx:function(a,b){var s,r,q,p,o=this
if(o.gdw(a)){s=J.k_(0)
return s}r=o.h(a,0)
q=P.hT(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hw:function(a){return this.hx(a,!0)},
i:function(a){return P.jZ(a,"[","]")}}
P.cE.prototype={}
P.hX.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.p(a)
r.a=s+": "
r.a+=H.p(b)},
$S:50}
P.V.prototype={
w:function(a,b){var s,r,q
for(s=J.an(this.gaz(a)),r=H.c5(a).ag("V.V");s.q();){q=s.gD(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.b1(this.gaz(a))},
i:function(a){return P.hW(a)},
$iI:1}
P.fY.prototype={}
P.cF.prototype={
w:function(a,b){this.a.w(0,b)},
gj:function(a){return this.a.a},
i:function(a){return P.hW(this.a)},
$iI:1}
P.d_.prototype={}
P.eu.prototype={
i:function(a){return P.jZ(this,"{","}")},
C:function(a,b){var s,r,q,p,o="index"
H.lu(b,o,t.S)
P.kR(b,o)
for(s=P.mX(this,this.r),r=H.U(s).c,q=0;s.q();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.H(b,this,o,null,q))}}
P.dg.prototype={$ij:1,$ih:1}
P.da.prototype={}
P.ds.prototype={}
P.dt.prototype={}
P.dJ.prototype={}
P.dL.prototype={}
P.hB.prototype={}
P.iZ.prototype={}
P.j_.prototype={
fW:function(a){var s,r,q,p=P.k3(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jp(r)
if(q.eq(a,0,p)!==p){C.c.bU(a,p-1)
q.bQ()}return new Uint8Array(r.subarray(0,H.nj(0,q.b,s)))}}
P.jp.prototype={
bQ:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fL:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s&63|128
return!0}else{n.bQ()
return!1}},
eq:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.c.bU(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.c.cG(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fL(p,C.c.cG(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bQ()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p&63|128}}}return q}}
P.ig.prototype={
$2:function(a,b){var s=this.b,r=this.a,q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=P.bG(b)
r.a=", "},
$S:40}
P.P.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a&&!0},
ab:function(a,b){return C.b.ab(this.a,b.a)},
gB:function(a){var s=this.a
return(s^C.b.be(s,30))&1073741823},
i:function(a){var s=this,r=P.me(H.mA(s)),q=P.dN(H.my(s)),p=P.dN(H.mu(s)),o=P.dN(H.mv(s)),n=P.dN(H.mx(s)),m=P.dN(H.mz(s)),l=P.mf(H.mw(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b8.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gB:function(a){return C.b.gB(this.a)},
ab:function(a,b){return C.b.ab(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hz(),o=this.a
if(o<0)return"-"+new P.b8(0-o).i(0)
s=p.$1(C.b.a0(o,6e7)%60)
r=p.$1(C.b.a0(o,1e6)%60)
q=new P.hy().$1(o%1e6)
return""+C.b.a0(o,36e8)+":"+s+":"+r+"."+q}}
P.hy.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.hz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.D.prototype={}
P.dG.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.bG(s)
return"Assertion failed"}}
P.eO.prototype={}
P.eh.prototype={
i:function(a){return"Throw of null."}}
P.ao.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.p(n),l=q.gbv()+o+m
if(!q.a)return l
s=q.gbu()
r=P.bG(q.b)
return l+s+": "+r}}
P.cR.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.p(q):""
else if(q==null)s=": Not greater than or equal to "+H.p(r)
else if(q>r)s=": Not in inclusive range "+H.p(r)+".."+H.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.p(r)
return s}}
P.dV.prototype={
gbv:function(){return"RangeError"},
gbu:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.eg.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new P.aQ("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=P.bG(n)
j.a=", "}k.d.w(0,new P.ig(j,i))
m=P.bG(k.a)
l=i.i(0)
r="NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"
return r}}
P.f2.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f_.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dK.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bG(s)+"."}}
P.ek.prototype={
i:function(a){return"Out of Memory"},
$iD:1}
P.cV.prototype={
i:function(a){return"Stack Overflow"},
$iD:1}
P.dM.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fl.prototype={
i:function(a){return"Exception: "+this.a}}
P.hJ.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.c.cu(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gL(this)
for(s=0;r.q();)++s
return s},
C:function(a,b){var s,r,q
P.kR(b,"index")
for(s=this.gL(this),r=0;s.q();){q=s.gD(s)
if(b===r)return q;++r}throw H.b(P.H(b,this,"index",null,r))},
i:function(a){return P.mi(this,"(",")")}}
P.dW.prototype={}
P.ab.prototype={
gB:function(a){return P.C.prototype.gB.call(C.I,this)},
i:function(a){return"null"}}
P.C.prototype={constructor:P.C,$iC:1,
m:function(a,b){return this===b},
gB:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.cQ(this)+"'"},
dG:function(a,b){throw H.b(P.kN(this,b.gdD(),b.gdL(),b.gdF()))},
toString:function(){return this.i(this)}}
P.aQ.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.m.prototype={}
W.he.prototype={
gj:function(a){return a.length}}
W.dE.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dF.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.b3.prototype={$ib3:1}
W.b4.prototype={
cq:function(a,b,c){if(c!=null)return a.getContext(b,P.lv(c))
return a.getContext(b)},
dQ:function(a,b){return this.cq(a,b,null)},
$ib4:1}
W.cc.prototype={$icc:1}
W.ag.prototype={
gj:function(a){return a.length}}
W.hr.prototype={
gj:function(a){return a.length}}
W.E.prototype={$iE:1}
W.cj.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hs.prototype={}
W.aa.prototype={}
W.aq.prototype={}
W.ht.prototype={
gj:function(a){return a.length}}
W.hu.prototype={
gj:function(a){return a.length}}
W.hv.prototype={
gj:function(a){return a.length}}
W.hw.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cl.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.cm.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.p(r)+", "
s=a.top
s.toString
return r+H.p(s)+") "+H.p(this.gaD(a))+" x "+H.p(this.gax(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bx(b)
if(s===r.gbj(b)){s=a.top
s.toString
s=s===r.gbm(b)&&this.gaD(a)===r.gaD(b)&&this.gax(a)===r.gax(b)}else s=!1}else s=!1
return s},
gB:function(a){var s,r=a.left
r.toString
r=C.d.gB(r)
s=a.top
s.toString
return W.l8(r,C.d.gB(s),C.d.gB(this.gaD(a)),C.d.gB(this.gax(a)))},
gd7:function(a){var s=a.bottom
s.toString
return s},
gcM:function(a){return a.height},
gax:function(a){var s=this.gcM(a)
s.toString
return s},
gbj:function(a){var s=a.left
s.toString
return s},
gcm:function(a){var s=a.right
s.toString
return s},
gbm:function(a){var s=a.top
s.toString
return s},
gd_:function(a){return a.width},
gaD:function(a){var s=this.gd_(a)
s.toString
return s},
$ia7:1}
W.dO.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.hx.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fb.prototype={
gdw:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gL:function(a){var s=this.hw(this)
return new J.a3(s,s.length)}}
W.G.prototype={
gd9:function(a){var s=a.children
s.toString
return new W.fb(a,s)},
gdc:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a7(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
$iG:1}
W.i.prototype={$ii:1}
W.c.prototype={
fN:function(a,b,c,d){if(c!=null)this.ec(a,b,c,!1)},
ec:function(a,b,c,d){return a.addEventListener(b,H.c2(c,1),!1)},
$ic:1}
W.ar.prototype={$iar:1}
W.dP.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.dQ.prototype={
gj:function(a){return a.length}}
W.dS.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.hK.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.b9.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.ba.prototype={
gde:function(a){var s=a.data
s.toString
return s},
$iba:1}
W.bJ.prototype={$ibJ:1}
W.be.prototype={$ibe:1}
W.hU.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ib.prototype={
gj:function(a){return a.length}}
W.e7.prototype={
h:function(a,b){return P.aY(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaz:function(a){var s=[]
this.w(a,new W.ic(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iI:1}
W.ic.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.e8.prototype={
h:function(a,b){return P.aY(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaz:function(a){var s=[]
this.w(a,new W.id(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iI:1}
W.id.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aJ.prototype={$iaJ:1}
W.e9.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.a6.prototype={$ia6:1}
W.fa.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gL:function(a){var s=this.a.childNodes
return new W.cq(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.r.prototype={
ho:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.m_(s,b,a)}catch(q){H.c6(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dV(a):s},
ft:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cN.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.aL.prototype={
gj:function(a){return a.length},
$iaL:1}
W.en.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.er.prototype={
h:function(a,b){return P.aY(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaz:function(a){var s=[]
this.w(a,new W.ir(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iI:1}
W.ir.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.et.prototype={
gj:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.ex.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.aO.prototype={$iaO:1}
W.ey.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.aP.prototype={
gj:function(a){return a.length},
$iaP:1}
W.eC.prototype={
h:function(a,b){return a.getItem(H.ng(b))},
w:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaz:function(a){var s=[]
this.w(a,new W.iy(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iI:1}
W.iy.prototype={
$2:function(a,b){return this.a.push(a)},
$S:26}
W.aj.prototype={$iaj:1}
W.aR.prototype={$iaR:1}
W.aA.prototype={$iaA:1}
W.ad.prototype={$iad:1}
W.eH.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.eI.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.iH.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aS.prototype={$iaS:1}
W.br.prototype={$ibr:1}
W.eM.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.iL.prototype={
gj:function(a){return a.length}}
W.aC.prototype={}
W.iY.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.f4.prototype={
gj:function(a){return a.length}}
W.aT.prototype={
gh_:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.v("deltaY is not supported"))},
gfZ:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.v("deltaX is not supported"))},
$iaT:1}
W.aU.prototype={
fu:function(a,b){var s=a.requestAnimationFrame(H.c2(b,1))
s.toString
return s},
eo:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iaU:1}
W.ak.prototype={$iak:1}
W.fc.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.d7.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.p(r)+", "
s=a.top
s.toString
s=r+H.p(s)+") "
r=a.width
r.toString
r=s+H.p(r)+" x "
s=a.height
s.toString
return r+H.p(s)},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bx(b)
if(s===r.gbj(b)){s=a.top
s.toString
if(s===r.gbm(b)){s=a.width
s.toString
if(s===r.gaD(b)){s=a.height
s.toString
r=s===r.gax(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gB(p)
s=a.top
s.toString
s=C.d.gB(s)
r=a.width
r.toString
r=C.d.gB(r)
q=a.height
q.toString
return W.l8(p,s,r,C.d.gB(q))},
gcM:function(a){return a.height},
gax:function(a){var s=a.height
s.toString
return s},
gd_:function(a){return a.width},
gaD:function(a){var s=a.width
s.toString
return s}}
W.fp.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.db.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.fI.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.fP.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
W.jX.prototype={}
W.fk.prototype={}
W.jf.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.ka.prototype={}
W.F.prototype={
gL:function(a){return new W.cq(a,this.gj(a))}}
W.cq.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lZ(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return H.U(this).c.a(this.d)}}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fF.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fM.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
P.dp.prototype={$iba:1,
gde:function(a){return this.a}}
P.jt.prototype={
$1:function(a){this.a.push(P.lj(a))},
$S:39}
P.jF.prototype={
$2:function(a,b){this.a[a]=P.lj(b)},
$S:47}
P.dR.prototype={
gaY:function(){return new H.bh(new H.d6(this.b,new P.hH()),new P.hI())},
w:function(a,b){C.a.w(P.bL(this.gaY(),!1),b)},
k:function(a,b,c){var s=this.gaY()
J.m5(s.b.$1(J.hc(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.b1(this.gaY().a)},
h:function(a,b){var s=this.gaY()
return s.b.$1(J.hc(s.a,b))},
gL:function(a){var s=P.bL(this.gaY(),!1)
return new J.a3(s,s.length)}}
P.hH.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.hI.prototype={
$1:function(a){return t.h.a(a)},
$S:49}
P.cy.prototype={$icy:1}
P.jv.prototype={
$1:function(a){var s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.ni,a,!1)
P.ki(s,$.jT(),a)
return s},
$S:12}
P.jw.prototype={
$1:function(a){return new this.a(a)},
$S:12}
P.jC.prototype={
$1:function(a){return new P.cw(a)},
$S:25}
P.jD.prototype={
$1:function(a){return new P.bd(a)},
$S:30}
P.jE.prototype={
$1:function(a){return new P.av(a)},
$S:31}
P.av.prototype={
h:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.b(P.c8("property is not a String or num"))
return P.kh(this.a[b])},
k:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.b(P.c8("property is not a String or num"))
this.a[b]=P.ju(c)},
m:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a},
i:function(a){var s,r
try{s=String(this.a)
return s}catch(r){H.c6(r)
s=this.dZ(0)
return s}},
fT:function(a,b){var s=this.a,r=b==null?null:P.bL(new H.bi(b,P.on()),!0)
return P.kh(s[a].apply(s,r))},
gB:function(a){return 0}}
P.cw.prototype={}
P.bd.prototype={
cF:function(a){var s=this,r=a<0||a>=s.gj(s)
if(r)throw H.b(P.ay(a,0,s.gj(s),null,null))},
h:function(a,b){if(H.h8(b))this.cF(b)
return this.dX(0,b)},
k:function(a,b,c){this.cF(b)
this.e_(0,b,c)},
gj:function(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw H.b(P.mL("Bad JsArray length"))},
$ij:1,
$ih:1,
$il:1}
P.bZ.prototype={
k:function(a,b,c){return this.dY(0,b,c)}}
P.fE.prototype={
gcm:function(a){return this.$ti.c.a(this.a+this.c)},
gd7:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bx(b)
if(s===r.gbj(b)){q=o.b
if(q===r.gbm(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcm(b)&&p.a(q+o.d)===r.gd7(b)}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s=this,r=s.a,q=C.b.gB(r),p=s.b,o=C.b.gB(p),n=s.$ti.c
r=C.b.gB(n.a(r+s.c))
p=C.b.gB(n.a(p+s.d))
return H.mM(H.iz(H.iz(H.iz(H.iz(0,q),o),r),p))}}
P.a7.prototype={
gbj:function(a){return this.a},
gbm:function(a){return this.b},
gaD:function(a){return this.c},
gax:function(a){return this.d}}
P.bf.prototype={$ibf:1}
P.e2.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.bl.prototype={$ibl:1}
P.ei.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.ik.prototype={
gj:function(a){return a.length}}
P.eF.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.k.prototype={
gd9:function(a){return new P.dR(a,new W.fa(a))}}
P.bs.prototype={$ibs:1}
P.eN.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.fs.prototype={}
P.ft.prototype={}
P.fA.prototype={}
P.fB.prototype={}
P.fN.prototype={}
P.fO.prototype={}
P.fU.prototype={}
P.fV.prototype={}
P.hj.prototype={
gj:function(a){return a.length}}
P.dH.prototype={
h:function(a,b){return P.aY(a.get(b))},
w:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaz:function(a){var s=[]
this.w(a,new P.hk(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iI:1}
P.hk.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dI.prototype={
gj:function(a){return a.length}}
P.aF.prototype={}
P.ej.prototype={
gj:function(a){return a.length}}
P.f9.prototype={}
P.bR.prototype={
ht:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.o9(g))
return}if(t.m.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.c8("Incorrect number or type of arguments"))},
$ibR:1}
P.ez.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=P.aY(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.b(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.fJ.prototype={}
P.fK.prototype={}
K.hf.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"}}
K.dU.prototype={
aN:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aN(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aK.prototype={
aN:function(a,b){return!this.dU(0,b)},
i:function(a){return"!["+this.bq(0)+"]"}}
K.T.prototype={
U:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.e("May not create a Set with zero characters."))
s=new H.Q(t.t)
for(r=new H.bg(a,a.gj(a)),q=H.U(r).c;r.q();)s.k(0,q.a(r.d),!0)
p=P.bL(new H.aI(s),!0)
C.a.dT(p)
this.a=p},
aN:function(a,b){return C.a.I(this.a,b)},
i:function(a){return P.k5(this.a)}}
L.eA.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iM(this.a.H(0,b),[])
s.push(p)
return p},
h2:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aN(0,a))return p}return null},
i:function(a){return this.b},
cY:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.I(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aI(s.c)
s=J.an(s==null?[]:s)
for(;s.q();){r=s.gD(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.I(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bq(0))}return m.charCodeAt(0)==0?m:m}}
L.eK.prototype={
i:function(a){var s=H.lG(this.b,"\n","\\n"),r=H.lG(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eL.prototype={
i:function(a){return this.b}}
L.iJ.prototype={
H:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eA(this,b,[])
s.k(0,b,r)}return r},
ba:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eL(a,P.R(s,s))
r.k(0,a,q)}return q},
dP:function(a){return this.hy(a)},
hy:function(a){var s=this
return P.nz(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dP(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.U(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a0.length!==0)h=C.a.cj(a0,0)
else{if(!r.q()){q=3
break}h=n.a(r.d)}b.push(h);++k
g=d==null
f=g?null:d.h2(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.k5(b)
throw H.b(P.e("Untokenizable string [state: "+H.p(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.v("removeRange"))
P.k3(0,i,b.length)
b.splice(0,i-0)
C.a.au(a0,b)
b=[]
c=[]
d=s.d
q=!m.I(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)c.push(h)
d=f.b
g=d.d
if(g!=null){e=P.k5(c)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.eK(g,e,k)
l=g}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.I(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mV()
case 1:return P.mW(o)}}},t.aR)},
i:function(a){var s,r,q=new P.aQ(""),p=this.d
if(p!=null)q.a=""+(p.cY()+"\n")
for(p=this.a,p=p.ghz(p),p=new H.cG(J.an(p.a),p.b),s=H.U(p).Q[1];p.q();){r=s.a(p.a)
if(r!=this.d)q.a+=H.p(r==null?null:r.cY())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iM.prototype={
i:function(a){return this.b.b+": "+this.bq(0)}}
O.bE.prototype={
cr:function(a,b,c){this.b=b
this.c=a},
aR:function(a,b){return this.cr(a,null,b)},
cQ:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cz:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.a3(s,s.length)},
C:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.cQ([b])){s=this.a
r=s.length
s.push(b)
this.cz(r,[b])}},
au:function(a,b){var s,r
if(this.cQ(b)){s=this.a
r=s.length
C.a.au(s,b)
this.cz(r,b)}},
$ih:1}
O.cK.prototype={
gj:function(a){return this.a.length},
gn:function(){var s=this.b
return s==null?this.b=D.A():s},
aF:function(){var s=this.b
return s==null?null:s.u(null)},
gY:function(a){var s=this.a
if(s.length>0)return C.a.gc6(s)
else return V.a5()},
bl:function(a){this.a.push(a)
this.aF()},
aA:function(){var s=this.a
if(s.length>0){s.pop()
this.aF()}}}
E.hl.prototype={}
E.bF.prototype={
sbo:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().E(0,s.gdJ())
if(b!=null)b.gn().l(0,s.gdJ())
s.bk(new D.w("shape",r,b))}},
ai:function(a,b){var s,r
for(s=this.y.a,s=new J.a3(s,s.length),r=H.U(s).c;s.q();)r.a(s.d).ai(0,b)},
a6:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.gY(o))
o.aF()
a.cg(p.f)
s=C.a.gc6(a.dy)
if(p.d!=null)if(s!=null)s.dN(a,p)
for(r=p.y.a,r=new J.a3(r,r.length),q=H.U(r).c;r.q();)q.a(r.d).a6(a)
a.cf()
o.aA()},
bk:function(a){var s=this.z
return s==null?null:s.u(a)},
Z:function(){return this.bk(null)},
dK:function(a){this.e=null
this.bk(a)},
he:function(){return this.dK(null)},
dI:function(a){return this.bk(a)},
hb:function(){return this.dI(null)},
ha:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdH(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bH()
n=o.a;(n==null?o.a=[]:n).push(r)}this.Z()},
hd:function(a,b){var s,r
for(s=b.gL(b),r=this.gdH();s.q();)s.gD(s).gn().E(0,r)
this.Z()},
i:function(a){return"Unnamed entity"}}
E.bC.prototype={
i:function(a){return this.b}}
E.bQ.prototype={
i:function(a){return this.b}}
E.fi.prototype={}
E.im.prototype={
e3:function(a,b){var s=this
s.cy.gn().l(0,new E.io(s))
s.db.gn().l(0,new E.ip(s))
s.dx.gn().l(0,new E.iq(s))},
ghl:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gY(q).N(0,s.gY(s))
q=s}return q},
cg:function(a){var s=this.dy
return s.push(a==null?C.a.gc6(s):a)},
cf:function(){var s=this.dy
if(s.length>1)s.pop()},
d1:function(a){var s,r=a.b
if(r.length===0)throw H.b(P.e("May not cache a shader with no name."))
s=this.fr
if(s.dd(0,r))throw H.b(P.e('Shader cache already contains a shader by the name "'+r+'".'))
s.k(0,r,a)}}
E.io.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.ip.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.iq.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.eJ.prototype={
cC:function(a){this.dO()},
cB:function(){return this.cC(null)},
gh4:function(){var s,r=this,q=Date.now(),p=C.b.a0(P.kD(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.P(q,!1)
return s/p},
cT:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.c4(r*o)
r=s.clientHeight
r.toString
p=C.d.c4(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kZ(C.h,this.ghp())}},
sdt:function(a){var s
if(a)E.kF(this.b,["webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen","oRequestFullscreen","requestFullscreen"])
else{s=document
s.toString
E.kF(s,["webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen","oExitFullscreen","exitFullscreen"])}},
dO:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.v.eo(s)
r=W.lr(new E.iG(this),t.H)
r.toString
C.v.fu(s,r)}},
hn:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cT()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.P(p,!1)
q.y=P.kD(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aF()
p=q.db
C.a.sj(p.a,0)
p.aF()
p=q.dx
C.a.sj(p.a,0)
p.aF()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.a6(q)}}catch(o){s=H.c6(o)
r=H.kp(o)
P.ku("Error: "+H.p(s))
P.ku("Stack: "+H.p(r))
throw H.b(s)}}}
E.iG.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hn()}},
$S:23}
Z.f5.prototype={}
Z.ca.prototype={
T:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.c6(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.p(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.f6.prototype={}
Z.bD.prototype={
aw:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
T:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].T(a)}},
aC:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a6:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cQ(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(m,", ")+"\nAttrs:   "+C.a.p(o,", ")}}
Z.cs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cQ(this.c)+"'")+"]"}}
Z.bu.prototype={
gct:function(a){var s=this.a,r=(s&$.am().a)!==0?3:0
if((s&$.b0().a)!==0)r+=3
if((s&$.b_().a)!==0)r+=3
if((s&$.bz().a)!==0)r+=2
if((s&$.bA().a)!==0)r+=3
if((s&$.dB().a)!==0)r+=3
if((s&$.dC().a)!==0)r+=4
if((s&$.c7().a)!==0)++r
return(s&$.aZ().a)!==0?r+4:r},
fQ:function(a){var s,r=$.am(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c7()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aZ()
if((q&r.a)!==0)if(s===a)return r
return $.lX()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bu))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.am().a)!==0)s.push("Pos")
if((r&$.b0().a)!==0)s.push("Norm")
if((r&$.b_().a)!==0)s.push("Binm")
if((r&$.bz().a)!==0)s.push("Txt2D")
if((r&$.bA().a)!==0)s.push("TxtCube")
if((r&$.dB().a)!==0)s.push("Clr3")
if((r&$.dC().a)!==0)s.push("Clr4")
if((r&$.c7().a)!==0)s.push("Weight")
if((r&$.aZ().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.hn.prototype={}
D.bH.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
E:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.I(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.E(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.I(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.E(p,b)
s=p===!0||s}return s},
u:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.L():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.w(P.bL(p,!0),new D.hE(s))
r=q.b
if(r!=null){q.b=[]
C.a.w(r,new D.hF(s))}return!0},
h0:function(){return this.u(null)},
ao:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.u(s)}}}}
D.hE.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.hF.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.L.prototype={}
D.as.prototype={}
D.at.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.p(this.d)+" => "+H.p(this.e)}}
X.cb.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cb))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.e0.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e0))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.cx.prototype={}
X.hP.prototype={}
X.cD.prototype={}
X.hV.prototype={
aX:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.S(o.a+b.a,o.b+b.b)
o=q.a.gaL()
s=$.a0
if(s==null)s=$.a0=new V.S(0,0)
r=q.x
q.z=new P.P(p,!1)
q.x=n
return new X.bN(a,s,r,o,n)},
ce:function(a,b){this.r=a.a
return!1},
b6:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
b5:function(a,b){var s=this.d
if(s==null)return!1
s.u(this.aX(a,b))
return!0},
hi:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaL()
r=this.x
Date.now()
q.u(new X.bO(new V.Y(a.a,a.b),s,r))
return!0},
eZ:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.u(new X.cD(c,q.a.gaL(),b))
q.y=new P.P(s,!1)
s=$.a0
q.x=s==null?$.a0=new V.S(0,0):s}}
X.Z.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.Z))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.p(s,"+")}}
X.bN.prototype={}
X.ie.prototype={
bx:function(a,b,c){var s=this,r=new P.P(Date.now(),!1),q=s.a.gaL(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bN(a,p,o,q,b)},
ce:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.u(this.bx(a,b,!0))
return!0},
b6:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.u(r.bx(a,b,!0))
return!0},
b5:function(a,b){var s=this.d
if(s==null)return!1
s.u(this.bx(a,b,!1))
return!0},
hj:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaL()
Date.now()
r.u(new X.bO(new V.Y(a.a,a.b),s,b))
return!0},
gdh:function(){var s=this.b
return s==null?this.b=D.A():s},
gco:function(){var s=this.c
return s==null?this.c=D.A():s},
gdE:function(){var s=this.d
return s==null?this.d=D.A():s}}
X.bO.prototype={}
X.eo.prototype={}
X.cY.prototype={}
X.iK.prototype={
aX:function(a,b){var s,r,q,p,o=this,n=new P.P(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a0
if(r==null){r=new V.S(0,0)
$.a0=r
s=r}else s=r}r=o.a.gaL()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cY(q,p,r,s)},
hh:function(a){var s=this.b
if(s==null)return!1
s.u(this.aX(a,!0))
return!0},
hf:function(a){var s=this.c
if(s==null)return!1
s.u(this.aX(a,!0))
return!0},
hg:function(a){var s=this.d
if(s==null)return!1
s.u(this.aX(a,!1))
return!0}}
X.f3.prototype={
gay:function(a){var s=this.b
return s==null?this.b=new X.hP(new X.Z(!1,!1,!1),P.kJ(t.S)):s},
ga3:function(){var s,r=this.c
if(r==null){r=$.a0
if(r==null){r=$.a0=new V.S(0,0)
s=r}else s=r
r=this.c=new X.ie(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gac:function(){var s=this.d
if(s==null){s=$.a0
if(s==null)s=$.a0=new V.S(0,0)
s=this.d=new X.hV(this,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return s},
gaO:function(){var s,r=this.e
if(r==null){r=$.a0
if(r==null){r=$.a0=new V.S(0,0)
s=r}else s=r
r=this.e=new X.iK(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gaL:function(){var s=this.a
return V.kS(0,0,C.f.gdc(s).c,C.f.gdc(s).d)},
cJ:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.e0(p,new X.Z(s,r,q))},
aK:function(a){var s,r,q=this.gay(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.Z(p,s,r)},
bN:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gay(this)
r=a.altKey
q=a.shiftKey
p.c=new X.Z(s,r===!0,q===!0)},
at:function(a){var s,r,q,p
if(a==null){s=$.a0
return s==null?$.a0=new V.S(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.S(r-p,q-s)},
aZ:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.Y(r,s)},
bI:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ah(n)
m=o.pageY
m.toString
C.d.ah(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ah(l)
l=o.pageY
l.toString
l=C.d.ah(l)
k=j.top
k.toString
s.push(new V.S(n-m,l-k))}return s},
aq:function(a){var s,r,q,p
if(a==null)return new X.cb(0,new X.Z(!1,!1,!1))
s=a.buttons
if(s==null)s=0
r=a.ctrlKey
r.toString
if(!r){r=a.metaKey
r.toString}else r=!0
q=a.altKey
q.toString
p=a.shiftKey
p.toString
return new X.cb(s,new X.Z(r,q,p))},
by:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
n.toString
s=a.pageX
s.toString
r=a.pageY
r.toString
q=n.left
q.toString
p=s-q
if(p<0)return!1
s=n.top
s.toString
o=r-s
if(o<0)return!1
s=n.width
s.toString
if(p<s){n=n.height
n.toString
n=o<n}else n=!1
return n},
eT:function(a){return this.f=!0},
eH:function(a){return this.f=!1},
eN:function(a){if(this.f&&this.by(a))a.preventDefault()},
eX:function(a){var s,r,q=this
if(!q.f)return
s=q.cJ(a)
r=q.gay(q)
r.c=s.b
r.d.l(0,s.a)
r=r.a
r=r==null?null:r.u(new X.cx(s))
if(r===!0)a.preventDefault()},
eV:function(a){var s,r,q=this
if(!q.f)return
s=q.cJ(a)
r=q.gay(q)
r.c=s.b
r.d.E(0,s.a)},
f0:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aK(a)
if(p.x){s=p.aq(a)
r=p.aZ(a)
if(p.gac().ce(s,r))a.preventDefault()
return}s=p.aq(a)
q=p.at(a)
if(p.ga3().ce(s,q))a.preventDefault()},
f4:function(a){var s,r,q,p=this
p.aK(a)
s=p.aq(a)
if(p.x){r=p.aZ(a)
if(p.gac().b6(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga3().b6(s,q))a.preventDefault()},
eR:function(a){var s,r,q,p=this
if(!p.by(a)){p.aK(a)
s=p.aq(a)
if(p.x){r=p.aZ(a)
if(p.gac().b6(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga3().b6(s,q))a.preventDefault()}},
f2:function(a){var s,r,q,p=this
p.aK(a)
s=p.aq(a)
if(p.x){r=p.aZ(a)
if(p.gac().b5(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga3().b5(s,q))a.preventDefault()},
eP:function(a){var s,r,q,p=this
if(!p.by(a)){p.aK(a)
s=p.aq(a)
if(p.x){r=p.aZ(a)
if(p.gac().b5(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga3().b5(s,q))a.preventDefault()}},
f6:function(a){var s,r,q=this
q.aK(a)
s=new V.Y(C.u.gfZ(a),C.u.gh_(a)).N(0,q.Q)
if(q.x){if(q.gac().hi(s))a.preventDefault()
return}r=q.at(a)
if(q.ga3().hj(s,r))a.preventDefault()},
f8:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aq(q.y)
r=q.at(q.y)
q.gac().eZ(s,r,p)}},
fo:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bN(a)
s=r.bI(a)
if(r.gaO().hh(s))a.preventDefault()},
fk:function(a){var s
this.bN(a)
s=this.bI(a)
if(this.gaO().hf(s))a.preventDefault()},
fm:function(a){var s
this.bN(a)
s=this.bI(a)
if(this.gaO().hg(s))a.preventDefault()}}
D.ck.prototype={
ap:function(a){var s=this.r
return s==null?null:s.u(a)},
e5:function(){return this.ap(null)},
$icz:1}
D.cA.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.A():s},
gdA:function(){var s=this.z
return s==null?this.z=D.A():s},
ap:function(a){var s=this.y
return s==null?null:s.u(a)},
cP:function(a){var s=this.z
return s==null?null:s.u(a)},
eY:function(){return this.cP(null)},
fa:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.ej(a[r]))return!1
return!0},
eB:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcO(),q=this.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.bH()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ap(new D.as())},
fe:function(a,b){var s,r,q,p
for(s=b.gL(b),r=this.gcO(),q=this.e;s.q();){p=s.gD(s)
C.a.E(q,p)
p.gn().E(0,r)}this.ap(new D.at())},
ej:function(a){var s=C.a.I(this.f,a)
return s}}
V.K.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.K))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aG.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aG))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
t:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.hD.prototype={}
V.cJ.prototype={
a5:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cJ))return!1
s=b.a
$.y().toString
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
i:function(a){var s,r,q,p,o=this,n=V.c4([o.a,o.d,o.r],3,0),m=V.c4([o.b,o.e,o.x],3,0),l=V.c4([o.c,o.f,o.y],3,0),k=n.length
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
V.bM.prototype={
a5:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c5:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.y().toString
if(Math.abs(b3-0)<1e-9)return V.a5()
s=1/b3
r=-l
q=-a2
return V.aw((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
N:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aw(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bn:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.x(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bb:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.W(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bM))return!1
s=b.a
$.y().toString
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
i:function(a){return this.t()},
A:function(a){var s,r,q,p,o,n=this,m=V.c4([n.a,n.e,n.y,n.cx],3,0),l=V.c4([n.b,n.f,n.z,n.cy],3,0),k=V.c4([n.c,n.r,n.Q,n.db],3,0),j=V.c4([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
t:function(){return this.A("")}}
V.S.prototype={
a7:function(a){return new V.Y(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"},
t:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.W.prototype={
aU:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
t:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aM.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aM))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
t:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.eq.prototype={
gan:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eq))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.Y.prototype={
c7:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b},
N:function(a,b){return new V.Y(this.a*b,this.b*b)},
a8:function(a,b){var s
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.bt
return s==null?$.bt=new V.Y(0,0):s}return new V.Y(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.x.prototype={
c7:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c8:function(a,b){return new V.x(V.kr(this.a,a.a,b),V.kr(this.b,a.b,b),V.kr(this.c,a.c,b))},
F:function(){var s=this,r=Math.sqrt(s.a1(s))
if(r===1)return s
return s.a8(0,r)},
b1:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.x(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
aQ:function(a){return new V.x(-this.a,-this.b,-this.c)},
a8:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.d3()
return new V.x(this.a/b,this.b/b,this.c/b)},
dz:function(){$.y().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.x))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
t:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
U.hp.prototype={
br:function(a){var s=V.oz(a,this.c,this.b)
return s},
gn:function(){var s=this.y
return s==null?this.y=D.A():s},
J:function(a){var s=this.y
return s==null?null:s.u(a)},
scp:function(a,b){},
sca:function(a){var s,r=this,q=r.b
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.br(s)}r.J(new D.w("maximumLocation",q,r.b))}},
scd:function(a){var s,r=this,q=r.c
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.br(s)}r.J(new D.w("minimumLocation",q,r.c))}},
sa_:function(a,b){var s,r=this
b=r.br(b)
s=r.d
$.y().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.J(new D.w("location",s,b))}},
scb:function(a){var s,r,q=this,p=q.e
$.y().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.J(new D.w("maximumVelocity",p,a))}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.J(new D.w("velocity",r,a))}},
sbW:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.y().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.J(new D.w("dampening",s,a))}},
ai:function(a,b){var s,r,q,p=this,o=p.f
$.y().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa_(0,p.d+s*b)
o=p.x
$.y().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sV(s)}}}
U.ce.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.A():s},
aP:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bI.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
J:function(a){var s=this.e
return s==null?null:s.u(a)},
a4:function(){return this.J(null)},
ez:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaG(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gn()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.J(new D.as())},
fc:function(a,b){var s,r
for(s=b.gL(b),r=this.gaG();s.q();)s.gD(s).gn().E(0,r)
this.J(new D.at())},
aP:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a3(o,o.length),n=H.U(o).c,s=null;o.q();){r=n.a(o.d)
if(r!=null){q=r.aP(0,b,c)
s=s==null?q:q.N(0,s)}}p.f=s==null?V.a5():s
o=p.e
if(o!=null)o.ao(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.N(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia_:1}
U.a_.prototype={}
U.d0.prototype={
gn:function(){var s=this.cy
return s==null?this.cy=D.A():s},
J:function(a){var s=this.cy
return s==null?null:s.u(a)},
a4:function(){return this.J(null)},
b_:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga3().gdh().l(0,s.gbz())
a.ga3().gdE().l(0,s.gbB())
a.ga3().gco().l(0,s.gbD())
return!0},
bA:function(a){var s=this,r=s.c,q=s.a
if(!r.m(0,q==null?null:q.gay(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bC:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a7(a.d)
if(s.a1(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa_(0,-a.y.a7(r).N(0,2).a8(0,s.gan()).a*2.5+p.z)
q.sV(0)
p.Q=a.z.a7(r).N(0,2).a8(0,s.gan())
p.a4()},
bE:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a1(s)>0.0001){r.b.sV(r.Q.a*10*2.5)
r.a4()}},
aP:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ai(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aw(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia_:1}
U.d1.prototype={
gn:function(){var s=this.fx
return s==null?this.fx=D.A():s},
J:function(a){var s=this.fx
return s==null?null:s.u(a)},
a4:function(){return this.J(null)},
b_:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga3().gdh().l(0,q.gbz())
a.ga3().gdE().l(0,q.gbB())
a.ga3().gco().l(0,q.gbD())
s=a.gac()
r=s.f
s=r==null?s.f=D.A():r
s.l(0,q.ger())
s=a.gac()
r=s.d
s=r==null?s.d=D.A():r
s.l(0,q.geu())
s=a.gaO()
r=s.b
s=r==null?s.b=D.A():r
s.l(0,q.gfJ())
s=a.gaO()
r=s.d
s=r==null?s.d=D.A():r
s.l(0,q.gfH())
s=a.gaO()
r=s.c
s=r==null?s.c=D.A():r
s.l(0,q.gfF())
return!0},
aI:function(a){return new V.Y(a.a,a.b)},
bA:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bC:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a7(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aI(a.y.a7(r).N(0,2).a8(0,s.gan()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aI(a.z.a7(r).N(0,2).a8(0,s.gan()))
n.a4()},
bE:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a4()}},
es:function(a){var s=this
if(t.b7.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ev:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aI(a.y.a7(r).N(0,2).a8(0,s.gan()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aI(a.z.a7(r).N(0,2).a8(0,s.gan()))
n.a4()},
fK:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fI:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a7(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aI(a.y.a7(r).N(0,2).a8(0,s.gan()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aI(a.z.a7(r).N(0,2).a8(0,s.gan()))
n.a4()},
fG:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a4()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ai(0,s)
n=p.b
n.ai(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aw(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.N(0,V.aw(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia_:1}
U.d2.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.A():s},
J:function(a){var s=this.r
return s==null?null:s.u(a)},
b_:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga3()
r=s.e
s=r==null?s.e=D.A():r
r=this.gew()
s.l(0,r)
s=a.gac()
q=s.e;(q==null?s.e=D.A():q).l(0,r)
return!0},
ex:function(a){var s=this,r=s.b,q=s.a
if(!r.m(0,q==null?null:q.gay(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.J(new D.w("zoom",r,q))}},
aP:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aw(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia_:1}
M.cd.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.A():s},
R:function(a){var s=this.r
return s==null?null:s.u(a)},
aW:function(){return this.R(null)},
fg:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q].gn()
o=p.a;(o==null?p.a=[]:o).push(r)}this.R(new D.as())},
fi:function(a,b){var s,r
for(s=b.gL(b),r=this.gP();s.q();)s.gD(s).gn().E(0,r)
this.R(new D.at())},
a6:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a3(s,s.length),r=H.U(s).c;s.q();)r.a(s.d).a6(a)
q.f=!1},
$ibo:1}
M.ci.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.A():s},
R:function(a){var s=this.r
return s==null?null:s.u(a)},
aW:function(){return this.R(null)},
sb0:function(a){var s,r,q=this
if(a==null)a=new X.hL()
s=q.b
if(s!==a){if(s!=null)s.gn().E(0,q.gP())
r=q.b
q.b=a
a.gn().l(0,q.gP())
q.R(new D.w("camera",r,q.b))}},
sb8:function(a,b){var s,r,q=this
if(b==null)b=X.jY(null)
s=q.c
if(s!==b){if(s!=null)s.gn().E(0,q.gP())
r=q.c
q.c=b
b.gn().l(0,q.gP())
q.R(new D.w("target",r,q.c))}},
sb9:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().E(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gP())
r.R(new D.w("technique",s,r.d))}},
a6:function(a){var s,r=this
a.cg(r.d)
s=r.c
if(s!=null)s.T(a)
s=r.b
if(s!=null)s.T(a)
s=r.e
s.ai(0,a)
s.a6(a)
s=r.b
if(s!=null)s.aC(a)
a.cf()},
$ibo:1}
M.co.prototype={
R:function(a){var s=this.y
return s==null?null:s.u(a)},
aW:function(){return this.R(null)},
eJ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bH()
n=o.a;(n==null?o.a=[]:n).push(r)}this.R(new D.as())},
eL:function(a,b){var s,r
for(s=b.gL(b),r=this.gP();s.q();)s.gD(s).gn().E(0,r)
this.R(new D.at())},
sb0:function(a){var s,r,q=this
if(a==null)a=X.kO(null)
s=q.b
if(s!==a){if(s!=null)s.gn().E(0,q.gP())
r=q.b
q.b=a
a.gn().l(0,q.gP())
q.R(new D.w("camera",r,q.b))}},
sb8:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gn().E(0,r.gP())
s=r.c
r.c=b
b.gn().l(0,r.gP())
r.R(new D.w("target",s,r.c))}},
sb9:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().E(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gP())
r.R(new D.w("technique",s,r.d))}},
gn:function(){var s=this.y
return s==null?this.y=D.A():s},
a6:function(a){var s,r,q,p=this
a.cg(p.d)
s=p.c
if(s!=null)s.T(a)
s=p.b
if(s!=null)s.T(a)
s=p.d
if(s!=null)s.ai(0,a)
for(s=p.e.a,r=new J.a3(s,s.length),q=H.U(r).c;r.q();)q.a(r.d).ai(0,a)
for(s=new J.a3(s,s.length),r=H.U(s).c;s.q();)r.a(s.d).a6(a)
if(p.b!=null){a.cy.aA()
a.db.aA()}a.cf()},
$ibo:1}
A.hh.prototype={}
A.hi.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h1:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dg:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a9.prototype={
gaj:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
m:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a9))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.cH.prototype={
e2:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.aQ(""),d0=c8.fr
if(d0){s=""+"uniform mat4 objMat;\n"
c9.a=s}else s=""
r=c8.fx
s=(r?c9.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
c9.a=s
s+="\n"
c9.a=s
s=c9.a=s+"attribute vec3 posAttr;\n"
q=c8.k4
if(q){s+="attribute vec3 normAttr;\n"
c9.a=s}p=c8.r1
c9.a=(p?c9.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.nO(c8,c9)
A.nQ(c8,c9)
A.nP(c8,c9)
A.nS(c8,c9)
A.nT(c8,c9)
A.nR(c8,c9)
A.nU(c8,c9)
s=c9.a+="vec4 getPos()\n"
s+="{\n"
c9.a=s
o=c8.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
c9.a=s
s+="}\n"
c9.a=s
s+="\n"
c9.a=s
s+="void main()\n"
c9.a=s
s=c9.a=s+"{\n"
if(o){s+="   setupBendData();\n"
c9.a=s}if(q){s+="   normalVec = getNorm();\n"
c9.a=s}if(p){s+="   binormalVec = getBinm();\n"
c9.a=s}if(c8.r2){s+="   txt2D = getTxt2D();\n"
c9.a=s}if(c8.rx){s+="   txtCube = getTxtCube();\n"
c9.a=s}if(c8.k2){s+="   objPos = getObjPos();\n"
c9.a=s}s=(c8.k3?c9.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
c9.a=s
s+="}\n"
c9.a=s
s=c9.a=s+"\n"
c3.du(0,s.charCodeAt(0)==0?s:s,A.nN(c8))
c3.y=c3.gaa(c3).h(0,"posAttr")
c3.Q=c3.gaa(c3).h(0,"normAttr")
c3.z=c3.gaa(c3).h(0,"binmAttr")
c3.ch=c3.gaa(c3).h(0,"txt2DAttr")
c3.cx=c3.gaa(c3).h(0,"txtCubeAttr")
c3.cy=c3.gaa(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gG().M(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gG().M(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gG().M(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gG().M(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gG().M(0,"viewMat"))
if(c8.x1)c3.go=t.V.a(c3.gG().M(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gG().M(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gG().M(0,"colorMat"))
c3.k3=[]
s=c8.aM
if(s>0){c3.k2=t.v.a(c3.gG().M(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.e(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.e(c6+q+c7))
r.push(d0.a(l))}}if(c8.a.a)c3.k4=t.g.a(c3.gG().M(0,"emissionClr"))
if(c8.b.a)c3.rx=t.g.a(c3.gG().M(0,"ambientClr"))
if(c8.c.a)c3.x2=t.g.a(c3.gG().M(0,"diffuseClr"))
if(c8.d.a)c3.aM=t.g.a(c3.gG().M(0,"invDiffuseClr"))
d0=c8.e.a
if(!d0)s=!1
else s=!0
if(s){c3.dl=t.n.a(c3.gG().M(0,"shininess"))
if(d0)c3.dk=t.g.a(c3.gG().M(0,"specularClr"))}if(c8.db){c3.dm=t.a.a(c3.gG().M(0,"envSampler"))
if(c8.r.a)c3.dn=t.g.a(c3.gG().M(0,"reflectClr"))
d0=c8.x.a
if(!d0)s=!1
else s=!0
if(s){c3.dq=t.n.a(c3.gG().M(0,"refraction"))
if(d0)c3.dr=t.g.a(c3.gG().M(0,"refractClr"))}}if(c8.y.a)c3.ds=t.n.a(c3.gG().M(0,"alpha"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.bX=P.R(r,t.W)
c3.bY=P.R(r,t.J)
for(r=t.v,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
i=j.a
h="barLight"+i
g=[]
for(o=j.b,f=(i&4)!==0,n=0;n<o;++n){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].startPnt"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].endPnt"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].color"
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
q.a(c)
if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att0"
b=m.h(0,e)
if(b==null)H.f(P.e(c6+e+c7))
p.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att1"
a=m.h(0,e)
if(a==null)H.f(P.e(c6+e+c7))
p.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att2"
a0=m.h(0,e)
if(a0==null)H.f(P.e(c6+e+c7))
p.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.eS(l,d,c,a3,a2,a1))}c3.bY.k(0,i,g)
o=c3.bX
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.bZ=P.R(r,t.W)
c3.c_=P.R(r,t.L)
for(r=t.v,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
i=j.a
h="dirLight"+i
g=[]
for(o=j.b,f=(i&1)!==0,n=0;n<o;++n){if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objUp"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objRight"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objDir"
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
q.a(c)
a4=c
a5=d
a6=l}else{a4=c4
a5=a4
a6=a5}m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].viewDir"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].color"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"sTexture2D"+n
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
p.a(c)
a7=c}else a7=c4
g.push(new A.eT(a6,a5,a4,l,d,a7))}c3.c_.k(0,i,g)
o=c3.bZ
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.c0=P.R(r,t.W)
c3.c1=P.R(r,t.U)
for(r=t.v,q=t.g,p=t.V,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
i=j.a
h="pointLight"+i
g=[]
for(a8=j.b,a9=(i&4)!==0,b0=(i&2)!==0,b1=(i&1)!==0,b2=(i&3)!==0,n=0;n<a8;++n){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].point"
l=m.h(0,b3)
if(l==null)H.f(P.e(c6+b3+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].viewPnt"
d=m.h(0,b3)
if(d==null)H.f(P.e(c6+b3+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].color"
c=m.h(0,b3)
if(c==null)H.f(P.e(c6+b3+c7))
q.a(c)
if(b2){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].invViewRotMat"
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
p.a(b)
b4=b}else b4=c4
if(b1){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"sTextureCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
o.a(b)
a7=b}else a7=c4
if(b0){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"sShadowCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
o.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].shadowAdj"
a=m.h(0,b3)
if(a==null)H.f(P.e(c6+b3+c7))
f.a(a)
b5=b
b6=a}else{b5=c4
b6=b5}if(a9){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att0"
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
e.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att1"
a=m.h(0,b3)
if(a==null)H.f(P.e(c6+b3+c7))
e.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att2"
a0=m.h(0,b3)
if(a0==null)H.f(P.e(c6+b3+c7))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.eW(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.c1.k(0,i,g)
a8=c3.c0
m=c3.r
if(m==null)H.f(P.e(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.e(c6+a9+c7))
a8.k(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.c2=P.R(s,t.W)
c3.c3=P.R(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.o)(c8),++k){j=c8[k]
i=j.a
h="spotLight"+i
g=[]
for(f=j.b,e=(i&2)!==0,a8=(i&1)!==0,a9=(i&4)!==0,b0=(i&8)!==0,b1=(i&3)!==0,n=0;n<f;++n){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objPnt"
l=m.h(0,b2)
if(l==null)H.f(P.e(c6+b2+c7))
r.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objDir"
d=m.h(0,b2)
if(d==null)H.f(P.e(c6+b2+c7))
r.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].viewPnt"
c=m.h(0,b2)
if(c==null)H.f(P.e(c6+b2+c7))
r.a(c)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].color"
b=m.h(0,b2)
if(b==null)H.f(P.e(c6+b2+c7))
r.a(b)
if(b1){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objUp"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
r.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objRight"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
r.a(a0)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].tuScalar"
b7=m.h(0,b2)
if(b7==null)H.f(P.e(c6+b2+c7))
q.a(b7)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].tvScalar"
b8=m.h(0,b2)
if(b8==null)H.f(P.e(c6+b2+c7))
q.a(b8)
b9=b8
c0=b7
a5=a0
a6=a}else{b9=c4
c0=b9
a5=c0
a6=a5}if(e){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].shadowAdj"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
p.a(a)
b6=a}else b6=c4
if(b0){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].cutoff"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].coneAngle"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
q.a(a0)
c1=a0
c2=a}else{c1=c4
c2=c1}if(a9){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att0"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att1"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
q.a(a0)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att2"
b7=m.h(0,b2)
if(b7==null)H.f(P.e(c6+b2+c7))
q.a(b7)
a1=b7
a2=a0
a3=a}else{a1=c4
a2=a1
a3=a2}if(a8){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"sTexture2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
o.a(a)
a7=a}else a7=c4
if(e){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"sShadow2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
o.a(a)
b5=a}else b5=c4
g.push(new A.eZ(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.c3.k(0,i,g)
f=c3.c2
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
f.k(0,i,s.a(l))}}}},
fz:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.cs(b)}}
A.b2.prototype={
i:function(a){return"barLight"+this.a}}
A.b7.prototype={
i:function(a){return"dirLight"+this.a}}
A.bm.prototype={
i:function(a){return"pointLight"+this.a}}
A.bq.prototype={
i:function(a){return"spotLight"+this.a}}
A.i_.prototype={
i:function(a){return this.bh}}
A.eS.prototype={}
A.eT.prototype={}
A.eW.prototype={}
A.eZ.prototype={}
A.bS.prototype={
du:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cK(b,35633)
r=n.cK(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gar(),s)
q.attachShader(n.gar(),r)
q.linkProgram(n.gar())
if(!H.li(q.getProgramParameter(n.gar(),35714))){o=q.getProgramInfoLog(n.gar())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.e("Failed to link shader: "+o))}n.fB()
n.fD()},
gaa:function(a){var s=this.f
if(s==null)throw H.b(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gG:function(){var s=this.r
if(s==null)throw H.b(P.e(u.C))
return s},
gar:function(){var s=this.e
if(s==null)throw H.b(P.e(u.F))
return s},
T:function(a){a.a.useProgram(this.e)
this.gaa(this).h1()},
cK:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.li(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.e('Error compiling shader "'+H.p(q)+'": '+s))}return q},
fB:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.js(l.getProgramParameter(o.gar(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.f(P.e(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.f(P.e(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.hh(l,q,p))}o.f=new A.hi(m)},
fD:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.js(j.getProgramParameter(m.gar(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.f(P.e(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.f(P.e(l))
p=q.name
p.toString
p=j.getUniformLocation(r,p)
p.toString
o=q.type
o.toString
n=q.size
n.toString
q=q.name
q.toString
k.push(m.fY(o,n,q,p))}m.r=new A.iW(k)},
aH:function(a,b,c){var s=this.a
if(a===1)return new A.cZ(s,b,c)
else return A.k7(s,this.e,b,a,c)},
el:function(a,b,c){var s=this.a
if(a===1)return new A.eX(s,b,c)
else return A.k7(s,this.e,b,a,c)},
em:function(a,b,c){var s=this.a
if(a===1)return new A.eY(s,b,c)
else return A.k7(s,this.e,b,a,c)},
bf:function(a,b){return new P.fl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fY:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aH(b,c,d)
case 5121:return s.aH(b,c,d)
case 5122:return s.aH(b,c,d)
case 5123:return s.aH(b,c,d)
case 5124:return s.aH(b,c,d)
case 5125:return s.aH(b,c,d)
case 5126:return new A.eP(s.a,c,d)
case 35664:return new A.iS(s.a,c,d)
case 35665:return new A.eQ(s.a,c,d)
case 35666:return new A.eR(s.a,c,d)
case 35667:return new A.iT(s.a,c,d)
case 35668:return new A.iU(s.a,c,d)
case 35669:return new A.iV(s.a,c,d)
case 35674:return new A.iX(s.a,c,d)
case 35675:return new A.eU(s.a,c,d)
case 35676:return new A.eV(s.a,c,d)
case 35678:return s.el(b,c,d)
case 35680:return s.em(b,c,d)
case 35670:throw H.b(s.bf("BOOL",c))
case 35671:throw H.b(s.bf("BOOL_VEC2",c))
case 35672:throw H.b(s.bf("BOOL_VEC3",c))
case 35673:throw H.b(s.bf("BOOL_VEC4",c))
default:throw H.b(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.cU.prototype={}
A.iQ.prototype={}
A.iW.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
M:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.t()},
t:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cZ.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iT.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iU.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iV.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iR.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eP.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iS.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eQ.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eR.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.iX.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eU.prototype={
a9:function(a){var s=new Float32Array(H.dv(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eV.prototype={
a9:function(a){var s=new Float32Array(H.dv(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eX.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eY.prototype={
cs:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jr.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c8(q.b,b).c8(q.d.c8(q.c,b),c)
a.sa_(0,new V.W(p.a,p.b,p.c))
a.shu(p.F())
q=1-b
s=1-c
s=new V.aM(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.N(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.Z()}r.f.$3(a,b,c)},
$S:14}
F.jS.prototype={
$2:function(a,b){return 0},
$S:36}
F.jR.prototype={
$3:function(a,b,c){var s,r,q=this.b.$2(b,c)
if(typeof q!=="number")return H.of(q)
s=this.a+q
r=a.f
q=(r!=null?new V.x(r.a,r.b,r.c):V.l4()).F()
a.sa_(0,new V.W(q.a*s,q.b*s,q.c*s))},
$S:14}
F.ah.prototype={
aE:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.b(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.b(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.bO(a)
s.bP(b)
s.fA(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gK().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Z()}},
b2:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.E(r.gK().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Z()}}s.bJ()
s.bK()
s.fs()},
bO:function(a){this.a=a
a.gK().b.push(this)},
bP:function(a){this.b=a
a.gK().c.push(this)},
fA:function(a){this.c=a
a.gK().d.push(this)},
bJ:function(){var s=this.a
if(s!=null)C.a.E(s.gK().b,this)
this.a=null},
bK:function(){var s=this.b
if(s!=null)C.a.E(s.gK().c,this)
this.b=null},
fs:function(){var s=this.c
if(s!=null)C.a.E(s.gK().d,this)
this.c=null},
ef:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d3()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dz())return p
return q.F()},
eh:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aU(0,n)
q=new V.x(o.a,o.b,o.c).F()
o=r.aU(0,n)
return q.b1(new V.x(o.a,o.b,o.c).F()).F()},
bT:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ef()
if(s==null){s=q.eh()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Z()}return!0},
ee:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d3()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dz())return p
return q.F()},
eg:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.y().toString
if(Math.abs(p-0)<1e-9){j=b.aU(0,e)
o=new V.x(j.a,j.b,j.c).F()
if(q.a-r.a<0)o=o.aQ(0)}else{n=(j-s.b)/p
j=b.aU(0,e)
j=new V.W(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aU(0,h)
o=new V.x(j.a,j.b,j.c).F()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aQ(0)}m=l.d
if(m!=null){m=m.F()
o=m.b1(o).F().b1(m).F()}return o},
bR:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.ee()
if(s==null){s=q.eg()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Z()}return!0},
gfU:function(a){var s=this
if(J.N(s.a,s.b))return!0
if(J.N(s.b,s.c))return!0
if(J.N(s.c,s.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
A:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gv(p)
p=a+C.c.ae(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gv(o)
p=p+C.c.ae(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gv(o)
s=p+C.c.ae(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.t()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.t()
return s+((p==null?"-":p)+"}")},
t:function(){return this.A("")}}
F.hG.prototype={}
F.ix.prototype={
b4:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.c
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.c
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.a
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gv(q)
s=c.c
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.b
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else return!1}}}}
F.hQ.prototype={
e1:function(a,b){var s=this,r=a.a
if(r==null)throw H.b(P.e("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.b(P.e("May not create a line with vertices attached to different shapes."))
s.bO(a)
s.bP(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga2(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Z()}},
b2:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.a.E(r.ga2(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Z()}}s.bJ()
s.bK()},
bO:function(a){this.a=a
a.ga2(a).b.push(this)},
bP:function(a){this.b=a
a.ga2(a).c.push(this)},
bJ:function(){var s=this.a
if(s!=null)C.a.E(s.ga2(s).b,this)
this.a=null},
bK:function(){var s=this.b
if(s!=null)C.a.E(s.ga2(s).c,this)
this.b=null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
A:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gv(s)
s=a+C.c.ae(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gv(r)
return s+C.c.ae(C.b.i(r==null?-1:r),0)},
t:function(){return this.A("")}}
F.hR.prototype={}
F.iP.prototype={
b4:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.b
return q==(s==null?r:s.gv(s))}else{q=b.a
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.a
return q==(s==null?r:s.gv(s))}else return!1}}}
F.ij.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
A:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gv(s)
return a+C.c.ae(C.b.i(s),0)},
t:function(){return this.A("")}}
F.is.prototype={
gO:function(){var s=this.a
return s==null?this.a=new F.q(this,[]):s},
gb7:function(a){var s=this.b
return s==null?this.b=new F.bp(this,[]):s},
ga2:function(a){var s=this.c
return s==null?this.c=new F.cT(this,[]):s},
gK:function(){var s=this.d
return s==null?this.d=new F.cS(this,[]):s},
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
cc:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gO().S()
s=d.gO().c.length
for(b=a.gO().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.q(d,[])
o.l(0,p.fX())}d.gO().S()
for(b=a.gb7(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.q(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.q(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bp(d,[]):m).a
m=o.a;(m==null?o.a=new F.q(o,[]):m).l(0,j)
o=new F.ij()
if(j.a==null)H.f(P.e("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.d5([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bp(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.u(c)}}}for(b=a.ga2(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.q(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.q(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.q(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.q(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cT(d,[]):m).a
m=o.a;(m==null?o.a=new F.q(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.q(o,[]):m).l(0,g)
new F.hQ().e1(h,g)}for(b=a.gK().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.q(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.q(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.q(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.q(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.q(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.q(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cS(d,[]):m).a
m=o.a;(m==null?o.a=new F.q(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.q(o,[]):m).l(0,g)
m=o.a;(m==null?o.a=new F.q(o,[]):m).l(0,e)
new F.ah().aE(h,g,e)}b=d.e
if(b!=null)b.ao(0)},
av:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gK().av()||!1
if(!r.gO().av())s=!1
q=r.e
if(q!=null)q.ao(0)
return s},
h8:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gO().c.slice(0)
for(;s.length!==0;){r=C.a.gh3(s)
C.a.cj(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.b4(0,r,o)){q.push(o)
C.a.cj(s,p)}}if(q.length>1)b.cc(q)}n.gO().S()
n.ga2(n).ck()
n.gK().ck()
n.gb7(n).hm()
n.ga2(n).cl(new F.iP())
n.gK().cl(new F.ix())
m=n.e
if(m!=null)m.ao(0)},
d8:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gO().c.length,c=$.am(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.b0().a)!==0)++a
if((b&$.b_().a)!==0)++a
if((b&$.bz().a)!==0)++a
if((b&$.bA().a)!==0)++a
if((b&$.dB().a)!==0)++a
if((b&$.dC().a)!==0)++a
if((b&$.c7().a)!==0)++a
if((b&$.aZ().a)!==0)++a
s=a1.gct(a1)
r=P.hT(d*s,0,!1)
e.a=0
q=P.mo(a,new F.it(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.dv(r)),35044)
c.bindBuffer(f,g)
p=new Z.bD(new Z.f5(f,b),[],q,a1)
if(h.gb7(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bp(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.q(m,[]):l).S()}b=b.e}o.push(b==null?0:b);++n}k=Z.k9(c,34963,o)
p.b.push(new Z.cs(0,o.length,k))}if(h.ga2(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.cT(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.q(m,[]):l).S()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.q(m,[]):l).S()}b=b.e}o.push(b==null?0:b);++n}k=Z.k9(c,34963,o)
p.b.push(new Z.cs(1,o.length,k))}if(h.gK().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cS(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.q(m,[]):l).S()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.q(m,[]):l).S()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.q(m,[]):l).S()}b=b.e}o.push(b==null?0:b);++n}k=Z.k9(c,34963,o)
p.b.push(new Z.cs(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.gO().c.length!==0){q.push("Vertices:")
q.push(s.gO().A(r))}if(s.gb7(s).b.length!==0){q.push("Points:")
q.push(s.gb7(s).A(r))}if(s.ga2(s).b.length!==0){q.push("Lines:")
q.push(s.ga2(s).A(r))}if(s.gK().b.length!==0){q.push("Faces:")
q.push(s.gK().A(r))}return C.a.p(q,"\n")},
Z:function(){var s=this.e
return s==null?null:s.u(null)}}
F.it.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fQ(a),f=g.gct(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.q(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].h7(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.ca(g,f,d*4,h.d)},
$S:37}
F.cS.prototype={
fO:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.q(s,[]):o).l(0,l)
o=s.a;(o==null?s.a=new F.q(s,[]):o).l(0,q)
o=s.a;(o==null?s.a=new F.q(s,[]):o).l(0,p)
n=new F.ah()
n.aE(l,q,p)
m.push(n)}return m},
fP:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.q(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,h)
f=new F.ah()
f.aE(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,g)
f=new F.ah()
f.aE(k,h,g)
e.push(f)}else{(l==null?s.a=new F.q(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,g)
f=new F.ah()
f.aE(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,g)
l=s.a;(l==null?s.a=new F.q(s,[]):l).l(0,k)
f=new F.ah()
f.aE(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
cl:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gO().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.q(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bW([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bW([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.b4(0,n,(q==null?p.d=new F.bW([],[],[]):q).h(0,l))){n.b2()
break}}}}},
ck:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gfU(q))q.b2()}},
av:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bT())q=!1
return q},
bS:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bR())q=!1
return q},
i:function(a){return this.t()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(a))
return C.a.p(p,"\n")},
t:function(){return this.A("")}}
F.cT.prototype={
gj:function(a){return this.b.length},
cl:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gO().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.q(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.bX([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.bX([],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.b4(0,n,(q==null?p.c=new F.bX([],[]):q).h(0,l))){n.b2()
break}}}}},
ck:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.N(q.a,q.b))q.b2()}},
i:function(a){return this.t()},
A:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].A(a+(""+s+". ")))}return C.a.p(r,"\n")},
t:function(){return this.A("")}}
F.bp.prototype={
gj:function(a){return this.b.length},
hm:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
p=q.a
o=p==null
if(o)n=null
else{m=p.b
m=(m==null?p.b=new F.d5([]):m).b.length
n=m}if((n==null?0:n)>1){if(!o){p=p.a
if(p!=null){o=p.b
C.a.E((o==null?p.b=new F.bp(p,[]):o).b,q)}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.u(null)}}}p=q.a
if(p!=null){o=p.b
C.a.E((o==null?p.b=new F.d5([]):o).b,q)}q.a=null}}},
i:function(a){return this.t()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(a))
return C.a.p(p,"\n")},
t:function(){return this.A("")}}
F.d4.prototype={
bV:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.j3(s.cx,p,m,r,q,o,n,a,l)},
fX:function(){return this.bV(null)},
ga2:function(a){var s=this.c
return s==null?this.c=new F.bX([],[]):s},
gK:function(){var s=this.d
return s==null?this.d=new F.bW([],[],[]):s},
gv:function(a){var s=this.a
if(s!=null)s.gO().S()
return this.e},
sa_:function(a,b){var s
if(!J.N(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Z()}},
shu:function(a){var s
if(!J.N(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Z()}},
h7:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.am())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.b0())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.m(0,$.b_())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.m(0,$.bz())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.m(0,$.bA())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.dB())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.m(0,$.dC())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.m(0,$.c7()))return[o.ch]
else if(a.m(0,$.aZ())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
bT:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.d3()
p.gK().w(0,new F.ja(o))
p.r=o.a.F()
if(r){s.Z()
o=s.e
if(o!=null)o.ao(0)}return!0},
bR:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.d3()
p.gK().w(0,new F.j9(o))
p.x=o.a.F()
if(r){s.Z()
o=s.e
if(o!=null)o.ao(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.t()},
A:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.c.ae(C.b.i(q.e),0))
s=q.f
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.t()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.t()
n.push(s==null?o:s)
n.push(V.u(q.ch,3,0))
s=q.cx
s=s==null?p:s.t()
n.push(s==null?o:s)
r=C.a.p(n,", ")
return a+"{"+r+"}"},
t:function(){return this.A("")}}
F.ja.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:8}
F.j9.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:8}
F.q.prototype={
S:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Z()
return!0},
bg:function(a,b,c,d,e,f){var s=F.j3(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
av:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bT()
return!0},
bS:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bR()
return!0},
fS:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.F()
if(!J.N(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.u(null)}}}}}return!0},
i:function(a){return this.t()},
A:function(a){var s,r,q,p
this.S()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].A(a))
return C.a.p(s,"\n")},
t:function(){return this.A("")}}
F.bW.prototype={
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
w:function(a,b){var s=this
C.a.w(s.b,b)
C.a.w(s.c,new F.j4(s,b))
C.a.w(s.d,new F.j5(s,b))},
i:function(a){return this.t()},
t:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
return C.a.p(p,"\n")}}
F.j4.prototype={
$1:function(a){if(!J.N(a.a,this.a))this.b.$1(a)},
$S:8}
F.j5.prototype={
$1:function(a){var s=this.a
if(!J.N(a.a,s)&&!J.N(a.b,s))this.b.$1(a)},
$S:8}
F.bX.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.t()},
t:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
return C.a.p(p,"\n")}}
F.j7.prototype={}
F.j6.prototype={
b4:function(a,b,c){return J.N(b.f,c.f)}}
F.j8.prototype={}
F.ih.prototype={
cc:function(a){var s,r,q,p,o,n=V.d3()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.x(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.F()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){p=a[r]
q=n.F()
if(!J.N(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.u(null)}}}return null}}
F.d5.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.t()},
t:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
return C.a.p(p,"\n")}}
O.e4.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.A():s},
X:function(a){var s=this.fr
return s==null?null:s.u(a)},
bH:function(){return this.X(null)},
cS:function(a){this.a=null
this.X(a)},
fv:function(){return this.cS(null)},
eD:function(a,b){return this.X(new D.as())},
eF:function(a,b){return this.X(new D.at())},
gdB:function(){var s=this,r=s.dx
if(r==null){r=new D.cA([],[],[],[],[])
r.cr(r.geA(),r.gf9(),r.gfd())
r.gn().l(0,s.gcR())
r.gdA().l(0,s.gbd())
s.dx=r}return r},
gd2:function(){var s=this.r
return s==null?this.r=O.e6(this,"ambient"):s},
gdf:function(){var s=this.x
return s==null?this.x=O.e6(this,"diffuse"):s},
gbp:function(){var s=this.z
return s==null?this.z=new O.i2(new V.K(0,0,0),this,"specular",new A.a9(!1,!1,!1)):s},
gdM:function(){var s=this.cx
return s==null?this.cx=O.e6(this,"reflect"):s},
gci:function(){var s=this.cy
return s==null?this.cy=new O.i1(new V.K(0,0,0),this,"refract",new A.a9(!1,!1,!1)):s},
cI:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.Q(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gam()
o=a1.h(0,q.gam())
a1.k(0,p,o==null?1:o)}n=[]
a1.w(0,new O.i3(b,n))
C.a.aT(n,new O.i4())
m=new H.Q(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=[]
m.w(0,new O.i5(b,l))
C.a.aT(l,new O.i6())
k=new H.Q(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gam()
o=k.h(0,q.gam())
k.k(0,p,o==null?1:o)}j=[]
k.w(0,new O.i7(b,j))
C.a.aT(j,new O.i8())
i=new H.Q(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.o)(a0),++r){q=a0[r]
s=q.gam()
p=i.h(0,q.gam())
i.k(0,s,p==null?1:p)}h=[]
i.w(0,new O.i9(b,h))
C.a.aT(h,new O.ia())
a0=C.b.a0(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.i0(new V.aG(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.e6(b,"emission"):a2).c
s=b.gd2().c
p=b.gdf().c
o=b.y
o=(o==null?b.y=O.e6(b,"invDiffuse"):o).c
g=b.gbp().c
f=b.Q
f=(f==null?b.Q=new O.hZ(b,"bump",new A.a9(!1,!1,!1)):f).c
e=b.gdM().c
d=b.gci().c
c=b.db
return A.mq(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hY(b,"alpha",new A.a9(!1,!1,!1)):c).c,n,l,j,h)},
ed:function(a,b){if(b!=null)if(!C.a.I(a,b)){b.a=a.length
a.push(b)}},
ai:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.an(m==null?[]:m)
s=H.U(m).c
for(;m.q();){r=s.a(m.d)
q=$.j2
if(q==null)q=$.j2=new V.x(0,0,1)
r.c=q
p=$.j1
r.d=p==null?$.j1=new V.x(0,1,0):p
p=$.j0
r.e=p==null?$.j0=new V.x(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bn(q).F()
r.d=n.bn(r.d).F()
r.e=n.bn(r.e).F()}}},
dN:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.cI()
r=s.bh
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.cH(s,[],P.R(p,o),P.R(p,t.J),P.R(p,o),P.R(p,t.L),P.R(p,o),P.R(p,t.U),P.R(p,o),P.R(p,t.R),q,r)
a8.e2(s,q)
a9.d1(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.dj
s=b0.e
if(!(s instanceof Z.bD))s=b0.e=null
if(s==null||!s.d.m(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.av()}r=n.r1
if(r){q=b0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gK().bS()
q.gO().bS()
q=q.e
if(q!=null)q.ao(0)}}q=n.rx
if(q){p=b0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gO().fS()
p=p.e
if(p!=null)p.ao(0)}}p=b0.d
l=p==null?a7:p.d8(new Z.f6(a9.a),m)
if(l==null)return
p=l.aw($.am())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.aw($.b0())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.aw($.b_())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aw($.bz())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.aw($.bA())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aw($.aZ())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.T(a9)
if(n.fr){s=a9.dx
s=s.gY(s)
r=a8.db
if(r!=null)r.a9(s.a5(0,!0))}if(n.fx){s=a9.cx
if(s==null){s=a9.db
r=a9.dx
r=a9.cx=s.gY(s).N(0,r.gY(r))
s=r}r=a8.dx
if(r!=null)r.a9(s.a5(0,!0))}s=a9.ch
if(s==null){s=a9.dx
s=a9.ch=a9.ghl().N(0,s.gY(s))}r=a8.fr
if(r!=null)r.a9(s.a5(0,!0))
if(n.go){s=a9.db
s=s.gY(s)
r=a8.dy
if(r!=null)r.a9(s.a5(0,!0))}if(n.x1){s=$.kK
if(s==null){s=new V.cJ(1,0,0,0,1,0,0,0,1)
$.kK=s}r=a8.go
if(r!=null)r.a9(s.a5(0,!0))}if(n.x2){s=V.a5()
r=a8.id
if(r!=null)r.a9(s.a5(0,!0))}if(n.y1){s=V.a5()
r=a8.k1
if(r!=null)r.a9(s.a5(0,!0))}if(n.aM>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.dv(r.a5(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}if(n.a.a){s=a6.f
s=s==null?a7:s.f
if(s==null)s=new V.K(0,0,0)
r=a8.k4
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.k1){if(n.b.a){s=a6.r
s=s==null?a7:s.f
if(s==null)s=new V.K(0,0,0)
r=a8.rx
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.c.a){s=a6.x
s=s==null?a7:s.f
if(s==null)s=new V.K(0,0,0)
r=a8.x2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.d.a){s=a6.y
s=s==null?a7:s.f
if(s==null)s=new V.K(0,0,0)
r=a8.aM
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.e.a
if(!s)r=!1
else r=!0
if(r){r=a6.z
r=r==null?a7:r.ch
if(r==null)r=100
q=a8.dl
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a6.z
s=s==null?a7:s.f
if(s==null)s=new V.K(1,1,1)
r=a8.dk
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.z
if(s.length>0){g=new H.Q(t.y)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gam()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
p=a8.bY.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.ghB()
o=$.ax
p=p.bb(o==null?$.ax=new V.W(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghG()
o=$.ax
p=p.bb(o==null?$.ax=new V.W(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gal(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gdi()){p=e.gd3()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd4()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd5()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.bX.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.gY(r)
a0=new H.Q(t.y)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
p=a8.c_.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=a.bn(e.c).F()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.bZ.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.gY(r)
a1=new H.Q(t.y)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gam()
c=a1.h(0,d)
if(c==null)c=0
a1.k(0,d,c+1)
p=a8.c1.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
a2=a.N(0,e.gY(e))
p=e.gY(e)
o=$.ax
p=p.bb(o==null?$.ax=new V.W(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ax
p=a2.bb(p==null?$.ax=new V.W(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gal(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaB()
p=a2.c5(0)
o=b.d
if(o!=null){h=new Float32Array(H.dv(new V.cJ(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a5(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaB()
p=e.gaB()
if(!C.a.I(k,p)){p.a=k.length
k.push(p)}p=e.gaB()
o=p.gb3(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gaS()
p=e.gdS()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaS()
if(!C.a.I(k,p)){p.a=k.length
k.push(p)}p=e.gaS()
o=p.gb3(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gdi()){p=e.gd3()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd4()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd5()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.c0.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.gY(r)
a5=new H.Q(t.y)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gam()
c=a5.h(0,d)
if(c==null)c=0
a5.k(0,d,c+1)
p=a8.c3.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.ghk(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghE(e).F()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bb(e.ghk(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gal(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaB()
p=e.gco()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gcm(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghU()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghV()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaB()
p=e.gaB()
if(!C.a.I(k,p)){p.a=k.length
k.push(p)}p=e.gaB()
o=p.gb3(p)
if(o){o=b.dx
if(o!=null){a3=p.gb3(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gv(p))}}e.gaS()
p=e.gdS()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaS()
if(!C.a.I(k,p)){p.a=k.length
k.push(p)}p=e.gaS()
o=p.gb3(p)
if(o){o=b.dy
if(o!=null){a3=p.gb3(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gv(p))}}if(e.ghF()){p=e.ghD()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghC()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gdi()){p=e.gd3()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd4()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd5()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.c2.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.gY(s).c5(0)}r=a8.fy
if(r!=null)r.a9(s.a5(0,!0))}if(n.db){a6.ed(k,a6.ch)
s=a6.ch
a8.fz(a8.dm,s)
if(n.r.a){s=a6.cx
s=s==null?a7:s.f
if(s==null)s=new V.K(1,1,1)
r=a8.dn
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.x.a
if(!s)r=!1
else r=!0
if(r){r=a6.cy
r=r==null?a7:r.ch
if(r==null)r=0
q=a8.dq
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a6.cy
s=s==null?a7:s.f
if(s==null)s=new V.K(1,1,1)
r=a8.dr
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}}s=n.y.a
r=!s
if(r)q=!1
else q=!0
if(q){if(s){s=a6.db
s=s==null?a7:s.f
if(s==null)s=1
q=a8.ds
if(q!=null)q.a.uniform1f(q.d,s)}s=a9.a
s.enable(3042)
s.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].T(a9)
s=t.D.a(b0.e)
s.T(a9)
s.a6(a9)
s.aC(a9)
if(r)s=!1
else s=!0
if(s)a9.a.disable(3042)
for(s=a9.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a7)}}s.useProgram(a7)
a8.gaa(a8).dg()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cI().bh}}
O.i3.prototype={
$2:function(a,b){return this.b.push(new A.b2(a,C.b.a0(b+3,4)*4))},
$S:6}
O.i4.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:41}
O.i5.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.b.a0(b+3,4)*4))},
$S:6}
O.i6.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:42}
O.i7.prototype={
$2:function(a,b){return this.b.push(new A.bm(a,C.b.a0(b+3,4)*4))},
$S:6}
O.i8.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:43}
O.i9.prototype={
$2:function(a,b){return this.b.push(new A.bq(a,C.b.a0(b+3,4)*4))},
$S:6}
O.ia.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:44}
O.hY.prototype={
as:function(){var s,r=this
r.cv()
s=r.f
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.X(new D.w(r.b,s,1))}}}
O.e5.prototype={
as:function(){},
bL:function(a){var s,r,q=this
if(!q.c.m(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.as()
s=q.a
s.a=null
s.X(null)}}}
O.hZ.prototype={}
O.cI.prototype={
cU:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.X(new D.w(r.b+".color",s,a))}},
as:function(){this.cv()
this.cU(new V.K(1,1,1))},
sal:function(a,b){this.bL(new A.a9(!0,!1,!1))
this.cU(b)}}
O.i0.prototype={}
O.i1.prototype={
cV:function(a){var s=this,r=s.ch
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.X(new D.w(s.b+".refraction",r,a))}},
as:function(){this.cw()
this.cV(1)}}
O.i2.prototype={
cW:function(a){var s=this,r=s.ch
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.X(new D.w(s.b+".shininess",r,a))}},
as:function(){this.cw()
this.cW(100)}}
O.ev.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
X:function(a){var s=this.e
return s==null?null:s.u(a)},
bH:function(){return this.X(null)},
dN:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.x.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.cU(a.a,"Skybox")
s.du(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gaa(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gG().h(0,"fov"))
s.z=r.a(s.gG().h(0,"ratio"))
s.Q=t.g.a(s.gG().h(0,"boxClr"))
s.ch=t.a.a(s.gG().h(0,"boxTxt"))
s.cx=t.j.a(s.gG().h(0,"viewMat"))
a.d1(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.d8(new Z.f6(a.a),$.am())
if(r==null)r=l
else{q=r.aw($.am())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.T(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.T(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.cs(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gY(r).c5(0)
p=p.cx
if(p!=null)p.a9(r.a5(0,!0))}r=b.e
if(r instanceof Z.bD){r.T(a)
r.a6(a)
r.aC(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gaa(r).dg()}o.aC(a)}}
O.iB.prototype={}
T.iC.prototype={}
T.iD.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
T:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aC:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.iE.prototype={
aJ:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.X(s,"load",new T.iF(this,s,!1,b,!1,d,a),!1)},
fw:function(a,b,c){var s,r,q,p,o,n
b=V.kt(b)
s=a.width
r=V.kt(s==null?512:s)
s=a.height
q=V.kt(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jV()
p.width=r
p.height=q
o=t.b.a(C.f.dQ(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.oa(o.getImageData(0,0,s,n==null?512:n))}}}
T.iF.prototype={
$1:function(a){var s=this,r=s.a,q=r.fw(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.P.ht(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.h0()}++r.e},
$S:4}
X.dT.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.A():s},
ak:function(a){var s=this.x
return s==null?null:s.u(a)},
sda:function(a,b){if(this.b){this.b=!1
this.ak(new D.w("clearColor",!0,!1))}},
T:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.ah(q.a*s)
o=C.d.ah(q.b*r)
n=C.d.ah(q.c*s)
a.c=n
q=C.d.ah(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)}}
X.hL.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.A():s},
T:function(a){var s
a.cy.bl(V.a5())
s=V.a5()
a.db.bl(s)},
aC:function(a){a.cy.aA()
a.db.aA()}}
X.el.prototype={
gn:function(){var s=this.f
return s==null?this.f=D.A():s},
ak:function(a){var s=this.f
return s==null?null:s.u(a)},
e9:function(){return this.ak(null)},
T:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aw(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bl(i)
s=$.lK()
r=q.b
if(r!=null)s=r.aP(0,a,q).N(0,s)
a.db.bl(s)},
aC:function(a){a.cy.aA()
a.db.aA()}}
X.iA.prototype={}
V.jQ.prototype={
$1:function(a){var s=C.d.cn(this.a.gh4(),2)
if(s!=="0.00")P.ku(s+" fps")},
$S:45}
V.iu.prototype={
d0:function(a){var s,r,q,p,o,n,m=this.fC(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.O(C.a.h6(a)),s=new P.c_(m.dP(new H.bg(s,s.gj(s))).a());s.q();){r=s.gD(s)
switch(r.a){case"Bold":q=l.createElement("div")
q.className="boldPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Italic":q=l.createElement("div")
q.className="italicPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Code":q=l.createElement("div")
q.className="codePar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Link":r=r.b
if(H.lF(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ne(C.L,r,C.n,!1)
o=l.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=r
k.appendChild(o).toString}break
case"Other":q=l.createElement("div")
q.className="normalPar"
q.textContent=r.b
k.appendChild(q).toString
break}}this.a.appendChild(k).toString},
fM:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k).toString
r=k.insertRow(-1)
s=r.insertCell(-1)
s.toString
q=t.aL
s=q.a(s).style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=m
s.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
o.id=a[p]
s=o.style
s.textAlign="left"
s=o.style
s.verticalAlign="top"
s=r.insertCell(-1)
s.toString
q.a(s)
n=s.style
n.textAlign="center"
n.verticalAlign="top"
n.marginLeft=m
n.marginRight=m
s.appendChild(o).toString}},
fC:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.iJ(P.R(s,t.aJ),P.R(s,t.aX),P.kJ(s))
h.d=h.H(0,q)
s=h.H(0,q).p(0,p)
r=new K.T([])
r.U(new H.O("*"))
s.a.push(r)
s.c=!0
s=[]
h.H(0,p).p(0,p).a.push(new K.aK(s))
r=new K.T([])
r.U(new H.O("*"))
s.push(r)
r=h.H(0,p).p(0,"BoldEnd")
s=new K.T([])
s.U(new H.O("*"))
r.a.push(s)
r.c=!0
r=h.H(0,q).p(0,o)
s=new K.T([])
s.U(new H.O("_"))
r.a.push(s)
r.c=!0
r=[]
h.H(0,o).p(0,o).a.push(new K.aK(r))
s=new K.T([])
s.U(new H.O("_"))
r.push(s)
s=h.H(0,o).p(0,n)
r=new K.T([])
r.U(new H.O("_"))
s.a.push(r)
s.c=!0
s=h.H(0,q).p(0,m)
r=new K.T([])
r.U(new H.O("`"))
s.a.push(r)
s.c=!0
s=[]
h.H(0,m).p(0,m).a.push(new K.aK(s))
r=new K.T([])
r.U(new H.O("`"))
s.push(r)
r=h.H(0,m).p(0,"CodeEnd")
s=new K.T([])
s.U(new H.O("`"))
r.a.push(s)
r.c=!0
r=h.H(0,q).p(0,l)
s=new K.T([])
s.U(new H.O("["))
r.a.push(s)
r.c=!0
r=h.H(0,l).p(0,k)
s=new K.T([])
s.U(new H.O("|"))
r.a.push(s)
s=h.H(0,l).p(0,j)
r=new K.T([])
r.U(new H.O("]"))
s.a.push(r)
s.c=!0
s=[]
h.H(0,l).p(0,l).a.push(new K.aK(s))
r=new K.T([])
r.U(new H.O("|]"))
s.push(r)
r=h.H(0,k).p(0,j)
s=new K.T([])
s.U(new H.O("]"))
r.a.push(s)
r.c=!0
r=[]
h.H(0,k).p(0,k).a.push(new K.aK(r))
s=new K.T([])
s.U(new H.O("|]"))
r.push(s)
h.H(0,q).p(0,i).a.push(new K.hf())
s=[]
h.H(0,i).p(0,i).a.push(new K.aK(s))
r=new K.T([])
r.U(new H.O("*_`["))
s.push(r)
r=h.H(0,"BoldEnd")
r.d=r.a.ba(p)
r=h.H(0,n)
r.d=r.a.ba(o)
r=h.H(0,"CodeEnd")
r.d=r.a.ba(m)
r=h.H(0,j)
r.d=r.a.ba("Link")
r=h.H(0,i)
r.d=r.a.ba(i)
return this.b=h}}
V.iw.prototype={
$1:function(a){P.kZ(C.h,new V.iv(this.a))},
$S:4}
V.iv.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ah(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.p(-0.01*s)+"px"
q.top=r},
$S:3}
O.jN.prototype={
$1:function(a){this.a.sdt(!0)
return!0},
$S:2}
O.jO.prototype={
$1:function(a){var s
if(a instanceof X.cx&&a.c.a===32){s=document
s.toString
this.a.sdt(E.mg(s,["webkitFullscreenElement","mozFullScreenElement","msFullscreenElement","oFullscreenElement","fullscreenElement"],t.K)==null)}},
$S:1};(function aliases(){var s=J.a.prototype
s.dV=s.i
s=J.bc.prototype
s.dW=s.i
s=P.C.prototype
s.dZ=s.i
s=P.av.prototype
s.dX=s.h
s.dY=s.k
s=P.bZ.prototype
s.e_=s.k
s=K.dU.prototype
s.dU=s.aN
s.bq=s.i
s=O.e5.prototype
s.cv=s.as
s=O.cI.prototype
s.cw=s.as})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"nr","ml",46)
r(P,"o5","mS",10)
r(P,"o6","mT",10)
r(P,"o7","mU",10)
q(P,"lt","o0",3)
r(W,"pE","hA",48)
r(P,"on","ju",35)
r(P,"om","kh",33)
var k
p(k=E.bF.prototype,"gdJ",0,0,function(){return[null]},["$1","$0"],["dK","he"],0,0)
p(k,"gdH",0,0,function(){return[null]},["$1","$0"],["dI","hb"],0,0)
o(k,"gh9","ha",7)
o(k,"ghc","hd",7)
p(k=E.eJ.prototype,"gcA",0,0,function(){return[null]},["$1","$0"],["cC","cB"],0,0)
n(k,"ghp","dO",3)
m(k=X.f3.prototype,"geS","eT",4)
m(k,"geG","eH",4)
m(k,"geM","eN",2)
m(k,"geW","eX",17)
m(k,"geU","eV",17)
m(k,"gf_","f0",2)
m(k,"gf3","f4",2)
m(k,"geQ","eR",2)
m(k,"gf1","f2",2)
m(k,"geO","eP",2)
m(k,"gf5","f6",27)
m(k,"gf7","f8",4)
m(k,"gfn","fo",13)
m(k,"gfj","fk",13)
m(k,"gfl","fm",13)
p(D.ck.prototype,"ge4",0,0,function(){return[null]},["$1","$0"],["ap","e5"],0,0)
p(k=D.cA.prototype,"gcO",0,0,function(){return[null]},["$1","$0"],["cP","eY"],0,0)
m(k,"gf9","fa",29)
o(k,"geA","eB",18)
o(k,"gfd","fe",18)
l(V.Y.prototype,"gj","c7",19)
l(V.x.prototype,"gj","c7",19)
p(k=U.bI.prototype,"gaG",0,0,function(){return[null]},["$1","$0"],["J","a4"],0,0)
o(k,"gey","ez",20)
o(k,"gfb","fc",20)
p(k=U.d0.prototype,"gaG",0,0,function(){return[null]},["$1","$0"],["J","a4"],0,0)
m(k,"gbz","bA",9)
m(k,"gbB","bC",9)
m(k,"gbD","bE",9)
p(k=U.d1.prototype,"gaG",0,0,function(){return[null]},["$1","$0"],["J","a4"],0,0)
m(k,"gbz","bA",1)
m(k,"gbB","bC",1)
m(k,"gbD","bE",1)
m(k,"ger","es",1)
m(k,"geu","ev",1)
m(k,"gfJ","fK",1)
m(k,"gfH","fI",1)
m(k,"gfF","fG",1)
m(U.d2.prototype,"gew","ex",1)
p(k=M.cd.prototype,"gP",0,0,function(){return[null]},["$1","$0"],["R","aW"],0,0)
o(k,"gff","fg",21)
o(k,"gfh","fi",21)
p(M.ci.prototype,"gP",0,0,function(){return[null]},["$1","$0"],["R","aW"],0,0)
p(k=M.co.prototype,"gP",0,0,function(){return[null]},["$1","$0"],["R","aW"],0,0)
o(k,"geI","eJ",7)
o(k,"geK","eL",7)
p(k=O.e4.prototype,"gbd",0,0,function(){return[null]},["$1","$0"],["X","bH"],0,0)
p(k,"gcR",0,0,function(){return[null]},["$1","$0"],["cS","fv"],0,0)
o(k,"geC","eD",22)
o(k,"geE","eF",22)
p(O.ev.prototype,"gbd",0,0,function(){return[null]},["$1","$0"],["X","bH"],0,0)
p(X.el.prototype,"ge8",0,0,function(){return[null]},["$1","$0"],["ak","e9"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.k1,J.a,J.a3,P.D,P.da,P.h,H.bg,P.dW,H.cp,H.f1,H.bT,P.cF,H.cf,H.hM,H.b5,H.iN,H.ii,H.fL,H.jj,P.V,H.hS,H.e3,H.hN,H.ac,H.fo,P.dm,P.bY,P.c_,P.f8,P.eD,P.eE,P.jq,P.dt,P.ji,P.d9,P.B,P.fY,P.eu,P.dJ,P.jp,P.P,P.b8,P.ek,P.cV,P.fl,P.hJ,P.ab,P.aQ,W.hs,W.jX,W.ka,W.F,W.cq,P.dp,P.av,P.fE,K.hf,K.dU,K.T,L.eA,L.eK,L.eL,L.iJ,O.bE,O.cK,E.hl,E.bF,E.bC,E.bQ,E.fi,E.im,E.eJ,Z.f5,Z.f6,Z.bD,Z.cs,Z.bu,D.hn,D.bH,D.L,X.cb,X.e0,X.hP,X.hV,X.Z,X.ie,X.iK,X.f3,D.ck,V.K,V.aG,V.hD,V.cJ,V.bM,V.S,V.W,V.aM,V.eq,V.Y,V.x,U.d0,U.d1,U.d2,M.ci,M.co,A.hh,A.hi,A.a9,A.b2,A.b7,A.bm,A.bq,A.i_,A.eS,A.eT,A.eW,A.eZ,A.iQ,A.iW,F.ah,F.hG,F.hQ,F.hR,F.ij,F.is,F.cS,F.cT,F.bp,F.d4,F.q,F.bW,F.bX,F.j7,F.j8,F.d5,O.iB,O.e5,O.i0,T.iE,X.iA,X.hL,X.el,V.iu])
q(J.a,[J.dX,J.cv,J.bc,J.ai,J.bK,J.bb,H.bk,W.c,W.he,W.b3,W.cc,W.aq,W.E,W.fd,W.aa,W.hv,W.hw,W.fe,W.cm,W.fg,W.hx,W.i,W.fm,W.aH,W.hK,W.fq,W.ba,W.hU,W.ib,W.fu,W.fv,W.aJ,W.fw,W.fy,W.aL,W.fC,W.fF,W.aO,W.fG,W.aP,W.fM,W.aj,W.fQ,W.iH,W.aS,W.fS,W.iL,W.iY,W.fZ,W.h0,W.h2,W.h4,W.h6,P.cy,P.bf,P.fs,P.bl,P.fA,P.ik,P.fN,P.bs,P.fU,P.hj,P.f9,P.bR,P.fJ])
q(J.bc,[J.em,J.bU,J.au])
r(J.dZ,J.ai)
q(J.bK,[J.cu,J.dY])
q(P.D,[H.e1,P.eO,H.e_,H.f0,H.es,H.fj,P.dG,P.eh,P.ao,P.eg,P.f2,P.f_,P.cW,P.dK,P.dM])
r(P.cB,P.da)
q(P.cB,[H.bV,W.fb,W.fa,P.dR])
r(H.O,H.bV)
q(P.h,[H.j,H.bh,H.d6,P.ct])
q(H.j,[H.cC,H.aI])
r(H.cn,H.bh)
q(P.dW,[H.cG,H.f7])
r(H.bi,H.cC)
r(P.ds,P.cF)
r(P.d_,P.ds)
r(H.cg,P.d_)
r(H.ch,H.cf)
q(H.b5,[H.il,H.eG,H.hO,H.jJ,H.jK,H.jL,P.jc,P.jb,P.jd,P.je,P.jo,P.jn,P.jB,P.jl,P.jm,P.hX,P.ig,P.hy,P.hz,W.ic,W.id,W.ir,W.iy,W.jf,P.jt,P.jF,P.hH,P.hI,P.jv,P.jw,P.jC,P.jD,P.jE,P.hk,E.io,E.ip,E.iq,E.iG,D.hE,D.hF,F.jr,F.jS,F.jR,F.it,F.ja,F.j9,F.j4,F.j5,O.i3,O.i4,O.i5,O.i6,O.i7,O.i8,O.i9,O.ia,T.iF,V.jQ,V.iw,V.iv,O.jN,O.jO])
r(H.cO,P.eO)
q(H.eG,[H.eB,H.bB])
r(P.cE,P.V)
r(H.Q,P.cE)
r(H.bP,H.bk)
q(H.bP,[H.dc,H.de])
r(H.dd,H.dc)
r(H.bj,H.dd)
r(H.df,H.de)
r(H.cL,H.df)
q(H.cL,[H.ea,H.eb,H.ec,H.ed,H.ee,H.cM,H.ef])
r(H.dn,H.fj)
r(P.dj,P.ct)
r(P.jk,P.jq)
r(P.dg,P.dt)
r(P.d8,P.dg)
r(P.dL,P.eE)
r(P.hB,P.dJ)
r(P.iZ,P.hB)
r(P.j_,P.dL)
q(P.ao,[P.cR,P.dV])
q(W.c,[W.r,W.dQ,W.az,W.dh,W.aA,W.ad,W.dk,W.f4,W.aU,W.ak,P.dI,P.aF])
q(W.r,[W.G,W.ag])
q(W.G,[W.m,P.k])
q(W.m,[W.dE,W.dF,W.b4,W.dS,W.bJ,W.et,W.aR])
r(W.hr,W.aq)
r(W.cj,W.fd)
q(W.aa,[W.ht,W.hu])
r(W.ff,W.fe)
r(W.cl,W.ff)
r(W.fh,W.fg)
r(W.dO,W.fh)
r(W.ar,W.b3)
r(W.fn,W.fm)
r(W.dP,W.fn)
r(W.fr,W.fq)
r(W.b9,W.fr)
r(W.aC,W.i)
q(W.aC,[W.be,W.a6,W.br])
r(W.e7,W.fu)
r(W.e8,W.fv)
r(W.fx,W.fw)
r(W.e9,W.fx)
r(W.fz,W.fy)
r(W.cN,W.fz)
r(W.fD,W.fC)
r(W.en,W.fD)
r(W.er,W.fF)
r(W.di,W.dh)
r(W.ex,W.di)
r(W.fH,W.fG)
r(W.ey,W.fH)
r(W.eC,W.fM)
r(W.fR,W.fQ)
r(W.eH,W.fR)
r(W.dl,W.dk)
r(W.eI,W.dl)
r(W.fT,W.fS)
r(W.eM,W.fT)
r(W.aT,W.a6)
r(W.h_,W.fZ)
r(W.fc,W.h_)
r(W.d7,W.cm)
r(W.h1,W.h0)
r(W.fp,W.h1)
r(W.h3,W.h2)
r(W.db,W.h3)
r(W.h5,W.h4)
r(W.fI,W.h5)
r(W.h7,W.h6)
r(W.fP,W.h7)
r(W.fk,P.eD)
q(P.av,[P.cw,P.bZ])
r(P.bd,P.bZ)
r(P.a7,P.fE)
r(P.ft,P.fs)
r(P.e2,P.ft)
r(P.fB,P.fA)
r(P.ei,P.fB)
r(P.fO,P.fN)
r(P.eF,P.fO)
r(P.fV,P.fU)
r(P.eN,P.fV)
r(P.dH,P.f9)
r(P.ej,P.aF)
r(P.fK,P.fJ)
r(P.ez,P.fK)
q(K.dU,[K.aK,L.iM])
q(E.hl,[Z.ca,A.bS,T.iC])
q(D.L,[D.as,D.at,D.w,X.cx,X.eo])
q(X.eo,[X.cD,X.bN,X.bO,X.cY])
q(O.bE,[D.cA,U.bI,M.cd])
q(D.hn,[U.hp,U.a_])
r(U.ce,U.a_)
q(A.bS,[A.cH,A.cU])
q(A.iQ,[A.cZ,A.iT,A.iU,A.iV,A.iR,A.eP,A.iS,A.eQ,A.eR,A.iX,A.eU,A.eV,A.eX,A.eY])
r(F.ix,F.hG)
r(F.iP,F.hR)
r(F.j6,F.j7)
r(F.ih,F.j8)
q(O.iB,[O.e4,O.ev])
q(O.e5,[O.hY,O.hZ,O.cI])
q(O.cI,[O.i1,O.i2])
r(T.iD,T.iC)
r(X.dT,X.iA)
s(H.bV,H.f1)
s(H.dc,P.B)
s(H.dd,H.cp)
s(H.de,P.B)
s(H.df,H.cp)
s(P.da,P.B)
s(P.ds,P.fY)
s(P.dt,P.eu)
s(W.fd,W.hs)
s(W.fe,P.B)
s(W.ff,W.F)
s(W.fg,P.B)
s(W.fh,W.F)
s(W.fm,P.B)
s(W.fn,W.F)
s(W.fq,P.B)
s(W.fr,W.F)
s(W.fu,P.V)
s(W.fv,P.V)
s(W.fw,P.B)
s(W.fx,W.F)
s(W.fy,P.B)
s(W.fz,W.F)
s(W.fC,P.B)
s(W.fD,W.F)
s(W.fF,P.V)
s(W.dh,P.B)
s(W.di,W.F)
s(W.fG,P.B)
s(W.fH,W.F)
s(W.fM,P.V)
s(W.fQ,P.B)
s(W.fR,W.F)
s(W.dk,P.B)
s(W.dl,W.F)
s(W.fS,P.B)
s(W.fT,W.F)
s(W.fZ,P.B)
s(W.h_,W.F)
s(W.h0,P.B)
s(W.h1,W.F)
s(W.h2,P.B)
s(W.h3,W.F)
s(W.h4,P.B)
s(W.h5,W.F)
s(W.h6,P.B)
s(W.h7,W.F)
s(P.bZ,P.B)
s(P.fs,P.B)
s(P.ft,W.F)
s(P.fA,P.B)
s(P.fB,W.F)
s(P.fN,P.B)
s(P.fO,W.F)
s(P.fU,P.B)
s(P.fV,W.F)
s(P.f9,P.V)
s(P.fJ,P.B)
s(P.fK,W.F)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",M:"double",a2:"num",z:"String",bv:"bool",ab:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([L?])","~(L)","~(a6)","~()","~(i)","~(z,@)","~(n,n)","~(n,h<bF>)","~(ah)","~(L?)","~(~())","ab()","@(@)","~(br)","~(d4,M,M)","z(n)","~(~(L))","~(be)","~(n,h<cz>)","M()","~(n,h<a_?>)","~(n,h<bo>)","~(n,h<bM>)","~(a2)","bv(r)","cw(@)","~(z,z)","~(aT)","ab(@)","bv(h<cz>)","bd<@>(@)","av(@)","ab(~())","C?(@)","@(z)","C?(C?)","M(M,M)","ca(n)","@(@,z)","~(@)","~(cX,@)","n(b2,b2)","n(b7,b7)","n(bm,bm)","n(bq,bq)","~(iI)","n(@,@)","~(@,@)","z(c)","G(r)","~(C?,C?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nb(v.typeUniverse,JSON.parse('{"em":"bc","bU":"bc","au":"bc","oB":"i","oO":"i","oD":"aF","oC":"c","oV":"c","oY":"c","oA":"k","oP":"k","oE":"m","oS":"m","oQ":"r","oN":"r","pl":"ad","oI":"aC","oM":"ak","oF":"ag","oZ":"ag","oX":"a6","oR":"b9","oJ":"E","oK":"aj","oU":"bj","oT":"bk","dX":{"bv":[]},"ai":{"l":["1"],"j":["1"],"h":["1"]},"dZ":{"l":["1"],"j":["1"],"h":["1"]},"bK":{"M":[],"a2":[]},"cu":{"M":[],"n":[],"a2":[]},"dY":{"M":[],"a2":[]},"bb":{"z":[]},"e1":{"D":[]},"O":{"l":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"cC":{"j":["1"],"h":["1"]},"bh":{"h":["2"]},"cn":{"j":["2"],"h":["2"]},"bi":{"j":["2"],"h":["2"]},"d6":{"h":["1"]},"bV":{"l":["1"],"j":["1"],"h":["1"]},"bT":{"cX":[]},"cg":{"I":["1","2"]},"cf":{"I":["1","2"]},"ch":{"I":["1","2"]},"cO":{"D":[]},"e_":{"D":[]},"f0":{"D":[]},"b5":{"cr":[]},"eG":{"cr":[]},"eB":{"cr":[]},"bB":{"cr":[]},"es":{"D":[]},"Q":{"I":["1","2"],"V.V":"2"},"aI":{"j":["1"],"h":["1"]},"bk":{"ae":[]},"bP":{"t":["1"],"ae":[]},"bj":{"t":["M"],"l":["M"],"j":["M"],"ae":[],"h":["M"]},"cL":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"ea":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"eb":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"ec":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"ed":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"ee":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"cM":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"ef":{"t":["n"],"l":["n"],"j":["n"],"ae":[],"h":["n"]},"fj":{"D":[]},"dn":{"D":[]},"dm":{"iI":[]},"dj":{"h":["1"]},"d8":{"j":["1"],"h":["1"]},"ct":{"h":["1"]},"cB":{"l":["1"],"j":["1"],"h":["1"]},"cE":{"I":["1","2"]},"V":{"I":["1","2"]},"cF":{"I":["1","2"]},"d_":{"I":["1","2"]},"dg":{"j":["1"],"h":["1"]},"M":{"a2":[]},"n":{"a2":[]},"l":{"j":["1"],"h":["1"]},"dG":{"D":[]},"eO":{"D":[]},"eh":{"D":[]},"ao":{"D":[]},"cR":{"D":[]},"dV":{"D":[]},"eg":{"D":[]},"f2":{"D":[]},"f_":{"D":[]},"cW":{"D":[]},"dK":{"D":[]},"ek":{"D":[]},"cV":{"D":[]},"dM":{"D":[]},"G":{"r":[],"c":[]},"ar":{"b3":[]},"be":{"i":[]},"a6":{"i":[]},"r":{"c":[]},"az":{"c":[]},"aA":{"c":[]},"ad":{"c":[]},"br":{"i":[]},"aC":{"i":[]},"aT":{"a6":[],"i":[]},"m":{"G":[],"r":[],"c":[]},"dE":{"G":[],"r":[],"c":[]},"dF":{"G":[],"r":[],"c":[]},"b4":{"G":[],"r":[],"c":[]},"ag":{"r":[],"c":[]},"cl":{"l":["a7<a2>"],"t":["a7<a2>"],"j":["a7<a2>"],"h":["a7<a2>"]},"cm":{"a7":["a2"]},"dO":{"l":["z"],"t":["z"],"j":["z"],"h":["z"]},"fb":{"l":["G"],"j":["G"],"h":["G"]},"dP":{"l":["ar"],"t":["ar"],"j":["ar"],"h":["ar"]},"dQ":{"c":[]},"dS":{"G":[],"r":[],"c":[]},"b9":{"l":["r"],"t":["r"],"j":["r"],"h":["r"]},"bJ":{"G":[],"r":[],"c":[]},"e7":{"I":["z","@"],"V.V":"@"},"e8":{"I":["z","@"],"V.V":"@"},"e9":{"l":["aJ"],"t":["aJ"],"j":["aJ"],"h":["aJ"]},"fa":{"l":["r"],"j":["r"],"h":["r"]},"cN":{"l":["r"],"t":["r"],"j":["r"],"h":["r"]},"en":{"l":["aL"],"t":["aL"],"j":["aL"],"h":["aL"]},"er":{"I":["z","@"],"V.V":"@"},"et":{"G":[],"r":[],"c":[]},"ex":{"l":["az"],"t":["az"],"c":[],"j":["az"],"h":["az"]},"ey":{"l":["aO"],"t":["aO"],"j":["aO"],"h":["aO"]},"eC":{"I":["z","z"],"V.V":"z"},"aR":{"G":[],"r":[],"c":[]},"eH":{"l":["ad"],"t":["ad"],"j":["ad"],"h":["ad"]},"eI":{"l":["aA"],"t":["aA"],"c":[],"j":["aA"],"h":["aA"]},"eM":{"l":["aS"],"t":["aS"],"j":["aS"],"h":["aS"]},"f4":{"c":[]},"aU":{"c":[]},"ak":{"c":[]},"fc":{"l":["E"],"t":["E"],"j":["E"],"h":["E"]},"d7":{"a7":["a2"]},"fp":{"l":["aH?"],"t":["aH?"],"j":["aH?"],"h":["aH?"]},"db":{"l":["r"],"t":["r"],"j":["r"],"h":["r"]},"fI":{"l":["aP"],"t":["aP"],"j":["aP"],"h":["aP"]},"fP":{"l":["aj"],"t":["aj"],"j":["aj"],"h":["aj"]},"dp":{"ba":[]},"dR":{"l":["G"],"j":["G"],"h":["G"]},"bd":{"l":["1"],"j":["1"],"h":["1"]},"a7":{"fE":["1"]},"e2":{"l":["bf"],"j":["bf"],"h":["bf"]},"ei":{"l":["bl"],"j":["bl"],"h":["bl"]},"eF":{"l":["z"],"j":["z"],"h":["z"]},"k":{"G":[],"r":[],"c":[]},"eN":{"l":["bs"],"j":["bs"],"h":["bs"]},"dH":{"I":["z","@"],"V.V":"@"},"dI":{"c":[]},"aF":{"c":[]},"ej":{"c":[]},"ez":{"l":["I<@,@>"],"j":["I<@,@>"],"h":["I<@,@>"]},"bE":{"h":["1"]},"as":{"L":[]},"at":{"L":[]},"w":{"L":[]},"cx":{"L":[]},"cD":{"L":[]},"bN":{"L":[]},"bO":{"L":[]},"eo":{"L":[]},"cY":{"L":[]},"ck":{"cz":[]},"cA":{"h":["cz"]},"ce":{"a_":[]},"bI":{"a_":[],"h":["a_?"]},"d0":{"a_":[]},"d1":{"a_":[]},"d2":{"a_":[]},"cd":{"bo":[],"h":["bo"]},"ci":{"bo":[]},"co":{"bo":[]},"cH":{"bS":[]},"cU":{"bS":[]}}'))
H.na(v.typeUniverse,JSON.parse('{"ai":1,"dZ":1,"a3":1,"j":1,"cC":1,"bg":1,"bh":2,"cn":2,"cG":2,"bi":2,"d6":1,"f7":1,"cp":1,"f1":1,"bV":1,"cf":2,"aI":1,"e3":1,"bP":1,"c_":1,"dj":1,"eD":1,"eE":2,"d9":1,"ct":1,"cB":1,"B":1,"cE":2,"V":2,"fY":2,"cF":2,"d_":2,"eu":1,"dg":1,"da":1,"ds":2,"dt":1,"dJ":2,"dL":2,"h":1,"l":1,"dW":1,"fk":1,"F":1,"cq":1,"bd":1,"bZ":1,"bE":1,"as":1,"at":1,"w":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lw
return{d:s("b3"),D:s("bD"),E:s("b4"),b:s("cc"),c:s("cg<cX,@>"),e:s("j<@>"),h:s("G"),C:s("D"),B:s("i"),l:s("dT"),Y:s("cr"),I:s("ba"),m:s("bJ"),r:s("ai<@>"),T:s("cv"),M:s("au"),p:s("t<@>"),s:s("Q<cX,@>"),t:s("Q<n,bv>"),y:s("Q<n,n>"),u:s("cy"),J:s("l<eS>"),L:s("l<eT>"),U:s("l<eW>"),R:s("l<eZ>"),cK:s("l<@>"),b7:s("cD"),f:s("I<@,@>"),Z:s("bN"),O:s("bO"),a1:s("r"),P:s("ab"),K:s("C"),q:s("a7<a2>"),k:s("bS"),N:s("z"),aL:s("aR"),ae:s("iI"),aR:s("eK"),aM:s("cY"),Q:s("ae"),n:s("eP"),v:s("cZ"),g:s("eQ"),F:s("eR"),V:s("eU"),j:s("eV"),G:s("eX"),a:s("eY"),o:s("bU"),cg:s("aU"),bj:s("ak"),w:s("bv"),i:s("M"),z:s("@"),S:s("n"),A:s("0&*"),_:s("C*"),bc:s("kG<ab>?"),d1:s("cH?"),X:s("C?"),ba:s("bR?"),x:s("cU?"),aJ:s("eA?"),aX:s("eL?"),W:s("cZ?"),H:s("a2")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.b4.prototype
C.H=J.a.prototype
C.a=J.ai.prototype
C.b=J.cu.prototype
C.I=J.cv.prototype
C.d=J.bK.prototype
C.c=J.bb.prototype
C.J=J.au.prototype
C.t=J.em.prototype
C.P=P.bR.prototype
C.i=J.bU.prototype
C.u=W.aT.prototype
C.v=W.aU.prototype
C.w=new E.bC("Browser.chrome")
C.j=new E.bC("Browser.firefox")
C.k=new E.bC("Browser.edge")
C.x=new E.bC("Browser.other")
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.E=new P.ek()
C.n=new P.iZ()
C.F=new P.j_()
C.o=new H.jj()
C.e=new P.jk()
C.h=new P.b8(0)
C.G=new P.b8(5e6)
C.p=s([])
C.L=s([0,0,65498,45055,65535,34815,65534,18431])
C.K=s([])
C.q=new H.ch(0,{},C.K,H.lw("ch<cX,@>"))
C.M=new E.bQ("OperatingSystem.windows")
C.r=new E.bQ("OperatingSystem.mac")
C.N=new E.bQ("OperatingSystem.linux")
C.O=new E.bQ("OperatingSystem.other")
C.Q=new H.bT("call")
C.R=new P.bY(null,2)})();(function staticFields(){$.jg=null
$.ap=0
$.c9=null
$.kz=null
$.ly=null
$.ls=null
$.lD=null
$.jG=null
$.jM=null
$.kq=null
$.c0=null
$.dx=null
$.dy=null
$.kl=!1
$.al=C.e
$.a4=[]
$.hC=null
$.kK=null
$.kM=null
$.a0=null
$.ax=null
$.kT=null
$.bt=null
$.l3=null
$.j0=null
$.j1=null
$.j2=null
$.l2=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"oL","jT",function(){return H.lx("_$dart_dartClosure")})
s($,"p_","lL",function(){return H.aB(H.iO({
toString:function(){return"$receiver$"}}))})
s($,"p0","lM",function(){return H.aB(H.iO({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"p1","lN",function(){return H.aB(H.iO(null))})
s($,"p2","lO",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"p5","lR",function(){return H.aB(H.iO(void 0))})
s($,"p6","lS",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"p4","lQ",function(){return H.aB(H.l0(null))})
s($,"p3","lP",function(){return H.aB(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"p8","lU",function(){return H.aB(H.l0(void 0))})
s($,"p7","lT",function(){return H.aB(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"pm","kv",function(){return P.mR()})
s($,"pp","lY",function(){return P.mE("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"pn","kw",function(){return H.lx("_$dart_dartObject")})
s($,"pC","kx",function(){return function DartObject(a){this.o=a}})
s($,"pf","lX",function(){return Z.af(0)})
s($,"p9","lV",function(){return Z.af(511)})
s($,"ph","am",function(){return Z.af(1)})
s($,"pg","b0",function(){return Z.af(2)})
s($,"pb","b_",function(){return Z.af(4)})
s($,"pi","bz",function(){return Z.af(8)})
s($,"pj","bA",function(){return Z.af(16)})
s($,"pc","dB",function(){return Z.af(32)})
s($,"pd","dC",function(){return Z.af(64)})
s($,"pe","lW",function(){return Z.af(96)})
s($,"pk","c7",function(){return Z.af(128)})
s($,"pa","aZ",function(){return Z.af(256)})
s($,"oH","lJ",function(){return new V.hD()})
r($,"oG","y",function(){return $.lJ()})
r($,"oW","lK",function(){var q=V.kP(),p=V.k8(),o=$.l2
return V.kL(q,p,o==null?$.l2=V.mP(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bk,ArrayBufferView:H.bk,Float32Array:H.bj,Float64Array:H.bj,Int16Array:H.ea,Int32Array:H.eb,Int8Array:H.ec,Uint16Array:H.ed,Uint32Array:H.ee,Uint8ClampedArray:H.cM,CanvasPixelArray:H.cM,Uint8Array:H.ef,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.he,HTMLAnchorElement:W.dE,HTMLAreaElement:W.dF,Blob:W.b3,HTMLCanvasElement:W.b4,CanvasRenderingContext2D:W.cc,CDATASection:W.ag,CharacterData:W.ag,Comment:W.ag,ProcessingInstruction:W.ag,Text:W.ag,CSSPerspective:W.hr,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.aa,CSSKeywordValue:W.aa,CSSNumericValue:W.aa,CSSPositionValue:W.aa,CSSResourceValue:W.aa,CSSUnitValue:W.aa,CSSURLImageValue:W.aa,CSSStyleValue:W.aa,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.ht,CSSUnparsedValue:W.hu,DataTransferItemList:W.hv,DOMException:W.hw,ClientRectList:W.cl,DOMRectList:W.cl,DOMRectReadOnly:W.cm,DOMStringList:W.dO,DOMTokenList:W.hx,Element:W.G,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.ar,FileList:W.dP,FileWriter:W.dQ,HTMLFormElement:W.dS,Gamepad:W.aH,History:W.hK,HTMLCollection:W.b9,HTMLFormControlsCollection:W.b9,HTMLOptionsCollection:W.b9,ImageData:W.ba,HTMLImageElement:W.bJ,KeyboardEvent:W.be,Location:W.hU,MediaList:W.ib,MIDIInputMap:W.e7,MIDIOutputMap:W.e8,MimeType:W.aJ,MimeTypeArray:W.e9,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aL,PluginArray:W.en,RTCStatsReport:W.er,HTMLSelectElement:W.et,SourceBuffer:W.az,SourceBufferList:W.ex,SpeechGrammar:W.aO,SpeechGrammarList:W.ey,SpeechRecognitionResult:W.aP,Storage:W.eC,CSSStyleSheet:W.aj,StyleSheet:W.aj,HTMLTableCellElement:W.aR,HTMLTableDataCellElement:W.aR,HTMLTableHeaderCellElement:W.aR,TextTrack:W.aA,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.eH,TextTrackList:W.eI,TimeRanges:W.iH,Touch:W.aS,TouchEvent:W.br,TouchList:W.eM,TrackDefaultList:W.iL,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,UIEvent:W.aC,URL:W.iY,VideoTrackList:W.f4,WheelEvent:W.aT,Window:W.aU,DOMWindow:W.aU,DedicatedWorkerGlobalScope:W.ak,ServiceWorkerGlobalScope:W.ak,SharedWorkerGlobalScope:W.ak,WorkerGlobalScope:W.ak,CSSRuleList:W.fc,ClientRect:W.d7,DOMRect:W.d7,GamepadList:W.fp,NamedNodeMap:W.db,MozNamedAttrMap:W.db,SpeechRecognitionResultList:W.fI,StyleSheetList:W.fP,IDBKeyRange:P.cy,SVGLength:P.bf,SVGLengthList:P.e2,SVGNumber:P.bl,SVGNumberList:P.ei,SVGPointList:P.ik,SVGStringList:P.eF,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bs,SVGTransformList:P.eN,AudioBuffer:P.hj,AudioParamMap:P.dH,AudioTrackList:P.dI,AudioContext:P.aF,webkitAudioContext:P.aF,BaseAudioContext:P.aF,OfflineAudioContext:P.ej,WebGL2RenderingContext:P.bR,SQLResultSetRowList:P.ez})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.bj.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=O.op
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
