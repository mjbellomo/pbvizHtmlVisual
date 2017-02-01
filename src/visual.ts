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
            console.log('Visual update', options);
            this.target.innerHTML = options.dataViews[0].table.rows.toString();
        }
    }
}

/*
`<p>
          <h3 style=''><b>During Task</b></h3>
          <ul>
            <li style="color:red;">&#0149 Orange Areas contain slopes in excess of 15 Degrees</li>
            <li style="color:red;">&#0149 Stay clear of the red caution areas</li>
            <li>&#0149 Monitor your slope indicator</li>
            <li>&#0149 Always stay within the operating limits of the machine</li>
            <li>&#0149 If machine is ROPS equipped, seatbelts to be worn.</li>
            <li>&#0149 Always keep a lookout for public encroaching into the area. If public enter the area cease mowing operations immediately and politely request them to move on until the mowing is complete and signs removed.</li>
            <li>&#0149 Mow only in areas within the slope capability of the machine</li>
            <li>&#0149 Wherever possible mow up and down the slope and not across</li>  
         </ul>
</p>`;
*/