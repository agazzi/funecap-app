"use client";

import SignatureCanvas from '@/components/SignatureCanvas';

export default async function token(context) {
    const  { token } = context.params;

    return (
        <main>
            <SignatureCanvas token={token}/>
        </main>
    );
}
