import { SignIn, useUser } from '@clerk/nextjs'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const Play = () => {
    return (
        <div className="w-screen bg-[#d0f0c0] h-screen ">
            <div className="flex  justify-around py-4  w-screen lg:py-5 lg:px-10 lg:justify-between items-center">
                <div className=" font-extrabold text-xl lg:font-extrabold lg:text-3xl">
                    Virtual Plant
                </div>
                <div className="flex gap-4 lg:gap-10 ">

                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}

export default Play;