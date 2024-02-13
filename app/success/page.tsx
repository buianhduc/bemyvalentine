"use client"
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/components/buttons/Button";
import "../globals.css"
import { Suspense } from "react";
import Lottie from "lottie-react";
import loading from "../../public/loadingAnimation.json";
export default function Page() {

    return (
        <Suspense fallback={<Lottie animationData={loading}/>}>
        <main className="flex min-h-screen flex-col items-center justify-between content-center p-24">
            <div className="container flex flex-col items-center justify-between content-center m-12">
            <Image width={400} height={225} src="/yay.gif" alt="alt" className="p-10"/>
            <h1 className="text-3xl tracking-wide text-red-400 decoration-2 font-semibold m-12">Yayyyy I love you baby. I shall bring gifts once i return</h1>
            <div className=" flex h-20 space-x-10 justify-items-stretch justify-evenly">
            <Link href="https://youtu.be/hvL1339luv0?si=UHf7EbVGljxcyZiv">
                <Button isPrimary={true} message="Press Here for a surprise ;)" onClick={() => console.log()}/>
            </Link>
            </div>
         </div>
        </main>
        </Suspense>
    )
}