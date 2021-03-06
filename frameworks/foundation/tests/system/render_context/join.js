// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

/*global module test equals context */

var context = null;

module("SC.RenderContext#join", {
  setup: function() {
    context = SC.RenderContext().push("line1", "line2") ;
  },
  
  teardown: function() {
    context = null;
  }
});

test("it should return joined lines with no separator string by default", function() {
  equals(context.join(), '<div>line1line2</div>');
});

test("it should return joined lines with separator string if passed", function() {
  equals(context.join(","), "<div>,line1,line2,</div>") ;
});
