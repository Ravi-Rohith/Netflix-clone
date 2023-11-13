"use client"
import { useState } from "react";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

const Auth = () => {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    
    return (
        <div className="absolute h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-no-repeat bg-cover bg-fixed">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>

                <div className="flex justify-center">

                <div className="my-8 px-16 py-16 mt-2 lg:max-w-md self-center lg:w-2/5 rounded-md bg-black bg-opacity-80">
                        <h2 className="text-white font-bold text-4xl mb-8">Sign in</h2>
                        <div className="flex flex-col gap-4">
                            <Input id="username" onchange={(ev: any) => setusername(ev.target.value)} value={username} type="text" label="Enter Username or Email" />
                            
                            <Input id="password" onchange={(ev: any)=>setpassword(ev.target.value)} value={password} type="password" label="Password" />

                            <Button text="Login" />
                            
                            <p className="mt-12 ml-12 text-neutral-500 ">
                                New to Netflix?
                                <span className="text-white ml-1 hover:underline
                                cursor-pointer">Create an account</span>
                            </p>

                        </div>
                </div>
                </div>
            </div>
            
        </div>
    )

}

export default Auth;