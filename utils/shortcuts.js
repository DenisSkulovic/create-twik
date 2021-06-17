// shortcuts

//
//
//
// ############################################################################
/**
 * Shortcut for document.querySelector
 * @param {string} selector
 * @returns
 */
export const qSel = (selector) => document.querySelector(selector);

//
//
//
// ############################################################################
/**
 * Shortcut for document.querySelectorAll
 * @param {*} selector
 * @returns
 */
export const qSelAll = (selector) => document.querySelectorAll(selector);

//
//
//
// ############################################################################
/**
 * Shortcut for Element.addEventListener
 * @param {Element} el
 * @param {string} event
 * @param {function} callback
 */
export const addE = (el, event, callback) => {
  el.addEventListener(event, callback);
};

//
//
//
// ############################################################################
/**
 * Shortcut for document.insertAdjacentHTML
 * @param {Element} el DOM Element
 * @param {string} location Choices: beforebegin, beforeend, afterbegin, afterend
 * @param {string} html
 */
export const insAdjHTML = (el, location, html) => {
  el.insertAdjacentHTML(location, html);
};

//
//
//
// ############################################################################
/**
 * Shortcut for document.insertAdjacentElement
 * @param {Element} el
 * @param {string} location Choices: beforebegin, beforeend, afterbegin, afterend
 * @param {Element} ins_el
 */
export const insAdjEl = (el, location, ins_el) => {
  el.insertAdjacentElement(location, ins_el);
};
