export const StEverAccountAbi = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["time", "expire"],
    "functions": [
        {
            "name": "constructor",
            "inputs": [
            ],
            "outputs": [
            ]
        },
        {
            "name": "getDetails",
            "inputs": [
                {"name":"answerId","type":"uint32"}
            ],
            "outputs": [
                {"components":[{"name":"user","type":"address"},{"name":"vault","type":"address"},{"name":"version","type":"uint32"}],"name":"value0","type":"tuple"}
            ]
        },
        {
            "name": "addPendingValue",
            "inputs": [
                {"name":"_nonce","type":"uint64"},
                {"name":"_amount","type":"uint128"},
                {"name":"_remainingGasTo","type":"address"}
            ],
            "outputs": [
            ]
        },
        {
            "name": "resetPendingValues",
            "inputs": [
                {"components":[{"name":"amount","type":"uint128"},{"name":"timestamp","type":"uint64"}],"name":"rejectedWithdrawals","type":"map(uint64,tuple)"},
                {"name":"_sendGasTo","type":"address"}
            ],
            "outputs": [
            ]
        },
        {
            "name": "removePendingWithdraw",
            "inputs": [
                {"name":"_nonce","type":"uint64"}
            ],
            "outputs": [
            ]
        },
        {
            "name": "processWithdraw",
            "inputs": [
                {"name":"_satisfiedWithdrawRequests","type":"uint64[]"}
            ],
            "outputs": [
            ]
        },
        {
            "name": "onEmergencyWithdrawToUser",
            "inputs": [
            ],
            "outputs": [
            ]
        },
        {
            "name": "onStartEmergency",
            "inputs": [
                {"name":"_proofNonce","type":"uint64"}
            ],
            "outputs": [
            ]
        },
        {
            "name": "upgrade",
            "inputs": [
                {"name":"_newCode","type":"cell"},
                {"name":"_newVersion","type":"uint32"},
                {"name":"_sendGasTo","type":"address"}
            ],
            "outputs": [
            ]
        },
        {
            "name": "withdrawRequests",
            "inputs": [
            ],
            "outputs": [
                {"components":[{"name":"amount","type":"uint128"},{"name":"timestamp","type":"uint64"}],"name":"withdrawRequests","type":"map(uint64,tuple)"}
            ]
        }
    ],
    "data": [
    ],
    "events": [
        {
            "name": "Receive",
            "inputs": [
                {"name":"amount","type":"uint128"}
            ],
            "outputs": [
            ]
        }
    ],
    "fields": [
        {"name":"_pubkey","type":"uint256"},
        {"name":"_timestamp","type":"uint64"},
        {"name":"_constructorFlag","type":"bool"},
        {"name":"vault","type":"address"},
        {"name":"user","type":"address"},
        {"name":"currentVersion","type":"uint32"},
        {"components":[{"name":"amount","type":"uint128"},{"name":"timestamp","type":"uint64"}],"name":"withdrawRequests","type":"map(uint64,tuple)"}
    ]
} as const
