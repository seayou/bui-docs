Ext.data.JsonP.BUI_Mask({"tagname":"class","name":"BUI.Mask","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-BUI.Mask","members":{"cfg":[],"property":[],"method":[{"name":"maskElement","tagname":"method","owner":"BUI.Mask","meta":{},"id":"method-maskElement"},{"name":"unmaskElement","tagname":"method","owner":"BUI.Mask","meta":{},"id":"method-unmaskElement"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"mask.js","href":"mask2.html#BUI-Mask"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/mask2.html#BUI-Mask' target='_blank'>mask.js</a></div></pre><div class='doc-contents'><p>屏蔽层</p>\n\n<pre><code>BUI.use('bui/mask',function(Mask){\n  Mask.maskElement('#domId'); //屏蔽dom\n  Mask.unmaskElement('#domId'); //解除DOM屏蔽\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-maskElement' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask'>BUI.Mask</span><br/><a href='source/mask2.html#BUI-Mask-method-maskElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask-method-maskElement' class='name expandable'>maskElement</a>( <span class='pre'>element, [msg], [msgCls]</span> )</div><div class='description'><div class='short'>@description 屏蔽指定元素 ...</div><div class='long'><p>@description 屏蔽指定元素</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|HTMLElement<div class='sub-desc'><p>被屏蔽的元素</p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>屏蔽元素时显示的文本</p>\n</div></li><li><span class='pre'>msgCls</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>显示文本应用的样式</p>\n\n<pre><code>  <a href=\"#!/api/BUI.Mask-method-maskElement\" rel=\"BUI.Mask-method-maskElement\" class=\"docClass\">BUI.Mask.maskElement</a>('#domId');\n  \n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-unmaskElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BUI.Mask'>BUI.Mask</span><br/><a href='source/mask2.html#BUI-Mask-method-unmaskElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BUI.Mask-method-unmaskElement' class='name expandable'>unmaskElement</a>( <span class='pre'>element</span> )</div><div class='description'><div class='short'>@description 解除元素的屏蔽 ...</div><div class='long'><p>@description 解除元素的屏蔽</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|HTMLElement<div class='sub-desc'><p>屏蔽的元素</p>\n\n<pre><code><a href=\"#!/api/BUI.Mask-method-unmaskElement\" rel=\"BUI.Mask-method-unmaskElement\" class=\"docClass\">BUI.Mask.unmaskElement</a>('#domId');\n</code></pre>\n\n</div></li></ul></div></div></div></div></div></div></div>"});