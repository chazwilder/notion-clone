"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="sm:text-5xl md:text-6xl text-3xl font-bold">
                Your Ideas, Documents, and Notes. Unified. Welcome to <span className="underline">Jotion</span>.
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is a connected workspace for your team to collaborate on ideas, documents, and notes.
            </h3>
            <Button>
                Get Started
                <ArrowRightIcon className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    );
}

export default Heading;