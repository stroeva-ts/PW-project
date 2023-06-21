import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = 
{
    testDir: "tests/api",
    timeout: 30000,
    expect: 
    {
        timeout: 5000,
    },
    retries: 1,

    reporter: 
    [   
        ["list"],
        ["html"],
    ],

    use: 
    {
        baseURL: "https://myretro-stg.tochkavhoda.ru/api/",
        headless: true,
        actionTimeout:5000,
        extraHTTPHeaders: 
        {
            'Accept': "application/json;charset=UTF-8",
            'Cookie': "myretro=Fe26.2**1d593f254691822490b8e3c1e4c74a8d7680e44fc638ff83e5244992fdb18877*-NfMX9uIRx5k9d7XLXVEHw*Nm_IVmZ0YxsXid3eeeusWQ**8b38b4454ace91e10520a4b220a8fd5299dcdee1974ea76506c886e603cce2d7*g-MpXvJL3fqH2O-sLTrMSBXWhvqmz7OGlkbquO5l7ss"
        }
    },

    
};
export default config;