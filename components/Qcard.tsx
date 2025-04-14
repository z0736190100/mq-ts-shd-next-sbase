"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

interface QCard {
    headscontent: string;
    tailscontent: string;
}

const QCard = (props) => {
    const [isHeads, setIsHeads] = useState<boolean>(true);
    // todo:
    //const {theme, setTheme} = useTheme();

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
                        props.cardContent.headscontent :
                        props.cardContent.tailscontent
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

export default QCard;