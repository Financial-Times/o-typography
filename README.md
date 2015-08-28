#FT Typography [![Build Status](https://travis-ci.org/Financial-Times/o-typography.png?branch=master)](https://travis-ci.org/Financial-Times/o-typography)

Typographical styles for FT branded sites - fonts, weight, colors, sizes and vertical rhythm.

## This module is deprecated

- To display editorial copy or simple text, please refer to [o-type](https://github.com/Financial-Times/o-type).
- To style text in user-interface components, please refer to the design team (documentation coming soon).

### Why is this module deprecated?

We've learned that:

- old ft.com typography styles don't appeal to new products as they need to be readable on mobile, and ft.com styles aren't optimised for it.
- a rather opinionated module that becomes a dependency for many modules isn't great for maintainability. When we renamed o-ft-typography to o-typography, we found out other modules that required o-typography for a single mixin. We thought this wasn't worth the dependency debt and hard-coded corresponding styles instead.
- the typography module is thorough, and covers ft.com standard styles with high granularity. Developers seem to prefer simple sensible defaults (__don't make me think__).
- long class names are painful to use. Series of `o-ft-typography-block__element--modifier` tend to pollute the markup.

For these reasons, we'll delegate the responsibility of typographic consistency to modules and give them lower level helpers (such as a typographic scale) and better guidance from a design perspective.

## Overview

This module provides styles for Headings, Titles, Leads, Metadata, and body content.

Body content styles come in two categories:

* **general**, used for informational pages, forms, application user interfaces etc.
* **article**, used for editorial content. 

## Usage

There are two main ways to use these typographic styles:

1. Using the predefined CSS classes
2. Extending Sass placeholders to your own CSS classes

If you are using the [Origami Build Service](http://financial-times.github.io/ft-origami/docs/developer-guide/build-service/) to add this module's CSS to your page, then only option 1 is available to you.

### 1. Using the predefined CSS classes

If you're not using the build service, [turn off 'silent mode'](#silentmode).

Pre-defined CSS classes are provided and can be used directly in your HTML. All classes are prefixed with 'o-ft-typography-', for example `o-ft-typography-heading-large`.

The classes do not depend on any specific HTML element, but appropriate semantic elements should be chosen.

	<h2 class="o-ft-typography-heading-medium">Heading medium</h2>

See docs/demo.html for a full list of the classes provided and their effects. 

In addition to applying classes individual to elements, body styles can be applied to an HTML element and descendent `h2, h3, p, a, strong, em, small, sup, sub, ul, ol, li` elements will have styling applied.

**General** body styles:

	<div class="o-ft-typography-body-wrapper">
		<h2>Heading medium</h2>
		<p>Body block with <strong>styled inline text</strong>.</p>
		<h3>Heading small</h2>
		<p>Body block with <em>styled inline text</em>.</p>
	</div>

**Article** body styles:

	<div class="o-ft-typography-article-body-wrapper">
		<h2>Article subheading 1</h2>
		<p>Article body block with <strong>styled inline text</strong>.</p>
		<h3>Article subheading 2</h2>
		<p>Article body block with <em>styled inline text</em>.</p>
	</div>

Pre-defined classes are not available to module developers. Module developers are required to use the mixins.

### 2. Using the mixins

If you don't want to include the pre-defined classes in your HTML (or are a module developer) you may instead use the mixins provided:

	.article {
		p,
		blockquote {
			@include oFtTypographyBodyBlock;
		}
	}

For wrappers:

	.article {
		@include oFtTypographyArticleBodyWrapper;
	}

Mixins exist for all the same styles as pre-defined classes, named with a camelCased version of the class name.


## Silent mode ([docs](http://origami.ft.com/docs/syntax/scss/#silent-styles)) <a name="silentmode"></a>

When you're not consuming this module via the build service, by default this module is set to 'silent' - meaning its Sass will not output any CSS classes, only Sass mixins.

This can be turned off by setting a variable before you import the Sass:

	$o-ft-typography-is-silent: false;
	
	@import "o-ft-typography/main";

If you're not turning off silent mode, you will need to to load the fonts required by the typography you are using (due to the limitations of Sass' mixins, this cannot at present be done automatically):

	@include oFtTypographyIncludeFont(heading); // downloads BentonSans-bold font given the current FT styles
	@include oFtTypographyIncludeFont(metadata); // downloads BentonSans-normal font given the current FT styles

If a typography use case doesn't require a `@fontface` declaration in current FT branding nothing will be output by `oFtTypographyIncludeFont()`, but it's still a good idea to call it for each use case you use as it will mean your module will cope seamlessly with updates to FT's typography.

### Font-face declarations

By default, this module will output font-face declarations for the required font-families. The next major version will not.

To remove font-face declarations from the output, set:

```scss
$o-ft-typography-output-font-face-declarations: false;
```

----

## License

Copyright (c) 2015 Financial Times Ltd. All rights reserved.

This software is published under the [MIT licence](http://opensource.org/licenses/MIT).
