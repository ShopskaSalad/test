---
sidebar_position: 2
title: Webhooks
description: Webhook
hide_table_of_contents: false
---
## How does Webhook work?

iyzico uses webhooks to notify your application when the transaction is done.(Success, Failure)<br/>
When a payment attempt is made, it is possible to receive the transaction result via HTTP **POST** notification.<br/>The first notification will be sent after **10-15** seconds of the initial payment attempt. 

It is a JSON Payload and server to server HTTP request.<br/>iyzico will keep continue sending notification every 15 minutes until your server responds with a status of **"2xx"**.<br/> Notifications will stop **24 hours** after the initial attempt.

---
<!-- Line -->

## How to activate Webhooks?

After login to iyzico Merchant Portal, you can find the Webhook Notifications under the menu; <br/> **"Settings" > "Merchant Settings" > "Merchant Notifications" (HTTPS URL is required)**.
![Webhook](/img/docImages/webhook.png)
---
<!-- Line -->

## Webhook Notification for Pay with iyzico Payments

The notification body contains the following parameters;

| Parameter | Type | Description |
|:---|:---|:---|
| **iyziEventTime** | long | Unix timestamp value of first notification |
| **iyziEventType** | string | Request type. <br/> **Values: CHECKOUT_FORM_AUTH, BALANCE, BANK_TRANSFER_AUTH** |
| **iyziReferenceCode** | string | A unique reference code for the notification |
| **token** | string | The unique generated token for the payment |
| **status** | string | Payment status.  Value: **SUCCESS** |

---
<!-- Line -->

## Example JSON Payloads

```json title="Successful Balance"
{
 "paymentConversationId": "YOUR_ORDER_ID",
 "merchantId": 1,
 "paymentId": 1642261422,
 "status": "SUCCESS",
 "iyziReferenceCode": "c4854ee4-0d8a-4e6e-b3ab-f9372f4073f9",
 "iyziEventType": "BALANCE",
 "iyziEventTime": 1619968322405
}
```

```json title="Successful PWI"
{
  "paymentConversationId": "YOUR_ORDER_ID",
  "merchantId": 60221,
  "token": "3a7bd7f3-c905-475a-b5a6-d03c043d60c7",
  "status": "SUCCESS",
  "iyziReferenceCode": "d8f556b1-904d-4474-a85e-51e840710bfc",
  "iyziEventType": "CHECKOUT_FORM_AUTH",
  "iyziEventTime": 1620125154047
}
```

```json title="Successful Bank Transfer"
{
  "paymentConversationId": "YOUR_ORDER_ID",
  "merchantId": 60221,
  "token": "ec749ad4-0492-4561-83b6-358bb9af7b83",
  "status": "SUCCESS",
  "iyziReferenceCode": "7a38ee4b-31df-4fe7-bd2d-31e77c3efbc3",
  "iyziEventType": "BANK_TRANSFER_AUTH",
  "iyziEventTime": 1620126097733
}
```
## Validation of Notifications

In order to confirm if the request sent by iyzico, you can use "X-IYZ-SIGNATURE" parameter in the header.<br/> iyzico adds the "X-IYZ-SIGNATURE" parameter to the header and its value can be created with only the merchant's secret key. <br/><br/>
A string with secret Key, eventType, and token should be created with the given order below.<br/> This string should be encrypted with SHA1 first and the result should be encoded with Base64.<br/> The final value should be equal to X-IYZ-SIGNATURE in the header.
<br/>

| Order | Parameter | Description |
|:---|:---|:---|
| 1 | **secretKey** | Merchant's Secret Key |
| 2 | **iyziEventType** | Request type.<br/> **Values: CHECKOUT_FORM_AUTH, BALANCE, BANK_TRANSFER_AUTH** |
| 3 | **token** | The unique generated token for the payment |

<br/>

```json title="Hashing Example"
final String stringToBeHashed = new StringBuilder("secretKey")
                                .append(request.getIyziEventType())
                                .append(request.getToken())
                                .toString();
```