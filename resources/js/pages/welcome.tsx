import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import logo from '../../../public/logo_aula.png';
import Footer from '../components/footer';
import PricingSection from '@/components/pricing-section';
import Header from '../components/header';
import ServicesSection from '@/components/services-section';
import TeachersSection from '@/components/teachers-section';


export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Learn Spanish Online">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className='w-full'>   
                <header className="w-full text-white shadow-lg">

                <div className="container mx-auto flex justify-start">
                   <img src={logo} alt="Logo Aula Español" className="h-19 mt-4 mb-4" />
                </div>
                    
                    <nav className="flex items-center justify-end gap-4 mb-2">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    // className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] bg-blue-400"
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white bg-blue-400"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    // className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white bg-blue-400"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                    
                </header>

            </div>

                    <Header/>

                    <ServicesSection/>

                    <TeachersSection/>

                    <PricingSection/>

                    <Footer/>

        </>
    );
}
