"use client";

import styles from "./page.module.css";
import SignatureRender from "@/components/SignatureRender";

export default function Home() {
    return (
        <main className={styles.main}>
            <img
                src={'https://api.funecap.localdev/api/generate/654532456'}
                alt="QR Code"
                className={styles.qrcode}
                width={500}
                height={500}
            />

            <SignatureRender
                src={'https://api.funecap.localdev/api/signature/654532456'}
            />
        </main>
    );
}