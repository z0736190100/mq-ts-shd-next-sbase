"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {QCardEntity} from "@/app/protected/qcards/page";


interface Props {
    cardContent: QCardEntity;
}

export default function QCardContainer({cardContent} : Props) {

    // todo:
    //const {theme, setTheme} = useTheme();

    const [isHeads, setIsHeads] = useState<boolean>(true);

    const handleFlip = () => {
        setIsHeads(!isHeads);
    }

    return (
        <Card onClick={handleFlip}>
            <CardHeader>
                <CardTitle/>
                <CardDescription>
                    desc
                </CardDescription>
            </CardHeader>
            <CardContent>
                {
                    isHeads ?
                        cardContent.headscontent :
                        cardContent.tailscontent
                }
            </CardContent>
            <CardFooter>
                <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                    tags here
                </Badge>
            </CardFooter>
        </Card>
    );
}
