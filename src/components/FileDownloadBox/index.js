
import './FileDownloadBox.css';

{/* Carte de contact */ }
const FileDownloadBox = ({file_link, file_name, file_type}) => (
    <a
        href={`/files/${file_link}`}
        target="_blank"
        class="file-download-box"
        download
    >
        <ion-icon name="download"></ion-icon>
        <div class="file-download-box-info">
            <p class="file-download-box-type">Fichier {file_type}</p>
            <p>{file_name}</p>
        </div>
        
        
    </a>


);
export default FileDownloadBox;



