import { Smsnotification } from "../classes/smsnotification";


export function smsNotificationFactory (userNotificationType : string){
    return userNotificationType == 'sms' ? new Smsnotification() : ''

}
export function emailNotificationFactory (userNotificationType : string){
    return userNotificationType == 'email' ? new Smsnotification() : ''

}
export function whataapNotificationFactory (userNotificationType : string){
    return userNotificationType == 'whataap' ? new Smsnotification() : ''

}

