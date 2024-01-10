'use client'
import { useState, useEffect, useRef } from 'react'
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function testPage(){
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const refContainer = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)
  
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
    }

    useEffect(() => {
        // Resize everything when the window changes size
        const onWindowResize = () => {
            // Get container dimensions
            let containerRect = refContainer.current?.getBoundingClientRect()
            if(containerRect == null){
                setWidth(window.innerWidth)
                setHeight(window.innerHeight)
            }
            else{
                setWidth(containerRect.width)
                setHeight(containerRect.height)
            }
        }
      
        // Call for init
        onWindowResize()

        // Add onWindowResize to the resize event
        window.addEventListener("resize", onWindowResize, false);
    })

    return(
        <main className='overflow-hidden'>
            {/* <iframe className='w-screen h-screen' src='/resume/ResumeMitchellConradOctober2023.pdf'/> */}
            <div className='w-screen min-h-screen'>
                <a className='text-md text-gray dark:text-white font-semibold border-2 border-gray dark:border-white hover:bg-gray dark:hover:bg-white hover:text-white dark:hover:text-gray transition ease-in-out px-2 py-2 rounded-md'
                  href='/resume/ResumeMitchellConradOctober2023.pdf' 
                  target='_blank' 
                  rel='noreferrer'>Print</a>
                <div ref={ refContainer } className='w-auto md:w-2/3 xl:w-1/2'>
                    <Document file='/resume/ResumeMitchellConradOctober2023.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} renderAnnotationLayer={ false } renderTextLayer={ false } width={ width } />
                    </Document>
                </div>
            </div>
        </main>
    )
}