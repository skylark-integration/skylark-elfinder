/**
 * skylark-elfinder - A version of elfinder that ported to running on skylarkjs.
 * @author 
 * @version v0.9.0
 * @link 
 * @license MIT
 */
var type=self.data.type,bin=self.data.bin,unzipFiles=function(){var e,r,i,a=[];for(this.Y(),e=0,r=(i=this.i).length;e<r;++e)a[e]=i[e].filename+(i[e].J?" ({formatSize("+i[e].J+")})":"");return a},tarFiles=function(e){for(var r,i,a,n,s,l=[],t=e.length,p=0,f=function(e){return String.fromCharCode.apply(null,e).replace(/\0+$/,"")};p<t&&0!==e[p];)i=f((r=e.subarray(p,p+512)).subarray(0,100)),(a=f(r.subarray(345,500)))&&(i=a+i),n=parseInt(f(r.subarray(124,136)),8),s=512*Math.ceil(n/512),"././@LongLink"===i&&(i=f(e.subarray(p+512,p+512+s))),"pax_global_header"!==i&&l.push(i+(n?" ({formatSize("+n+")})":"")),p=p+512+s;return l};self.res={},"tar"===type?self.res.files=tarFiles(new Uint8Array(bin)):"zip"===type?self.res.files=unzipFiles.call(new Zlib.Unzip(new Uint8Array(bin))):"gzip"===type?self.res.files=tarFiles(new Zlib.Gunzip(new Uint8Array(bin)).decompress()):"bzip2"===type&&(self.res.files=tarFiles(self.bzip2.simple(self.bzip2.array(new Uint8Array(bin)))));
//# sourceMappingURL=../sourcemaps/worker/quicklook.unzip.js.map
