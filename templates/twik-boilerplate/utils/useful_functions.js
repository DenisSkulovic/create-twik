// #############################################################################################################
//
// INTERPOLATE HTML OR CSS STRING
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Evaluate code between "{{" and "}}" and interpolate results.
 * @param {string} str
 * @param {object} data
 * @returns {string}
 */
export const interp = (str, data) => {
  const regexp = /{{(\w+)}}/g;
  let match;

  while (str.match(regexp)) {
    match = str.match(regexp);
    let variable = match[0].substring(2, match[0].length - 2);
    str = str.replace(match[0], `${data[variable]}`);
  }
  return str;
};

// #############################################################################################################
//
// GET CSS SELECTOR
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Generate unique CSS Selector.
 * @param {Element} element DOM Element
 * @returns {string} Unique CSS Selector
 */
export const get_CSS_Selector = (element) => {
  let path_array = [];

  while (
    element.nodeName.toLowerCase() != "html" &&
    (element = element.parentNode) &&
    path_array.unshift(
      element.nodeName.toLowerCase() +
        (element.id ? "#" + element.id : "") +
        (element.className ? "." + element.className.replace(/\s+/g, ".") : "")
    )
  );
  return path_array.join(" > ");
};

// #############################################################################################################
//
// GET SNIPPET
//
// -------------------------------------------------------------------------------------------------------------

export const getSnippet = (src) => {
  return fs.readFileSync(path.resolve(__dirname, src));
};

//
//
//
//
// #############################################################################################################
//
// ADD FONT AWESOME
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Add Font Awesome to the website. Appends a <link> with font awesome css to the head.
 */
export const addFontAwesome = () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        `
  );
};

// #############################################################################################################
//
// ADD OR LOCATE JQUERY
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Run main function only after jQuery has been located or loaded.
 * @param {function} mainJS
 * @returns
 */
export const add_or_locate_jQuery = (mainJS) => {
  if (!window.jQuery) {
    var script = document.createElement("SCRIPT");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    script.type = "text/javascript";
    // this is doc.ready
    //-------------------
    script.onload = function () {
      var $ = window.jQuery;
      mainJS();
    };
    document.head.appendChild(script);
    return;
  }
  mainJS();
};
