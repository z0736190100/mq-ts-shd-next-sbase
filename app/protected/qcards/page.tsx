'use client'

import {createClient} from '@/utils/supabase/client'
import {useEffect, useState} from 'react'
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/ui/card'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Badge} from "@/components/ui/badge";
import Qcard from "@/components/Qcard";


interface QCard {
    headscontent: string;
    tailscontent: string;
}

export default function Page() {
    const [qcards, setQcards] = useState<QCard[] | null>();
    const supabase = createClient()

    useEffect(() => {
        const getData = async () => {
            const {data} = await supabase.from('qcards').select()
            setQcards(data)
        }
        getData()
    }, [])

    return (
        <Carousel>
            <CarouselContent>
                {
                    qcards?.map((card, index) => {
                        return (
                            <CarouselItem key={index}>
                                <Qcard cardContent={card}/>
                            </CarouselItem>
                        );
                    })
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    );
}