/**
 * This file is part of the DreamFactory Services Platform(tm) (DSP)
 *
 * DreamFactory Services Platform(tm) <http://github.com/dreamfactorysoftware/dsp-core>
 * Copyright 2012-2013 DreamFactory Software, Inc. <support@dreamfactory.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof(DreamFactory) === 'undefined') {
  DreamFactory = {};
}

/**
 * Side Menu
 * @type {*}
 */
DreamFactory.SideMenu = {
  /**
   * Our side menu
   */
  $_sideMenu: $('#side-menu'),
  _open:      false,
  $_toggler:  $('.header a.toggle-menu i'),
  autohide:   false,

  /**
   * @param element
   */
  setToggler: function(element) {
    this.$_toggler = element;
  },

  /**
   * @param element
   */
  setSideMenu: function(element) {
    this.$_sideMenu = element;
  },

  /**
   * Clears the items in the menu
   */
  clearMenu: function() {
    $('#side-menu-nav-items', this.$_sideMenu).empty();
  },

  /**
   * Sets all the items in the menu
   */
  setItems: function(items) {
    $('#side-menu-nav-items', this.$_sideMenu).html(items);
  },

  /**
   * Adds an item to the menu
   */
  addMenuItem: function(title, href, active) {
    $('side-menu-nav-items').append('<li' + (active ? ' class="active"' : '') + '><a href="' + href + '">' + title + '</a></li>');
  },

  _checkLoad: function() {
    if (this.$_sideMenu && $('li', this.$_sideMenu).length) {
      //  Menu loaded
      this.autohide = $('input#side-menu-check-autohide', this.$_sideMenu).is(':checked');
    }
    else {
      //  menu not loaded
      window.setTimeout(function() {
        this._checkLoad();
      }, 500);
    }
  },

  /**
   * @param delay
   * @private
   */
  _hideMenu: function(delay) {
    delay = delay || 0;
    window.setTimeout(function() {
      this._toggleMenu(true);
    }, delay || Omega.options.menu.autohideDelay);
  },

  _toggleMenu: function(forceClose) {
    if (!this.$_sideMenu)
      return false;

    if (!this.isOpen() && !forceClose) {
      this.$_toggler.removeClass('icon-ellipsis-vertical').addClass('icon-ellipsis-horizontal');
      this.$_sideMenu.animate({ 'margin-left': '0', 'opacity': '1' }, 'fast').addClass('toggle-menu-open');
      $('#app-content').animate({'margin-left': '250px'}, 'fast');
      this._open = true;
    }
    else {
      this.$_toggler.removeClass('icon-ellipsis-horizontal').addClass('icon-ellipsis-vertical');
      this.$_sideMenu.animate({ 'margin-left': '-500px', 'opacity': '0' }, forceClose ? 'slow' : 'fast').removeClass('toggle-menu-open');
      $('#app-content').animate({'margin-left': '0'}, 'fast');
      this._open = false;
    }

    if (!forceClose && this._open && this.autohide) {
      this._hideMenu(0);
    }
  },

  isOpen: function() {
    return this.$_sideMenu.hasClass('toggle-menu-open');
  },

  setMenu: function(element) {
    this.$_sideMenu = element;

    this.$_sideMenu.on('change', 'input#side-menu-check-autohide', function(e) {
      if ($(this).is(':checked') && this._open) {
        this._hideMenu(0);
      }
    });
  }
};

/**
 * DreamFactory.Platform namespace
 * @type {*}
 */
DreamFactory.Platform = {
  //	Parent?
  isParent:           (window.self === window.top),
  //	The URI of the containing window
  containerParentUri: window.location.href,
  //	The URI that is loaded in the iframe
  containerUri:       null,
  containerId:        '#app-container',
  _child:             null
};
