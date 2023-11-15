"use client"
import { useCallback, useState } from "react";
import Input from "@/app/components/input";
import Button from "@/app/components/button";

const Auth = () => {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const [Email, setEmail] = useState()

    const [variant, setvariant] = useState('login')

    const toggleVariant = useCallback(
      () => {
        setvariant((Variant) => Variant == 'login' ? 'Sign up' : 'login')
      },
      [],
    )
    
    
    return (
        <div className="absolute h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-no-repeat bg-cover bg-fixed">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>

                <div className="flex justify-center self-center">

                <div className="my-8 px-16 py-16 mt-2 lg:max-w-md self-center lg:w-2/5 rounded-md bg-black bg-opacity-80">
                        <h2 className="text-white font-bold text-4xl mb-8">{variant == 'login' ? 'Login' : 'Sign up'}</h2>
                        <div className="flex flex-col items-center gap-4">
                            <Input id="username" onchange={(ev: any) => setusername(ev.target.value)} value={username} type="text" label={variant == 'login' ? 'Username or Email' : 'Username'} />

                            {variant == 'Sign up' && (
                                <Input id="email" onchange={(ev: any) => setEmail(ev.target.value)} value={Email} type="text" label="Email" />    
                            )}
                            <Input id="password" onchange={(ev: any)=>setpassword(ev.target.value)} value={password} type="password" label="Password" />

                            <Button text={variant == 'login' ? 'Login' : 'Sign up'} />
                            
                            <p className="mt-12 ml-12 text-neutral-500 ">
                                {variant == 'login' ? 'New to Netflix?' : 'Alerady have an account?'}
                                <span onClick={toggleVariant} className="text-white ml-1 hover:underline
                                cursor-pointer">{variant == 'login' ? 'Create an account' : 'Login '}</span>
                            </p>

                        </div>
                </div>
                </div>
            </div>
            
        </div>
    )

}

export default Auth;