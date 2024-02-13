"use client"
import Image from "next/image";
import styled, {css} from "styled-components";
import Button from "@/app/ui/components/buttons/Button"
import React, {useState} from 'react';
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Home() {
  const [noMessage, setNoMessage] = useState('NO');
  const [currMessageNumber, nextMessageNumber] = useState(0);
  const messages = [
    "Noooooo!",
    "Think againn",
    "Pleaseeeeee 🥺",
    "Are you sure??",
    "Not so fucking fast bitch",
    "The button will dissapear if you keep pressing",
    "Your last warning",
    "I'll be dissapearing",
    "Bye"
  ]
  const getNextMessage = () => {
    if (currMessageNumber != messages.length - 1) {
      nextMessageNumber(currMessageNumber+1);
    }
    return messages[currMessageNumber];
  }
  // const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between content-center p-20">
      <div className="container flex flex-col items-center justify-between content-center m-24">
      <h1 className="text-3xl tracking-wide text-red-400 decoration-2 font-semibold m-12">Hi pookie, I have something to ask you :3</h1>
        <Image width={400} height={225} src="/willYouBeMyValentine.gif" alt="alt" className="p-10"/>
        <div className=" flex h-20 space-x-10 justify-items-stretch justify-evenly">
          <Link href="/success">
            <Button isPrimary={true} message="YES" onClick={() => console.log()}/>
          </Link>
          <Button isPrimary={false} message={noMessage} onClick={() => setNoMessage(getNextMessage())}/>
        </div>
      </div>
    </main>
  );
}
