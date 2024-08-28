'use client'
import { useState, useEffect, useRef } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
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
    
  return (
    <div className='w-full h-full flex flex-col align-middle'>
        <div ref={ refContainer } className='w-full md:w-2/3 xl:w-1/2 pb-10 mx-auto'>
            <Document className={'shadow-2xl overflow-hidden rounded-lg dark:border-none'} file='/resume/ResumeMitchellConradAugust2024.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderAnnotationLayer={ false } renderTextLayer={ false } width={ width } />
            </Document>
        </div>
    </div>
  )
}

export default Resume