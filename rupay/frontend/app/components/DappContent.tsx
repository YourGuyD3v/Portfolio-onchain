"use client"

import {useAccount} from "wagmi"

export function DappContent() {
    const { isConnected } = useAccount()
    return (
        <div>

            if (isConnected) {
            } else {

            }
            
        </div>
    )
}