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
import QCardContainer from "@/components/QCardContainer";


export interface QCardEntity {
    headscontent: string;
    tailscontent: string;
}

export default function Page() {
    const [qcards, setQcards] = useState<QCardEntity[] | null>();
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
                    qcards?.map((card:QCardEntity, index) => {
                        return (
                            <CarouselItem key={index}>
                                <QCardContainer cardContent={card}/>
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