import React from 'react';
import {VCLit} from './VCLit';
import {VCLnova} from './VCLnova';
import {ATUAV} from './ATUAV';
import { Document, Page, pdfjs, PDFPageProxy } from 'react-pdf'
import novaPurcPdf from '../images/novaPurc.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


interface ResearchProps {

}

interface Pdf {
    scale: number,
}

export const Research: React.FC<ResearchProps> = ({}) => {
    const [scale, setScale] = React.useState<Pdf>();
    function onPageLoad(page: PDFPageProxy) {
        const parentDiv = document.getElementById('pdfDocument');
        if (parentDiv) {
            let pageScale = parentDiv.clientWidth / page.originalWidth;
            if (scale?.scale !== pageScale) {
              setScale({ scale: pageScale });
            }
        }
        
      }
    // React.useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "https://open.library.ubc.ca/staticfile/build/embed/item.js";
    //     script.id = "ubcOpenCollectionsWidget";
    //     script.async = true;
      
    //     document.body.appendChild(script);
      
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);

        return (
            <div>
                <h1>VCL - IT</h1>
                <hr />
                <VCLit />
                <h1>VCL - NOVA</h1>
                <hr />
                <VCLnova />
                <div id="pdfDocument">
                <Document file={novaPurcPdf}>
                    <Page pageNumber={1}
                    onLoadSuccess={onPageLoad}
                    scale={scale?.scale} />
                    </Document>
                </div>
                
                {/* <div id="ubcOpenCollectionsWidgetDisplay">
                            <script id="ubcOpenCollectionsWidget"
                            src="https://open.library.ubc.ca/staticfile/build/embed/item.js"
                            data-item="1.0392826"
                            data-collection="75346"
                            data-metadata="false"
                            data-width=""
                            data-media="0"
                            async >
                            </script>
                            </div> */}
                <h1>ATUAV</h1>
                <ATUAV />
            </div>
        );
}