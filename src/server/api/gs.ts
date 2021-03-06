import { GoogleSpreadsheet } from 'google-spreadsheet';

export default defineEventHandler(async (event) => {
    const query = useQuery(event)

    const doc = new GoogleSpreadsheet('1KXGxaTm8NP9iTHZVZMcaum8pGKcVuEIh7XdwpFMzMz4');
    await doc.useServiceAccountAuth({
        // env var values are copied from service account credentials generated by google
        // see "Authentication" section in docs for more info
        client_email: "testaccount@sheets-test1-303216.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCeksz4f1M+hn9A\nQ1RCGrp+S2Vbh+ylwOWbQ0q71TSYZ23eXdcmwD/nhwEwU0R8XwW9JsWperUQBwOY\n0L3sxk2UtYeOug/0ET0qIgTa8lGTBwsMA5v8vRyQP8gLsGeDo5SLMxSTAd3ZyQkM\n15qQdGfcs36jwRa0EFwr2Dpweeh8i9khEZKgxr3SKEE8Goug2XAF80QPmujLbjaW\nUdWGBi1JU8idjB0haR0YFmUBQdfPpBKGjRF44TydE1qk0nSwoJCjFMhu3pLWgKyP\ngWIQjesVhhqJs4/bBZUkWYNwireu52ZJrMLLuP4LDBWE+enN+oDOeHnVTURyXWhI\nbwtK2nChAgMBAAECgf9PxoGBvzQkOZO9PBjWJCfhsNTDyjVPeLTp8NcMQbaqxwot\nlccL1ftLq4rBV7ez6CNtAzwMF6PaV2KIKJfTt3blMevUcAyD+/mv3eHUmEcLWqdN\nsM2hX8zzR1sLQJXFJCJvYt86ZRoUWG6ZODutJk3m/eP2+8RbRpnuVEdKCM4eNpwe\nvVEXdqO1FaDaI0RcLmMgyRlpaNsWNu2yXnJIZ2zwSeI6NFaShLLxjgfljwez1DCU\nugvxKJheJCct46RBMr0/NXeCHCkPkutS7Au646ovHEt04hZ5VedhpuFUAciV0DJL\nX4x5e2t//HwaU681bpQ4A8zOv8uucyyCcq6na+MCgYEAyovxX9QX1RYeaMARiBGp\n+e0AelyXIqhB/ArPNGIcsUuGHjjyXokQwOVypivSegTWt5yMEz6RPFQlnJjOS797\nm1Vl4cWYXgCYDnBoX6QTqm8scQeRs9YDjM+Ivd/In691z5hMz1QemFU83pMXIlxt\nSDe9ZI2JtZbnP5oB9fo3AK8CgYEAyGwGxdQmQT77PwzheXiuuc5WLHVE+zwYoNqS\nhIXOaqrxDorObu8KtyX5Uob1gIvIYhrCr70l7p051KXtGNgzX0kfz+5dy8wnpl2l\nlU2LOxCdoUwuukJma5fRPtsf1iprwJUQnAoEwFBCyR40843oSHGggCgm1D1wFfgO\nA6yy168CgYBpVTGnpkLmm+QgkZIMczM0OB6Bg9lNOrdl/bEYCtXlFeOfn/nbU+iU\niD6BUFTbA90uC4mFEIqzFwegUo8mMWR0uYqMSRgd+q0ZBTgiVM+tWLeB6G/LWEbs\nWZlBNTm+YZ8g4JFBWPu4OMu47EGhqvNiFSq3OiwddWa5WrweUYt9HQKBgDHlkxoV\nYyDDSVG9JzVSsk1X7WRMHcxefdMuF2Qe2/D6deEk9Zfwsz49mgDN0LkcE9s4xldy\nQ8tQIWGrnYed68xBLEZcFcXzIbvtfJfbIlqmHFhX2xpMBaurtFBtxVNQZFshwWzX\noa8vTDE97/jiz32ZrFe7p08XrJwLkZGgoTXJAoGAKqeOo7L0QczfN/H5FIDeH8SP\n2NdHTU97iXtj7+UFZvfOPxlIyyX1AUv1xp7JPLSFnQkkoE43xyy04f50oecdZBPc\nd58M/WxE/kWibS23V9pK5OPZQgpzqEnazb6Umd2PbihbqpWxrlAWZnErgvs9HtwB\nRMBdK4fmmi5TANo/rlQ=\n-----END PRIVATE KEY-----\n",
    });

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    let date = new Date();
    date.setMilliseconds(3 * 60 * 60 * 1000);
    let f_date = `${date.toLocaleString()}`;

    await sheet.addRows([
        { name: query.name, mail: query.mail, date: f_date, type: query.type, product: query.product, price: query.price}
    ]);
    
    return {
        api: 'ok'
    }
})