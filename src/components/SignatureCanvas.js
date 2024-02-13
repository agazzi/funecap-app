import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styles from "@/app/page.module.css";

const SignaturePad = ({ token }) => {
    const signatureRef = useRef();
    const [isLoading, setIsLoading] = useState();
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClear = () => {
        if (signatureRef.current) {
            setIsLoading(false);
            setIsSuccess(false);
            signatureRef.current.clear();
        }
    };

    const handleSendSignature = () => {
        setIsLoading(true);

        const signatureData = signatureRef.current.getTrimmedCanvas().toDataURL();

        fetch('https://api.funecap.localdev/api/sign/' + token, {
            method: 'POST',
            body: JSON.stringify(signatureData)
        }).then(response => {
            setIsLoading(false);

            if (response.ok) {
                setIsSuccess(true);
            }
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <SignatureCanvas  ref={signatureRef} canvasProps={{className: styles.signature}}/>
            <div className={styles.footer}>
                <button className={styles.buttonOutline} onClick={handleClear}>Effacer</button>
                <button className={styles.button} onClick={handleSendSignature} disabled={isLoading || isSuccess}>{isLoading ? 'Envoi en cours...' : isSuccess ? 'Signature validé' : 'Valider la signature'}</button>
            </div>
        </div>
    );
};

export default SignaturePad;