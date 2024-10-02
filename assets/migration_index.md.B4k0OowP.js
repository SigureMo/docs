import{_ as l,c as a,a0 as e,o as t}from"./chunks/framework.DX7EX5Ix.js";const b=JSON.parse('{"title":"从 𝓫𝓲𝓵𝓲𝓵𝓲 迁移","description":"","frontmatter":{},"headers":[],"relativePath":"migration/index.md","filePath":"migration/index.md"}'),o={name:"migration/index.md"};function r(d,i,n,c,s,h){return t(),a("div",null,i[0]||(i[0]=[e('<h1 id="从-bilili-迁移" tabindex="-1">从 𝓫𝓲𝓵𝓲𝓵𝓲 迁移 <a class="header-anchor" href="#从-bilili-迁移" aria-label="Permalink to &quot;从 𝓫𝓲𝓵𝓲𝓵𝓲 迁移&quot;">​</a></h1><h2 id="取消的功能" tabindex="-1">取消的功能 <a class="header-anchor" href="#取消的功能" aria-label="Permalink to &quot;取消的功能&quot;">​</a></h2><ul><li><code>- bilibili</code> 目录的生成</li><li>播放列表生成</li><li>源格式修改功能（不再支持 flv 源视频下载，如果仍有视频不支持 dash 源，请继续使用 bilili）</li><li>对 Python3.8 的支持，最低支持 Python3.9</li><li>下载前询问</li></ul><h2 id="默认行为的修改" tabindex="-1">默认行为的修改 <a class="header-anchor" href="#默认行为的修改" aria-label="Permalink to &quot;默认行为的修改&quot;">​</a></h2><ul><li>使用协程而非多线程进行下载</li><li>默认生成弹幕为 ASS</li><li>默认启用从多镜像源下载的特性</li><li>不仅可以控制是否使用系统代理，还能配置特定的代理服务器</li></ul><h2 id="新增的特性" tabindex="-1">新增的特性 <a class="header-anchor" href="#新增的特性" aria-label="Permalink to &quot;新增的特性&quot;">​</a></h2><ul><li>单视频下载与批量下载命令分离（<code>bilili</code> 命令与 <code>yutto --batch</code> 相类似）</li><li>音频/视频编码选择</li><li>可选仅下载音频/视频</li><li>存放子路径的自由定制</li><li>支持 url 别名</li><li>支持文件列表</li><li>更多的批下载支持（现已支持 UP 主全部投稿视频、视频合集、收藏夹等）</li><li>更加完善的 warning 与 error 提示</li><li>支持仅输入 id 即可下载（aid、bvid、episode_id 等）</li><li>支持描述文件生成</li><li>并行化链接解析（超快的～）</li></ul>',7)]))}const m=l(o,[["render",r]]);export{b as __pageData,m as default};
