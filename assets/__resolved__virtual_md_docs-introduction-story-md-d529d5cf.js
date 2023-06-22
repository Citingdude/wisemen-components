const html = '<h1 id="reusable-vue-components" tabindex="-1">Reusable Vue components <a class="header-anchor" href="#reusable-vue-components" aria-hidden="true">#</a></h1>\n<h2 id="repository" tabindex="-1">Repository <a class="header-anchor" href="#repository" aria-hidden="true">#</a></h2>\n<p><a href="https://github.com/Robbe95/wisemen-components/" target="_blank">https://github.com/Robbe95/wisemen-components/</a></p>\n<h2 id="finished-components" tabindex="-1">Finished components <a class="header-anchor" href="#finished-components" aria-hidden="true">#</a></h2>\n<ul>\n<li>\n<p>[x] AppButton</p>\n</li>\n<li>\n<p>[x] AppModal</p>\n</li>\n<li>\n<p>[x] AppText</p>\n</li>\n<li>\n<p>[x] FormInputField</p>\n</li>\n<li>\n<p>[x] FormError</p>\n</li>\n<li>\n<p>[x] FormInputFieldGrouping</p>\n</li>\n<li>\n<p>[x] Transitions</p>\n</li>\n<li>\n<p>[x] Icons (setup and few examples)</p>\n</li>\n</ul>\n<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2>\n<h3 id="add-components-to-project-using-the-following-commands" tabindex="-1">Add components to project using the following commands <a class="header-anchor" href="#add-components-to-project-using-the-following-commands" aria-hidden="true">#</a></h3>\n<pre><code><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40"></div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #c9d1d9">npx wisemen-frontend-cli init</span></span>\n<span class="line"><span style="color: #c9d1d9">npx wisemen-frontend-cli add</span></span>\n<span class="line"><span style="color: #c9d1d9">npx wisemen-frontend-cli add all</span></span>\n<span class="line"><span style="color: #c9d1d9"></span></span></code></pre></div></code></pre>\n<p>Init installs global dependencies and components such as your tailwind config, transitions and icons.<br>\nWith the add command you can install specific components, which will install all their relevant dependencies.<br>\nUse add all to install all possible components.</p>\n<h2 id="adding-components" tabindex="-1">Adding components <a class="header-anchor" href="#adding-components" aria-hidden="true">#</a></h2>\n<h3 id="making-component" tabindex="-1">Making component <a class="header-anchor" href="#making-component" aria-hidden="true">#</a></h3>\n<p>Inside the <code>modules/ui</code> folder, add your relevant components / composables / other dependencies.</p>\n<h3 id="registering-components" tabindex="-1">Registering components <a class="header-anchor" href="#registering-components" aria-hidden="true">#</a></h3>\n<p>Once the code is made, inside the <code>componentsTypes.ts</code> file inside the <code>/scripts</code> folder, add your component name.<br>\nAfter add a corresponding file inside the <code>scripts/components</code> folder.<br>\nEach component has a name, a component, possible internal dependencies, possible dependencies and a series of files.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>name</code></td>\n<td>Name in the cli tool</td>\n</tr>\n<tr>\n<td><code>component</code></td>\n<td>Name used to identify the component</td>\n</tr>\n<tr>\n<td><code>internalDependencies</code></td>\n<td>Other components this components relies on</td>\n</tr>\n<tr>\n<td><code>dependencies</code></td>\n<td>Packages this components relies on</td>\n</tr>\n<tr>\n<td><code>files</code></td>\n<td>Files relevant to this component</td>\n</tr>\n</tbody>\n</table>\n<p>Each file has a type of file, a path and a folder.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>type</code></td>\n<td>Component / Composable / ... -&gt; Used to generate the correct folder placement</td>\n</tr>\n<tr>\n<td><code>path</code></td>\n<td>Location of the file in this project</td>\n</tr>\n<tr>\n<td><code>folder</code></td>\n<td>Location of the file inside the project you are installing the component</td>\n</tr>\n</tbody>\n</table>\n<p>E.g appButton.ts</p>\n<pre><code class="language-typescript"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">typescript</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">import</span><span style="color: #C9D1D9"> { ComponentName, ComponentType } </span><span style="color: #FF7B72">from</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;../../componentsTypes&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">export</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">appButton</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">  component: ComponentName.</span><span style="color: #79C0FF">APP_BUTTON</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  name: </span><span style="color: #A5D6FF">&#39;Button&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  files: [</span></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      type: ComponentType.</span><span style="color: #79C0FF">COMPONENTS</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      path: </span><span style="color: #A5D6FF">&#39;./src/modules/ui/components/app/buttons/app-button/AppButton.vue&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      folder: </span><span style="color: #A5D6FF">&#39;app/buttons&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    },</span></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      type: ComponentType.</span><span style="color: #79C0FF">COMPONENTS</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      path: </span><span style="color: #A5D6FF">&#39;./src/modules/ui/components/app/buttons/app-button/appButtonVariants.ts&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      folder: </span><span style="color: #A5D6FF">&#39;app/buttons&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    },</span></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      type: ComponentType.</span><span style="color: #79C0FF">COMPONENTS</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      path: </span><span style="color: #A5D6FF">&#39;./src/modules/ui/components/app/buttons/app-button/AppButtonLoader.vue&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      folder: </span><span style="color: #A5D6FF">&#39;app/buttons&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">    },</span></span>\n<span class="line"><span style="color: #C9D1D9">  ],</span></span>\n<span class="line"><span style="color: #C9D1D9">  internalDependencies: [ComponentName.</span><span style="color: #79C0FF">TRANSITIONS</span><span style="color: #C9D1D9">, ComponentName.</span><span style="color: #79C0FF">APP_ICON</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">  dependencies: [</span><span style="color: #A5D6FF">&#39;class-variance-authority&#39;</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">}</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n<p>Finally add the component to the <code>components.ts</code> file</p>\n<h3 id="building-components-json" tabindex="-1">Building components.json <a class="header-anchor" href="#building-components-json" aria-hidden="true">#</a></h3>\n<p>Run the command</p>\n<pre><code><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40"></div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #c9d1d9">pnpm build:components</span></span>\n<span class="line"><span style="color: #c9d1d9"></span></span></code></pre></div></code></pre>\n';
const frontmatter = { "group": "top", "icon": "carbon:bookmark" };
const relativePath = "docs/Introduction.story.md";
export {
  frontmatter,
  html,
  relativePath
};
