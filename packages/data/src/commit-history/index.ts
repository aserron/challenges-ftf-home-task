import {request,response} from "./commit-history.json"

const options = {
    "headers": {
        "accept": "application/json",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "preferred_color_mode=light; tz=America%2FMontevideo; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light_colorblind%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=America%2FBuenos_Aires; _octo=GH1.1.1033379704.1693374127; _device_id=c535587f855f73b21513e260d6f3adaa; saved_user_sessions=1189390%3AvidloQLMGqWRw3bZXeMl9d_OdLtCsbTjnJlF7-k227xPIjZ8; user_session=vidloQLMGqWRw3bZXeMl9d_OdLtCsbTjnJlF7-k227xPIjZ8; __Host-user_session_same_site=vidloQLMGqWRw3bZXeMl9d_OdLtCsbTjnJlF7-k227xPIjZ8; logged_in=yes; dotcom_user=aserron; has_recent_activity=1; _gh_sess=oWegZLWJFT7xKSGpDpNFyDhIK2nElAKWjJS5Hy%2Blu4nasFgBXFVPGbpgFXxSYIT84WmCIALw%2BNA%2FbaJrVaPqkG%2BswLP61PSCEuuiM%2BLkDuP2OC3V8r6al%2FQ3GoW%2BH%2B9CiU5XZCv0bwlpzqlteoXpeCbq%2BvmHgDisirSIfgojIf2uDIjxo6C23Z9rojy%2BOlygMqihvQ%2FNHlJGdllhC1cMUSADjeCWWLdj%2BvqBR%2B7OiXAS6d%2B%2FuBaZ8kGgfuEJc6GfRDwKLkOUibrau7ieYCO8phan3RBpPuOfh%2F06YM%2B9nLor%2BYEwWmrfWMA3tLRZ2KqoPD6jTzrLPzFpRfReHev53QbxP4%2FDlZbiRUp1co%2BHe66vX42BH%2FC8rqs6g75Lblzd2Hzq9XANlLwfww3wYDTPa0DJxSHMA0O8S5LW3lTlTw0kYmMpZMbV8FRNQhLT0ANl36omuOXlzTl%2BtD%2BjhIwIEWu7AhVAf69AAjPLFi6hAiHRStuHbuk%2FEv%2BghG2PJppUux%2FZUbkGcUCKMfJEdXoMQ6CurdHWEum0qC7XogN8%2F4VKD9rtCtx0JguORyaJIoIy3RWIgn5qsG%2FGDDKMyBnMw42sio4SnHKAddX4GZqrmdfAHHz2b8xPeR2aARPGRLFscO1BC0fdeX3DfEvbIbEVR6TuQnWf0QM8XQRn3gILglj5mTSWotLccOfHyWre02xaK9McIXsAEuQqx4vPSd0Hbyff898z4NEqWCyi6NTS5GWV9IM9lczXld0Wb5ltm01lDCoubiRcd%2F%2Fx8ZOvqLg2lWAIoAs2sjkx0%2F5%2FBYSxHIvu7rxSFJSA8FEsCBfucSeFesyyDQ%2FEWFCNxDRQiNdHwifa1eiW%2Bflto%2FAnXUCBYnHLb48p81vXZjxu0ifMxOfC2ad%2BPoBeqborCy8d3kjNAiSrbTdSZypGseLml5ik5hF4NXEDdD56Y2f7OPmA5%2Bfg7SqnQsxKcsv8IcQzDxqMhm9eEkTW7QFfpl%2BZ4QXpup2XHFPbiYWq1mTAfyN27OkSjskyzbPcXXMrkm5%2Bf13K2pN8ck5QgPlpNiJzoFUz29PDfYdtLK3V9SYFzAze%2FnsSrKHIc2KGPDH%2FpLlzOyqALORgXSgojEMv3SN2lRAaR2EMGPcx%2Fmb%2Bmb5M5QCAitdahBQmYKr%2BQtQ8GYun%2FmeMLc6MZvzhEJI7%2FUnm3iG221XhRSUyfsUWpddpL5F%2F8vZu2YwYcT%2FkPo59e6AsJc6%2BM0IRhLsxonzfLJlwhKORt8g%3D--2TH0LgemqPylZuaY--JH2y08XS1JEvbntf9QX5Cg%3D%3D",
        "Referer": "https://github.com/aserron/challenges-ftf-home-task/graphs/commit-activity",
        "Referrer-Policy": "no-referrer-when-downgrade"
    },
    "body": null,
    "method": "GET"
}
const endpoint = "https://github.com/aserron/challenges-ftf-home-task/graphs/commit-activity-data";

export const getCommitHistory = async () => {
    return fetch(endpoint, options)
        .then(res => res.json())
        .then(data => data)
        .catch(reason => {
            console.error(reason)
        })
}



export const mockGetCommitHistory = async () => {
    
}
