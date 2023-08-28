import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.8c2a31c1.js";const F=JSON.parse('{"title":"Anu Installation","description":"","frontmatter":{},"headers":[],"relativePath":"config/anu.md","filePath":"config/anu.md"}'),l={name:"config/anu.md"},o=p(`<h1 id="anu-installation" tabindex="-1">Anu Installation <a class="header-anchor" href="#anu-installation" aria-label="Permalink to &quot;Anu Installation&quot;">​</a></h1><h2 id="adding-library" tabindex="-1">Adding library <a class="header-anchor" href="#adding-library" aria-label="Permalink to &quot;Adding library&quot;">​</a></h2><ol><li><p>Add <code>anu-vue</code> and its supporting libraries</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anu-vue</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unocss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@iconify-json/bx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anu-vue</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unocss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@iconify-json/bx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">anu-vue</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unocss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@iconify-json/bx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anu-vue</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unocss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@iconify-json/bx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anu-vue</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unocss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@iconify-json/bx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">anu-vue</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unocss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@iconify-json/bx</span></span></code></pre></div></li></ol><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol><li><p>Add UnoCSS to <code>vite.config.js</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Unocss </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unocss/vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Unocss</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Unocss </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unocss/vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Unocss</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p>Create UnoCSS Config file <code>uno.config.js</code> in root of the project with below content:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { presetCore, presetThemeDefault } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;anu-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  defineConfig,</span></span>
<span class="line"><span style="color:#E1E4E8;">  presetIcons,</span></span>
<span class="line"><span style="color:#E1E4E8;">  presetUno,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unocss&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">presetUno</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">presetIcons</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      scale: </span><span style="color:#79B8FF;">1.2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      extraProperties: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        height: </span><span style="color:#9ECBFF;">&#39;1.5em&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;flex-shrink&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;display&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;inline-block&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// anu-vue presets</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">presetCore</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">presetThemeDefault</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  include: [</span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">anu-vue</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js(</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">?$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./**/*.vue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./**/*.md&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { presetCore, presetThemeDefault } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;anu-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  defineConfig,</span></span>
<span class="line"><span style="color:#24292E;">  presetIcons,</span></span>
<span class="line"><span style="color:#24292E;">  presetUno,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unocss&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  presets: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">presetUno</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">presetIcons</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      scale: </span><span style="color:#005CC5;">1.2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      extraProperties: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        height: </span><span style="color:#032F62;">&#39;1.5em&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;flex-shrink&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;display&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;inline-block&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// anu-vue presets</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">presetCore</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">presetThemeDefault</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  include: [</span><span style="color:#032F62;">/</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">*</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">anu-vue</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js(</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">?$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./**/*.vue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./**/*.md&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><details class="details custom-block"><summary>Icon height alignment</summary><p>Update highlighted line in above code snippet according line height in your app using <code>em</code> unit.</p><p>e.g. For VitePress line height of paragraph is <code>24px</code>. Hence, we have height of <code>1.5em</code> in docs.</p></details></li><li><p>Update your <code>main.js</code> file like below:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { anu } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// UnoCSS import</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;uno.css&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// import styles</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;anu-vue/dist/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Using \`app.use(anu)\` will register all the components globally</span></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(anu)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { anu } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// UnoCSS import</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;uno.css&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// import styles</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;anu-vue/dist/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Using \`app.use(anu)\` will register all the components globally</span></span>
<span class="line"><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line highlighted"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(anu)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div></li></ol><p>It&#39;s done! 🥳</p><p>Now, Just refer to the component in your vue files:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">ABtn</span><span style="color:#E1E4E8;">&gt;Button&lt;/</span><span style="color:#FDAEB7;font-style:italic;">ABtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">ABtn</span><span style="color:#24292E;">&gt;Button&lt;/</span><span style="color:#B31D28;font-style:italic;">ABtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><br><hr><br><p>Probably you might not want to globally register the components. You can also follow below approaches:</p><h3 id="tree-shaking" tabindex="-1">Tree Shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree Shaking&quot;">​</a></h3><p>You can also follow À la carte fashion if you don&#39;t want to register all the components globally.</p><ol><li><p>Remove anu plugin use in <code>main.js</code> file.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  import { anu } from &#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  createApp(App)</span></span>
<span class="line"><span style="color:#FDAEB7;">-   .use(anu)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .mount(&#39;#app&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  import { anu } from &#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  createApp(App)</span></span>
<span class="line"><span style="color:#B31D28;">-   .use(anu)</span></span>
<span class="line"><span style="color:#24292E;">    .mount(&#39;#app&#39;)</span></span></code></pre></div></li><li><p>Now, import components individually from <code>anu-vue</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ABtn } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;anu-vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">ABtn</span><span style="color:#E1E4E8;">&gt;Primary&lt;/</span><span style="color:#FDAEB7;font-style:italic;">ABtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ABtn } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;anu-vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">ABtn</span><span style="color:#24292E;">&gt;Primary&lt;/</span><span style="color:#B31D28;font-style:italic;">ABtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li></ol><h3 id="auto-importing-components-w-tree-shaking" tabindex="-1">Auto importing components w/ Tree shaking <a class="header-anchor" href="#auto-importing-components-w-tree-shaking" aria-label="Permalink to &quot;Auto importing components w/ Tree shaking&quot;">​</a></h3><p><a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noreferrer">unplugin-vue-components</a> lets you auto import components on demand. With this you can omit import statement and still get benefits of tree shaking.</p><ol><li><p>Remove anu plugin use in <code>main.js</code> file if you haven&#39;t</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  import { anu } from &#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  createApp(App)</span></span>
<span class="line"><span style="color:#FDAEB7;">-   .use(anu)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .mount(&#39;#app&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  import { anu } from &#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  createApp(App)</span></span>
<span class="line"><span style="color:#B31D28;">-   .use(anu)</span></span>
<span class="line"><span style="color:#24292E;">    .mount(&#39;#app&#39;)</span></span></code></pre></div></li><li><p>Install unplugin-vue-components:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-vue-components</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-vue-components</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-vue-components</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-vue-components</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-vue-components</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-vue-components</span></span></code></pre></div></li><li><p>Add following in <code>vite.config.js</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// other imports</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Components </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AnuComponentResolver } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// other plugins</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Components</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolvers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">AnuComponentResolver</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// other config</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// other imports</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Components </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AnuComponentResolver } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;anu-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// other plugins</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Components</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      resolvers: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">AnuComponentResolver</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// other config</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></li><li><p>Now, just use components the component and it will be auto imported on demand 🤯</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">ABtn</span><span style="color:#E1E4E8;">&gt;Primary&lt;/</span><span style="color:#FDAEB7;font-style:italic;">ABtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">ABtn</span><span style="color:#24292E;">&gt;Primary&lt;/</span><span style="color:#B31D28;font-style:italic;">ABtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li></ol>`,18),e=[o];function t(c,r,i,E,y,d){return n(),a("div",null,e)}const g=s(l,[["render",t]]);export{F as __pageData,g as default};
