import{_ as l,r as p,o as c,c as i,a as e,w as t,d as a,b as s,e as o}from"./app.2869a1c0.js";const w=JSON.parse('{"title":"Sizing","description":"","frontmatter":{},"headers":[],"relativePath":"guide/features/anu.md"}'),r={name:"guide/features/anu.md"},d=s("h1",{id:"sizing",tabindex:"-1"},[a("Sizing "),s("a",{class:"header-anchor",href:"#sizing","aria-hidden":"true"},"#")],-1),D=s("h2",{id:"scaling",tabindex:"-1"},[a("Scaling "),s("a",{class:"header-anchor",href:"#scaling","aria-hidden":"true"},"#")],-1),u=s("p",null,"When adjusting the size of the component, you want to reduce component's overall look including padding, height, width, etc along with font size.",-1),y=s("p",null,[a("Anu mostly uses "),s("code",null,"em"),a(" unit for applying padding, height, width, etc. You can leverage this to create custom size we want just using font size utilities.")],-1),F=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ABtn</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-sm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">outline</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Button</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ABtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="spacing" tabindex="-1">Spacing <a class="header-anchor" href="#spacing" aria-hidden="true">#</a></h2><p>Just like plain CSS or UnoCSS, Anu also provides flexibility with component sizing. You are not limited to sizes like <code>sm</code>, <code>lg</code> &amp; <code>xl</code>, with Anu you can create arbitrary sizes using <code>spacing</code> prop &amp; font size combination.</p><p>Assume you want to create a small button but <strong>don&#39;t want to reduce it&#39;s font size</strong> according to your design. In other frameworks you have to manually adjust the padding, height, width, etc to achieve this.</p>`,4),h=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;ABtn</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">spacing</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">variant</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">outline</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    spacing-80</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ABtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Predefined Sizes</p><p>You can create your own predefined sizes like <code>size</code> prop in other frameworks using custom class &amp; shortcuts.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ABtn</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">size-xl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ABtn</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Now, create a new shortcut for this <code>&#39;btn&#39;: &#39;[&amp;.size-xl]-p-8&#39;,</code>. You can also take it further with dynamic shortcuts and other UnoCSS features.</p></div>`,2);function g(C,A,_,m,f,v){const n=p("ABtn");return c(),i("div",null,[d,D,u,y,e(n,{class:"text-sm",variant:"outline"},{default:t(()=>[a("Button")]),_:1}),F,e(n,{spacing:80,variant:"outline"},{default:t(()=>[a("Button")]),_:1}),h])}const S=l(r,[["render",g]]);export{w as __pageData,S as default};