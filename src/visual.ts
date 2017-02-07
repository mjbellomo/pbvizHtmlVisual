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

module powerbi.extensibility.visual {


    export class Visual implements IVisual {
        private target: HTMLElement;
        private updateCount: number;
        

        constructor(options: VisualConstructorOptions) {
            options.element.style.overflow = 'auto'
            console.log('Visual constructor', options);
            this.target = options.element;
            this.updateCount = 0;
        }



        public update(options: VisualUpdateOptions) {
            let dataViews: DataView[] = options.dataViews;
           
            //if there is no dataview return
            if (!dataViews || dataViews.length === 0)
                return;
            let dataView: DataView = dataViews[0];
            if (!dataView || !dataView.metadata)
                return;
            //for debugging
            console.log('Visual update', options);

            //parse the HTML input string and recreate using style attr passed inline
            let parser = new DOMParser();
            //let htmlIn = parser.parseFromString(dataView.table.rows.toString(), "text/html");
            let htmlIn = parser.parseFromString("<h3 style='in'>test, after this is a script</h3><br /><script>alert('haxxord');</script>", "text/html");
            let all = htmlIn.getElementsByTagName("*");

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
            


        }

     }
}
