import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
import ReleasePDF from '../PDFs/ReleasePDF'


export const releaseForm = () => {
    return(
        <div>
            <PDFDownloadLink document={<ReleasePDF />} fileName="release_form.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
    )
}