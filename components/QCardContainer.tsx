"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {QCardEntity} from "@/app/protected/qcards/page";

// todo TS props typization - do the RIGHT way
interface Props {
    cardContent: QCardEntity;
}
// todo: naming convention to display purpose -
//  this function encapsulates a component from third-party
//  UI lib - shadcn - and visual behavior/state as result of user interaction with UI
//  element
export default function QCardContainer({cardContent} : Props) {

    // todo:
    //const {theme, setTheme} = useTheme();

    const [isHeads, setIsHeads] = useState<boolean>(true);

    // todo: naming convention for handler
    const handleFlip = () => {
        setIsHeads(!isHeads);
    }

    return (
        // todo: is it correct passing onClick this way in this use case?
        <Card onClick={handleFlip}>
            <CardHeader>
                <CardTitle/>
                <CardDescription>
                    desc
                </CardDescription>
            </CardHeader>
            <CardContent>
                // content that depends on state:
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
