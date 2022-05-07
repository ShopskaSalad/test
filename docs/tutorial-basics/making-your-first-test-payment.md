---
sidebar_position: 3
title: Making Your First Test Payment
description: Making Your First Test Payment
hide_table_of_contents: false
---

---
Payment APIs can be complicated but PWI.  
Here is the overview of this page;
- First, we will illustrate a **PWI-Initialize** `POST` request.
- Then, we will cover up with **PWI-Retrieve** `POST` section.

---
<!-- Line -->

## Pre-requirements

It is mandatory to cover the links below for a test payment.

- [Setting up a Sandbox Account](./setting-up-a-sandbox)
- [Checking Postman Collection](./checking-postman-collection) 

If so, keep going. 

---
<!-- Line -->

## Step1: PWI-Initialize

[PWI Postman collection](./checking-postman-collection#step1-launch-into) comes with 2(two) serial `POST` requests.  
The following object is a sample **PWI-Initialize** request body.

### Request

```json title="Payload"
{
    "locale": "en", //tr
    "conversationId": "conversationID",
    "price": "10.91",
    "basketId": "basketID",
    "paymentGroup": "OTHER",
    "callbackUrl": "YOUR_CALLBACKURL",
    "currency": "TRY",
    "paidPrice": "49.91",
    "enabledInstallments": [
        2,
        3,
        6,
        9,
        12
    ],
    "buyer": {
        "id": "buyerID",
        "name": "buyerName",
        "surname": "buyerSurname",
        "identityNumber": "11111111111",
        "email": "email@email.com",
        "gsmNumber": "+905350000000",
        "registrationAddress": "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
        "city": "Istanbul",
        "country": "Turkey",
        "ip": "85.34.78.112"
    },
    "shippingAddress": {
        "address": "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
        "contactName": "Contact Name",
        "city": "Istanbul",
        "country": "Turkey"
    },
    "billingAddress": {
        "address": "Burhaniye Mahallesi Atilla Sokak No:7 Üsküdar",
        "contactName": "Contact Name",
        "city": "Istanbul",
        "country": "Turkey"
    },
    "basketItems": [
        {
            "id": "ItemID",
            "price": "10.91",
            "name": "product Name",
            "category1": "Category Name",
            "itemType": "PHYSICAL"
        }
    ]
}
```
Once you have triggered above request, there are 3(three) scenarios you will monitor mostly.  
Happy path includes a variable called, `payWithIyzicoPageUrl`.


### Response

```json title="200"
{
    "status": "success",
    "locale": "en", //tr
    "systemTime": 1619779710035,
    "conversationId": "123456789",
    "token": "a641ab63-0b7b-4a50-bb09-6c7325041acd",
    "tokenExpireTime": 1800,
    "payWithIyzicoPageUrl": "https://sandbox-consumer.iyzico.com/checkout?token=a641ab63-0b7b-4a50-bb09-6c7325041acd&lang=tr"
}
```
<br/>  
To start payment process, render `payWithIyzicoPageUrl` parameter on your browser.  

<br/><br/>  

![Docusaurus](/img/docImages/payWithIyzicoPage.png)  
<br/>
That's it!

<Redirect to="/docs/test"/>


---
<!-- Line -->

### Sample Link

You may generate a payWithIyzicoPageUrl from the following;

[PWI Link Generate](https://gitbook-pwi.herokuapp.com/)


---
<!-- Line -->


## Step2: PWI-Retrieve

**PWI-Retrieve** is the last step of PWI chain.

Basically, we have just accepted a payment on the previous step.  
It is now time to legalize the transaction in this step.  
The following example is a sample **PWI-Retrieve** request body.

### Request

```json title="Payload"
{
    "locale": "en", //tr
    "conversationId": "YOUR_CONVERSATION_ID",
    "token": "YOUR_TOKEN"
}
```
  
Once you have triggered above request, there are 2(two) scenarios you will monitor mostly.  
Happy path includes `SUCCESS` parameter in the `paymentStatus` variable.

---
<!-- Line -->

### Response

```json title="200"
{
    "status": "success",
    "locale": "en", //tr
    "systemTime": 1,
    "conversationId": "YOUR_CONVERSATION_ID",
    "price": 1,
    "paidPrice": 1,
    "installment": 1,
    "paymentId": "GENERIC_PAYMENT_ID",
    "fraudStatus": 1,
    "merchantCommissionRate": 1,
    "merchantCommissionRateAmount": 1,
    "iyziCommissionRateAmount": 1,
    "iyziCommissionFee": 1,
    "binNumber": "000000",
    "lastFourDigits": "0000",
    "basketId": "basketID",
    "currency": "TRY",
    "itemTransactions": [
        {
            "itemId": "ItemID",
            "paymentTransactionId": "GENERIC_PAYMENT_TRANSACTION_ID",
            "transactionStatus": 2,
            "price": 1,
            "paidPrice": 1,
            "merchantCommissionRate": 1,
            "merchantCommissionRateAmount": 1,
            "iyziCommissionRateAmount": 1,
            "iyziCommissionFee": 1,
            "blockageRate": 1,
            "blockageRateAmountMerchant": 1,
            "blockageRateAmountSubMerchant": 1,
            "blockageResolvedDate": "GENERIC_DATE",
            "subMerchantPrice": 1,
            "subMerchantPayoutRate": 1,
            "subMerchantPayoutAmount": 1,
            "merchantPayoutAmount": 1,
            "convertedPayout": {
                "paidPrice": 1,
                "iyziCommissionRateAmount": 1,
                "iyziCommissionFee": 1,
                "blockageRateAmountMerchant": 1,
                "blockageRateAmountSubMerchant": 1,
                "subMerchantPayoutAmount": 1,
                "merchantPayoutAmount": 1,
                "iyziConversionRate": 1,
                "iyziConversionRateAmount": 1,
                "currency": "TRY"
            }
        }
    ],
    "phase": "AUTH",
    "token": "YOUR_TOKEN",
    "callbackUrl": "YOUR_CALLBACK_URL",
    "paymentStatus": "SUCCESS"
}
```
  
Done. You can get transaction details from the admin panel.

## PWI Demo

It is recommended to look for the demo from the link below.

[PWI Demo](https://www.iyzico.com/demo/)


## Finalize

We have just summarize a life-cycle of PWI transaction.  
On the line, there are technical details of the integration.  
Queued, **API** section.