/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D;
            (function (PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D) {
                var Visual = (function () {
                    function Visual(options) {
                        options.element.style.overflow = 'auto';
                        console.log('Visual constructor', options);
                        this.target = options.element;
                        this.updateCount = 0;
                    }
                    Visual.prototype.update = function (options) {
                        var dataViews = options.dataViews;
                        //if there is no dataview return
                        if (!dataViews || dataViews.length === 0)
                            return;
                        var dataView = dataViews[0];
                        if (!dataView || !dataView.metadata)
                            return;
                        //for debugging
                        console.log('Visual update', options);
                        //parse the HTML input string and recreate using style attr passed inline
                        var parser = new DOMParser();
                        //let htmlIn = parser.parseFromString(dataView.table.rows.toString(), "text/html");
                        var htmlIn = parser.parseFromString("<h3 style='in'>test, after this is a script</h3><br /><script>alert('haxxord');</script>", "text/html");
                        var all = htmlIn.getElementsByTagName("*");
                        for (var i = 0, max = all.length; i < max; i++) {
                            var x = document.createElement(all[i].tagName);
                            this.target.appendChild(x);
                            if (all[i].getAttribute("style")) {
                                x.setAttribute("style", all[i].getAttribute("style"));
                                x.textContent = all[i].textContent;
                            }
                            else {
                                x.setAttribute("style", window.getComputedStyle(all[i], null).cssText);
                                x.textContent = all[i].textContent;
                            }
                        }
                    };
                    return Visual;
                }());
                PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D.Visual = Visual;
            })(PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D = visual.PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D || (visual.PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D_DEBUG = {
                name: 'PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D_DEBUG',
                displayName: 'HTML Text Box',
                class: 'Visual',
                version: '1.0.0',
                apiVersion: '1.4.0',
                create: function (options) { return new powerbi.extensibility.visual.PBI_CV_44C21355_D41A_4E75_8D06_4AF48BFF293D.Visual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map