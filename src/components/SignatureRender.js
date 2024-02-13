import React, { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";

const SignatureRender = ({ src }) => {
    const [imageUrl] = useState(src);
    const [imageError, setImageError] = useState(true);

    useEffect(() => {
        const fetchImage = () => {
            fetch(imageUrl).then((response) => {
                if (response.ok) {
                    setImageError(false)
                } else {
                    setImageError(true);
                }
            }).catch(() => {
                setImageError(true);
            });
        };

        const interval = setInterval(fetchImage, 100);

        return () => clearInterval(interval);
    }, [imageUrl, src]);

    return (
        <div>
            {imageError ? (
                <p>Signature en attente de récupération</p>
            ) : (
                <div>
                    <div className={styles.success}>Signature authentifié avec succès.</div>
                    <div className={styles.wrapper}>
                        <img src={imageUrl} width={200} height={200}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignatureRender;