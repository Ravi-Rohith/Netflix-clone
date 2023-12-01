"use client"
import { useCallback, useState } from "react";
import axios from "axios";
import Input from "@/components/input";
import Button from "@/components/button";

const Auth = () => {
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [email, setemail] = useState()

    const [variant, setvariant] = useState('login')

    const toggleVariant = useCallback(
     () => {
        setvariant((Variant) => Variant == 'login' ? 'Sign up' : 'login')
      },
      [],
    )
    const register = useCallback(
      async() => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })
        } catch (error) {
            console.log("error")
        }
      },
      [email, name, password],)
    
    
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
                            <Input id="name" onchange={(ev: any) => setname(ev.target.value)} value={name} type="text" label={variant == 'login' ? 'Username or Email' : 'name'} />

                            {variant == 'Sign up' && (
                                <Input id="email" onchange={(ev: any) => setemail(ev.target.value)} value={email} type="text" label="email" />    
                            )}
                            <Input id="password" onchange={(ev: any)=>setpassword(ev.target.value)} value={password} type="password" label="Password" />

                            <Button onClick={register} text={variant == 'login' ? 'Login' : 'Sign up'} />
                            
                            <p className="mt-12  text-neutral-500 ">
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