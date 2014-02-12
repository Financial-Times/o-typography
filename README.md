#FT Typography [![Build Status](https://travis-ci.org/Financial-Times/o-ft-typography.png?branch=master)](https://travis-ci.org/Financial-Times/o-typography)

Typographical styles for FT branded sites - fonts, weight, colors, sizes and vertical rhythm.

## Overview

This module provides styles for Headings, Titles, Leads, Metadata, and body content.

Body content styles come in two categories:

* **general**, used for informational pages, forms, application user interfaces etc.
* **article**, used for editorial content. 

## Usage

There are two main ways to use these typographic styles:

1. Using the predefined CSS classes
2. Extending SASS placeholders to your own CSS classes

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

Pre-defined classes are not available to module developers. Module developers are required to use the placeholders.

### 2. Extending SASS placeholders to your own CSS classes

If you don't want to include the pre-defined classes in your HTML (or are a module developer) you may instead extend the typography placeholder classes in your own SASS.  You can apply both individual element styles:

    .article {
      p,
      blockquote {
        @extend %o-ft-typography-body__block;           
      }
    }

And wrappers:

    .article {
      @extend %o-ft-typography-article-body-wrapper;
    }

Placeholders exist for all the same styles as pre-defined classes, and have the same names.


## Silent mode<a name="silentmode"></a>

When you're not consuming this module via the build service, by default this module is set to 'silent' - meaning its SASS will not output any CSS classes, only SASS placeholders.

This can be turned off by setting a variable before you import the SASS:

    @o-ft-typography-is-silent: false;
    
    @import "o-ft-typography/main";

If you're not turning off silent mode, you will need to to load the fonts required by the typography you are using (due to the limitations of sass' mixins, this cannot at present be done automatically):

	@include oFontsInclude(BentonSans);
	@include oFontsInclude(BentonSans, bold);
	@include oFontsInclude(MillerDisplay);
    
See the [Origami fonts module](https://github.com/Financial-Times/o-fonts) for more information.

Note that module developers must not set configuration for imported modules, but must assume that the imported module will be silent.

## TODO
* Specify and enforce the vertical rhythm using a variable and mixins
